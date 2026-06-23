/**
 * Entry point to verify user authorization by email and phone number via sending and checking otp code.
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
  this.i_attempt_left = 0;

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
  this.s_jwt_token = "";

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
  this.uid = "";

  /**
   * Redirect url after successful authorization.
   *
   * @post result
   * @type {string}
   */
  this.url_redirect = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Passport_Login_Register_RegisterOtpModel);

/**
 * @inheritDoc
 */
Wl_Passport_Login_Register_RegisterOtpModel.prototype.config=function()
{
  return {"a_field": {"i_attempt_left": {"post": {"result": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"s_jwt_token": {"post": {"result": true}},"s_otp_code": {"post": {"post": true}},"text_mail": {"get": {"get": true}},"text_phone": {"get": {"get": true}},"uid": {"post": {"result": true}},"url_redirect": {"post": {"result": true}}}};
};