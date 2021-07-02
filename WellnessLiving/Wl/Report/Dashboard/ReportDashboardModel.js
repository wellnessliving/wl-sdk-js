/**
 * API point to manipulate of the adding reports to a dashboard.
 *
 * <b>Note</b>.
 * Old context and context from {@link ReportSaveApi} is used here because:
 *  - reason to use 'rs.report.save' context: messages should be the same in both implementations (old and new);
 *  - reason to use context from {@link ReportSaveApi}: saving and adding to a dashboard in the old implementation uses the same module.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Report_Dashboard_ReportDashboardModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Filter raw data of the report.
   *
   * @post post
   * @put post
   * @type {{}}
   */
  this.a_filter = undefined;

  /**
   * View widget settings raw data of the saved report.
   *
   * @post post
   * @put post
   * @type {{}}
   */
  this.a_settings = undefined;

  /**
   * CID of the controller class. Subclass of {@link ReportViewControllerAbstract}.
   *
   * @post post
   * @put post
   * @type {number}
   */
  this.cid_controller = undefined;

  /**
   * Business key of the report. Primary key in the {@link \RsBusinessSql} table.
   *
   * @post get
   * @put get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Report dashboard key to which report should be added. Primary key in the {@link \RsReportDashboardSql} table.
   *
   * @post post
   * @put post
   * @type {string}
   */
  this.k_report_dashboard = undefined;

  /**
   * Report save key. Primary key in the {@link \RsReportSaveSql} table.
   *
   * @put get
   * @type {string}
   */
  this.k_report_save = undefined;

  /**
   * Description of the report.
   *
   * @post post
   * @put post
   * @type {string}
   */
  this.text_description = undefined;

  /**
   * Title of the report.
   *
   * @post post
   * @put post
   * @type {string}
   */
  this.text_title = undefined;

  /**
   * UID user's key of the actor. Primary key in the {@link \PassportLoginSql} table.
   *
   * @post get
   * @put get
   * @type {string}
   */
  this.uid_actor = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Report_Dashboard_ReportDashboardModel);

/**
 * @inheritDoc
 */
Wl_Report_Dashboard_ReportDashboardModel.prototype.config=function()
{
  return {"a_field": {"a_filter": {"post": {"post": true},"put": {"post": true}},"a_settings": {"post": {"post": true},"put": {"post": true}},"cid_controller": {"post": {"post": true},"put": {"post": true}},"k_business": {"post": {"get": true},"put": {"get": true}},"k_report_dashboard": {"post": {"post": true},"put": {"post": true}},"k_report_save": {"put": {"get": true}},"text_description": {"post": {"post": true},"put": {"post": true}},"text_title": {"post": {"post": true},"put": {"post": true}},"uid_actor": {"post": {"get": true},"put": {"get": true}}}};
};