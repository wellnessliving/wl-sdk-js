/**
 * Retrieves a list of information about available appointment booking schedule.
 *
 * This model is generated automatically based on API.
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
   * @property {string} dt_date Date of the calendar.
   * @property {number} i_count Amount of clients that have already booked this appointment.
   * @property {number} i_time Integer representation of appointment schedule time.
   * @property {string} k_staff If this time is already occupied by any client and staff member (but service capacity is not exhausted), this key contains ID of staff member (primary key in {@link \RsStaffSql} table).
   * Otherwise <tt>0</tt>.
   * @property {string} s_title String representation of appointment schedule time.
   */

  /**
   * Array of available appointment booking schedule.
   * <dl>
   *   <dt>
   *     string <var>dt_date</var>
   *   </dt>
   *   <dd>
   *     Date of the calendar.
   *   </dd>
   *   <dt>
   *     int <var>i_count</var>
   *   </dt>
   *   <dd>
   *     Amount of clients that have already booked this appointment.
   *   </dd>
   *   <dt>
   *     int <var>i_time</var>
   *   </dt>
   *   <dd>
   *     Integer representation of appointment schedule time.
   *   </dd>
   *   <dt>
   *     string <var>k_staff</var>
   *   </dt>
   *   <dd>
   *     If this time is already occupied by any client and staff member (but service capacity is not exhausted), this key contains ID of staff member (primary key in {@link \RsStaffSql} table).
   *     Otherwise <tt>0</tt>.
   *   </dd>
   *   <dt>
   *     string <var>s_title</var>
   *   </dt>
   *   <dd>
   *     String representation of appointment schedule time.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Schedule_DayTimeModel_a_time}
   */
  this.a_time = undefined;

  /**
   * Date to show available appointment booking schedule.
   *
   * @get get
   * @type {string}
   */
  this.dt_date = "";

  /**
   * Duration of the asset in minutes.
   *
   * @get get
   * @type {number}
   */
  this.i_duration = 0;

  /**
   * Index of selected asset.
   * Empty for booking of service or if asset is not on layout.
   *
   * @get get
   * @type {number}
   */
  this.i_index = 0;

  /**
   * Staff gender.
   *
   * @get get
   * @type {string}
   */
  this.id_gender_staff = 0;

  /**
   * <tt>true</tt> - return both available and unavailable time for appointment;
   * <tt>false</tt> - return only available time.
   *
   * @get get
   * @type {boolean}
   */
  this.is_unavailable = false;

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
   * Resource key to show what days are available for asset booking.
   *
   * Primary key in {@link \RsResourceSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_resource = "0";

  /**
   * Service key to show available appointment booking schedule.
   *
   * Primary key in {@link \RsServiceSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_service = "0";

  /**
   * Staff key to show available appointment booking schedule.
   *
   * Primary key in {@link \RsStaffSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_staff = "0";

  /**
   * List of service add-ons. Serialized to be usable as model key.
   * Values - primary keys in {@link \RsShopProductSql} table.
   *
   * @get get
   * @type {string}
   */
  this.s_product = "";

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