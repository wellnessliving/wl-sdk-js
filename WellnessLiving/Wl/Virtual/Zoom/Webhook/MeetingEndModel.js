/**
 * Webhook for event meeting end.
 *
 * This webhook is used for old Zoom application.
 *
 * Used for Zoom applications, which are created for {@link \Wl\Business\Account\Subscription\FitliveSubscription} with
 * {@link Wl_Business_Account_Subscription_FitliveSubscriptionSid.ADVANCED} and {@link Wl_Business_Account_Subscription_FitliveSubscriptionSid.BASIC} plans.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Virtual_Zoom_Webhook_MeetingEndModel()
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
   * Meeting payload information.
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

WlSdk_ModelAbstract.extend(Wl_Virtual_Zoom_Webhook_MeetingEndModel);

/**
 * @inheritDoc
 */
Wl_Virtual_Zoom_Webhook_MeetingEndModel.prototype.config=function()
{
  return {"a_field": {"event": {"post": {"post": true}},"payload": {"post": {"post": true}},"encryptedToken": {"post": {"result": true}},"plainToken": {"post": {"result": true}}}};
};