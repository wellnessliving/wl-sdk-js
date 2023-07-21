/**
 * An endpoint that returns a list of dates (without times) for recurring sessions.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Wizard_Recurring_RecurringListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A list of dates for booked sessions.
   *
   * @get result
   * @type {string[]}
   */
  this.a_date = undefined;

  /**
   * A list of days of the booked sessions.
   *
   * @get get
   * @type {number[]}
   */
  this.a_day = undefined;

  /**
   * The date when the recurring period ends.
   *
   * @get get
   * @type {string}
   */
  this.dt_end = undefined;

  /**
   * The date when the recurring period starts.
   *
   * @get get
   * @type {string}
   */
  this.dt_start = undefined;

  /**
   * The time (in MySQL format) when each session starts.
   *
   * @get get
   * @type {string}
   */
  this.dt_time = undefined;

  /**
   * The number of sessions booked.
   *
   * @get get
   * @type {number}
   */
  this.i_count = undefined;

  /**
   * The number of periods between booked sessions.
   *
   * @get get
   * @type {number}
   */
  this.i_period = undefined;

  /**
   * The duration of the periods between sessions from {@link ADurationSid}.
   *
   * @get get
   * @type {number}
   */
  this.id_duration = undefined;

  /**
   * The rule type used for when repeatable sessions end from {@link RsRepeatEndSid}.
   *
   * @get get
   * @type {number}
   */
  this.id_end = undefined;

  /**
   * Determines whether sessions should be connected to the day of month or the day of week.
   *
   * This will be `true` if it's booked for the same day of month. Otherwise, this will be `false` if it's booked for
   * the same day of the week.
   *
   * @get get
   * @type {boolean}
   */
  this.is_month = undefined;

  /**
   * The unique ID that defines the appointment booking wizard.
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