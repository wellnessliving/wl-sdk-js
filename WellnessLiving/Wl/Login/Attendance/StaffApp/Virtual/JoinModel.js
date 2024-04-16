/**
 * API to get information about virtual service.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Attendance_StaffApp_Virtual_JoinModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Local date with time of start virtual service.
   *
   * @get result
   * @type {string}
   */
  this.dtl_service = "";

  /**
   * Date with time in UTC of class period {@link Wl_Login_Attendance_StaffApp_Virtual_JoinModel.k_class_period}.
   * <tt>null</tt> - If the virtual service wait page is open for another type of service. For example: to the appointment.
   *
   * @get get
   * @type {?string}
   */
  this.dtu_class_period = null;

  /**
   * Date with time in UTC of start virtual service.
   *
   * @get result
   * @type {string}
   */
  this.dtu_service = "";

  /**
   * <tt>true</tt> if business use FitLIVE, <tt>false</tt> otherwise.
   *
   * @get result
   * @type {string}
   */
  this.is_fitlive = "";

  /**
   * Key of the virtual appointment.
   * <tt>null</tt> - If the virtual service wait page is open for another type of service. For example: to the class period.
   *
   * @get get
   * @type {?string}
   */
  this.k_appointment = null;

  /**
   * Key of the business, where session is going on.
   *
   * @get get
   * @var string|null
   */
  this.k_business = null;

  /**
   * Key of the virtual class period.
   * <tt>null</tt> - If the virtual service wait page is open for another type of service. For example: to the appointment.
   *
   * @get get
   * @type {?string}
   */
  this.k_class_period = null;

  /**
   * Name of the virtual service.
   *
   * @get result
   * @type {string}
   */
  this.text_service = "";

  /**
   * The redirect to zoom meeting.
   *
   * @get result
   * @type {string}
   */
  this.url_virtual_redirect = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Attendance_StaffApp_Virtual_JoinModel);

/**
 * @inheritDoc
 */
Wl_Login_Attendance_StaffApp_Virtual_JoinModel.prototype.config=function()
{
  return {"a_field": {"dtl_service": {"get": {"result": true}},"dtu_class_period": {"get": {"get": true}},"dtu_service": {"get": {"result": true}},"is_fitlive": {"get": {"result": true}},"k_appointment": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_class_period": {"get": {"get": true}},"text_service": {"get": {"result": true}},"url_virtual_redirect": {"get": {"result": true}}}};
};