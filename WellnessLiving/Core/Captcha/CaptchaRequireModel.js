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
   * @typedef {{}} Core_Captcha_CaptchaRequireModel_a_arguments_A
   * @property {?string} k_business Business key. `null` if system business.
   */

  /**
   * @typedef {{}} Core_Captcha_CaptchaRequireModel_a_arguments_B
   * @property {?string} k_business Business key. `null` if is system business.
   */

  /**
   * @typedef {{}} Core_Captcha_CaptchaRequireModel_a_arguments_C
   * @property {?string} k_business Business key. `null` if is system business.
   */

  /**
   * @typedef {{}} Core_Captcha_CaptchaRequireModel_a_arguments_D
   * @property {?string} k_business Business key. `null` if is system business.
   */

  /**
   * @typedef {{}} Core_Captcha_CaptchaRequireModel_a_arguments_E
   * @property {boolean} is_search Flag to determine is it a search action or no. If search action is `true` it increments {@link Core_Captcha_CaptchaAbstract}. Otherwise {@link Core_Captcha_CaptchaAbstract}.
   */

  /**
   * Arguments for creating CAPTCHA object.
   *
   * @get get
   * @type {Core_Captcha_CaptchaRequireModel_a_arguments_A|Core_Captcha_CaptchaRequireModel_a_arguments_B|Core_Captcha_CaptchaRequireModel_a_arguments_C|Core_Captcha_CaptchaRequireModel_a_arguments_D|{}|Core_Captcha_CaptchaRequireModel_a_arguments_E}
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
