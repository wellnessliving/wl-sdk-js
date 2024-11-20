/**
 * Booking creation.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_GymPass_Webhook_BookingCreateModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Event type.
   *
   * @post post
   * @type {*}
   */
  this.event_type = undefined;

  /**
   * Event data.
   *
   * @post post
   * @type {*}
   */
  this.event_data = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_GymPass_Webhook_BookingCreateModel);

/**
 * @inheritDoc
 */
Wl_GymPass_Webhook_BookingCreateModel.prototype.config=function()
{
  return {"a_field": {"event_type": {"post": {"post": true}},"event_data": {"post": {"post": true}}}};
};