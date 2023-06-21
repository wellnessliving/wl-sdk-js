/**
 * An endpoint that can retrieve information from the All Transactions Report.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Transaction_Report_TransactionAllPaymentModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A list of fields in the report.
   *
   * This array is effectively a title row for the table returned in {@link Wl_Pay_Transaction_Report_TransactionAllPaymentModel.a_row}.
   *
   * @get result
   * @type {string[]}
   */
  this.a_field = [];

  /**
   * The report data.
   *
   * This is an indexed array in which one row is also an indexed array.
   *
   * Indexes of the columns correspond to the columns in {@link Wl_Pay_Transaction_Report_TransactionAllPaymentModel.a_field}.
   *
   * @get result
   * @type {{}}
   */
  this.a_row = [];

  /**
   * The warning list of the report.
   *
   * @get result
   * @type {string[]}
   */
  this.a_warning = [];

  /**
   * The end date in local time to retrieve transactions for.
   *
   * @get get
   * @type {string}
   */
  this.dl_date_end = "";

  /**
   * The end date in local time to retrieve transactions for.
   *
   * @get get
   * @type {string}
   */
  this.dl_date_start = "";

  /**
   * The date and time if the report has completed generation. Otherwise, this will be `null`.
   *
   * @get result
   * @type {?string}
   */
  this.dtu_complete = null;

  /**
   * The date and time if this report has been put in the generation queue. Otherwise, this will be `null`.
   *
   * @get result
   * @type {?string}
   */
  this.dtu_queue = null;

  /**
   * The date and time if generation of this report has started. Otherwise, this will be `null`.
   *
   * @get result
   * @type {?string}
   */
  this.dtu_start = null;

  /**
   * The page of the report, starting from 0.
   * Each page will contain a maximum of {@link Wl_Pay_Transaction_Report_TransactionAllPaymentModel.LIMIT} rows.
   *
   * @get get
   * @type {number}
   */
  this.i_page = 0;

  /**
   * The report status.
   *
   * One of {@link Wl_Report_Generator_ReportGeneratorStatusSid} constants.
   *
   * @get result
   * @type {number}
   */
  this.id_report_status = 0;

  /**
   * Determines whether to show more rows in the report.
   *
   * If `true`, there are more report rows to get. Otherwise, `false` to indicate that all rows in the report have
   * already been retrieved.
   *
   * @get result
   * @type {boolean}
   */
  this.is_more = false;

  /**
   * Determines whether the report should be refreshed.
   *
   * If `true`, this report should be refreshed. A report refresh can't be requested while the report is being generated.
   * Otherwise, `false` to only return contents of the report.
   *
   * If the report hasn't yet been generated, it will automatically start generating in the background.
   *
   * @get get
   * @type {boolean}
   */
  this.is_refresh = false;

  /**
   * Determines whether the report is complete.
   *
   * If the report is accessed on the current day, or is returning a result that was cached on the current day, it could
   * be incomplete as not all the transactions for the day are present.
   *
   * If `true`, the report has been completed. Otherwise, `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_report_complete = false;

  /**
   * The key of the business for which report should be generated.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Transaction_Report_TransactionAllPaymentModel);

/**
 * @inheritDoc
 */
Wl_Pay_Transaction_Report_TransactionAllPaymentModel.prototype.config=function()
{
  return {"a_field": {"a_field": {"get": {"result": true}},"a_row": {"get": {"result": true}},"a_warning": {"get": {"result": true}},"dl_date_end": {"get": {"get": true}},"dl_date_start": {"get": {"get": true}},"dtu_complete": {"get": {"result": true}},"dtu_queue": {"get": {"result": true}},"dtu_start": {"get": {"result": true}},"i_page": {"get": {"get": true}},"id_report_status": {"get": {"result": true}},"is_more": {"get": {"result": true}},"is_refresh": {"get": {"get": true}},"is_report_complete": {"get": {"result": true}},"k_business": {"get": {"get": true}}}};
};