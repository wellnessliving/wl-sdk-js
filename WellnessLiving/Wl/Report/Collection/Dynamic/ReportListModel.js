/**
 * Handles list of reports available to be put into a dynamic collection.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Report_Collection_Dynamic_ReportListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid,cid_dynamic_collection";

  /**
   * @typedef {{}} Wl_Report_Collection_Dynamic_ReportListModel_a_report_list
   * @property {number} i_position Position of the report in the list of available collection reports. Always 0 in this method.
   * @property {number} id_report Report ID, one of {@link \RsReportSid}.
   * @property {string} text_title Report title.
   */

  /**
   * List of available reports. Each item has the following structure:
   * <dl>
   *   <dt>
   *     int <var>i_position</var>
   *   </dt>
   *   <dd>
   *     Position of the report in the list of available collection reports. Always 0 in this method.
   *   </dd>
   *   <dt>
   *     int <var>id_report</var>
   *   </dt>
   *   <dd>
   *     Report ID, one of {@link \RsReportSid}.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     Report title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Report_Collection_Dynamic_ReportListModel_a_report_list}
   */
  this.a_report_list = undefined;

  /**
   * CID of a subclass of {@link DynamicCollection}.
   *
   * @get get
   * @type {number}
   */
  this.cid_dynamic_collection = 0;

  /**
   * Business key. Primary key in the {@link \RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * User key. Primary key in the {@link \PassportLoginSql} table.
   *
   * Must be the same as currently logged-in user.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Report_Collection_Dynamic_ReportListModel);

/**
 * @inheritDoc
 */
Wl_Report_Collection_Dynamic_ReportListModel.prototype.config=function()
{
  return {"a_field": {"a_report_list": {"get": {"result": true}},"cid_dynamic_collection": {"get": {"get": true}},"k_business": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Report_Collection_Dynamic_ReportListModel.instanceGet
 * @param {string} k_business Business key. Primary key in the {@link \RsBusinessSql} table.
 * @param {string} uid User key. Primary key in the {@link \PassportLoginSql} table. Must be the same as currently logged-in user.
 * @param {number} cid_dynamic_collection CID of a subclass of {@link DynamicCollection}.
 * @returns {Wl_Report_Collection_Dynamic_ReportListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */