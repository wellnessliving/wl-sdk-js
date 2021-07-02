/**
 * The report configuration API.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Report_ReportConfigModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business,cid_report,k_report_save";

  /**
   * Hidden feature button list.
   * Each element is a constant of {@link ReportContainerControlButtonSid}.
   *
   * May be an empty array. Order of items is relevant.
   * <tt>null</tt> if configuration is not save.
   *
   * @get result
   * @post post
   * @type {?number[]}
   */
  this.a_button_hidden = null;

  /**
   * Visible feature button list.
   * Each element is a constant of {@link ReportContainerControlButtonSid}.
   *
   * May be an empty array. Order of items is relevant.
   * <tt>null</tt> if configuration is not save.
   *
   * @get result
   * @post post
   * @type {?number[]}
   */
  this.a_button_visible = null;

  /**
   * Hidden cell list.
   * See {@link ReportGeneratorConfig::$a_cell_hidden}.
   *
   * @get result
   * @post post
   * @type {string[]}
   */
  this.a_cell_hidden = undefined;

  /**
   * Visible cell list. Order of items is relevant.
   * See {@link ReportGeneratorConfig::$a_cell_visible}.
   *
   * @get result
   * @post post
   * @type {string[]}
   */
  this.a_cell_visible = undefined;

  /**
   * The report CID. One of the {@link ReportGeneratorReportAbstract} subclasses.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.cid_report = undefined;

  /**
   * Selected report date range.
   * One of the {@link \RsReportDateSid} constants.
   *
   * <tt>null</tt> if configuration is not save.
   *
   * @get result
   * @post post
   * @type {?number}
   */
  this.id_report_date = null;

  /**
   * Business key. Primary key in the {@link \RsBusinessSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * The key of the saved report. Primary key in the {@link \RsReportSaveSql} table.
   *
   * @get get
   * @post get
   * @type {?string}
   */
  this.k_report_save = null;

  /**
   * Whether to show extended client details in the client info cell.
   *
   * <tt>null</tt> if report doesn't have a client cell.
   *
   * @get result
   * @post post
   * @type {?boolean}
   */
  this.show_client_details = null;

  /**
   * User's UID key. Primary key in the {@link \PassportLoginSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Report_ReportConfigModel);

/**
 * @inheritDoc
 */
Wl_Business_Report_ReportConfigModel.prototype.config=function()
{
  return {"a_field": {"a_button_hidden": {"get": {"result": true},"post": {"post": true}},"a_button_visible": {"get": {"result": true},"post": {"post": true}},"a_cell_hidden": {"get": {"result": true},"post": {"post": true}},"a_cell_visible": {"get": {"result": true},"post": {"post": true}},"cid_report": {"get": {"get": true},"post": {"get": true}},"id_report_date": {"get": {"result": true},"post": {"post": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_report_save": {"get": {"get": true},"post": {"get": true}},"show_client_details": {"get": {"result": true},"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Business_Report_ReportConfigModel.instanceGet
 * @param {string} uid User's UID key. Primary key in the {@link \PassportLoginSql} table.
 * @param {string} k_business Business key. Primary key in the {@link \RsBusinessSql} table.
 * @param {number} cid_report The report CID. One of the {@link ReportGeneratorReportAbstract} subclasses.
 * @param {?string} k_report_save The key of the saved report. Primary key in the {@link \RsReportSaveSql} table.
 * @returns {Wl_Business_Report_ReportConfigModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */