const fs = require('fs');
const path = require('path');

const rootDir = process.argv[2] || '.';

/**
 * Находит все поля, объявленные в классе через this.
 */
function extractClassFields(content) {
  const fieldRegex = /this\.([a-zA-Z0-9_]+)\s*=/g;
  const fields = [];
  let match;
  while ((match = fieldRegex.exec(content)) !== null) {
    fields.push(match[1]);
  }
  return fields;
}

/**
 * Находит все ключи, возвращаемые в методе config()
 */
function extractConfigKeys(content, className) {
  // Ищем тело config
  const configRegex = new RegExp(`${className}\\.prototype\\.config\\s*=\\s*function\\s*\\(\\)\\s*{([\\s\\S]*?)}`, 'm');
  const match = content.match(configRegex);
  if (!match) return [];

  const body = match[1];

  // Ищем return { ... };
  const returnObjRegex = /return\s*{([\s\S]*?)}/m;
  const returnMatch = body.match(returnObjRegex);
  if (!returnMatch) return [];

  const keysBlock = returnMatch[1];
  const keys = [];

  // Ищем ключи вида 'field': { ... } или field: { ... }
  const keyRegex = /['"]?([a-zA-Z0-9_]+)['"]?\s*:/g;
  let keyMatch;
  while ((keyMatch = keyRegex.exec(keysBlock)) !== null) {
    keys.push(keyMatch[1]);
  }

  return keys;
}

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath);
  const className = fileName.replace(/\.js$/, '');

  const errors = [];

  // Базовые проверки
  if (!fileName.endsWith('Model.js')) {
    errors.push('❌ File name must end with Model.js');
  }

  if (content.includes('Core_Spa_Model')) {
    errors.push('❌ Core_Spa_Model is not allowed in SDK.');
  }

  if (!content.includes('WlSdk_ModelAbstract.apply(this);')) {
    errors.push('❌ WlSdk_ModelAbstract.apply(this); not found');
  }

  if (!content.includes('WlSdk_ModelAbstract.extend(')) {
    errors.push('❌ WlSdk_ModelAbstract.extend(); not found');
  }

  const expectedConfig = `${className}.prototype.config=function()`;
  if (!content.includes(expectedConfig)) {
    errors.push(`❌ ${expectedConfig} not found`);
  }

  // --- Новый функционал ---
  const fields = extractClassFields(content);
  const configKeys = extractConfigKeys(content, className);

  // Поля есть в классе, но нет в config
  for (const field of fields) {
    if (!configKeys.includes(field)) {
      errors.push(`❌ Field "${field}" is declared in class but missing in config()`);
    }
  }

  // Поля есть в config, но нет в классе
  for (const key of configKeys) {
    if (!fields.includes(key)) {
      errors.push(`❌ Key "${key}" exists in config() but missing in class`);
    }
  }

  return errors;
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  let errors = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      errors = errors.concat(walk(filePath));
    } else if (file.endsWith('Model.js')) {
      const fileErrors = checkFile(filePath);
      if (fileErrors.length) {
        errors.push({ file: filePath, errors: fileErrors });
      }
    }
  }

  return errors;
}

// Запуск
const results = walk(rootDir);

if (results.length === 0) {
  console.log('✅ All models are valid.');
  process.exit(0);
} else {
  console.log('⚠️ Found errors:');
  for (const { file, errors } of results) {
    console.log(`\n${file}:`);
    errors.forEach((err) => console.log('  ' + err));
  }
  process.exit(1);
}
