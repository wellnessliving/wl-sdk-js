/**
 * Retrieves a list of visits that overlap with the specified service/class/resource/time data.
 *
 * This model is generated automatically based on API.
 *
 * Mirrors backend endpoint <tt>Wl\Profile\Attendance\AttendanceOverlapApi</tt>.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Attendance_AttendanceOverlapModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "dtu_date,i_duration,is_appointment,k_business,k_class_period,k_location,k_resource,k_service,k_timezone,uid";

  /**
   * List of visits that overlap with the specified data.
   *
   * This data is returned by server-side {@link Wl\Profile\Attendance\Attendance::getVisitOverlap()}.
   *
   * @get result
   * @type {Array.<{}>}
   */
  this.a_visit_list = [];

  /**
   * Date of a selected service.
   *
   * @get get
   * @type {?string}
   */
  this.dtu_date = null;

  /**
   * Duration of a service (asset).
   *
   * @get get
   * @type {number}
   */
  this.i_duration = 0;

  /**
   * Whether an asset is booking.
   *
   * Needed in case when a client is allowed to select a date and time, then the available asset.
   *
   * @get get
   * @type {boolean}
   */
  this.is_appointment = false;

  /**
   * Primary key of the business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Class period key.
   *
   * @get get
   * @type {?string}
   */
  this.k_class_period = "0";

  /**
   * Location key.
   *
   * @get get
   * @type {?string}
   */
  this.k_location = "0";

  /**
   * Asset key.
   *
   * @get get
   * @type {?string}
   */
  this.k_resource = "0";

  /**
   * Service key.
   *
   * @get get
   * @type {?string}
   */
  this.k_service = "0";

  /**
   * Key of timezone.
   *
   * `null` if not set then use default timezone client.
   *
   * @get get
   * @type {string}
   */
  this.k_timezone = "0";

  /**
   * UID of a user.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Attendance_AttendanceOverlapModel);

/**
 * @inheritDoc
 */
Wl_Profile_Attendance_AttendanceOverlapModel.prototype.config = function()
{
  return {"a_field": {"a_visit_list": {"get": {"result": true}},"dtu_date": {"get": {"get": true}},"i_duration": {"get": {"get": true}},"is_appointment": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_class_period": {"get": {"get": true}},"k_location": {"get": {"get": true}},"k_resource": {"get": {"get": true}},"k_service": {"get": {"get": true}},"k_timezone": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Profile_Attendance_AttendanceOverlapModel.instanceGet
 * @param {?string} dtu_date Date of a selected service.
 * @param {number} i_duration Duration of a service.
 * @param {boolean} is_appointment Whether an asset is booking.
 * @param {string} k_business Primary key of the business to add the user into.
 * @param {string} k_class_period Class period key.
 * @param {string} k_location Location key.
 * @param {string} k_resource Asset key.
 * @param {string} k_service Service key.
 * @param {string} k_timezone Key of timezone.
 * @param {string} uid UID of a user.
 * @returns {Wl_Profile_Attendance_AttendanceOverlapModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

