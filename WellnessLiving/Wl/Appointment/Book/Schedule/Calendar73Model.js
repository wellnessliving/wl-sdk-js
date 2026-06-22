/**
 * Retrieves a list of all calendar days in a specified month with
 * available and unavailable appointment bookings in the schedule.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @see Wl\Appointment\Book\Schedule\Calendar73Api
 */
function Wl_Appointment_Book_Schedule_Calendar73Model()
{
    WlSdk_ModelAbstract.apply(this);

    /**
     * @inheritDoc
     */
    this._s_key = "id_gender_staff,k_location,k_service,k_resource,i_index,i_duration,uid,s_product,is_month_view,s_appointment,is_staff,is_back_to_back,k_timezone,k_class_tab,is_tab_all,uid_staff";

    /**
     * @typedef {{}} Wl_Appointment_Book_Schedule_Calendar73Model_a_date
     * @property {string} dt_date Date item of the calendar.
     * @property {number} i_week Number of day in week.
     * @property {boolean} is_available Whether booking is available for this day.
     * @property {boolean} is_current Whether date is current.
     * @property {boolean} is_out Whether date is out of current month or it's business/location closed date.
     * @property {boolean} is_waitlist_only Whether booking for this day available only in wait list.
     * @property {boolean} is_week_end Whether date is last day of the week.
     * @property {boolean} is_week_start Whether date is first day of the week.
     * @property {string} s_day String representation of day number with leading zeroes.
     * @property {string} s_week String representation of week day (one letter, i.e. "F").
     */

    /**
     * A list with all calendar days in the specified month with
     * available and unavailable appointment bookings in the schedule.
     * <dl>
     *   <dt>string <var>dt_date</var></dt>
     *   <dd>Date item of the calendar.</dd>
     *   <dt>int <var>i_week</var></dt>
     *   <dd>Number of day in week.</dd>
     *   <dt>bool <var>is_available</var></dt>
     *   <dd>Whether booking is available for this day.</dd>
     *   <dt>bool <var>is_current</var></dt>
     *   <dd>Whether date is current.</dd>
     *   <dt>bool <var>is_out</var></dt>
     *   <dd>Whether date is out of current month or it's business/location closed date.</dd>
     *   <dt>bool <var>is_waitlist_only</var></dt>
     *   <dd>Whether booking for this day available only in wait list.</dd>
     *   <dt>bool <var>is_week_end</var></dt>
     *   <dd>Whether date is last day of the week.</dd>
     *   <dt>bool <var>is_week_start</var></dt>
     *   <dd>Whether date is first day of the week.</dd>
     *   <dt>string <var>s_day</var></dt>
     *   <dd>String representation of day number with leading zeroes.</dd>
     *   <dt>string <var>s_week</var></dt>
     *   <dd>String representation of week day (one letter, i.e. "F").</dd>
     * </dl>
     *
     * @get result
     * @type {Wl_Appointment_Book_Schedule_Calendar73Model_a_date[]}
     */
    this.a_date = undefined;

    /**
     * @typedef {{}} Wl_Appointment_Book_Schedule_Calendar73Model_a_time
     * @property {string} dt_date Date of the calendar.
     * @property {number} i_count Amount of clients that have already booked this appointment.
     * @property {number} i_time Integer representation of appointment schedule time.
     * @property {boolean} is_waitlist Whether the appointment can be booked only in a wait list.
     * @property {string} k_staff @deprecated If this time is already occupied by any client and staff member (but service capacity is not exhausted),
     *   this key contains key of staff member (primary key in {@link \RsStaffSql} table). Otherwise - `0`.
     * @property {string} uid_staff If this time is already occupied by any client and staff member (but service capacity is not exhausted),
     *   this key contains user key of staff member (primary key in {@link \PassportLoginSql} table). Otherwise - `0`.
     * @property {string} s_title String representation of appointment schedule time.
     */

    /**
     * An array with a schedule of available appointment booking times.
     * <dl>
     *   <dt>string <var>dt_date</var></dt>
     *   <dd>Date of the calendar.</dd>
     *   <dt>int <var>i_count</var></dt>
     *   <dd>Amount of clients that have already booked this appointment.</dd>
     *   <dt>int <var>i_time</var></dt>
     *   <dd>Integer representation of appointment schedule time.</dd>
     *   <dt>bool <var>is_waitlist</var></dt>
     *   <dd>Whether the appointment can be booked only in a wait list.</dd>
     *   <dt>string <var>k_staff</var></dt>
     *   <dd>@deprecated If this time is already occupied by any client and staff member (but service capacity is not exhausted),
     *       this key contains key of staff member (primary key in {@link \RsStaffSql} table). Otherwise - `0`.</dd>
     *   <dt>string <var>uid_staff</var></dt>
     *   <dd>If this time is already occupied by any client and staff member (but service capacity is not exhausted),
     *       this key contains user key of staff member (primary key in {@link \PassportLoginSql} table). Otherwise - `0`.</dd>
     *   <dt>string <var>s_title</var></dt>
     *   <dd>String representation of appointment schedule time.</dd>
     * </dl>
     *
     * @get result
     * @type {Wl_Appointment_Book_Schedule_Calendar73Model_a_time}
     */
    this.a_time = undefined;

    /**
     * @typedef {{}} Wl_Appointment_Book_Schedule_Calendar73Model_a_timezone_data_a_timezone
     * @property {number} i_order Timezone order.
     * @property {number} i_shift Timezone shift from UTC in hours.
     * @property {boolean} is_select `true` for selected timezone - from {@link Wl_Appointment_Book_Schedule_CalendarModel.k_timezone} param or client's default timezone when param not set.
     * @property {string} k_timezone Timezone key.
     * @property {string} s_title Timezone name.
     * @property {string} text_abbr Timezone abbreviation.
     */
    /**
     * @typedef {{}} Wl_Appointment_Book_Schedule_Calendar73Model_a_timezone_data
     * @property {Wl_Appointment_Book_Schedule_Calendar73Model_a_timezone_data_a_timezone} a_timezone `null` if business settings doesn't allow client to adjust timezone, otherwise list of timezones:
     * <dl>
     *   <dt>int <tt>i_order</tt></dt>
     *   <dd>Timezone order.</dd>
     *   <dt>int <tt>i_shift</tt></dt>
     *   <dd>Timezone shift from UTC in hours.</dd>
     *   <dt>bool <tt>is_select</tt></dt>
     *   <dd>`true` for selected timezone - from {@link Wl_Appointment_Book_Schedule_CalendarModel.k_timezone} param or client's default timezone when param not set.</dd>
     *   <dt>string <tt>k_timezone</tt></dt>
     *   <dd>Timezone key.</dd>
     *   <dt>string <tt>s_title</tt></dt>
     *   <dd>Timezone name.</dd>
     *   <dt>string <tt>text_abbr</tt></dt>
     *   <dd>Timezone abbreviation.</dd>
     * </dl>
     * @property {?string} name `null` if business settings doesn't allow client to adjust timezone, otherwise timezone input name.
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
     *       <dd>`true` for selected timezone - from {@link Wl_Appointment_Book_Schedule_CalendarModel.k_timezone} param or client's default timezone when param not set.</dd>
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
     * @type {Wl_Appointment_Book_Schedule_Calendar73Model_a_timezone_data}
     */
    this.a_timezone_data = [];

    /**
     * List of user keys to book appointments.
     * There may be empty values in this list, which means that this is a walk-in.
     *
     * @get get
     * @post get
     * @type {string[]}
     */
    this.a_uid = [];

    /**
     * @typedef {{}} Wl_Appointment_Book_Schedule_Calendar73Model_a_week_name
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
     * @type {Wl_Appointment_Book_Schedule_Calendar73Model_a_week_name}
     */
    this.a_week_name = [];

    /**
     * Whether previous calendar period can be shown (start of shown period later than current date).
     *
     * @get result
     * @type {boolean}
     */
    this.can_backwards = false;

    /**
     * The date to show the available appointment booking schedule.
     *
     * @get get,result
     * @type {string}
     */
    this.dt_date = "";

    /**
     * The duration of the asset booking or custom appointment duration in minutes. Zero in case of service predefined duration.
     * In case of back-to-back booking - custom duration of first appointment.
     *
     * @get get
     * @type {number}
     */
    this.i_duration = 0;

    /**
     * An index of the selected asset. `0` for booking of service or if asset is not on layout.
     *
     * @get get
     * @type {number}
     */
    this.i_index = 0;

    /**
     * Last day of the week. One of {@link ADateWeekSid} constants.
     *
     * @get result
     * @type {number}
     */
    this.i_week_end = undefined;

    /**
     * First day of the week. One of {@link ADateWeekSid} constants.
     *
     * @get result
     * @type {number}
     */
    this.i_week_start = undefined;

    /**
     * The ID of the staff member's gender.
     * In case of back-to-back booking - staff gender of first appointment.
     * One of the {@link AGenderSid} constants. `0` means no limitations on staff gender.
     *
     * @get get
     * @type {number}
     */
    this.id_gender_staff = 0;

    /**
     * Determines whether multiple appointments are booked in back-to-back mode.
     *
     * @get get
     * @type {boolean}
     */
    this.is_back_to_back = false;

    /**
     * If calendar should be displayed in month view mode.
     *
     * @get get
     * @type {boolean}
     */
    this.is_month_view = true;

    /**
     * <tt>true</tt> if the request is made by staff member; in this case booking policy restrictions are ignored.
     * <tt>false</tt> if the request is made by client; booking policy restrictions are applied.
     *
     * @get get
     * @type {boolean}
     */
    this.is_staff = false;

    /**
     * `true` - search in all tabs.
     * `false` - search only for the selected bookable tab.
     *
     * Cannot be set simultaneously with {DayTimeModel.k_class_tab}.
     *
     * @get get
     * @type {boolean}
     */
    this.is_tab_all = false;

    /**
     * `true` - return service categories that have no staff members able to conduct them.
     * `false` - return only service categories that have staff members able to conduct them.
     *
     * @get get
     * @type {boolean}
     */
    this.is_unavailable = false;

    /**
     * Whether list of available times contains slots with only waitlist booking available.
     *
     * @get result
     * @type {boolean}
     */
    this.is_waitlist = undefined;

    /**
     * If `true`, the client is a walk-in. Otherwise, this will be `false`.
     *
     * @get get
     * @post get
     * @type {boolean}
     */
    this.is_walk_in = false;

    /**
     * Current booking tab.
     * Only used for asset booking with "Allow clients to select a date and time, then the available asset" booking policy enabled.
     *
     * Cannot be set simultaneously with {DayTimeModel.is_tab_all}.
     *
     * @get get
     * @type {?string}
     */
    this.k_class_tab = null;

    /**
     * Location to show available appointment booking schedule.
     *
     * @get get,result
     * @post get
     * @type {string}
     */
    this.k_location = "0";

    /**
     * The resource key to show which days are available for booking.
     * Should be `0` in case of back-to-back booking.
     *
     * @get get
     * @type {string}
     */
    this.k_resource = "0";

    /**
     * The service key used for showing the available appointment booking schedule.
     * In case of back-to-back booking - service key of first appointment.
     *
     * @get get
     * @type {string}
     */
    this.k_service = "0";

    /**
     * Key of timezone.
     *
     * `null` if not set to use client's profile timezone.
     *
     * @get get
     * @type {?string}
     */
    this.k_timezone = null;

    /**
     * The staff key to show what days are available for booking.
     *
     * For back-to-back booking ({@link Wl_Appointment_Book_Schedule_DayTimeModel.is_back_to_back} == `true`): array of appointments for back-to-back booking.
     * Converted to JSON string to be usable as model key. Each item is an array with next structure:
     * <dl>
     *   <dt>array <var>a_addon</var></dt><dd>Array of appointment addons. Each value is primary key in {@link \RsShopProductSql} table.</dd>
     *   <dt>int <var>i_duration</var></dt><dd>Custom duration of the appointment in minutes. Zero in case of service predefined duration.</dd>
     *   <dt>int <var>id_gender_staff</var></dt><dd>Staff gender. One of {@link AGenderSid} constants. Zero mean no limitations on staff gender.</dd>
     *   <dt>string <var>k_service</var></dt><dd>Service key.</dd>
     *   <dt>string <var>k_staff</var></dt><dd>@deprecated Staff key. Zero means any available staff.</dd>
     *   <dt>string <var>uid_staff</var></dt><dd>Staff user key. Zero means any available staff.</dd>
     * </dl>
     *
     * For multiple appointment booking ({@link Wl_Appointment_Book_Schedule_DayTimeModel.is_back_to_back} == `false`): array of previously booked appointments.
     * Converted to JSON string to be usable as model key. Each item is an array with next structure:
     * <dl>
     *   <dt>string <var>dtl_date</var></dt><dd>Local date and time of appointment start in MySQL format.</dd>
     *   <dt>int <var>i_duration</var></dt><dd>Duration of the appointment in minutes.</dd>
     *   <dt>string <var>k_service</var></dt><dd>Service key.</dd>
     *   <dt>string <var>uid_staff</var></dt><dd>Staff user key. Zero means any available staff.</dd>
     * </dl>
     *
     * @get get
     * @type {string}
     */
    this.s_appointment = "";

    /**
     * A list of service add-ons keys(encoded as JSON string).
     * In case of back-to-back booking - add-ons of first appointment.
     *
     * @get get
     * @type {string}
     */
    this.s_product = "";

    /**
     * The user key.
     *
     * @get get
     * @post get
     * @type {string}
     */
    this.uid = "0";

    /**
     * The staff user key used for showing the available appointment booking schedule.
     * In case of back-to-back booking - staff user key of first appointment.
     * `0` means any available staff.
     *
     * @get get
     * @type {string}
     */
    this.uid_staff = "0";

    this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Schedule_Calendar73Model);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Schedule_Calendar73Model.prototype.config=function()
{
    return {"a_field": {"a_date": {"get": {"result": true}},"a_time": {"get": {"result": true}},"a_timezone_data": {"get": {"result": true}},"a_uid": {"get": {"get": true},"post": {"get": true}},"a_week_name": {"get": {"result": true}},"can_backwards": {"get": {"result": true}},"dt_date": {"get": {"get": true,"result": true}},"i_duration": {"get": {"get": true}},"i_index": {"get": {"get": true}},"i_week_end": {"get": {"result": true}},"i_week_start": {"get": {"result": true}},"id_gender_staff": {"get": {"get": true}},"is_back_to_back": {"get": {"get": true}},"is_month_view": {"get": {"get": true}},"is_staff": {"get": {"get": true}},"is_tab_all": {"get": {"get": true}},"is_unavailable": {"get": {"get": true}},"is_waitlist": {"get": {"result": true}},"is_walk_in": {"get": {"get": true},"post": {"get": true}},"k_class_tab": {"get": {"get": true}},"k_location": {"get": {"get": true,"result": true},"post": {"get": true}},"k_resource": {"get": {"get": true}},"k_service": {"get": {"get": true}},"k_timezone": {"get": {"get": true}},"s_appointment": {"get": {"get": true}},"s_product": {"get": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}},"uid_staff": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Schedule_Calendar73Model.instanceGet
 * @param {number} id_gender_staff The ID of the staff member's gender. In case of back-to-back booking - staff gender of first appointment. One of the {@link AGenderSid} constants. `0` means no limitations on staff gender.
 * @param {string} k_location Location to show available appointment booking schedule.
 * @param {string} k_service The service key used for showing the available appointment booking schedule. In case of back-to-back booking - service key of first appointment.
 * @param {string} k_resource The resource key to show which days are available for booking. Should be `0` in case of back-to-back booking.
 * @param {number} i_index An index of the selected asset. `0` for booking of service or if asset is not on layout.
 * @param {number} i_duration The duration of the asset booking or custom appointment duration in minutes. Zero in case of service predefined duration. In case of back-to-back booking - custom duration of first appointment.
 * @param {string} uid The user key.
 * @param {string} s_product A list of service add-ons keys(encoded as JSON string). In case of back-to-back booking - add-ons of first appointment.
 * @param {boolean} is_month_view If calendar should be displayed in month view mode.
 * @param {string} s_appointment The staff key to show what days are available for booking. For back-to-back booking ({@link Wl_Appointment_Book_Schedule_DayTimeModel.is_back_to_back} == `true`): array of appointments for back-to-back booking. Converted to JSON string to be usable as model key. Each item is an array with next structure: <dl>  <dt>array <var>a_addon</var></dt><dd>Array of appointment addons. Each value is primary key in {@link \RsShopProductSql} table.</dd>  <dt>int <var>i_duration</var></dt><dd>Custom duration of the appointment in minutes. Zero in case of service predefined duration.</dd>  <dt>int <var>id_gender_staff</var></dt><dd>Staff gender. One of {@link AGenderSid} constants. Zero mean no limitations on staff gender.</dd>  <dt>string <var>k_service</var></dt><dd>Service key.</dd>  <dt>string <var>k_staff</var></dt><dd>@deprecated Staff key. Zero means any available staff.</dd>  <dt>string <var>uid_staff</var></dt><dd>Staff user key. Zero means any available staff.</dd> </dl> For multiple appointment booking ({@link Wl_Appointment_Book_Schedule_DayTimeModel.is_back_to_back} == `false`): array of previously booked appointments. Converted to JSON string to be usable as model key. Each item is an array with next structure: <dl>  <dt>string <var>dtl_date</var></dt><dd>Local date and time of appointment start in MySQL format.</dd>  <dt>int <var>i_duration</var></dt><dd>Duration of the appointment in minutes.</dd>  <dt>string <var>k_service</var></dt><dd>Service key.</dd>  <dt>string <var>uid_staff</var></dt><dd>Staff user key. Zero means any available staff.</dd> </dl>
 * @param {boolean} is_staff <tt>true</tt> if the request is made by staff member; in this case booking policy restrictions are ignored. <tt>false</tt> if the request is made by client; booking policy restrictions are applied.
 * @param {boolean} is_back_to_back Determines whether multiple appointments are booked in back-to-back mode.
 * @param {?string} k_timezone Key of timezone. `null` if not set to use client's profile timezone.
 * @param {?string} k_class_tab Current booking tab. Only used for asset booking with "Allow clients to select a date and time, then the available asset" booking policy enabled. Cannot be set simultaneously with {DayTimeModel.is_tab_all}.
 * @param {boolean} is_tab_all `true` - search in all tabs. `false` - search only for the selected bookable tab. Cannot be set simultaneously with {DayTimeModel.k_class_tab}.
 * @param {string} uid_staff The staff user key used for showing the available appointment booking schedule. In case of back-to-back booking - staff user key of first appointment. `0` means any available staff.
 * @returns {Wl_Appointment_Book_Schedule_Calendar73Model}
 * @see WlSdk_ModelAbstract.instanceGet()
 */