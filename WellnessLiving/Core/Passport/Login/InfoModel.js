/**
 * Gets the user ID for the current user and a password reset URL.
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
   * The current user key.
   *
   * It is `null` if user is not signed in.
   *
   * @get result
   * @type {?string}
   */
  this.uid = null;

  /**
   * A URL that a user can visit to reset their password.
   *
   * @get result
   * @type {string}
   */
  this.url_password_change = undefined;

  /**
   * URL to register page.
   *
   * @get result
   * @type {string}
   */
  this.url_register = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Passport_Login_InfoModel);

/**
 * @inheritDoc
 */
Core_Passport_Login_InfoModel.prototype.config=function()
{
  return {"a_field": {"uid": {"get": {"result": true}},"url_password_change": {"get": {"result": true}},"url_register": {"get": {"result": true}}}};
};