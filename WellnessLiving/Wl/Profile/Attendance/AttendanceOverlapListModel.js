/**
 * Checks whether the specified user has any existing bookings that overlap with a given time range or service.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Attendance_AttendanceOverlapListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Profile_Attendance_AttendanceOverlapListModel_a_date_overlap_a_visit_list
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
   * @typedef {{}} Wl_Profile_Attendance_AttendanceOverlapListModel_a_date_overlap
   * @property {Wl_Profile_Attendance_AttendanceOverlapListModel_a_date_overlap_a_visit_list} a_visit_list List of visits that overlap with the checked session. Same structure as {@link Wl_Profile_Attendance_AttendanceOverlapModel.a_visit_list}. Present only if the current user has full access to the target user's visits (the target user itself or a family relative). Each element has the following keys: List of overlapped booked visits. Each element has the following keys:
   * @property {boolean} is_overlap `true` if the checked session overlaps with an already booked visit, `false` otherwise.
   */

  /**
   * Overlap result for every checked session. Key is `i` from {@link Wl_Profile_Attendance_AttendanceOverlapListModel.a_session_list}.
   *   Value has the following keys:
   *
   * @post result
   * @type {Wl_Profile_Attendance_AttendanceOverlapListModel_a_date_overlap[]}
   */
  this.a_date_overlap = undefined;

  /**
   * @typedef {{}} Wl_Profile_Attendance_AttendanceOverlapListModel_a_session_list
   * @property {string} dtu_date Date and time of the service.
   * @property {number} i_duration Duration of the service in minutes. Required if `k_resource` is not empty.
   * @property {boolean} is_appointment Whether an appointment (asset) is booking. Needed in case when a client is allowed to select a date and  time, then the available asset.
   * @property {string} k_class_period Class period key.
   * @property {string} k_location Location key.
   * @property {string} k_resource Resource key.
   * @property {string} k_service Service key.
   * @property {string} k_timezone Timezone key.
   */

  /**
   * List of sessions to check for overlaps. Every element has the following structure:
   *
   * @post post
   * @type {Wl_Profile_Attendance_AttendanceOverlapListModel_a_session_list[]}
   */
  this.a_session_list = undefined;

  /**
   * Business key.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * UID of a user to book for.
   *
   * @post post
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Attendance_AttendanceOverlapListModel);

/**
 * @inheritDoc
 */
Wl_Profile_Attendance_AttendanceOverlapListModel.prototype.config=function()
{
  return {"a_field":{"a_date_overlap":{"post":{"result":true}},"a_session_list":{"post":{"post":true}},"k_business":{"post":{"post":true}},"uid":{"post":{"post":true}}}};
};

/**
 * Checks whether the specified user has any existing bookings that overlap with a given time range or service.
 *
 * Used before scheduling to detect conflicts and prompt staff or the client with a warning.
 *
 * @function
 * @name Wl_Profile_Attendance_AttendanceOverlapListModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
