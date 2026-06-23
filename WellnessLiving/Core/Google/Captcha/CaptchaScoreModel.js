/**
 * Returns the overridden score for the reCAPTCHA v3.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Google_Captcha_CaptchaScoreModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Overridden score value for V3 captcha.
   *
   * `null` to reset override.
   *
   * @get result
   * @put post
   * @type {?number}
   */
  this.f_score = null;

  /**
   * List of responses for Google Captcha token.
   *
   * Values:
   * - 5 (`ERROR`): Token can be verified due to error from Google Captcha.
   * - 1 (`INVALID`): Token is invalid or expired.
   *
   *   Used by: {@link Core_Google_Captcha_CaptchaVersionSid} and {@link Core_Google_Captcha_CaptchaVersionSid}.
   * - 2 (`REQUIRE_V2`): Token is valid, but v2 captcha require.
   *
   *   Used by {@link Core_Google_Captcha_CaptchaVersionSid} only.
   * - 3 (`VALID`): Token is valid.
   *
   *   Used by: {@link Core_Google_Captcha_CaptchaVersionSid} and {@link Core_Google_Captcha_CaptchaVersionSid}.
   * - 4 (`VALID_BLOCK`): Token is valid but score is risky.
   *
   *   Used by {@link Core_Google_Captcha_CaptchaVersionSid} only.
   *
   * @post result
   * @type {number}
   */
  this.id_response = undefined;

  /**
   * The user token CAPTCHA from {@link Core_Google_Captcha_CaptchaVersionSid} captcha.
   *
   * Be careful when use this endpoint for validate token, because token can be used only once,
   * so if you validate token in this endpoint, you must generate new token for next requests.
   *
   * @post get
   * @type {string}
   */
  this.text_token = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Google_Captcha_CaptchaScoreModel);

/**
 * @inheritDoc
 */
Core_Google_Captcha_CaptchaScoreModel.prototype.config=function()
{
  return {"a_field":{"f_score":{"get":{"result":true},"put":{"post":true}},"id_response":{"post":{"result":true}},"text_token":{"post":{"get":true}}}};
};

/**
 * Returns the overridden score for the reCAPTCHA v3.
 *
 * Returns the current session-level score override value that was set via the PUT method.
 * Requires reCAPTCHA v3 to be enabled; throws an exception otherwise.
 *
 * @function
 * @name Core_Google_Captcha_CaptchaScoreModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Validates the reCAPTCHA v3 token.
 *
 * Accepts a reCAPTCHA v3 user token, sends it to Google for verification, and returns a response ID
 * indicating the outcome. Note that each token can only be validated once; a new token must be generated
 * for subsequent requests.
 *
 * @function
 * @name Core_Google_Captcha_CaptchaScoreModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */

/**
 * Overrides the score for the reCAPTCHA v3.
 *
 * Sets a custom score value in the range 0.0-1.0 to override the actual reCAPTCHA v3 score for the
 * current session. Pass `null` to clear the override and restore the default behavior. Requires the
 * score override feature to be enabled.
 *
 * @function
 * @name Core_Google_Captcha_CaptchaScoreModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
