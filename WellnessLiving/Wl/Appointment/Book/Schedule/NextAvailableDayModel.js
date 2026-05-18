/**
 * Returns next day with available.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @see Wl\Appointment\Book\Schedule\NextAvailableDayApi
 */
function Wl_Appointment_Book_Schedule_NextAvailableDayModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "id_gender_staff,dt_date,k_location,k_service,k_resource,i_index,i_duration,uid,is_unavailable,s_product,s_appointment,is_staff,is_back_to_back,k_timezone,k_class_tab,is_tab_all,uid_staff";

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
   * Start date to search next available date in MySQL format. If empty, the search will start from the current date.
   *
   * @get get,result
   * @type {string}
   */
  this.dt_date = "";

  /**
   * Next available date in MySQL format.
   *
   * @get result
   * @type {string}
   */
  this.dt_next = "";

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
   * Determines whether multiple appointments are booked in back-to-back mode.
   *
   * @get get
   * @type {boolean}
   */
  this.is_back_to_back = false;

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
   * `null` if not set then use default timezone client. See {@link Wl\Profile\Timezone\ProfileTimezone::createInBusiness()}.
   *
   * @get get
   * @type {?string}
   */
  this.k_timezone = null;

  /**
   * The staff key to show what days are available for booking.
   *
   * For back-to-back booking ({@link Wl_Appointment_Book_Schedule_NextAvailableDayModel.is_back_to_back} == `true`): array of appointments for back-to-back booking.
   * Converted to JSON string to be usable as model key. Each item is an array with next structure:
   * <dl>
   *   <dt>array `a_addon`</dt><dd>Array of appointment add-ons. Each value is a key of add-on.</dd>
   *   <dt>int `i_duration`</dt><dd>Custom duration of the appointment in minutes. Zero in case of service predefined duration.</dd>
   *   <dt>int `id_gender_staff`</dt><dd>Staff gender. One of {@link AGenderSid} constants. Zero mean no limitations on staff gender.</dd>
   *   <dt>string `k_service`</dt><dd>Service key.</dd>
   *   <dt>string `k_staff`</dt><dd>@deprecated Staff key. Zero means any available staff.</dd>
   *   <dt>string `uid_staff`</dt><dd>Staff user key. Zero means any available staff.</dd>
   * </dl>
   *
   * For multiple appointment booking ({@link Wl_Appointment_Book_Schedule_NextAvailableDayModel.is_back_to_back} == `false`): array of previously booked appointments.
   * Converted to JSON string to be usable as model key. Each item is an array with next structure:
   * <dl>
   *   <dt>string `dtl_date`</dt><dd>Local date and time of appointment start in MySQL format.</dd>
   *   <dt>int `i_duration`</dt><dd>Duration of the appointment in minutes.</dd>
   *   <dt>string `k_service`</dt><dd>Service key.</dd>
   *   <dt>string `uid_staff`</dt><dd>Staff user key. Zero means any available staff.</dd>
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
   * This field is used if the client books for himself or for the relative.
   *
   * This field is incorrect to use for guest booking since in this case the client will be checked as a relative.
   *
   * In case of a group booking or a guest booking, the key of the client who is making the booking is set here.
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

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Schedule_NextAvailableDayModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Schedule_NextAvailableDayModel.prototype.config=function()
{
  return {"a_field": {"a_uid": {"get": {"get": true},"post": {"get": true}},"dt_date": {"get": {"get": true,"result": true}},"dt_next": {"get": {"result": true}},"i_duration": {"get": {"get": true}},"i_index": {"get": {"get": true}},"id_gender_staff": {"get": {"get": true}},"is_back_to_back": {"get": {"get": true}},"is_staff": {"get": {"get": true}},"is_tab_all": {"get": {"get": true}},"is_unavailable": {"get": {"get": true}},"is_waitlist": {"get": {"result": true}},"is_walk_in": {"get": {"get": true},"post": {"get": true}},"k_class_tab": {"get": {"get": true}},"k_location": {"get": {"get": true,"result": true},"post": {"get": true}},"k_resource": {"get": {"get": true}},"k_service": {"get": {"get": true}},"k_timezone": {"get": {"get": true}},"s_appointment": {"get": {"get": true}},"s_product": {"get": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}},"uid_staff": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Schedule_NextAvailableDayModel.instanceGet
 * @param {number} id_gender_staff The ID of the staff member's gender. In case of back-to-back booking - staff gender of first appointment. One of the {@link AGenderSid} constants. `0` means no limitations on staff gender.
 * @param {string} dt_date Start date to search next available date in MySQL format. If empty, the search will start from the current date.
 * @param {string} k_location Location to show available appointment booking schedule.
 * @param {string} k_service The service key used for showing the available appointment booking schedule. In case of back-to-back booking - service key of first appointment.
 * @param {string} k_resource The resource key to show which days are available for booking. Should be `0` in case of back-to-back booking.
 * @param {number} i_index An index of the selected asset. `0` for booking of service or if asset is not on layout.
 * @param {number} i_duration The duration of the asset booking or custom appointment duration in minutes. Zero in case of service predefined duration. In case of back-to-back booking - custom duration of first appointment.
 * @param {string} uid The user key. This field is used if the client books for himself or for the relative. This field is incorrect to use for guest booking since in this case the client will be checked as a relative. In case of a group booking or a guest booking, the key of the client who is making the booking is set here.
 * @param {boolean} is_unavailable `true` - return service categories that have no staff members able to conduct them. `false` - return only service categories that have staff members able to conduct them.
 * @param {string} s_product A list of service add-ons keys(encoded as JSON string). In case of back-to-back booking - add-ons of first appointment.
 * @param {string} s_appointment The staff key to show what days are available for booking. For back-to-back booking ({@link Wl_Appointment_Book_Schedule_DayTimeModel.is_back_to_back} == `true`): array of appointments for back-to-back booking. Converted to JSON string to be usable as model key. Each item is an array with next structure: <dl>  <dt>array `a_addon`</dt><dd>Array of appointment addons. Each value is primary key in {@link \RsShopProductSql} table.</dd>  <dt>int `i_duration`</dt><dd>Custom duration of the appointment in minutes. Zero in case of service predefined duration.</dd>  <dt>int `id_gender_staff`</dt><dd>Staff gender. One of {@link AGenderSid} constants. Zero mean no limitations on staff gender.</dd>  <dt>string `k_service`</dt><dd>Service key.</dd>  <dt>string `k_staff`</dt><dd>@deprecated Staff key. Zero means any available staff.</dd>  <dt>string `uid_staff`</dt><dd>Staff user key. Zero means any available staff.</dd> </dl> For multiple appointment booking ({@link Wl_Appointment_Book_Schedule_DayTimeModel.is_back_to_back} == `false`): array of previously booked appointments. Converted to JSON string to be usable as model key. Each item is an array with next structure: <dl>  <dt>string `dtl_date`</dt><dd>Local date and time of appointment start in MySQL format.</dd>  <dt>int `i_duration`</dt><dd>Duration of the appointment in minutes.</dd>  <dt>string `k_service`</dt><dd>Service key.</dd>  <dt>string `uid_staff`</dt><dd>Staff user key. Zero means any available staff.</dd> </dl>
 * @param {boolean} is_staff `true` if the request is made by staff member; in this case booking policy restrictions are ignored. `false` if the request is made by client; booking policy restrictions are applied.
 * @param {boolean} is_back_to_back Determines whether multiple appointments are booked in back-to-back mode.
 * @param {?string} k_timezone Key of timezone. `null` if not set then use default timezone client. See {@link Wl\Profile\Timezone\ProfileTimezone::createInBusiness()}.
 * @param {?string} k_class_tab Current booking tab. Only used for asset booking with "Allow clients to select a date and time, then the available asset" booking policy enabled. Cannot be set simultaneously with {DayTimeModel.is_tab_all}.
 * @param {boolean} is_tab_all `true` - search in all tabs. `false` - search only for the selected bookable tab. Cannot be set simultaneously with {DayTimeModel.k_class_tab}.
 * @param {string} uid_staff The staff user key used for showing the available appointment booking schedule. In case of back-to-back booking - staff user key of first appointment. `0` means any available staff.
 * @returns {Wl_Appointment_Book_Schedule_NextAvailableDayModel}
 * @see Core_Spa_Model.instanceGet()
 */