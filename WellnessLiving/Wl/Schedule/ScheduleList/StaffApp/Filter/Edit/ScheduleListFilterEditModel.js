/**
 * Entry point to create/change saved schedule filters.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_ScheduleList_StaffApp_Filter_Edit_ScheduleListFilterEditModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Schedule_ScheduleList_StaffApp_Filter_Edit_ScheduleListFilterEditModel_a_config
   * @property {*} a_class List of classes which must be selected in filter.
   * @property {*} a_event List of events which must be selected in filter.
   * @property {*} a_location List of locations which must be selected in filter.
   * @property {*} a_resource List of assets which must be selected in filter.
   * @property {*} a_service List of appointment services which must be selected in filter.
   * @property {*} a_staff List of staff members which must be selected in filter.
   * @property {*} a_type List of service types which must be selected in filter. Constants of {@link RsServiceSid} class.
   * @property {*} is_staff_all <tt>true</tt> to show all staff members.
   * <tt>false</tt> to show only staff members from <tt>a_staff</tt> field.
   * @property {*} is_staff_available <tt>true</tt> to show only available staff members; <tt>false</tt> otherwise.
   */

  /**
   * Filter configuration:
   * <dl>
   *   <dt>
   *     string[] [<var>a_class</var>]
   *   </dt>
   *   <dd>
   *     List of classes which must be selected in filter.
   *   </dd>
   *   <dt>
   *     string[] [<var>a_event</var>]
   *   </dt>
   *   <dd>
   *     List of events which must be selected in filter.
   *   </dd>
   *   <dt>
   *     string[] [<var>a_location</var>]
   *   </dt>
   *   <dd>
   *     List of locations which must be selected in filter.
   *   </dd>
   *   <dt>
   *     string[] [<var>a_resource</var>]
   *   </dt>
   *   <dd>
   *     List of assets which must be selected in filter.
   *   </dd>
   *   <dt>
   *     string[] [<var>a_service</var>]
   *   </dt>
   *   <dd>
   *     List of appointment services which must be selected in filter.
   *   </dd>
   *   <dt>
   *     string[] [<var>a_staff</var>]
   *   </dt>
   *   <dd>
   *     List of staff members which must be selected in filter.
   *   </dd>
   *   <dt>
   *     number[] [<var>a_type</var>]
   *   </dt>
   *   <dd>
   *     List of service types which must be selected in filter. Constants of {@link RsServiceSid} class.
   *   </dd>
   *   <dt>
   *     bool [<var>is_staff_all</var>]
   *   </dt>
   *   <dd>
   *     <tt>true</tt> to show all staff members.
   *     <tt>false</tt> to show only staff members from <var>a_staff</var> field.
   *   </dd>
   *   <dt>
   *     bool [<var>is_staff_available</var>]
   *   </dt>
   *   <dd>
   *     <tt>true</tt> to show only available staff members; <tt>false</tt> otherwise.
   *   </dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Schedule_ScheduleList_StaffApp_Filter_Edit_ScheduleListFilterEditModel_a_config}
   */
  this.a_config = [];

  /**
   * <tt>true</tt> - filter must be default; <tt>false</tt> - otherwise.
   *
   * @post post
   * @type {boolean}
   */
  this.is_default = false;

  /**
   * <tt>true</tt> - filter must be public; <tt>false</tt> - otherwise.
   *
   * @post post
   * @type {boolean}
   */
  this.is_public = false;

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
   * ID of saved filter.
   * <tt>0</tt> to create new filter.
   *
   * @delete get
   * @post get
   * @type {string}
   */
  this.k_schedule_config = "0";

  /**
   * Filter title.
   *
   * @post post
   * @type {string}
   */
  this.text_title = "";

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

WlSdk_ModelAbstract.extend(Wl_Schedule_ScheduleList_StaffApp_Filter_Edit_ScheduleListFilterEditModel);

/**
 * @inheritDoc
 */
Wl_Schedule_ScheduleList_StaffApp_Filter_Edit_ScheduleListFilterEditModel.prototype.config=function()
{
  return {"a_field": {"a_config": {"post": {"post": true}},"is_default": {"post": {"post": true}},"is_public": {"post": {"post": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}},"k_schedule_config": {"delete": {"get": true},"post": {"get": true}},"text_title": {"post": {"post": true}},"uid": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}}}};
};