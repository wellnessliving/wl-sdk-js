/**
 * An endpoint that returns a list of payments for debts added within the previous day.
 *
 * This model is generated automatically based on API.
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
   * @property {string} m_pay_amount The amount of the payment's transaction.
   * @property {number} id_pay_method The payment method ID that was used for the payment. One of {@link RsPayMethodSid} constants.
   * @property {boolean} is_pay_collections Defines whether the payment was performed via a third party service.
   * `true` if the payment was performed via a third party service and this transaction is
   * responsible for an account credit transaction for that payment. See {@link Wl_Collector_DebtPayModel}.
   * `false` if the payment was performed within the Wellnessliving system.
   * @property {boolean} is_debt_paid Defines whether the initial debt to which this related transaction is fully paid.
   * `true` if the debt is fully paid.
   * `false` if the debt is partially paid.
   * @property {string} text_client_name The full name of the debtor client for whom the payment transaction was performed.
   * @property {string} uid The UID of the debtor client for whom the payment transaction was performed.
   */

  /**
   * A list of debt payments for a given business added within the previous day.
   *
   * Each value is an array with next structure:
   * <dl>
   *   <dt>string <var>dtu_pay</var></dt>
   *   <dd>The date and time in UTC of the payment transaction.</dd>
   *   <dt>string <var>m_pay_amount</var></dt>
   *   <dd>The amount of the payment's transaction.</dd>
   *   <dt>int <var>id_pay_method</var></dt>
   *   <dd>The payment method ID that was used for the payment. One of {@link RsPayMethodSid} constants.</dd>
   *   <dt>bool <var>is_pay_collections</var></dt>
   *   <dd>Defines whether the payment was performed via a third party service.
   *     `true` if the payment was performed via a third party service and this transaction is
   *     responsible for an account credit transaction for that payment. See {@link Wl_Collector_DebtPayModel}.
   *     `false` if the payment was performed within the Wellnessliving system.
   *   </dd>
   *   <dt>bool <var>is_debt_paid</var></dt>
   *   <dd>
   *     Defines whether the initial debt to which this related transaction is fully paid.
   *     `true` if the debt is fully paid.
   *     `false` if the debt is partially paid.
   *   </dd>
   *   <dt>string <var>text_client_name</var></dt>
   *   <dd>The full name of the debtor client for whom the payment transaction was performed.</dd>
   *   <dt>string <var>uid</var></dt>
   *   <dd>The UID of the debtor client for whom the payment transaction was performed.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Collector_DebtTransactionModel_a_transaction[]}
   */
  this.a_transaction = [];

  /**
   * The business key of the debt.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Collector_DebtTransactionModel);

/**
 * @inheritDoc
 */
Wl_Collector_DebtTransactionModel.prototype.config=function()
{
  return {"a_field": {"a_transaction": {"get": {"result": true}},"k_business": {"get": {"get": true}}}};
};