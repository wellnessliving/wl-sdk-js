/**
 * Returns a list of visits that overlap with the specified service, class, resource, or time data.
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
   * @typedef {{}} Wl_Profile_Attendance_AttendanceOverlapModel_a_visit_list
   * @property {string} dtu_date Date and time of the visit.
   * @property {number} i_duration Duration of a service.
   * @property {number} i_end End datetime of the visit in unix format.
   * @property {number} i_end_local Local end datetime of the visit in unix format.
   * @property {number} i_start Start datetime of the visit in unix format.
   * @property {number} i_start_local Local start datetime of the visit in unix format.
   * @property {string} k_appointment Appointment key.
   * @property {string} k_business Business key.
   * @property {string} k_class_period Class period key.
   * @property {string} k_enrollment_book Enrollment book key.
   * @property {string} k_location Location key.
   * @property {string} text_time_end Local end time of the visit, formatted according to the business locale.
   * @property {string} text_time_start Local start time of the visit, formatted according to the business locale.
   * @property {string} text_title Title of a service
   */

  /**
   * List of visits that overlap with the specified data.
   *
   * @get result
   * @type {Wl_Profile_Attendance_AttendanceOverlapModel_a_visit_list[]}
   */
  this.a_visit_list = undefined;

  /**
   * Date of a selected service.
   *
   * @get get
   * @type {?string}
   */
  this.dtu_date = null;

  /**
   * Duration of a service.
   *
   * @get get
   * @type {number}
   */
  this.i_duration = 0;

  /**
   * Whether an asset is booking. Needed in case when a client is allowed to select a date and time, then
   *   the available asset.
   *
   * @get get
   * @type {boolean}
   */
  this.is_appointment = false;

  /**
   * Primary key of the business to add the user into.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Class period key.
   *
   * @get get
   * @type {string}
   */
  this.k_class_period = "";

  /**
   * Location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * Asset key.
   *
   * @get get
   * @type {string}
   */
  this.k_resource = "";

  /**
   * Service key.
   *
   * @get get
   * @type {string}
   */
  this.k_service = "";

  /**
   * Key of timezone.
   *
   * `null` if not set then use default timezone client.
   *
   * @get get
   * @type {string}
   */
  this.k_timezone = "";

  /**
   * UID of a user.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Attendance_AttendanceOverlapModel);

/**
 * @inheritDoc
 */
Wl_Profile_Attendance_AttendanceOverlapModel.prototype.config=function()
{
  return {"a_field":{"a_visit_list":{"get":{"result":true}},"dtu_date":{"get":{"get":true}},"i_duration":{"get":{"get":true}},"is_appointment":{"get":{"get":true}},"k_business":{"get":{"get":true}},"k_class_period":{"get":{"get":true}},"k_location":{"get":{"get":true}},"k_resource":{"get":{"get":true}},"k_service":{"get":{"get":true}},"k_timezone":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Profile_Attendance_AttendanceOverlapModel.instanceGet
 * @param {?string} dtu_date Date of a selected service.
 * @param {number} i_duration Duration of a service.
 * @param {boolean} is_appointment Whether an asset is booking. Needed in case when a client is allowed to select a date and time, then the available asset.
 * @param {string} k_business Primary key of the business to add the user into.
 * @param {string} k_class_period Class period key.
 * @param {string} k_location Location key.
 * @param {string} k_resource Asset key.
 * @param {string} k_service Service key.
 * @param {string} k_timezone Key of timezone. `null` if not set then use default timezone client.
 * @param {string} uid UID of a user.
 * @returns {Wl_Profile_Attendance_AttendanceOverlapModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns a list of visits that overlap with the specified service, class, resource, or time data.
 *
 * Checks whether the specified user has any existing bookings that overlap with a given time
 * range or service. Used before scheduling to detect conflicts and prompt staff or the client
 * with a warning.
 *
 * @function
 * @name Wl_Profile_Attendance_AttendanceOverlapModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
