/**
 * Information about staff members which may be shown on business schedule.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_ScheduleList_StaffApp_Staff_ScheduleListStaffModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * IDs of staff members which must be represented of business schedule. Primary keys in {@link \RsStaffSql} table.
   *
   * @get result
   * @type {string[]}
   */
  this.a_staff = undefined;

  /**
   * Business key.
   * Primary key in {@link RsBusinessSql} table.
   *
   * @delete get
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * User key.
   * Primary key in {@link PassportLoginSql} table.
   *
   * @delete get
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_ScheduleList_StaffApp_Staff_ScheduleListStaffModel);

/**
 * @inheritDoc
 */
Wl_Schedule_ScheduleList_StaffApp_Staff_ScheduleListStaffModel.prototype.config=function()
{
  return {"a_field": {"a_staff": {"get": {"result": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}},"uid": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Schedule_ScheduleList_StaffApp_Staff_ScheduleListStaffModel.instanceGet
 * @param {string} k_business Business key. Primary key in {@link RsBusinessSql} table.
 * @param {string} uid User key. Primary key in {@link PassportLoginSql} table.
 * @returns {Wl_Schedule_ScheduleList_StaffApp_Staff_ScheduleListStaffModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */