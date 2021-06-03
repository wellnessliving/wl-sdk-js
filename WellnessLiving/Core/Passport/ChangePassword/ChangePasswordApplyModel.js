/**
 * Point to finish password change procedure.
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
   * @post get
   * @type {string}
   */
  this.text_code = "";

  /**
   * User's login.
   *
   * @post get
   * @type {string}
   */
  this.text_login = "";

  /**
   * User's email.
   *
   * @post get
   * @type {string}
   */
  this.text_mail = "";

  /**
   * New password.
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