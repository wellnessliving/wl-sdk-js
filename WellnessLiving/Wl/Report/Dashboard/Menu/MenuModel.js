/**
 * Dashboard menu API.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Report_Dashboard_Menu_MenuModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of the available dashboards.
   *
   * @get result
   * @type {{}}
   */
  this.a_dashboard = [];

  /**
   * Dashboard order list. Each key is primary key from {@link \RsReportDashboardSql} and value is sort position.
   *
   * @put post
   * @type {{}}
   */
  this.a_dashboard_order = [];

  /**
   * Business key.
   * Primary key in the {@link \RsBusinessSql} table.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  /**
   * User key.
   * Primary key in the {@link \PassportLoginSql} table.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Report_Dashboard_Menu_MenuModel);

/**
 * @inheritDoc
 */
Wl_Report_Dashboard_Menu_MenuModel.prototype.config=function()
{
  return {"a_field": {"a_dashboard": {"get": {"result": true}},"a_dashboard_order": {"put": {"post": true}},"k_business": {"get": {"get": true},"put": {"get": true}},"uid": {"get": {"get": true},"put": {"get": true}}}};
};