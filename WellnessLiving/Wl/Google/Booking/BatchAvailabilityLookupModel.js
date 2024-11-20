/**
 * Checks availability for specific time slot.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Google_Booking_BatchAvailabilityLookupModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Multiple slot times to be checked for availability.
   *
   * @post post
   * @type {*}
   */
  this.slot_time = [];

  /**
   * Availability slot times.
   *
   * @post result
   * @type {{}}
   */
  this.slot_time_availability = undefined;

  /**
   * ID of the merchant.
   *
   * @post post
   * @type {string}
   */
  this.merchant_id = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Google_Booking_BatchAvailabilityLookupModel);

/**
 * @inheritDoc
 */
Wl_Google_Booking_BatchAvailabilityLookupModel.prototype.config=function()
{
  return {"a_field": {"slot_time": {"post": {"post": true}},"slot_time_availability": {"post": {"result": true}},"merchant_id": {"post": {"post": true}}}};
};