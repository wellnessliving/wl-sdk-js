/**
 * Stores the user token CAPTCHA.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @deprecated Use {@link Core_Google_Captcha_GoogleCaptchaModel} instead of this.
 */
function Core_Google_GoogleCaptchaModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Captcha version ID.
   *
   * @put post
   * @see Core_Google_Captcha_CaptchaVersionSid
   * @type {number}
   */
  this.id_version = 1;

  /**
   * The action name.
   *
   * Used to determine the place where the CAPTCHA is needed in documentation for endpoints that used
   * the CAPTCHA.
   *
   * @put post
   * @type {string}
   */
  this.text_action = "";

  /**
   * The user token CAPTCHA.
   *
   * @put post
   * @type {string}
   */
  this.text_token = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extends(Core_Google_GoogleCaptchaModel);

/**
 * @inheritDoc
 */
Core_Google_GoogleCaptchaModel.prototype.config=function()
{
  return {"a_field": {"id_version": {"put": {"post": true}},"text_action": {"put": {"post": true}},"text_token": {"put": {"post": true}}}};
};