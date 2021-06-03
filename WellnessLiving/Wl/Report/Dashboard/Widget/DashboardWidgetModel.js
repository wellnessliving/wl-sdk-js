/**
 * Manages dashboard widgets.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Report_Dashboard_Widget_DashboardWidgetModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Whether dashboard widget is collapsed.
   *
   * @put post
   * @type {boolean}
   */
  this.is_collapsed = false;

  /**
   * Business key.
   *
   * Primary key in the {@link \RsBusinessSql} table.
   *
   * @delete get
   * @put get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Widget key.
   *
   * Primary key in {@link \RsReportDashboardWidgetSql} table.
   *
   * @delete get
   * @put get
   * @type {string}
   */
  this.k_report_dashboard_widget = undefined;

  /**
   * User key.
   *
   * Primary key in the {@link \PassportLoginSql} table.
   *
   * @delete get
   * @put get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Report_Dashboard_Widget_DashboardWidgetModel);

/**
 * @inheritDoc
 */
Wl_Report_Dashboard_Widget_DashboardWidgetModel.prototype.config=function()
{
  return {"a_field": {"is_collapsed": {"put": {"post": true}},"k_business": {"delete": {"get": true},"put": {"get": true}},"k_report_dashboard_widget": {"delete": {"get": true},"put": {"get": true}},"uid": {"delete": {"get": true},"put": {"get": true}}}};
};