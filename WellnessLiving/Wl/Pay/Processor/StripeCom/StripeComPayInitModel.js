/**
 * Creates not captured Payment Intent, returns its status and secret key to use on frontend.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @see Wl\Pay\Processor\StripeCom\StripeComPayInitApi
 */
function Wl_Pay_Processor_StripeCom_StripeComPayInitModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Credit card data.
   *
   * Contents of the payment source as it presents on the payment form.
   * This data is passed into {@link RsPayBankCardSelectWidget::data_set()}.
   *
   * Supplied in case payment source is card.
   * `null` if payment source is other than card or payment is initialized before card data is known.
   *
   * @post post
   * @type {?{}}
   */
  this.a_card = null;

  /**
   * ID of the currency.
   *
   * One of {@link Core_Locale_CurrencySid} constants.
   *
   * `null` in case when not initialized yet.
   *
   * @post post
   * @type {?number}
   */
  this.id_currency = null;

  /**
   * ID of the actor.
   *
   * One of {@link RsPayActorSid} constants.
   *
   * `null` in case when not initialized yet.
   *
   * @post post
   * @type {?number}
   */
  this.id_pay_actor = null;

  /**
   * ID of pay method.
   *
   * One of {@link RsPayMethodSid} constants.
   *
   * `null` in case when not initialized yet.
   *
   * @post post
   * @type {?number}
   */
  this.id_pay_method = null;

  /**
   * Status of this Payment Intent.
   * One of {@link Wl_Pay_Processor_StripeCom_PaymentIntentStatusSid} constants.
   *
   * @post result
   * @type {number}
   */
  this.id_status = undefined;

  /**
   * Whether authorization or capture should be performed.
   *
   * `true` (or anything that is not empty) to perform authorization.
   *
   * `false` (or anything that is empty, or do not pass this value) to charge the payment amount.
   *
   * @post post
   * @type {boolean}
   */
  this.is_authorize = false;

  /**
   * `true` if card swiper is used, `false` otherwise.
   *
   * @post post
   * @type {boolean}
   */
  this.is_pos = false;

  /**
   * `true` if Stripe Payment Element form (@link https://stripe.com/docs/payments/elements) is used, `false` otherwise.
   *
   * @post post
   * @type {boolean}
   */
  this.is_stripe_elements = false;

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
   * Key of the business merchant that should be used to perform the request.
   *
   * `null` in case when not initialized yet.
   *
   * @post post
   * @type {?string}
   */
  this.k_business_merchant = null;

  /**
   * Key of a custom payment method.
   *
   * `null` in case when not initialized yet or empty if payment is performed with a standard payment method.
   *
   * @post post
   * @type {?string}
   */
  this.k_pay_method = null;

  /**
   * Key of payment transaction that was created.
   *
   * `null` in case when not initialized yet.
   *
   * @post result
   * @type {?string}
   */
  this.k_pay_transaction = null;

  /**
   * Payment amount.
   *
   * `null` in case when not initialized yet.
   *
   * @post post
   * @type {?string}
   */
  this.m_amount = null;

  /**
   * Surcharge amount.
   *
   * `null` in case when not initialized yet, empty string or null for zero surcharge amount.
   *
   * @post post
   * @type {?string}
   */
  this.m_surcharge = null;

  /**
   * Payment Intent client secret key.
   *
   * @post result
   * @type {string}
   */
  this.s_client_secret = undefined;

  /**
   * Payment intent ID.
   *
   * @post result
   * @type {string}
   */
  this.s_payment_intent = undefined;

  /**
   * Payment method ID.
   *
   * `null` if Payment intent must be created without existing Payment method.
   * This is the case for card swiper or Stripe Payment Element ({@link https://stripe.com/docs/payments/elements}) -
   * create payment intent first, then create payment method. And vice versa in case of virtual terminal.
   *
   * @post post
   * @type {?string}
   */
  this.s_payment_method = null;

  /**
   * Error message.
   *
   * `null` in case response has not received yet or request is not failed.
   *
   * @post result
   * @type {?string}
   */
  this.text_message = null;

  /**
   * Payment owner user key.
   *
   * `null` in case when not initialized yet or if pay owner is anonymous.
   *
   * @post post
   * @type {?string}
   */
  this.uid_purchase = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Processor_StripeCom_StripeComPayInitModel);

/**
 * @inheritDoc
 */
Wl_Pay_Processor_StripeCom_StripeComPayInitModel.prototype.config=function()
{
  return {"a_field": {"a_card": {"post": {"post": true}},"id_currency": {"post": {"post": true}},"id_pay_actor": {"post": {"post": true}},"id_pay_method": {"post": {"post": true}},"id_status": {"post": {"result": true}},"is_authorize": {"post": {"post": true}},"is_pos": {"post": {"post": true}},"is_stripe_elements": {"post": {"post": true}},"k_business": {"post": {"post": true}},"k_business_merchant": {"post": {"post": true}},"k_pay_method": {"post": {"post": true}},"k_pay_transaction": {"post": {"result": true}},"m_amount": {"post": {"post": true}},"m_surcharge": {"post": {"post": true}},"s_client_secret": {"post": {"result": true}},"s_payment_intent": {"post": {"result": true}},"s_payment_method": {"post": {"post": true}},"text_message": {"post": {"result": true}},"uid_purchase": {"post": {"post": true}}}};
};