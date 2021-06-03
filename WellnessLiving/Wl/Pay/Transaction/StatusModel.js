/**
 * Allows to manually change status of a payment transaction.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Transaction_StatusModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * New status of payment transaction.
   *
   * One of {@link \RsPayTransactionStatusSid} constants.
   *
   * @put post
   * @type {number}
   */
  this.id_pay_transaction_status = undefined;

  /**
   * ID of a payment transaction to change.
   *
   * @put get
   * @type {string}
   */
  this.k_pay_transaction = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Transaction_StatusModel);

/**
 * @inheritDoc
 */
Wl_Pay_Transaction_StatusModel.prototype.config=function()
{
  return {"a_field": {"id_pay_transaction_status": {"put": {"post": true}},"k_pay_transaction": {"put": {"get": true}}}};
};