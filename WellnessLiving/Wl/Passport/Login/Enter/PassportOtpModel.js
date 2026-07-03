/**
 * Sends an OTP code to the user's email or phone number to initiate authorization.
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
  this.i_attempt_left = undefined;

  /**
   * Type of delivery strategy from {@link Wl_Passport_Login_Enter_OtpDeliveryStrategyEnum}.
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
  this.text_delivery_selected = undefined;

  /**
   * Phone number masked with `*` symbols in case if we have priority sending and sms sending was selected.
   *
   * @get result
   * @type {string}
   */
  this.text_phone_masked = undefined;

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
  this.url_redirect = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Passport_Login_Enter_PassportOtpModel);

/**
 * @inheritDoc
 */
Wl_Passport_Login_Enter_PassportOtpModel.prototype.config=function()
{
  return {"a_field":{"i_attempt_left":{"post":{"result":true}},"id_delivery_strategy":{"get":{"get":true}},"is_mail":{"get":{"get":true}},"is_phone":{"get":{"get":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"s_otp_code":{"post":{"post":true}},"text_delivery_priority":{"get":{"get":true}},"text_delivery_selected":{"get":{"result":true}},"text_phone_masked":{"get":{"result":true}},"uid":{"get":{"get":true},"post":{"get":true}},"url_redirect":{"post":{"result":true}}}};
};

/**
 * Sends an OTP code to the user's email or phone number to initiate authorization.
 *
 * Checks the OTP rate limit, generates a new code for the given user, and dispatches it according to the
 * chosen delivery strategy. The user must not be already signed in and must not be an admin.
 *
 * There are two ways to specify the delivery channel:
 *
 * **1. Broadcast strategy** (default)
 *
 * Set `$id_delivery_strategy` to `0` or {@link Wl_Passport_Login_Enter_OtpDeliveryStrategyEnum} (or omit it entirely).
 * Use `$is_mail` and/or `$is_phone` to specify which channels to use.
 * At least one of them must be `true`; the OTP is sent to every channel that is enabled.
 * The user must have a corresponding contact — a phone number when `$is_phone` is `true`, an email when
 * `$is_mail` is `true` — otherwise an error is thrown.
 *
 * Example: set `$is_mail = true` and `$is_phone = true` to send OTP via both email and SMS simultaneously.
 *
 * **2. Priority strategy**
 *
 * Set `$id_delivery_strategy` to {@link Wl_Passport_Login_Enter_OtpDeliveryStrategyEnum}.
 * Provide `$text_delivery_priority` — a comma-separated list of `sms` and `email` values in the preferred
 * order, e.g. `"sms,email"`.
 * The system picks the first channel from the list for which the user has valid contact data and sends the OTP
 * only to that one channel. The selected channel is returned in `$text_delivery_selected`; when SMS is
 * selected, the last four digits of the phone are returned in `$text_phone_masked`.
 * If none of the listed channels can be used, an error is thrown.
 *
 * Example: set `$text_delivery_priority = "sms,email"` to prefer SMS but fall back to email if the user
 * has no phone number.
 *
 * @function
 * @name Wl_Passport_Login_Enter_PassportOtpModel.get
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
 * @name Wl_Passport_Login_Enter_PassportOtpModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
