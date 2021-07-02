/**
 * Entry point to get data from certain report.
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
   * Data of required report. See {@link \RsReport::apiData()} for details.
   *
   * @get result
   * @type {{}}
   */
  this.a_data = undefined;

  /**
   * Page number. Starts from zero!
   *
   * @get get
   * @type {number}
   */
  this.i_page = 0;

  /**
   * Report ID. One of {@link \RsReportSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_report = 0;

  /**
   * Report group ID. One of {@link \RsReportGroupSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_report_group = 0;

  /**
   * Report view ID. One of {@link \RsReportChartViewSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_report_view = 0;

  /**
   * ID of business for which report must be generated. Primary key in {@link \RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Filter settings in encoded format. May be decoded by {@link \Core\Tool\UrlEncode\UrlDecode::decode()}.
   *
   * @get get
   * @type {string}
   */
  this.s_filter = "";

  /**
   * Way for sorting report data.
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
 * @param {number} i_page Page number. Starts from zero!
 * @param {number} id_report Report ID. One of {@link \RsReportSid} constants.
 * @param {number} id_report_group Report group ID. One of {@link \RsReportGroupSid} constants.
 * @param {number} id_report_view Report view ID. One of {@link \RsReportChartViewSid} constants.
 * @param {string} k_business ID of business for which report must be generated. Primary key in {@link \RsBusinessSql} table.
 * @param {string} s_filter Filter settings in encoded format. May be decoded by {@link \Core\Tool\UrlEncode\UrlDecode::decode()}.
 * @param {string} s_sort Way for sorting report data.
 * @returns {Wl_Report_DataModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */