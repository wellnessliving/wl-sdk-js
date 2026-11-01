/**
 * Returns the number of the visit or the default number for a future booking.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Phone_PhoneModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Business key.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Visit key.
   *
   * Empty in a GET request means the default number for a future booking.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_visit = "";

  /**
   * The phone number.
   *
   * In a PUT request, the number in any format. In results, the number in the standard form.
   * `null` if there is no number or the booking is not a Phone Call.
   *
   * @get result
   * @put post,result
   * @type {?string}
   */
  this.text_phone = null;

  /**
   * Key of the client of a future booking. Used only when `k_visit` is empty.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Phone_PhoneModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Phone_PhoneModel.prototype.config=function()
{
  return {"a_field":{"k_business":{"get":{"get":true},"put":{"get":true}},"k_visit":{"get":{"get":true},"put":{"get":true}},"text_phone":{"get":{"result":true},"put":{"post":true,"result":true}},"uid":{"get":{"get":true}}}};
};

/**
 * Returns the number of the visit or the default number for a future booking.
 *
 * The number of a visit is shown like the phone of the client:
 * to the client of the visit, to the user who booked it, to a WellnessLiving admin with the privilege
 * `rs.appointment.edit` and to staff of the business with the {@link Wl_Privilege_PrivilegeSid} privilege.
 * The default number for a future booking is available to a user with the {@link Wl_Privilege_PrivilegeSid}
 * privilege for the client. The number is returned in the international E.164 format.
 *
 * @function
 * @name Wl_Appointment_Phone_PhoneModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Changes the number of the visit.
 *
 * The number may be changed by the client of the visit and by the user who booked it, also if they are staff of the
 * business (active or former), by a WellnessLiving admin with the privilege `rs.appointment.edit`, and by any other
 * active staff member only for their own appointment and with the privilege to schedule future appointments.
 * The number of a cancelled visit may not be changed. After the appointment has started, only a WellnessLiving
 * admin and staff who may change the number as staff may change it; the client and the user who booked may not.
 * The pencil to change the number in the client profile is shown by the same rule.
 * Returns the saved number in the international E.164 format.
 *
 * @function
 * @name Wl_Appointment_Phone_PhoneModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
