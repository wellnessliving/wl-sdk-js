/**
 * An endpoint that retrieves a list of information about available appointment booking schedule.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Schedule_DayTimeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "id_gender_staff,k_staff,dt_date,k_location,k_service,k_resource,i_index,i_duration,uid,is_unavailable,s_product";

  /**
   * @typedef {{}} Wl_Appointment_Book_Schedule_DayTimeModel_a_time
   * @property {string} dt_date The calendar date.
   * @property {number} i_count The number of clients that have already booked this appointment.
   * @property {number} i_time The integer representation of the appointment schedule time.
   * @property {string} k_staff Displays if this time is already occupied by any client and staff member (but the service capacity isn't full).
   * This key contains the staff member ID. Otherwise, this will be <tt>0</tt>.
   * @property {string} s_title The string representation of the appointment schedule time.
   */

  /**
   * An array of the available appointment bookings schedule.
   * <dl>
   *   <dt>
   *     string <var>dt_date</var>
   *   </dt>
   *   <dd>
   *     The calendar date.
   *   </dd>
   *   <dt>
   *     int <var>i_count</var>
   *   </dt>
   *   <dd>
   *     The number of clients that have already booked this appointment.
   *   </dd>
   *   <dt>
   *     int <var>i_time</var>
   *   </dt>
   *   <dd>
   *     The integer representation of the appointment schedule time.
   *   </dd>
   *   <dt>
   *     string <var>k_staff</var>
   *   </dt>
   *   <dd>
   *     Displays if this time is already occupied by any client and staff member (but the service capacity isn't full).
   *     This key contains the staff member ID. Otherwise, this will be <tt>0</tt>.
   *   </dd>
   *   <dt>
   *     string <var>s_title</var>
   *   </dt>
   *   <dd>
   *     The string representation of the appointment schedule time.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Schedule_DayTimeModel_a_time}
   */
  this.a_time = undefined;

  /**
   * The date to show the available appointment booking schedule for.
   *
   * @get get
   * @type {string}
   */
  this.dt_date = "";

  /**
   * The asset duration in minutes.
   *
   * @get get
   * @type {number}
   */
  this.i_duration = 0;

  /**
   * The index of the selected asset.
   * This will be empty for service bookings or if the asset isn't on the layout.
   *
   * @get get
   * @type {number}
   */
  this.i_index = 0;

  /**
   * The staff member's gender.
   *
   * @get get
   * @type {string}
   */
  this.id_gender_staff = 0;

  /**
   * `true` - return both available and unavailable times for the appointment.
   *
   * `false` - return only available times for the appointment.
   *
   * @get get
   * @type {boolean}
   */
  this.is_unavailable = false;

  /**
   * The location to show the available appointment booking schedule for.
   *
   * @get get,result
   * @post get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * The resource key to show what days are available for the asset booking.
   *
   * @get get
   * @type {string}
   */
  this.k_resource = "0";

  /**
   * The service key to show the available appointment booking schedule for.
   *
   * @get get
   * @type {string}
   */
  this.k_service = "0";

  /**
   * The staff member key to show available appointment booking schedule for
   *
   * @get get
   * @type {string}
   */
  this.k_staff = "0";

  /**
   * A list of service add-ons serialized to be usable as an endpoint key.
   *
   * @get get
   * @type {string}
   */
  this.s_product = "";

  /**
   * The client to get information for.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Schedule_DayTimeModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Schedule_DayTimeModel.prototype.config=function()
{
  return {"a_field": {"a_time": {"get": {"result": true}},"dt_date": {"get": {"get": true}},"i_duration": {"get": {"get": true}},"i_index": {"get": {"get": true}},"id_gender_staff": {"get": {"get": true}},"is_unavailable": {"get": {"get": true}},"k_location": {"get": {"get": true,"result": true},"post": {"get": true}},"k_resource": {"get": {"get": true}},"k_service": {"get": {"get": true}},"k_staff": {"get": {"get": true}},"s_product": {"get": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Schedule_DayTimeModel.instanceGet
 * @param {string} id_gender_staff Staff gender.
 * @param {string} k_staff Staff key to show available appointment booking schedule. Primary key in {@link \RsStaffSql} table.
 * @param {string} dt_date Date to show available appointment booking schedule.
 * @param {string} k_location Location to show available appointment booking schedule. Primary key in {@link \RsLocationSql} table.
 * @param {string} k_service Service key to show available appointment booking schedule. Primary key in {@link \RsServiceSql} table.
 * @param {string} k_resource Resource key to show what days are available for asset booking. Primary key in {@link \RsResourceSql} table.
 * @param {number} i_index Index of selected asset. Empty for booking of service or if asset is not on layout.
 * @param {number} i_duration Duration of the asset in minutes.
 * @param {string} uid User to get information for. Primary key in {@link \PassportLoginSql} table.
 * @param {boolean} is_unavailable <tt>true</tt> - return both available and unavailable time for appointment; <tt>false</tt> - return only available time.
 * @param {string} s_product List of service add-ons. Serialized to be usable as model key. Values - primary keys in {@link \RsShopProductSql} table.
 * @returns {Wl_Appointment_Book_Schedule_DayTimeModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */