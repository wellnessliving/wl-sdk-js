/**
 * Retrieves information about staff members for the current service.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Staff_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_location,k_service,dt_date,is_unavailable,id_role,k_appointment_ignore,k_timezone,uid";

  /**
   * @typedef {{}} Wl_Appointment_Book_Staff_ListModel_a_staff
   * @property {number} id_gender Staff member's gender.
   * @property {boolean} is_available Whether staff member is available for booking. Note, if staff member reached daily limits, this field
   * will be different for client and staff booking flows. If client books, such staff member is not available and
   * this field is `false`. If staff member books, such staff member is available.
   * @property {boolean} is_daily_limit Whether staff member reached daily limits on number or total duration of the appointments for one day.
   * @property {boolean} is_wait_list Whether staff member available only for wait list booking.
   * @property {string} k_staff Primary key of the staff member.
   * @property {string} s_position Position of the staff member in the business.
   * @property {number} s_staff Name of the staff member.
   * @property {string} uid UID of the staff member.
   * @property {string} xml_biography Biography of the staff member.
   */

  /**
   * A list of staff members with information about them.
   *
   * <dl>
   *   <dt>int <var>id_gender</var></dt>
   *   <dd>Staff member's gender.</dd>
   *   <dt>bool <var>is_available</var></dt>
   *   <dd>Whether staff member is available for booking. Note, if staff member reached daily limits, this field
   *     will be different for client and staff booking flows. If client books, such staff member is not available and
   *     this field is `false`. If staff member books, such staff member is available.</dd>
   *   <dt>bool <var>is_daily_limit</var></dt>
   *   <dd>Whether staff member reached daily limits on number or total duration of the appointments for one day.</dd>
   *   <dt>bool <var>is_wait_list</var></dt>
   *   <dd>Whether staff member available only for wait list booking.</dd>
   *   <dt>string <var>k_staff</var></dt>
   *   <dd>Primary key of the staff member.</dd>
   *   <dt>string <var>s_position</var></dt>
   *   <dd>Position of the staff member in the business.</dd>
   *   <dt>int <var>s_staff</var></dt>
   *   <dd>Name of the staff member.</dd>
   *   <dt>string <var>uid</var></dt>
   *   <dd>UID of the staff member.</dd>
   *   <dt>string <var>xml_biography</var></dt>
   *   <dd>Biography of the staff member.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Staff_ListModel_a_staff[]}
   */
  this.a_staff = undefined;

  /**
   * Can staff booked unavailable staff.
   *
   * @get result
   * @type {boolean}
   */
  this.can_book_unavailable_staff = undefined;

  /**
   * The date/time of the appointment selected by user, in the location's time zone.
   *
   * @get get
   * @type {string}
   */
  this.dt_date = "";

  /**
   * Determines whether to select the staff member's gender for the appointment.
   *
   * @get result
   * @type {boolean}
   */
  this.has_gender = undefined;

  /**
   * Determines whether to select staff member(s) for the appointment.
   *
   * @get result
   * @type {boolean}
   */
  this.has_staff = undefined;

  /**
   * Custom appointment duration in minutes.
   *
   * `null` if not set.
   *
   * @get get
   * @type {?number}
   */
  this.i_duration_custom = null;

  /**
   * User role by whom this api called.
   * For different roles different results might be generated.
   *
   * @get get
   * @type {number}
   */
  this.id_role = 2;

  /**
   * Determines if the staff list has male and female members.
   *
   * @get result
   * @type {boolean}
   */
  this.is_gender_different = undefined;

  /**
   * `true` - returns service categories that have no staff members available to conduct them.
   * `false` - returns only service categories that have staff members available to conduct them.
   *
   * @get get
   * @type {boolean}
   */
  this.is_unavailable = false;

  /**
   * Key of appointment which must be ignored when searches available staff.
   *
   * @get get
   * @type {string}
   */
  this.k_appointment_ignore = "0";

  /**
   * The key of the location.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * The key of a service for which to show information.
   *
   * @get get
   * @type {string}
   */
  this.k_service = "0";

  /**
   * User's timezone.
   *
   * `null` until initialized or to use location timezone.
   *
   * @get get
   * @type {?string}
   */
  this.k_timezone = null;

  /**
   * The user key for whom the service is booking.
   *
   * `null` when not set.
   *
   * @get get
   * @type {?string}
   */
  this.uid = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Staff_ListModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Staff_ListModel.prototype.config=function()
{
  return {"a_field": {"a_staff": {"get": {"result": true}},"can_book_unavailable_staff": {"get": {"result": true}},"dt_date": {"get": {"get": true}},"has_gender": {"get": {"result": true}},"has_staff": {"get": {"result": true}},"i_duration_custom": {"get": {"get": true}},"id_role": {"get": {"get": true}},"is_gender_different": {"get": {"result": true}},"is_unavailable": {"get": {"get": true}},"k_appointment_ignore": {"get": {"get": true}},"k_location": {"get": {"get": true}},"k_service": {"get": {"get": true}},"k_timezone": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Staff_ListModel.instanceGet
 * @param {string} k_location The key of the location.
 * @param {string} k_service The key of a service for which to show information.
 * @param {string} dt_date The date/time of the appointment selected by user, in the location's time zone.
 * @param {boolean} is_unavailable `true` - returns service categories that have no staff members available to conduct them. `false` - returns only service categories that have staff members available to conduct them.
 * @param {number} id_role User role by whom this api called. For different roles different results might be generated.
 * @param {string} k_appointment_ignore Key of appointment which must be ignored when searches available staff.
 * @param {?string} k_timezone User's timezone. `null` until initialized or to use location timezone.
 * @param {?string} uid The user key for whom the service is booking. `null` when not set.
 * @returns {Wl_Appointment_Book_Staff_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */