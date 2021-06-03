/**
 * Attendance list information.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Attendance_AttendanceInfoModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "dt_date_local,k_appointment,k_class_period,k_business";

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceInfoModel_a_logo
   * @property {boolean} is_empty Whether service image is empty.
   * @property {string} s_url Url link to image.
   */

  /**
   * Service logo information:
   * <dl>
   *   <dt>
   *     bool <var>is_empty</var>
   *   </dt>
   *   <dd>
   *     Whether service image is empty.
   *   </dd>
   *   <dt>
   *     string <var>s_url</var>
   *   </dt>
   *   <dd>
   *     Url link to image.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Login_Attendance_AttendanceInfoModel_a_logo}
   */
  this.a_logo = undefined;

  /**
   * Assets which are bound to this session. Primary keys on {@link \RsResourceSql} table.
   *
   * @get result
   * @type {string[]}
   */
  this.a_resource = undefined;

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceInfoModel_a_resource_layout_a_client
   * @property {string} text_client User's name.
   * @property {string} uid User's primary key.
   */
  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceInfoModel_a_resource_layout
   * @property {Wl_Login_Attendance_AttendanceInfoModel_a_resource_layout_a_client} a_client List of clients who occupy assets of class.
   * It is a double nesting array.
   * Keys - primary keys of assets in {@link \RsResourceSql} table; sub keys - asset index;
   * values - sub array with keys:
   * <dl><dt>string <tt>text_client</tt></dt><dd>User's name.</dd>
   * <dt>string <tt>uid</tt></dt><dd>User's primary key.</dd></dl>
   * @property {string[]} a_resource_available Primary keys of assets in {@link \RsResourceSql} table.
   * @property {string} k_resource_layout Key of layout in {@link \Wl\Resource\Layout\Sql} table.
   * @property {string} text_resource_type Title of asset category.
   */

  /**
   * Asset layouts of session:
   * <dl>
   *   <dt>
   *     array <var>a_client</var>
   *   </dt>
   *   <dd>
   *     List of clients who occupy assets of class.
   *     It is a double nesting array.
   *     Keys - primary keys of assets in {@link \RsResourceSql} table; sub keys - asset index;
   *     values - sub array with keys:
   *     <dl><dt>string <var>text_client</var></dt><dd>User's name.</dd>
   *     <dt>string <var>uid</var></dt><dd>User's primary key.</dd></dl>
   *   </dd>
   *   <dt>
   *     string[] <var>a_resource_available</var>
   *   </dt>
   *   <dd>
   *     Primary keys of assets in {@link \RsResourceSql} table.
   *   </dd>
   *   <dt>
   *     string <var>k_resource_layout</var>
   *   </dt>
   *   <dd>
   *     Key of layout in {@link \Wl\Resource\Layout\Sql} table.
   *   </dd>
   *   <dt>
   *     string <var>text_resource_type</var>
   *   </dt>
   *   <dd>
   *     Title of asset category.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Login_Attendance_AttendanceInfoModel_a_resource_layout[]}
   */
  this.a_resource_layout = undefined;

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceInfoModel_a_staff_a_logo
   * @property {number} i_height Height in pixels.
   * @property {number} i_width Width in pixels.
   * @property {string} url_logo Image URL.
   */
  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceInfoModel_a_staff
   * @property {Wl_Login_Attendance_AttendanceInfoModel_a_staff_a_logo} a_logo Data of staff member's photo. Empty if staff has no photo. Otherwise contains next keys:
   * <dl>
   *   <dt>
   *     int <tt>i_height</tt>
   *   </dt>
   *   <dd>
   *     Height in pixels.
   *   </dd>
   *   <dt>
   *     int <tt>i_width</tt>
   *   </dt>
   *   <dd>
   *     Width in pixels.
   *   </dd>
   *   <dt>
   *     string <tt>url_logo</tt>
   *   </dt>
   *   <dd>
   *     Image URL.
   *   </dd>
   * </dl>
   * @property {string} k_staff Staff key, primary key in {@link \RsStaffSql}.
   * @property {string} html_firstname Staff member's first name.
   * @property {string} html_lastname Staff member's last name.
   */

  /**
   * List of staff members who provide service:
   * <dl>
   *   <dt>
   *     array <var>a_logo</var>
   *   </dt>
   *   <dd>
   *     Data of staff member's photo. Empty if staff has no photo. Otherwise contains next keys:
   *     <dl>
   *       <dt>
   *         int <var>i_height</var>
   *       </dt>
   *       <dd>
   *         Height in pixels.
   *       </dd>
   *       <dt>
   *         int <var>i_width</var>
   *       </dt>
   *       <dd>
   *         Width in pixels.
   *       </dd>
   *       <dt>
   *         string <var>url_logo</var>
   *       </dt>
   *       <dd>
   *         Image URL.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     string <var>k_staff</var>
   *   </dt>
   *   <dd>
   *     Staff key, primary key in {@link \RsStaffSql}.
   *   </dd>
   *   <dt>
   *     string <var>html_firstname</var>
   *   </dt>
   *   <dd>
   *     Staff member's first name.
   *   </dd>
   *   <dt>
   *     string <var>html_lastname</var>
   *   </dt>
   *   <dd>
   *     Staff member's last name.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Login_Attendance_AttendanceInfoModel_a_staff[]}
   */
  this.a_staff = undefined;

  /**
   * Start date of ste session in MySQL format in GMT.
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
   * Whether notes added to visit.
   *
   * @get result
   * @type {boolean}
   */
  this.has_note = undefined;

  /**
   * Type of note. One of {@link \Wl\Visit\Note\Sid\NoteSid} constants. <tt>false</tt> if notes not allowed.
   *
   * @get result
   * @type {number|boolean}
   */
  this.id_note = undefined;

  /**
   * Service type, one of {@link \RsServiceSid}.
   *
   * @get result
   * @type {number}
   */
  this.id_service = undefined;

  /**
   * Whether this service be carried out in Zoom.
   * <tt>true</tt> - If the service can be carried out in Zoom.
   * <tt>false</tt> - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_start_virtual_service = false;

  /**
   * ID of appointment to get information for. Primary key in {@link RsAppointmentSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_appointment = "0";

  /**
   * ID of business to get information for. Primary key in {@link RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Class identifier, primary key in {@link \RsClassSql}. Not empty if service is class/event reservation.
   *
   * @get result
   * @type {string}
   */
  this.k_class = undefined;

  /**
   * ID of class period to get information for. Primary key in {@link RsClassPeriodSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_class_period = "0";

  /**
   * Location identifier, primary key in {@link \RsLocationSql}.
   *
   * @get result
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * Resource identifier, primary key in {@link \RsResourceSql}. Not empty if service is asset reservation.
   *
   * @get result
   * @type {string}
   */
  this.k_resource = undefined;

  /**
   * Service identifier, primary key in {@link \RsServiceSql}. Not empty if service is appointment reservation.
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
   * Time when service starts in format <tt>8:00AM</tt>.
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

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Attendance_AttendanceInfoModel);

/**
 * @inheritDoc
 */
Wl_Login_Attendance_AttendanceInfoModel.prototype.config=function()
{
  return {"a_field": {"a_logo": {"get": {"result": true}},"a_resource": {"get": {"result": true}},"a_resource_layout": {"get": {"result": true}},"a_staff": {"get": {"result": true}},"dt_date_global": {"get": {"result": true}},"dt_date_local": {"get": {"get": true}},"has_note": {"get": {"result": true}},"id_note": {"get": {"result": true}},"id_service": {"get": {"result": true}},"is_start_virtual_service": {"get": {"result": true}},"k_appointment": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_class": {"get": {"result": true}},"k_class_period": {"get": {"get": true}},"k_location": {"get": {"result": true}},"k_resource": {"get": {"result": true}},"k_service": {"get": {"result": true}},"text_location": {"get": {"result": true}},"text_time_end": {"get": {"result": true}},"text_time_start": {"get": {"result": true}},"text_title": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Login_Attendance_AttendanceInfoModel.instanceGet
 * @param {string} dt_date_local Start date of the class in MySQL format in local time.
 * @param {string} k_appointment ID of appointment to get information for. Primary key in {@link RsAppointmentSql} table.
 * @param {string} k_class_period ID of class period to get information for. Primary key in {@link RsClassPeriodSql} table.
 * @param {string} k_business ID of business to get information for. Primary key in {@link RsBusinessSql} table.
 * @returns {Wl_Login_Attendance_AttendanceInfoModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */