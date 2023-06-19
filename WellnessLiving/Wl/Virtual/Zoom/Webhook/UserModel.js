/**
 * Webhook for all events related with users.
 *
 * This webhook is used for old Zoom application.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Virtual_Zoom_Webhook_UserModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Event type.
   *
   * @post post
   * @see Wl_Zoom_ZoomApiEventSid
   * @type {number}
   */
  this.event = 0;

  /**
   * User payload information.
   *
   * @post post
   * @type {*}
   */
  this.payload = undefined;

  /**
   * Encrypted token string.
   *
   * @post result
   * @type {string}
   */
  this.encryptedToken = "";

  /**
   * Plain token string.
   *
   * @post result
   * @type {string}
   */
  this.plainToken = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Virtual_Zoom_Webhook_UserModel);

/**
 * @inheritDoc
 */
Wl_Virtual_Zoom_Webhook_UserModel.prototype.config=function()
{
  return {"a_field": {"event": {"post": {"post": true}},"payload": {"post": {"post": true}},"encryptedToken": {"post": {"result": true}},"plainToken": {"post": {"result": true}}}};
};