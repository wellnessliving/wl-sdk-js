/**
 * Returns information about filters.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Report_Generator_FilterInfoModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Additional filter field data.
   *
   * This array is gathered with data returned by {@link \Wl\Report\Generator\ReportFilterFieldAbstract::data()}.
   *
   * @get result
   * @type {*}
   */
  this.a_data = undefined;

  /**
   * A list of dynamic filter fields in this report.
   *
   * Copy of result of {@link \Wl\Report\Generator\ReportGeneratorReportAbstract::filterDynamic()}.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_dynamic = undefined;

  /**
   * A list of hidden filter fields in this report.
   *
   * Each element is a {@link ReportFilterFieldInfo::$s_name filter field name}.
   *
   * @get result
   * @type {string[]}
   */
  this.a_hide = undefined;

  /**
   * Warning list of the report.
   *
   * @get result
   * @type {string[]}
   */
  this.a_message = undefined;

  /**
   * CID of the report which filter information should be retrieved.
   *
   * One of {@link ReportGeneratorReportAbstract} subclasses.
   *
   * @get get
   * @type {number}
   */
  this.cid_report = undefined;

  /**
   * Filters that should be applied to the report.
   *
   * In this array, key is name of a filter field.
   * A filter field is a property of a {@link ReportFilterAbstract} subclass.
   * Name of the property of that subclass corresponds key in this array.
   *
   * @get get
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
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Actor user.
   *
   * Primary key in {@link \PassportLoginSql}.
   *
   * `0` or an empty string for guests.
   *
   * @get get
   * @type {string}
   */
  this.uid_actor = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Report_Generator_FilterInfoModel);

/**
 * @inheritDoc
 */
Wl_Report_Generator_FilterInfoModel.prototype.config=function()
{
  return {"a_field": {"a_data": {"get": {"result": true}},"a_dynamic": {"get": {"result": true}},"a_hide": {"get": {"result": true}},"a_message": {"get": {"result": true}},"cid_report": {"get": {"get": true}},"json_filter": {"get": {"get": true}},"k_business": {"get": {"get": true}},"uid_actor": {"get": {"get": true}}}};
};