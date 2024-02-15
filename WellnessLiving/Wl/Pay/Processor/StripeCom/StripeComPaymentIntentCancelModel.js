/**
 * Cancels existing Payment Intent.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Processor_StripeCom_StripeComPaymentIntentCancelModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * ID of the actor.
   *
   * One of {@link RsPayActorSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_pay_actor = undefined;

  /**
   * Key of the business.
   *
   * @post post
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Key of the business merchant, that processes payment.
   *
   * @post post
   * @type {string}
   */
  this.k_business_merchant = undefined;

  /**
   * Pay transaction key, which was used to create payment intent.
   *
   * @post post
   * @type {string}
   */
  this.k_pay_transaction = undefined;

  /**
   * Payment intent ID.
   *
   * @post post
   * @type {string}
   */
  this.s_payment_intent = undefined;

  /**
   * Payment owner user key.
   *
   * @post post
   * @type {string}
   */
  this.uid_purchase = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Processor_StripeCom_StripeComPaymentIntentCancelModel);

/**
 * @inheritDoc
 */
Wl_Pay_Processor_StripeCom_StripeComPaymentIntentCancelModel.prototype.config=function()
{
  return {"a_field": {"id_pay_actor": {"post": {"post": true}},"k_business": {"post": {"post": true}},"k_business_merchant": {"post": {"post": true}},"k_pay_transaction": {"post": {"post": true}},"s_payment_intent": {"post": {"post": true}},"uid_purchase": {"post": {"post": true}}}};
};