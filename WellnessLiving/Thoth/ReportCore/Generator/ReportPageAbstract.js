/**
 * Base class for all report pages in the system.
 */
function Thoth_ReportCore_Generator_ReportPageAbstract()
{
  // Empty constructor.
}

/**
 * "Progress Log" report page.
 *
 * It is defined as a page rather than single report due to chart representation having multiple widgets depending on
 * business configuration.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportPageAbstract.ProgressLogListReportPage = 1873;

/**
 * "Sales Details by Location" report page.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportPageAbstract.PurchaseFranchiseLocationReportPage = 1035;

/**
 * "Sales Summary By Location" report page.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportPageAbstract.PurchaseFranchiseLocationSummaryReportPage = 1040;

/**
 * "Sales Summary By Location" franchisee report page.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportPageAbstract.PurchaseLocationSummaryReportPage = 1043;

/**
 * "Sales and Attendance Summary" report page.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportPageAbstract.SalesCloseoutReportPage = 1566;

/**
 * "Batch Reconciliation Summary" report page.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportPageAbstract.SummaryReportPage = 1562;

/**
 * "All transactions" report page.
 *
 * @type {number}
 */
Thoth_ReportCore_Generator_ReportPageAbstract.TransactionAllReportPage = 801;
