/**
 * Gets the user ID for the current user and a password reset URL.
 *
 * @augments WlSdk_ModelAbstract
 * @mixes WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Passport_Login_InfoModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = '';

  /**
   * Key of a user that is currently signed in.
   *
   * <tt>null</tt> if user is not signed in.
   *
   * @get result
   * @type {?string}
   */
  this.uid = null;

  /**
   * URL to change password.
   *
   * <tt>null</tt> if is not initialized.
   *
   * @get result
   * @type {?string}
   */
  this.url_password_change = null;

  /**
   * URL to register page.
   *
   * @get result
   * @type {string}
   */
  this.url_register = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Passport_Login_InfoModel);

/**
 * @inheritDoc
 */
Wl_Passport_Login_InfoModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"get": {"get": true}},"uid": {"get": {"result": true}},"url_password_change": {"get": {"result": true}},"url_register": {"get": {"result": true}}}};
};