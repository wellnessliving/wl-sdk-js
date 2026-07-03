/**
 * Updates the amount of a previously opened `Nuvei` order.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Thoth_PayProcessor_Nuvei_NuveiUpdateOrderModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A list of currencies.
   *
   * Currency constant names must comply with the standard `ISO 4217` for correct integration with other services.
   *
   * Values:
   * - 11 (`AED`): United Arab Emirates dirham.
   * - 6 (`AUD`): Australian dollar.
   * - 18 (`BMD`): Bermudian Dollar.
   * - 19 (`BSD`): Bahamian dollar.
   * - 4 (`CAD`): Canadian dollar.
   * - 8 (`EGP`): Egypt Pound.
   * - 13 (`EUR`): Euro.
   * - 3 (`GBP`): British pound.
   * - 14 (`KWD`): Kuwaiti dinar.
   * - 5 (`KYD`): Cayman Islands dollar.
   * - 16 (`MUR`): Mauritian Rupee.
   * - 10 (`NZD`): New Zealand Dollar.
   * - 12 (`PHP`): Philippines Pesco.
   * - 15 (`SAR`): Saudi Riyal.
   * - 20 (`SGD`): Singapore dollar.
   * - 2 (`UNKNOWN`): Unknown code.
   *
   *   Used when currency is not specified or is not known.
   * - 1 (`USD`): US dollars.
   * - 17 (`XOF`): West African CFA franc.
   *
   *   Is used in Senegal.
   * - 7 (`ZAR`): South African rand.
   *
   * @post post
   * @see Core_Locale_CurrencySid
   * @type {?number}
   */
  this.id_currency = null;

  /**
   * Payment actors (staff member, user or business owner).
   *
   * Values:
   * - 3 (`BUSINESS`): Business owner.
   *
   *   Business owner is a sort of ordinary user. It is used when business acts as a user - for example, pays for business
   *   account to system business.
   * - 1 (`STAFF`): Staff member.
   *
   *   The payment is performed by staff (business owner, or administrator within a business backend) on
   *   behalf of a user.
   * - 2 (`USER`): User.
   *
   *   The payment is performed by the user.
   *
   * @post post
   * @see RsPayActorSid
   * @type {?number}
   */
  this.id_pay_actor = null;

  /**
   * A list of payment methods.
   *
   *
   *
   * Last used ID: 13.
   *
   * Values:
   * - 7 (`ACCOUNT`): Payment with personal user account (rs.pay.account).
   * - 9 (`ACH`): ACH system (USA-specific direct banking transactions).
   * - 4 (`CASH`): Payment with cash.
   * - 5 (`CHEQUE`): Payment with a cheque.
   * - 8 (`COUPON`): Payment with a coupon.
   * - 10 (`DIRECT_ENTRY`): Direct Entry system (australian-specific direct banking transactions).
   * - 2 (`ECOMMERCE`): Online payment. Card not present.
   * - 6 (`EXTERNAL`): Payment with an external terminal.
   * - 11 (`IMPORT_ACCRUAL`): Special method to be used for migration process.
   *
   *   There are sales in Mindbody that were not bought using account balance or reward points.
   *   This is not real revenue and cannot be imported as real sales. So, they can be imported as this special method
   *   to be in the system and to allow business owner to hide on sales report.
   *
   *   In online store this method should not be available.
   * - 1 (`POS`): Payment method at a Points of sale.
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
   * Key of payment transaction that was created in [NuveiOpenOrderApi](/Thoth/PayProcessor/Nuvei/NuveiOpenOrder.json).
   *
   * This will be `null` if not loaded yet.
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
   * The order ID that was created in [NuveiOpenOrderApi](/Thoth/PayProcessor/Nuvei/NuveiOpenOrder.json).
   *
   * This will be `null` if not loaded yet.
   *
   * @post post
   * @type {?string}
   */
  this.s_nuvei_order = null;

  /**
   * The session identifier in which order was created.
   *
   * This will be `null` if not loaded yet.
   *
   * @post post
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

WlSdk_ModelAbstract.extend(Thoth_PayProcessor_Nuvei_NuveiUpdateOrderModel);

/**
 * @inheritDoc
 */
Thoth_PayProcessor_Nuvei_NuveiUpdateOrderModel.prototype.config=function()
{
  return {"a_field":{"id_currency":{"post":{"post":true}},"id_pay_actor":{"post":{"post":true}},"id_pay_method":{"post":{"post":true}},"is_authorize":{"post":{"post":true}},"k_business":{"post":{"post":true}},"k_business_merchant":{"post":{"post":true}},"k_pay_method":{"post":{"post":true}},"k_pay_transaction":{"post":{"post":true}},"m_amount":{"post":{"post":true}},"m_surcharge":{"post":{"post":true}},"s_nuvei_order":{"post":{"post":true}},"s_nuvei_session":{"post":{"post":true}},"text_message":{"post":{"result":true}},"uid_purchase":{"post":{"post":true}}}};
};

/**
 * Updates the amount of a previously opened `Nuvei` order.
 *
 * Validates the payer authentication session, then requests `Nuvei` to update the amount of the order
 * opened by [NuveiOpenOrderApi](/Thoth/PayProcessor/Nuvei/NuveiOpenOrder.json) and adjusts the payment transaction accordingly.
 *
 * @function
 * @name Thoth_PayProcessor_Nuvei_NuveiUpdateOrderModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
