/**
 * Gets a list of locations which must be represented on schedule to current user.
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
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * User key.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_ScheduleList_StaffApp_Location_ScheduleListLocationModel);

/**
 * @inheritDoc
 */
Wl_Schedule_ScheduleList_StaffApp_Location_ScheduleListLocationModel.prototype.config=function()
{
  return {"a_field":{"a_location":{"get":{"result":true}},"k_business":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Schedule_ScheduleList_StaffApp_Location_ScheduleListLocationModel.instanceGet
 * @param {string} k_business Business key.
 * @param {string} uid User key.
 * @returns {Wl_Schedule_ScheduleList_StaffApp_Location_ScheduleListLocationModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets a list of locations which must be represented on schedule to current user.
 *
 * Returns the location keys the current staff member is allowed to see on the business schedule,
 * based on the schedule configuration for the business.
 *
 * @function
 * @name Wl_Schedule_ScheduleList_StaffApp_Location_ScheduleListLocationModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
