/**
 * Update addons for appointment.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Edit_AddonUpdateModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Appointment_Edit_AddonUpdateModel_a_addon
   * @property {number} i_product Add-on count. Max value is 255.
   * @property {string} k_shop_product_option Key of add-on.
   */

  /**
   * Addons for appointment.
   *
   * Old format - array where each value is key of add-on.
   * New format - each element is an object: {Wl_Appointment_Edit_AddonUpdateModel_a_addon}
   *
   * @put post
   * @type {string[]|Wl_Appointment_Edit_AddonUpdateModel_a_addon[]}
   */
  this.a_addon = undefined;

  /**
   * Key of the appointment.
   *
   * @put post
   * @type {string}
   */
  this.k_appointment = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Edit_AddonUpdateModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Edit_AddonUpdateModel.prototype.config=function()
{
  return {"a_field": {"a_addon": {"put": {"post": true}},"k_appointment": {"put": {"post": true}}}};
};