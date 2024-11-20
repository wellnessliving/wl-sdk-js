/**
 * Saves Client's Notifications page settings.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Page_Notifications_NotificationModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Client's notifications settings.
   * Keys are notifications IDs, one of {@link Wl_Profile_Page_Notifications_NotificationSid} constants, values -
   *   <tt>true</tt> if a notification setting is ON, <tt>false</tt> - otherwise.
   *
   * @post get
   * @type {{}}
   */
  this.a_notification_list = undefined;

  /**
   * ID of source mode.
   * One of {@link Wl_Mode_ModeSid} constants.
   *
   * @post get
   * @type {number}
   */
  this.id_mode = undefined;

  /**
   * Business key.
   *
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Secret string to check access.
   * Used only when <var>id_mode</var>={@link Wl_Mode_ModeSid.EMAIL}.
   *
   * @post get
   * @type {?string}
   */
  this.s_secret = null;

  /**
   * User ID.
   *
   * @post get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Page_Notifications_NotificationModel);

/**
 * @inheritDoc
 */
Wl_Profile_Page_Notifications_NotificationModel.prototype.config=function()
{
  return {"a_field": {"a_notification_list": {"post": {"get": true}},"id_mode": {"post": {"get": true}},"k_business": {"post": {"get": true}},"s_secret": {"post": {"get": true}},"uid": {"post": {"get": true}}}};
};