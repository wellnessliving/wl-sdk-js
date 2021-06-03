/**
 * Point to save and get last configuration of a report.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Report_Generator_FilterModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "cid_page,cid_report,k_business,uid_actor";

  /**
   * CID of a report page.
   *
   * One of {@link ReportPageAbstract} subclasses.
   *
   * Empty in a case of a single report.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.cid_page = undefined;

  /**
   * CID of a report.
   *
   * One of {@link ReportGeneratorReportAbstract} subclasses.
   *
   * Empty in a case of a report page.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.cid_report = undefined;

  /**
   * Filter that is applied to the report.
   *
   * @get result
   * @post post
   * @type {{}}
   */
  this.json_filter = undefined;

  /**
   * Key of the business that report is shown.
   *
   * Primary key in {@link \RsBusinessSql}.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Actor user key.
   *
   * Primary key in {@link \PassportLoginSql}.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid_actor = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Report_Generator_FilterModel);

/**
 * @inheritDoc
 */
Wl_Report_Generator_FilterModel.prototype.config=function()
{
  return {"a_field": {"cid_page": {"get": {"get": true},"post": {"get": true}},"cid_report": {"get": {"get": true},"post": {"get": true}},"json_filter": {"get": {"result": true},"post": {"post": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"uid_actor": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Report_Generator_FilterModel.instanceGet
 * @param {number} cid_page CID of a report page. One of {@link ReportPageAbstract} subclasses. Empty in a case of a single report.
 * @param {number} cid_report CID of a report. One of {@link ReportGeneratorReportAbstract} subclasses. Empty in a case of a report page.
 * @param {string} k_business Key of the business that report is shown. Primary key in {@link \RsBusinessSql}.
 * @param {string} uid_actor Actor user key. Primary key in {@link \PassportLoginSql}.
 * @returns {Wl_Report_Generator_FilterModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */