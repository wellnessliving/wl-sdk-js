/**
 * Lists the add-ons that can be chosen for an appointment.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Block_AddonListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_location,k_service,uid,is_staff";

  /**
   * @typedef {{}} Wl_Appointment_Book_Block_AddonListModel_a_addon
   * @property {number} i_extra_time Extra time that the add-on adds to the appointment, in minutes. `0` if the add-on takes no time of its own.
   * @property {string} k_service_addon Key of the add-on service.
   * @property {string} m_extra_cost Extra cost that the add-on adds to the price of the appointment.
   * @property {?string} m_price_regular The regular price of the add-on, shown struck through next to Extra cost. `null` if nothing is struck through.
   * @property {?string} text_tagline Short line that tells why to add the add-on. `null` if the add-on has none.
   * @property {string} text_title Title of the add-on.
   */

  /**
   * The add-ons that can be chosen for the appointment, in the order in which they are shown and run after the
   * appointment. Empty if the appointment has no add-ons.
   *
   * @get result
   * @type {Wl_Appointment_Book_Block_AddonListModel_a_addon[]}
   */
  this.a_addon = undefined;

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
   * Location to show available appointment booking schedule.
   *
   * @get get,result
   * @type {string}
   */
  this.k_location = "";

  /**
   * Key of the appointment for which the add-ons are chosen.
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

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Block_AddonListModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Block_AddonListModel.prototype.config=function()
{
  return {"a_field":{"a_addon":{"get":{"result":true}},"a_uid":{"get":{"get":true}},"is_staff":{"get":{"get":true}},"is_walk_in":{"get":{"get":true}},"k_location":{"get":{"get":true,"result":true}},"k_service":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Block_AddonListModel.instanceGet
 * @param {string} k_location Location to show available appointment booking schedule.
 * @param {string} k_service Key of the appointment for which the add-ons are chosen.
 * @param {string} uid The user key. This field is used if the client books for himself or for the relative. This field is incorrect to use for guest booking since in this case the client will be checked as a relative. In case of a group booking or a guest booking, the key of the client who is making the booking is set here.
 * @param {boolean} is_staff Whether a staff member books for the client. `false` if the client books.
 * @returns {Wl_Appointment_Book_Block_AddonListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Lists the add-ons that can be chosen for an appointment.
 *
 * An add-on is listed if it is linked to the appointment and its service is active and allows to be an add-on. The
 * list is empty if the appointment does not allow add-ons. An add-on that is booked by staff only is not listed for
 * a client. The list does not look at the age, the type and the group of the client: an add-on that the client is
 * not eligible for is found later, when the client is known. The regular price of an add-on is given only if it is
 * struck through, that is, Show Discount is on, the price of the add-on is fixed and Extra cost is lower.
 *
 * @function
 * @name Wl_Appointment_Book_Block_AddonListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
