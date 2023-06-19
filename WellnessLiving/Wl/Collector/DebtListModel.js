/**
 * An endpoint that returns list of debts added within the previous month.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Collector_DebtListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Collector_DebtListModel_a_debt
   * @property {string} dl_client_birth The birth date of the debtor client.
   * @property {string} dtu_client_since The date and time in UTC from which the debtor client is a member of the business.
   * @property {string} dtu_due The date and time in UTC of the last payment on the debtor client's account.
   * @property {string} dtu_add The date and time in UTC when the client was added to the list of debtors.
   * @property {string} dtu_cease The date and time in UTC when the debt was fully ceased.
   * @property {number} id_currency The debt currency ID. One of {@link Core_Locale_CurrencySid} constants.
   * @property {string} k_business The business key where the debt occurred.
   * @property {string} k_collector_debt The debt key, which should be used for debt payment.
   * @property {string} k_pay_transaction_debt The transaction key after which the debt occurred.
   * @property {string} k_pay_transaction_last The last transaction key on account after the debt occurred.
   * @property {string} m_amount_debt The initial amount of the debt.
   * @property {string} m_amount_paid The amount paid for debt.
   * @property {string} text_business_title The title of the business.
   * @property {string} text_client_name The full name of the debtor client.
   * @property {string} text_client_address The address of the debtor client.
   * @property {string} text_client_mail The email address of the debtor client.
   * @property {string} text_client_phone The phone number of the debtor client.
   * @property {string} text_client_zip The ZIP code of the debtor client.
   * @property {string} text_skip The notification message sent when the debt payment is missed.
   * @property {string} uid The user key of the debt owner.
   */

  /**
   * A list of debts for the given business added within the previous month.
   *
   * Each value is an array with the next structure:
   * <dl>
   *   <dt>string <var>dl_client_birth</var></dt>
   *   <dd>The birth date of the debtor client.</dd>
   *   <dt>string <var>dtu_client_since</var></dt>
   *   <dd>The date and time in UTC from which the debtor client is a member of the business.</dd>
   *   <dt>string <var>dtu_due</var></dt>
   *   <dd>The date and time in UTC of the last payment on the debtor client's account.</dd>
   *   <dt>string <var>dtu_add</var></dt>
   *   <dd>The date and time in UTC when the client was added to the list of debtors.</dd>
   *   <dt>string <var>dtu_cease</var></dt>
   *   <dd>The date and time in UTC when the debt was fully ceased.</dd>
   *   <dt>int <var>id_currency</var></dt>
   *   <dd>The debt currency ID. One of {@link Core_Locale_CurrencySid} constants.</dd>
   *   <dt>string <var>k_business</var></dt>
   *   <dd>The business key where the debt occurred.</dd>
   *   <dt>string <var>k_collector_debt</var></dt>
   *   <dd>The debt key, which should be used for debt payment.</dd>
   *   <dt>string <var>k_pay_transaction_debt</var></dt>
   *   <dd>The transaction key after which the debt occurred.</dd>
   *   <dt>string <var>k_pay_transaction_last</var></dt>
   *   <dd>The last transaction key on account after the debt occurred.</dd>
   *   <dt>string <var>m_amount_debt</var></dt>
   *   <dd>The initial amount of the debt.</dd>
   *   <dt>string <var>m_amount_paid</var></dt>
   *   <dd>The amount paid for debt.</dd>
   *   <dt>string <var>text_business_title</var></dt>
   *   <dd>The title of the business.</dd>
   *   <dt>string <var>text_client_name</var></dt>
   *   <dd>The full name of the debtor client.</dd>
   *   <dt>string <var>text_client_address</var></dt>
   *   <dd>The address of the debtor client.</dd>
   *   <dt>string <var>text_client_mail</var></dt>
   *   <dd>The email address of the debtor client.</dd>
   *   <dt>string <var>text_client_phone</var></dt>
   *   <dd>The phone number of the debtor client.</dd>
   *   <dt>string <var>text_client_zip</var></dt>
   *   <dd>The ZIP code of the debtor client.</dd>
   *   <dt>string <var>text_skip</var></dt>
   *   <dd>The notification message sent when the debt payment is missed.</dd>
   *   <dt>string <var>uid</var></dt>
   *   <dd>The user key of the debt owner.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Collector_DebtListModel_a_debt[]}
   */
  this.a_debt = [];

  /**
   * Date before which debts should be returned.
   *
   * If `null` and {@link Wl_Collector_DebtListModel.dl_start} specified will return debts before current date.
   * If `null` and {@link Wl_Collector_DebtListModel.dl_start} also `null` will return debts from previous month.
   *
   * @get get
   * @type {?string}
   */
  this.dl_end = null;

  /**
   * Date since which debts should be returned.
   *
   * If `null` and {@link Wl_Collector_DebtListModel.dl_end} specified will return debts since the beginning of time.
   * If `null` and {@link Wl_Collector_DebtListModel.dl_end} also `null` will return debts from previous month.
   *
   * @get get
   * @type {?string}
   */
  this.dl_start = null;

  /**
   * The business key to which debts should be returned.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Collector_DebtListModel);

/**
 * @inheritDoc
 */
Wl_Collector_DebtListModel.prototype.config=function()
{
  return {"a_field": {"a_debt": {"get": {"result": true}},"dl_end": {"get": {"get": true}},"dl_start": {"get": {"get": true}},"k_business": {"get": {"get": true}}}};
};