/**
 * API to manage guest pass invitations within a client's membership or client's profile.
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
   * &gt; Used only for `POST` request to send invitation to the guest without account.
   *
   * Required fields:
   * <dl>
   *     <dt>string `text_mail`</dt>
   *     <dd>Email address to which the invitation will be sent.</dd>
   *     <dt>string `text_phone`</dt>
   *     <dd>Phone number to which the invitation SMS will be sent.</dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Login_Promotion_GuestPass_Invite_InviteListModel_a_guest}
   */
  this.a_guest = [];

  /**
   * List of guest pass invitations suitable for the specific request parameters.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_list = [];

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
   * &gt; * Used for `GET` to get list of initial invitations for the specific login promotion.
   * &gt; * Used for `POST` to send invitation to the specific user for the specific login promotion.
   *
   * @get get
   * @post get
   * @type {?string}
   */
  this.k_login_promotion = null;

  /**
   * Key of the invited user.
   *
   * &gt; * Used for `GET` to get list of incoming invitations for the specific user.
   * &gt; * Used for `POST` to send invitation to the specific user.
   *
   * @get get
   * @post get
   * @type {?string}
   */
  this.uid_guest = null;

  /**
   * Key of the host user who sent the invitation.
   *
   * &gt; Used only for `GET` request to get list of outgoing invitations from the specific user.
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
  return {"a_field": {"a_guest": {"post": {"post": true}},"a_list": {"get": {"result": true}},"dl_end": {"get": {"get": true}},"dl_start": {"get": {"get": true}},"is_include_expire": {"get": {"get": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_login_promotion": {"get": {"get": true},"post": {"get": true}},"uid_guest": {"get": {"get": true},"post": {"get": true}},"uid_host": {"get": {"get": true}}}};
};