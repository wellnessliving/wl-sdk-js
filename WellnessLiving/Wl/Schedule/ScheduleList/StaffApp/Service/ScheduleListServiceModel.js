/**
 * Gets a list of appointment services which must be represented on schedule.
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
   * List of appointment services. Keys - service IDs; primary key in the `rs_service` table. Values - service title.
   *
   * @get result
   * @type {{}}
   */
  this.a_service = undefined;

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

WlSdk_ModelAbstract.extend(Wl_Schedule_ScheduleList_StaffApp_Service_ScheduleListServiceModel);

/**
 * @inheritDoc
 */
Wl_Schedule_ScheduleList_StaffApp_Service_ScheduleListServiceModel.prototype.config=function()
{
  return {"a_field":{"a_service":{"get":{"result":true}},"k_business":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Schedule_ScheduleList_StaffApp_Service_ScheduleListServiceModel.instanceGet
 * @param {string} k_business Business key.
 * @param {string} uid User key.
 * @returns {Wl_Schedule_ScheduleList_StaffApp_Service_ScheduleListServiceModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets a list of appointment services which must be represented on schedule.
 *
 * Returns the appointment services configured to appear on the business schedule, keyed by service
 * key with the service title as the value.
 *
 * @function
 * @name Wl_Schedule_ScheduleList_StaffApp_Service_ScheduleListServiceModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
