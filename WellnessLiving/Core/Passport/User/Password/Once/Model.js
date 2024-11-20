/**
 *
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Passport_User_Password_Once_Model()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * User password.
   *
   * @post result
   * @type {string}
   */
  this.password = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Passport_User_Password_Once_Model);

/**
 * @inheritDoc
 */
Core_Passport_User_Password_Once_Model.prototype.config=function()
{
  return {"a_field": {"password": {"post": {"result": true}}}};
};