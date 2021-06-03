/**
 * Retrieves information about appointment.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_Page_AppointmentView_AppointmentViewModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_appointment";

  /**
   * @typedef {{}} Wl_Schedule_Page_AppointmentView_AppointmentViewModel_a_appointment_a_date
   * @property {string} s_day Day of the weekend.
   * @property {string} s_date Date of the appointment.
   * @property {string} s_half_end Ante meridiem or Post meridiem for end time.
   * @property {string} s_half_start Ante meridiem or Post meridiem for start time.
   * @property {string} s_time_end End time.
   * @property {string} s_time_start Start time.
   */
  /**
   * @typedef {{}} Wl_Schedule_Page_AppointmentView_AppointmentViewModel_a_appointment
   * @property {Wl_Schedule_Page_AppointmentView_AppointmentViewModel_a_appointment_a_date} a_date Detail information about date and time of the appointment:<dl>
   * <dt>string <tt>s_day</tt></dt><dd>Day of the weekend.</dd>
   * <dt>string <tt>s_date</tt></dt><dd>Date of the appointment.</dd>
   * <dt>string <tt>s_half_end</tt></dt><dd>Ante meridiem or Post meridiem for end time.</dd>
   * <dt>string <tt>s_half_start</tt></dt><dd>Ante meridiem or Post meridiem for start time.</dd>
   * <dt>string <tt>s_time_end</tt></dt><dd>End time.</dd>
   * <dt>string <tt>s_time_start</tt></dt><dd>Start time.</dd>
   *   </dl>
   * @property {string} html_description Description of the appointment.
   * @property {string} html_special Special instructions.
   * @property {boolean} is_virtual <tt>true</tt> if the appointment is virtual, <tt>false</tt> otherwise.
   * @property {string} k_location Location key. Primary key in the {@link \RsLocationSql} table.
   * @property {string} k_staff Staff key. Primary key in the {@link \RsStaffSql} table.
   * @property {string} text_service Appointment title.
   * @property {string} text_staff_name Staff name.
   * @property {string} uid_staff Staff uid. Primary key in the {@link \PassportLoginSql} table.
   */

  /**
   * Appointment information:<dl>
   *   <dt>array <var>a_date</var></dt>
   *   <dd>
   *     Detail information about date and time of the appointment:<dl>
   *     <dt>string <var>s_day</var></dt><dd>Day of the weekend.</dd>
   *     <dt>string <var>s_date</var></dt><dd>Date of the appointment.</dd>
   *     <dt>string <var>s_half_end</var></dt><dd>Ante meridiem or Post meridiem for end time.</dd>
   *     <dt>string <var>s_half_start</var></dt><dd>Ante meridiem or Post meridiem for start time.</dd>
   *     <dt>string <var>s_time_end</var></dt><dd>End time.</dd>
   *     <dt>string <var>s_time_start</var></dt><dd>Start time.</dd>
   *   </dl></dd>
   *   <dt>string <var>html_description</var></dt>
   *   <dd>Description of the appointment.</dd>
   *   <dt>string <var>html_special</var></dt>
   *   <dd>Special instructions.</dd>
   *   <dt>bool <var>is_virtual</var></dt>
   *   <dd><tt>true</tt> if the appointment is virtual, <tt>false</tt> otherwise.</dd>
   *   <dt>string <var>k_location</var></dt>
   *   <dd>Location key. Primary key in the {@link \RsLocationSql} table.</dd>
   *   <dt>string <var>k_staff</var></dt>
   *   <dd>Staff key. Primary key in the {@link \RsStaffSql} table.</dd>
   *   <dt>string <var>text_service</var></dt>
   *   <dd>Appointment title.</dd>
   *   <dt>string <var>text_staff_name</var></dt>
   *   <dd>Staff name.</dd>
   *   <dt>string <var>uid_staff</var></dt>
   *   <dd>Staff uid. Primary key in the {@link \PassportLoginSql} table.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Schedule_Page_AppointmentView_AppointmentViewModel_a_appointment}
   */
  this.a_appointment = [];

  /**
   * @typedef {{}} Wl_Schedule_Page_AppointmentView_AppointmentViewModel_a_location
   * @property {string} text_address First address line of location.
   * @property {string} text_address2 Second address line of location.
   * @property {string} text_city Name of city.
   * @property {string} text_phone Phone number.
   * @property {string} text_postal Postal code.
   * @property {string} text_region Name of region.
   * @property {string} text_title Title of the location.
   */

  /**
   * Location information:<dl>
   *   <dt>string <var>text_address</var></dt>
   *   <dd>First address line of location.</dd>
   *   <dt>string <var>text_address2</var></dt>
   *   <dd>Second address line of location.</dd>
   *   <dt>string <var>text_city</var></dt>
   *   <dd>Name of city.</dd>
   *   <dt>string <var>text_phone</var></dt>
   *   <dd>Phone number.</dd>
   *   <dt>string <var>text_postal</var></dt>
   *   <dd>Postal code.</dd>
   *   <dt>string <var>text_region</var></dt>
   *   <dd>Name of region.</dd>
   *   <dt>string <var>text_title</var></dt>
   *   <dd>Title of the location.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Schedule_Page_AppointmentView_AppointmentViewModel_a_location}
   */
  this.a_location = [];

  /**
   * Service logo data. Result of {@link RsServiceLogo::data()}.
   *
   * @get result
   * @type {{}}
   */
  this.a_service_logo = [];

  /**
   * Appointment key. Primary key in {@link \RsAppointmentSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_appointment = undefined;

  /**
   * Business key. Primary key in {@link \RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_Page_AppointmentView_AppointmentViewModel);

/**
 * @inheritDoc
 */
Wl_Schedule_Page_AppointmentView_AppointmentViewModel.prototype.config=function()
{
  return {"a_field": {"a_appointment": {"get": {"result": true}},"a_location": {"get": {"result": true}},"a_service_logo": {"get": {"result": true}},"k_appointment": {"get": {"get": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Schedule_Page_AppointmentView_AppointmentViewModel.instanceGet
 * @param {string} k_business Business key. Primary key in {@link \RsBusinessSql} table.
 * @param {string} k_appointment Appointment key. Primary key in {@link \RsAppointmentSql} table.
 * @returns {Wl_Schedule_Page_AppointmentView_AppointmentViewModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */