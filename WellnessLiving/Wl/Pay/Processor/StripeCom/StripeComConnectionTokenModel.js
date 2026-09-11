/**
 * Gets a secret from a connection token for the Stripe Terminal SDK.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Processor_StripeCom_StripeComConnectionTokenModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * ID of the currency.
   *
   * One of {@link Core_Locale_CurrencySid} constants.
   *
   * @post post
   * @see Core_Locale_CurrencySid
   * @type {number}
   */
  this.id_currency = 0;

  /**
   * ID of the actor.
   *
   * One of {@link RsPayActorSid} constants.
   *
   * @post post
   * @see RsPayActorSid
   * @type {number}
   */
  this.id_pay_actor = 0;

  /**
   * Key of the business.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the business merchant to get the public key for.
   *
   * @post post
   * @type {string}
   */
  this.k_business_merchant = "";

  /**
   * Location key that this connection token is scoped to.
   *
   * If you provide a location, the connection token is only usable with smart readers assigned to that location.
   * If you do not provide a location, the connection token is usable with all readers.
   * For Bluetooth readers, the location of a connection token has no effect.
   * This ensures that Bluetooth readers near you are always discoverable.
   *
   * `null` if the connection token should be usable with all readers.
   *
   * @post post
   * @type {?string}
   */
  this.k_location = null;

  /**
   * Connection token secret key.
   *
   * @post result
   * @type {string}
   */
  this.s_secret = undefined;

  /**
   * Payment owner user key.
   *
   * @post post
   * @type {string}
   */
  this.uid_purchase = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Processor_StripeCom_StripeComConnectionTokenModel);

/**
 * @inheritDoc
 */
Wl_Pay_Processor_StripeCom_StripeComConnectionTokenModel.prototype.config=function()
{
  return {"a_field":{"id_currency":{"post":{"post":true}},"id_pay_actor":{"post":{"post":true}},"k_business":{"post":{"post":true}},"k_business_merchant":{"post":{"post":true}},"k_location":{"post":{"post":true}},"s_secret":{"post":{"result":true}},"uid_purchase":{"post":{"post":true}}}};
};

/**
 * Gets a secret from a connection token for the Stripe Terminal SDK.
 *
 * Validates the business merchant, the payer, and that the currency supports point-of-sale payments, then
 * creates a Stripe Terminal connection token, optionally scoped to the given location, and returns its secret.
 *
 * @function
 * @name Wl_Pay_Processor_StripeCom_StripeComConnectionTokenModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
