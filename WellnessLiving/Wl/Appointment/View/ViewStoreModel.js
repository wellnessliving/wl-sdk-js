/**
 * Loads information about amounts that must be paid for an appointment.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_View_ViewStoreModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_appointment,k_business";

  /**
   * @typedef {{}} Wl_Appointment_View_ViewStoreModel_a_item
   * @property {string} m_price Item price.
   * @property {string} text_title Item title.
   */

  /**
   * List of amounts that must be paid. Each element contains keys:
   *
   * @get result
   * @type {Wl_Appointment_View_ViewStoreModel_a_item[]}
   */
  this.a_item = undefined;

  /**
   * Appointment key.
   *
   * @get get
   * @type {string}
   */
  this.k_appointment = "";

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_View_ViewStoreModel);

/**
 * @inheritDoc
 */
Wl_Appointment_View_ViewStoreModel.prototype.config=function()
{
  return {"a_field":{"a_item":{"get":{"result":true}},"k_appointment":{"get":{"get":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Appointment_View_ViewStoreModel.instanceGet
 * @param {string} k_appointment Appointment key.
 * @param {string} k_business Business key.
 * @returns {Wl_Appointment_View_ViewStoreModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Loads information about amounts that must be paid for an appointment.
 *
 * Checks that the caller may view the appointment - either the client who booked it, or a staff member
 * with the corresponding privilege - and that the appointment belongs to the specified business. Fills
 * `a_item` with the price of the service or resource (or its default promotion, if one applies),
 * a deposit item when only a deposit is charged, and a paid and an unpaid item for every add-on product
 * of the appointment.
 *
 * @function
 * @name Wl_Appointment_View_ViewStoreModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
