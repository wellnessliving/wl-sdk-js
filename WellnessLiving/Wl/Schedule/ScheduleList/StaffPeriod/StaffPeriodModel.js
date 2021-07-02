/**
 * Data of working hours of staff member.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_ScheduleList_StaffPeriod_StaffPeriodModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "dt_date,k_business";

  /**
   * Working hours list. See {@link \Wl\Schedule\WorkingTime\StaffWorkingTime::getWorkingTime()} for details.
   *
   * @get result
   * @type {{}}
   */
  this.a_staff_period = undefined;

  /**
   * Date for which working hours are required.
   * In business timezone.
   *
   * @get get
   * @type {string}
   */
  this.dt_date = "";

  /**
   * ID of business for which working hours are required.
   * Primary key in table {@link \RsBusinessSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_ScheduleList_StaffPeriod_StaffPeriodModel);

/**
 * @inheritDoc
 */
Wl_Schedule_ScheduleList_StaffPeriod_StaffPeriodModel.prototype.config=function()
{
  return {"a_field": {"a_staff_period": {"get": {"result": true}},"dt_date": {"get": {"get": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Schedule_ScheduleList_StaffPeriod_StaffPeriodModel.instanceGet
 * @param {string} dt_date Date for which working hours are required. In business timezone.
 * @param {string} k_business ID of business for which working hours are required. Primary key in table {@link \RsBusinessSql}.
 * @returns {Wl_Schedule_ScheduleList_StaffPeriod_StaffPeriodModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */