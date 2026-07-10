/**
 * Returns detailed information about a single class period, appointment, or asset session.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Attendance_AttendanceInfoByTokenModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "dt_date_local,k_appointment,k_class_period,k_business";

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceInfoByTokenModel_a_appointment_visit_info
   * @property {boolean} is_deny `true` means that appointment was requested and denied by the staff.
   * @property {boolean} is_notify_request_accept `true` means that the client will receive a notification, if appointment will be confirmed by the staff.
   * @property {boolean} is_notify_request_deny `true` means that the client will receive a notification, if appointment will be denied by the staff.
   * @property {boolean} is_request `true` means that appointment was requested, but not confirmed by the staff.
   */

  /**
   * Additional visit information about this appointment. Empty array if it's not an appointment:
   *
   * @get result
   * @type {Wl_Login_Attendance_AttendanceInfoByTokenModel_a_appointment_visit_info}
   */
  this.a_appointment_visit_info = undefined;

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceInfoByTokenModel_a_logo
   * @property {boolean} is_empty Whether service image is empty.
   * @property {string} s_url Url link to image.
   */

  /**
   * Service logo information:
   *
   * @get result
   * @type {Wl_Login_Attendance_AttendanceInfoByTokenModel_a_logo}
   */
  this.a_logo = undefined;

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceInfoByTokenModel_a_purchase_option_default
   * @property {?number} id_sale List of sale categories on the store page.
   * @property {boolean} is_single_default If the default Purchase Option is set to "Drop-in rate" then the value will be `true`, `false` otherwise.
   * @property {?string} k_id The default Purchase Option key.  This will be `null` if the class has no default Purchase Option, or it sets to "Drop-in rate".
   */

  /**
   * Default purchase option information.
   *
   * @get result
   * @type {Wl_Login_Attendance_AttendanceInfoByTokenModel_a_purchase_option_default}
   */
  this.a_purchase_option_default = undefined;

  /**
   * Assets which are bound to this session.
   *
   * @get result
   * @type {string[]}
   */
  this.a_resource = undefined;

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceInfoByTokenModel_a_resource_layout_a_client
   * @property {string} text_client User's name.
   * @property {string} uid User's primary key.
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceInfoByTokenModel_a_resource_layout
   * @property {Wl_Login_Attendance_AttendanceInfoByTokenModel_a_resource_layout_a_client} a_client List of clients who occupy assets of class. It is a double nesting array. Keys -  Sub keys - asset index. Values - sub array with keys:
   * @property {string[]} a_resource_available Key of asset.
   * @property {string} k_resource_layout Key of layout.
   * @property {string} text_resource_type Title of asset category.
   */

  /**
   * Asset layouts of session:
   *
   * @get result
   * @type {Wl_Login_Attendance_AttendanceInfoByTokenModel_a_resource_layout[]}
   */
  this.a_resource_layout = undefined;

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceInfoByTokenModel_a_staff_a_logo
   * @property {number} i_height Height in pixels.
   * @property {number} i_width Width in pixels.
   * @property {string} url_logo Image URL.
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceInfoByTokenModel_a_staff
   * @property {Wl_Login_Attendance_AttendanceInfoByTokenModel_a_staff_a_logo} a_logo Data of staff member's photo. Empty if staff has no photo. Otherwise contains next keys:
   * @property {string} html_firstname Staff member's first name.
   * @property {string} html_lastname Staff member's last name.
   * @property {string} k_staff deprecated Legacy staff key. Returned only for applications from allow-list.
   * @property {string} uid_staff Staff user key.
   */

  /**
   * List of staff members who provide service:
   *
   * @get result
   * @type {Wl_Login_Attendance_AttendanceInfoByTokenModel_a_staff[]}
   */
  this.a_staff = undefined;

  /**
   * Confirmation date+time of appointment in MySQL format. If client never confirmed, will be zero date + time.
   *
   * @get result
   * @type {string}
   */
  this.dt_confirm = undefined;

  /**
   * Start date of the session in MySQL format in GMT.
   *
   * @get result
   * @type {string}
   */
  this.dt_date_global = undefined;

  /**
   * Start date of the class in MySQL format in local time.
   *
   * @get get
   * @type {string}
   */
  this.dt_date_local = "";

  /**
   * End date and time of the session in MySQL format in local timezone.
   *
   * @get result
   * @type {string}
   */
  this.dtl_end = undefined;

  /**
   * End date and time of the session in MySQL format in GMT.
   *
   * @get result
   * @type {string}
   */
  this.dtu_end = undefined;

  /**
   * Date and time in UTC when the visit is promoted from wait list to active list.
   * Not empty for appointments.
   *
   * @get result
   * @type {string}
   */
  this.dtu_wait_promote = undefined;

  /**
   * Whether notes added to visit.
   *
   * @get result
   * @type {boolean}
   */
  this.has_note = undefined;

  /**
   * Duration of the session in minutes.
   *
   * @get result
   * @type {number}
   */
  this.i_duration = undefined;

  /**
   * Type of note. One of {@link Wl_Visit_Note_Sid_NoteSid} constants. `false` if notes not allowed.
   *
   * @get result
   * @see Wl_Visit_Note_Sid_NoteSid
   * @type {number}
   */
  this.id_note = undefined;

  /**
   * Service type, one of {@link RsServiceSid}.
   *
   * @get result
   * @see RsServiceSid
   * @type {number}
   */
  this.id_service = undefined;

  /**
   * Whether this service be carried out in Zoom.
   * `true` - If the service can be carried out in Zoom.
   * `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_start_virtual_service = undefined;

  /**
   * ID of appointment to get information for.
   *
   * @get get
   * @type {string}
   */
  this.k_appointment = "";

  /**
   * ID of business to get information for.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Class identifier. Not empty if service is class or event reservation.
   *
   * @get result
   * @type {string}
   */
  this.k_class = undefined;

  /**
   * ID of class period to get information for.
   *
   * @get get
   * @type {string}
   */
  this.k_class_period = "";

  /**
   * Location identifier.
   *
   * @get result
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * Resource identifier. Not empty if service is asset reservation.
   *
   * @get result
   * @type {string}
   */
  this.k_resource = undefined;

  /**
   * Service identifier. Not empty if service is appointment reservation.
   *
   * @get result
   * @type {string}
   */
  this.k_service = undefined;

  /**
   * Location name.
   *
   * @get result
   * @type {string}
   */
  this.text_location = undefined;

  /**
   * Time when service starts in format `8:00AM`.
   *
   * @get result
   * @type {string}
   */
  this.text_time_end = undefined;

  /**
   * Start time of the session in format '9:30AM'.
   *
   * @get result
   * @type {string}
   */
  this.text_time_start = undefined;

  /**
   * Title of the appointment.
   *
   * @get result
   * @type {string}
   */
  this.text_title = undefined;

  /**
   * The security token.
   *
   * @get get
   * @type {string}
   */
  this.text_token = "";

  /**
   * URL that leads directly to the class/event booking page in the Client Web App.
   * Empty string if the service is an appointment reservation.
   *
   * @get result
   * @type {string}
   */
  this.url_booking = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Attendance_AttendanceInfoByTokenModel);

