/**
 * List of user's ACH accounts.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Bank_Ach_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business,k_location";

  /**
   * @typedef {{}} Wl_Pay_Bank_Ach_ListModel_a_list
   * @property {number} id_pay_bank_ach_holder Type of account holder. One of {@link RsPayBankAchHolderSid} constants.
   * @property {number} id_pay_bank_ach_type Type of account. One of {@link RsPayBankAchTypeSid} constants.
   * @property {boolean} is_default <tt>true</tt> - this account is default payment method; <tt>false</tt> - otherwise.
   * @property {string} k_pay_bank ID of bank account. Primary key in {@link RsPayBankSql}.
   * @property {string} text_name_account Account name.
   * @property {string} text_name_holder Account holder name.
   * @property {string} text_number ACH account number.
   */

  /**
   * List of ACH accounts:
   * <dl>
   *   <dt>
   *     int <var>id_pay_bank_ach_holder</var>
   *   </dt>
   *   <dd>
   *     Type of account holder. One of {@link RsPayBankAchHolderSid} constants.
   *   </dd>
   *   <dt>
   *     int <var>id_pay_bank_ach_type</var>
   *   </dt>
   *   <dd>
   *     Type of account. One of {@link RsPayBankAchTypeSid} constants.
   *   </dd>
   *   <dt>
   *     bool <var>is_default</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - this account is default payment method; <tt>false</tt> - otherwise.
   *   </dd>
   *   <dt>
   *     string <var>k_pay_bank</var>
   *   </dt>
   *   <dd>
   *     ID of bank account. Primary key in {@link RsPayBankSql}.
   *   </dd>
   *   <dt>
   *     string <var>text_name_account</var>
   *   </dt>
   *   <dd>
   *     Account name.
   *   </dd>
   *   <dt>
   *     string <var>text_name_holder</var>
   *   </dt>
   *   <dd>
   *     Account holder name.
   *   </dd>
   *   <dt>
   *     string <var>text_number</var>
   *   </dt>
   *   <dd>
   *     ACH account number.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Pay_Bank_Ach_ListModel_a_list[]}
   */
  this.a_list = undefined;

  /**
   * <tt>true</tt> - can add new ACH account;<tt>false</tt> - can not add new ACH account.
   *
   * @get result
   * @type {boolean}
   */
  this.can_add = undefined;

  /**
   * ID of current business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Location to show information for.
   * Primary key in {@link \RsLocationSql} table.
   *
   * <tt>0</tt> to use user's home location.
   *
   * @get get
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * ID of a user to show information for.
   *
   * @get get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Bank_Ach_ListModel);

/**
 * @inheritDoc
 */
Wl_Pay_Bank_Ach_ListModel.prototype.config=function()
{
  return {"a_field": {"a_list": {"get": {"result": true}},"can_add": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_location": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Pay_Bank_Ach_ListModel.instanceGet
 * @param {string} uid ID of a user to show information for.
 * @param {string} k_business ID of current business.
 * @param {string} k_location Location to show information for. Primary key in {@link \RsLocationSql} table. <tt>0</tt> to use user's home location.
 * @returns {Wl_Pay_Bank_Ach_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */