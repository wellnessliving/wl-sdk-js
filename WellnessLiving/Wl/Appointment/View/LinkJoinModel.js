/**
 * Adds or updates join link for non-integrated virtual appointment.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_View_LinkJoinModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Key of non-integrated virtual appointment.
   * Primary key from {@link \RsAppointmentSql}.
   *
   * @post post
   * @type {string}
   */
  this.k_appointment = undefined;

  /**
   * Key of business for which appointment belongs.
   * Primary key from {@link \RsBusinessSql}.
   *
   * @post post
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Join link for non-integrated virtual appointment.
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