/**
 * Appointment duration change API.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Change_DurationModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Array with state of client mail form.
   *
   * @post post
   * @type {{}}
   */
  this.a_mail_form_client = [];

  /**
   * Array with state of staff mail form.
   *
   * @post post
   * @type {{}}
   */
  this.a_mail_form_staff = [];

  /**
   * Duration change value.
   *
   * @post post
   * @type {number}
   */
  this.i_duration_delta = 0;

  /**
   * <tt>true</tt> if it is required to send notification about appointment change to client, <tt>false</tt> otherwise.
   *
   * @post post
   * @type {boolean}
   */
  this.is_notify_client = false;

  /**
   * <tt>true</tt> if it is required to send notification about appointment change to staff, <tt>false</tt> otherwise.
   *
   * @post post
   * @type {boolean}
   */
  this.is_notify_staff = false;

  /**
   * Reload page.
   *
   * @post result
   * @type {boolean}
   */
  this.is_reload = undefined;

  /**
   * To do nothing, skip all changes.
   *
   * @post result
   * @type {boolean}
   */
  this.is_skip = undefined;

  /**
   * Appointment key.
   *
   * Empty value means not set.
   *
   * @post post
   * @type {string}
   */
  this.k_appointment = "";

  /**
   * ID form.
   *
   * @post post
   * @type {string}
   */
  this.s_form_id = "";

  /**
   * New appointment end time
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