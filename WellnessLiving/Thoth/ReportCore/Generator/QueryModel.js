/**
 * Returns contents of a report as a table.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Thoth_ReportCore_Generator_QueryModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Thoth_ReportCore_Generator_QueryModel_a_dynamic
   * @property {{}[]} a_cell Fields of the complex cell.
   * @property {*[][]} a_customization_element Elements of a customization from that are required by this filter field. Keys are names of required form elements; values are classes of this elements.
   * @property {*[]} a_type A list of scalar types of values that this field can get.
   * @property {boolean} is_dynamic Whether this field is dynamic or static.
   * @property {?boolean} is_export Whether this field is used for export.
   * @property {boolean} is_hide_by_default Whether this field should be hidden by default. It can later be shown by using the customization form.
   * @property {boolean} is_hide_if_empty Whether this field should be hidden if the entire column is empty.
   * @property {boolean} is_null Whether this field is nullable.
   * @property {?boolean} is_order Whether the ordering by this field is available.
   * @property {boolean} is_show Whether this field should be shown during report render.
   * @property {boolean} is_store Whether this field is stored in the report storage.
   * @property {?string} s_cast Argument for the MySQL function `cast()`.
   * @property {?{}} s_class Name of a cell class.
   * @property {string} s_class_css CSS class that is used for formatting of this field. This class will be added to the column header.
   * @property {?string} s_format Name of formatting method that is used for formatting of this field during export.
   * @property {string} s_name Name of a public property in which value of this field is stored.
   * @property {string} s_sort A string by which report columns are sorted.
   * @property {string} s_type Type of this field, as specified in its PHP doc.
   * @property {?string} text_title Data to derive title of a column which values are represented by this report field.
   * @property {?string} text_title_export Title of this field that is used during export.
   * @property {?string} text_title_info Text of the cell info tooltip.
   */

  /**
   * A list of dynamic fields in this report.
   *
   * Copy of result of {@link Thoth_ReportCore_Generator_ReportGeneratorReportAbstract}.
   *
   * @post result
   * @type {Thoth_ReportCore_Generator_QueryModel_a_dynamic[]}
   */
  this.a_dynamic = undefined;

  /**
   * A list of fields in this report.
   *
   * This array is effectively a title row for table that is returned in {@link Thoth_ReportCore_Generator_QueryModel.a_row}.
   *
   * @post result
   * @type {string[]}
   */
  this.a_field = undefined;

  /**
   * Report data.
   *
   * This is an indexed array in which one row is an indexed array also.
   *
   * Indexes of the columns correspond columns in {@link Thoth_ReportCore_Generator_QueryModel.a_field}.
   *
   * @post result
   * @type {string[][]}
   */
  this.a_row = undefined;

  /**
   * A list of stale rows.
   *
   * This array is only filled in when report is being updated now, or due to some other reasons contains mixed version
   * data (some data from the latest generation, and other from one of previous generations).
   *
   * Value is index in {@link Thoth_ReportCore_Generator_QueryModel.a_row}.
   *
   * If a row is not listed here, it is of the latest version.
   *
   * @post result
   * @type {number[]}
   */
  this.a_stale = undefined;

  /**
   * Warning list of the report.
   *
   * @post result
   * @type {string[]}
   */
  this.a_warning = undefined;

  /**
   * Base class for all reports in the system.
   *
   * Values:
   * - 1849 (`Thoth\ProgressLog\Report\ProgressLogListReport`): Progress log list report.
   * - 1854 (`Thoth\ProgressLog\Report\ProgressLogClientReport`): "Transformation Log" report outside of client's profile, listing the latest Progress Log entry (within a date range)
   *   for each client. Each row represents a unique client.
   * - 1791 (`Wl\Lead\Report\LeadManagementReport`): "Lead Management Report".
   * - 1287 (`Wl\Member\Report\MemberReport`): "All clients" report generator (this report used for the "Clients" link accessed from the top nav or WL menu).
   * - 689 (`Wl\Member\Report\MemberAllReport`): "All clients" report generator.
   * - 1358 (`Wl\Login\Account\LoginAccountReport`): "Balance Due Report".
   *   List of clients with their accounts state.
   * - 1740 (`Wl\Visit\Report\VisitLifetimeReport`): Controls list for "Lifetime Value & Visit Milestones" report.
   * - 1556 (`Wl\Visit\Report\VisitBuySummaryReport`): Controls list report for attendance.
   * - 1050 (`Wl\Appointment\Report\BookingFlowReport`): Client Appointment Booking Flow report.
   * - 1670 (`Wl\Purchase\Tip\PurchaseTipReport`): Report to show details of the earned tips by staff members who takes tips.
   * - 1713 (`Wl\Purchase\Reconcile\ReconcileReport`): External reconciliation report for franchisee.
   *   Is developed as microservice. This class only provides access validation and URL generation.
   * - 1290 (`Wl\Collector\Report\TransactionReport`): Report with list of all debt payments.
   * - 1271 (`Wl\Collector\Report\DebtReport`): Report with list of debts that should be sent to third party service to collect a debt by force.
   * - 1297 (`Wl\Collector\Report\TransactionCollectorReport`): Report with list of payments that were performed via collections service.
   * - 1763 (`Thoth\MarketingCampaigns\Report\CampaignList\CampaignListReport`): "Marketing Campaigns" list report.
   * - 1777 (`Thoth\MarketingCampaigns\Report\CampaignDetail\CampaignDetailReport`): "Marketing Campaigns" detail report.
   * - 799 (`Thoth\Report\SalesReport\Transaction\TransactionAllPaymentReport`): "All Transactions" report.
   *
   *   This is a placeholder for now.
   * - 739 (`Thoth\Report\SalesReport\Transaction\TransactionAllItemReport`): "All Transactions" report / "All Sales" report (item view).
   * - 1350 (`Thoth\Report\SalesReport\Transaction\TransactionFailReport`): "Failed Transactions" report.
   * - 1255 (`Thoth\Report\SalesReport\Client\TransactionAllPaymentClientReport`): Report about user's transactions.
   * - 1321 (`Thoth\Report\SalesReport\Client\TransactionAllPaymentStaffClientReport`): Report about client's transactions.
   * - 1324 (`Thoth\Report\SalesReport\Client\TransactionAllItemStaffClientReport`): Client's 'Purchases' report.
   * - 900 (`Thoth\Report\SalesReport\Product\ProductCostItemReport`): "Cost of Goods Sold" report.
   * - 919 (`Thoth\ReportCore\Generator\Example\ExampleReport`): Example report used to demonstrate report creation in step by step guide.
   *
   *   See `namespace.Wl/Report/Generator/doc/how-to-create-a-report.md`.
   * - 2226 (`Thoth\ReportCore\QueryEngine\Report\ReportQueryReport`): Executes a registry-stored SQL query and exposes the result as a report.
   * - 1451 (`Wl\Lead\Franchise\Report\LeadByLocationReport`): "Leads by location" report.
   * - 1697 (`Wl\Mail\History\Report\MailHistoryReport`): "Email History" report.
   * - 1619 (`Wl\Login\Rank\Report\LoginRankReport`): "Belts" report.
   * - 1504 (`Wl\Login\Franchise\Detail\DetailListReport`): Franchise client detail report generator.
   * - 1385 (`Wl\Login\Franchise\Coupon\LoginFranchiseCouponReport`): "All Transactions" report.
   * - 1450 (`Wl\Login\Franchise\Status\StatusListReport`): Franchise client status report.
   * - 1744 (`Wl\Staff\Pay\Report\StaffPayDetailReport`): Report to show detailed list of instructor's classes and payments for these classes.
   * - 1751 (`Wl\Staff\Pay\Report\StaffPaySummaryReport`): "Payroll Summary" report.
   * - 1971 (`Wl\Staff\Pay\Report\StaffPayDetailWithUpcomingReport`): Special version of the report to calculate upcoming visits revenue.
   * - 1628 (`Wl\Visit\Remain\Report\VisitRemainReport`): "Visits Remaining" report.
   * - 1602 (`Wl\Visit\Revenue\Report\VisitRevenueServiceTypeReport`): "Revenue by Service Type" report.
   * - 1603 (`Wl\Visit\Revenue\Report\VisitRevenueServiceReport`): "Service Revenue Summary" report.
   * - 1608 (`Wl\Visit\Revenue\Report\VisitRevenueDetailReport`): "Revenue by Service" report.
   * - 1684 (`Wl\Purchase\Tip\FilterLimiter\FilterLimiterReport`): Supporting report which used for purchase tip filter limiter.
   * - 1666 (`Wl\Purchase\Tip\Sum\PurchaseTipSumReport`): Report to show sum of the earned tips by staff members.
   * - 1705 (`Wl\Franchise\Fee\Report\FeeLocationReport`): "Royalties And Fees By Location" corporate report.
   * - 2193 (`Wl\Sms\History\Report\SmsHistoryReport`): "SMS History" report.
   * - 1523 (`Wl\Attendance\Report\Appointment\SummaryReport`): Controls appointment summary report in list format.
   * - 1522 (`Wl\Attendance\Report\Appointment\DetailReport`): Controls detailed appointment analysis report in list format.
   * - 1283 (`Thoth\Report\SalesReport\Transaction\Batch\BatchReport`): "Batch Report".
   *
   *   Report by transactions that are bathing.
   *   Batching is a process when all transactions are sent to processing by merchant in a certain time of next day.
   * - 1572 (`Thoth\Report\SalesReport\Transaction\Cash\SummaryReport`): "Cash Reconciliation Summary" report.
   *   This report is only accessible as a part of "Sales and Attendance Summary" report.
   * - 1448 (`Thoth\Report\SalesReport\Franchise\Membership\MembershipDetailReport`): "Enterprise Reports -> Memberships Details by Location" report. Detailed list of all memberships in the franchise.
   * - 1498 (`Thoth\Report\SalesReport\Franchise\Membership\MembershipSummaryReport`): Franchise "Memberships Summary by Location" report.
   * - 1295 (`Thoth\Report\SalesReport\Client\SummaryReport\SummaryReport`): "Sales Summary by Client" report.
   * - 1908 (`Thoth\Report\SalesReport\Client\AccountReport\AccountHistoryReport`): "Account Balance History" report.
   * - 2223 (`Thoth\Report\SalesReport\Client\ClientStatementHistoryReport\ClientStatementHistoryReport`): "Statement History" report.
   *
   *   Lists account statements generated for a client.
   * - 1398 (`Thoth\Report\SalesReport\PayMethod\SummaryReport\SummaryReport`): "Sales Summary by Payment Method" report.
   * - 1268 (`Thoth\Report\SalesReport\Tag\Summary\ListReport`): "Sales Summary by Revenue Category" report.
   * - 1262 (`Thoth\Report\SalesReport\Tag\Detail\ListRevenueReport`): "Sales Details by Revenue Category" report.
   * - 1042 (`Thoth\Report\SalesReport\Location\Summary\PurchaseLocationSummaryPaymentReport`): Generator class for "Sales Summary By Location" report (payment view).
   * - 1031 (`Thoth\Report\SalesReport\Location\Summary\PurchaseLocationSummaryReport`): Generator class for "Sales Summary By Location" report (item view).
   * - 1216 (`Thoth\Report\SalesReport\Integration\Autymate\AutymateTransactionAllItemReport`): Autymate extension of the "All Transactions" report.
   *   The Autymate user is able to access the "All Transactions" report, but only for the businesses they have an agreement with.
   * - 1264 (`Thoth\Report\SalesReport\PurchaseOption\Summary\SummaryReport`): "Sales Summary by Purchase Options" report.
   * - 1254 (`Thoth\WlPay\Transaction\StripeCom\PayoutReconciliation\PayoutReconciliationReport`): "Stripe Payout Reconciliation" report.
   * - 1161 (`Wl\Business\Account\Revenue\Processing\RevenueProcessingReport`): Report with total processing amounts by customers.
   *
   *   Only payments through credit cards and bank accounts are counted in this report.
   * - 2237 (`Wl\Business\Franchise\Location\Asset\LocationAssetReport`): "Location Assets" franchise report.
   *
   *   Lists off-site location resources across all franchise member businesses.
   * - 1455 (`Wl\Business\Franchise\Hours\ReportGeneration\BusinessHoursReport`): Wl\Business\Franchise\Hours\ReportGeneration\BusinessHoursReport
   * - 2218 (`Wl\Login\Promotion\GuestPass\Report\GuestPassHistoryReport`): "Guest Pass History" report shown on the client profile under Account.
   *
   *   Each row represents a single guest pass invite: either sent by the profile owner (host)
   *   or received by the profile owner as a guest. The row reflects the current real-time state of
   *   that invite - sent, expired, or the underlying visit's status if the guest has used the pass.
   * - 1748 (`Wl\Staff\Pay\Report\StaffMemberLimiter\FilterLimiterReport`): Supporting report which used for payroll details filter limiter.
   * - 1456 (`Wl\Visit\Location\Cross\Detail\VisitLocationCrossDetailReport`): "Cross-Location Visit Details" report.
   * - 1480 (`Wl\Visit\Location\Cross\Summary\VisitLocationCrossDetailSummaryReport`): "Cross-Location Visit Summary" report.
   * - 930 (`Wl\Purchase\Item\Report\FilterLimiter\FilterLimiterReport`): Supporting report which used for filter limiter.
   * - 1261 (`Wl\Purchase\Item\Report\FilterLimiterClient\FilterLimiterReport`): Supporting report which used for filter limiter of client reports.
   * - 1727 (`Wl\Shop\Product\Inventory\Report\InventoryReport`): "Inventory On Hand" report.
   * - 1668 (`Wl\Contact\Member\History\Report\ContactHistoryReport`): "Contact History" report.
   * - 1692 (`Wl\Contact\Member\History\Report\ContactHistoryClientReport`): "Contact History" report for the specified client.
   * - 1557 (`Thoth\Report\SalesReport\Transaction\Batch\Summary\ApprovedReport`): "Batch Reconciliation Summary" (Approved) report.
   * - 1560 (`Thoth\Report\SalesReport\Transaction\Batch\Summary\SettledReport`): "Batch Reconciliation Summary" (Settled) report.
   * - 961 (`Thoth\Report\SalesReport\Franchise\Location\Detail\PurchaseFranchiseLocationReport`): Generates data for "Sales Details By Location" corporate report.
   * - 1034 (`Thoth\Report\SalesReport\Franchise\Location\Detail\PurchaseFranchiseLocationPaymentReport`): Generates data for "Sales Details By Location" corporate report.
   * - 1041 (`Thoth\Report\SalesReport\Franchise\Location\Summary\PurchaseFranchiseLocationSummaryPaymentReport`): Generates data for "Sales Summary By Location" corporate report.
   *
   *
   *   While intuitively summary should be same regardless of whether it was calculated from rows grouped by purchase items
   *   or transactions, it may actually differ due to difference in how data for them is filtered. E.g. transaction is
   *   counted whole even if not all items within its purchase match selected filters in payment view, and in reverse
   *   purchase item's price is counted is full even though not all transactions it was paid with match the payment methods
   *   filter.
   * - 1025 (`Thoth\Report\SalesReport\Franchise\Location\Summary\PurchaseFranchiseLocationSummaryReport`): Generates data for "Sales Summary By Location" corporate report.
   * - 1274 (`Thoth\Report\SalesReport\Franchise\Sale\Compare\CompareListReport`): "YOY Sales Comparison" report.
   * - 1580 (`Thoth\Report\SalesReport\Closeout\Report\PurchaseOption\UsageReport`): "Purchase Option Usage Summary" report.
   * - 1472 (`Wl\Visit\Franchise\Location\Cross\Detail\VisitFranchiseLocationCrossDetailReport`): Franchise "Cross-Location Visit Details" report.
   * - 1470 (`Wl\Visit\Franchise\Location\Cross\Detail\VisitFranchiseeLocationCrossDetailReport`): Franchisee "Cross-Location Visit Details" report.
   * - 1477 (`Wl\Visit\Franchise\Location\Cross\Summary\VisitFranchiseLocationCrossDetailSummaryReport`): Franchise "Cross-Location Visit Summary" report.
   * - 1474 (`Wl\Visit\Franchise\Location\Cross\Summary\VisitFranchiseeLocationCrossDetailSummaryReport`): Franchisee "Cross-Location Visit Summary" report.
   *
   * @post post
   * @type {number}
   */
  this.cid_report = 0;

  /**
   * Date and time when this report has completed generation.
   *
   * `null` if generation of this report is not completed.
   *
   * @post result
   * @type {string}
   */
  this.dtu_complete = undefined;

  /**
   * Date and time when this report was put on generation queue.
   *
   * Effectively, this is the time when a user clicked to view this report.
   *
   * @post result
   * @type {string}
   */
  this.dtu_queue = undefined;

  /**
   * Date and time when generation of this report has started.
   *
   * `null` if generation of this report is not started.
   *
   * @post result
   * @type {string}
   */
  this.dtu_start = undefined;

  /**
   * A CAS (compare-and-swap) number that allows to track changes in the report storage.
   *
   * This number is changed every time content of the report gets updated.
   * If this number is not changed, the content is not updated.
   *
   * @post result
   * @type {number}
   */
  this.i_cas_change = undefined;

  /**
   * How many rows of the report to return.
   *
   * `0` to not to return content at all.
   * This may be useful to get metadata of the report.
   *
   * @post post
   * @type {number}
   */
  this.i_limit = 0;

  /**
   * Offset.
   *
   * How many rows of the report to skip at the beginning of the list.
   *
   * Only return rows after the last skipped row.
   *
   * `0` to return contents from the very beginning.
   *
   * @post post
   * @type {number}
   */
  this.i_offset = 0;

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
   * @post result
   * @type {number}
   */
  this.id_report_status = undefined;

  /**
   * Defines whether actual or already generated report should be returned.
   *
   * `true` to not attempt search generated report and generate it again.
   * `false` to attempt search generated report.
   *
   * @post post
   * @type {boolean}
   */
  this.is_actual = false;

  /**
   * Whether report is generating for the backend.
   *
   * @post post
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * Whether this report should be refreshed.
   *
   * `true` to refresh this report if it is already generated.
   * Refreshing of the report may not be queried while report is being generated.
   *
   * `false` to only return contents of the report.
   * If report is not yet generated, it automatically starts the generation in the background.
   *
   * @post post
   * @type {boolean}
   */
  this.is_refresh = false;

  /**
   * Filters that should be applied to the report.
   *
   * In this array, key is name of a filter field.
   *
   * @post post
   * @type {string}
   */
  this.json_filter = "";

  /**
   * Key of the business which report should be shown.
   *
   * `0` or an empty string for system-wide reports.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of this report.
   *
   * This key may be used to subscribe to report changes with {@link Core_WebSocket_ChannelBroadcast}.
   *
   * @post result
   * @type {string}
   */
  this.s_report = undefined;

  /**
   * Sorting order.
   *
   * A comma-separated list of fields to sort by.
   *
   * Name of a field may be prepended with a `+` or `-` sign to sort in ascending or descending order.
   * Ascending order is the default.
   *
   * You may sort reports by report fields and by cell fields.
   *
   * To sort by a report field, just specify name of that field.
   *
   * To sort by a cell field, specify name of a report field and name of the cell field.
   * Separate with a dot. For example: `o_account.m_amount`.
   *
   *
   *
   * Example value: `s_first,+s_last,-o_account.m_amount,o_address`.
   *
   * Means the following:
   *
   * * sort by `s_first` in ascending order (which is the default).
   * * sort by `s_last` in ascending order (which is specified explicitly).
   * * sort by `m_amount` field of `o_account` cell in descending order.
   * * sort by default field (i.e. the one marked with &#64;`sort` tag) of `o_address` cell in ascending order.
   *
   * Note that you may not sort by fields that are marked with &#64;`store-no` tag.
   *
   * @post post
   * @type {string}
   */
  this.s_sort = "";

  /**
   * An SQL query that should be executed on report table.
   *
   * See `namespace.Wl/Report/Generator/doc/report-query-sql.md` for details.
   *
   * Empty string to select all columns of the report table.
   *
   * @post post
   * @type {string}
   */
  this.s_sql = "";

  /**
   * Text of an error message that occurred during generation of the report.
   *
   * An empty string in no error messages have occurred.
   *
   * @post result
   * @type {string}
   */
  this.text_error = undefined;

  /**
   * Actor user.
   *
   * `0` or an empty string for guests.
   *
   * @post post
   * @type {string}
   */
  this.uid_actor = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Thoth_ReportCore_Generator_QueryModel);