/**
 * @inheritDoc
 */
Wl_Login_Attendance_AttendanceInfoByTokenModel.prototype.config=function()
{
  return {"a_field":{"a_appointment_visit_info":{"get":{"result":true}},"a_logo":{"get":{"result":true}},"a_purchase_option_default":{"get":{"result":true}},"a_resource":{"get":{"result":true}},"a_resource_layout":{"get":{"result":true}},"a_staff":{"get":{"result":true}},"dt_confirm":{"get":{"result":true}},"dt_date_global":{"get":{"result":true}},"dt_date_local":{"get":{"get":true}},"dtl_end":{"get":{"result":true}},"dtu_end":{"get":{"result":true}},"dtu_wait_promote":{"get":{"result":true}},"has_note":{"get":{"result":true}},"i_duration":{"get":{"result":true}},"id_note":{"get":{"result":true}},"id_service":{"get":{"result":true}},"is_start_virtual_service":{"get":{"result":true}},"k_appointment":{"get":{"get":true}},"k_business":{"get":{"get":true}},"k_class":{"get":{"result":true}},"k_class_period":{"get":{"get":true}},"k_location":{"get":{"result":true}},"k_resource":{"get":{"result":true}},"k_service":{"get":{"result":true}},"text_location":{"get":{"result":true}},"text_time_end":{"get":{"result":true}},"text_time_start":{"get":{"result":true}},"text_title":{"get":{"result":true}},"text_token":{"get":{"get":true}},"url_booking":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Login_Attendance_AttendanceInfoByTokenModel.instanceGet
 * @param {string} dt_date_local Start date of the class in MySQL format in local time.
 * @param {string} k_appointment ID of appointment to get information for.
 * @param {string} k_class_period ID of class period to get information for.
 * @param {string} k_business ID of business to get information for.
 * @returns {Wl_Login_Attendance_AttendanceInfoByTokenModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns detailed information about a single class period, appointment, or asset session.
 *
 * Accepts either a class period key with a local date or an appointment key, validates access, and returns
 * scheduling details including title, start and end times, location, staff, assets, service type, and
 * default purchase option information.
 *
 * @function
 * @name Wl_Login_Attendance_AttendanceInfoByTokenModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
