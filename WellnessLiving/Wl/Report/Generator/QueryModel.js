/**
 * Returns contents of a report as a table.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Report_Generator_QueryModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Report_Generator_QueryModel_a_dynamic
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
   * @type {Wl_Report_Generator_QueryModel_a_dynamic[]}
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
   * CID of the report to show.
   *
   * One of {@link Thoth_ReportCore_Generator_ReportGeneratorReportAbstract} subclasses.
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
   * Status of the report.
   *
   * One of {@link Thoth_ReportCore_Generator_ReportGeneratorStatusSid} constants.
   *
   * @post result
   * @see Thoth_ReportCore_Generator_ReportGeneratorStatusSid
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
  this.json_filter = "[]";

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

WlSdk_ModelAbstract.extend(Wl_Report_Generator_QueryModel);

/**
 * @inheritDoc
 */
Wl_Report_Generator_QueryModel.prototype.config=function()
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
 * @name Wl_Report_Generator_QueryModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
