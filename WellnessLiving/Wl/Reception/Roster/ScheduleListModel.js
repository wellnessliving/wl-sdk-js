/**
 * Schedule of classes for attendance web app.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Reception_Roster_ScheduleListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Schedule of sessions in location {@link \Wl\Schedule\ScheduleList\ScheduleListApi::$k_location} in day {@link \Wl\Schedule\ScheduleList\ScheduleListApi::$dt_date}.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_schedule = undefined;

  /**
   * Local date of the currently viewed schedule list.
   * In MySQL format, without time.
   *
   * @get get
   * @type {string}
   */
  this.dt_date_local = "";

  /**
   * ID of business location to show information for. Primary key from {@link \RsLocationSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reception_Roster_ScheduleListModel);

/**
 * @inheritDoc
 */
Wl_Reception_Roster_ScheduleListModel.prototype.config=function()
{
  return {"a_field": {"a_schedule": {"get": {"result": true}},"dt_date_local": {"get": {"get": true}},"k_location": {"get": {"get": true}}}};
};