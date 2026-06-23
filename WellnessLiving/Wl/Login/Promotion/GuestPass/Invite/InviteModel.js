/**
 * Revokes a guest pass invitation.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Promotion_GuestPass_Invite_InviteModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Business key.
   *
   * @delete get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Secret of the invitation.
   *
   * @delete get
   * @put get
   * @type {string}
   */
  this.s_secret = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Promotion_GuestPass_Invite_InviteModel);

/**
 * @inheritDoc
 */
Wl_Login_Promotion_GuestPass_Invite_InviteModel.prototype.config=function()
{
  return {"a_field":{"k_business":{"delete":{"get":true},"put":{"get":true}},"s_secret":{"delete":{"get":true},"put":{"get":true}}}};
};

/**
 * Revokes a guest pass invitation.
 *
 * Marks the invitation as rejected and sends an expiry notification to the guest.
 *
 * @function
 * @name Wl_Login_Promotion_GuestPass_Invite_InviteModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Sends a reminder notification for a guest pass invitation.
 *
 * Resends the invitation notification to the guest using the reminder email or SMS template.
 *
 * @function
 * @name Wl_Login_Promotion_GuestPass_Invite_InviteModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
