/**
 * Cancels a `Stripe` Payment Intent.
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
   * @post post
   * @see RsPayActorSid
   * @type {number}
   */
  this.id_pay_actor = 0;

  /**
   * Key of the business.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the business merchant, that processes payment.
   *
   * @post post
   * @type {string}
   */
  this.k_business_merchant = "";

  /**
   * Pay transaction key, which was used to create payment intent.
   *
   * @post post
   * @type {string}
   */
  this.k_pay_transaction = "";

  /**
   * Payment intent ID.
   *
   * @post post
   * @type {string}
   */
  this.s_payment_intent = "";

  /**
   * Payment owner user key.
   *
   * @post post
   * @type {string}
   */
  this.uid_purchase = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Processor_StripeCom_StripeComPaymentIntentCancelModel);

/**
 * @inheritDoc
 */
Wl_Pay_Processor_StripeCom_StripeComPaymentIntentCancelModel.prototype.config=function()
{
  return {"a_field":{"id_pay_actor":{"post":{"post":true}},"k_business":{"post":{"post":true}},"k_business_merchant":{"post":{"post":true}},"k_pay_transaction":{"post":{"post":true}},"s_payment_intent":{"post":{"post":true}},"uid_purchase":{"post":{"post":true}}}};
};

/**
 * Cancels a `Stripe` Payment Intent.
 *
 * Verifies that the Payment Intent belongs to the current payer authentication session, then
 * refunds the associated payment transaction to release the reserved amount.
 *
 * @function
 * @name Wl_Pay_Processor_StripeCom_StripeComPaymentIntentCancelModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
