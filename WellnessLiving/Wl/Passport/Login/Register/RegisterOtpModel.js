/**
 * Sends an OTP code to the user's email or phone number to initiate authorization.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Passport_Login_Register_RegisterOtpModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Number of attempts left to submit the correct otp code.
   *
   * @post result
   * @type {number}
   */
  this.i_attempt_left = undefined;

  /**
   * Business key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * JWT token generated after successful otp validation.
   *
   * @post result
   * @type {string}
   */
  this.s_jwt_token = undefined;

  /**
   * Otp code integer that was random generated.
   *
   * @post post
   * @type {string}
   */
  this.s_otp_code = "";

  /**
   * Email address OTP code will be sent to.
   *
   * @get get
   * @type {string}
   */
  this.text_mail = "";

  /**
   * Phone number OTP code will be sent to.
   *
   * @get get
   * @type {string}
   */
  this.text_phone = "";

  /**
   * Key of the user, which was signed in after successful otp verification.
   *
   * @post result
   * @type {string}
   */
  this.uid = undefined;

  /**
   * Redirect url after successful authorization.
   *
   * @post result
   * @type {string}
   */
  this.url_redirect = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Passport_Login_Register_RegisterOtpModel);

/**
 * @inheritDoc
 */
Wl_Passport_Login_Register_RegisterOtpModel.prototype.config=function()
{
  return {"a_field":{"i_attempt_left":{"post":{"result":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"s_jwt_token":{"post":{"result":true}},"s_otp_code":{"post":{"post":true}},"text_mail":{"get":{"get":true}},"text_phone":{"get":{"get":true}},"uid":{"post":{"result":true}},"url_redirect":{"post":{"result":true}}}};
};

/**
 * Sends an OTP code to the user's email or phone number to initiate authorization.
 *
 * Checks the OTP rate limit, generates a new code for the given user, and dispatches it via email, SMS, or
 * both depending on `$is_mail` and `$is_phone`. The user must not be already signed in and must not be an admin.
 *
 * @function
 * @name Wl_Passport_Login_Register_RegisterOtpModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Verifies the submitted OTP code and establishes an authorized session for the user.
 *
 * Validates the OTP code for the given user, signs in the session, fires the post-login event,
 * completes business registration if applicable, and returns the redirect URL for the business frontend.
 *
 * @function
 * @name Wl_Passport_Login_Register_RegisterOtpModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
