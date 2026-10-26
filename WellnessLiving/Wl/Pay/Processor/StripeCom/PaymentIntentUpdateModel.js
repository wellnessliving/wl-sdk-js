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
   * @typedef {{}} Wl_Pay_Processor_StripeCom_PaymentIntentUpdateModel_a_line_item
   * @property {number|string} i_quantity Quantity, at least `1`. A string of digits is accepted: the values of an API request are strings.
   * @property {string} m_amount Unit amount. Not negative: a discount is a smaller amount.
   * @property {string} text_name Name of the item.
   */

  /**
   * Items of the sale to set in the Checkout Session. Every element: 
   *
   * The whole list is sent, the items of the session that are not in it are removed. The total of the items must
   * equal {@link Thoth_PayProcessor_StripeCom_PaymentIntentUpdateModel.m_amount}.
   * Empty to replace the items of the session with one item for {@link Thoth_PayProcessor_StripeCom_PaymentIntentUpdateModel.m_amount}.
   * Used only with {@link Thoth_PayProcessor_StripeCom_PaymentIntentUpdateModel.s_checkout_session}.
   *
   * @post post
   * @type {Wl_Pay_Processor_StripeCom_PaymentIntentUpdateModel_a_line_item[]}
   */
  this.a_line_item = undefined;

  /**
   * ID of the currency.
   * Required.
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
   * ID of the Checkout Session to update.
   * Required if {@link Thoth_PayProcessor_StripeCom_PaymentIntentUpdateModel.s_payment_intent} is empty.
   *
   * @post get
   * @type {string}
   */
  this.s_checkout_session = "";

  /**
   * Payment intent ID to update.
   * Required if {@link Thoth_PayProcessor_StripeCom_PaymentIntentUpdateModel.s_checkout_session} is empty.
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
  return {"a_field":{"a_line_item":{"post":{"post":true}},"id_currency":{"post":{"post":true}},"id_pay_actor":{"post":{"get":true}},"k_business":{"post":{"get":true}},"k_business_merchant":{"post":{"get":true}},"k_pay_transaction":{"post":{"get":true}},"m_amount":{"post":{"post":true}},"m_surcharge":{"post":{"post":true}},"s_checkout_session":{"post":{"get":true}},"s_payment_intent":{"post":{"get":true}},"uid_purchase":{"post":{"get":true}}}};
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
