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
   * Number of attempts left to submit the correct otp code.
   *
   * @post result
   * @type {number}
   */
  this.i_attempt_left = 0;

  /**
   * Type of delivery strategy from {@link Wl_Passport_Login_Enter_OtpDeliveryStrategySid}.
   *
   * @get get
   * @type {number}
   */
  this.id_delivery_strategy = 0;

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
   * @post get
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
   * Priority of delivery.
   *
   * Fixed values `sms` and `email` are supported.
   * Should be given in priority order comma-separated.
   *
   * @get get
   * @type {string}
   */
  this.text_delivery_priority = "";

  /**
   * Delivery channel that was selected based on the given priorities and user data.
   *
   * Fixed values `sms` and `email` are supported. Only one value is returned.
   *
   * @get result
   * @type {string}
   */
  this.text_delivery_selected = "";

  /**
   * Phone number masked with `*` symbols in case if we have priority sending and sms sending was selected.
   *
   * @get result
   * @type {string}
   */
  this.text_phone_masked = "";

  /**
   * User key.
   *
   * @get get
   * @post get
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

WlSdk_ModelAbstract.extend(Wl_Passport_Login_Enter_PassportOtpModel);

/**
 * @inheritDoc
 */
Wl_Passport_Login_Enter_PassportOtpModel.prototype.config=function()
{
  return {"a_field": {"i_attempt_left": {"post": {"result": true}},"id_delivery_strategy": {"get": {"get": true}},"is_mail": {"get": {"get": true}},"is_phone": {"get": {"get": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"s_otp_code": {"post": {"post": true}},"text_delivery_priority": {"get": {"get": true}},"text_delivery_selected": {"get": {"result": true}},"text_phone_masked": {"get": {"result": true}},"uid": {"get": {"get": true},"post": {"get": true}},"url_redirect": {"post": {"result": true}}}};
};