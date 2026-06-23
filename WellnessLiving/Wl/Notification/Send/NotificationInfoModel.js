/**
 * Returns configuration information about the specified notification for the given business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Notification_Send_NotificationInfoModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Information about mail.
   *
   * @get result
   * @type {*[]}
   */
  this.a_info = undefined;

  /**
   * ID of the notification. See {@link RsMailSid}.
   *
   * @get get
   * @see RsMailSid
   * @type {number}
   */
  this.id_notification = 0;

  /**
   * Key of the business where information about notification should be retrieved.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Notification_Send_NotificationInfoModel);

/**
 * @inheritDoc
 */
Wl_Notification_Send_NotificationInfoModel.prototype.config=function()
{
  return {"a_field":{"a_info":{"get":{"result":true}},"id_notification":{"get":{"get":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * Returns configuration information about the specified notification for the given business.
 *
 * Validates the business key and notification ID, then returns the notification configuration including
 * mail template settings and channel availability for the given business. Requires the `rs.profile` privilege.
 *
 * @function
 * @name Wl_Notification_Send_NotificationInfoModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
