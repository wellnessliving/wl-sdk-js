/**
 * An endpoint that adds or updates the join link for a non-integrated virtual appointment.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_View_LinkJoinModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The key of the non-integrated virtual appointment.
   *
   * @post post
   * @type {string}
   */
  this.k_appointment = undefined;

  /**
   * The key of the business the appointment belongs to.
   *
   * @post post
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * The join link for the non-integrated virtual appointment.
   *
   * @post post
   * @type {string}
   */
  this.url_join = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_View_LinkJoinModel);

/**
 * @inheritDoc
 */
Wl_Appointment_View_LinkJoinModel.prototype.config=function()
{
  return {"a_field": {"k_appointment": {"post": {"post": true}},"k_business": {"post": {"post": true}},"url_join": {"post": {"post": true}}}};
};