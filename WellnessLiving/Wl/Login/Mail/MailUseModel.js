/**
 * Checks if specified user exists in specified business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Mail_MailUseModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * If `true`, the user with the specified email address exists in specified business. Otherwise, this will
   * be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_exists = undefined;

  /**
   * The business for which the email address search is being performed.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The email address to check for.
   *
   * @get get
   * @type {string}
   */
  this.text_mail = "";

  /**
   * Key of the user who using email within the business.
   *
   * @get result
   * @type {?string}
   */
  this.uid_use = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Mail_MailUseModel);

/**
 * @inheritDoc
 */
Wl_Login_Mail_MailUseModel.prototype.config=function()
{
  return {"a_field":{"is_exists":{"get":{"result":true}},"k_business":{"get":{"get":true}},"text_mail":{"get":{"get":true}},"uid_use":{"get":{"result":true}}}};
};

/**
 * Checks if specified user exists in specified business.
 *
 * Accepts a business key and an email address, validates both, and returns `true` if a user with that email is an
 * active member of the business. Requests are rate-limited per IP unless the caller has the required privilege.
 *
 * @function
 * @name Wl_Login_Mail_MailUseModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
