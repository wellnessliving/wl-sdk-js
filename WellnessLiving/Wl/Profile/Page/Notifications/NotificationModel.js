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
   * Keys are notifications IDs, one of {@link \Wl\Profile\Page\Notifications\NotificationSid} constants, values -
   *   <tt>true</tt> if a notification setting is ON, <tt>false</tt> - otherwise.
   *
   * @post get
   * @type {{}}
   */
  this.a_notification_list = undefined;

  /**
   * Business key. Primary key in {@link \RsBusinessSql} table.
   *
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * User ID. Primary key in {@link \PassportLoginSql} table.
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
  return {"a_field": {"a_notification_list": {"post": {"get": true}},"k_business": {"post": {"get": true}},"uid": {"post": {"get": true}}}};
};