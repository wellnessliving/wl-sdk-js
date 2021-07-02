/**
 * Attendance list data.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Attendance_AttendanceListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "dt_date_local,k_appointment,k_class_period,k_business";

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_active
   * @property {*} a_progress Parameters of user's current progress. Is set only in a case of special application configuration. See {@link \Wl\Member\Progress\Log\Field\FieldListAbstract::getData()} for details.
   * @property {boolean} can_profile <tt>true</tt> if current user has access to clients's profile; <tt>false</tt> otherwise.
   * @property {string} html_firstname Client's firstname.
   * @property {string} html_lastname Client's lastname.
   * @property {string} html_visit_status_class Class name depending on visit status.
   * @property {string} html_visit_status_icon Class icon depending on visit status.
   * @property {number} id_gender User's gender. One of {@link \Wl\Gender\GenderSid} constants.
   * @property {number} id_visit Visit status, one of {@link \Wl\Visit\VisitSid}.
   * @property {boolean} is_free <tt>true</tt> - if visit is free, <tt>true</tt> - otherwise.
   * @property {string} k_visit Visit ID, primary key in {@link \RsVisitSql}.
   * @property {string} text_age User's age (years).
   * @property {{}} a_wearable Array of IDs of user's wearable devices.
   * @property {string} uid Client's identifier, primary key in {@link \PassportLoginSql}.
   */

  /**
   * Active list of client who booked service:
   * <dl>
   *   <dt>
   *     array[] [<var>a_progress</var>]
   *   </dt>
   *   <dd>
   *     Parameters of user's current progress. Is set only in a case of special application configuration. See {@link \Wl\Member\Progress\Log\Field\FieldListAbstract::getData()} for details.
   *   </dd>
   *   <dt>
   *     bool <var>can_profile</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if current user has access to clients's profile; <tt>false</tt> otherwise.
   *   </dd>
   *   <dt>
   *     string <var>html_firstname</var>
   *   </dt>
   *   <dd>
   *     Client's firstname.
   *   </dd>
   *   <dt>
   *     string <var>html_lastname</var>
   *   </dt>
   *   <dd>
   *     Client's lastname.
   *   </dd>
   *   <dt>
   *     string <var>html_visit_status_class</var>
   *   </dt>
   *   <dd>
   *     Class name depending on visit status.
   *   </dd>
   *   <dt>
   *     string <var>html_visit_status_icon</var>
   *   </dt>
   *   <dd>
   *     Class icon depending on visit status.
   *   </dd>
   *   <dt>
   *     int <var>id_gender</var>
   *   </dt>
   *   <dd>
   *     User's gender. One of {@link \Wl\Gender\GenderSid} constants.
   *   </dd>
   *   <dt>
   *     int <var>id_visit</var>
   *   </dt>
   *   <dd>
   *     Visit status, one of {@link \Wl\Visit\VisitSid}.
   *   </dd>
   *   <dt>
   *     bool <var>is_free</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - if visit is free, <tt>true</tt> - otherwise.
   *   </dd>
   *   <dt>
   *     string <var>k_visit</var>
   *   </dt>
   *   <dd>
   *     Visit ID, primary key in {@link \RsVisitSql}.
   *   </dd>
   *   <dt>
   *     string <var>text_age</var>
   *   </dt>
   *   <dd>
   *     User's age (years).
   *   </dd>
   *   <dt>
   *     array <var>a_wearable</var>
   *   </dt>
   *   <dd>
   *     Array of IDs of user's wearable devices.
   *   </dd>
   *   <dt>
   *     string <var>uid</var>
   *   </dt>
   *   <dd>
   *     Client's identifier, primary key in {@link \PassportLoginSql}.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Login_Attendance_AttendanceListModel_a_list_active[]}
   */
  this.a_list_active = undefined;

  /**
   * List of client who are in confirm list. Has the same structure as <tt>a_list_active</tt>.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_list_confirm = undefined;

  /**
   * List of client who are in wait list. Has the same structure as <tt>a_list_active</tt>.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_list_wait = undefined;

  /**
   * Start date of the class in local time.
   *
   * @get get
   * @type {string}
   */
  this.dt_date_local = "";

  /**
   * Service capacity.
   *
   * @get result
   * @type {number}
   */
  this.i_capacity = undefined;

  /**
   * Count client on the attendance.
   *
   * @get result
   * @type {number}
   */
  this.i_client = undefined;

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
   * ID of class period to get information for. Primary key in {@link RsClassPeriodSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_class_period = "0";

  /**
   * Location primary key in {@link \RsLocationSql} table.
   *
   * @get result
   * @type {string}
   */
  this.k_location = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Attendance_AttendanceListModel);

/**
 * @inheritDoc
 */
Wl_Login_Attendance_AttendanceListModel.prototype.config=function()
{
  return {"a_field": {"a_list_active": {"get": {"result": true}},"a_list_confirm": {"get": {"result": true}},"a_list_wait": {"get": {"result": true}},"dt_date_local": {"get": {"get": true}},"i_capacity": {"get": {"result": true}},"i_client": {"get": {"result": true}},"k_appointment": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_class_period": {"get": {"get": true}},"k_location": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Login_Attendance_AttendanceListModel.instanceGet
 * @param {string} dt_date_local Start date of the class in local time.
 * @param {string} k_appointment ID of appointment to get information for. Primary key in {@link RsAppointmentSql} table.
 * @param {string} k_class_period ID of class period to get information for. Primary key in {@link RsClassPeriodSql} table.
 * @param {string} k_business ID of business to get information for. Primary key in {@link RsBusinessSql} table.
 * @returns {Wl_Login_Attendance_AttendanceListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */