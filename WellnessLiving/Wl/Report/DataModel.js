/**
 * Gets data of required report.
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
   * @type {*[]}
   */
  this.a_data = undefined;

  /**
   * The report total.
   *
   * Contents of this array can vary based on the report that's loaded.
   *
   * @get result
   * @type {*[]}
   */
  this.a_total = undefined;

  /**
   * The page of results to show, starting at zero. The API will return 256 results per page.
   *
   * @get get
   * @type {number}
   */
  this.i_page = 0;

  /**
   * The report ID.
   * The following reports are currently available via the API:
   * <ul>
   *     <li>{@link RsReportSid} - All Clients Report (Reports tab, features date search)</li>
   *     <li>{@link RsReportSid} - All Clients Report (Clients tab) Batch Report</li>
   *     <li>{@link RsReportSid} - Batch Report</li>
   *     <li>{@link RsReportSid} - Sales per Client Report</li>
   *     <li>{@link RsReportSid} - All Sales Report</li>
   * </ul>
   *
   * @get get
   * @see RsReportSid
   * @type {number}
   */
  this.id_report = 0;

  /**
   * The report group ID.
   *
   * @get get
   * @see RsReportGroupSid
   * @type {number}
   */
  this.id_report_group = 0;

  /**
   * The report page ID. One of the {@link RsReportPageSid} constants.
   * If set, the collection of that page will be used, otherwise a collection of single report will be used.
   *
   * @get get
   * @see RsReportPageSid
   * @type {?number}
   */
  this.id_report_page = null;

  /**
   * The report view ID. One of the {@link RsReportChartViewSid} constants.
   *
   * @get get
   * @see RsReportChartViewSid
   * @type {number}
   */
  this.id_report_view = 0;

  /**
   * The key of business for which the report must be generated.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

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

WlSdk_ModelAbstract.extend(Wl_Report_DataModel);

/**
 * @inheritDoc
 */
Wl_Report_DataModel.prototype.config=function()
{
  return {"a_field":{"a_data":{"get":{"result":true}},"a_total":{"get":{"result":true}},"i_page":{"get":{"get":true}},"id_report":{"get":{"get":true}},"id_report_group":{"get":{"get":true}},"id_report_page":{"get":{"get":true}},"id_report_view":{"get":{"get":true}},"k_business":{"get":{"get":true}},"s_filter":{"get":{"get":true}},"s_sort":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Report_DataModel.instanceGet
 * @param {number} i_page The page of results to show, starting at zero. The API will return 256 results per page.
 * @param {number} id_report The report ID. The following reports are currently available via the API: <ul> <li>{@link RsReportSid} - All Clients Report (Reports tab, features date search)</li> <li>{@link RsReportSid} - All Clients Report (Clients tab) Batch Report</li> <li>{@link RsReportSid} - Batch Report</li> <li>{@link RsReportSid} - Sales per Client Report</li> <li>{@link RsReportSid} - All Sales Report</li> </ul>
 * @param {number} id_report_group The report group ID.
 * @param {number} id_report_view The report view ID. One of the {@link RsReportChartViewSid} constants.
 * @param {string} k_business The key of business for which the report must be generated.
 * @param {string} s_filter Filter settings in encoded format.
 * @param {string} s_sort The field to use for sorting report data.
 * @returns {Wl_Report_DataModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets data of required report.
 *
 * Loads the specified report for the given business, applying filter, sort, and pagination parameters,
 * and returns the report rows and totals.
 *
 * @function
 * @name Wl_Report_DataModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
