/**
 * Creates new `Nuvei` transaction.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Thoth_PayProcessor_Nuvei_NuveiTransactionStartModel()
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
   * @type {{}}
   */
  this.a_card = undefined;

  /**
   * Credit card type.
   * `null` in case card type can not be determined.
   *
   * @post result
   * @type {?*}
   */
  this.id_card_type = null;

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
   * Whether the card information should be saved for future transactions.
   *
   * @post post
   * @type {boolean}
   */
  this.is_save = false;

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

WlSdk_ModelAbstract.extend(Thoth_PayProcessor_Nuvei_NuveiTransactionStartModel);

/**
 * @inheritDoc
 */
Thoth_PayProcessor_Nuvei_NuveiTransactionStartModel.prototype.config=function()
{
  return {"a_field": {"a_card": {"post": {"post": true}},"id_card_type": {"post": {"result": true}},"id_currency": {"post": {"post": true}},"id_pay_actor": {"post": {"post": true}},"id_pay_method": {"post": {"post": true}},"is_authorize": {"post": {"post": true}},"is_save": {"post": {"post": true}},"k_business": {"post": {"post": true}},"k_business_merchant": {"post": {"post": true}},"k_pay_method": {"post": {"post": true}},"k_pay_transaction": {"post": {"result": true}},"m_amount": {"post": {"post": true}},"m_surcharge": {"post": {"post": true}},"text_message": {"post": {"result": true}},"uid_purchase": {"post": {"post": true}}}};
};