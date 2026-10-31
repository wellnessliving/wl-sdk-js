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
 * The number of a visit is available to a WellnessLiving admin with the privilege `rs.appointment.edit`,
 * to a non-staff user who is the client of the visit or who booked it, and to an active staff member only for
 * their own appointment and with the privilege to schedule future appointments. Former staff have no access.
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
 * The same users have access as for reading the number of a visit. Only staff may change the number after
 * the appointment has started. Returns the saved number in the international E.164 format.
 *
 * @function
 * @name Wl_Appointment_Phone_PhoneModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
