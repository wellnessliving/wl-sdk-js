/**
 * Entry point to verify user authorization by email and phone number via sending and checking otp code.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Passport_Login_Enter_PassportOtpModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Whether OTP code will be sending to user via email.
   * `true` if OTP code is sending through email,
   * `false` if OTP code is sending through phone number.
   *
   * @get get
   * @type {boolean}
   */
  this.is_mail = false;

  /**
   * Whether OTP code will be sending to user via email.
   *  `true` if OTP code is sending through phone number,
   *  `false` if OTP code is sending through email.
   *
   * @get get
   * @type {boolean}
   */
  this.is_phone = false;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Otp code integer that was random generated.
   *
   * @post post
   * @type {string}
   */
  this.s_otp_code = "";

  /**
   * User key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Passport_Login_Enter_PassportOtpModel);

/**
 * @inheritDoc
 */
Wl_Passport_Login_Enter_PassportOtpModel.prototype.config=function()
{
  return {"a_field": {"is_mail": {"get": {"get": true}},"is_phone": {"get": {"get": true}},"k_business": {"get": {"get": true}},"s_otp_code": {"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};