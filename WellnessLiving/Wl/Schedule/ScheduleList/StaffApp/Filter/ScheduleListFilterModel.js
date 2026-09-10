/**
 * Gets list of schedule filters available for given user.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_ScheduleList_StaffApp_Filter_ScheduleListFilterModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * @typedef {{}} Wl_Schedule_ScheduleList_StaffApp_Filter_ScheduleListFilterModel_a_filter_a_config
   * @property {string[]} a_class Classes. Primary keys in  table.
   * @property {string[]} a_event Events. Primary keys in  table.
   * @property {string[]} a_location Locations. Primary keys in  table.
   * @property {string[]} a_resource Assets. Primary keys in  table.
   * @property {string[]} a_service Appointment services. Primary keys in  table.
   * @property {string[]} a_staff Staff members. Primary keys in  table.
   * @property {number[]} a_type Service types. Constants of {@link RsServiceSid} class (excluding {@link RsServiceSid}).
   * @property {boolean} is_staff_all `true` to show all staff members. `false` to show only staff members from `a_staff` field.
   * @property {boolean} is_staff_available `true` to show only available staff members; `false` to show any staff member.
   */

  /**
   * @typedef {{}} Wl_Schedule_ScheduleList_StaffApp_Filter_ScheduleListFilterModel_a_filter
   * @property {Wl_Schedule_ScheduleList_StaffApp_Filter_ScheduleListFilterModel_a_filter_a_config} a_config Configurations of filter chapters. If configuration of filter chapter is empty, there are no limits from this chapter.
   * @property {boolean} can_edit `true` - filter may be changed by given user; `false` - otherwise.
   * @property {boolean} is_default `true` - filter is default for given user; `false` - otherwise.
   * @property {boolean} is_public `true` - filter is public; `false` - filter is private.
   * @property {string} s_title Filter title.
   */

  /**
   * List of schedule filters. Keys - filters IDs; primary key in the `rs_schedule_config` table. Values - sub arrays with next keys:
   *
   * @get result
   * @type {Wl_Schedule_ScheduleList_StaffApp_Filter_ScheduleListFilterModel_a_filter}
   */
  this.a_filter = undefined;

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

WlSdk_ModelAbstract.extend(Wl_Schedule_ScheduleList_StaffApp_Filter_ScheduleListFilterModel);

/**
 * @inheritDoc
 */
Wl_Schedule_ScheduleList_StaffApp_Filter_ScheduleListFilterModel.prototype.config=function()
{
  return {"a_field":{"a_filter":{"get":{"result":true}},"k_business":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Schedule_ScheduleList_StaffApp_Filter_ScheduleListFilterModel.instanceGet
 * @param {string} k_business Business key.
 * @param {string} uid User key.
 * @returns {Wl_Schedule_ScheduleList_StaffApp_Filter_ScheduleListFilterModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets list of schedule filters available for given user.
 *
 * Returns the user's own filters together with public filters saved for the business, skipping
 * filters restricted to locations the user cannot access. Filter configurations are stored in
 * "mirror" format (deselected elements); this method converts them into the actual list of
 * selected classes, events, locations, assets, services, and staff members expected by the client.
 *
 * @function
 * @name Wl_Schedule_ScheduleList_StaffApp_Filter_ScheduleListFilterModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
