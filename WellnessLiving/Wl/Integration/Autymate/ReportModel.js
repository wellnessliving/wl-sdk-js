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
   * This array is effectively a title row for table that is returned in {@link Wl_Integration_Autymate_ReportModel}.
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
  this.a_pay_method_remove = undefined;

  /**
   * The report data.
   *
   * This is an indexed array in which one row is an indexed array also.
   *
   * Indexes of the columns correspond to columns in {@link Wl_Integration_Autymate_ReportModel}.
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
   * Lists statuses of reports from point of view of its generation.
   *
   * Values:
   * - 6 (`ABORTED`): Report is in an inconsistent state.
   *
   *   There was an aborted operation which means this report is available partially.
   *
   *   The following transitions are possible:
   *
   *   * `ABORTED` => `DELETING` when a background task finds that this report is old and should be deleted.
   *
   *   * `ABORTED` => `QUEUED` if user clicks to regenerate this report.
   * - 5 (`ABORTING`): Current operation is being aborted now.
   *
   *   The following transitions are possible:
   *
   *   * `ABORTING` => `ABORTED` when current operation completes.
   *     This transition is performed in two places: before the beginning of the actual generation,
   *     and after completion of the generation.
   * - 4 (`DELETING`): This report is being deleted now.
   *
   *   The following transitions are possible:
   *
   *   * `DELETING` => (report does not exist anymore) when deletion of this report completes.
   * - 2 (`GENERATING`): This report is being generated now.
   *
   *   This status is set when report is generated from zero point.
   *   This status basically means that not all partition of the report present.
   *   It also means that all partitions that exist have the newest values.
   *
   *   All new reports are created in this status.
   *
   *   The following transitions are possible:
   *
   *   * `GENERATING` => `ABORTING` when generation of this report aborted by user.
   *   * `GENERATING` => `READY` when generation of this report completes.
   *     This transition is performed when generation completes successfully.
   * - 1 (`QUEUED`): Generation of this report is queued.
   *   It will start automatically when generation of other reports completes.
   *
   *   The following transitions are possible:
   *
   *   * `QUEUED` => (report does not exist anymore) If generation of this report was aborted while no data was generated.
   *   * `QUEUED` => `ABORTED` If generation of this report was aborted while there is data from previous generation of
   *      this report.
   *
   *      This transition also occurs if a report stayed in the queue more than the set duration and
   *      there is some data left from the previous generation of this report.
   *   * `QUEUED` => `GENERATING` when there is a free thread slot to start generation of this report immediately.
   * - 3 (`READY`): Generation of this report is now completed.
   *
   *   The following transitions are possible:
   *
   *   * `READY` => `DELETING` when a background tasks identifies that this report is old and starts deleting it.
   *
   *   * `READY` => `QUEUED` when user clicks to regenerate this report
   *
   * @get result
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
