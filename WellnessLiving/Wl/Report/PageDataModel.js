/**
 * Gets data of required report collection.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Report_PageDataModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "a_page,id_report_group,id_report_page,id_report_view,k_business,s_filter,s_sort";

  /**
   * List of the reports contents. Key is the report id from {@link RsReportSid}, value is report contents.
   * Contents can vary based on the report that's loaded.
   *
   * @get result
   * @type {*[][]}
   */
  this.a_data = undefined;

  /**
   * The page of results to show for each report in collection, starting at zero (set by default). The API will return
   * 256 results per page. Key is report id from {@link RsReportSid}, value is the page of results.
   *
   * @get get
   * @type {number[]}
   */
  this.a_page = undefined;

  /**
   * The report group ID. One of the {@link RsReportGroupSid} constants that describes the time
   * period (day, week, month, or year) for the report to cover.
   *
   * @get get
   * @see RsReportGroupSid
   * @type {number}
   */
  this.id_report_group = 0;

  /**
   * The report page ID. One of the {@link RsReportPageSid} constants.
   * The collection of that page will be used to get list of reports.
   *
   * The following report collections are currently available via the API:
   * * PROFILE_PURCHASE (ID 11) Collection with reports from client profile: memberships, packages, session/duration
   * passes, single sessions, events, gift cards and groupon.
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
   * The key of business for which the report collection must be generated.
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

WlSdk_ModelAbstract.extend(Wl_Report_PageDataModel);

/**
 * @inheritDoc
 */
Wl_Report_PageDataModel.prototype.config=function()
{
  return {"a_field":{"a_data":{"get":{"result":true}},"a_page":{"get":{"get":true}},"id_report_group":{"get":{"get":true}},"id_report_page":{"get":{"get":true}},"id_report_view":{"get":{"get":true}},"k_business":{"get":{"get":true}},"s_filter":{"get":{"get":true}},"s_sort":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Report_PageDataModel.instanceGet
 * @param {number[]} a_page The page of results to show for each report in collection, starting at zero (set by default). The API will return 256 results per page. Key is report id from {@link RsReportSid}, value is the page of results.
 * @param {number} id_report_group The report group ID. One of the {@link RsReportGroupSid} constants that describes the time period (day, week, month, or year) for the report to cover.
 * @param {?number} id_report_page The report page ID. One of the {@link RsReportPageSid} constants. The collection of that page will be used to get list of reports. The following report collections are currently available via the API: * PROFILE_PURCHASE (ID 11) Collection with reports from client profile: memberships, packages, session/duration passes, single sessions, events, gift cards and groupon.
 * @param {number} id_report_view The report view ID. One of the {@link RsReportChartViewSid} constants.
 * @param {string} k_business The key of business for which the report collection must be generated.
 * @param {string} s_filter Filter settings in encoded format.
 * @param {string} s_sort The field to use for sorting report data.
 * @returns {Wl_Report_PageDataModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets data of required report collection.
 *
 * Loads all reports belonging to the specified report page collection for the given business, applying shared
 * filter, sort, group, and view parameters, and returns the data for each report keyed by report ID.
 *
 * @function
 * @name Wl_Report_PageDataModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
