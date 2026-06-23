/**
 * Sends to user "password recovery" mail.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Passport_ChangePassword_ChangePasswordBeginModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The characters to pass captcha test.
   *
   * Specify this only if server requires captcha.
   *
   * @post post
   * @type {string}
   */
  this.text_captcha = "";

  /**
   * The error code. This will be an empty string if the email has been sent successfully.
   *
   * @post result
   * @type {string}
   */
  this.text_error = undefined;

  /**
   * The user's email. This is a required value.
   *
   * @post post
   * @type {string}
   */
  this.text_mail = "";

  /**
   * The URL for the password reset page. This link will be used in a password reset email.
   *
   * Specify this only if you want to send the user to a custom password reset page.
   * If empty, the default URL page will be used.
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
  return {"a_field":{"text_captcha":{"post":{"post":true}},"text_error":{"post":{"result":true}},"text_mail":{"post":{"post":true}},"url_reset":{"post":{"post":true}}}};
};

/**
 * Sends to user "password recovery" mail.
 *
 * Accepts the user's email address and an optional custom reset-page URL, validates the input,
 * optionally checks a CAPTCHA, and sends a password reset email containing a link the user can follow
 * to set a new password using [ChangePasswordApplyApi](/Core/Passport/ChangePassword/ChangePasswordApply.json).
 *
 * @function
 * @name Core_Passport_ChangePassword_ChangePasswordBeginModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
