/**
 * Confirms email of a new user and completes registration.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Passport_Login_Register_RegisterConfirmModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The unique registration code.
   *
   * @post get
   * @type {string}
   */
  this.text_code = "";

  /**
   * The user's login.
   *
   * @post get
   * @type {string}
   */
  this.text_login = "";

  /**
   * The user's email.
   *
   * @post get
   * @type {string}
   */
  this.text_mail = "";

  /**
   * The key of the new registered user.
   *
   * @post result
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Passport_Login_Register_RegisterConfirmModel);

/**
 * @inheritDoc
 */
Core_Passport_Login_Register_RegisterConfirmModel.prototype.config=function()
{
  return {"a_field":{"text_code":{"post":{"get":true}},"text_login":{"post":{"get":true}},"text_mail":{"post":{"get":true}},"uid":{"post":{"result":true}}}};
};

/**
 * Confirms email of a new user and completes registration.
 *
 * Accepts the email, login, and verification code obtained from the confirmation link sent by [RegisterApi](/Core/Passport/Login/Register/Register.json),
 * validates them against the pending registration record, creates the user account, and returns the new user's UID.
 *
 * @function
 * @name Core_Passport_Login_Register_RegisterConfirmModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
