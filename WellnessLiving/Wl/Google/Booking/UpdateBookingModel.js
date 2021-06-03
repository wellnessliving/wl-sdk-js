/**
 * Api endpoint used by Google to update booking.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Google_Booking_UpdateBookingModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Booking to be updated.
   *
   * @post post
   * @type {*}
   */
  this.booking = undefined;

  /**
   * Information about failure.
   *
   * @post result
   * @type {?{}}
   */
  this.booking_failure = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Google_Booking_UpdateBookingModel);

/**
 * @inheritDoc
 */
Wl_Google_Booking_UpdateBookingModel.prototype.config=function()
{
  return {"a_field": {"booking": {"post": {"post": true}},"booking_failure": {"post": {"result": true}}}};
};