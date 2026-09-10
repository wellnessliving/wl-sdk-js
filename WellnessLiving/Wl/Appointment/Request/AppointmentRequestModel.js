/**
 * Confirms or denies the appointment.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Request_AppointmentRequestModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * From where request comes. One of {@link RsPlaceSid}.
   *
   * @post get
   * @see RsPlaceSid
   * @type {number}
   */
  this.id_place = 0;

  /**
   * Whether to deny the appointment.
   * `true` to deny appointment or `false` to confirm.
   *
   * @post get
   * @type {boolean}
   */
  this.is_deny = false;

  /**
   * Whether all instances of recurring appointment should be denied or approved.
   * `true` if all instances, `false` for only current appointment.
   *
   * @post get
   * @type {boolean}
   */
  this.is_repeat = false;

  /**
   * Appointment key.
   *
   * @post get
   * @type {string}
   */
  this.k_appointment = "";

  /**
   * Business key.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Request_AppointmentRequestModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Request_AppointmentRequestModel.prototype.config=function()
{
  return {"a_field":{"id_place":{"post":{"get":true}},"is_deny":{"post":{"get":true}},"is_repeat":{"post":{"get":true}},"k_appointment":{"post":{"get":true}},"k_business":{"post":{"get":true}}}};
};

/**
 * Confirms or denies the appointment.
 *
 * When `is_repeat` is `true`, applies the same confirmation or denial to every not yet
 * answered instance of the recurring appointment, otherwise only the given appointment is
 * affected. When `id_place` is the backend, the current user must have access to the business.
 *
 * @function
 * @name Wl_Appointment_Request_AppointmentRequestModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
