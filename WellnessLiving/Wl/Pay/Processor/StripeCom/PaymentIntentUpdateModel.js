/**
 * Updates a `Stripe` Payment Intent.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Processor_StripeCom_PaymentIntentUpdateModel()
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
   * @type {number}
   */
  this.id_currency = 0;

  /**
   * ID of the actor. One of {@link RsPayActorSid} constants.
   *
   * @post get
   * @see RsPayActorSid
   * @type {?number}
   */
  this.id_pay_actor = null;

  /**
   * Key of the business to update Payment Intent for.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the business merchant to update Payment Intent for.
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
  this.m_amount = "";

  /**
   * Surcharge amount to set.
   * Required.
   *
   * @post post
   * @type {string}
   */
  this.m_surcharge = "";

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
  return {"a_field":{"id_currency":{"post":{"post":true}},"id_pay_actor":{"post":{"get":true}},"k_business":{"post":{"get":true}},"k_business_merchant":{"post":{"get":true}},"k_pay_transaction":{"post":{"get":true}},"m_amount":{"post":{"post":true}},"m_surcharge":{"post":{"post":true}},"s_payment_intent":{"post":{"get":true}},"uid_purchase":{"post":{"get":true}}}};
};

/**
 * Updates a `Stripe` Payment Intent.
 *
 * Adjusts the amount and surcharge of the Payment Intent created for the Stripe Payment Element
 * form when the cart contents change, keeping the underlying payment transaction in sync.
 *
 * @function
 * @name Wl_Pay_Processor_StripeCom_PaymentIntentUpdateModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
