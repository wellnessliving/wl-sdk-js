/**
 * An endpoint that returns collection of the reports.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Report_PageDataModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of the reports contents. Key is the report id from {@link RsReportSid}, value is report contents.
   * Contents can vary based on the report that's loaded.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_data = undefined;

  /**
   * The page of results to show for each report in collection, starting at zero. The API will return 256 results per page.
   * Key is report id from {@link RsReportSid}, value is the page of results.
   *
   * @get get
   * @type {number[]}
   */
  this.a_page = [];

  /**
   * The report group ID. One of the {@link RsReportGroupSid} constants that describes the time
   * period (day, week, month, or year) for the report to cover.
   *
   * @get get
   * @type {number}
   */
  this.id_report_group = 0;

  /**
   *
   *
   * @get get
   * @type {*}
   */
  this.id_report_page = 0;

  /**
   * The report view ID. One of the {@link RsReportChartViewSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_report_view = 0;

  /**
   * The key of business for which the report collection must be generated.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Filter settings in encoded format.
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

WlSdk_ModelAbstract.extend(Wl_Report_PageDataModel);

/**
 * @inheritDoc
 */
Wl_Report_PageDataModel.prototype.config=function()
{
  return {"a_field": {"a_data": {"get": {"result": true}},"a_page": {"get": {"get": true}},"id_report_group": {"get": {"get": true}},"id_report_page": {"get": {"get": true}},"id_report_view": {"get": {"get": true}},"k_business": {"get": {"get": true}},"s_filter": {"get": {"get": true}},"s_sort": {"get": {"get": true}}}};
};