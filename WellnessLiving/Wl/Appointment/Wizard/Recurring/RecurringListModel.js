/**
 * Returns list of local dates without time, when recurring sessions are going to be booked.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Wizard_Recurring_RecurringListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of dates, when sessions will be booked.
   *
   * @get result
   * @type {string[]}
   */
  this.a_date = undefined;

  /**
   * Days, when sessions should be booked.
   *
   * @get get
   * @type {number[]}
   */
  this.a_day = undefined;

  /**
   * Date when recurring period ends.
   *
   * @get get
   * @type {string}
   */
  this.dt_end = undefined;

  /**
   * Date when recurring period starts.
   *
   * @get get
   * @type {string}
   */
  this.dt_start = undefined;

  /**
   * Time in mysql format, when each session should be started.
   *
   * @get get
   * @type {string}
   */
  this.dt_time = undefined;

  /**
   * Fixed count of sessions to be booked.
   *
   * @get get
   * @type {number}
   */
  this.i_count = undefined;

  /**
   * Count of period between booked sessions.
   *
   * @get get
   * @type {number}
   */
  this.i_period = undefined;

  /**
   * Duration of the periods between sessions from {@link ADurationSid}.
   *
   * @get get
   * @type {number}
   */
  this.id_duration = undefined;

  /**
   * Type of the rule, when repeatable sessions should end from {@link \RsRepeatEndSid}.
   *
   * @get get
   * @type {number}
   */
  this.id_end = undefined;

  /**
   * Whether sessions should be connected to the day of month or day of week.
   *
   * <tt>true</tt> means to book the same day of month, <tt>false</tt> - the same day of week.
   *
   * @get get
   * @type {number}
   */
  this.is_month = undefined;

  /**
   * Unique ID that defines appointment booking wizard.
   *
   * @get get
   * @type {string}
   */
  this.s_id = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Wizard_Recurring_RecurringListModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Wizard_Recurring_RecurringListModel.prototype.config=function()
{
  return {"a_field": {"a_date": {"get": {"result": true}},"a_day": {"get": {"get": true}},"dt_end": {"get": {"get": true}},"dt_start": {"get": {"get": true}},"dt_time": {"get": {"get": true}},"i_count": {"get": {"get": true}},"i_period": {"get": {"get": true}},"id_duration": {"get": {"get": true}},"id_end": {"get": {"get": true}},"is_month": {"get": {"get": true}},"s_id": {"get": {"get": true}}}};
};