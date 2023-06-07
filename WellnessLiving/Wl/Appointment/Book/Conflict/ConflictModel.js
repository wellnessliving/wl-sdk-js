/**
 * An endpoint that gets data for appointment booking conflicts.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Conflict_ConflictModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * See {@link \RsAppointmentEditConflict::checkAvailability()} for details.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_conflict = undefined;

  /**
   * A list of add-ons.
   *
   * @get get
   * @type {string[]}
   */
  this.a_product = [];

  /**
   * The appointment repeat data.
   * See the `a_repeat` key of {@link \Wl\Appointment\Book\Finish\FinishApi::$a_book_data} for details.
   *
   * This will be `null` if repeat data isn't required.
   *
   * @get get
   * @type {?{}}
   */
  this.a_repeat = null;

  /**
   * @typedef {{}} Wl_Appointment_Book_Conflict_ConflictModel_a_resource
   * @property {*} i_index The asset index in the layout.
   * @property {string} k_resource The asset primary key.
   */

  /**
   * The list of assets. Every element has the next keys:
   * <dl><dt>int [<var>i_index</var>]</dt><dd>The asset index in the layout.</dd>
   * <dt>string <var>k_resource</var></dt><dd>The asset primary key.</dd></dl>
   *
   * This can only be specified for service bookings.
   *
   * @get get
   * @type {Wl_Appointment_Book_Conflict_ConflictModel_a_resource[]}
   */
  this.a_resource = [];

  /**
   * The date/time of appointment in the location's time zone.
   *
   * @get get
   * @type {string}
   */
  this.dt_date = "";

  /**
   * The appointment duration.
   * This must only be specified for asset bookings.
   *
   * @get get
   * @type {number}
   */
  this.i_duration = 0;

  /**
   * The appointment primary key.
   * This will be empty for new appointments.
   *
   * @get get
   * @type {string}
   */
  this.k_appointment = "0";

  /**
   * The location to show the available appointment booking schedule for.
   *
   * @get get,result
   * @post get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * The asset primary key.
   * This will be empty for service bookings.
   *
   * @get get
   * @type {string}
   */
  this.k_resource = "0";

  /**
   * The service primary key.
   * This will be empty for asset bookings.
   *
   * @get get
   * @type {string}
   */
  this.k_service = "0";

  /**
   * The staff member primary key.
   *
   * @get get
   * @type {string}
   */
  this.k_staff = "0";

  /**
   * The user to get information for.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Conflict_ConflictModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Conflict_ConflictModel.prototype.config=function()
{
  return {"a_field": {"a_conflict": {"get": {"result": true}},"a_product": {"get": {"get": true}},"a_repeat": {"get": {"get": true}},"a_resource": {"get": {"get": true}},"dt_date": {"get": {"get": true}},"i_duration": {"get": {"get": true}},"k_appointment": {"get": {"get": true}},"k_location": {"get": {"get": true,"result": true},"post": {"get": true}},"k_resource": {"get": {"get": true}},"k_service": {"get": {"get": true}},"k_staff": {"get": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};