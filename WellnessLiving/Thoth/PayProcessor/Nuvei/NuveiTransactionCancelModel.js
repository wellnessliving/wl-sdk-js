/**
 * Cancels `Nuvei` transaction.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Thoth_PayProcessor_Nuvei_NuveiTransactionCancelModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Key of the business which receives the payment.
   *
   * `null` in case when not initialized yet.
   *
   * @post post
   * @type {?string}
   */
  this.k_business = null;

  /**
   * Key of payment transaction that was created in {@link Thoth_PayProcessor_Nuvei_NuveiOpenOrderModel}.
   *
   * This will be `null` if not loaded yet.
   *
   * @post post
   * @type {?string}
   */
  this.k_pay_transaction = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Thoth_PayProcessor_Nuvei_NuveiTransactionCancelModel);

/**
 * @inheritDoc
 */
Thoth_PayProcessor_Nuvei_NuveiTransactionCancelModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"post": {"post": true}},"k_pay_transaction": {"post": {"post": true}}}};
};