/**
 * Returns the redemption status of the Brivo mobile pass invitation.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_DoorAccess_Brivo_Invitation_BrivoUserInvitationModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * Whether the client has a Brivo invitation, and is present in the client's group with Brivo invitation enabled.
   * `true` if the client has a Brivo invitation, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.has_brivo_invitation = undefined;

  /**
   * This will be `true` an invitation is redeemed see {@link Wl_DoorAccess_Brivo_Invitation_BrivoInvitationStatusEnum}, `false` otherwise.
   *
   * @get result
   * @post result
   * @type {boolean}
   */
  this.is_redeem = undefined;

  /**
   * Business key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * UID of a user for whom an invitation should be sent.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_DoorAccess_Brivo_Invitation_BrivoUserInvitationModel);

/**
 * @inheritDoc
 */
Wl_DoorAccess_Brivo_Invitation_BrivoUserInvitationModel.prototype.config=function()
{
  return {"a_field":{"has_brivo_invitation":{"get":{"result":true}},"is_redeem":{"get":{"result":true},"post":{"result":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"uid":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * @function
 * @name Wl_DoorAccess_Brivo_Invitation_BrivoUserInvitationModel.instanceGet
 * @param {string} k_business Business key.
 * @param {string} uid UID of a user for whom an invitation should be sent.
 * @returns {Wl_DoorAccess_Brivo_Invitation_BrivoUserInvitationModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns the redemption status of the Brivo mobile pass invitation.
 *
 * Sets {@link Wl_DoorAccess_Brivo_Invitation_BrivoUserInvitationModel.is_redeem} to `true` if an invitation is redeemed,
 * and to `false` otherwise. Retrieves an invitation status from the database; when it is not
 * redeemed, the invitation data is retrieved from Brivo. Controls the time of the last update
 * of the invitation data and updates it if necessary.
 *
 * @function
 * @name Wl_DoorAccess_Brivo_Invitation_BrivoUserInvitationModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Sends a Brivo mobile pass invitation to a client.
 *
 * Processes a request for Brivo mobile pass invitation for a client. If the invitation
 * has not been redeemed, schedules a task to send it.
 *
 * @function
 * @name Wl_DoorAccess_Brivo_Invitation_BrivoUserInvitationModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
