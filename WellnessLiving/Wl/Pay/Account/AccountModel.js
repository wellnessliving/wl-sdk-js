/**
 * An endpoint that displays information about user's accounts.
 *
 * This model is generated automatically based on API.
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
   * @property {number} id_currency Currency ID. One of {@link RsCurrencySid} constant.
   * @property {string} k_currency Key of account currency.
   * @property {?string} k_pay_account ID of payment account. <tt>null</tt> if this is a user account based on system payment method.
   * @property {?string} k_pay_method ID of custom payment method. <tt>null</tt> if this is a user account based on system payment method.
   * @property {string} m_rest Account balance.
   * @property {?string} s_method Name of a custom payment method. <tt>null</tt> if this is a user account based on system payment method.
   */

  /**
   * A list of the user's accounts.
   *
   * Keys are account keys. This could be `0` if the user has no accounts in the currency of the given business.
   * Values are account data: <dl>
   *   <dt>
   *     int <var>id_currency</var>
   *   </dt>
   *   <dd>
   *     Currency ID. One of {@link RsCurrencySid} constant.
   *   </dd>
   *   <dt>
   *     string <var>k_currency</var>
   *   </dt>
   *   <dd>
   *     Key of account currency.
   *   </dd>
   *   <dt>
   *     string|null <var>k_pay_account</var>
   *   </dt>
   *   <dd>
   *     ID of payment account. <tt>null</tt> if this is a user account based on system payment method.
   *   </dd>
   *   <dt>
   *     string|null <var>k_pay_method</var>
   *   </dt>
   *   <dd>
   *     ID of custom payment method. <tt>null</tt> if this is a user account based on system payment method.
   *   </dd>
   *   <dt>
   *     string <var>m_rest</var>
   *   </dt>
   *   <dd>
   *     Account balance.
   *   </dd>
   *   <dt>
   *     string|null <var>s_method</var>
   *   </dt>
   *   <dd>
   *     Name of a custom payment method. <tt>null</tt> if this is a user account based on system payment method.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Pay_Account_AccountModel_a_account}
   */
  this.a_account = undefined;

  /**
   * A list of accounts that is not created for this user yet.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_account_nx = undefined;

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
  this.k_business = "0";

  /**
   * The key of the user to show information for.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Account_AccountModel);

/**
 * @inheritDoc
 */
Wl_Pay_Account_AccountModel.prototype.config=function()
{
  return {"a_field": {"a_account": {"get": {"result": true}},"a_account_nx": {"get": {"result": true}},"is_owner": {"get": {"get": true}},"k_business": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
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