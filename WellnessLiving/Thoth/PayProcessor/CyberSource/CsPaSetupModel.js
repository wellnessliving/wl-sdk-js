/**
 * Starts `CyberSource` Payer Authentication setup.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Thoth_PayProcessor_CyberSource_CsPaSetupModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Thoth_PayProcessor_CyberSource_CsPaSetupModel_a_card_a_pay_address
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
   * @typedef {{}} Thoth_PayProcessor_CyberSource_CsPaSetupModel_a_card
   * @property {Thoth_PayProcessor_CyberSource_CsPaSetupModel_a_card_a_pay_address} a_pay_address Payment address for address edit widget. Used only if `is_new` is `true`:
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
   * @post post
   * @type {Thoth_PayProcessor_CyberSource_CsPaSetupModel_a_card}
   */
  this.a_card = undefined;

  /**
   * ID of the actor.
   *
   * @post post
   * @see RsPayActorSid
   * @type {number}
   */
  this.id_pay_actor = 0;

  /**
   * Whether authorization or capture should be performed.
   *
   * `true` (or anything that is not empty) to perform authorization and void immediately.
   *
   * `false` (or anything that is empty, or do not pass this value) to capture the payment amount.
   *
   * @post post
   * @type {boolean}
   */
  this.is_authorize = false;

  /**
   * Key of the business which receives the payment.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the business merchant that should be used to perform the request.
   *
   * @post post
   * @type {string}
   */
  this.k_business_merchant = "";

  /**
   * Key of a custom payment method.
   *
   * `null` or an empty string if payment is performed with a standard payment method.
   *
   * Only payment methods based on {@link RsPayMethodSid} are accepted.
   *
   * @post post
   * @type {?string}
   */
  this.k_pay_method = null;

  /**
   * Key of payment transaction that was created.
   *
   * @post result
   * @type {string}
   */
  this.k_pay_transaction = undefined;

  /**
   * Payment amount.
   *
   * @post post
   * @type {string}
   */
  this.m_amount = "";

  /**
   * Surcharge amount.
   *
   * Empty string or null for zero surcharge amount.
   *
   * @post post
   * @type {string}
   */
  this.m_surcharge = "";

  /**
   * JWT token, as returned by Cyber Source.
   *
   * @post result
   * @type {string}
   */
  this.s_jwt = undefined;

  /**
   * Reference ID, as returned by Cyber Source.
   *
   * @post result
   * @type {string}
   */
  this.s_reference = undefined;

  /**
   * UID of the payment owner.
   *
   * @post post
   * @type {string}
   */
  this.uid_pay_owner = "";

  /**
   * Device collection URL, as returned by Cyber Source.
   *
   * @post result
   * @type {string}
   */
  this.url_collection = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Thoth_PayProcessor_CyberSource_CsPaSetupModel);

/**
 * @inheritDoc
 */
Thoth_PayProcessor_CyberSource_CsPaSetupModel.prototype.config=function()
{
  return {"a_field":{"a_card":{"post":{"post":true}},"id_pay_actor":{"post":{"post":true}},"is_authorize":{"post":{"post":true}},"k_business":{"post":{"post":true}},"k_business_merchant":{"post":{"post":true}},"k_pay_method":{"post":{"post":true}},"k_pay_transaction":{"post":{"result":true}},"m_amount":{"post":{"post":true}},"m_surcharge":{"post":{"post":true}},"s_jwt":{"post":{"result":true}},"s_reference":{"post":{"result":true}},"uid_pay_owner":{"post":{"post":true}},"url_collection":{"post":{"result":true}}}};
};

/**
 * Starts `CyberSource` Payer Authentication setup.
 *
 * Validates the payment request and card data, starts a payment transaction, and requests
 * `CyberSource` to set up payer authentication, returning the JWT and device collection URL
 * needed to continue the flow.
 *
 * @function
 * @name Thoth_PayProcessor_CyberSource_CsPaSetupModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
