/**
 * Authenticates `Nuvei` merchant credentials and sets up an order in the `Nuvei` system.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Thoth_PayProcessor_Nuvei_NuveiOpenOrderModel()
{
  WlSdk_ModelAbstract.apply(this);

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
   * The order ID provided by Nuvei.
   *
   * `null` in case of errors.
   *
   * @post result
   * @type {?string}
   */
  this.s_nuvei_order = null;

  /**
   * The session identifier to be used by the request that processes the newly opened order.
   *
   * `null` in case of errors.
   *
   * @post result
   * @type {?string}
   */
  this.s_nuvei_session = null;

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

WlSdk_ModelAbstract.extend(Thoth_PayProcessor_Nuvei_NuveiOpenOrderModel);

/**
 * @inheritDoc
 */
Thoth_PayProcessor_Nuvei_NuveiOpenOrderModel.prototype.config=function()
{
  return {"a_field": {"id_currency": {"post": {"post": true}},"id_pay_actor": {"post": {"post": true}},"id_pay_method": {"post": {"post": true}},"is_authorize": {"post": {"post": true}},"k_business": {"post": {"post": true}},"k_business_merchant": {"post": {"post": true}},"k_pay_method": {"post": {"post": true}},"k_pay_transaction": {"post": {"result": true}},"m_amount": {"post": {"post": true}},"m_surcharge": {"post": {"post": true}},"s_nuvei_order": {"post": {"result": true}},"s_nuvei_session": {"post": {"result": true}},"text_message": {"post": {"result": true}},"uid_purchase": {"post": {"post": true}}}};
};