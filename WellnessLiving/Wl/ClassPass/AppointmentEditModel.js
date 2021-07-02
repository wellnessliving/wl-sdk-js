/**
 * Api endpoint used to make or cancel appointment reservation.
 *
 * ## Dispatched URL:
 * * <tt>/cp/v1/partners/{partner_id}/venues/{venue_id}/appointments</tt>
 * * <tt>/cp/v1/partners/{partner_id}/venues/{venue_id}/appointments/{appointment_id}</tt>
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_ClassPass_AppointmentEditModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of bookable slots.
   *
   * @post post
   * @type {*}
   */
  this.bookables = undefined;

  /**
   * Date and time of the reservation in venue locale.
   *
   * This is an ISO format of the local date: _[date]T[time]_
   *
   * @post post
   * @type {string}
   */
  this.start_datetime = undefined;

  /**
   * Visit status.
   *
   * @patch post
   * @type {string}
   */
  this.status = undefined;

  /**
   * Service ID to be reserved.
   *
   * @post post
   * @type {string}
   */
  this.service_id = undefined;

  /**
   * User for which reservation should be performed.
   *
   * @post post
   * @type {*}
   */
  this.user = undefined;

  /**
   * Appointment reservation ID.
   *
   * @patch get
   * @post result
   * @type {string}
   */
  this.appointment_id = undefined;

  /**
   * Partner ID.
   *
   * @patch get
   * @post get
   * @type {string}
   */
  this.s_partner_id = undefined;

  /**
   * Venue ID.
   *
   * @patch get
   * @post get
   * @type {string}
   */
  this.s_venue_id = undefined;

  /**
   * Some custom string for any additional information.
   *
   * @patch post
   * @post post
   * @type {string}
   */
  this.customization = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_ClassPass_AppointmentEditModel);

/**
 * @inheritDoc
 */
Wl_ClassPass_AppointmentEditModel.prototype.config=function()
{
  return {"a_field": {"bookables": {"post": {"post": true}},"start_datetime": {"post": {"post": true}},"status": {"patch": {"post": true}},"service_id": {"post": {"post": true}},"user": {"post": {"post": true}},"appointment_id": {"patch": {"get": true},"post": {"result": true}},"s_partner_id": {"patch": {"get": true},"post": {"get": true}},"s_venue_id": {"patch": {"get": true},"post": {"get": true}},"customization": {"patch": {"post": true},"post": {"post": true}}}};
};