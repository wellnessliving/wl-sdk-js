/**
 * Checks if a CAPTCHA is required for the given captcha type.
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
   * @type {*}
   */
  this.a_arguments = undefined;

  /**
   * The CID of the CAPTCHA.
   *
   * @get get
   * @type {number}
   */
  this.cid_captcha = 0;

  /**
   * `true` if enabled V3 captcha enabled.
   * `false` if only V2 captcha enable.
   *
   * @get result
   * @type {boolean}
   */
  this.is_enable_v3 = undefined;

  /**
   * This will be `true` if a CAPTCHA is required. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_require = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Captcha_CaptchaRequireModel);

/**
 * @inheritDoc
 */
Core_Captcha_CaptchaRequireModel.prototype.config=function()
{
  return {"a_field":{"a_arguments":{"get":{"get":true}},"cid_captcha":{"get":{"get":true}},"is_enable_v3":{"get":{"result":true}},"is_require":{"get":{"result":true}}}};
};

/**
 * Checks if a CAPTCHA is required for the given captcha type.
 *
 * Used before rendering a form that may include a CAPTCHA widget. The caller supplies the captcha type
 * (identified by CID) and any constructor arguments it needs; the response tells the frontend whether to
 * show the challenge at all and which reCAPTCHA version is active.
 *
 * @function
 * @name Core_Captcha_CaptchaRequireModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
