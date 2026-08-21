'use strict';

const fs = require('fs');

/**
 * Returns the base class a generated model must extend.
 *
 * If a hand-written `<ClassName>Abstract.js` file sits next to where the model file is (or would
 * be) generated, that abstract class is used as the base - it must itself extend
 * `WlSdk_ModelAbstract`. Otherwise the model extends `WlSdk_ModelAbstract` directly.
 *
 * @param {string} className Model class name, e.g. `Core_Passport_Login_Enter_NotepadModel`.
 * @param {string} modelFilePath Path to the model's own `.js` file (generated or existing).
 * @returns {string} Name of the base class to extend.
 */
function getModelBaseClass(className, modelFilePath)
{
  const abstractFilePath = modelFilePath.replace(/Model\.js$/, 'ModelAbstract.js');
  return fs.existsSync(abstractFilePath) ? className + 'Abstract' : 'WlSdk_ModelAbstract';
}

module.exports = { getModelBaseClass };
