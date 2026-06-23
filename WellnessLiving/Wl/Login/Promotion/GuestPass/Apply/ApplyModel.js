/**
 * Applies the guest pass of the specified login promotion to the attendee's visit.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Promotion_GuestPass_Apply_ApplyModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Business key.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Login promotion key of the host member's class membership whose guest pass
   * balance will be used.
   *
   * @post post
   * @type {string}
   */
  this.k_login_promotion = "";

  /**
   * Visit key of the attendee to whom the guest pass is applied.
   *
   * @post post
   * @type {string}
   */
  this.k_visit = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Promotion_GuestPass_Apply_ApplyModel);

/**
 * @inheritDoc
 */
Wl_Login_Promotion_GuestPass_Apply_ApplyModel.prototype.config=function()
{
  return {"a_field":{"k_business":{"post":{"get":true}},"k_login_promotion":{"post":{"post":true}},"k_visit":{"post":{"post":true}}}};
};

/**
 * Applies the guest pass of the specified login promotion to the attendee's visit.
 *
 * If the visit is already paid (with a regular session pass or an existing guest pass),
 * the previous payment is unwound before the new guest pass is applied.
 *
 * @function
 * @name Wl_Login_Promotion_GuestPass_Apply_ApplyModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
