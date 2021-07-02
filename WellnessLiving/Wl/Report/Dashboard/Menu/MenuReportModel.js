/**
 * List of dashboards for menu in report.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Report_Dashboard_Menu_MenuReportModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid,id_report,k_report_save";

  /**
   * List of dashboards for report.
   *
   * @get result
   * @type {{}}
   */
  this.a_dashboard = undefined;

  /**
   * Report ID (one of {@link \RsreportSid} constant for old generation reports) or CID report controller
   *   (subclass of {@link ReportViewControllerAbstract} for new generation reports).
   *
   * @get get
   * @type {number}
   */
  this.id_report = undefined;

  /**
   * Business key.
   * Primary key in the {@link \RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Report save key. Primary key in {@link \RsReportSaveSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_report_save = undefined;

  /**
   * User key.
   * Primary key in the {@link \PassportLoginSql} table.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Report_Dashboard_Menu_MenuReportModel);

/**
 * @inheritDoc
 */
Wl_Report_Dashboard_Menu_MenuReportModel.prototype.config=function()
{
  return {"a_field": {"a_dashboard": {"get": {"result": true}},"id_report": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_report_save": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Report_Dashboard_Menu_MenuReportModel.instanceGet
 * @param {string} k_business Business key. Primary key in the {@link \RsBusinessSql} table.
 * @param {string} uid User key. Primary key in the {@link \PassportLoginSql} table.
 * @param {number} id_report Report ID (one of {@link \RsreportSid} constant for old generation reports) or CID report controller  (subclass of {@link ReportViewControllerAbstract} for new generation reports).
 * @param {string} k_report_save Report save key. Primary key in {@link \RsReportSaveSql} table.
 * @returns {Wl_Report_Dashboard_Menu_MenuReportModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */