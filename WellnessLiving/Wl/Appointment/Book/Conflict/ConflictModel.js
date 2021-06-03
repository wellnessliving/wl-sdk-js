/**
 * Appointment booking conflicts data.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Conflict_ConflictModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * See for {@link \RsAppointmentEditConflict::checkAvailability()} details.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_conflict = undefined;

  /**
   * List of add-ons. Primary keys in {@link \RsShopProductOptionSql} table.
   *
   * @get get
   * @type {string[]}
   */
  this.a_product = [];

  /**
   * Data of appointment repeat.
   * See key <tt>a_repeat</tt> of {@link \Wl\Appointment\Book\Finish\FinishApi::$a_book_data} for details.
   *
   * <tt>null</tt> if repeat is not required.
   *
   * @get get
   * @type {?{}}
   */
  this.a_repeat = null;

  /**
   * @typedef {{}} Wl_Appointment_Book_Conflict_ConflictModel_a_resource
   * @property {*} i_index Asset index in layout.
   * @property {string} k_resource Asset primary key in {@link \RsResourceSql} table.
   */

  /**
   * List of assets. Every element has next keys:
   * <dl><dt>int [<var>i_index</var>]</dt><dd>Asset index in layout.</dd>
   * <dt>string <var>k_resource</var></dt><dd>Asset primary key in {@link \RsResourceSql} table.</dd></dl>
   *
   * May be specified for service booking only.
   *
   * @get get
   * @type {Wl_Appointment_Book_Conflict_ConflictModel_a_resource[]}
   */
  this.a_resource = [];

  /**
   * Date/time of appointment. In location timezone.
   *
   * @get get
   * @type {string}
   */
  this.dt_date = "";

  /**
   * Appointment duration.
   * Must be specified for asset booking only.
   *
   * @get get
   * @type {number}
   */
  this.i_duration = 0;

  /**
   * Appointment primary key in {@link \RsAppointmentSql} table.
   * Empty for a new appointment.
   *
   * @get get
   * @type {string}
   */
  this.k_appointment = "0";

  /**
   * Location to show available appointment booking schedule.
   *
   * Primary key in {@link \RsLocationSql} table.
   *
   * @get get,result
   * @post get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * Asset primary key in {@link \RsResourceSql} table.
   * Empty for service booking.
   *
   * @get get
   * @type {string}
   */
  this.k_resource = "0";

  /**
   * Service primary key in {@link \RsServiceSql} table.
   * Empty for asset booking.
   *
   * @get get
   * @type {string}
   */
  this.k_service = "0";

  /**
   * Staff member primary key in {@link \RsStaffSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_staff = "0";

  /**
   * User to get information for.
   *
   * Primary key in {@link \PassportLoginSql} table.
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