/**
 * Gets information about staff members of business.
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
   * IDs of staff members which must be represented of business schedule. Primary keys in the `rs_staff` table.
   *
   * Returned only for applications in the `APPS_USE_OLD_K_STAFF` allow-list.
   *
   * @deprecated Use {@link Wl_Schedule_ScheduleList_StaffApp_Staff_ScheduleListStaffModel.a_uid_staff} instead.
   * @get result
   * @type {string[]}
   */
  this.a_staff = undefined;

  /**
   * IDs of staff members which must be represented of business schedule. Primary keys in the `passport_login` table.
   *
   * @get result
   * @type {string[]}
   */
  this.a_uid_staff = undefined;

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

WlSdk_ModelAbstract.extend(Wl_Schedule_ScheduleList_StaffApp_Staff_ScheduleListStaffModel);

/**
 * @inheritDoc
 */
Wl_Schedule_ScheduleList_StaffApp_Staff_ScheduleListStaffModel.prototype.config=function()
{
  return {"a_field":{"a_staff":{"get":{"result":true}},"a_uid_staff":{"get":{"result":true}},"k_business":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Schedule_ScheduleList_StaffApp_Staff_ScheduleListStaffModel.instanceGet
 * @param {string} k_business Business key.
 * @param {string} uid User key.
 * @returns {Wl_Schedule_ScheduleList_StaffApp_Staff_ScheduleListStaffModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets information about staff members of business.
 *
 * Returns the staff members configured to appear on the business schedule, identified by
 * `uid_staff`. For applications in the `APPS_USE_OLD_K_STAFF` allow-list, the legacy `k_staff`
 * list is also returned for backward compatibility.
 *
 * @function
 * @name Wl_Schedule_ScheduleList_StaffApp_Staff_ScheduleListStaffModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
