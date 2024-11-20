/**
 * An endpoint that gets information about sessions (both classes and appointments) at a business on a given day.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_ScheduleList_StaffApp_ScheduleListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "dt_date,k_business,uid";

  /**
   * @typedef {{}} Wl_Schedule_ScheduleList_StaffApp_ScheduleListModel_a_schedule_a_appointment_visit_info_a_staff_info
   * @property {string} text_staff Staff full name.
   * @property {boolean} is_staff_change <tt>true</tt> means staff is substituted, <tt>false</tt> simple staff member.
   * @property {string} k_staff Staff key.
   */
  /**
   * @typedef {{}} Wl_Schedule_ScheduleList_StaffApp_ScheduleListModel_a_schedule_a_appointment_visit_info
   * @property {number} id_visit Visit id. One of {@link Wl_Visit_VisitSid} constants.
   * @property {boolean} is_confirmed `true` means that appointment was requested and confirmed by the staff.
   * @property {boolean} is_deny `true` means that appointment was requested and denied by the staff.
   * @property {boolean} is_notify_request_accept `true` means that the client will receive a notification, if appointment will be confirmed by the staff.
   * @property {boolean} is_notify_request_deny `true` means that the client will receive a notification, if appointment will be denied by the staff.
   * @property {boolean} is_request `true` means that appointment was requested, but not confirmed by the staff.
   */
  /**
   * @typedef {{}} Wl_Schedule_ScheduleList_StaffApp_ScheduleListModel_a_schedule
   * @property {string[]} a_note List of notes.
   * @property {Wl_Schedule_ScheduleList_StaffApp_ScheduleListModel_a_schedule_a_appointment_visit_info} a_appointment_visit_info Additional visit information about this appointment. Empty array if it's a class.
   * <dl>
   *   <dt>
   *     int <tt>id_visit</tt>
   *   </dt>
   *   <dd>
   *     Visit id. One of {@link Wl_Visit_VisitSid} constants.
   *   </dd>
   *   <dt>
   *     bool <tt>is_confirmed</tt>
   *   </dt>
   *   <dd>
   *     `true` means that appointment was requested and confirmed by the staff.
   *   </dd>
   *   <dt>
   *     bool <tt>is_deny</tt>
   *   </dt>
   *   <dd>
   *     `true` means that appointment was requested and denied by the staff.
   *   </dd>
   *   <dt>
   *     bool <tt>is_notify_request_accept</tt>
   *   </dt>
   *   <dd>
   *     `true` means that the client will receive a notification, if appointment will be confirmed by the staff.
   *   </dd>
   *   <dt>
   *     bool <tt>is_notify_request_deny</tt>
   *   </dt>
   *   <dd>
   *     `true` means that the client will receive a notification, if appointment will be denied by the staff.
   *   </dd>
   *   <dt>
   *     bool <tt>is_request</tt>
   *   </dt>
   *   <dd>
   *     `true` means that appointment was requested, but not confirmed by the staff.
   *   </dd>
   * </dl>
   * @property {string[]} a_resource A list of assets involved in the session.
   * @property {string[]} a_staff A list of staff members who will conduct the session.
   * Deprecated, use <tt>a_staff_list</tt> instead.
   * @property {Wl_Schedule_ScheduleList_StaffApp_ScheduleListModel_a_schedule_a_appointment_visit_info_a_staff_info} a_staff_info Information about staff members who conduct this session. The keys are primary keys in {@link \RsStaffSql} table.
   * Values are array with data:
   * <dl>
   *   <dt>
   *     string <tt>text_staff</tt>
   *   </dt>
   *   <dd>
   *     Staff full name.
   *   </dd>
   *   <dt>
   *     bool <tt>is_staff_change</tt>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> means staff is substituted, <tt>false</tt> simple staff member.
   *   </dd>
   *   <dt>
   *     string <tt>k_staff</tt>
   *   </dt>
   *   <dd>
   *     Staff key.
   *   </dd>
   * </dl>
   * @property {string[]} a_user For appointments, this is a list of the names of users who are scheduled to attend the session.
   * @property {string[]} a_virtual_location List of virtual locations. Each value is primary key in {@link \RsLocationSql} table.
   * @property {string} dt_date The date/time of the session in UTC.
   * @property {string} dt_date_cancel The date/time when the session was canceled in UTC. Only used for appointments.
   * @property {string} dt_date_local The date/time of the session in local time.
   * @property {number} i_book The number of clients booked into the session.
   * @property {number} i_capacity The maximum capacity of the session.
   * @property {number} i_duration The duration of the session in minutes.
   * @property {number} i_padding_after The padding time after the session in minutes. Only used for appointments.
   * @property {number} i_padding_before The padding time before the session in minutes. Only used for appointments.
   * @property {number} i_start The start time in minutes after midnight.
   * For example, a class starting at 10:30 in the morning local time will have an `i_start` value of 630.
   * @property {number} i_wait Count clients on waitlist.
   * @property {number} id_service The ID of the service type. One of {@link RsServiceSid} constants.
   * @property {boolean} is_arrive For appointments: <tt>true</tt> if user has checked-in; <tt>false</tt> otherwise.
   * For classes always <tt>null</tt>.
   * @property {boolean} is_pay For appointments: <tt>true</tt> if appointment is paid; <tt>false</tt> otherwise.
   * For classes always <tt>null</tt>.
   * @property {boolean} is_repeat For appointments: <tt>true</tt> if appointment is recurring; <tt>false</tt> otherwise.
   * For classes always <tt>null</tt>.
   * @property {string} k_appointment The appointment key.
   * If the session isn't an appointment, this will be `0`.
   * @property {string} dt_confirm Confirmation date for appointment in MySQL format. Will be zero date + time in
   * case appointment is not yet confirmed by client.
   * @property {string} k_class The class key.
   * If the session isn't a class, this will be `0`.
   * @property {string} k_class_period The class period key.
   * If the session isn't a class, this will be `0`.
   * @property {string} k_location The location key for where the session takes place.
   * @property {string} k_service This is the key of the appointment type, while `k_appointment` is the specific instance.
   * For other cases, this will be `0`.
   * @property {string} s_title The name of the session.
   * @property {string} text_alert Alert message.
   * @property {string} text_color_background The background color in hex representation as used on WellnessLiving.
   * @property {string} text_color_border The border color in hex representation as used on WellnessLiving.
   * @property {boolean} is_virtual_service <tt>true</tt> - If the business has at least one virtual service, <tt>false</tt> - otherwise.
   * @property {string} url_image URL to image. Empty if image not exist.
   */

  /**
   * The sessions present on the business schedule. These are sorted chronologically in ascending order.
   * Every element has the following keys:
   *
   * <dl>
   *   <dt>
   *     string[] <var>a_note</var>
   *   </dt>
   *   <dd>
   *     List of notes.
   *   </dd>
   *   <dt>
   *     array <var>a_appointment_visit_info</var>
   *   </dt>
   *   <dd>
   *     Additional visit information about this appointment. Empty array if it's a class.
   *     <dl>
   *       <dt>
   *         int <var>id_visit</var>
   *       </dt>
   *       <dd>
   *         Visit id. One of {@link Wl_Visit_VisitSid} constants.
   *       </dd>
   *       <dt>
   *         bool <var>is_confirmed</var>
   *       </dt>
   *       <dd>
   *         `true` means that appointment was requested and confirmed by the staff.
   *       </dd>
   *       <dt>
   *         bool <var>is_deny</var>
   *       </dt>
   *       <dd>
   *         `true` means that appointment was requested and denied by the staff.
   *       </dd>
   *       <dt>
   *         bool <var>is_notify_request_accept</var>
   *       </dt>
   *       <dd>
   *         `true` means that the client will receive a notification, if appointment will be confirmed by the staff.
   *       </dd>
   *       <dt>
   *         bool <var>is_notify_request_deny</var>
   *       </dt>
   *       <dd>
   *         `true` means that the client will receive a notification, if appointment will be denied by the staff.
   *       </dd>
   *       <dt>
   *         bool <var>is_request</var>
   *       </dt>
   *       <dd>
   *         `true` means that appointment was requested, but not confirmed by the staff.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     string[] <var>a_resource</var>
   *   </dt>
   *   <dd>
   *     A list of assets involved in the session.
   *   </dd>
   *   <dt>
   *     string[] <var>a_staff</var>
   *   </dt>
   *   <dd>
   *     A list of staff members who will conduct the session.
   *     Deprecated, use <var>a_staff_list</var> instead.
   *   </dd>
   *   <dt>
   *     array <var>a_staff_info</var>
   *   </dt>
   *   <dd>
   *     Information about staff members who conduct this session. The keys are primary keys in {@link \RsStaffSql} table.
   *     Values are array with data:
   *     <dl>
   *       <dt>
   *         string <var>text_staff</var>
   *       </dt>
   *       <dd>
   *         Staff full name.
   *       </dd>
   *       <dt>
   *         bool <var>is_staff_change</var>
   *       </dt>
   *       <dd>
   *         <tt>true</tt> means staff is substituted, <tt>false</tt> simple staff member.
   *       </dd>
   *       <dt>
   *         string <var>k_staff</var>
   *       </dt>
   *       <dd>
   *         Staff key.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     string[] <var>a_user</var>
   *   </dt>
   *   <dd>
   *     For appointments, this is a list of the names of users who are scheduled to attend the session.
   *   </dd>
   *   <dt>
   *     string[] <var>a_virtual_location</var>
   *   </dt>
   *   <dd>
   *     List of virtual locations. Each value is primary key in {@link \RsLocationSql} table.
   *   </dd>
   *   <dt>
   *     string <var>dt_date</var>
   *   </dt>
   *   <dd>
   *     The date/time of the session in UTC.
   *   </dd>
   *   <dt>
   *     string <var>dt_date_cancel</var>
   *   </dt>
   *   <dd>
   *     The date/time when the session was canceled in UTC. Only used for appointments.
   *   </dd>
   *   <dt>
   *     string <var>dt_date_local</var>
   *   </dt>
   *   <dd>
   *     The date/time of the session in local time.
   *   </dd>
   *   <dt>
   *     int <var>i_book</var>
   *   </dt>
   *   <dd>
   *     The number of clients booked into the session.
   *   </dd>
   *   <dt>
   *     int <var>i_capacity</var>
   *   </dt>
   *   <dd>
   *     The maximum capacity of the session.
   *   </dd>
   *   <dt>
   *     int <var>i_duration</var>
   *   </dt>
   *   <dd>
   *     The duration of the session in minutes.
   *   </dd>
   *   <dt>
   *     int <var>i_padding_after</var>
   *   </dt>
   *   <dd>
   *     The padding time after the session in minutes. Only used for appointments.
   *   </dd>
   *   <dt>
   *     int <var>i_padding_before</var>
   *   </dt>
   *   <dd>
   *     The padding time before the session in minutes. Only used for appointments.
   *   </dd>
   *   <dt>
   *     int <var>i_start</var>
   *   </dt>
   *   <dd>
   *     The start time in minutes after midnight.
   *     For example, a class starting at 10:30 in the morning local time will have an `i_start` value of 630.
   *   </dd>
   *   <dt>
   *     int <var>i_wait</var>
   *   </dt>
   *   <dd>
   *     Count clients on waitlist.
   *   </dd>
   *   <dt>
   *     int <var>id_service</var>
   *   </dt>
   *   <dd>
   *     The ID of the service type. One of {@link RsServiceSid} constants.
   *   </dd>
   *   <dt>
   *     bool <var>is_arrive</var>
   *   </dt>
   *   <dd>
   *     For appointments: <tt>true</tt> if user has checked-in; <tt>false</tt> otherwise.
   *     For classes always <tt>null</tt>.
   *   </dd>
   *   <dt>
   *     bool <var>is_pay</var>
   *   </dt>
   *   <dd>
   *     For appointments: <tt>true</tt> if appointment is paid; <tt>false</tt> otherwise.
   *     For classes always <tt>null</tt>.
   *   </dd>
   *   <dt>
   *     bool <var>is_repeat</var>
   *   </dt>
   *   <dd>
   *     For appointments: <tt>true</tt> if appointment is recurring; <tt>false</tt> otherwise.
   *     For classes always <tt>null</tt>.
   *   </dd>
   *   <dt>
   *     string <var>k_appointment</var>
   *   </dt>
   *   <dd>
   *     The appointment key.
   *     If the session isn't an appointment, this will be `0`.
   *   </dd>
   *   <dt>
   *     string <var>dt_confirm</var>
   *   </dt>
   *   <dd>
   *     Confirmation date for appointment in MySQL format. Will be zero date + time in case appointment
   *     is not yet confirmed by client.
   *   </dd>
   *   <dt>
   *     string <var>k_class</var>
   *   </dt>
   *   <dd>
   *     The class key.
   *     If the session isn't a class, this will be `0`.
   *   </dd>
   *   <dt>
   *     string <var>k_class_period</var>
   *   </dt>
   *   <dd>
   *     The class period key.
   *     If the session isn't a class, this will be `0`.
   *   </dd>
   *   <dt>
   *     string <var>k_location</var>
   *   </dt>
   *   <dd>
   *     The location key for where the session takes place.
   *   </dd>
   *   <dt>
   *     string <var>k_service</var>
   *   </dt>
   *   <dd>
   *     This is the key of the appointment type, while `k_appointment` is the specific instance.
   *     For other cases, this will be `0`.
   *   </dd>
   *   <dt>
   *     string <var>s_title</var>
   *   </dt>
   *   <dd>
   *     The name of the session.
   *   </dd>
   *   <dt>
   *     string <var>text_alert</var>
   *   </dt>
   *   <dd>
   *     Alert message.
   *   </dd>
   *   <dt>
   *     string <var>text_color_background</var>
   *   </dt>
   *   <dd>
   *     The background color in hex representation as used on WellnessLiving.
   *   </dd>
   *   <dt>
   *     string <var>text_color_border</var>
   *   </dt>
   *   <dd>
   *     The border color in hex representation as used on WellnessLiving.
   *   </dd>
   *   <dt>
   *     bool<var>is_virtual_service</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - If the business has at least one virtual service, <tt>false</tt> - otherwise.
   *   </dd>
   *   <dt>
   *     string<var>url_image</var>
   *   </dt>
   *   <dd>
   *     URL to image. Empty if image not exist.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Schedule_ScheduleList_StaffApp_ScheduleListModel_a_schedule[]}
   */
  this.a_schedule = undefined;

  /**
   * The end date of the range from which the list of schedule sessions should be retrieved.
   *
   * This will be `null` if the range has no end date.
   *
   * @get get
   * @type {string}
   */
  this.dl_end = undefined;

  /**
   * The start date of the range from which the list of scheduled sessions should be retrieved.
   *
   * This will be `null` if the range has no start date.
   *
   * @get get
   * @type {string}
   */
  this.dl_start = undefined;

  /**
   * The date of the sessions in Coordinated Universal Time (UTC) and MySQL format.
   *
   * @get get
   * @type {string}
   */
  this.dt_date = "";

  /**
   * <tt>true</tt> - If the business has at least one virtual service, <tt>false</tt> - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_virtual_service = undefined;

  /**
   * Business key.
   *
   * @delete get
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * User key.
   *
   * @delete get
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_ScheduleList_StaffApp_ScheduleListModel);

/**
 * @inheritDoc
 */
Wl_Schedule_ScheduleList_StaffApp_ScheduleListModel.prototype.config=function()
{
  return {"a_field": {"a_schedule": {"get": {"result": true}},"dl_end": {"get": {"get": true}},"dl_start": {"get": {"get": true}},"dt_date": {"get": {"get": true}},"is_virtual_service": {"get": {"result": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}},"uid": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Schedule_ScheduleList_StaffApp_ScheduleListModel.instanceGet
 * @param {string} dt_date The date of the sessions in Coordinated Universal Time (UTC) and MySQL format.
 * @param {string} k_business Business key.
 * @param {string} uid User key.
 * @returns {Wl_Schedule_ScheduleList_StaffApp_ScheduleListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */