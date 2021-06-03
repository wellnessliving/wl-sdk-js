/**
 * API point to duplicate of the saved reports.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Report_Save_ReportDuplicateModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Filter raw data of the duplicated report.
   *
   * @post post
   * @type {{}}
   */
  this.a_filter = undefined;

  /**
   * View widget settings raw data of the saved report.
   *
   * @post post
   * @type {{}}
   */
  this.a_settings = undefined;

  /**
   * Business key within which duplicate operation is performed. Primary key in the {@link \RsBusinessSql} table.
   *
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Report save key that should be duplicated. Primary key in the {@link \RsReportSaveSql} table.
   *
   * @post get,result
   * @type {string}
   */
  this.k_report_save = undefined;

  /**
   * UID user's key of the actor. Primary key in the {@link \PassportLoginSql} table.
   *
   * @post get
   * @type {string}
   */
  this.uid_actor = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Report_Save_ReportDuplicateModel);

/**
 * @inheritDoc
 */
Wl_Report_Save_ReportDuplicateModel.prototype.config=function()
{
  return {"a_field": {"a_filter": {"post": {"post": true}},"a_settings": {"post": {"post": true}},"k_business": {"post": {"get": true}},"k_report_save": {"post": {"get": true,"result": true}},"uid_actor": {"post": {"get": true}}}};
};