/**
 * An endpoint that retrieves a list of information about the booking schedule for available appointments.
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
  this._s_key = "id_gender_staff,k_staff,dt_date,k_location,k_service,k_resource,i_index,i_duration,uid,is_unavailable,s_product,s_appointment,is_staff,is_back_to_back,k_timezone";

  /**
   * @typedef {{}} Wl_Appointment_Book_Schedule_DayTimeModel_a_time
   * @property {string} dt_date The calendar date.
   * @property {number} i_count The number of clients that have already booked the appointment.
   * @property {number} i_time The integer representation of the appointment schedule time.
   * @property {boolean} is_waitlist Determines whether the appointment can only be booked in a wait list.
   * @property {string} k_staff Determines if this time is already occupied by a client or staff member without the service capacity being reached.
   * This key contains the key of the staff member. Otherwise, this will be `0`.
   * @property {string} s_title The string representation of appointment schedule time.
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
   * @type {Wl_Appointment_Book_Schedule_DayTimeModel_a_time}
   */
  this.a_time = undefined;

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
   * An empty string for a single appointment/asset booking.
   *
   * For back-to-back booking ({@link Wl_Appointment_Book_Schedule_DayTimeModel.is_back_to_back} == `true`): array of appointments for back-to-back booking.
   * Converted to JSON string to be usable as model key. Each item is an array with next structure:
   * <dl>
   * <dt>array <var>a_addon</var></dt><dd>An array of appointment add-ons.</dd>
   * <dt>int <var>i_duration</var></dt><dd>The custom duration of the appointment in minutes. This will be zero for services with predefined durations.</dd>
   * <dt>int <var>id_gender_staff</var></dt><dd>The staff member gender. One of the {@link Wl_Gender_GenderSid} constants. This will be '0' if there are no limitations on staff member gender.</dd>
   * <dt>string <var>k_service</var></dt><dd>The service key.</dd>
   * <dt>string <var>k_staff</var></dt><dd>The staff member key. This will be '0' if any available staff member key can be used.</dd>
   * </dl>
   *
   * For multiple appointment booking ({@link Wl_Appointment_Book_Schedule_DayTimeModel.is_back_to_back} == `false`): array of previously booked appointments.
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

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Schedule_DayTimeModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Schedule_DayTimeModel.prototype.config=function()
{
  return {"a_field": {"a_time": {"get": {"result": true}},"a_uid": {"get": {"get": true},"post": {"get": true}},"dt_date": {"get": {"get": true,"result": true}},"i_duration": {"get": {"get": true}},"i_index": {"get": {"get": true}},"id_gender_staff": {"get": {"get": true}},"is_back_to_back": {"get": {"get": true}},"is_staff": {"get": {"get": true}},"is_unavailable": {"get": {"get": true}},"is_waitlist": {"get": {"result": true}},"is_walk_in": {"get": {"get": true},"post": {"get": true}},"k_location": {"get": {"get": true,"result": true},"post": {"get": true}},"k_resource": {"get": {"get": true}},"k_service": {"get": {"get": true}},"k_staff": {"get": {"get": true}},"k_timezone": {"get": {"get": true}},"s_appointment": {"get": {"get": true}},"s_product": {"get": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Schedule_DayTimeModel.instanceGet
 * @param {number} id_gender_staff The staff member gender. One of the {@link Wl_Gender_GenderSid} constants. This will be '0' if there are no limitations on staff member gender.
 * One of the {@link AGenderSid} constants. This will be `0` if there are no limitations for staff member gender.
 * @param {string} k_staff The staff member key used for showing the available appointment booking schedule.
 * This will be the staff member key of the first appointment for back-to-back bookings.
 * If `0`, any available staff member key can be used.
 * @param {string} dt_date The date to show the available appointment booking schedule for.
 * @param {string} k_location The location to show the available appointment booking schedule for.
 * @param {string} k_service The service key used for showing the available appointment booking schedule.
 * This will be the service key of first appointment for back-to-back bookings.
 * @param {string} k_resource The resource key to show which days are available for booking.
 * This will be `0` for back-to-back bookings.
 * @param {number} i_index An index of the selected asset. This will be `0` for a service booking or asset that isn't on the layout.
 * @param {number} i_duration The duration of the asset booking or custom appointment duration in minutes. This will be zero for services with predefined durations.
 * For back-to-back bookings, this will display the custom duration of the first appointment.
 * @param {string} uid The client to get information for.
 * @param {boolean} is_unavailable <tt>true</tt> if service categories that have no staff members able to conduct them are returned.
 * Otherwise, <tt>false</tt> if only service categories that have staff members able to conduct them are returned.
 * @param {string} s_product A list of service add-on keys encoded as a JSON string.
 * This will be the add-on of the first appointment for back-to-back bookings.
 * @param {string} s_appointment Empty string for single appointment/asset booking. For back-to-back booking ({@link Wl_Appointment_Book_Schedule_DayTimeModel.is_back_to_back} == `true`): array of appointments for back-to-back booking. Converted to JSON string to be usable as model key. Each item is an array with next structure: <dl> <dt>array <var>a_addon</var></dt><dd>Array of appointment addons. Each value is primary key in {@link \RsShopProductSql} table.</dd> <dt>int <var>i_duration</var></dt><dd>Custom duration of the appointment in minutes. Zero in case of service predefined duration.</dd> <dt>int <var>id_gender_staff</var></dt><dd>Staff gender. One of {@link Wl_Gender_GenderSid} constants. Zero mean no limitations on staff gender.</dd> <dt>string <var>k_service</var></dt><dd>Service key.</dd> <dt>string <var>k_staff</var></dt><dd>Staff key. Zero means any available staff.</dd> </dl> For multiple appointment booking ({@link Wl_Appointment_Book_Schedule_DayTimeModel.is_back_to_back} == `false`): array of previously booked appointments. Converted to JSON string to be usable as model key. Each item is an array with next structure: <dl> <dt>string <var>dtl_date</var></dt><dd>Local date and time of appointment start in MySQL format.</dd> <dt>int <var>i_duration</var></dt><dd>Duration of the appointment in minutes.</dd> <dt>string <var>k_service</var></dt><dd>Service key.</dd> </dl>
 * @param {boolean} is_staff <tt>true</tt> if the request is made by the staff member (booking policy restrictions are ignored).
 * Otherwise, <tt>false</tt> if the request is made by the client (booking policy restrictions are applied).
 * @param {boolean} is_back_to_back Determines whether multiple appointments are booked in the back-to-back mode.
 * @param {?string} k_timezone The time zone key. This will be `null` if not set yet or when using the client's time zone.
 * @returns {Wl_Appointment_Book_Schedule_DayTimeModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */