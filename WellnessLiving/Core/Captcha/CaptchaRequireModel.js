/**
 * API for check that captcha is required.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Captcha_CaptchaRequireModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Arguments for creating captcha object.
   *
   * @get get
   * @type {{}}
   */
  this.a_arguments = [];

  /**
   * CID of the captcha.
   *
   * @get get
   * @type {number}
   */
  this.cid_captcha = 0;

  /**
   * `true` if captcha is required, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_require = false;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Captcha_CaptchaRequireModel);

/**
 * @inheritDoc
 */
Core_Captcha_CaptchaRequireModel.prototype.config=function()
{
  return {"a_field": {"a_arguments": {"get": {"get": true}},"cid_captcha": {"get": {"get": true}},"is_require": {"get": {"result": true}}}};
};