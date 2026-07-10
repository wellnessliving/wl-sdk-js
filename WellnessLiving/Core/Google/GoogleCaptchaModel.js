/**
 * Saves the user CAPTCHA token for the current session.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @deprecated Use {@link _Core_Google_Captcha_GoogleCaptchaModel} instead of this.
 */
function Core_Google_GoogleCaptchaModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of Google reCaptcha versions.
   *
   * Values:
   * - 1 (`V2`): Version 2 (invisible).
   * - 2 (`V3`): Version 3.
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

WlSdk_ModelAbstract.extend(Core_Google_GoogleCaptchaModel);

/**
 * @inheritDoc
 */
Core_Google_GoogleCaptchaModel.prototype.config=function()
{
  return {"a_field":{"id_version":{"put":{"post":true}},"text_action":{"put":{"post":true}},"text_token":{"put":{"post":true}}}};
};

/**
 * Saves the user CAPTCHA token for the current session.
 *
 * Accepts the CAPTCHA version, the action name, and the user token obtained from the Google reCAPTCHA widget,
 * and stores them in the session so that subsequent API requests requiring CAPTCHA verification can use them.
 *
 * Site keys for initialize Google reCAPTCHA:
 * * Version 2 (invisible):
 * * Demo/Staging - `6Ldqwe0gAAAAANve1TEPFb_Yxgb9wsoIfrNL6-2Z`
 * * Production - `6LeOGp4hAAAAACDoQeLUxnu2TAXXZWhdSm118auy`
 * * Version 3:
 * * Demo/Staging - `6Lc7bukqAAAAAHzXhG6WytHsGbz6rYYyklg_0kMb`
 * * Production - `6LcGn18rAAAAAPJNY1pGuoaTCM1MOBxz5HgE_4Vy`
 *
 * @function
 * @name Core_Google_GoogleCaptchaModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
