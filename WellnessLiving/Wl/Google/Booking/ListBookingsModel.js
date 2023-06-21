/**
 * This method returns future bookings for a user at any merchant.
 * This method should not return past bookings or cancelled bookings.
 *
 * **Cross-datacenter compatibility:** Thanks to {@link Wl_Google_Booking_ListBookingsModel.REGION_MERGE}, the request is forwarded to all
 * datacenters by {@link Wl_Google_Booking_BookingServerBaseModel.run()}. When all results arrive, they are merged into one result by
 * {@link Wl_Google_Booking_ListBookingsModel.regionMerge()}.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Google_Booking_ListBookingsModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of booking entity. Each element it is result {@link Wl\Google\Booking\BookingEntity::toArray()}.
   *
   * @post result
   * @type {{}[]}
   */
  this.bookings = undefined;

  /**
   * ID of the user.
   *
   * @post get
   * @type {string}
   */
  this.user_id = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Google_Booking_ListBookingsModel);

/**
 * @inheritDoc
 */
Wl_Google_Booking_ListBookingsModel.prototype.config=function()
{
  return {"a_field": {"bookings": {"post": {"result": true}},"user_id": {"post": {"get": true}}}};
};