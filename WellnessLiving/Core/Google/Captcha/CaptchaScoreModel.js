/**
 * Endpoint for validating and overriding the score for {@link Core_Google_Captcha_CaptchaVersionSid.V3} captcha.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Google_Captcha_CaptchaScoreModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Overridden score value for {@link Core_Google_Captcha_CaptchaVersionSid.V3} captcha.
   *
   * `null` to reset override.
   *
   * @get result
   * @put post
   * @type {?number}
   */
  this.f_score = null;

  /**
   * Captcha response ID.
   *
   * @post result
   * @see Core_Google_Captcha_CaptchaResponseSid
   * @type {number}
   */
  this.id_response = undefined;

  /**
   * The user token CAPTCHA from {@link Core_Google_Captcha_CaptchaVersionSid.V3} captcha.
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

WlSdk_ModelAbstract.extends(Core_Google_Captcha_CaptchaScoreModel);

/**
 * @inheritDoc
 */
Core_Google_Captcha_CaptchaScoreModel.prototype.config=function()
{
  return {"a_field": {"f_score": {"get": {"result": true},"put": {"post": true}},"id_response": {"post": {"result": true}},"text_token": {"post": {"get": true}}}};
};