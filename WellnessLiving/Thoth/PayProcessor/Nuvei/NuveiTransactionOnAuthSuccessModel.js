/**
 * Updates `Nuvei` transaction with the gateway transaction ID.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Thoth_PayProcessor_Nuvei_NuveiTransactionOnAuthSuccessModel()
{
  WlSdk_ModelAbstract.apply(this);

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
   * Key of a selected payment source.
   *
   * `null` in case when an existed payment source is not used.
   *
   * @post post
   * @type {?string}
   */
  this.k_pay_bank = null;

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
   * Key of payment transaction that was previously created with {@link Thoth_PayProcessor_Nuvei_NuveiOpenOrderModel}.
   *
   * `null` in case when not initialized yet.
   *
   * @post post
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
   * Contents of the encrypted token.
   *
   * `null` in case when not initialized yet.
   *
   * @post post
   * @type {?string}
   */
  this.s_encrypt = null;

  /**
   * The order ID provided by Nuvei.
   *
   * `null` in case when not initialized yet.
   *
   * @post post
   * @type {?string}
   */
  this.s_nuvei_order = null;

  /**
   * The session identifier to be used by the request that processes the newly opened order.
   *
   * `null` in case when not initialized yet.
   *
   * @post post
   * @type {?string}
   */
  this.s_nuvei_session = null;

  /**
   * Payment gateway-specific response object.
   *
   * @post post
   * @type {?string}
   */
  this.s_response = null;

  /**
   * The Gateway transaction ID.
   *
   * @post post
   * @type {?string}
   */
  this.s_transaction = null;

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

WlSdk_ModelAbstract.extend(Thoth_PayProcessor_Nuvei_NuveiTransactionOnAuthSuccessModel);

/**
 * @inheritDoc
 */
Thoth_PayProcessor_Nuvei_NuveiTransactionOnAuthSuccessModel.prototype.config=function()
{
  return {"a_field": {"is_authorize": {"post": {"post": true}},"k_business": {"post": {"post": true}},"k_business_merchant": {"post": {"post": true}},"k_pay_bank": {"post": {"post": true}},"k_pay_method": {"post": {"post": true}},"k_pay_transaction": {"post": {"post": true}},"m_amount": {"post": {"post": true}},"m_surcharge": {"post": {"post": true}},"s_encrypt": {"post": {"post": true}},"s_nuvei_order": {"post": {"post": true}},"s_nuvei_session": {"post": {"post": true}},"s_response": {"post": {"post": true}},"s_transaction": {"post": {"post": true}},"uid_purchase": {"post": {"post": true}}}};
};