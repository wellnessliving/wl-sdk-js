/**
 * Information about locations which must be represented on schedule to current user.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_ScheduleList_StaffApp_Location_ScheduleListLocationModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * Location IDs.
   *
   * @get result
   * @type {string[]}
   */
  this.a_location = undefined;

  /**
   * Business key.
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

WlSdk_ModelAbstract.extend(Wl_Schedule_ScheduleList_StaffApp_Location_ScheduleListLocationModel);

/**
 * @inheritDoc
 */
Wl_Schedule_ScheduleList_StaffApp_Location_ScheduleListLocationModel.prototype.config=function()
{
  return {"a_field": {"a_location": {"get": {"result": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}},"uid": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Schedule_ScheduleList_StaffApp_Location_ScheduleListLocationModel.instanceGet
 * @param {string} k_business Business key.
 * @param {string} uid User key.
 * @returns {Wl_Schedule_ScheduleList_StaffApp_Location_ScheduleListLocationModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */