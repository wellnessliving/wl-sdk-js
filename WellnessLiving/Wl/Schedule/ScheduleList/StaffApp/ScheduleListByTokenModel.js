/**
 * Gets schedule of business {@link Wl_Schedule_ScheduleList_StaffApp_ScheduleListModel} for day
 * {@link Wl_Schedule_ScheduleList_StaffApp_ScheduleListModel}.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_ScheduleList_StaffApp_ScheduleListByTokenModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "dt_date,k_business,uid";

  /**
   * @typedef {{}} Wl_Schedule_ScheduleList_StaffApp_ScheduleListByTokenModel_a_config
   * @property {boolean} is_appointment_cancel_recurring If needed to show recurring canceled appointments on schedule.
   * @property {boolean} is_appointment_cancel_single If needed to show single canceled appointments on schedule.
   * @property {boolean} is_class_cancel If needed to show canceled classes on schedule.
   */

  /**
   * Configuration options for schedule.
   * Key is option name, value is boolean.
   *
   * May contain the following keys:
   *
   * @get get
   * @type {Wl_Schedule_ScheduleList_StaffApp_ScheduleListByTokenModel_a_config}
   */
  this.a_config = undefined;

  /**
   * @typedef {{}} Wl_Schedule_ScheduleList_StaffApp_ScheduleListByTokenModel_a_schedule_a_appointment_visit_info
   * @property {number} id_visit Possible states of the visit: book, attended, cancelled, etc.
   * @property {boolean} is_confirmed `true` means that appointment was requested and confirmed by the staff.
   * @property {boolean} is_deny `true` means that appointment was requested and denied by the staff.
   * @property {boolean} is_notify_request_accept `true` means that the client will receive a notification, if appointment will be confirmed by the staff.
   * @property {boolean} is_notify_request_deny `true` means that the client will receive a notification, if appointment will be denied by the staff.
   * @property {boolean} is_request `true` means that appointment was requested, but not confirmed by the staff.
   */

  /**
   * @typedef {{}} Wl_Schedule_ScheduleList_StaffApp_ScheduleListByTokenModel_a_schedule_a_staff_info
   * @property {boolean} is_staff_change `true` means staff is substituted, `false` simple staff member.
   * @property {string} k_staff Staff key.
   * @property {string} text_staff Staff full name.
   */

  /**
   * @typedef {{}} Wl_Schedule_ScheduleList_StaffApp_ScheduleListByTokenModel_a_schedule
   * @property {Wl_Schedule_ScheduleList_StaffApp_ScheduleListByTokenModel_a_schedule_a_appointment_visit_info} a_appointment_visit_info Additional visit information about this appointment. Empty array if it's a class.
   * @property {string[]} a_note List of notes.
   * @property {string[]} a_resource A list of assets involved in the session.
   * @property {string[]} a_staff A list of staff members who will conduct the session.
   * @property {Wl_Schedule_ScheduleList_StaffApp_ScheduleListByTokenModel_a_schedule_a_staff_info} a_staff_info Information about staff members who conduct this session. The keys are . Values are array with data:
   * @property {string[]} a_user For appointments, this is a list of the names of users who are scheduled to attend the session.
   * @property {string[]} a_virtual_location List of virtual locations. Each value is .
   * @property {string} dt_confirm Confirmation date for appointment in MySQL format. Will be zero date + time in case appointment is not yet confirmed by client.
   * @property {string} dt_date The date/time of the session in UTC.
   * @property {string} dt_date_cancel The date/time when the session was canceled in UTC. Only used for appointments.
   * @property {string} dt_date_local The date/time of the session in local time.
   * @property {number} i_book The number of clients booked into the session.
   * @property {number} i_capacity The maximum capacity of the session.
   * @property {number} i_duration The duration of the session in minutes.
   * @property {number} i_padding_after The padding time after the session in minutes. Only used for appointments.
   * @property {number} i_padding_before The padding time before the session in minutes. Only used for appointments.
   * @property {number} i_start The start time in minutes after midnight. For example, a class starting at 10:30 in the morning local time will have an `i_start` value of 630.
   * @property {number} i_wait Count clients on waitlist.
   * @property {number} id_option Appointment display option.
   * @property {number} id_service Identifiers for services types.
   * @property {boolean} is_arrive For appointments: `true` if user has checked-in; `false` otherwise. For classes always `null`.
   * @property {boolean} is_pay For appointments: `true` if appointment is paid; `false` otherwise. For classes always `null`.
   * @property {boolean} is_repeat For appointments: `true` if appointment is recurring; `false` otherwise. For classes always `null`.
   * @property {boolean} is_virtual_service `true` - If the business has at least one virtual service, `false` - otherwise.
   * @property {string} k_appointment The appointment key.  If the session isn't an appointment, this will be `0`.
   * @property {string} k_class The class key.  If the session isn't a class, this will be `0`.
   * @property {string} k_class_period The class period key.  If the session isn't a class, this will be `0`.
   * @property {string} k_location The location key for where the session takes place.
   * @property {string} k_service This is the key of the appointment type, while `k_appointment` is the specific instance.
   * @property {string} s_title The name of the session.
   * @property {string} text_alert Alert message.
   * @property {string} text_color_background The background color in hex representation as used on WellnessLiving.
   * @property {string} text_color_border The border color in hex representation as used on WellnessLiving.
   * @property {string} url_image URL to image. Empty if image not exist.
   */

  /**
   * The sessions present on the business schedule. These are sorted chronologically in ascending order.
   * Every element has the following keys:
   *
   * @get result
   * @type {Wl_Schedule_ScheduleList_StaffApp_ScheduleListByTokenModel_a_schedule[]}
   */
  this.a_schedule = undefined;

  /**
   * The end date of the range from which the list of schedule sessions should be retrieved.
   *
   * This will be `null` if the range has no end date. If this value is used,
   * {@link Wl_Schedule_ScheduleList_StaffApp_ScheduleListModel} should not be set.
   *
   * @get get
   * @type {string}
   */
  this.dl_end = "";

  /**
   * The start date of the range from which the list of scheduled sessions should be retrieved.
   *
   * This will be `null` if the range has no start date. If this value is used,
   * {@link Wl_Schedule_ScheduleList_StaffApp_ScheduleListModel} should not be set.
   *
   * @get get
   * @type {string}
   */
  this.dl_start = "";

  /**
   * The date of the sessions in Coordinated Universal Time (UTC) and MySQL format.
   *
   * If this value is used, then
   * {@link Wl_Schedule_ScheduleList_StaffApp_ScheduleListModel} and
   * {@link Wl_Schedule_ScheduleList_StaffApp_ScheduleListModel} should not be set.
   *
   * @get get
   * @type {string}
   */
  this.dt_date = "";

  /**
   * `true` - If the business has at least one virtual service, `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_virtual_service = undefined;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The security token.
   *
   * @get get
   * @type {string}
   */
  this.text_token = "";

  /**
   * User key.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_ScheduleList_StaffApp_ScheduleListByTokenModel);

/**
 * @inheritDoc
 */
Wl_Schedule_ScheduleList_StaffApp_ScheduleListByTokenModel.prototype.config=function()
{
  return {"a_field":{"a_config":{"get":{"get":true}},"a_schedule":{"get":{"result":true}},"dl_end":{"get":{"get":true}},"dl_start":{"get":{"get":true}},"dt_date":{"get":{"get":true}},"is_virtual_service":{"get":{"result":true}},"k_business":{"get":{"get":true}},"text_token":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Schedule_ScheduleList_StaffApp_ScheduleListByTokenModel.instanceGet
 * @param {string} dt_date The date of the sessions in Coordinated Universal Time (UTC) and MySQL format. If this value is used, then {@link Wl_Schedule_ScheduleList_StaffApp_ScheduleListModel} and {@link Wl_Schedule_ScheduleList_StaffApp_ScheduleListModel} should not be set.
 * @param {string} k_business Business key.
 * @param {string} uid User key.
 * @returns {Wl_Schedule_ScheduleList_StaffApp_ScheduleListByTokenModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets schedule of business {@link Wl_Schedule_ScheduleList_StaffApp_ScheduleListModel} for day
{@link Wl_Schedule_ScheduleList_StaffApp_ScheduleListModel}.
 *
 * Returns all classes and appointments scheduled for the given business on the specified date,
 * sorted chronologically. Supports both single-day and date-range modes, and includes full
 * session details such as staff, visit counts, assets, and class images.
 *
 * @function
 * @name Wl_Schedule_ScheduleList_StaffApp_ScheduleListByTokenModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
