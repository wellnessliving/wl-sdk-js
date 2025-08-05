const fs = require('fs');
const path = require('path');

const rootDir = process.argv[2] || '.';

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fileName = path.basename(filePath);
  const className = fileName.replace(/\.js$/, '');

  const errors = [];

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
  console.log('✅ Model is valid.');
  process.exit(0);
} else {
  console.log('⚠️ Found errors:');
  for (const { file, errors } of results) {
    console.log(`\n${file}:`);
    errors.forEach((err) => console.log('  ' + err));
  }
  process.exit(1);
}
