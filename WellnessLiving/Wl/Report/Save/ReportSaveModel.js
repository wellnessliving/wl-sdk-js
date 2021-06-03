/**
 * API point to manipulate of the saving reports.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Report_Save_ReportSaveModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_report_save";

  /**
   * Filter raw data of the saved report.
   *
   * @get result
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
   * Report category of the saved report.
   *
   * One of the {@link \RsReportCategorySid} constants.
   *
   * @get result
   * @post post
   * @put post
   * @type {number}
   */
  this.id_report_category = undefined;

  /**
   * Business key of the saved report. Primary key in the {@link \RsBusinessSql} table.
   *
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Report save key. Primary key in the {@link \RsReportSaveSql} table.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_report_save = undefined;

  /**
   * Description of the saved report.
   *
   * @get result
   * @post post
   * @put post
   * @type {string}
   */
  this.text_description = undefined;

  /**
   * Title of the saved report.
   *
   * @get result
   * @post post
   * @put post
   * @type {string}
   */
  this.text_title = undefined;

  /**
   * UID user's key of the actor. Primary key in the {@link \PassportLoginSql} table.
   *
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.uid_actor = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Report_Save_ReportSaveModel);

/**
 * @inheritDoc
 */
Wl_Report_Save_ReportSaveModel.prototype.config=function()
{
  return {"a_field": {"a_filter": {"get": {"result": true},"post": {"post": true},"put": {"post": true}},"a_settings": {"post": {"post": true},"put": {"post": true}},"cid_controller": {"post": {"post": true},"put": {"post": true}},"id_report_category": {"get": {"result": true},"post": {"post": true},"put": {"post": true}},"k_business": {"get": {"get": true},"post": {"get": true},"put": {"get": true}},"k_report_save": {"get": {"get": true},"put": {"get": true}},"text_description": {"get": {"result": true},"post": {"post": true},"put": {"post": true}},"text_title": {"get": {"result": true},"post": {"post": true},"put": {"post": true}},"uid_actor": {"get": {"get": true},"post": {"get": true},"put": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Report_Save_ReportSaveModel.instanceGet
 * @param {string} k_report_save Report save key. Primary key in the {@link \RsReportSaveSql} table.
 * @returns {Wl_Report_Save_ReportSaveModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */