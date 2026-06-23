/**
 * Sends an OTP code to the specified phone number for verification.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Notification_Otp_PhoneOtpModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Otp code integer that user entered on the form. Will be compared with otp code, which was sent previously.
   *
   * @post post
   * @type {string}
   */
  this.s_otp_code = "";

  /**
   * Phone number to be validated.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.text_phone = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Notification_Otp_PhoneOtpModel);

/**
 * @inheritDoc
 */
Wl_Notification_Otp_PhoneOtpModel.prototype.config=function()
{
  return {"a_field":{"s_otp_code":{"post":{"post":true}},"text_phone":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * Sends an OTP code to the specified phone number for verification.
 *
 * Checks that the rate limit for OTP generation has not been exceeded, generates a new code, and dispatches
 * it to the given phone number via SMS. Requires a special privilege to use this endpoint.
 *
 * @function
 * @name Wl_Notification_Otp_PhoneOtpModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Verifies the OTP code submitted by the user for the specified phone number.
 *
 * Checks that the submitted `$s_otp_code` matches the code previously generated for `$text_phone` and has
 * not expired. Returns a validation error if the code is absent, incorrect, or expired.
 *
 * @function
 * @name Wl_Notification_Otp_PhoneOtpModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
