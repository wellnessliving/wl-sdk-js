/**
 * Gets Stripe charge information.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Thoth_PayProcessor_StripeCom_StripeComChargeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * ID of the currency.
   *
   * One of {@link Core_Locale_CurrencySid} constants.
   *
   * @get get
   * @see Core_Locale_CurrencySid
   * @type {number}
   */
  this.id_currency = 0;

  /**
   * ID of the actor.
   *
   * One of {@link RsPayActorSid} constants.
   *
   * @get get
   * @see RsPayActorSid
   * @type {number}
   */
  this.id_pay_actor = 0;

  /**
   * Key of the business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the business merchant to get the public key for.
   *
   * @get get
   * @type {string}
   */
  this.k_business_merchant = "";

  /**
   * @typedef {{}} Thoth_PayProcessor_StripeCom_StripeComChargeModel_o_payment_method_details
   * @property {string} s_generated_card_id ID of a card payment method generated.
   * @property {string} text_brand Card brand, like visa or mastercard.
   * @property {string} text_cardholder_name The cardholder name as read from the card.
   * @property {string} text_exp_month Two-digit number representing the card's expiration month.
   * @property {string} text_exp_year Four-digit number representing the card's expiration year.
   * @property {string} text_last4 Last four digits of the card number.
   */

  /**
   * Details about the payment method at the time of the transaction:
   *
   * @get result
   * @type {Thoth_PayProcessor_StripeCom_StripeComChargeModel_o_payment_method_details}
   */
  this.o_payment_method_details = undefined;

  /**
   * Charge id to get data for.
   *
   * @get get
   * @type {string}
   */
  this.s_charge = "";

  /**
   * ID of the payment method used in this charge.
   *
   * @get result
   * @type {string}
   */
  this.s_payment_method = undefined;

  /**
   * Payment owner user key.
   *
   * @get get
   * @type {string}
   */
  this.uid_purchase = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Thoth_PayProcessor_StripeCom_StripeComChargeModel);

/**
 * @inheritDoc
 */
Thoth_PayProcessor_StripeCom_StripeComChargeModel.prototype.config=function()
{
  return {"a_field":{"id_currency":{"get":{"get":true}},"id_pay_actor":{"get":{"get":true}},"k_business":{"get":{"get":true}},"k_business_merchant":{"get":{"get":true}},"o_payment_method_details":{"get":{"result":true}},"s_charge":{"get":{"get":true}},"s_payment_method":{"get":{"result":true}},"uid_purchase":{"get":{"get":true}}}};
};

/**
 * Gets Stripe charge information.
 *
 * Validates the business merchant and payer, retrieves the charge from Stripe by its charge id,
 * and returns the payment method used along with the payment method details captured at the time
 * of the transaction.
 *
 * @function
 * @name Thoth_PayProcessor_StripeCom_StripeComChargeModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
