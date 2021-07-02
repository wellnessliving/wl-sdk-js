/**
 * The client requests to create a booking.
 * The partner backend makes a booking for the requested slot, and returns the slot upon success,
 * or business logic error (e.g. if the slot has become unavailable, or if payment is invalid, etc.) upon failure.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Google_Booking_CreateBookingModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Information about booking.
   *
   * @post result
   * @type {?{}}
   */
  this.booking = null;

  /**
   * Information about failure.
   *
   * @post result
   * @type {?{}}
   */
  this.booking_failure = null;

  /**
   * Information about payments. When payment authorizations are handled by
   * Google, if the booking request does not succeed, payment authorizations are
   * automatically canceled. (optional)
   *
   * <tt>null</tt> if not specified.
   *
   * @post post
   * @type {*}
   */
  this.payment_information = undefined;

  /**
   * The inventory slot that is being requested to make this booking.
   *
   * Slot is provided for the partner to verify the lease information.
   *
   * @post post
   * @type {*}
   */
  this.slot = undefined;

  /**
   * Personal information of the user making the appointment.
   *
   * @post post
   * @type {*}
   */
  this.user_information = undefined;

  /**
   * A string from the user which contains any special requests or additional
   * information that they would like to notify the merchant about. (optional)
   *
   * <tt>null</tt> if not specified.
   *
   * @post post
   * @type {?string}
   */
  this.additional_request = null;

  /**
   * Partner provided deal id associated with this slot. (optional).
   *
   * <tt>null</tt> if not specified.
   *
   * @post post
   * @type {?string}
   */
  this.deal_id = null;

  /**
   * Idempotency token for requests.
   *
   * @post post
   * @type {string}
   */
  this.idempotency_token = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Google_Booking_CreateBookingModel);

/**
 * @inheritDoc
 */
Wl_Google_Booking_CreateBookingModel.prototype.config=function()
{
  return {"a_field": {"booking": {"post": {"result": true}},"booking_failure": {"post": {"result": true}},"payment_information": {"post": {"post": true}},"slot": {"post": {"post": true}},"user_information": {"post": {"post": true}},"additional_request": {"post": {"post": true}},"deal_id": {"post": {"post": true}},"idempotency_token": {"post": {"post": true}}}};
};