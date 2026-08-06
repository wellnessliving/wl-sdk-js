/**
 * Gets the daily transaction data.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Integration_Autymate_ReportModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The list of fields in this report.
   *
   * This array is effectively a title row for table that is returned in {@link Wl_Integration_Autymate_ReportModel.a_row}.
   *
   * @get result
   * @type {string[]}
   */
  this.a_field = undefined;

  /**
   * List of payment methods to filter out in the report.
   * Each element is one of the {@link RsPayMethodSid} constants.
   *
   * @get get
   * @type {number[]}
   */
  this.a_pay_method_remove = [7];

  /**
   * The report data.
   *
   * This is an indexed array in which one row is an indexed array also.
   *
   * Indexes of the columns correspond to columns in {@link Wl_Integration_Autymate_ReportModel.a_field}.
   *
   * @get result
   * @type {string[][]}
   */
  this.a_row = undefined;

  /**
   * The warning list of the report, if applicable.
   *
   * @get result
   * @type {string[]}
   */
  this.a_warning = undefined;

  /**
   * The date in local time to retrieve transactions for.
   *
   * @get get
   * @type {string}
   */
  this.dl_date = "";

  /**
   * The date and time when this report has completed generation.
   *
   * `null` if generation of this report isn't completed.
   *
   * @get result
   * @type {?string}
   */
  this.dtu_complete = null;

  /**
   * The date and time when this report was put in the generation queue.
   *
   * Effectively, this is the time when a user clicked to view this report or the report for this day was first called.
   *
   * @get result
   * @type {?string}
   */
  this.dtu_queue = null;

  /**
   * The date and time when generation of this report was started.
   *
   * `null` if generation of this report hasn't started.
   *
   * @get result
   * @type {?string}
   */
  this.dtu_start = null;

  /**
   * The page of the report, starting from 0.
   * Each page will contain a maximum of `LIMIT` rows.
   *
   * @get get
   * @type {number}
   */
  this.i_page = 0;

  /**
   * The status of the report.
   *
   * One of the {@link Thoth_ReportCore_Generator_ReportGeneratorStatusSid} constants.
   *
   * @get result
   * @see Thoth_ReportCore_Generator_ReportGeneratorStatusSid
   * @type {number}
   */
  this.id_report_status = undefined;

  /**
   * If `true` then there are more report rows to get. Otherwise, `false` if all rows have been sent.
   *
   * @get result
   * @type {boolean}
   */
  this.is_more = undefined;

  /**
   * Determines whether this report should be refreshed.
   *
   * `true` to refresh this report if it's already generated.
   * Refreshing of the report may not be queried while report is being generated.
   *
   * `false` to only return contents of the report.
   * If report isn't yet generated, it automatically starts the generation in the background.
   *
   * @get get
   * @type {boolean}
   */
  this.is_refresh = false;

  /**
   * Determines whether this report is complete. If this report is accessed on the current day, or is returning
   * a result that was cached on the current day it could be incomplete as not all the transactions for the day
   * are present.
   *
   * If `true` then this report will be complete.
   *
   * If `false` then this report could be incomplete.
   *
   * @get result
   * @type {boolean}
   */
  this.is_report_complete = undefined;

  /**
   * The key of the business for which the report must be generated.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The randomly generated 32 character string used to authenticate requests.
   *
   * @get get
   * @type {string}
   */
  this.s_guid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Integration_Autymate_ReportModel);

/**
 * @inheritDoc
 */
Wl_Integration_Autymate_ReportModel.prototype.config=function()
{
  return {"a_field":{"a_field":{"get":{"result":true}},"a_pay_method_remove":{"get":{"get":true}},"a_row":{"get":{"result":true}},"a_warning":{"get":{"result":true}},"dl_date":{"get":{"get":true}},"dtu_complete":{"get":{"result":true}},"dtu_queue":{"get":{"result":true}},"dtu_start":{"get":{"result":true}},"i_page":{"get":{"get":true}},"id_report_status":{"get":{"result":true}},"is_more":{"get":{"result":true}},"is_refresh":{"get":{"get":true}},"is_report_complete":{"get":{"result":true}},"k_business":{"get":{"get":true}},"s_guid":{"get":{"get":true}}}};
};

/**
 * Gets the daily transaction data.
 *
 * Authenticates the request using the business GUID, runs the All Transactions report for the specified date,
 * and returns paginated rows augmented with Autymate-specific columns such as tax details, location address,
 * batch number, and payment method information.
 *
 * @function
 * @name Wl_Integration_Autymate_ReportModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
