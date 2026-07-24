/**
 * Returns a list of guest pass invitations for the given membership or user.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Promotion_GuestPass_Invite_InviteListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Login_Promotion_GuestPass_Invite_InviteListModel_a_guest
   * @property {string} text_mail Email address to which the invitation will be sent.
   * @property {string} text_phone Phone number to which the invitation SMS will be sent.
   */

  /**
   * Guest information.
   *
   * > Used only for `POST` request to send invitation to the guest without account.
   *
   * Required fields:
   *
   * @post post
   * @type {Wl_Login_Promotion_GuestPass_Invite_InviteListModel_a_guest}
   */
  this.a_guest = undefined;

  /**
   * @typedef {{}} Wl_Login_Promotion_GuestPass_Invite_InviteListModel_a_list_a_guest
   * @property {string} text_mail Guest email address.
   * @property {string} text_name_first Guest first name.
   * @property {string} text_name_last Guest last name.
   * @property {?string} text_phone Guest phone number, or `null` if not available.
   * @property {?string} uid Guest user key.  `null` if the guest did not have an account when the invitation was sent.
   */

  /**
   * @typedef {{}} Wl_Login_Promotion_GuestPass_Invite_InviteListModel_a_list
   * @property {Wl_Login_Promotion_GuestPass_Invite_InviteListModel_a_list_a_guest} a_guest Guest user identity data.
   * @property {?string} dtl_accept Acceptance date and time in business timezone in MySQL datetime format. `null` if the invitation has not been accepted.
   * @property {?string} dtl_expire Expiry date and time in business timezone in MySQL datetime format. `null` if the invitation has no expiry date.
   * @property {string} dtl_invite Date and time the invitation was sent, in business timezone in MySQL datetime format.
   * @property {?string} dtl_redeem Redemption date and time in business timezone in MySQL datetime format.    `null` if the invitation has not been redeemed.
   * @property {?string} dtl_reject Rejection date and time in business timezone in MySQL datetime format. `null` if the invitation has not been rejected.
   * @property {?string} dtl_visit Visit date and time in MySQL datetime format. `null` if no visit is associated.
   * @property {?string} dtu_accept Acceptance date and time in UTC in MySQL datetime format. `null` if the invitation has not been accepted.
   * @property {?string} dtu_expire Expiry date and time in UTC in MySQL datetime format.    `null` if the invitation has  no expiry date.
   * @property {string} dtu_invite Date and time the invitation was sent, in UTC in MySQL datetime format.
   * @property {?string} dtu_redeem Redemption date and time in UTC in MySQL datetime format.    `null` if the invitation  has not been redeemed.
   * @property {?string} dtu_reject Rejection date and time in UTC in MySQL datetime format. `null` if the invitation has not been rejected.
   * @property {number} id_status Invitation lifecycle status. One of {@link Wl_Login_Promotion_GuestPass_Invite_InviteStatusEnum} values.
   * @property {?boolean} is_checkin `true` if the guest may only enter when the inviting member is checked in. `null` if no guest pass settings are configured for the promotion.
   * @property {boolean} is_visit_future `true` if associated visit in future, `false` otherwise.
   * @property {?string} k_login_promotion_guest Login promotion key granted to the guest upon acceptance.
   * @property {string} k_login_promotion_host Login promotion key of the host membership.
   * @property {string} k_promotion Guest promotion key.
   * @property {?string} k_visit Visit key redeemed with this guest pass.
   * @property {string} s_secret Secret token used to accept or reject the invitation via a direct link.
   * @property {?string} text_host_name Full name of the host user who sent the invitation.    `null` if the host could not be resolved.
   * @property {string} text_promotion_guest Title of the guest promotion.
   * @property {string} text_promotion_host Title of the host promotion.
   * @property {?string} text_service_title Title of the service booked with the guest pass. `null` if no visit is associated.
   * @property {string} text_timezone Name of the business timezone used for all `dtl_*` fields (e.g. "America/New_York").
   * @property {?string} uid_host User key of the host who sent the invitation.
   * @property {string} url_service URL to the attendance page for the associated class period. Empty string if no visit is associated or the visit is not a class.
   */

  /**
   * List of guest pass invitations suitable for the specific request parameters.
   *
   * @get result
   * @type {Wl_Login_Promotion_GuestPass_Invite_InviteListModel_a_list[]}
   */
  this.a_list = undefined;

  /**
   * End of the guest pass activity period.
   * Used to filter invitations whose activity moment is on or before this local date.
   *
   * `null` to not filter by period end.
   *
   * @get get
   * @type {?string}
   */
  this.dl_end = null;

  /**
   * Start of the guest pass activity period.
   * Used to filter invitations whose activity moment is on or after this local date.
   *
   * `null` to not filter by period start.
   *
   * @get get
   * @type {?string}
   */
  this.dl_start = null;

  /**
   * Whether to include invitations that have already expired or were revoked.
   *
   * @get get
   * @type {boolean}
   */
  this.is_include_expire = false;

  /**
   * Key of the business within which guest pass invitations are managed.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the login promotion which provides the guest pass invitation.
   *
   * > * Used for `GET` to get list of initial invitations for the specific login promotion.
   * > * Used for `POST` to send invitation to the specific user for the specific login promotion.
   *
   * @get get
   * @post get
   * @type {?string}
   */
  this.k_login_promotion = null;

  /**
   * Key of the invited user.
   *
   * > * Used for `GET` to get list of incoming invitations for the specific user.
   * > * Used for `POST` to send invitation to the specific user.
   *
   * @get get
   * @post get
   * @type {?string}
   */
  this.uid_guest = null;

  /**
   * Key of the host user who sent the invitation.
   *
   * > Used only for `GET` request to get list of outgoing invitations from the specific user.
   *
   * @get get
   * @type {?string}
   */
  this.uid_host = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Promotion_GuestPass_Invite_InviteListModel);

/**
 * @inheritDoc
 */
Wl_Login_Promotion_GuestPass_Invite_InviteListModel.prototype.config=function()
{
  return {"a_field":{"a_guest":{"post":{"post":true}},"a_list":{"get":{"result":true}},"dl_end":{"get":{"get":true}},"dl_start":{"get":{"get":true}},"is_include_expire":{"get":{"get":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_login_promotion":{"get":{"get":true},"post":{"get":true}},"uid_guest":{"get":{"get":true},"post":{"get":true}},"uid_host":{"get":{"get":true}}}};
};

/**
 * Returns a list of guest pass invitations for the given membership or user.
 *
 * Supports filtering by host membership, guest user, host user, date range, and whether expired
 * or revoked invitations are included.
 *
 * @function
 * @name Wl_Login_Promotion_GuestPass_Invite_InviteListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Sends a guest pass invitation to a user.
 *
 * Creates a new invitation for the specified guest pass and sends a notification.
 * The guest can be identified by user key or by contact details when no account exists.
 *
 * @function
 * @name Wl_Login_Promotion_GuestPass_Invite_InviteListModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
