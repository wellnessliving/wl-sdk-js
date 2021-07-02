/**
 * Get change appointment mail pattern.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Change_Mail_DurationChangeMailModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Html template that can be used to change mail template.
   *
   * @get result
   * @type {string}
   */
  this.html_mail_editor = undefined;

  /**
   * Email template ID from {@link RsMailSid}.
   *
   * @get get
   * @type {*}
   */
  this.id_mail = undefined;

  /**
   * Appointment primary key in {@link \RsAppointmentSql} table. <tt>null</tt> if appointment not set.
   *
   * @get get
   * @type {*}
   */
  this.k_appointment = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Change_Mail_DurationChangeMailModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Change_Mail_DurationChangeMailModel.prototype.config=function()
{
  return {"a_field": {"html_mail_editor": {"get": {"result": true}},"id_mail": {"get": {"get": true}},"k_appointment": {"get": {"get": true}}}};
};