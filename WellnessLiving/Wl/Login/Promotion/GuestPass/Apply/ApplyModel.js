/**
 * Endpoint designed to pay for a visit with guest pass options attached to specific promotion.
 * If visit is paid already then old payment option will be revoked without penalties.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Promotion_GuestPass_Apply_ApplyModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Full name of the inviting member, for display in the attendance row.
   *
   * @post result
   * @type {string}
   */
  this.html_inviter_name = "";

  /**
   * Name of the guest pass promotion used.
   *
   * @post result
   * @type {string}
   */
  this.html_pass_name = "";

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
  return {"a_field": {"html_inviter_name": {"post": {"result": true}},"html_pass_name": {"post": {"result": true}},"k_business": {"post": {"get": true}},"k_login_promotion": {"post": {"post": true}},"k_visit": {"post": {"post": true}}}};
};