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
   * Whether to check the use of the email address by any account of `WellnessLiving` instead of the membership in
   * the business.
   *
   * `true` to fill only {@link Wl_Login_Mail_MailUseModel.is_use}, `false` to fill {@link Wl_Login_Mail_MailUseModel.is_exists} and
   * {@link Wl_Login_Mail_MailUseModel.uid_use}.
   *
   * @get get
   * @type {boolean}
   */
  this.is_any_business = false;

  /**
   * If `true`, the user with the specified email address exists in specified business. Otherwise, this will
   * be `false`.
   *
   * `null` if {@link Wl_Login_Mail_MailUseModel.is_any_business} is `true`.
   *
   * @get result
   * @type {?boolean}
   */
  this.is_exists = null;

  /**
   * Whether the email address is used by an account of `WellnessLiving` that is not a virtual user, in any business
   * or in none.
   *
   * `true` if such an account exists, `false` otherwise. `null` if {@link Wl_Login_Mail_MailUseModel.is_any_business} is `false`.
   *
   * @get result
   * @type {?boolean}
   */
  this.is_use = null;

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
   *
   * `null` if the user is not found, if the current user can not see the profile of that user within the business,
   * or if {@link Wl_Login_Mail_MailUseModel.is_any_business} is `true`.
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
  return {"a_field":{"is_any_business":{"get":{"get":true}},"is_exists":{"get":{"result":true}},"is_use":{"get":{"result":true}},"k_business":{"get":{"get":true}},"text_mail":{"get":{"get":true}},"uid_use":{"get":{"result":true}}}};
};

/**
 * Checks if specified user exists in specified business.
 *
 * Accepts a business key and an email address, validates both, and returns `true` if a user with that email is an
 * active member of the business. Requests are rate-limited per IP unless the caller has the required privilege.
 *
 * With {@link Wl_Login_Mail_MailUseModel.is_any_business} set to `true`, the membership in the business is not checked: only
 * {@link Wl_Login_Mail_MailUseModel.is_use} is returned, `true` if the email address is used by an account of `WellnessLiving`
 * that is not a virtual user. The business key is still required and validated, and the same rate limit applies.
 *
 * @function
 * @name Wl_Login_Mail_MailUseModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
