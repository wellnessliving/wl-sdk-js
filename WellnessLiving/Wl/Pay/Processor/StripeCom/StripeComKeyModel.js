/**
 * Get Stripe public key for a merchant.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Processor_StripeCom_StripeComKeyModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * ID of the actor.
   *
   * One of {@link RsPayActorSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_pay_actor = undefined;

  /**
   * Key of the business.
   *
   * @post post
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Key of the business merchant to get the public key for.
   *
   * @post post
   * @type {string}
   */
  this.k_business_merchant = undefined;

  /**
   * Merchant public key.
   *
   * `null` before the key is set.
   * It is set by {@link Wl_Pay_Processor_StripeCom_StripeComKeyModel.post()}.
   *
   * @post result
   * @type {?string}
   */
  this.s_public = null;

  /**
   * Payment owner user key.
   *
   * @post post
   * @type {string}
   */
  this.uid_purchase = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Processor_StripeCom_StripeComKeyModel);

/**
 * @inheritDoc
 */
Wl_Pay_Processor_StripeCom_StripeComKeyModel.prototype.config=function()
{
  return {"a_field": {"id_pay_actor": {"post": {"post": true}},"k_business": {"post": {"post": true}},"k_business_merchant": {"post": {"post": true}},"s_public": {"post": {"result": true}},"uid_purchase": {"post": {"post": true}}}};
};