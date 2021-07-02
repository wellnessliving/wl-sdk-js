/**
 * Processes requests of the report customization.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Report_Customize_BusinessReportCustomizeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business,k_report_save,id_report,id_report_page";

  /**
   * Button config.
   *
   * @get result
   * @post post
   * @type {{}}
   */
  this.a_button = undefined;

  /**
   * @typedef {{}} Wl_Business_Report_Customize_BusinessReportCustomizeModel_a_column
   * @property {string} a_hide Column name list of the hidden columns and available in the report. See {@link \RsReport::info()}.
   * @property {string} a_visible Column name list of the visible columns and available in the report. See {@link \RsReport::info()}.
   */

  /**
   * Config of the report columns.
   * <dl>
   *   <dt>
   *     string <var>a_hide</var>
   *   </dt>
   *   <dd>
   *     Column name list of the hidden columns and available in the report. See {@link \RsReport::info()}.
   *   </dd>
   *   <dt>
   *     string <var>a_visible</var>
   *   </dt>
   *   <dd>
   *     Column name list of the visible columns and available in the report. See {@link \RsReport::info()}.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Business_Report_Customize_BusinessReportCustomizeModel_a_column}
   */
  this.a_column = undefined;

  /**
   * Selected columns of the report.
   *
   * @post post
   * @type {string[]}
   */
  this.a_column_selected = undefined;

  /**
   * @typedef {{}} Wl_Business_Report_Customize_BusinessReportCustomizeModel_a_report_date
   * @property {boolean} is_select Whether the report date is selected.
   * @property {string} sid_report_date Report date SID. One of the {@link \RsReportDateSid} constants.
   * @property {string} text_title Title of the report date.
   */

  /**
   * List of the available report dates.
   * <dl>
   *   <dt>
   *     bool <var>is_select</var>
   *   </dt>
   *   <dd>
   *     Whether the report date is selected.
   *   </dd>
   *   <dt>
   *     string <var>sid_report_date</var>
   *   </dt>
   *   <dd>
   *     Report date SID. One of the {@link \RsReportDateSid} constants.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     Title of the report date.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Business_Report_Customize_BusinessReportCustomizeModel_a_report_date}
   */
  this.a_report_date = undefined;

  /**
   * Whether that the report has a client column.
   *
   * @get result
   * @type {boolean}
   */
  this.has_client = undefined;

  /**
   * Report ID. One of the {@link \RsReportSid} constants.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.id_report = undefined;

  /**
   * Report page ID. One of the {@link \RsReportPageSid} constants.
   *
   * <tt>null</tt> if report is rendered in a single report collection.
   *
   * @get get
   * @type {number}
   */
  this.id_report_page = undefined;

  /**
   * Business key. Primary key in the {@link \RsBusinessSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Report save key. Primary key in the {@link \RsReportSaveSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_report_save = undefined;

  /**
   * Whether that client details information should be shown.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.show_client_details = undefined;

  /**
   * Selected report date SID.
   *
   * @post post
   * @type {string}
   */
  this.sid_report_date = undefined;

  /**
   * User key. Primary key in the {@link \PassportLoginSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Report_Customize_BusinessReportCustomizeModel);

/**
 * @inheritDoc
 */
Wl_Business_Report_Customize_BusinessReportCustomizeModel.prototype.config=function()
{
  return {"a_field": {"a_button": {"get": {"result": true},"post": {"post": true}},"a_column": {"get": {"result": true}},"a_column_selected": {"post": {"post": true}},"a_report_date": {"get": {"result": true}},"has_client": {"get": {"result": true}},"id_report": {"get": {"get": true},"post": {"get": true}},"id_report_page": {"get": {"get": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_report_save": {"get": {"get": true},"post": {"get": true}},"show_client_details": {"get": {"result": true},"post": {"post": true}},"sid_report_date": {"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Business_Report_Customize_BusinessReportCustomizeModel.instanceGet
 * @param {string} uid User key. Primary key in the {@link \PassportLoginSql} table.
 * @param {string} k_business Business key. Primary key in the {@link \RsBusinessSql} table.
 * @param {string} k_report_save Report save key. Primary key in the {@link \RsReportSaveSql} table.
 * @param {number} id_report Report ID. One of the {@link \RsReportSid} constants.
 * @param {number} id_report_page Report page ID. One of the {@link \RsReportPageSid} constants. <tt>null</tt> if report is rendered in a single report collection.
 * @returns {Wl_Business_Report_Customize_BusinessReportCustomizeModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */