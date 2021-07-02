/**
 * Information about a report.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Report_InfoModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "id_report,k_business";

  /**
   * Report ID. One of {@link \RsReportSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_report = 0;

  /**
   * Report type ID. One of {@link RsReportTypeSid} constants.
   *
   * @get result
   * @type {number}
   */
  this.id_report_type = undefined;

  /**
   * ID of business for which report must be generated. Primary key in {@link \RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Report_InfoModel);

/**
 * @inheritDoc
 */
Wl_Report_InfoModel.prototype.config=function()
{
  return {"a_field": {"id_report": {"get": {"get": true}},"id_report_type": {"get": {"result": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Report_InfoModel.instanceGet
 * @param {number} id_report Report ID. One of {@link \RsReportSid} constants.
 * @param {string} k_business ID of business for which report must be generated. Primary key in {@link \RsBusinessSql} table.
 * @returns {Wl_Report_InfoModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */