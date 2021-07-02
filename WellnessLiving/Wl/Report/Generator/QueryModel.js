/**
 * Returns content of a report as a table.
 *
 * If report is not yet generated, it gets generated.
 * If the report is being generated now, partial content may be returned.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Report_Generator_QueryModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A list of dynamic fields in this report.
   *
   * Copy of result of {@link \Wl\Report\Generator\ReportGeneratorReportAbstract::generatorDynamic()}.
   *
   * @post result
   * @type {{}[]}
   */
  this.a_dynamic = undefined;

  /**
   * A list of fields in this report.
   *
   * This array is effectively a title row for table that is returned in {@link \Wl\Report\Generator\QueryApi::$a_row}.
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
   * Indexes of the columns correspond columns in {@link \Wl\Report\Generator\QueryApi::$a_field}.
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
   * Value is index in {@link \Wl\Report\Generator\QueryApi::$a_row}.
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
   * CID of the report to show.
   *
   * One of {@link ReportGeneratorReportAbstract} subclasses.
   *
   * @post post
   * @type {number}
   */
  this.cid_report = undefined;

  /**
   * Date and time when this report has completed generation.
   *
   * `null` if generation of this report is not completed.
   *
   * See {@link \Wl\Report\Generator\ReportStorageListSql}.<tt>dtu_complete</tt> for additional details.
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
   * See {@link \Wl\Report\Generator\ReportStorageListSql}.<tt>dtu_queue</tt> for additional details.
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
   * See {@link \Wl\Report\Generator\ReportStorageListSql}.<tt>dtu_start</tt> for additional details.
   *
   * @post result
   * @type {string}
   */
  this.dtu_start = undefined;

  /**
   * How many rows of the report to return.
   *
   * `0` to not to return content at all.
   * This may be useful to get metadata of the report.
   *
   * @post post
   * @type {number}
   */
  this.i_limit = "0";

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
  this.i_offset = "0";

  /**
   * Status of the report.
   *
   * One of {@link \Wl\Report\Generator\ReportGeneratorStatusSid} constants.
   *
   * @post result
   * @type {number}
   */
  this.id_report_status = undefined;

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
  this.is_refresh = "0";

  /**
   * Filters that should be applied to the report.
   *
   * In this array, key is name of a filter field.
   * A filter field is a property of a {@link ReportFilterAbstract} subclass.
   * Name of the property of that subclass corresponds key in this array.
   *
   * @post post
   * @type {{}}
   */
  this.json_filter = undefined;

  /**
   * Key of the business which report should be shown.
   *
   * Primary key in {@link \RsBusinessSql}.
   *
   * `0` or an empty string for system-wide reports.
   *
   * @post post
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Key of this report.
   *
   * This key may be used to subscribe to report changes with {@link \Wl\Report\Generator\UpdateChannel}.
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
   * Separate with a dot. For example: <tt>o_account.m_amount</tt>.
   *
   * You may specify a field which contains objects of {@link \Wl\Report\Generator\ReportGeneratorCellAbstract} without
   * specification of a name of a cell field.
   * In this case sorting specified by {@link \Wl\Report\Generator\ReportGeneratorCellAbstract::SORT} will be applied.
   *
   * Example value: <tt>s_first,+s_last,-o_account.m_amount,o_address</tt>.
   *
   * Means the following:
   *
   * * sort by <tt>s_first</tt> in ascending order (which is the default).
   * * sort by <tt>s_last</tt> in ascending order (which is specified explicitly).
   * * sort by <tt>m_amount</tt> field of <tt>o_account</tt> cell in descending order.
   * * sort by default field (i.e. the one marked with &#64;`sort` tag) of <tt>o_address</tt> cell in ascending order.
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
   * See <tt>namespace.Wl/Report/Generator/doc/report-query-sql.md</tt> for details.
   *
   * Empty string to select all columns of the report table.
   *
   * @post post
   * @type {string}
   */
  this.s_sql = undefined;

  /**
   * Actor user.
   *
   * Primary key in {@link \PassportLoginSql}.
   *
   * `0` or an empty string for guests.
   *
   * @post post
   * @type {string}
   */
  this.uid_actor = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Report_Generator_QueryModel);

/**
 * @inheritDoc
 */
Wl_Report_Generator_QueryModel.prototype.config=function()
{
  return {"a_field": {"a_dynamic": {"post": {"result": true}},"a_field": {"post": {"result": true}},"a_row": {"post": {"result": true}},"a_stale": {"post": {"result": true}},"a_warning": {"post": {"result": true}},"cid_report": {"post": {"post": true}},"dtu_complete": {"post": {"result": true}},"dtu_queue": {"post": {"result": true}},"dtu_start": {"post": {"result": true}},"i_limit": {"post": {"post": true}},"i_offset": {"post": {"post": true}},"id_report_status": {"post": {"result": true}},"is_refresh": {"post": {"post": true}},"json_filter": {"post": {"post": true}},"k_business": {"post": {"post": true}},"s_report": {"post": {"result": true}},"s_sort": {"post": {"post": true}},"s_sql": {"post": {"post": true}},"uid_actor": {"post": {"post": true}}}};
};