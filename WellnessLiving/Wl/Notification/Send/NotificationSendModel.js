/**
 * Schedules or immediately sends a notification to clients of the specified business or location.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Notification_Send_NotificationSendModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Custom array with information which can be used to generate notification.
   *
   * Use {@link Wl_Notification_Send_NotificationInfoModel} for more information about available fields.
   *
   * @post post
   * @type {*[]}
   */
  this.a_data = undefined;

  /**
   * Date and time in UTC, when notification should be sent. Empty string means to send immediately.
   *
   * If date and time are set, it should be reasonable. If it's too far in the future, API returns an error.
   *
   * @post post
   * @type {string}
   */
  this.dtu_send = "";

  /**
   * ID of the notification. See {@link RsMailSid}.
   *
   * Contact with WellnessLiving support to get the list of available notifications.
   *
   * @post post
   * @see RsMailSid
   * @type {number}
   */
  this.id_notification = 0;

  /**
   * Key of the business where notification should be sent.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the location.
   * If it's not empty, only clients from this location will get notification.
   * `null` to not limit recipients with a certain location.
   *
   * @post post
   * @type {?string}
   */
  this.k_location = null;

  /**
   * List of UIDs joined with comma, if notification should be sent to certain recipients.
   * Empty string means to send to all clients of the business or location with proper subscription level.
   *
   * @post post
   * @type {string}
   */
  this.s_uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Notification_Send_NotificationSendModel);

/**
 * @inheritDoc
 */
Wl_Notification_Send_NotificationSendModel.prototype.config=function()
{
  return {"a_field":{"a_data":{"post":{"post":true}},"dtu_send":{"post":{"post":true}},"id_notification":{"post":{"post":true}},"k_business":{"post":{"post":true}},"k_location":{"post":{"post":true}},"s_uid":{"post":{"post":true}}}};
};

/**
 * Schedules or immediately sends a notification to clients of the specified business or location.
 *
 * Validates the business, optional location, and notification ID, then either dispatches the notification
 * immediately or schedules it at the UTC date and time provided in `$dtu_send` (must be within 7 days).
 * Optionally restricts recipients to specific UIDs via `$s_uid`. Requires the `rs.profile` privilege.
 *
 * @function
 * @name Wl_Notification_Send_NotificationSendModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
