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
   * Report ID (one of {@link RsReportSid} constant for old generation reports) or CID report controller
   *   (subclass of {@link Wl\Report\View\ReportViewControllerAbstract} for new generation reports).
   *
   * @get get
   * @type {number}
   */
  this.id_report = undefined;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Report save key.
   *
   * @get get
   * @type {string}
   */
  this.k_report_save = undefined;

  /**
   * User key.
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
 * @param {string} k_business Business key.
 * @param {string} uid User key.
 * @param {number} id_report Report ID (one of {@link RsReportSid} constant for old generation reports) or CID report controller  (subclass of {@link Wl\Report\View\ReportViewControllerAbstract} for new generation reports).
 * @param {string} k_report_save Report save key.
 * @returns {Wl_Report_Dashboard_Menu_MenuReportModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */