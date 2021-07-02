/**
 * Api for manage dashboard.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Report_Dashboard_Manage_DashboardManageModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid,k_report_dashboard";

  /**
   * @typedef {{}} Wl_Report_Dashboard_Manage_DashboardManageModel_a_staff_role
   * @property {number} id_privilege_role ID of privilege role. Constant from {@link \RsPrivilegeRoleSid}.
   * @property {string} k_business_role Key of the business role. Primary key in {@link \RsBusinessRoleSql} table.
   */

  /**
   * Selected staff roles of the dashboard.
   *
   * <tt>null</tt> if list of staff roles doesn't need to be updated.
   *
   * <dl>
   *   <dt>int <var>id_privilege_role</var></dt>
   *   <dd>ID of privilege role. Constant from {@link \RsPrivilegeRoleSid}.</dd>
   *   <dt>string <var>k_business_role</var></dt>
   *   <dd>Key of the business role. Primary key in {@link \RsBusinessRoleSql} table.</dd>
   * </dl>
   *
   * @get result
   * @post post
   * @put post
   * @type {?Wl_Report_Dashboard_Manage_DashboardManageModel_a_staff_role[]}
   */
  this.a_staff_role = null;

  /**
   * List of widgets that are displayed on the dashboard.
   *
   * <tt>null</tt> if list of widgets doesn't need to be updated.
   *
   * Structure of each item: <dl>
   *    <dt>int <var>i_report_widget</var></dt>
   *    <dd>
   *      Widget content identifier. Depending on <var>id_report_widget</var> may be one of {@link \RsReportSid},
   *      {@link \RsReportPageSid}, or primary key in {@link \RsReportSaveSql} table.
   *    </dd>
   *    <dt>int <var>i_sort</var></dt>
   *    <dd>Widget order on the dashboard.</dd>
   *    <dt>int <var>id_report_widget</var></dt>
   *    <dd>Widget type identifier. One of {@link \RsReportWidgetSid}.</dd>
   * </dl>
   *
   * @get result
   * @post post
   * @put post
   * @type {?number[][]}
   */
  this.a_widget_list = null;

  /**
   * Whether user can change share mode.
   *
   * @get result
   * @type {boolean}
   */
  this.can_share = undefined;

  /**
   * Dashboard editing mode. One of {@link PanelModeSid} constants.
   *
   * @get get
   * @post get
   * @put get
   * @type {number}
   */
  this.id_mode = undefined;

  /**
   * Dashboard sharing mode. One of {@link ShareSid}.
   *
   * @get result
   * @post post
   * @put post
   * @type {number}
   */
  this.id_share = undefined;

  /**
   * Business key.
   * Primary key in the {@link \RsBusinessSql} table.
   *
   * @delete get
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Dashboard key to read or update. Primary key in {@link \RsReportDashboardSql} table.
   *
   * <tt>null</tt> if API is called to create a new dashboard.
   *
   * @delete get
   * @get get
   * @post get,result
   * @put get,result
   * @type {?string}
   */
  this.k_report_dashboard = null;

  /**
   * Name of dashboard owner.
   *
   * @get result
   * @type {string}
   */
  this.text_owner_name = undefined;

  /**
   * Dashboard title.
   *
   * <tt>null</tt> for read requests.
   *
   * @get result
   * @post post
   * @put post
   * @type {?string}
   */
  this.text_title = null;

  /**
   * Key of the currently logged-in user.
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

WlSdk_ModelAbstract.extend(Wl_Report_Dashboard_Manage_DashboardManageModel);

/**
 * @inheritDoc
 */
Wl_Report_Dashboard_Manage_DashboardManageModel.prototype.config=function()
{
  return {"a_field": {"a_staff_role": {"get": {"result": true},"post": {"post": true},"put": {"post": true}},"a_widget_list": {"get": {"result": true},"post": {"post": true},"put": {"post": true}},"can_share": {"get": {"result": true}},"id_mode": {"get": {"get": true},"post": {"get": true},"put": {"get": true}},"id_share": {"get": {"result": true},"post": {"post": true},"put": {"post": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}},"k_report_dashboard": {"delete": {"get": true},"get": {"get": true},"post": {"get": true,"result": true},"put": {"get": true,"result": true}},"text_owner_name": {"get": {"result": true}},"text_title": {"get": {"result": true},"post": {"post": true},"put": {"post": true}},"uid": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Report_Dashboard_Manage_DashboardManageModel.instanceGet
 * @param {string} k_business Business key. Primary key in the {@link \RsBusinessSql} table.
 * @param {string} uid Key of the currently logged-in user.
 * @param {?string} k_report_dashboard Dashboard key to read or update. Primary key in {@link \RsReportDashboardSql} table. <tt>null</tt> if API is called to create a new dashboard.
 * @returns {Wl_Report_Dashboard_Manage_DashboardManageModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */