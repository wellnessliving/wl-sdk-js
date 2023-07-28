/**
 * An endpoint that updates add-ons for an appointment.
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
   * The appointment add-ons.
   *
   * <b>Old format -</b> an array where each value is the add-on key.
   *
   * <b>New format -</b> each element is an object: {@link Wl_Appointment_Edit_AddonUpdateModel_a_addon}.
   *
   * @put post
   * @type {string[]|Wl_Appointment_Edit_AddonUpdateModel_a_addon[]}
   */
  this.a_addon = undefined;

  /**
   * The appointment key.
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