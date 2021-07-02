/**
 * Data about access of current user to certain report.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Report_AccessModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "id_report,k_business";

  /**
   * <tt>true</tt> - access is granted; <tt>false</tt> - access is denied.
   *
   * @get result
   * @type {boolean}
   */
  this.has_access = undefined;

  /**
   * Report ID. One of {@link \RsReportSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_report = 0;

  /**
   * ID of business for which access must be checked. Primary key in {@link \RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Report_AccessModel);

/**
 * @inheritDoc
 */
Wl_Report_AccessModel.prototype.config=function()
{
  return {"a_field": {"has_access": {"get": {"result": true}},"id_report": {"get": {"get": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Report_AccessModel.instanceGet
 * @param {number} id_report Report ID. One of {@link \RsReportSid} constants.
 * @param {string} k_business ID of business for which access must be checked. Primary key in {@link \RsBusinessSql} table.
 * @returns {Wl_Report_AccessModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */