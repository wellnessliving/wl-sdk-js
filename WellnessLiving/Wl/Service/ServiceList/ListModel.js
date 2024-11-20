/**
 * Service list.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Service_ServiceList_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Service_ServiceList_ListModel_a_service
   * @property {boolean} hide_application Whether service will be hidden in the White Label mobile application.
   *  <tt>true</tt> means that service will not be displayed, <tt>false</tt> otherwise.
   * @property {string} k_service Service identifier, primary key in {@link \RsServiceSql}.
   * @property {string} k_service_category Service category identifier, primary key in {@link \RsServiceCategorySql}.
   * @property {string} text_service Service name.
   */

  /**
   * Services list:
   * <dl>
   *   <dt>
   *     bool <var>hide_application</var>
   *   </dt>
   *   <dd>
   *      Whether service will be hidden in the White Label mobile application.
   *      <tt>true</tt> means that service will not be displayed, <tt>false</tt> otherwise.
   *   </dd>
   *   <dt>
   *     string <var>k_service</var>
   *   </dt>
   *   <dd>
   *     Service identifier, primary key in {@link \RsServiceSql}.
   *   </dd>
   *   <dt>
   *     string <var>k_service_category</var>
   *   </dt>
   *   <dd>
   *     Service category identifier, primary key in {@link \RsServiceCategorySql}.
   *   </dd>
   *   <dt>
   *     string <var>text_service</var>
   *   </dt>
   *   <dd>
   *     Service name.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Service_ServiceList_ListModel_a_service[]}
   */
  this.a_service = undefined;

  /**
   * Whether to return franchisee-created services (if business is franchisor).
   * <tt>true</tt> to include franchisee-created services.
   *
   * @get get
   * @type {boolean}
   */
  this.is_franchise = false;

  /**
   * Business key, primary key in {@link \RsBusinessSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Service_ServiceList_ListModel);

/**
 * @inheritDoc
 */
Wl_Service_ServiceList_ListModel.prototype.config=function()
{
  return {"a_field": {"a_service": {"get": {"result": true}},"is_franchise": {"get": {"get": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Service_ServiceList_ListModel.instanceGet
 * @param {string} k_business Business key, primary key in {@link \RsBusinessSql}.
 * @returns {Wl_Service_ServiceList_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */