/**
 * Claims the guest pass invitation for the current user and accepts it.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Promotion_GuestPass_Claim_ClaimModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Key of the business within which the invitation was issued.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * Secret token identifying the guest pass invitation to claim.
   *
   * @post post
   * @type {string}
   */
  this.s_secret = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Promotion_GuestPass_Claim_ClaimModel);

/**
 * @inheritDoc
 */
Wl_Login_Promotion_GuestPass_Claim_ClaimModel.prototype.config=function()
{
  return {"a_field":{"k_business":{"post":{"post":true}},"s_secret":{"post":{"post":true}}}};
};

/**
 * Claims the guest pass invitation for the current user and accepts it.
 *
 * Validates the invitation secret, verifies the current user is the intended recipient,
 * and marks the invitation as accepted.
 *
 * @function
 * @name Wl_Login_Promotion_GuestPass_Claim_ClaimModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
