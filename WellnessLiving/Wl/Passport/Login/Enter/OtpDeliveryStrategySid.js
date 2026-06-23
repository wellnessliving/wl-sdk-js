/**
 * List of different OTP code delivery strategies.
 */
function Wl_Passport_Login_Enter_OtpDeliveryStrategySid()
{
  // Empty constructor.
}

/**
 * OTP code is sent to all given communication channels (sms, emails, etc.)
 *
 * @type {number}
 */
ADateWeekSid.BROADCAST = 1;

/**
 * OTP code is sent to the first communication channel that is available, according to the given list of priorities.
 *
 * @type {number}
 */
ADateWeekSid.PRIORITY = 2;