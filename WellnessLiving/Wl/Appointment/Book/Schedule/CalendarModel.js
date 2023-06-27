/**
 * An endpoint that retrieves a list of all calendar days in a specified month with
 * available and unavailable appointment bookings in the schedule.
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
  this._s_key = "id_gender_staff,k_staff,k_location,k_service,k_resource,i_index,i_duration,uid,s_product,is_month_view,s_appointment,is_staff,is_back_to_back,k_timezone";

  /**
   * @typedef {{}} Wl_Appointment_Book_Schedule_CalendarModel_a_date
   * @property {string} dt_date The calendar date item.
   * @property {number} i_week The day number in the week.
   * @property {boolean} is_available Determines whether the booking is available for this day.
   * @property {boolean} is_current Determines whether the date is current.
   * @property {boolean} is_out Determines whether the date is for the current month or the business/location closed date.
   * @property {boolean} is_waitlist_only Determines whether the booking for the selected day available only in the wait list.
   * @property {boolean} is_week_end Determines whether the date is last day of the week.
   * @property {boolean} is_week_start Determines whether the date is first day of the week.
   * @property {string} s_day The string representation of day number with leading zeroes.
   * @property {string} s_week The string representation of week day expressed as one letter (for example. "F" for Friday).
   */

  /**
   * A list with all calendar days in the specified month with
   * available and unavailable appointment bookings in the schedule.
   * <dl>
   *   <dt>string <var>dt_date</var></dt>
   *   <dd>The calendar date item.</dd>
   *   <dt>int <var>i_week</var></dt>
   *   <dd>The day number in the week.</dd>
   *   <dt>bool <var>is_available</var></dt>
   *   <dd>Determines whether the booking is available for this day.</dd>
   *   <dt>bool <var>is_current</var></dt>
   *   <dd>Determines whether the date is current.</dd>
   *   <dt>bool <var>is_out</var></dt>
   *   <dd>Determines whether the date is for the current month or the business/location closed date.</dd>
   *   <dt>bool <var>is_waitlist_only</var></dt>
   *   <dd>Determines whether the booking for the selected day available only in the wait list.</dd>
   *   <dt>bool <var>is_week_end</var></dt>
   *   <dd>Determines whether the date is last day of the week.</dd>
   *   <dt>bool <var>is_week_start</var></dt>
   *   <dd>Determines whether the date is first day of the week.</dd>
   *   <dt>string <var>s_day</var></dt>
   *   <dd>The string representation of day number with leading zeroes.</dd>
   *   <dt>string <var>s_week</var></dt>
   *   <dd>The string representation of week day expressed as one letter (for example. "F" for Friday).</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Schedule_CalendarModel_a_date[]}
   */
  this.a_date = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Schedule_CalendarModel_a_time
   * @property {string} dt_date The calendar date.
   * @property {number} i_count The number of clients that have already booked the appointment.
   * @property {number} i_time The integer representation of appointment schedule time.
   * @property {boolean} is_waitlist Determines whether the appointment can only be booked in a wait list.
   * @property {string} k_staff Determines if this time is already occupied by a client or staff member without the service capacity being reached.
   * This key contains the key of the staff member. Otherwise, this will be `0`.
   * @property {string} s_title The string representation of the appointment schedule time.
   */

  /**
   * An array with a schedule of available appointment booking times.
   * <dl>
   *   <dt>string <var>dt_date</var></dt>
   *   <dd>The calendar date.</dd>
   *   <dt>int <var>i_count</var></dt>
   *   <dd>The number of clients that have already booked the appointment.</dd>
   *   <dt>int <var>i_time</var></dt>
   *   <dd>The integer representation of appointment schedule time.</dd>
   *   <dt>bool <var>is_waitlist</var></dt>
   *   <dd>Determines whether the appointment can only be booked in a wait list.</dd>
   *   <dt>string <var>k_staff</var></dt>
   *   <dd>Determines if this time is already occupied by a client or staff member without the service capacity being reached.
   *   This key contains the key of the staff member. Otherwise, this will be `0`.</dd>
   *   <dt>string <var>s_title</var></dt>
   *   <dd>The string representation of the appointment schedule time.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Schedule_CalendarModel_a_time}
   */
  this.a_time = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Schedule_CalendarModel_a_timezone_data_a_timezone
   * @property {number} i_order The time zone order.
   * @property {number} i_shift The time zone shift from UTC in hours.
   * @property {boolean} is_select This will be `true` if the time zone selected matches the one used in {@link Wl_Appointment_Book_Schedule_CalendarModel.k_timezone},
   * the client's default time zone is selected, or the parameter isn't set yet.
   * @property {string} k_timezone The time zone key.
   * @property {string} s_title The time zone name.
   * @property {string} text_abbr The time zone abbreviation.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Schedule_CalendarModel_a_timezone_data
   * @property {Wl_Appointment_Book_Schedule_CalendarModel_a_timezone_data_a_timezone} a_timezone `null` if business settings doesn't allow client to adjust timezone, otherwise list of timezones:
   * <dl>
   *   <dt>int <tt>i_order</tt></dt>
   *   <dd>The time zone order.</dd>
   *   <dt>int <tt>i_shift</tt></dt>
   *   <dd>The time zone shift from UTC in hours.</dd>
   *   <dt>bool <tt>is_select</tt></dt>
   *   <dd>`true` for selected timezone - from {@link Wl_Appointment_Book_Schedule_CalendarModel.k_timezone} param or client's default timezone when param not set.</dd>
   *   <dt>string <tt>k_timezone</tt></dt>
   *   <dd>The time zone key.</dd>
   *   <dt>string <tt>s_title</tt></dt>
   *   <dd>The time zone name.</dd>
   *   <dt>string <tt>text_abbr</tt></dt>
   *   <dd>The time zone abbreviation.</dd>
   * </dl>
   * @property {?string} name This will be `null` if business settings don't allow clients to adjust the time zone.
   * Otherwise, this will be the time zone input name.
   */

  /**
   * Information about the time zone.
   * <dl>
   *   <dt>array|null <var>a_timezone</var></dt>
   *   <dd>
   *     This will be `null` if business settings don't allow clients to adjust the time zone. Otherwise, this will be a list of time zones:
   *     <dl>
   *       <dt>int <var>i_order</var></dt>
   *       <dd>The time zone order.</dd>
   *       <dt>int <var>i_shift</var></dt>
   *       <dd>The time zone shift from UTC in hours.</dd>
   *       <dt>bool <var>is_select</var></dt>
   *       <dd>`true` for selected timezone - from {@link Wl_Appointment_Book_Schedule_CalendarModel.k_timezone} param or client's default timezone when param not set.</dd>
   *       <dt>string <var>k_timezone</var></dt>
   *       <dd>The time zone key.</dd>
   *       <dt>string <var>s_title</var></dt>
   *       <dd>The time zone name.</dd>
   *       <dt>string <var>text_abbr</var></dt>
   *       <dd>The time zone abbreviation.</dd>
   *     </dl>
   *   </dd>
   *   <dt>string|null <var>name</var></dt>
   *   <dd>This will be `null` if business settings don't allow clients to adjust the time zone. Otherwise, this will be the time zone input name.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Schedule_CalendarModel_a_timezone_data}
   */
  this.a_timezone_data = [];

  /**
   * A list of client keys to use for booking appointments.
   * Empty values in this list signify walk-ins.
   *
   * @get get
   * @post get
   * @type {string[]}
   */
  this.a_uid = [];

  /**
   * @typedef {{}} Wl_Appointment_Book_Schedule_CalendarModel_a_week_name
   * @property {number} i_day The day of the week. One of the {@link ADateWeekSid} constants.
   * @property {string} html_week_day The short day of the week's name expressed as two letters (for example, 'Fr' for Friday).
   */

  /**
   * The short day of the week's name expressed as two letters (for example, 'Fr' for Friday) for the calendar month view.
   * The order of the days of the week are set according to the business's settings.
   *
   * <dl>
   *   <dt>int <var>i_day</var></dt>
   *   <dd>The day of the week. One of the {@link ADateWeekSid} constants.</dd>
   *   <dt>string <var>html_week_day</var></dt>
   *   <dd>The short day of the week's name expressed as two letters (for example, 'Fr' for Friday).</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Schedule_CalendarModel_a_week_name}
   */
  this.a_week_name = [];

  /**
   * Determines whether the previous calendar period can be shown (the start of shown period is later than the current date).
   *
   * @get result
   * @type {boolean}
   */
  this.can_backwards = false;

  /**
   * The date to show the available appointment booking schedule for.
   *
   * @get get,result
   * @type {string}
   */
  this.dt_date = "";

  /**
   * The duration of the asset booking or custom appointment duration in minutes. This will be zero for services with predefined durations.
   * For back-to-back bookings, this will display the custom duration of the first appointment.
   *
   * @get get
   * @type {number}
   */
  this.i_duration = 0;

  /**
   * An index of the selected asset. This will be `0` for a service booking or asset that isn't on the layout.
   *
   * @get get
   * @type {number}
   */
  this.i_index = 0;

  /**
   * The last day of the week. One of the {@link ADateWeekSid} constants.
   *
   * @get result
   * @type {number}
   */
  this.i_week_end = undefined;

  /**
   * The first day of the week. One of the {@link ADateWeekSid} constants.
   *
   * @get result
   * @type {number}
   */
  this.i_week_start = undefined;

  /**
   * The ID of the staff member's gender.
   * For back-to-back bookings, this will display the gender of the staff member conducting the first appointment.
   * One of the {@link AGenderSid} constants. This will be `0` if no limitations on staff member gender are set.
   *
   * @get get
   * @type {number}
   */
  this.id_gender_staff = 0;

  /**
   * Determines whether multiple appointments are booked in the back-to-back mode.
   *
   * @get get
   * @type {boolean}
   */
  this.is_back_to_back = false;

  /**
   * Determines if the calendar should be displayed in the month view mode.
   *
   * @get get
   * @type {boolean}
   */
  this.is_month_view = true;

  /**
   * `true` - the request is made by the staff member (booking policy restrictions are ignored).
   *
   * `false` - the request is made by the client (booking policy restrictions are applied).
   *
   * @get get
   * @type {boolean}
   */
  this.is_staff = false;

  /**
   * `true` - returns service categories that have no staff members able to conduct them.
   *
   * `false` - returns only service categories that have staff members able to conduct them.
   *
   * @get get
   * @type {boolean}
   */
  this.is_unavailable = false;

  /**
   * Determines whether a list of available times containing slots with only wait list bookings is available.
   *
   * @get result
   * @type {boolean}
   */
  this.is_waitlist = undefined;

  /**
   * This will be `true` if the client is a walk-in. Otherwise, this will be `false`.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.is_walk_in = false;

  /**
   * The location to show the available appointment booking schedule for.
   *
   * @get get,result
   * @post get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * The resource key to show which days are available for booking.
   * This will be `0` for back-to-back bookings.
   *
   * @get get
   * @type {string}
   */
  this.k_resource = "0";

  /**
   * The service key used for showing the available appointment booking schedule.
   * This will be the service key of first appointment for back-to-back bookings.
   *
   * @get get
   * @type {string}
   */
  this.k_service = "0";

  /**
   * The staff member key used for showing the available appointment booking schedule.
   * This will be the staff member key of the first appointment for back-to-back bookings.
   * If `0`, any available staff member key can be used.
   *
   * @get get
   * @type {string}
   */
  this.k_staff = "0";

  /**
   * The time zone key.
   *
   * This will be `null` if not set yet or when using the client's time zone.
   *
   * @get get
   * @type {?string}
   */
  this.k_timezone = null;

  /**
   * This is a comma-separated list of appointment keys used when multiple sessions are booked.
   * This will be an empty string for a single appointment or asset booking.
   *
   * For back-to-back bookings ({@link Wl_Appointment_Book_Schedule_DayTimeModel.is_back_to_back} == `true`): array of appointments for back-to-back booking.
   * Converted to JSON string to be usable as model key. Each item is an array with next structure:
   * <dl>
   * <dt>array <var>a_addon</var></dt><dd>An array of appointment add-ons.</dd>
   * <dt>int <var>i_duration</var></dt><dd>The custom duration of the appointment in minutes. This will be zero for services with predefined durations.</dd>
   * <dt>int <var>id_gender_staff</var></dt><dd>The staff member gender. One of the {@link Wl_Gender_GenderSid} constants. This will be '0' if there are no limitations on staff member gender.</dd>
   * <dt>string <var>k_service</var></dt><dd>The service key.</dd>
   * <dt>string <var>k_staff</var></dt><dd>The staff member key. This will be '0' if any available staff member key can be used.</dd>
   * </dl>
   *
   * For multiple appointment bookings ({@link Wl_Appointment_Book_Schedule_DayTimeModel.is_back_to_back} == `false`): array of previously booked appointments.
   * Converted to JSON string to be usable as model key. Each item is an array with next structure:
   * <dl>
   * <dt>string <var>dtl_date</var></dt><dd>The local date and time of the appointment start in MySQL format.</dd>
   * <dt>int <var>i_duration</var></dt><dd>The duration of the appointment in minutes.</dd>
   * <dt>string <var>k_service</var></dt><dd>The service key.</dd>
   * </dl>
   *
   * @get get
   * @type {string}
   */
  this.s_appointment = "";

  /**
   * A list of service add-on keys encoded as a JSON string.
   * This will be the add-on of the first appointment for back-to-back bookings.
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
  return {"a_field": {"a_date": {"get": {"result": true}},"a_time": {"get": {"result": true}},"a_timezone_data": {"get": {"result": true}},"a_uid": {"get": {"get": true},"post": {"get": true}},"a_week_name": {"get": {"result": true}},"can_backwards": {"get": {"result": true}},"dt_date": {"get": {"get": true,"result": true}},"i_duration": {"get": {"get": true}},"i_index": {"get": {"get": true}},"i_week_end": {"get": {"result": true}},"i_week_start": {"get": {"result": true}},"id_gender_staff": {"get": {"get": true}},"is_back_to_back": {"get": {"get": true}},"is_month_view": {"get": {"get": true}},"is_staff": {"get": {"get": true}},"is_unavailable": {"get": {"get": true}},"is_waitlist": {"get": {"result": true}},"is_walk_in": {"get": {"get": true},"post": {"get": true}},"k_location": {"get": {"get": true,"result": true},"post": {"get": true}},"k_resource": {"get": {"get": true}},"k_service": {"get": {"get": true}},"k_staff": {"get": {"get": true}},"k_timezone": {"get": {"get": true}},"s_appointment": {"get": {"get": true}},"s_product": {"get": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Schedule_CalendarModel.instanceGet
 * @param {number} id_gender_staff The staff member gender. One of the {@link Wl_Gender_GenderSid} constants. This will be '0' if there are no limitations on staff member gender.
 * One of the {@link AGenderSid} constants. This will be `0` if there are no limitations for staff member gender.
 * @param {string} k_staff The staff member key used for showing the available appointment booking schedule.
 * This will be the staff member key of the first appointment for back-to-back bookings.
 * If `0`, any available staff member key can be used.
 * @param {string} k_location The location to show the available appointment booking schedule for.
 * @param {string} k_service The service key used for showing the available appointment booking schedule.
 * This will be the service key of first appointment for back-to-back bookings.
 * @param {string} k_resource The resource key to show which days are available for booking.
 * This will be `0` for back-to-back bookings.
 * @param {number} i_index An index of the selected asset. This will be `0` for a service booking or asset that isn't on the layout.
 * @param {number} i_duration The duration of the asset booking or custom appointment duration in minutes. This will be zero for services with predefined durations.
 * For back-to-back bookings, this will display the custom duration of the first appointment.
 * @param {string} uid The client to get information for.
 * @param {string} s_product A list of service add-on keys encoded as a JSON string.
 * This will be the add-on of the first appointment for back-to-back bookings.
 * @param {boolean} is_month_view Determines if the calendar should be displayed in the month view mode.
 * @param {string} s_appointment An empty string for single appointment/asset booking. For back-to-back booking ({@link Wl_Appointment_Book_Schedule_DayTimeModel.is_back_to_back} == `true`): array of appointments for back-to-back booking. Converted to JSON string to be usable as model key. Each item is an array with next structure: <dl> <dt>array <var>a_addon</var></dt><dd>Array of appointment addons. Each value is primary key in {@link \RsShopProductSql} table.</dd> <dt>int <var>i_duration</var></dt><dd>Custom duration of the appointment in minutes. Zero in case of service predefined duration.</dd> <dt>int <var>id_gender_staff</var></dt><dd>Staff gender. One of {@link Wl_Gender_GenderSid} constants. Zero mean no limitations on staff gender.</dd> <dt>string <var>k_service</var></dt><dd>Service key.</dd> <dt>string <var>k_staff</var></dt><dd>Staff key. Zero means any available staff.</dd> </dl> For multiple appointment booking ({@link Wl_Appointment_Book_Schedule_DayTimeModel.is_back_to_back} == `false`): array of previously booked appointments. Converted to JSON string to be usable as model key. Each item is an array with next structure: <dl> <dt>string <var>dtl_date</var></dt><dd>Local date and time of appointment start in MySQL format.</dd> <dt>int <var>i_duration</var></dt><dd>Duration of the appointment in minutes.</dd> <dt>string <var>k_service</var></dt><dd>Service key.</dd> </dl>
 * @param {boolean} is_staff <tt>true</tt> if the request is made by the staff member (booking policy restrictions are ignored).Otherwise, <tt>false</tt> if the request is made by the client (booking policy restrictions are applied).
 * @param {boolean} is_back_to_back Determines whether multiple appointments are booked in the back-to-back mode.
 * @param {?string} k_timezone The time zone key. This will be `null` if not set yet or when using the client's time zone.
 * @returns {Wl_Appointment_Book_Schedule_CalendarModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */