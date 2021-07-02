/**
 * Information about saved templates of schedule filters.
 *
 * This model is generated automatically based on API.
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
   * @property {string[]} a_class Classes. Primary keys in {@link \RsClassSql} table.
   * @property {string[]} a_event Events. Primary keys in {@link \RsClassSql} table.
   * @property {string[]} a_location Locations. Primary keys in {@link \RsLocationSql} table.
   * @property {string[]} a_resource Assets. Primary keys in {@link \RsResourceSql} table.
   * @property {string[]} a_service Appointment services. Primary keys in {@link \RsServiceSql} table.
   * @property {string[]} a_staff Staff members. Primary keys in {@link \RsStaffSql} table.
   * @property {number[]} a_type Service types. Constants of {@link RsServiceSid} class (excluding {@link RsServiceSid::VISIT}).
   * @property {boolean} is_staff_available <tt>true</tt> to show only available staff members; <tt>false</tt> to show any staff member.
   */
  /**
   * @typedef {{}} Wl_Schedule_ScheduleList_StaffApp_Filter_ScheduleListFilterModel_a_filter
   * @property {Wl_Schedule_ScheduleList_StaffApp_Filter_ScheduleListFilterModel_a_filter_a_config} a_config Configurations of filter chapters. If configuration of filter chapter is empty, there are no limits from this chapter.
   * <dl>
   *   <dt>
   *     string[] <tt>a_class</tt>
   *   </dt>
   *   <dd>
   *     Classes. Primary keys in {@link \RsClassSql} table.
   *   </dd>
   *   <dt>
   *     string[] <tt>a_event</tt>
   *   </dt>
   *   <dd>
   *     Events. Primary keys in {@link \RsClassSql} table.
   *   </dd>
   *   <dt>
   *     string[] <tt>a_location</tt>
   *   </dt>
   *   <dd>
   *     Locations. Primary keys in {@link \RsLocationSql} table.
   *   </dd>
   *   <dt>
   *     string[] <tt>a_resource</tt>
   *   </dt>
   *   <dd>
   *     Assets. Primary keys in {@link \RsResourceSql} table.
   *   </dd>
   *   <dt>
   *     string[] <tt>a_service</tt>
   *   </dt>
   *   <dd>
   *     Appointment services. Primary keys in {@link \RsServiceSql} table.
   *   </dd>
   *   <dt>
   *     string[] <tt>a_staff</tt>
   *   </dt>
   *   <dd>
   *     Staff members. Primary keys in {@link \RsStaffSql} table.
   *   </dd>
   *   <dt>
   *     int[] <tt>a_type</tt>
   *   </dt>
   *   <dd>
   *     Service types. Constants of {@link RsServiceSid} class (excluding {@link RsServiceSid::VISIT}).
   *   </dd>
   *   <dt>
   *     bool <tt>is_staff_available</tt>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> to show only available staff members; <tt>false</tt> to show any staff member.
   *   </dd>
   * </dl>
   * @property {boolean} can_edit <tt>true</tt> - filter may be changed by given user; <tt>false</tt> - otherwise.
   * @property {boolean} is_default <tt>true</tt> - filter is default for given user; <tt>false</tt> - otherwise.
   * @property {boolean} is_public <tt>true</tt> - filter is public; <tt>false</tt> - filter is private.
   * @property {string} s_title Filter title.
   */

  /**
   * List of schedule filters. Keys - filters IDs; primary key in {@link \RsScheduleConfigSql} table. Values - sub arrays with next keys:
   * <dl>
   *   <dt>
   *     array <var>a_config</var>
   *   </dt>
   *   <dd>
   *     Configurations of filter chapters. If configuration of filter chapter is empty, there are no limits from this chapter.
   *     <dl>
   *       <dt>
   *         string[] <var>a_class</var>
   *       </dt>
   *       <dd>
   *         Classes. Primary keys in {@link \RsClassSql} table.
   *       </dd>
   *       <dt>
   *         string[] <var>a_event</var>
   *       </dt>
   *       <dd>
   *         Events. Primary keys in {@link \RsClassSql} table.
   *       </dd>
   *       <dt>
   *         string[] <var>a_location</var>
   *       </dt>
   *       <dd>
   *         Locations. Primary keys in {@link \RsLocationSql} table.
   *       </dd>
   *       <dt>
   *         string[] <var>a_resource</var>
   *       </dt>
   *       <dd>
   *         Assets. Primary keys in {@link \RsResourceSql} table.
   *       </dd>
   *       <dt>
   *         string[] <var>a_service</var>
   *       </dt>
   *       <dd>
   *         Appointment services. Primary keys in {@link \RsServiceSql} table.
   *       </dd>
   *       <dt>
   *         string[] <var>a_staff</var>
   *       </dt>
   *       <dd>
   *         Staff members. Primary keys in {@link \RsStaffSql} table.
   *       </dd>
   *       <dt>
   *         int[] <var>a_type</var>
   *       </dt>
   *       <dd>
   *         Service types. Constants of {@link RsServiceSid} class (excluding {@link RsServiceSid::VISIT}).
   *       </dd>
   *       <dt>
   *         bool <var>is_staff_available</var>
   *       </dt>
   *       <dd>
   *         <tt>true</tt> to show only available staff members; <tt>false</tt> to show any staff member.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     bool <var>can_edit</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - filter may be changed by given user; <tt>false</tt> - otherwise.
   *   </dd>
   *   <dt>
   *     bool <var>is_default</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - filter is default for given user; <tt>false</tt> - otherwise.
   *   </dd>
   *   <dt>
   *     bool <var>is_public</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - filter is public; <tt>false</tt> - filter is private.
   *   </dd>
   *   <dt>
   *     string <var>s_title</var>
   *   </dt>
   *   <dd>
   *     Filter title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Schedule_ScheduleList_StaffApp_Filter_ScheduleListFilterModel_a_filter}
   */
  this.a_filter = undefined;

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

WlSdk_ModelAbstract.extend(Wl_Schedule_ScheduleList_StaffApp_Filter_ScheduleListFilterModel);

/**
 * @inheritDoc
 */
Wl_Schedule_ScheduleList_StaffApp_Filter_ScheduleListFilterModel.prototype.config=function()
{
  return {"a_field": {"a_filter": {"get": {"result": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}},"uid": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Schedule_ScheduleList_StaffApp_Filter_ScheduleListFilterModel.instanceGet
 * @param {string} k_business Business key. Primary key in {@link RsBusinessSql} table.
 * @param {string} uid User key. Primary key in {@link PassportLoginSql} table.
 * @returns {Wl_Schedule_ScheduleList_StaffApp_Filter_ScheduleListFilterModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */