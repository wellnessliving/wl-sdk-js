/**
 * Saves for user new password.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Passport_ChangePassword_ChangePasswordApplyModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The verification code, which can be obtained from the "reset password" email link. This is a required value.
   *
   * @post get
   * @type {string}
   */
  this.text_code = "";

  /**
   * The user's login, which can be obtained from the "reset password" email link. This is a required value.
   *
   * @post get
   * @type {string}
   */
  this.text_login = "";

  /**
   * The user's email address, which can be obtained from the "reset password" email link. This is a required value.
   *
   * @post get
   * @type {string}
   */
  this.text_mail = "";

  /**
   * The user's new password. This is a required value.
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
  return {"a_field":{"text_code":{"post":{"get":true}},"text_login":{"post":{"get":true}},"text_mail":{"post":{"get":true}},"text_password":{"post":{"post":true}}}};
};

/**
 * Saves for user new password.
 *
 * Accepts the login, email, verification code (from the reset password link), and the new password,
 * validates each against the stored state, and updates the user's password. If the user is not already
 * signed in, a new session is started for them.
 *
 * @function
 * @name Core_Passport_ChangePassword_ChangePasswordApplyModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
