/**
 * Cancels the `Nuvei` transaction.
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
   * Key of payment transaction that was created in [NuveiOpenOrderApi](/Thoth/PayProcessor/Nuvei/NuveiOpenOrder.json).
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
  return {"a_field":{"k_business":{"post":{"post":true}},"k_pay_transaction":{"post":{"post":true}}}};
};

/**
 * Cancels the `Nuvei` transaction.
 *
 * Voids the payer authentication session opened by [NuveiOpenOrderApi](/Thoth/PayProcessor/Nuvei/NuveiOpenOrder.json) and schedules the
 * underlying payment transaction to be voided.
 *
 * @function
 * @name Thoth_PayProcessor_Nuvei_NuveiTransactionCancelModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
