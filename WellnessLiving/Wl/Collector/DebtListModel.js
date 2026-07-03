/**
 * Returns a list of client debts for the specified business within the given date range.
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
   * @property {string} dtu_add The date and time in UTC when the client was added to the list of debtors.
   * @property {string} dtu_cease The date and time in UTC when the debt was fully ceased.
   * @property {string} dtu_client_since The date and time in UTC from which the debtor client is a member of the business.
   * @property {string} dtu_due The date and time in UTC of the last payment on the debtor client's account.
   * @property {number} id_currency A list of currencies.
   * @property {string} k_business The business key where the debt occurred.
   * @property {string} k_collector_debt The debt key, which should be used for debt payment.
   * @property {string} k_pay_transaction_debt The transaction key after which the debt occurred.
   * @property {string} k_pay_transaction_last The last transaction key on account after the debt occurred.
   * @property {string} m_amount_debt The initial amount of the debt.
   * @property {string} m_amount_paid The amount paid for debt.
   * @property {string} text_business_title The title of the business.
   * @property {string} text_client_address The address of the debtor client.
   * @property {string} text_client_mail The email address of the debtor client.
   * @property {string} text_client_name The full name of the debtor client.
   * @property {string} text_client_phone The phone number of the debtor client.
   * @property {string} text_client_zip The ZIP code of the debtor client.
   * @property {string} text_skip The notification message sent when the debt payment is missed.
   * @property {string} uid The user key of the debt owner.
   */

  /**
   * A list of debts for the given business added within the previous month.
   *
   * Each value is an array with the next structure:
   *
   * @get result
   * @type {Wl_Collector_DebtListModel_a_debt[]}
   */
  this.a_debt = undefined;

  /**
   * Date before which debts should be returned.
   *
   * If set, this is the end of the date window. Only debts added before or on this date will be shown.
   *
   * If left `null` and {@link Wl_Collector_DebtListModel} has been specified, only debts added after the start date will be returned.
   * If left `null` and {@link Wl_Collector_DebtListModel} is also `null`, this will return debts from the previous month.
   *
   * @get get
   * @type {?string}
   */
  this.dl_end = null;

  /**
   * Date since which debts should be returned.
   *
   * If set, this is the start of the date window. Only debts added on or after this date will be shown.
   *
   * If left `null` and {@link Wl_Collector_DebtListModel} has been specified will return debts added since the beginning of time.
   * If left `null` and {@link Wl_Collector_DebtListModel} is also `null`, this will return debts from the previous month.
   *
   * @get get
   * @type {?string}
   */
  this.dl_start = null;

  /**
   * Defines whether new debts should be returned or only previously sent debts.
   *
   * If `true` then return new debts only.
   * If `false` then return previously sent debts only.
   *
   * @get get
   * @type {boolean}
   */
  this.is_request_debt = false;

  /**
   * Defines whether debts for test or real business should be returned.
   *
   * If `true`, debts from test businesses will be returned. Otherwise, this will be `false` if only
   * debts from real businesses will be returned.
   *
   * @get get
   * @type {boolean}
   */
  this.is_test = false;

  /**
   * The business key for which debts should be returned.
   *
   * Use `null` if debt payments from all businesses should be returned.
   *
   * @get get
   * @type {?string}
   */
  this.k_business = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Collector_DebtListModel);

/**
 * @inheritDoc
 */
Wl_Collector_DebtListModel.prototype.config=function()
{
  return {"a_field":{"a_debt":{"get":{"result":true}},"dl_end":{"get":{"get":true}},"dl_start":{"get":{"get":true}},"is_request_debt":{"get":{"get":true}},"is_test":{"get":{"get":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * Returns a list of client debts for the specified business within the given date range.
 *
 * Used by the Collections module to display outstanding debts to the collector. Requires an active
 * Collections subscription and either the business privilege or emulation access. The default date range
 * covers the previous month relative to the business timezone.
 *
 * @function
 * @name Wl_Collector_DebtListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
