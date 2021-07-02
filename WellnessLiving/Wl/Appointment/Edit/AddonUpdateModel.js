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
   * IDs of the addons for appointment.
   *
   * @put post
   * @type {string[]}
   */
  this.a_addon = undefined;

  /**
   * ID of the appointment.
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