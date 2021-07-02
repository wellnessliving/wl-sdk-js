/**
 * This call retrieves and validates the authentication results from issuer and allows the merchant to proceed with
 * processing the payment
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Processor_CyberSource_CsPaValidateModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Key of payment transaction that was previously created with {@link \Wl\Pay\Processor\CyberSource\CsPaSetupApi}.
   *
   * Primary key in {@link \RsPayTransactionSql}.
   *
   * @post post
   * @type {string}
   */
  this.k_pay_transaction = undefined;

  /**
   * Payer authentication transaction ID.
   *
   * @post post
   * @type {string}
   */
  this.s_transaction = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Processor_CyberSource_CsPaValidateModel);

/**
 * @inheritDoc
 */
Wl_Pay_Processor_CyberSource_CsPaValidateModel.prototype.config=function()
{
  return {"a_field": {"k_pay_transaction": {"post": {"post": true}},"s_transaction": {"post": {"post": true}}}};
};