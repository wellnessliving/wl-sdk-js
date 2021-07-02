/**
 * Retrieves an information about staff members for the current service.
 *
 * This model is generated automatically based on API.
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
  this._s_key = "k_location,k_service,dt_date,is_unavailable";

  /**
   * A list of staff members with information about them.
   *
   * @get result
   * @type {{}[]}
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
   * Date/time of appointment selected by user. In location timezone.
   * Empty if date/time is not selected.
   *
   * @get get
   * @type {string}
   */
  this.dt_date = "";

  /**
   * Whether you want to select gender for the appointment.
   *
   * @get result
   * @type {boolean}
   */
  this.has_gender = undefined;

  /**
   * Whether you want to select staff member for the appointment.
   *
   * @get result
   * @type {boolean}
   */
  this.has_staff = undefined;

  /**
   * Determines that staff list has male and female members.
   *
   * @get result
   * @type {boolean}
   */
  this.is_gender_different = undefined;

  /**
   * <tt>true</tt> - return service categories which has no staff members to conduct it;
   * <tt>false</tt> - return only service categories which has staff members.
   *
   * @get get
   * @type {boolean}
   */
  this.is_unavailable = false;

  /**
   * ID of a location.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * ID of a service to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_service = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Staff_ListModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Staff_ListModel.prototype.config=function()
{
  return {"a_field": {"a_staff": {"get": {"result": true}},"can_book_unavailable_staff": {"get": {"result": true}},"dt_date": {"get": {"get": true}},"has_gender": {"get": {"result": true}},"has_staff": {"get": {"result": true}},"is_gender_different": {"get": {"result": true}},"is_unavailable": {"get": {"get": true}},"k_location": {"get": {"get": true}},"k_service": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Staff_ListModel.instanceGet
 * @param {string} k_location ID of a location.
 * @param {string} k_service ID of a service to show information for.
 * @param {string} dt_date Date/time of appointment selected by user. In location timezone. Empty if date/time is not selected.
 * @param {boolean} is_unavailable <tt>true</tt> - return service categories which has no staff members to conduct it; <tt>false</tt> - return only service categories which has staff members.
 * @returns {Wl_Appointment_Book_Staff_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */