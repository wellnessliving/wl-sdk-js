/**
 * Base class for captcha.
 */
function Core_Captcha_CaptchaAbstract()
{
  // Empty constructor.
}

/**
 * Captcha for payment action.
 *
 * @type {number}
 */
Core_Captcha_CaptchaAbstract.BusinessPaymentCaptcha = 1064;

/**
 * Captcha for business search action.
 *
 * @type {number}
 */
Core_Captcha_CaptchaAbstract.BusinessSearchCaptcha = 1508;

/**
 * Captcha for delete account.
 *
 * @type {number}
 */
Core_Captcha_CaptchaAbstract.DeleteCaptcha = 1220;

/**
 * Captcha for "Lead Capture Widget".
 *
 * @type {number}
 */
Core_Captcha_CaptchaAbstract.LeadCaptcha = 1072;

/**
 * Captcha for user registration action.
 *
 * @type {number}
 */
Core_Captcha_CaptchaAbstract.RegisterCaptcha = 1139;

/**
 * Captcha for user registration completion action.
 *
 * @type {number}
 */
Core_Captcha_CaptchaAbstract.RegisterCompleteCaptcha = 1914;

/**
 * Captcha for post review.
 *
 * @type {number}
 */
Core_Captcha_CaptchaAbstract.ReviewCaptcha = 1066;
