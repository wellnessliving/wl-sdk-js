/**
 * An endpoint that returns information from a WellnessLiving report.
 *
 * There are two All Clients Reports that can be used to find user IDs. The results from each report can be filtered by different
 * fields. The two reports are similar, but not exactly the same. The `LOGIN_LIST` (ID 22) report requires filters to be set to
 * retrieve information. The `LOGIN_LIST_ALL` (ID 33) doesn’t require any filters to be set when specifying a date range.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Report_DataModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "i_page,id_report,id_report_group,id_report_view,k_business,s_filter,s_sort";

  /**
   * The report contents.
   *
   * Contents of this array can vary based on the report that's loaded.
   *
   * @get result
   * @type {{}}
   */
  this.a_data = undefined;

  /**
   * The page of results to show, starting at zero. The API will return 256 results per page.
   *
   * @get get
   * @type {number}
   */
  this.i_page = 0;

  /**
   * The report ID. One of the {@link RsReportSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_report = 0;

  /**
   * The report group ID. One of the {@link RsReportGroupSid} constants that describes the time
   * period (day, week, month, or year) for the report to cover.
   *
   * @get get
   * @type {number}
   */
  this.id_report_group = 0;

  /**
   * The report view ID. One of the {@link RsReportChartViewSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_report_view = 0;

  /**
   * The key of business for which the report must be generated.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Filter settings in encoded format. May be decoded by {@link Core\Tool\UrlEncode\UrlDecode::decode()}.
   *
   * @get get
   * @type {string}
   */
  this.s_filter = "";

  /**
   * The field to use for sorting report data.
   *
   * @get get
   * @type {string}
   */
  this.s_sort = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Report_DataModel);

/**
 * @inheritDoc
 */
Wl_Report_DataModel.prototype.config=function()
{
  return {"a_field": {"a_data": {"get": {"result": true}},"i_page": {"get": {"get": true}},"id_report": {"get": {"get": true}},"id_report_group": {"get": {"get": true}},"id_report_view": {"get": {"get": true}},"k_business": {"get": {"get": true}},"s_filter": {"get": {"get": true}},"s_sort": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Report_DataModel.instanceGet
 * @param {number} i_page The page of results to show, starting at zero. The API will return 256 results per page.
 * @param {number} id_report The report ID. One of the {@link RsReportSid} constants.
 * @param {number} id_report_group The report group ID. One of the {@link RsReportGroupSid} constants that describes the time period (day, week, month, or year) for the report to cover.
 * @param {number} id_report_view The report view ID. One of the {@link RsReportChartViewSid} constants.
 * @param {string} k_business The key of business for which the report must be generated.
 * @param {string} s_filter Filter settings in encoded format. May be decoded by {@link Core\Tool\UrlEncode\UrlDecode::decode()}.
 * @param {string} s_sort The field to use for sorting report data.
 * @returns {Wl_Report_DataModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */