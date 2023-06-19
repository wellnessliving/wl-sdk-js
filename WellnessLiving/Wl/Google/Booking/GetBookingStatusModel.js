/**
 * This method returns a booking status for a user based on provided booking ID.
 *
 * **Cross-datacenter compatibility:** key of the business is returned by {@link Wl_Google_Booking_GetBookingStatusModel.businessKey()}.
 * The request is then redirected to region of that business by {@link Wl_Google_Booking_BookingServerBaseModel.run()}.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Google_Booking_GetBookingStatusModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * ID of the existing booking.
   *
   * @post get,result
   * @type {string}
   */
  this.booking_id = undefined;

  /**
   * See {@link Wl_Google_Booking_BookingStatusSid.idGoogle()} for documentation.
   *
   * @post result
   * @type {?string}
   */
  this.booking_status = null;

  /**
   * See {@link Wl_Google_Booking_PrepaymentStatusSid.idGoogle()} for documentation.
   *
   * @post result
   * @type {?string}
   */
  this.prepayment_status = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Google_Booking_GetBookingStatusModel);

/**
 * @inheritDoc
 */
Wl_Google_Booking_GetBookingStatusModel.prototype.config=function()
{
  return {"a_field": {"booking_id": {"post": {"get": true,"result": true}},"booking_status": {"post": {"result": true}},"prepayment_status": {"post": {"result": true}}}};
};