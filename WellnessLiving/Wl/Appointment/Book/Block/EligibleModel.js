/**
 * Finds the selected add-ons that the client is not eligible for.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Block_EligibleModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_location,k_service,json_service_addon,uid,is_staff";

  /**
   * @typedef {{}} Wl_Appointment_Book_Block_EligibleModel_a_ineligible
   * @property {boolean} is_age `true` if the age of the client does not fit the age restriction of the add-on.
   * @property {boolean} is_restricted `true` if the type or the group of the client, or the sale online, does not allow the add-on.
   * @property {string} k_service_addon Key of the add-on service.
   */

  /**
   * The selected add-ons that the client is not eligible for, in the order in which they run after the appointment.
   *
   * @get result
   * @type {Wl_Appointment_Book_Block_EligibleModel_a_ineligible[]}
   */
  this.a_ineligible = undefined;

  /**
   * List of user keys to book appointments.
   * There may be empty values in this list, which means that this is a walk-in.
   *
   * @get get
   * @type {string[]}
   */
  this.a_uid = undefined;

  /**
   * Whether a staff member books for the client. `false` if the client books.
   *
   * @get get
   * @type {boolean}
   */
  this.is_staff = false;

  /**
   * If `true`, the client is a walk-in. Otherwise, this will be `false`.
   *
   * @get get
   * @type {boolean}
   */
  this.is_walk_in = false;

  /**
   * Keys of the selected add-ons of the appointment, in JSON.
   *
   * For example `["12","34"]`. An empty string or an empty list if the appointment is booked without add-ons. The
   * add-ons are services that are linked to the appointment as its add-ons. They run after the appointment, and the
   * staff member of the appointment conducts them.
   *
   * @get get
   * @type {string}
   */
  this.json_service_addon = "";

  /**
   * Location to show available appointment booking schedule.
   *
   * @get get,result
   * @type {string}
   */
  this.k_location = "";

  /**
   * Key of the appointment to which the add-ons are added.
   *
   * @get get
   * @type {string}
   */
  this.k_service = "";

  /**
   * The user key.
   *
   * This field is used if the client books for himself or for the relative.
   *
   * This field is incorrect to use for guest booking since in this case the client will be checked as a relative.
   *
   * In case of a group booking or a guest booking, the key of the client who is making the booking is set here.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Block_EligibleModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Block_EligibleModel.prototype.config=function()
{
  return {"a_field":{"a_ineligible":{"get":{"result":true}},"a_uid":{"get":{"get":true}},"is_staff":{"get":{"get":true}},"is_walk_in":{"get":{"get":true}},"json_service_addon":{"get":{"get":true}},"k_location":{"get":{"get":true,"result":true}},"k_service":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Block_EligibleModel.instanceGet
 * @param {string} k_location Location to show available appointment booking schedule.
 * @param {string} k_service Key of the appointment to which the add-ons are added.
 * @param {string} json_service_addon Keys of the selected add-ons of the appointment, in JSON. For example `["12","34"]`. An empty string or an empty list if the appointment is booked without add-ons. The add-ons are services that are linked to the appointment as its add-ons. They run after the appointment, and the staff member of the appointment conducts them.
 * @param {string} uid The user key. This field is used if the client books for himself or for the relative. This field is incorrect to use for guest booking since in this case the client will be checked as a relative. In case of a group booking or a guest booking, the key of the client who is making the booking is set here.
 * @param {boolean} is_staff Whether a staff member books for the client. `false` if the client books.
 * @returns {Wl_Appointment_Book_Block_EligibleModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Finds the selected add-ons that the client is not eligible for.
 *
 * Each add-on is checked under the restrictions of its own, independent of the appointment: the age of the client,
 * the type and the group of the client, and the sale online. The client or the staff member who books for him
 * removes only these add-ons from the booking, after telling the booker. The appointment and the other add-ons
 * stay. A guest is not checked, because nothing is known about him before he signs in.
 *
 * @function
 * @name Wl_Appointment_Book_Block_EligibleModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