/**
 * @inheritDoc
 */
Thoth_ReportCore_Generator_QueryModel.prototype.config=function()
{
  return {"a_field":{"a_dynamic":{"post":{"result":true}},"a_field":{"post":{"result":true}},"a_row":{"post":{"result":true}},"a_stale":{"post":{"result":true}},"a_warning":{"post":{"result":true}},"cid_report":{"post":{"post":true}},"dtu_complete":{"post":{"result":true}},"dtu_queue":{"post":{"result":true}},"dtu_start":{"post":{"result":true}},"i_cas_change":{"post":{"result":true}},"i_limit":{"post":{"post":true}},"i_offset":{"post":{"post":true}},"id_report_status":{"post":{"result":true}},"is_actual":{"post":{"post":true}},"is_backend":{"post":{"post":true}},"is_refresh":{"post":{"post":true}},"json_filter":{"post":{"post":true}},"k_business":{"post":{"post":true}},"s_report":{"post":{"result":true}},"s_sort":{"post":{"post":true}},"s_sql":{"post":{"post":true}},"text_error":{"post":{"result":true}},"uid_actor":{"post":{"post":true}}}};
};

/**
 * Returns contents of a report as a table.
 *
 * If the report is not yet generated, it gets generated.
 * If the report is being generated now, partial content may be returned.
 *
 * @function
 * @name Thoth_ReportCore_Generator_QueryModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
