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
   * @typedef {{}} Wl_Schedule_Page_AppointmentView_AppointmentViewModel_a_appointment
   * @property {string} a_date_end End date of the appointment.
   * @property {string} a_date_start Start date of the appointment.
   * @property {string} html_description Description of the appointment.
   * @property {string} html_special Special instructions.
   * @property {boolean} is_virtual <tt>true</tt> if the appointment is virtual, <tt>false</tt> otherwise.
   * @property {string} k_location Location key.
   * @property {string} k_staff Staff key.
   * @property {string} text_service Appointment title.
   * @property {string} text_staff_name Staff name.
   * @property {string} text_timezone Timezone name.
   * @property {string} uid_staff Staff uid.
   */

  /**
   * Appointment information:<dl>
   *   <dt>string <var>a_date_end</var></dt>
   *   <dd>End date of the appointment.</dd>
   *   <dt>string <var>a_date_start</var></dt>
   *   <dd>Start date of the appointment.</dd>
   *   <dt>string <var>html_description</var></dt>
   *   <dd>Description of the appointment.</dd>
   *   <dt>string <var>html_special</var></dt>
   *   <dd>Special instructions.</dd>
   *   <dt>bool <var>is_virtual</var></dt>
   *   <dd><tt>true</tt> if the appointment is virtual, <tt>false</tt> otherwise.</dd>
   *   <dt>string <var>k_location</var></dt>
   *   <dd>Location key.</dd>
   *   <dt>string <var>k_staff</var></dt>
   *   <dd>Staff key.</dd>
   *   <dt>string <var>text_service</var></dt>
   *   <dd>Appointment title.</dd>
   *   <dt>string <var>text_staff_name</var></dt>
   *   <dd>Staff name.</dd>
   *   <dt>string <var>text_timezone</var></dt>
   *   <dd>Timezone name.</dd>
   *   <dt>string <var>uid_staff</var></dt>
   *   <dd>Staff uid.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Schedule_Page_AppointmentView_AppointmentViewModel_a_appointment}
   */
  this.a_appointment = [];

  /**
   * Asset list data.
   *
   * @get result
   * @post result
   * @type {?{}[]}
   */
  this.a_asset = null;

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
   * Appointment key.
   *
   * @get get
   * @type {string}
   */
  this.k_appointment = undefined;

  /**
   * Business key.
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
  return {"a_field": {"a_appointment": {"get": {"result": true}},"a_asset": {"get": {"result": true},"post": {"result": true}},"a_location": {"get": {"result": true}},"a_service_logo": {"get": {"result": true}},"k_appointment": {"get": {"get": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Schedule_Page_AppointmentView_AppointmentViewModel.instanceGet
 * @param {string} k_business Business key.
 * @param {string} k_appointment Appointment key.
 * @returns {Wl_Schedule_Page_AppointmentView_AppointmentViewModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */