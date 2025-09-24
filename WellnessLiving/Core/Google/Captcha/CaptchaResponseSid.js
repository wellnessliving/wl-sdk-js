/**
 * List of responses for Google Captcha token.
 *
 * @constructor
 */
function Core_Google_Captcha_CaptchaResponseSid()
{
  // Empty constructor.
}

/**
 * Token is invalid or expired.
 *
 * Used by: {@link Core_Google_Captcha_CaptchaVersionSid.V2} and {@link Core_Google_Captcha_CaptchaVersionSid.V3}.
 *
 * @constant
 * @default 1
 * @name Core_Google_Captcha_CaptchaResponseSid.INVALID
 * @type {number}
 */
Core_Google_Captcha_CaptchaResponseSid.INVALID=1;

/**
 * Token is valid, but v2 captcha require.
 *
 * Used by {@link Core_Google_Captcha_CaptchaVersionSid.V3} only.
 *
 * @constant
 * @default 2
 * @name Core_Google_Captcha_CaptchaResponseSid.REQUIRE_V2
 * @type {number}
 */
Core_Google_Captcha_CaptchaResponseSid.REQUIRE_V2=2;

/**
 * Token is valid.
 *
 * Used by: {@link Core_Google_Captcha_CaptchaVersionSid.V2} and {@link Core_Google_Captcha_CaptchaVersionSid.V3}.
 *
 * @constant
 * @default 3
 * @name Core_Google_Captcha_CaptchaResponseSid.VALID
 * @type {number}
 */
Core_Google_Captcha_CaptchaResponseSid.VALID=3;

/**
 * Token is valid but score is risky.
 *
 * Used by {@link Core_Google_Captcha_CaptchaVersionSid.V3} only.
 *
 * @constant
 * @default 4
 * @name Core_Google_Captcha_CaptchaResponseSid.VALID_BLOCK
 * @type {number}
 */
Core_Google_Captcha_CaptchaResponseSid.VALID_BLOCK=4;