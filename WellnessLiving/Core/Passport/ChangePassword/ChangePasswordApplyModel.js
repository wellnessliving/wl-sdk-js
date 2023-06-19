/**
 * Point to finish password change procedure.
 *
 * It advance post {@link Core_Passport_ChangePassword_ChangePasswordBeginModel} endpoint.
 * Set into {@link Core_Passport_ChangePassword_ChangePasswordBeginModel.url_reset} field URL to page
 * where you go to get new password from user.
 * It will send to user mail with "reset password" link.
 *
 * When user follows to your page, get <tt>text_mail</tt> and <tt>text_code</tt> from URL.
 *
 * Post this model to set a password for user.
 *
 * Use <tt>text_mail</tt> as value for {@link Core_Passport_ChangePassword_ChangePasswordApplyModel.text_login} and
 * {@link Core_Passport_ChangePassword_ChangePasswordApplyModel.text_mail},
 * <tt>text_code</tt> - for {@link Core_Passport_ChangePassword_ChangePasswordApplyModel.text_code}.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Passport_ChangePassword_ChangePasswordApplyModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Verification code.
   *
   * <b>Required!</b>
   *
   * Get it from link to "password reset" page.
   *
   * @post get
   * @type {string}
   */
  this.text_code = "";

  /**
   * User's login.
   *
   * <b>Required!</b>
   *
   * Get it from link to "password reset" page.
   *
   * @post get
   * @type {string}
   */
  this.text_login = "";

  /**
   * User's email.
   *
   * <b>Required!</b>
   *
   * Get it from link to "password reset" page.
   *
   * @post get
   * @type {string}
   */
  this.text_mail = "";

  /**
   * New password.
   *
   * <b>Required!</b>
   *
   * @post post
   * @type {string}
   */
  this.text_password = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Passport_ChangePassword_ChangePasswordApplyModel);

/**
 * @inheritDoc
 */
Core_Passport_ChangePassword_ChangePasswordApplyModel.prototype.config=function()
{
  return {"a_field": {"text_code": {"post": {"get": true}},"text_login": {"post": {"get": true}},"text_mail": {"post": {"get": true}},"text_password": {"post": {"post": true}}}};
};