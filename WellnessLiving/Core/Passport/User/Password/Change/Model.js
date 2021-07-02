/**
 *
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Passport_User_Password_Change_Model()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Message if password changed successfully.
   *
   * @post result
   * @type {string}
   */
  this.message = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Passport_User_Password_Change_Model);

/**
 * @inheritDoc
 */
Core_Passport_User_Password_Change_Model.prototype.config=function()
{
  return {"a_field": {"message": {"post": {"result": true}}}};
};