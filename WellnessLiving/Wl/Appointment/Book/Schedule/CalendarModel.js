/**
 * Retrieves a list of calendar days in specified month.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Schedule_CalendarModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "id_gender_staff,k_staff,k_location,k_service,k_resource,i_index,i_duration,uid,s_product";

  /**
   * @typedef {{}} Wl_Appointment_Book_Schedule_CalendarModel_a_date
   * @property {string} dt_date Date item of the calendar.
   * @property {number} i_week Number of day in week.
   * @property {boolean} is_available Whether booking is available for this day.
   * @property {string} s_day String representation of day number with leading zeroes.
   */

  /**
   * Array with calendar schedule days and appointment availability.
   * <dl>
   *   <dt>
   *     string <var>dt_date</var>
   *   </dt>
   *   <dd>
   *     Date item of the calendar.
   *   </dd>
   *   <dt>
   *     int <var>i_week</var>
   *   </dt>
   *   <dd>
   *     Number of day in week.
   *   </dd>
   *   <dt>
   *     bool <var>is_available</var>
   *   </dt>
   *   <dd>
   *     Whether booking is available for this day.
   *   </dd>
   *   <dt>
   *     string <var>s_day</var>
   *   </dt>
   *   <dd>
   *     String representation of day number with leading zeroes.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Schedule_CalendarModel_a_date}
   */
  this.a_date = undefined;

  /**
   * Date to determine what month to display (in local timezone).
   *
   * @get get,result
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
   * @type {number}
   */
  this.id_gender_staff = 0;

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
   * Service key to show what days are available for appointment booking.
   *
   * Primary key in {@link \RsServiceSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_service = "0";

  /**
   * Staff key to show what days are available for appointment booking.
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

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Schedule_CalendarModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Schedule_CalendarModel.prototype.config=function()
{
  return {"a_field": {"a_date": {"get": {"result": true}},"dt_date": {"get": {"get": true,"result": true}},"i_duration": {"get": {"get": true}},"i_index": {"get": {"get": true}},"id_gender_staff": {"get": {"get": true}},"k_location": {"get": {"get": true,"result": true},"post": {"get": true}},"k_resource": {"get": {"get": true}},"k_service": {"get": {"get": true}},"k_staff": {"get": {"get": true}},"s_product": {"get": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Schedule_CalendarModel.instanceGet
 * @param {number} id_gender_staff Staff gender.
 * @param {string} k_staff Staff key to show what days are available for appointment booking. Primary key in {@link \RsStaffSql} table.
 * @param {string} k_location Location to show available appointment booking schedule. Primary key in {@link \RsLocationSql} table.
 * @param {string} k_service Service key to show what days are available for appointment booking. Primary key in {@link \RsServiceSql} table.
 * @param {string} k_resource Resource key to show what days are available for asset booking. Primary key in {@link \RsResourceSql} table.
 * @param {number} i_index Index of selected asset. Empty for booking of service or if asset is not on layout.
 * @param {number} i_duration Duration of the asset in minutes.
 * @param {string} uid User to get information for. Primary key in {@link \PassportLoginSql} table.
 * @param {string} s_product List of service add-ons. Serialized to be usable as model key. Values - primary keys in {@link \RsShopProductSql} table.
 * @returns {Wl_Appointment_Book_Schedule_CalendarModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */