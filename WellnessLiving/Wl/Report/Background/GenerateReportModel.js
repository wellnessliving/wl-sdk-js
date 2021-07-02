/**
 * Manages accumulation of the report.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Report_Background_GenerateReportModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Status of the report background generation.
   * One of {@link \Wl\Report\Accumulation\ReportAccumulationStatusSid} constants.
   * <tt>0</tt> in case of report title updating.
   *
   * @get result
   * @put get
   * @type {number}
   */
  this.id_status = 0;

  /**
   * Whether the report should be displayed in Generated reports.
   *
   * @post get
   * @type {boolean}
   */
  this.is_need_show = false;

  /**
   * Business key.
   *
   * @delete get
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Key of the report file generation.
   *
   * @delete get
   * @get get
   * @post get
   * @put get
   * @type {*}
   */
  this.k_report_accumulation = undefined;

  /**
   * Title of generated report.
   *
   * @put get
   * @type {string}
   */
  this.text_title = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Report_Background_GenerateReportModel);

/**
 * @inheritDoc
 */
Wl_Report_Background_GenerateReportModel.prototype.config=function()
{
  return {"a_field": {"id_status": {"get": {"result": true},"put": {"get": true}},"is_need_show": {"post": {"get": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}},"k_report_accumulation": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}},"text_title": {"put": {"get": true}}}};
};