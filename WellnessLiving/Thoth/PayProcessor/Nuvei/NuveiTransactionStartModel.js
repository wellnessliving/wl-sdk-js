/**
 * Starts a `Nuvei` card authorization transaction for a purchase or a card verification.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @deprecated Use {@link Thoth_PayProcessor_Nuvei_NuveiOpenOrderModel} instead.
 */
function Thoth_PayProcessor_Nuvei_NuveiTransactionStartModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Thoth_PayProcessor_Nuvei_NuveiTransactionStartModel_a_card_a_pay_address
   * @property {boolean} is_new `true` if user has chosen to add new address, `false` otherwise.
   * @property {string} k_geo_country Key of the country. Required for newly added billing address.
   * @property {string} k_geo_region Key of the region. Required for newly added billing address.
   * @property {?string} k_pay_address Chosen payment address key. It will be set even if user decided to add new address.
   * @property {string} s_city City name. Required for newly added billing address.
   * @property {string} s_name User name. Required for newly added billing address.
   * @property {string} s_phone Phone number. Required for newly added billing address.
   * @property {string} s_postal Postal code. Required for newly added billing address.
   * @property {string} s_street1 First address line. Required for newly added billing address.
   * @property {string} s_street2 Second address line. Required for newly added billing address.
   */

  /**
   * @typedef {{}} Thoth_PayProcessor_Nuvei_NuveiTransactionStartModel_a_card
   * @property {Thoth_PayProcessor_Nuvei_NuveiTransactionStartModel_a_card_a_pay_address} a_pay_address Payment address for address edit widget.
   * @property {number} i_csc Card CSC code. Required for newly added card.
   * @property {number} i_month Card expiration month. Required for newly added card.
   * @property {number} i_year Card expiration year. Required for newly added card.
   * @property {boolean} is_default If the card should be made the default payment method. Required for newly added card.
   * @property {boolean} is_new Whenever card is new.
   * @property {boolean} is_save If the card information should be saved for future transactions. Required for newly added card.
   * @property {string} k_pay_bank Key of existing payment source in case of editing.
   * @property {string} s_name Card nickname. Required for newly added card.
   * @property {string} s_number Card number. Required for newly added card.
   */

  /**
   * Credit card data.
   *
   * Contents of the payment source as it presents on the payment form.
   *
   *
   *
   *
   * Supplied in case payment source is card.
   * `null` if payment source is other than card or payment is initialized before card data is known.
   *
   * @post post
   * @type {?Thoth_PayProcessor_Nuvei_NuveiTransactionStartModel_a_card}
   */
  this.a_card = null;

  /**
   * Credit card type.
   * `null` in case card type can not be determined.
   *
   * @post result
   * @see Thoth_WlPay_Bank_Card_CardTypeEnum
   * @type {?number}
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
   * @see Core_Locale_CurrencySid
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
   * @see RsPayActorSid
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
   * @see RsPayMethodSid
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
  return {"a_field":{"a_card":{"post":{"post":true}},"id_card_type":{"post":{"result":true}},"id_currency":{"post":{"post":true}},"id_pay_actor":{"post":{"post":true}},"id_pay_method":{"post":{"post":true}},"is_authorize":{"post":{"post":true}},"is_save":{"post":{"post":true}},"k_business":{"post":{"post":true}},"k_business_merchant":{"post":{"post":true}},"k_pay_method":{"post":{"post":true}},"k_pay_transaction":{"post":{"result":true}},"m_amount":{"post":{"post":true}},"m_surcharge":{"post":{"post":true}},"text_message":{"post":{"result":true}},"uid_purchase":{"post":{"post":true}}}};
};

/**
 * Starts a `Nuvei` card authorization transaction for a purchase or a card verification.
 *
 * Validates the submitted card form (either a new card or a previously stored one), creates a
 * pending pay transaction, obtains a `Nuvei` session token, and requests the card
 * authorization or, when only verifying the card, a zero-amount authorization. On success,
 * stores a `Nuvei` 3-D Secure payment session for a possible follow-up step and schedules a
 * task to void the transaction automatically if it is never completed. The transaction is
 * finalized with the processor result regardless of the outcome.
 *
 * @function
 * @name Thoth_PayProcessor_Nuvei_NuveiTransactionStartModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
