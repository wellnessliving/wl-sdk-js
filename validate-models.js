const fs = require('fs');
const path = require('path');

const rootDir = process.argv[2] || '.';

/**
 * Finds all fields declared in the class.
 */
function extractClassFields(content) {
  const fieldRegex = /this\.([a-zA-Z0-9_]+)\s*=/g;
  const fields = [];
  let match;
  while ((match = fieldRegex.exec(content)) !== null) {
    if(match[1] === '_s_key') {
      continue;
    }
    fields.push(match[1]);
  }
  return fields;
}

/**
 * Parse `config()` method to extract keys.
 */
function extractConfigKeys(content) {
  // Ищем тело config
  const configRegex = new RegExp(`\\.prototype\\.config\\s*=\\s*function\\s*\\(\\)\\s*{([\\s\\S]*?};)\\s*};`, 'm');
  const match = content.match(configRegex);
  if (!match) {
    return [];
  }

  const body = match[1].trim().replace('return ', '').replace(';', '');
  if(!body) {
    return [];
  }

  return JSON.parse(body);
}

function checkModel(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath);

  const errors = [];

  const classMatch = content.match(/function\s+([A-Za-z0-9_]+)\s*\(/);
  const className = classMatch ? classMatch[1] : null;

  if (!className || !className.endsWith('Model')) {
    errors.push('❌ Class name not found (pattern: function ClassNameModel())');
    return errors;
  }

  // Base checks.
  if (!fileName.endsWith('Model.js')) {
    errors.push('❌ File name must end with Model.js');
  }

  if (content.includes('Core_Spa_Model.')) {
    errors.push('❌ Core_Spa_Model is not allowed in SDK.');
  }

  if (!content.includes('WlSdk_ModelAbstract.apply(this);')) {
    errors.push('❌ WlSdk_ModelAbstract.apply(this); not found');
  }

  if (
    !content.includes('WlSdk_ModelAbstract.extend(') &&
    !content.includes('WlSdk_ModelAbstract.extends(')
  ) {
    errors.push('❌ WlSdk_ModelAbstract.extend(); not found');
  }

  const expectedConfig = `${className}.prototype.config=function()`;
  if (!content.replaceAll(' ', '').includes(expectedConfig)) {
    errors.push(`❌ ${expectedConfig} not found`);
    return errors;
  }

  // --- Новый функционал ---
  const fields = extractClassFields(content);
  let configKeys = {};
  try {
    configKeys = extractConfigKeys(content);
    if(!configKeys.hasOwnProperty('a_field')) {
      errors.push('❌ config() must contain "a_field" key');
      return errors;
    }

    configKeys = configKeys.a_field;
  } catch (e) {
    errors.push(`❌ Invalid content config()`);
    return errors;
  }

  // Field has in class, but not in config.
  for (const field of fields) {
    if(field === 'ERROR_SILENT' || field === 'ACTIVE_OVERLAY') {
      errors.push(`❌ ${field} is not allowed in SDK.`);
      continue;
    }

    if (!configKeys.hasOwnProperty(field)) {
      errors.push(`❌ Field "${field}" is declared in class but missing in config()`);
    }
  }

  // Field has in config but not in class.
  for (const key of Object.keys(configKeys)) {
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
      const fileErrors = checkModel(filePath);
      if (fileErrors.length) {
        errors.push({ file: filePath, errors: fileErrors });
      }
    }
  }

  return errors;
}

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
