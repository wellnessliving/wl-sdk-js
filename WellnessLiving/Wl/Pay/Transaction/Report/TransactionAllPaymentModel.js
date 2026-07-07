/**
 * Returns All Transactions Report data for the specified date range.
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
   * This array is effectively a title row for the table returned in {@link Thoth_WlPay_Transaction_Report_TransactionAllPaymentModel.a_row}.
   *
   * @get result
   * @type {string[]}
   */
  this.a_field = undefined;

  /**
   * @typedef {{}} Wl_Pay_Transaction_Report_TransactionAllPaymentModel_a_row_a_pay_transaction
   * @property {?number} id_pay_method A list of payment methods.
   * @property {string} k_pay_transaction Pay transaction key.
   * @property {string} m_amount Amount paid.
   * @property {string} m_surcharge Surcharge amount from store settings.
   * @property {string} s_batch_number Batch number for this transaction.
   */

  /**
   * @typedef {{}} Wl_Pay_Transaction_Report_TransactionAllPaymentModel_a_row
   * @property {Wl_Pay_Transaction_Report_TransactionAllPaymentModel_a_row_a_pay_transaction} a_pay_transaction List of pay transactions associated with this row. Each element:
   * @property {string} dtu_purchase_start Start date and time of the purchase in UTC.
   * @property {string} k_purchase Purchase key.
   * @property {string} m_net_sale Net sales amount.
   * @property {string} m_total_tax Total tax amount.
   * @property {string} o_client.text_first First name of the client.
   * @property {string} o_client.text_last Last name of the client.
   * @property {string} o_client.text_name Full name of the client.
   * @property {string} o_location.k_location Location key.
   * @property {string} s_batch_number Batch number of the first transaction in the row.
   * @property {string} text_location_address Street address of the location.
   * @property {string} text_location_city Name of the location's city.
   * @property {string} text_location_country Name of the location's country.
   * @property {string} text_location_postal Postal code of the location.
   * @property {string} text_location_region Name of the location's region.
   * @property {string} text_payment_method Name of the payment method used.
   * @property {string} text_payment_method_base Name of the base payment method. If a custom method was used, this is the method it is based on.
   * @property {string} text_tax_title Comma-separated list of tax names applied to the purchase.
   * @property {string} text_tax_value Comma-separated list of tax values. Percentage-based taxes have `%` appended; fixed-amount taxes have `$` appended.
   */

  /**
   * The report data.
   *
   * This is an indexed array where each element is also an indexed array representing one report row.
   * Column positions in each row correspond to the field names in {@link Thoth_WlPay_Transaction_Report_TransactionAllPaymentModel.a_field}.
   *
   * Known columns (use {@link Thoth_WlPay_Transaction_Report_TransactionAllPaymentModel.a_field} to resolve their positional indexes):
   *
   * @get result
   * @type {Wl_Pay_Transaction_Report_TransactionAllPaymentModel_a_row[]}
   */
  this.a_row = undefined;

  /**
   * The warning list of the report.
   *
   * @get result
   * @type {string[]}
   */
  this.a_warning = undefined;

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
   * Determines whether to show more rows in the report.
   *
   * If `true`, there are more report rows to get. Otherwise, `false` to indicate that all rows in the report have
   * already been retrieved.
   *
   * @get result
   * @type {boolean}
   */
  this.is_more = undefined;

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
  this.is_report_complete = undefined;

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
  return {"a_field":{"a_field":{"get":{"result":true}},"a_row":{"get":{"result":true}},"a_warning":{"get":{"result":true}},"dl_date_end":{"get":{"get":true}},"dl_date_start":{"get":{"get":true}},"dtu_complete":{"get":{"result":true}},"dtu_queue":{"get":{"result":true}},"dtu_start":{"get":{"result":true}},"i_page":{"get":{"get":true}},"id_report_status":{"get":{"result":true}},"is_more":{"get":{"result":true}},"is_refresh":{"get":{"get":true}},"is_report_complete":{"get":{"result":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * Returns All Transactions Report data for the specified date range.
 *
 * Provides access to the All Transactions Report used for revenue reconciliation and export. The report
 * is generated asynchronously and cached; check `$id_report_status` to determine whether generation is
 * still in progress. Set `$is_refresh` to request regeneration and use `$i_page` to paginate through
 * up to `LIMIT` rows per request.
 *
 * @function
 * @name Wl_Pay_Transaction_Report_TransactionAllPaymentModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
