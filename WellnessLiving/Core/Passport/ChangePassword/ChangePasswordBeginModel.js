/**
 * Point to start password change procedure.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Passport_ChangePassword_ChangePasswordBeginModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Characters to pass captcha test.
   *
   * @post post
   * @type {string}
   */
  this.text_captcha = "";

  /**
   * Error code. Empty string if mail is sent successfully.
   *
   * @post result
   * @type {string}
   */
  this.text_error = undefined;

  /**
   * User's email.
   *
   * @post post
   * @type {string}
   */
  this.text_mail = "";

  /**
   * URL to password reset page. This link will be used in a password reset email.
   *
   * If empty, URL to default page will be used.
   *
   * @post post
   * @type {string}
   */
  this.url_reset = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Passport_ChangePassword_ChangePasswordBeginModel);

/**
 * @inheritDoc
 */
Core_Passport_ChangePassword_ChangePasswordBeginModel.prototype.config=function()
{
  return {"a_field": {"text_captcha": {"post": {"post": true}},"text_error": {"post": {"result": true}},"text_mail": {"post": {"post": true}},"url_reset": {"post": {"post": true}}}};
};