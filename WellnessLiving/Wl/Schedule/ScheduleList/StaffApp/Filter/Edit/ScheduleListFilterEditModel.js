/**
 * Deletes schedule filter.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_ScheduleList_StaffApp_Filter_Edit_ScheduleListFilterEditModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Schedule_ScheduleList_StaffApp_Filter_Edit_ScheduleListFilterEditModel_a_config
   * @property {string[]} a_class List of classes which must be selected in filter.
   * @property {string[]} a_event List of events which must be selected in filter.
   * @property {string[]} a_location List of locations which must be selected in filter.
   * @property {string[]} a_resource List of assets which must be selected in filter.
   * @property {string[]} a_service List of appointment services which must be selected in filter.
   * @property {string[]} a_staff List of staff members which must be selected in filter.
   * @property {number[]} a_type List of service types which must be selected in filter. Constants of {@link RsServiceSid} class.
   * @property {boolean} is_staff_all `true` to show all staff members. `false` to show only staff members from `a_staff` field.
   * @property {boolean} is_staff_available `true` to show only available staff members; `false` otherwise.
   */

  /**
   * Filter configuration:
   *
   * @post post
   * @type {Wl_Schedule_ScheduleList_StaffApp_Filter_Edit_ScheduleListFilterEditModel_a_config}
   */
  this.a_config = undefined;

  /**
   * `true` - filter must be default; `false` - otherwise.
   *
   * @post post
   * @type {boolean}
   */
  this.is_default = false;

  /**
   * `true` - filter must be public; `false` - otherwise.
   *
   * @post post
   * @type {boolean}
   */
  this.is_public = false;

  /**
   * JSON version of {@link Wl_Schedule_ScheduleList_StaffApp_Filter_Edit_ScheduleListFilterEditModel.a_config}.
   *
   * @post post
   * @type {string}
   */
  this.json_config = "";

  /**
   * Business key.
   *
   * @delete get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * ID of saved filter.
   * `0` to create new filter.
   *
   * @delete get
   * @post get
   * @type {string}
   */
  this.k_schedule_config = "";

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
   * @post get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_ScheduleList_StaffApp_Filter_Edit_ScheduleListFilterEditModel);

/**
 * @inheritDoc
 */
Wl_Schedule_ScheduleList_StaffApp_Filter_Edit_ScheduleListFilterEditModel.prototype.config=function()
{
  return {"a_field":{"a_config":{"post":{"post":true}},"is_default":{"post":{"post":true}},"is_public":{"post":{"post":true}},"json_config":{"post":{"post":true}},"k_business":{"delete":{"get":true},"post":{"get":true}},"k_schedule_config":{"delete":{"get":true},"post":{"get":true}},"text_title":{"post":{"post":true}},"uid":{"delete":{"get":true},"post":{"get":true}}}};
};

/**
 * Deletes schedule filter.
 *
 * Validates that the given filter exists and that the current user is allowed to change it,
 * either because the user created the filter or has staff-edit privilege for the business,
 * then removes the filter inside a transaction.
 *
 * @function
 * @name Wl_Schedule_ScheduleList_StaffApp_Filter_Edit_ScheduleListFilterEditModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Saves new configurations for schedule filter.
 *
 * Validates the filter title and, for an existing filter, that the current user is allowed to
 * change it. Compares the submitted class, event, location, resource, staff, and service type
 * selections against the full lists available to the user in this business, builds the
 * corresponding schedule config data, and saves it inside a transaction. Also updates the
 * filter's default flag for the user and logs the change.
 *
 * @function
 * @name Wl_Schedule_ScheduleList_StaffApp_Filter_Edit_ScheduleListFilterEditModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
