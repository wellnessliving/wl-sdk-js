/**
 * Version of {@link \Wl\Schedule\ScheduleList\StaffApp\ScheduleListApi} for access validation by security token.
 *
 * This model is generated automatically based on API.
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
   * @typedef {{}} Wl_Schedule_ScheduleList_StaffApp_ScheduleListByTokenModel_a_schedule
   * @property {string[]} a_resource List of assets involved in this session. Primary keys in {@link RsResourceSql} table.
   * @property {string[]} a_staff List of staff members who conduct this session. Primary keys in {@link RsStaffSql} table.
   * @property {string[]} a_user List of names of users for who session is appointed. Not empty for appointments.
   * @property {string[]} a_virtual_location List of virtual locations. Each value is primary key in {@link \RsLocationSql} table.
   * @property {string} dt_date Date/time of session in GMT.
   * @property {string} dt_date_cancel Date/time when session was cancelled in GMT. Has sense for appointments only.
   * @property {string} dt_date_local Date/time of session in local time.
   * @property {number} i_book Quantity of this session books.
   * @property {number} i_capacity Capacity of session books.
   * @property {number} i_duration Duration in minutes.
   * @property {number} i_padding_after Padding after session. Has sense for appointments only.
   * @property {number} i_padding_before Padding before session. Has sense for appointments only.
   * @property {number} i_start Start time in minutes.
   * @property {number} i_wait Count clients on waitlist.
   * @property {number} id_service ID of service type. One of {@link RsServiceSid} constants.
   * @property {boolean} is_arrive For appointments: <tt>true</tt> if user has checked-in; <tt>false</tt> otherwise.
   * For classes always <tt>null</tt>.
   * @property {boolean} is_pay For appointments: <tt>true</tt> if appointment is paid; <tt>false</tt> otherwise.
   * For classes always <tt>null</tt>.
   * @property {boolean} is_repeat For appointments: <tt>true</tt> if appointment is recurring; <tt>false</tt> otherwise.
   * For classes always <tt>null</tt>.
   * @property {string} k_appointment Appointment ID. Primary key in {@link RsAppointmentSql} table. <tt>0</tt> if this session is not an appointment.
   * @property {string} k_class Class ID. Primary key in {@link RsClassSql} table. <tt>0</tt> if this session is not a class session.
   * @property {string} k_class_period Class session ID. Primary key in {@link RsClassPeriodSql} table. <tt>0</tt> if this session is not a class session.
   * @property {string} k_location Location where session takes place. Primary key in {@link RsLocationSql} table.
   * @property {string} k_service For appointments of service - service ID. Primary key in {@link RsServiceSql} table. For other cases - always <tt>0</tt>.
   * @property {string} s_title Session title.
   * @property {string} text_color_background Background color for session in hex representation.
   * @property {string} text_color_border Border color for session in hex representation.
   * @property {boolean} is_virtual_service <tt>true</tt> - If the business has at least one virtual service, <tt>false</tt> - otherwise.
   * @property {string} url_image URL to image. Empty if image not exist.
   */

  /**
   * Sessions of schedule. Are sorted chronological order in ascending order. Every element has keys:
   * <dl>
   *   <dt>
   *     string[] <var>a_resource</var>
   *   </dt>
   *   <dd>
   *     List of assets involved in this session. Primary keys in {@link RsResourceSql} table.
   *   </dd>
   *   <dt>
   *     string[] <var>a_staff</var>
   *   </dt>
   *   <dd>
   *     List of staff members who conduct this session. Primary keys in {@link RsStaffSql} table.
   *   </dd>
   *   <dt>
   *     string[] <var>a_user</var>
   *   </dt>
   *   <dd>
   *     List of names of users for who session is appointed. Not empty for appointments.
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
   *     Date/time of session in GMT.
   *   </dd>
   *   <dt>
   *     string <var>dt_date_cancel</var>
   *   </dt>
   *   <dd>
   *     Date/time when session was cancelled in GMT. Has sense for appointments only.
   *   </dd>
   *   <dt>
   *     string <var>dt_date_local</var>
   *   </dt>
   *   <dd>
   *     Date/time of session in local time.
   *   </dd>
   *   <dt>
   *     int <var>i_book</var>
   *   </dt>
   *   <dd>
   *     Quantity of this session books.
   *   </dd>
   *   <dt>
   *     int <var>i_capacity</var>
   *   </dt>
   *   <dd>
   *     Capacity of session books.
   *   </dd>
   *   <dt>
   *     int <var>i_duration</var>
   *   </dt>
   *   <dd>
   *     Duration in minutes.
   *   </dd>
   *   <dt>
   *     int <var>i_padding_after</var>
   *   </dt>
   *   <dd>
   *     Padding after session. Has sense for appointments only.
   *   </dd>
   *   <dt>
   *     int <var>i_padding_before</var>
   *   </dt>
   *   <dd>
   *     Padding before session. Has sense for appointments only.
   *   </dd>
   *   <dt>
   *     int <var>i_start</var>
   *   </dt>
   *   <dd>
   *     Start time in minutes.
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
   *     ID of service type. One of {@link RsServiceSid} constants.
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
   *     Appointment ID. Primary key in {@link RsAppointmentSql} table. <tt>0</tt> if this session is not an appointment.
   *   </dd>
   *   <dt>
   *     string <var>k_class</var>
   *   </dt>
   *   <dd>
   *     Class ID. Primary key in {@link RsClassSql} table. <tt>0</tt> if this session is not a class session.
   *   </dd>
   *   <dt>
   *     string <var>k_class_period</var>
   *   </dt>
   *   <dd>
   *     Class session ID. Primary key in {@link RsClassPeriodSql} table. <tt>0</tt> if this session is not a class session.
   *   </dd>
   *   <dt>
   *     string <var>k_location</var>
   *   </dt>
   *   <dd>
   *     Location where session takes place. Primary key in {@link RsLocationSql} table.
   *   </dd>
   *   <dt>
   *     string <var>k_service</var>
   *   </dt>
   *   <dd>
   *     For appointments of service - service ID. Primary key in {@link RsServiceSql} table. For other cases - always <tt>0</tt>.
   *   </dd>
   *   <dt>
   *     string <var>s_title</var>
   *   </dt>
   *   <dd>
   *     Session title.
   *   </dd>
   *   <dt>
   *     string <var>text_color_background</var>
   *   </dt>
   *   <dd>
   *     Background color for session in hex representation.
   *   </dd>
   *   <dt>
   *     string <var>text_color_border</var>
   *   </dt>
   *   <dd>
   *     Border color for session in hex representation.
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
   * @type {Wl_Schedule_ScheduleList_StaffApp_ScheduleListByTokenModel_a_schedule[]}
   */
  this.a_schedule = undefined;

  /**
   * End date of the range from which list of schedule should be retrieved.
   *
   * <tt>null</tt> if range has no end date.
   *
   * @get get
   * @type {string}
   */
  this.dl_end = undefined;

  /**
   * Start date of the range from which list of schedule should be retrieved.
   *
   * <tt>null</tt> if range has no start date.
   *
   * @get get
   * @type {string}
   */
  this.dl_start = undefined;

  /**
   * Date (local) for which schedule must be gotten.
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
   * Primary key in {@link RsBusinessSql} table.
   *
   * @delete get
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Security token.
   *
   * @get get
   * @type {string}
   */
  this.text_token = "";

  /**
   * User key.
   * Primary key in {@link PassportLoginSql} table.
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

WlSdk_ModelAbstract.extend(Wl_Schedule_ScheduleList_StaffApp_ScheduleListByTokenModel);

/**
 * @inheritDoc
 */
Wl_Schedule_ScheduleList_StaffApp_ScheduleListByTokenModel.prototype.config=function()
{
  return {"a_field": {"a_schedule": {"get": {"result": true}},"dl_end": {"get": {"get": true}},"dl_start": {"get": {"get": true}},"dt_date": {"get": {"get": true}},"is_virtual_service": {"get": {"result": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}},"text_token": {"get": {"get": true}},"uid": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Schedule_ScheduleList_StaffApp_ScheduleListByTokenModel.instanceGet
 * @param {string} dt_date Date (local) for which schedule must be gotten.
 * @param {string} k_business Business key. Primary key in {@link RsBusinessSql} table.
 * @param {string} uid User key. Primary key in {@link PassportLoginSql} table.
 * @returns {Wl_Schedule_ScheduleList_StaffApp_ScheduleListByTokenModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */