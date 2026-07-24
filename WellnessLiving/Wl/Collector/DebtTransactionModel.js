/**
 * Returns a list of debt payment transactions for the specified business within the given date range.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Collector_DebtTransactionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Collector_DebtTransactionModel_a_transaction
   * @property {string} dtu_pay The date and time in UTC of the payment transaction.
   * @property {?number} id_pay_method The payment method ID that was used for the payment. One of {@link RsPayMethodSid} constants.
   * @property {boolean} is_debt_paid Defines whether the initial debt to which this related transaction is fully paid. `true` if the debt is fully paid. `false` if the debt is partially paid.
   * @property {boolean} is_pay_collections Defines whether the payment was performed via a third party service. `true` if the payment was performed via a third party service and this transaction is responsible for an account credit transaction for that payment. See {@link Wl_Collector_DebtPayModel}. `false` if the payment was performed within the Wellnessliving system.
   * @property {string} m_pay_amount The amount of the payment's transaction.
   * @property {string} text_client_name The full name of the debtor client for whom the payment transaction was performed.
   * @property {string} uid The UID of the debtor client for whom the payment transaction was performed.
   */

  /**
   * A list of debt payments for a given business added within the previous day.
   *
   * Each value is an array with next structure:
   *
   * @get result
   * @type {Wl_Collector_DebtTransactionModel_a_transaction[]}
   */
  this.a_transaction = undefined;

  /**
   * If set, this is the end of the date window. Only debt payments added before or on this date will be shown.
   *
   * If left `null` and {@link Wl_Collector_DebtTransactionModel.dl_start} has been specified only debt payments added after the start date will be returned.
   * If left `null` and {@link Wl_Collector_DebtTransactionModel.dl_start} is also `null`, this will return debt payments from the previous month.
   *
   * @get get
   * @type {?string}
   */
  this.dl_end = null;

  /**
   * If set, this is the start of the date window. Only debt payments added on or after this date will be shown.
   *
   * If left `null` and {@link Wl_Collector_DebtTransactionModel.dl_end} has been specified, this will return debt payments since the beginning of time.
   * If left `null` and {@link Wl_Collector_DebtTransactionModel.dl_end} is also `null`, this will return debt payments from the previous month.
   *
   * @get get
   * @type {?string}
   */
  this.dl_start = null;

  /**
   * If `true`, debt payments from test businesses will be returned. Otherwise, this will be `false` if only
   * debt payments from real businesses will be returned.
   *
   * @get get
   * @type {boolean}
   */
  this.is_test = false;

  /**
   * The business key for which debt payments should be returned.
   *
   * Use `null` if debt payments from all businesses should be returned.
   *
   * @get get
   * @type {?string}
   */
  this.k_business = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Collector_DebtTransactionModel);

/**
 * @inheritDoc
 */
Wl_Collector_DebtTransactionModel.prototype.config=function()
{
  return {"a_field":{"a_transaction":{"get":{"result":true}},"dl_end":{"get":{"get":true}},"dl_start":{"get":{"get":true}},"is_test":{"get":{"get":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * Returns a list of debt payment transactions for the specified business within the given date range.
 *
 * Used by the Collections module to audit payments made against debts. The default date range
 * covers the previous day relative to the business timezone. Requires an active Collections
 * subscription and either the business privilege or emulation access.
 *
 * @function
 * @name Wl_Collector_DebtTransactionModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
