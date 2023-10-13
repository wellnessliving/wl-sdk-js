/**
 * Checks if email address exists in our system.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Passport_User_Email_EmailExistModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Whether email address exist.
   *
   * @get result
   * @type {boolean}
   */
  this.is_exist = false;

  /**
   * Email address.
   *
   * @get get
   * @type {string}
   */
  this.text_email = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Passport_User_Email_EmailExistModel);

/**
 * @inheritDoc
 */
Core_Passport_User_Email_EmailExistModel.prototype.config=function()
{
  return {"a_field": {"is_exist": {"get": {"result": true}},"text_email": {"get": {"get": true}}}};
};