/**
 * Initializes a `Stripe` payment.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Thoth_PayProcessor_StripeCom_StripeComPayInitModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Thoth_PayProcessor_StripeCom_StripeComPayInitModel_a_card_a_pay_address
   * @property {boolean} is_new `true` if user has chosen to add new address, `false` otherwise.
   * @property {string} k_geo_country Key of the country.  Used only if `is_new` is `true`.
   * @property {string} k_geo_region Key of the region.  Used only if `is_new` is `true`.
   * @property {?string} k_pay_address Chosen payment address key.  Set even if user decided to add new address.
   * @property {string} s_city City name. Used only if `is_new` is `true`.
   * @property {string} s_name User's full name.
   * @property {string} s_phone Phone number. Used only if `is_new` is `true`.
   * @property {string} s_postal Postal code. Used only if `is_new` is `true`.
   * @property {string} s_street1 First address line. Used only if `is_new` is `true`.
   * @property {string} s_street2 Second address line. Used only if `is_new` is `true`.
   * @property {?string} text_mail User's email. `null` if not specified. Used only if `is_new` is `true`.
   */

  /**
   * @typedef {{}} Thoth_PayProcessor_StripeCom_StripeComPayInitModel_a_card
   * @property {Thoth_PayProcessor_StripeCom_StripeComPayInitModel_a_card_a_pay_address} a_pay_address Payment address for address edit widget. Used only if `is_new` is `true`:
   * @property {number} i_csc Card CSC code. Used only if `is_new` is `true`.
   * @property {number} i_month Card expiration month. Used only if `is_new` is `true`.
   * @property {number} i_year Card expiration year. Used only if `is_new` is `true`.
   * @property {?number} id_card_type Card type. One of {@link Thoth_WlPay_Bank_Card_CardTypeEnum} constants as int. Used only if `is_new` is `true`.
   * @property {boolean} is_default If the card should be made the default payment method. Used only if `is_new` is `true`.
   * @property {boolean} is_new Whether a new card is being added instead of an existing one being selected.
   * @property {boolean} is_save If the card information should be saved for future transactions. Used only if `is_new` is `true`.
   * @property {string} k_pay_bank Selected payment card key. Used only if `is_new` is `false`. `0` if no existing card is selected.
   * @property {string} s_name Card nickname. Used only if `is_new` is `true`.
   * @property {string} s_number Card number. Used only if `is_new` is `true`.
   */

  /**
   * Credit card data.
   *
   * Contents of the payment source as it presents on the payment form.
   *
   * Supplied in case payment source is card.
   * `null` if payment source is other than card or payment is initialized before card data is known.
   *
   * @post post
   * @type {?Thoth_PayProcessor_StripeCom_StripeComPayInitModel_a_card}
   */
  this.a_card = null;

  /**
   * @typedef {{}} Thoth_PayProcessor_StripeCom_StripeComPayInitModel_a_line_item
   * @property {number} i_quantity Quantity, at least `1`. An integer, or a string of digits: the values of an API request are strings.
   * @property {string} m_amount Unit amount. Not negative: a discount is a smaller amount.
   * @property {string} text_name Name of the item.
   */

  /**
   * Items of the sale for the Checkout Session. Every element: 
   *
   * The total of the items must equal {@link Thoth_PayProcessor_StripeCom_StripeComPayInitModel.m_amount}.
   * Empty to send one item for the whole amount. Used only if the payment runs on a Checkout Session.
   *
   * @post post
   * @type {Thoth_PayProcessor_StripeCom_StripeComPayInitModel_a_line_item[]}
   */
  this.a_line_item = undefined;

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
   * Status of this Payment Intent.
   *
   * @post result
   * @see Thoth_PayProcessor_StripeCom_PaymentIntentStatusSid
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
   * `true` if the client card form can run on a Checkout Session, `false` otherwise.
   *
   * Only the card form of the web sets it. API clients and the mobile apps do not: the mobile Payment Sheet takes
   * the client secret of a Payment Intent only. A session is created only if this flag is set, the Stripe Payment
   * Element is used ({@link Thoth_PayProcessor_StripeCom_StripeComPayInitModel.is_stripe_elements}) and the environment allows it. The answer
   * tells which one was created:
   * {@link Thoth_PayProcessor_StripeCom_StripeComPayInitModel.s_checkout_session}.
   *
   * @post post
   * @type {boolean}
   */
  this.is_checkout_session = false;

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
   * @post post,result
   * @type {?string}
   */
  this.m_amount = null;

  /**
   * Surcharge amount.
   *
   * `null` in case when not initialized yet, empty string or null for zero surcharge amount. See
   * {@link Thoth_PayProcessor_AbstractTransactionStartupModel.m_amount} about a subclass correcting this value (SAL-1314).
   *
   * @post post,result
   * @type {?string}
   */
  this.m_surcharge = null;

  /**
   * ID of the Checkout Session when the client card form runs on a Checkout Session.
   *
   * `null` if the form runs on a Payment Intent. In that case {@link Thoth_PayProcessor_StripeCom_StripeComPayInitModel.s_client_secret} is the
   * client secret of the session, and {@link Thoth_PayProcessor_StripeCom_StripeComPayInitModel.s_payment_intent} is empty: Stripe creates the
   * Payment Intent when the client confirms the session.
   *
   * @post result
   * @type {?string}
   */
  this.s_checkout_session = null;

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
   *
   * @post post
   * @type {?string}
   */
  this.s_payment_method = null;

  /**
   * Email of the payer from the profile, for the client card form that runs on a Checkout Session.
   *
   * Stripe needs an email to complete a session. The client passes it to `confirm` of the session, because the
   * Stripe customer of the payer is created without an email.
   *
   * `null` if the card form does not run on a Checkout Session, or the payer has no email in the profile.
   *
   * @post result
   * @type {?string}
   */
  this.text_mail_payer = null;

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

WlSdk_ModelAbstract.extend(Thoth_PayProcessor_StripeCom_StripeComPayInitModel);

/**
 * @inheritDoc
 */
Thoth_PayProcessor_StripeCom_StripeComPayInitModel.prototype.config=function()
{
  return {"a_field":{"a_card":{"post":{"post":true}},"a_line_item":{"post":{"post":true}},"id_currency":{"post":{"post":true}},"id_pay_actor":{"post":{"post":true}},"id_pay_method":{"post":{"post":true}},"id_status":{"post":{"result":true}},"is_authorize":{"post":{"post":true}},"is_checkout_session":{"post":{"post":true}},"is_pos":{"post":{"post":true}},"is_stripe_elements":{"post":{"post":true}},"k_business":{"post":{"post":true}},"k_business_merchant":{"post":{"post":true}},"k_pay_method":{"post":{"post":true}},"k_pay_transaction":{"post":{"result":true}},"m_amount":{"post":{"post":true,"result":true}},"m_surcharge":{"post":{"post":true,"result":true}},"s_checkout_session":{"post":{"result":true}},"s_client_secret":{"post":{"result":true}},"s_payment_intent":{"post":{"result":true}},"s_payment_method":{"post":{"post":true}},"text_mail_payer":{"post":{"result":true}},"text_message":{"post":{"result":true}},"uid_purchase":{"post":{"post":true}}}};
};

/**
 * Initializes a `Stripe` payment.
 *
 * Starts a payment transaction and creates a not-captured Payment Intent at `stripe.com`, returning
 * its status and client secret to continue the payment flow on the frontend.
 *
 * @function
 * @name Thoth_PayProcessor_StripeCom_StripeComPayInitModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
