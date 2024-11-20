/**
 * An endpoint that gets the Appointment Change (Client) email template.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Change_Mail_DurationChangeMailModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The HTML template that can be used to change the email template.
   *
   * @get result
   * @type {string}
   */
  this.html_mail_editor = undefined;

  /**
   * The email template ID from {@link RsMailSid}.
   *
   * @get get
   * @type {*}
   */
  this.id_mail = undefined;

  /**
   * The appointment primary key. This will be `null` if an appointment isn't set yet.
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