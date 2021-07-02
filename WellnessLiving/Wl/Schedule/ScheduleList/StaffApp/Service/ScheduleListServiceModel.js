/**
 * Information about appointment services which must be represented on schedule.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_ScheduleList_StaffApp_Service_ScheduleListServiceModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * List of appointment services. Keys - service IDs; primary key in {@link \RsServiceSql} table. Values - service title.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_service = undefined;

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

WlSdk_ModelAbstract.extend(Wl_Schedule_ScheduleList_StaffApp_Service_ScheduleListServiceModel);

/**
 * @inheritDoc
 */
Wl_Schedule_ScheduleList_StaffApp_Service_ScheduleListServiceModel.prototype.config=function()
{
  return {"a_field": {"a_service": {"get": {"result": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}},"uid": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Schedule_ScheduleList_StaffApp_Service_ScheduleListServiceModel.instanceGet
 * @param {string} k_business Business key. Primary key in {@link RsBusinessSql} table.
 * @param {string} uid User key. Primary key in {@link PassportLoginSql} table.
 * @returns {Wl_Schedule_ScheduleList_StaffApp_Service_ScheduleListServiceModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */