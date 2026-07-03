/**
 * Gets the `Stripe` public key for a merchant.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Thoth_PayProcessor_StripeCom_StripeComKeyModel()
{
  WlSdk_ModelAbstract.apply(this);

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
   * Merchant public key.
   *
   * `null` before the key is set.
   * It is set by `post()`.
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
  this.uid_purchase = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Thoth_PayProcessor_StripeCom_StripeComKeyModel);

/**
 * @inheritDoc
 */
Thoth_PayProcessor_StripeCom_StripeComKeyModel.prototype.config=function()
{
  return {"a_field":{"id_pay_actor":{"post":{"post":true}},"k_business":{"post":{"post":true}},"k_business_merchant":{"post":{"post":true}},"s_public":{"post":{"result":true}},"uid_purchase":{"post":{"post":true}}}};
};

/**
 * Gets the `Stripe` public key for a merchant.
 *
 * Returns the publishable key configured for the business merchant, so it can be used by the
 * frontend to initialize `Stripe` payment elements.
 *
 * @function
 * @name Thoth_PayProcessor_StripeCom_StripeComKeyModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
