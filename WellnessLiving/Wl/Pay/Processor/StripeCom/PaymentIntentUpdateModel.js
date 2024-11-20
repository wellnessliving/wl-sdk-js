/**
 * Updates created Payment Intent.
 *
 * WARNING: Can be used for Stripe Payment Element only.
 * Currently this API is used to update Payment Intent, that is created to show Stripe Payment Element form, in case of cart
 * changes.
 * To use for other cases, please consider extending code of this API.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Processor_StripeCom_PaymentIntentUpdateModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * ID of the currency. One of {@link Core_Locale_CurrencySid} constants.
   * Required.
   *
   * @post post
   * @type {number}
   */
  this.id_currency = 0;

  /**
   * ID of the actor. One of {@link RsPayActorSid} constants.
   * Required.
   *
   * @post get
   * @type {number}
   */
  this.id_pay_actor = 0;

  /**
   * Key of the business to update Payment Intent for.
   * Required.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the business merchant to update Payment Intent for.
   * Required.
   *
   * @post get
   * @type {string}
   */
  this.k_business_merchant = "";

  /**
   * Key of the payment transaction to update.
   * Required.
   *
   * @post get
   * @type {string}
   */
  this.k_pay_transaction = "";

  /**
   * Payment amount to set.
   * Required.
   *
   * @post post
   * @type {string}
   */
  this.m_amount = "0.00";

  /**
   * Surcharge amount to set.
   * Required.
   *
   * @post post
   * @type {string}
   */
  this.m_surcharge = "0.00";

  /**
   * Payment intent ID to update.
   * Required.
   *
   * @post get
   * @type {string}
   */
  this.s_payment_intent = "";

  /**
   * Payment owner user key.
   * `null` if pay owner is anonymous.
   *
   * @post get
   * @type {?string}
   */
  this.uid_purchase = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Processor_StripeCom_PaymentIntentUpdateModel);

/**
 * @inheritDoc
 */
Wl_Pay_Processor_StripeCom_PaymentIntentUpdateModel.prototype.config=function()
{
  return {"a_field": {"id_currency": {"post": {"post": true}},"id_pay_actor": {"post": {"get": true}},"k_business": {"post": {"get": true}},"k_business_merchant": {"post": {"get": true}},"k_pay_transaction": {"post": {"get": true}},"m_amount": {"post": {"post": true}},"m_surcharge": {"post": {"post": true}},"s_payment_intent": {"post": {"get": true}},"uid_purchase": {"post": {"get": true}}}};
};