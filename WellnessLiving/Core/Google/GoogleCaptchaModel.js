/**
 * Api to store captcha user token.
 *
 * Site keys for initialize Google captcha:
 * * Demo/Staging - `6Ldqwe0gAAAAANve1TEPFb_Yxgb9wsoIfrNL6-2Z`
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Google_GoogleCaptchaModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Action name.
   *
   * @put post
   * @type {string}
   */
  this.text_action = undefined;

  /**
   * Captcha user token.
   *
   * @put post
   * @type {string}
   */
  this.text_token = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Google_GoogleCaptchaModel);

/**
 * @inheritDoc
 */
Core_Google_GoogleCaptchaModel.prototype.config=function()
{
  return {"a_field": {"text_action": {"put": {"post": true}},"text_token": {"put": {"post": true}}}};
};