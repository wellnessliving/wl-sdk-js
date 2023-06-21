/**
 * An endpoint that retrieves a list of calendar days in a specified month.
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
   * @property {string} dt_date The date available for the appointment booking.
   * @property {number} i_week The day number in the week.
   * @property {boolean} is_available Determines whether the booking is available for the selected day.
   * @property {string} s_day The string representation of the day number with leading zeroes.
   */

  /**
   * An array with calendar schedule days and appointment availability.
   * <dl>
   *   <dt>
   *     string <var>dt_date</var>
   *   </dt>
   *   <dd>
   *     The date available for the appointment booking.
   *   </dd>
   *   <dt>
   *     int <var>i_week</var>
   *   </dt>
   *   <dd>
   *     The day number in the week.
   *   </dd>
   *   <dt>
   *     bool <var>is_available</var>
   *   </dt>
   *   <dd>
   *     Determines whether the booking is available for the selected day.
   *   </dd>
   *   <dt>
   *     string <var>s_day</var>
   *   </dt>
   *   <dd>
   *     The string representation of the day number with leading zeroes.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Schedule_CalendarModel_a_date}
   */
  this.a_date = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Schedule_CalendarModel_a_timezone_data_a_timezone
   * @property {number} i_order The time zone order.
   * @property {number} i_shift The time zone shift in UTC expressed in hours.
   * @property {boolean} is_select This will be `true` if the time zone selected matches the one used in
   * {@link Wl_Appointment_Book_Schedule_CalendarModel.k_timezone}, if the client's default time zone is selected, or if
   * the parameter isn't set.
   * @property {string} k_timezone The time zone key.
   * @property {string} s_title The time zone name.
   * @property {string} text_abbr The time zone abbreviation.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Schedule_CalendarModel_a_timezone_data
   * @property {Wl_Appointment_Book_Schedule_CalendarModel_a_timezone_data_a_timezone|null} a_timezone `null` if business settings doesn't allow client to adjust timezone, otherwise list of timezones.
   * @property {string|null} name `null` if business settings doesn't allow client to adjust timezone, otherwise timezone input name.
   */

  /**
   * Information about the time zone.
   * <dl>
   *   <dt>array|null <var>a_timezone</var></dt>
   *   <dd>
   *     This will be `null` if business settings don't allow for clients to adjust the time zone. Otherwise, a list of time zones:
   *     <dl>
   *       <dt>int <var>i_order</var></dt>
   *       <dd>The time zone order.</dd>
   *       <dt>int <var>i_shift</var></dt>
   *       <dd>The time zone shift from UTC in hours.</dd>
   *       <dt>bool <var>is_select</var></dt>
   *       <dd>This will be `true` if the time zone selected matches the one used in {@link Wl_Appointment_Book_Schedule_CalendarModel.k_timezone},
   *       if the client's default time zone is selected, or if the parameter isn't set.</dd>
   *       <dt>string <var>k_timezone</var></dt>
   *       <dd>The time zone key.</dd>
   *       <dt>string <var>s_title</var></dt>
   *       <dd>The time zone name.</dd>
   *       <dt>string <var>text_abbr</var></dt>
   *       <dd>The time zone abbreviation.</dd>
   *     </dl>
   *   </dd>
   *   <dt>string|null <var>name</var></dt>
   *   <dd>This will be `null` if business settings don't allow for clients to adjust the time zone. Otherwise, the time zone input name.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Schedule_CalendarModel_a_timezone_data}
   */
  this.a_timezone_data = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Schedule_CalendarModel_a_week_name
   * @property {number} i_day The day of the week. One of the {@link ADateWeekSid} constants.
   * @property {string} html_week_day The shortened day name expressed in two letters (for example, 'Fr' for Friday).
   */

  /**
   * An array with the shortened day name expressed in two letters (for example, 'Fr' for Friday) for the calendar month view.
   * Days of the week are ordered according to the business settings.
   *
   * <dl>
   *   <dt>int <var>i_day</var></dt>
   *   <dd>The day of the week. One of the {@link ADateWeekSid} constants.</dd>
   *   <dt>string <var>html_week_day</var></dt>
   *   <dd>The shortened day name expressed in two letters (for example, 'Fr' for Friday).</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Schedule_CalendarModel_a_week_name}
   */
  this.a_week_name = undefined;

  /**
   * The date to use to determine the month to display in the local time zone.
   *
   * @get get,result
   * @type {string}
   */
  this.dt_date = "";

  /**
   * The duration of the asset in minutes.
   *
   * @get get
   * @type {number}
   */
  this.i_duration = 0;

  /**
   * The index of the selected asset.
   * This will be empty for service bookings or assets that aren't on the layout.
   *
   * @get get
   * @type {number}
   */
  this.i_index = 0;

  /**
   * The staff member's gender.
   *
   * @get get
   * @type {number}
   */
  this.id_gender_staff = 0;

  /**
   * The location to show the available appointment booking schedule for.
   *
   * @get get,result
   * @post get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * The resource key used to show what days are available for an asset booking.
   *
   * @get get
   * @type {string}
   */
  this.k_resource = "0";

  /**
   * The service key used to show what days are available for an appointment booking.
   *
   * @get get
   * @type {string}
   */
  this.k_service = "0";

  /**
   * The staff member key used to show what days are available for an appointment booking.
   *
   * @get get
   * @type {string}
   */
  this.k_staff = "0";

  /**
   * The key of the time zone. This will be `null` if not set yet or to use the client's time zone.
   *
   * @get get
   * @type {string|null}
   */
  this.k_timezone = null;

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
 * @param {number} id_gender_staff The staff member's gender.
 * @param {string} k_staff Staff key to show what days are available for appointment booking. Primary key in {@link \RsStaffSql} table.
 * @param {string} k_location The location to show the available appointment booking schedule for.
 * @param {string} k_service The service key used to show what days are available for an appointment booking.
 * @param {string} k_resource The resource key used to show what days are available for an asset booking.
 * @param {number} i_index The index of the selected asset. This will be empty for service bookings or assets that aren't on the layout.
 * @param {number} i_duration The duration of the asset in minutes.
 * @param {string} uid The client to get information for.
 * @param {string} s_product A list of service add-ons serialized to be usable as an endpoint key.
 * @returns {Wl_Appointment_Book_Schedule_CalendarModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */