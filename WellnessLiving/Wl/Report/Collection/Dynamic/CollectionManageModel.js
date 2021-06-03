/**
 * API that manages dynamic collection.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Report_Collection_Dynamic_CollectionManageModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid,k_dynamic_collection";

  /**
   * List of widgets that are displayed on the dashboard.
   *
   * <tt>null</tt> if list of widgets doesn't need to be updated.
   *
   * Structure of each item: <dl>
   *    <dt>int <var>i_position</var></dt>
   *    <dd>Report's position in the collection.</dd>
   *    <dt>int <var>id_report</var></dt>
   *    <dd>Report ID, one of {@link \RsReportSid}.</dd>
   * </dl>
   *
   * @get result
   * @put post
   * @type {?number[][]}
   */
  this.a_report_list = null;

  /**
   * CID of the collection class.
   *
   * @get result
   * @type {number}
   */
  this.cid_collection = undefined;

  /**
   * Business key.
   * Primary key in the {@link \RsBusinessSql} table.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the dynamic collection to manage. Primary key in {@link DynamicCollectionSql} table.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_dynamic_collection = "";

  /**
   * Collection title
   *
   * @get result
   * @type {string}
   */
  this.text_title = undefined;

  /**
   * Key of the user performing the request. Must be the same as currently logged-in user.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Report_Collection_Dynamic_CollectionManageModel);

/**
 * @inheritDoc
 */
Wl_Report_Collection_Dynamic_CollectionManageModel.prototype.config=function()
{
  return {"a_field": {"a_report_list": {"get": {"result": true},"put": {"post": true}},"cid_collection": {"get": {"result": true}},"k_business": {"get": {"get": true},"put": {"get": true}},"k_dynamic_collection": {"get": {"get": true},"put": {"get": true}},"text_title": {"get": {"result": true}},"uid": {"get": {"get": true},"put": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Report_Collection_Dynamic_CollectionManageModel.instanceGet
 * @param {string} k_business Business key. Primary key in the {@link \RsBusinessSql} table.
 * @param {string} uid Key of the user performing the request. Must be the same as currently logged-in user.
 * @param {string} k_dynamic_collection Key of the dynamic collection to manage. Primary key in {@link DynamicCollectionSql} table.
 * @returns {Wl_Report_Collection_Dynamic_CollectionManageModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */