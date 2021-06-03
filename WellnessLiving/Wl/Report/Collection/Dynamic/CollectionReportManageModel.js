/**
 * API to manage separate reports in a collection.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Report_Collection_Dynamic_CollectionReportManageModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid,k_dynamic_collection_report";

  /**
   * Report ID within the collection, one of {@link \RsReportSid}.
   *
   * Must be provided in combination with <var>k_dynamic_collection</var>.
   * Ignored if <var>k_dynamic_collection_report</var> is provided.
   *
   * <tt>null</tt> if <var>k_dynamic_collection_report</var> is provided instead.
   *
   * @delete get
   * @type {?number}
   */
  this.id_report = null;

  /**
   * Business key. Primary key in the {@link \RsBusinessSql} table.
   *
   * @delete get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of dynamic collection to which <var>id_report</var> belongs. Primary key in {@link DynamicCollectionSql} table.
   *
   * Must be provided in combination with <var>id_report</var>.
   * Ignored if <var>k_dynamic_collection_report</var> is provided.
   *
   * <tt>null</tt> if <var>k_dynamic_collection_report</var> is provided instead.
   *
   * @delete get
   * @type {?string}
   */
  this.k_dynamic_collection = null;

  /**
   * Key of the dynamic collection report to manage. Primary key in {@link DynamicCollectionReportSql} table.
   *
   * Must be provided if <var>k_dynamic_collection</var> and <var>id_report</var> are empty.
   *
   * <tt>null</tt> if <var>k_dynamic_collection</var> and <var>id_report</var> pair are provided instead.
   *
   * @delete get
   * @type {?string}
   */
  this.k_dynamic_collection_report = null;

  /**
   * Key of the user performing the request. Must be the same as currently logged-in user.
   *
   * @delete get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Report_Collection_Dynamic_CollectionReportManageModel);

/**
 * @inheritDoc
 */
Wl_Report_Collection_Dynamic_CollectionReportManageModel.prototype.config=function()
{
  return {"a_field": {"id_report": {"delete": {"get": true}},"k_business": {"delete": {"get": true}},"k_dynamic_collection": {"delete": {"get": true}},"k_dynamic_collection_report": {"delete": {"get": true}},"uid": {"delete": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Report_Collection_Dynamic_CollectionReportManageModel.instanceGet
 * @param {string} k_business Business key. Primary key in the {@link \RsBusinessSql} table.
 * @param {string} uid Key of the user performing the request. Must be the same as currently logged-in user.
 * @param {?string} k_dynamic_collection_report Key of the dynamic collection report to manage. Primary key in {@link DynamicCollectionReportSql} table. Must be provided if <var>k_dynamic_collection</var> and <var>id_report</var> are empty. <tt>null</tt> if <var>k_dynamic_collection</var> and <var>id_report</var> pair are provided instead.
 * @returns {Wl_Report_Collection_Dynamic_CollectionReportManageModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */