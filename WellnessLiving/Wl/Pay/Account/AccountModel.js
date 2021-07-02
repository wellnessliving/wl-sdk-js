/**
 * Returns information about user account balance.
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
   * @property {number} id_currency Currency ID. One of {@link \RsCurrencySid} constant.
   * @property {string} k_currency Key of account currency. Primary key in {@link \RsCurrencySql}.
   * @property {?string} k_pay_account ID of payment account. Primary key in {@link \RsPayAccountSql}. <tt>null</tt> if this is a user account based on system payment method.
   * @property {?string} k_pay_method ID of custom payment method. <tt>null</tt> if this is a user account based on system payment method. Primary key in {@link \Wl\Pay\Method\MethodSql}.
   * @property {string} m_rest Account balance.
   * @property {?string} s_method Name of a custom payment method. <tt>null</tt> if this is a user account based on system payment method.
   */

  /**
   * User's accounts. Keys - IDs of accounts (may be <tt>0</tt> if user has no accounts in currency of given business). Values - arrays with next keys:
   * <dl>
   *   <dt>
   *     int <var>id_currency</var>
   *   </dt>
   *   <dd>
   *     Currency ID. One of {@link \RsCurrencySid} constant.
   *   </dd>
   *   <dt>
   *     string <var>k_currency</var>
   *   </dt>
   *   <dd>
   *     Key of account currency. Primary key in {@link \RsCurrencySql}.
   *   </dd>
   *   <dt>
   *     string|null <var>k_pay_account</var>
   *   </dt>
   *   <dd>
   *     ID of payment account. Primary key in {@link \RsPayAccountSql}. <tt>null</tt> if this is a user account based on system payment method.
   *   </dd>
   *   <dt>
   *     string|null <var>k_pay_method</var>
   *   </dt>
   *   <dd>
   *     ID of custom payment method. <tt>null</tt> if this is a user account based on system payment method. Primary key in {@link \Wl\Pay\Method\MethodSql}.
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
   * <tt>true</tt> - get information for account of money owner
   * (another user may be owner of the specified user's money).
   * <tt>false</tt> - get information certainly for the specified user.
   *
   * @get get
   * @type {boolean}
   */
  this.is_owner = false;

  /**
   * Key of a business to show information for.
   *
   * Primary key in {@link \RsBusinessSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * UID of a user to show information for.
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
 * @param {string} uid UID of a user to show information for.
 * @param {string} k_business Key of a business to show information for. Primary key in {@link \RsBusinessSql}.
 * @param {boolean} is_owner <tt>true</tt> - get information for account of money owner (another user may be owner of the specified user's money). <tt>false</tt> - get information certainly for the specified user.
 * @returns {Wl_Pay_Account_AccountModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */