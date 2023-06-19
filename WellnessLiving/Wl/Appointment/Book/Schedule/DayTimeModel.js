/**
 * An endpoint that retrieves a list of information about the booking schedule for available appointments.
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
  this._s_key = "id_gender_staff,k_staff,dt_date,k_location,k_service,k_resource,i_index,i_duration,uid,is_unavailable,s_product,s_appointment,is_staff,is_back_to_back,k_timezone";

  /**
   * @typedef {{}} Wl_Appointment_Book_Schedule_DayTimeModel_a_time
   * @property {string} dt_date Date of the calendar.
   * @property {number} i_count Amount of clients that have already booked this appointment.
   * @property {number} i_time Integer representation of appointment schedule time.
   * @property {boolean} is_waitlist Whether the appointment can be booked only in a wait list.
   * @property {string} k_staff If this time is already occupied by any client and staff member (but service capacity is not exhausted),
   *   this key contains key of staff member (primary key in {@link \RsStaffSql} table). Otherwise `0`.
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
   *   <dd>If this time is already occupied by any client and staff member (but service capacity is not exhausted),
   *       this key contains key of staff member (primary key in {@link \RsStaffSql} table). Otherwise `0`.</dd>
   *   <dt>string <var>s_title</var></dt>
   *   <dd>String representation of appointment schedule time.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Schedule_DayTimeModel_a_time}
   */
  this.a_time = undefined;

  /**
   * List of user keys to book appointments - primary keys in {@link \PassportLoginSql}.
   * There may be empty values in this list, which means that this is a walk-in.
   *
   * @get get
   * @post get
   * @type {string[]}
   */
  this.a_uid = [];

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
   * The ID of the staff member's gender.
   * In case of back-to-back booking - staff gender of first appointment.
   * One of the {@link AGenderSid} constants. `0` means no limitations on staff gender.
   *
   * @get get
   * @type {number}
   */
  this.id_gender_staff = 0;

  /**
   * Whether multiple appointments booked in back-to-back mode.
   *
   * @get get
   * @type {boolean}
   */
  this.is_back_to_back = false;

  /**
   * <tt>true</tt> if the request is made by staff member; in this case booking policy restrictions are ignored.
   * <tt>false</tt> if the request is made by client; booking policy restrictions are applied.
   *
   * @get get
   * @type {boolean}
   */
  this.is_staff = false;

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
   * `true` if client is walk-in, otherwise `false`.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.is_walk_in = false;

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
   * The staff member key used for showing the available appointment booking schedule.
   * In case of back-to-back booking - staff key of first appointment.
   * `0` means any available staff.
   *
   * @get get
   * @type {string}
   */
  this.k_staff = "0";

  /**
   * Key of timezone.
   *
   * `null` if not set then use default timezone client {@link Wl\Profile\Timezone\ProfileTimezone::createInBusiness()}.
   *
   * @get get
   * @type {?string}
   */
  this.k_timezone = null;

  /**
   * Empty string for single appointment/asset booking.
   *
   * For back-to-back booking ({@link Wl_Appointment_Book_Schedule_DayTimeModel.is_back_to_back} == `true`): array of appointments for back-to-back booking.
   * Converted to JSON string to be usable as model key. Each item is an array with next structure:
   * <dl>
   * <dt>array <var>a_addon</var></dt><dd>Array of appointment addons. Each value is primary key in {@link \RsShopProductSql} table.</dd>
   * <dt>int <var>i_duration</var></dt><dd>Custom duration of the appointment in minutes. Zero in case of service predefined duration.</dd>
   * <dt>int <var>id_gender_staff</var></dt><dd>Staff gender. One of {@link Wl_Gender_GenderSid} constants. Zero mean no limitations on staff gender.</dd>
   * <dt>string <var>k_service</var></dt><dd>Service key.</dd>
   * <dt>string <var>k_staff</var></dt><dd>Staff key. Zero means any available staff.</dd>
   * </dl>
   *
   * For multiple appointment booking ({@link Wl_Appointment_Book_Schedule_DayTimeModel.is_back_to_back} == `false`): array of previously booked appointments.
   * Converted to JSON string to be usable as model key. Each item is an array with next structure:
   * <dl>
   * <dt>string <var>dtl_date</var></dt><dd>Local date and time of appointment start in MySQL format.</dd>
   * <dt>int <var>i_duration</var></dt><dd>Duration of the appointment in minutes.</dd>
   * <dt>string <var>k_service</var></dt><dd>Service key.</dd>
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
   * User to get information for.
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
 * @param {number} id_gender_staff The ID of the staff member's gender. In case of back-to-back booking - staff gender of first appointment. One of the {@link AGenderSid} constants. `0` means no limitations on staff gender.
 * @param {string} k_staff The staff member key used for showing the available appointment booking schedule. In case of back-to-back booking - staff key of first appointment. `0` means any available staff.
 * @param {string} dt_date The date to show the available appointment booking schedule.
 * @param {string} k_location Location to show available appointment booking schedule.
 * @param {string} k_service The service key used for showing the available appointment booking schedule. In case of back-to-back booking - service key of first appointment.
 * @param {string} k_resource The resource key to show which days are available for booking. Should be `0` in case of back-to-back booking.
 * @param {number} i_index An index of the selected asset. `0` for booking of service or if asset is not on layout.
 * @param {number} i_duration The duration of the asset booking or custom appointment duration in minutes. Zero in case of service predefined duration. In case of back-to-back booking - custom duration of first appointment.
 * @param {string} uid User to get information for.
 * @param {boolean} is_unavailable `true` - return service categories that have no staff members able to conduct them. `false` - return only service categories that have staff members able to conduct them.
 * @param {string} s_product A list of service add-ons keys(encoded as JSON string). In case of back-to-back booking - add-ons of first appointment.
 * @param {string} s_appointment Empty string for single appointment/asset booking. For back-to-back booking ({@link Wl_Appointment_Book_Schedule_DayTimeModel.is_back_to_back} == `true`): array of appointments for back-to-back booking. Converted to JSON string to be usable as model key. Each item is an array with next structure: <dl> <dt>array <var>a_addon</var></dt><dd>Array of appointment addons. Each value is primary key in {@link \RsShopProductSql} table.</dd> <dt>int <var>i_duration</var></dt><dd>Custom duration of the appointment in minutes. Zero in case of service predefined duration.</dd> <dt>int <var>id_gender_staff</var></dt><dd>Staff gender. One of {@link Wl_Gender_GenderSid} constants. Zero mean no limitations on staff gender.</dd> <dt>string <var>k_service</var></dt><dd>Service key.</dd> <dt>string <var>k_staff</var></dt><dd>Staff key. Zero means any available staff.</dd> </dl> For multiple appointment booking ({@link Wl_Appointment_Book_Schedule_DayTimeModel.is_back_to_back} == `false`): array of previously booked appointments. Converted to JSON string to be usable as model key. Each item is an array with next structure: <dl> <dt>string <var>dtl_date</var></dt><dd>Local date and time of appointment start in MySQL format.</dd> <dt>int <var>i_duration</var></dt><dd>Duration of the appointment in minutes.</dd> <dt>string <var>k_service</var></dt><dd>Service key.</dd> </dl>
 * @param {boolean} is_staff <tt>true</tt> if the request is made by staff member; in this case booking policy restrictions are ignored. <tt>false</tt> if the request is made by client; booking policy restrictions are applied.
 * @param {boolean} is_back_to_back Whether multiple appointments booked in back-to-back mode.
 * @param {?string} k_timezone Key of timezone. `null` if not set then use default timezone client {@link Wl\Profile\Timezone\ProfileTimezone::createInBusiness()}.
 * @returns {Wl_Appointment_Book_Schedule_DayTimeModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */