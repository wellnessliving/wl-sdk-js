/**
 * List of responses for Google Captcha token.
 */
function Core_Google_Captcha_CaptchaResponseSid()
{
  // Empty constructor.
}

/**
 * Token can be verified due to error from Google Captcha.
 *
 * @type {number}
 */
Core_Google_Captcha_CaptchaResponseSid.ERROR = 5;

/**
 * Token is invalid or expired.
 *
 * @type {number}
 */
Core_Google_Captcha_CaptchaResponseSid.INVALID = 1;

/**
 * Token is valid, but v2 captcha require.
 *
 * @type {number}
 */
Core_Google_Captcha_CaptchaResponseSid.REQUIRE_V2 = 2;

/**
 * Token is valid.
 *
 * @type {number}
 */
Core_Google_Captcha_CaptchaResponseSid.VALID = 3;

/**
 * Token is valid but score is risky.
 *
 * @type {number}
 */
Core_Google_Captcha_CaptchaResponseSid.VALID_BLOCK = 4;
