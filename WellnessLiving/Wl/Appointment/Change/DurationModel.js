/**
 * An endpoint that changes an appointment's duration.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Change_DurationModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * An array containing information about the custom that would be sent to the client.
   *
   * @post post
   * @type {{}}
   */
  this.a_mail_form_client = [];

  /**
   * An array containing the state of the staff member email form.
   *
   * @post post
   * @type {{}}
   */
  this.a_mail_form_staff = [];

  /**
   * The duration change value.
   *
   * @post post
   * @type {number}
   */
  this.i_duration_delta = 0;

  /**
   * If `true`, notifications about appointment changes must be sent to the client. Otherwise, this will be `false`.
   *
   * @post post
   * @type {boolean}
   */
  this.is_notify_client = false;

  /**
   * If `true`, notifications about appointment changes must be sent to the staff member. Otherwise, this will be `false`.
   *
   * @post post
   * @type {boolean}
   */
  this.is_notify_staff = false;

  /**
   * The reload page.
   *
   * @post result
   * @type {boolean}
   */
  this.is_reload = undefined;

  /**
   * If no changes were made, perhaps due to a conflict then this value will be `true`.
   *
   * @post result
   * @type {boolean}
   */
  this.is_skip = undefined;

  /**
   * The appointment key.
   *
   * This will be empty if not set yet.
   *
   * @post post
   * @type {string}
   */
  this.k_appointment = "";

  /**
   * The form ID.
   *
   * @post post
   * @type {string}
   */
  this.s_form_id = "";

  /**
   * The new appointment end time.
   *
   * @post result
   * @type {string}
   */
  this.s_time_end = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Change_DurationModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Change_DurationModel.prototype.config=function()
{
  return {"a_field": {"a_mail_form_client": {"post": {"post": true}},"a_mail_form_staff": {"post": {"post": true}},"i_duration_delta": {"post": {"post": true}},"is_notify_client": {"post": {"post": true}},"is_notify_staff": {"post": {"post": true}},"is_reload": {"post": {"result": true}},"is_skip": {"post": {"result": true}},"k_appointment": {"post": {"post": true}},"s_form_id": {"post": {"post": true}},"s_time_end": {"post": {"result": true}}}};
};