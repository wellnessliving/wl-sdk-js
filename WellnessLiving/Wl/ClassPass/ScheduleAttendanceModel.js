/**
 * Returns a list of all partners.
 *
 * Dispatched URL: <tt>/cp/v1/partners/{partner_id}/venues/{venue_id}/schedules/{schedule_id}/attendance</tt>.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_ClassPass_ScheduleAttendanceModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * See {@link \Wl\ClassPass\ScheduleAttendanceListData::toClassPass()} for documentation.
   *
   * @get result
   * @type {{}}
   */
  this.attendance = undefined;

  /**
   * See {@link \Wl\ClassPass\ScheduleAttendanceListData::toClassPass()} for documentation.
   *
   * @get result
   * @type {{}}
   */
  this.pagination = undefined;

  /**
   * Partner ID.
   *
   * @get get
   * @type {string}
   */
  this.s_partner = undefined;

  /**
   * Schedule ID.
   *
   * @get get
   * @type {string}
   */
  this.s_schedule = undefined;

  /**
   * Venue ID.
   *
   * @get get
   * @type {string}
   */
  this.s_venue = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_ClassPass_ScheduleAttendanceModel);

/**
 * @inheritDoc
 */
Wl_ClassPass_ScheduleAttendanceModel.prototype.config=function()
{
  return {"a_field": {"attendance": {"get": {"result": true}},"pagination": {"get": {"result": true}},"s_partner": {"get": {"get": true}},"s_schedule": {"get": {"get": true}},"s_venue": {"get": {"get": true}}}};
};