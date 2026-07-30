/**
 * Retrieves a list with all calendar days in specified period with available and unavailable appointment booking schedule.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @deprecated Use {@link _Wl_Appointment_Book_Schedule_Calendar73Model}
 */
function Wl_Appointment_Book_Schedule_CalendarModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "id_gender_staff,k_staff,k_location,k_service,k_resource,i_index,i_duration,uid,s_product,is_month_view,s_appointment,is_staff,is_back_to_back,k_timezone,k_class_tab,is_tab_all";

  /**
   * @typedef {{}} Wl_Appointment_Book_Schedule_CalendarModel_a_date
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
   *
   * @get result
   * @type {Wl_Appointment_Book_Schedule_CalendarModel_a_date[]}
   */
  this.a_date = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Schedule_CalendarModel_a_time
   * @property {string} dt_date Date of the calendar.
   * @property {string} dtu_date Same moment as `dt_date`, converted to real UTC date and time, in MySQL format.
   * @property {number} i_count The count of clients that have already booked this appointment.
   * @property {number} i_time Integer representation of appointment schedule time.
   * @property {number} i_wait The count of clients on the waiting list for this appointment.
   * @property {boolean} is_waitlist Whether the appointment can be booked only in a wait list.
   * @property {string} k_staff @deprecated If this time is already occupied by any client and staff member (but service capacity is not exhausted),   this key contains key of staff member.  Otherwise - `0`.
   * @property {string} s_title String representation of appointment schedule time.
   * @property {string} uid_staff If this time is already occupied by any client and staff member (but service capacity is not exhausted),   this key contains user key of staff member.  Otherwise - `0`.
   */

  /**
   * An array with a schedule of available appointment booking times.
   *
   * @get result
   * @type {Wl_Appointment_Book_Schedule_CalendarModel_a_time}
   */
  this.a_time = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Schedule_CalendarModel_a_timezone_data_a_timezone
   * @property {number} i_order Timezone order.
   * @property {number} i_shift Timezone shift from UTC in hours.
   * @property {boolean} is_select `true` for selected timezone - from {@link Wl_Appointment_Book_Schedule_CalendarModel.k_timezone} param or client's default timezone when param not set.
   * @property {string} k_timezone Timezone key.
   * @property {string} s_title Timezone name.
   * @property {string} text_abbr Timezone abbreviation.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Schedule_CalendarModel_a_timezone_data
   * @property {?Wl_Appointment_Book_Schedule_CalendarModel_a_timezone_data_a_timezone} a_timezone `null` if business settings doesn't allow client to adjust timezone, otherwise list of timezones:
   * @property {?string} name `null` if business settings doesn't allow client to adjust timezone, otherwise timezone input name.
   */

  /**
   * Information about timezone.
   *
   * @get result
   * @type {Wl_Appointment_Book_Schedule_CalendarModel_a_timezone_data}
   */
  this.a_timezone_data = undefined;

  /**
   * List of user keys to book appointments.
   * There may be empty values in this list, which means that this is a walk-in.
   *
   * @get get
   * @type {string[]}
   */
  this.a_uid = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Schedule_CalendarModel_a_week_name
   * @property {string} html_week_day Short week day's name (2 letters, i.e. 'Fr').
   * @property {number} i_day Week day, one of the {@link ADateWeekSid} constants.
   */

  /**
   * Array with short week day's names (2 letters, i.e. 'Fr') for calendar month view. Week days order according to business's settings.
   *
   * @get result
   * @type {Wl_Appointment_Book_Schedule_CalendarModel_a_week_name}
   */
  this.a_week_name = undefined;

  /**
   * Whether previous calendar period can be shown (start of shown period later than current date).
   *
   * @get result
   * @type {boolean}
   */
  this.can_backwards = undefined;

  /**
   * The date to show the available appointment booking schedule.
   *
   * @get get,result
   * @type {string}
   */
  this.dt_date = "";

  /**
   * Maximum number of clients that can simultaneously book this service.
   * `null` for asset bookings where this limit does not apply.
   *
   * @get result
   * @type {?number}
   */
  this.i_capacity = null;

  /**
   * Maximum number of clients that can be placed on the waitlist for this service.
   * `null` if waitlist is disabled, the waitlist has no capacity limit, or for asset bookings.
   *
   * @get result
   * @type {?number}
   */
  this.i_capacity_waitlist = null;

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
   * @see ADateWeekSid
   * @type {number}
   */
  this.i_week_end = undefined;

  /**
   * First day of the week. One of {@link ADateWeekSid} constants.
   *
   * @get result
   * @see ADateWeekSid
   * @type {number}
   */
  this.i_week_start = undefined;

  /**
   * The ID of the staff member's gender.
   * In case of back-to-back booking - staff gender of first appointment.
   * One of the {@link AGenderSid} constants. `0` means no limitations on staff gender.
   *
   * @get get
   * @see AGenderSid
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
   * `true` if the request is made by staff member; in this case booking policy restrictions are ignored.
   * `false` if the request is made by client; booking policy restrictions are applied.
   *
   * @get get
   * @type {boolean}
   */
  this.is_staff = false;

  /**
   * `true` - search in all tabs.
   * `false` - search only for the selected bookable tab.
   *
   * Cannot be set simultaneously with {DayTimeApi::$k_class_tab}.
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
   * @type {boolean}
   */
  this.is_walk_in = false;

  /**
   * Current booking tab.
   * Only used for asset booking with "Allow clients to select a date and time, then the available asset" booking policy enabled.
   *
   * Cannot be set simultaneously with {DayTimeApi::$is_tab_all}.
   *
   * @get get
   * @type {?string}
   */
  this.k_class_tab = null;

  /**
   * Location to show available appointment booking schedule.
   *
   * @get get,result
   * @type {string}
   */
  this.k_location = "";

  /**
   * The resource key to show which days are available for booking.
   * Should be `0` in case of back-to-back booking.
   *
   * @get get
   * @type {string}
   */
  this.k_resource = "";

  /**
   * The service key used for showing the available appointment booking schedule.
   * In case of back-to-back booking - service key of first appointment.
   *
   * @get get
   * @type {string}
   */
  this.k_service = "";

  /**
   * The staff member key used for showing the available appointment booking schedule.
   * In case of back-to-back booking - staff key of first appointment.
   * `0` means any available staff.
   *
   * @deprecated This property will be removed in the future. Use {@link Wl_Appointment_Book_Schedule_DayTimeModel.uid_staff} instead.
   * @get get
   * @type {string}
   */
  this.k_staff = "";

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
   * This field is used if the client books for himself or for the relative.
   *
   * This field is incorrect to use for guest booking since in this case the client will be checked as a relative.
   *
   * In case of a group booking or a guest booking, the key of the client who is making the booking is set here.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  /**
   * The staff user key used for showing the available appointment booking schedule.
   * In case of back-to-back booking - staff user key of first appointment.
   * `0` means any available staff.
   *
   * @get get
   * @type {string}
   */
  this.uid_staff = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Schedule_CalendarModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Schedule_CalendarModel.prototype.config=function()
{
  return {"a_field":{"a_date":{"get":{"result":true}},"a_time":{"get":{"result":true}},"a_timezone_data":{"get":{"result":true}},"a_uid":{"get":{"get":true}},"a_week_name":{"get":{"result":true}},"can_backwards":{"get":{"result":true}},"dt_date":{"get":{"get":true,"result":true}},"i_capacity":{"get":{"result":true}},"i_capacity_waitlist":{"get":{"result":true}},"i_duration":{"get":{"get":true}},"i_index":{"get":{"get":true}},"i_week_end":{"get":{"result":true}},"i_week_start":{"get":{"result":true}},"id_gender_staff":{"get":{"get":true}},"is_back_to_back":{"get":{"get":true}},"is_month_view":{"get":{"get":true}},"is_staff":{"get":{"get":true}},"is_tab_all":{"get":{"get":true}},"is_unavailable":{"get":{"get":true}},"is_waitlist":{"get":{"result":true}},"is_walk_in":{"get":{"get":true}},"k_class_tab":{"get":{"get":true}},"k_location":{"get":{"get":true,"result":true}},"k_resource":{"get":{"get":true}},"k_service":{"get":{"get":true}},"k_staff":{"get":{"get":true}},"k_timezone":{"get":{"get":true}},"s_appointment":{"get":{"get":true}},"s_product":{"get":{"get":true}},"uid":{"get":{"get":true}},"uid_staff":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Schedule_CalendarModel.instanceGet
 * @param {number} id_gender_staff The ID of the staff member's gender. In case of back-to-back booking - staff gender of first appointment. One of the {@link AGenderSid} constants. `0` means no limitations on staff gender.
 * @param {string} k_staff The staff member key used for showing the available appointment booking schedule. In case of back-to-back booking - staff key of first appointment. `0` means any available staff.
 * @param {string} k_location Location to show available appointment booking schedule.
 * @param {string} k_service The service key used for showing the available appointment booking schedule. In case of back-to-back booking - service key of first appointment.
 * @param {string} k_resource The resource key to show which days are available for booking. Should be `0` in case of back-to-back booking.
 * @param {number} i_index An index of the selected asset. `0` for booking of service or if asset is not on layout.
 * @param {number} i_duration The duration of the asset booking or custom appointment duration in minutes. Zero in case of service predefined duration. In case of back-to-back booking - custom duration of first appointment.
 * @param {string} uid The user key. This field is used if the client books for himself or for the relative. This field is incorrect to use for guest booking since in this case the client will be checked as a relative. In case of a group booking or a guest booking, the key of the client who is making the booking is set here.
 * @param {string} s_product A list of service add-ons keys(encoded as JSON string). In case of back-to-back booking - add-ons of first appointment.
 * @param {boolean} is_month_view If calendar should be displayed in month view mode.
 * @param {string} s_appointment The staff key to show what days are available for booking. For back-to-back booking ({@link Wl_Appointment_Book_Schedule_DayTimeModel.is_back_to_back} == `true`): array of appointments for back-to-back booking. Converted to JSON string to be usable as model key. Each item is an array with next structure:
 * @param {boolean} is_staff `true` if the request is made by staff member; in this case booking policy restrictions are ignored. `false` if the request is made by client; booking policy restrictions are applied.
 * @param {boolean} is_back_to_back Determines whether multiple appointments are booked in back-to-back mode.
 * @param {?string} k_timezone Key of timezone. `null` if not set to use client's profile timezone.
 * @param {?string} k_class_tab Current booking tab. Only used for asset booking with "Allow clients to select a date and time, then the available asset" booking policy enabled. Cannot be set simultaneously with {DayTimeApi::$is_tab_all}.
 * @param {boolean} is_tab_all `true` - search in all tabs. `false` - search only for the selected bookable tab. Cannot be set simultaneously with {DayTimeApi::$k_class_tab}.
 * @returns {Wl_Appointment_Book_Schedule_CalendarModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves a list with all calendar days in specified period with available and unavailable appointment booking schedule.
 *
 * Returns each day in the requested month marked as available or unavailable for booking the given
 * service at the given location. Availability is determined by the business schedule, holidays,
 * and staff availability for the selected date range.
 *
 * @function
 * @name Wl_Appointment_Book_Schedule_CalendarModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
