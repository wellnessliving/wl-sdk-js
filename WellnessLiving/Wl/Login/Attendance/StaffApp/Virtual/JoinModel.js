/**
 * Gets information about the virtual service the client is joining.
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
  this.dtl_service = undefined;

  /**
   * Date with time in UTC of class period {@link Wl_Login_Attendance_StaffApp_Virtual_JoinModel.k_class_period}.
   * `null` - If the virtual service wait page is open for another type of service. For example: to the appointment.
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
  this.dtu_service = undefined;

  /**
   * `true` if business use FitLIVE, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_fitlive = undefined;

  /**
   * Key of the virtual appointment.
   * `null` - If the virtual service wait page is open for another type of service. For example: to the class period.
   *
   * @get get
   * @type {?string}
   */
  this.k_appointment = null;

  /**
   * Key of the business, where session is going on.
   *
   * @get get
   * @type {?string}
   */
  this.k_business = null;

  /**
   * Key of the virtual class period.
   * `null` - If the virtual service wait page is open for another type of service. For example: to the appointment.
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
  this.text_service = undefined;

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
  return {"a_field":{"dtl_service":{"get":{"result":true}},"dtu_class_period":{"get":{"get":true}},"dtu_service":{"get":{"result":true}},"is_fitlive":{"get":{"result":true}},"k_appointment":{"get":{"get":true}},"k_business":{"get":{"get":true}},"k_class_period":{"get":{"get":true}},"text_service":{"get":{"result":true}},"url_virtual_redirect":{"get":{"result":true}}}};
};

/**
 * Gets information about the virtual service the client is joining.
 *
 * Validates that the specified class period or appointment is a virtual service the current user
 * may access, then returns the service name, its scheduled start time in UTC and local time,
 * whether the business uses FitLIVE, and the redirect URL to the virtual meeting.
 *
 * @function
 * @name Wl_Login_Attendance_StaffApp_Virtual_JoinModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
