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
   * @property {boolean} is_current Whether date is current.</dd>
   * @property {boolean} is_out Whether date is out of current month or it's business/location closed date.
   * @property {boolean} is_waitlist_only Whether booking for this day available only in wait list.
   * @property {boolean} is_week_end Whether date is last day of the week.
   * @property {boolean} is_week_start Whether date is first day of the week.
   * @property {string} s_day String representation of day number with leading zeroes.
   * @property {string} s_week String representation of week day (one letter, i.e. "F").
   */

  /**
   * Array with calendar schedule days and appointment availability.
   * <dl>
   *   <dt>string <var>dt_date</var></dt><dd>Date item of the calendar.</dd>
   *   <dt>int <var>i_week</var></dt><dd>Number of day in week.</dd>
   *   <dt>bool <var>is_available</var></dt><dd>Whether booking is available for this day.</dd>
   *   <dt>bool <var>is_current</var></dt><dd>Whether date is current.</dd>
   *   <dt>bool <var>is_out</var></dt><dd>Whether date is out of current month or it's business/location closed date.</dd>
   *   <dt>bool <var>is_waitlist_only</var></dt><dd>Whether booking for this day available only in wait list.</dd>
   *   <dt>bool <var>is_week_end</var></dt><dd>Whether date is last day of the week.</dd>
   *   <dt>bool <var>is_week_start</var></dt><dd>Whether date is first day of the week.</dd>
   *   <dt>string <var>s_day</var></dt><dd>String representation of day number with leading zeroes.</dd>
   *   <dt>string <var>s_week</var></dt><dd>String representation of week day (one letter, i.e. "F").</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Schedule_CalendarModel_a_date}
   */
  this.a_date = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Schedule_CalendarModel_a_timezone_data_a_timezone
   * @property {number} i_order Timezone order.
   * @property {number} i_shift Timezone shift from UTC in hours.
   * @property {bool} is_select `true` for selected timezone - from {@link this.k_timezone} property or client's default timezone when param not set.
   * @property {string} k_timezone Timezone key.
   * @property {string} s_title Timezone name.
   * @property {string} text_abbr Timezone abbreviation.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Schedule_CalendarModel_a_timezone_data
   * @property {Wl_Appointment_Book_Schedule_CalendarModel_a_timezone_data_a_timezone|null} a_timezone `null` if business settings doesn't allow client to adjust timezone, otherwise list of timezones.
   * @property {string|null} name `null` if business settings doesn't allow client to adjust timezone, otherwise timezone input name.
   */

  /**
   * Information about timezone.
   * <dl>
   *   <dt>array|null <var>a_timezone</var></dt>
   *   <dd>
   *     `null` if business settings doesn't allow client to adjust timezone, otherwise list of timezones:
   *     <dl>
   *       <dt>int <var>i_order</var></dt>
   *       <dd>Timezone order.</dd>
   *       <dt>int <var>i_shift</var></dt>
   *       <dd>Timezone shift from UTC in hours.</dd>
   *       <dt>bool <var>is_select</var></dt>
   *       <dd>`true` for selected timezone - from {@link this.k_timezone} property or client's default timezone when param not set.</dd>
   *       <dt>string <var>k_timezone</var></dt>
   *       <dd>Timezone key.</dd>
   *       <dt>string <var>s_title</var></dt>
   *       <dd>Timezone name.</dd>
   *       <dt>string <var>text_abbr</var></dt>
   *       <dd>Timezone abbreviation.</dd>
   *     </dl>
   *   </dd>
   *   <dt>string|null <var>name</var></dt>
   *   <dd>`null` if business settings doesn't allow client to adjust timezone, otherwise timezone input name.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Schedule_CalendarModel_a_timezone_data}
   */
  this.a_timezone_data = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Schedule_CalendarModel_a_week_name
   * @property {number} i_day Week day, one of the {@link ADateWeekSid} constants.
   * @property {string} html_week_day Short week day's name (2 letters, i.e. 'Fr').
   */

  /**
   * Array with short week day's names (2 letters, i.e. 'Fr') for calendar month view. Week days order according to business's settings.
   *
   * <dl>
   *   <dt>int <var>i_day</var></dt>
   *   <dd>Week day, one of the {@link ADateWeekSid} constants.</dd>
   *   <dt>string <var>html_week_day</var></dt>
   *   <dd>Short week day's name (2 letters, i.e. 'Fr').</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Schedule_CalendarModel_a_week_name}
   */
  this.a_week_name = undefined;

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
   * Key of timezone. `null` if not set to use client's profile timezone.
   *
   * @get get
   * @type {string|null}
   */
  this.k_timezone = null;

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
  return {"a_field": {"a_date": {"get": {"result": true}},"a_timezone_data": {"get": {"result": true}},"a_week_name": {"get": {"result": true}},"dt_date": {"get": {"get": true,"result": true}},"i_duration": {"get": {"get": true}},"i_index": {"get": {"get": true}},"id_gender_staff": {"get": {"get": true}},"k_location": {"get": {"get": true,"result": true},"post": {"get": true}},"k_resource": {"get": {"get": true}},"k_service": {"get": {"get": true}},"k_staff": {"get": {"get": true}},"k_timezone": {"get": {"get": true}},"s_product": {"get": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
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