/**
 * Checks if a CAPTCHA is required.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Captcha_CaptchaRequireModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Arguments for creating CAPTCHA object.
   *
   * @get get
   * @type {{}}
   */
  this.a_arguments = [];

  /**
   * The CID of the CAPTCHA.
   *
   * @get get
   * @type {number}
   */
  this.cid_captcha = 0;

  /**
   * `true` if enabled {@link Core_Google_Captcha_CaptchaVersionSid.V3} and {@link Core_Google_Captcha_CaptchaVersionSid.V2} captcha.
   * `false` if only {@link Core_Google_Captcha_CaptchaVersionSid.V2} enable.
   *
   * @get result
   * @type {boolean}
   */
  this.is_enable_v3 = false;

  /**
   * This will be `true` if a CAPTCHA is required. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_require = false;

  this.changeInit();
}

WlSdk_ModelAbstract.extends(Core_Captcha_CaptchaRequireModel);

/**
 * @inheritDoc
 */
Core_Captcha_CaptchaRequireModel.prototype.config=function()
{
  return {"a_field": {"a_arguments": {"get": {"get": true}},"cid_captcha": {"get": {"get": true}},"is_enable_v3": {"get": {"result": true}},"is_require": {"get": {"result": true}}}};
};