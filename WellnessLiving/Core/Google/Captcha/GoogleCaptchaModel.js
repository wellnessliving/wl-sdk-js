/**
 * Stores the user token CAPTCHA.
 *
 * Site keys for initialize Google reCAPTCHA:
 * * Version 2 (invisible):
 *   * Demo/Staging - `6Ldqwe0gAAAAANve1TEPFb_Yxgb9wsoIfrNL6-2Z`
 *   * Production - `6LfMH2MtAAAAABzJMxRl6JQ6NQ2W-__HYD9uajPs`
 * * Version 3:
 *  * Demo/Staging - `6Lc7bukqAAAAAHzXhG6WytHsGbz6rYYyklg_0kMb`
 *  * Production - `6LeyHWMtAAAAAHvGsUJgYmNlnVIoj82Z4rg4yHmv`
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Google_Captcha_GoogleCaptchaModel()
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

WlSdk_ModelAbstract.extends(Core_Google_Captcha_GoogleCaptchaModel);

/**
 * @inheritDoc
 */
Core_Google_Captcha_GoogleCaptchaModel.prototype.config=function()
{
  return {"a_field": {"id_version": {"put": {"post": true}},"text_action": {"put": {"post": true}},"text_token": {"put": {"post": true}}}};
};