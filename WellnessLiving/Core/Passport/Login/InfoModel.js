/**
 * Returns information about user that is currently signed in.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Passport_Login_InfoModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * ID of a user that is currently signed in. <tt>null</tt> if user is not signed in.
   *
   * @get result
   * @type {?number}
   */
  this.uid = null;

  /**
   * URL to change password.
   *
   * @get result
   * @type {string}
   */
  this.url_password_change = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Passport_Login_InfoModel);

/**
 * @inheritDoc
 */
Core_Passport_Login_InfoModel.prototype.config=function()
{
  return {"a_field": {"uid": {"get": {"result": true}},"url_password_change": {"get": {"result": true}}}};
};