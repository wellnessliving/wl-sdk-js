/**
 * Base class for all reports in the system.
 */
function Thoth_ReportCore_Generator_ReportGeneratorReportAbstract()
{
  // Empty constructor.
}

/**
 * "Account Balance History" report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.AccountHistoryReport = 1908;

/**
 * Controls appointment summary report in list format.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.Appointment_SummaryReport = 1523;

/**
 * "Batch Reconciliation Summary" (Approved) report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.ApprovedReport = 1557;

/**
 * Autymate extension of the "All Transactions" report.
 * The Autymate user is able to access the "All Transactions" report, but only for the businesses they have an agreement with.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.AutymateTransactionAllItemReport = 1216;

/**
 * "Batch Report".
 *
 * Report by transactions that are bathing.
 * Batching is a process when all transactions are sent to processing by merchant in a certain time of next day.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.BatchReport = 1283;

/**
 * Client Appointment Booking Flow report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.BookingFlowReport = 1050;

/**
 * "Bulk Charges" batch detail report. Client-level drill-down for a single batch, reached from
 * {@link \Thoth\Report\SalesReport\Transaction\BulkCharges\BulkChargesReport}'s `Batch ID`/`Total Clients` columns.
 *
 * `Subtotal`/`Discount Amount`/`Total Taxes`/`Purchase Total` are read off `\Wl\Purchase\Info\PurchaseInfo` once a
 * client has been billed (`\Wl\Billing\Bulk\PurchaseBatchUserStatusSid::CHARGED`), or re-priced via
 * {@link \Thoth\Report\SalesReport\Transaction\BulkChargesDetail\BulkChargesDetailReport::_clientExpectedGet()} for a `PENDING`/`FAIL` client not billed yet - see
 * SAL-1180. The per-tax-name `Custom tax` columns (e.g. `HST Tax`/`GST Tax`) are dynamic - one per
 * business-configured `\RsTax::get()` entry - added in {@link \Thoth\Report\SalesReport\Transaction\BulkChargesDetail\BulkChargesDetailReport::generatorDynamic()} and
 * populated in {@link \Thoth\Report\SalesReport\Transaction\BulkChargesDetail\BulkChargesDetailReport::generatorRun()} from `\Wl\Purchase\PurchaseItemInfo::$a_tax` for a
 * billed client (same mechanism as
 * {@link \Thoth\Report\SalesReport\Transaction\TransactionAllItemReport::generatorDynamic()}'s own per-tax
 * columns), or from `_clientExpectedGet()`'s own re-priced `a_tax_by_name` for a `PENDING`/`FAIL` client - see
 * SAL-1195.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.BulkChargesDetailReport = 2325;

/**
 * "Bulk Charges" report. Summary of Bulk Billing batches created from the Clients tab.
 *
 * There is no persisted "expected total" for a batch - `Wl\Billing\Bulk\PurchaseBatchManager::create()` does not
 * compute or store one. It does, however, freeze each item's price into `wl_purchase_batch_item.m_price` at that
 * same moment, and `Wl\Billing\Bulk\PurchaseBatchBill::billClient()` bills every client off that frozen price, not
 * off the price list current at billing time. `Total Amount` therefore combines the already-charged clients'
 * actual `RsPurchaseSql::$f_sum`, `m_surcharge` with a re-pricing (via `BulkBillingManager::purchaseItemTotal()`,
 * passed the same frozen `m_price`) of the clients still pending/failed - see
 * {@link \Thoth\Report\SalesReport\Transaction\BulkCharges\BulkChargesReport::batchAmountGet()}.
 *
 * The `Wl\Billing\Bulk\*` references above are plain text, not `{@link}` tags, on purpose - this class docblock is
 * surfaced as the `Bulk Charges` entry's description in the `$cid_report` enum of every report-facing API
 * (`{@link Thoth_ReportCore_Generator_QueryModel}`, `{@link Wl_Report_AccessModel}`, and others), and the OpenAPI
 * generator rejects `{@link}` references to `Wl\Billing\Bulk\*` there as internal-class leaks into public docs.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.BulkChargesReport = 2316;

/**
 * Wl\Business\Franchise\Hours\ReportGeneration\BusinessHoursReport
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.BusinessHoursReport = 1455;

/**
 * "Marketing Campaigns" detail report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.CampaignDetailReport = 1777;

/**
 * "Marketing Campaigns" list report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.CampaignListReport = 1763;

/**
 * "Cash Reconciliation Summary" report.
 * This report is only accessible as a part of "Sales and Attendance Summary" report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.Cash_SummaryReport = 1572;

/**
 * "Statement History" report.
 *
 * Lists account statements generated for a client.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.ClientStatementHistoryReport = 2223;

/**
 * "Sales Summary by Client" report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.Client_SummaryReport_SummaryReport = 1295;

/**
 * "YOY Sales Comparison" report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.CompareListReport = 1274;

/**
 * "Contact History" report for the specified client.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.ContactHistoryClientReport = 1692;

/**
 * "Contact History" report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.ContactHistoryReport = 1668;

/**
 * Report with list of debts that should be sent to third party service to collect a debt by force.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.DebtReport = 1271;

/**
 * Franchise client detail report generator.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.DetailListReport = 1504;

/**
 * Controls detailed appointment analysis report in list format.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.DetailReport = 1522;

/**
 * Example report used to demonstrate report creation in step by step guide.
 *
 * See `namespace.Wl/Report/Generator/doc/how-to-create-a-report.md`.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.ExampleReport = 919;

/**
 * "Royalties And Fees By Location" corporate report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.FeeLocationReport = 1705;

/**
 * Supporting report which used for filter limiter of client reports.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.FilterLimiterClient_FilterLimiterReport = 1261;

/**
 * "Guest Pass History" report shown on the client profile under Account.
 *
 * Each row represents a single guest pass invite: either sent by the profile owner (host)
 * or received by the profile owner as a guest. The row reflects the current real-time state of
 * that invite - sent, expired, or the underlying visit's status if the guest has used the pass.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.GuestPassHistoryReport = 2218;

/**
 * "Inventory On Hand" report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.InventoryReport = 1727;

/**
 * "Leads by location" report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.LeadByLocationReport = 1451;

/**
 * "Lead Management Report".
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.LeadManagementReport = 1791;

/**
 * "Sales Summary by Revenue Category" report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.ListReport = 1268;

/**
 * "Sales Details by Revenue Category" report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.ListRevenueReport = 1262;

/**
 * "Location Assets" franchise report.
 *
 * Lists off-site location resources across all franchise member businesses.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.LocationAssetReport = 2237;

/**
 * "Balance Due Report".
 * List of clients with their accounts state.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.LoginAccountReport = 1358;

/**
 * "All Transactions" report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.LoginFranchiseCouponReport = 1385;

/**
 * "Belts" report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.LoginRankReport = 1619;

/**
 * "Email History" report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.MailHistoryReport = 1697;

/**
 * "All clients" report generator.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.MemberAllReport = 689;

/**
 * "Client Data" report generator.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.MemberProfileReport = 2329;

/**
 * "All clients" report generator (this report used for the "Clients" link accessed from the top nav or WL menu).
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.MemberReport = 1287;

/**
 * "Enterprise Reports -> Memberships Details by Location" report. Detailed list of all memberships in the franchise.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.MembershipDetailReport = 1448;

/**
 * External membership report.
 * Is developed as microservice. This class only provides access validation and URL generation.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.MembershipReport = 2352;

/**
 * Franchise "Memberships Summary by Location" report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.MembershipSummaryReport = 1498;

/**
 * "Sales Summary by Payment Method" report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.PayMethod_SummaryReport_SummaryReport = 1398;

/**
 * "Stripe Payout Reconciliation" report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.PayoutReconciliationReport = 1254;

/**
 * "Cost of Goods Sold" report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.ProductCostItemReport = 900;

/**
 * "Transformation Log" report outside of client's profile, listing the latest Progress Log entry (within a date range)
 * for each client. Each row represents a unique client.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.ProgressLogClientReport = 1854;

/**
 * Progress log list report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.ProgressLogListReport = 1849;

/**
 * Generates data for "Sales Details By Location" corporate report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.PurchaseFranchiseLocationPaymentReport = 1034;

/**
 * Generates data for "Sales Details By Location" corporate report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.PurchaseFranchiseLocationReport = 961;

/**
 * Generates data for "Sales Summary By Location" corporate report.
 *
 *
 * While intuitively summary should be same regardless of whether it was calculated from rows grouped by purchase items
 * or transactions, it may actually differ due to difference in how data for them is filtered. E.g. transaction is
 * counted whole even if not all items within its purchase match selected filters in payment view, and in reverse
 * purchase item's price is counted is full even though not all transactions it was paid with match the payment methods
 * filter.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.PurchaseFranchiseLocationSummaryPaymentReport = 1041;

/**
 * Generates data for "Sales Summary By Location" corporate report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.PurchaseFranchiseLocationSummaryReport = 1025;

/**
 * Generator class for "Sales Summary By Location" report (payment view).
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.PurchaseLocationSummaryPaymentReport = 1042;

/**
 * Generator class for "Sales Summary By Location" report (item view).
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.PurchaseLocationSummaryReport = 1031;

/**
 * Report to show details of the earned tips by staff members who takes tips.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.PurchaseTipReport = 1670;

/**
 * Report to show sum of the earned tips by staff members.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.PurchaseTipSumReport = 1666;

/**
 * External reconciliation report for franchisee.
 * Is developed as microservice. This class only provides access validation and URL generation.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.ReconcileReport = 1713;

/**
 * Executes a registry-stored SQL query and exposes the result as a report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.ReportQueryReport = 2226;

/**
 * Supporting report which used for filter limiter.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.Report_FilterLimiter_FilterLimiterReport = 930;

/**
 * Report with total processing amounts by customers.
 *
 * Only payments through credit cards and bank accounts are counted in this report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.RevenueProcessingReport = 1161;

/**
 * "Batch Reconciliation Summary" (Settled) report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.SettledReport = 1560;

/**
 * "SMS History" report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.SmsHistoryReport = 2193;

/**
 * Supporting report which used for payroll details filter limiter.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.StaffMemberLimiter_FilterLimiterReport = 1748;

/**
 * Report to show detailed list of instructor's classes and payments for these classes.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.StaffPayDetailReport = 1744;

/**
 * Special version of the report to calculate upcoming visits revenue.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.StaffPayDetailWithUpcomingReport = 1971;

/**
 * "Payroll Summary" report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.StaffPaySummaryReport = 1751;

/**
 * Franchise client status report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.StatusListReport = 1450;

/**
 * "Sales Summary by Purchase Options" report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.Summary_SummaryReport = 1264;

/**
 * Supporting report which used for purchase tip filter limiter.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.Tip_FilterLimiter_FilterLimiterReport = 1684;

/**
 * "All Transactions" report / "All Sales" report (item view).
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.TransactionAllItemReport = 739;

/**
 * Client's 'Purchases' report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.TransactionAllItemStaffClientReport = 1324;

/**
 * Report about user's transactions.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.TransactionAllPaymentClientReport = 1255;

/**
 * "All Transactions" report.
 *
 * This is a placeholder for now.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.TransactionAllPaymentReport = 799;

/**
 * Report about client's transactions.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.TransactionAllPaymentStaffClientReport = 1321;

/**
 * Report with list of payments that were performed via collections service.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.TransactionCollectorReport = 1297;

/**
 * "Failed Transactions" report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.TransactionFailReport = 1350;

/**
 * Report with list of all debt payments.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.TransactionReport = 1290;

/**
 * "Purchase Option Usage Summary" report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.UsageReport = 1580;

/**
 * Controls list report for attendance.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.VisitBuySummaryReport = 1556;

/**
 * Franchise "Cross-Location Visit Details" report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.VisitFranchiseLocationCrossDetailReport = 1472;

/**
 * Franchise "Cross-Location Visit Summary" report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.VisitFranchiseLocationCrossDetailSummaryReport = 1477;

/**
 * Franchisee "Cross-Location Visit Details" report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.VisitFranchiseeLocationCrossDetailReport = 1470;

/**
 * Franchisee "Cross-Location Visit Summary" report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.VisitFranchiseeLocationCrossDetailSummaryReport = 1474;

/**
 * Controls list for "Lifetime Value & Visit Milestones" report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.VisitLifetimeReport = 1740;

/**
 * "Cross-Location Visit Details" report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.VisitLocationCrossDetailReport = 1456;

/**
 * "Cross-Location Visit Summary" report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.VisitLocationCrossDetailSummaryReport = 1480;

/**
 * "Visits Remaining" report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.VisitRemainReport = 1628;

/**
 * "Revenue by Service" report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.VisitRevenueDetailReport = 1608;

/**
 * "Service Revenue Summary" report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.VisitRevenueServiceReport = 1603;

/**
 * "Revenue by Service Type" report.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportGeneratorReportAbstract.VisitRevenueServiceTypeReport = 1602;
