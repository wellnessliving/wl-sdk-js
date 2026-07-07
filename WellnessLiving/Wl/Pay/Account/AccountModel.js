/**
 * Retrieves information about accounts of given user in given business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Account_AccountModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business,is_owner";

  /**
   * @typedef {{}} Wl_Pay_Account_AccountModel_a_account
   * @property {number} id_currency A list of currencies.
   * @property {string} k_currency Key of account currency.
   * @property {?string} k_pay_account ID of payment account.  `null` if this is a user account based on system payment method.
   * @property {?string} k_pay_method ID of custom payment method. `null` if this is a user account based on system payment method.
   * @property {string} m_rest Account balance.
   * @property {?string} s_method Name of a custom payment method. `null` if this is a user account based on system payment method.
   */

  /**
   * A list of the user's accounts.
   *
   * Keys are account keys. This could be `0` if the user has no accounts in the currency of the given business.
   * Values are account data:
   *
   * @get result
   * @type {Wl_Pay_Account_AccountModel_a_account}
   */
  this.a_account = undefined;

  /**
   * @typedef {{}} Wl_Pay_Account_AccountModel_a_account_nx
   * @property {boolean} can_negative `true` if the account is allowed to have a negative balance, `false` otherwise.
   * @property {number} id_currency A list of currencies.
   * @property {string} k_currency Currency key.
   * @property {?string} k_pay_account Payment account key. `null` for accounts not yet created.
   * @property {?string} k_pay_method Custom payment method key. `null` for accounts based on the system payment method.
   * @property {string} m_rest Account balance. Always `'0.00'` for accounts not yet created.
   * @property {?string} s_method Name of the custom payment method. `null` for accounts based on the system payment method.
   */

  /**
   * A list of accounts that have not been created for this user yet.
   *
   * Keys are composed of `{k_pay_method}:{k_currency}`. Each element:
   *
   * @get result
   * @type {Wl_Pay_Account_AccountModel_a_account_nx[]}
   */
  this.a_account_nx = undefined;

  /**
   * Determines whether the user is a debtor. If `true` - the owner of this account is a debtor.
   * If `false` - the user is not a debtor or the information is not returned for the
   * account owner ({@link Thoth_WlPay_Account_AccountModel.is_owner} is `false`).
   *
   * @get result
   * @type {boolean}
   */
  this.is_debtor = undefined;

  /**
   * If `true`, information for the account's owner is returned. Clients can be configured to pay for a relative's
   * expenses. For example, a parent can pay for their child.
   * Otherwise, `false` to indicate information strictly for the specified user is returned.
   *
   * @get get
   * @type {boolean}
   */
  this.is_owner = false;

  /**
   * The key of the business to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The key of the user to show information for.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Account_AccountModel);

/**
 * @inheritDoc
 */
Wl_Pay_Account_AccountModel.prototype.config=function()
{
  return {"a_field":{"a_account":{"get":{"result":true}},"a_account_nx":{"get":{"result":true}},"is_debtor":{"get":{"result":true}},"is_owner":{"get":{"get":true}},"k_business":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Pay_Account_AccountModel.instanceGet
 * @param {string} uid The key of the user to show information for.
 * @param {string} k_business The key of the business to show information for.
 * @param {boolean} is_owner If `true`, information for the account's owner is returned. Clients can be configured to pay for a relative's expenses. For example, a parent can pay for their child. Otherwise, `false` to indicate information strictly for the specified user is returned.
 * @returns {Wl_Pay_Account_AccountModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves information about accounts of given user in given business.
 *
 * Returns the list of existing accounts and accounts not yet created for the user within the specified business,
 * including balance, currency, and payment method details.
 * When {@link Thoth_WlPay_Account_AccountModel.is_owner} is `true`, resolves the money owner and includes the debtor status.
 *
 * @function
 * @name Wl_Pay_Account_AccountModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
