/**
 * Changes the attendance status of an appointment.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Mark_MarkModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Appointment key.
   *
   * Empty value means not set.
   *
   * @post post
   * @type {string}
   */
  this.k_appointment = "";

  /**
   * Business key.
   *
   * Empty value means not set.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * Appointment status.
   *
   * One of 'attend', 'book', 'confirmed', 'pending' string values.
   * Empty value means not set.
   *
   * @post post
   * @type {string}
   */
  this.text_status = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Mark_MarkModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Mark_MarkModel.prototype.config=function()
{
  return {"a_field":{"k_appointment":{"post":{"post":true}},"k_business":{"post":{"post":true}},"text_status":{"post":{"post":true}}}};
};

/**
 * Changes the attendance status of an appointment.
 *
 * Validates that the appointment belongs to the specified business and that the requesting
 * user has access to mark it, then verifies the requested status transition is allowed based
 * on the appointment's current visit and confirmation state. Applies the change within a
 * database transaction.
 *
 * @function
 * @name Wl_Appointment_Mark_MarkModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
