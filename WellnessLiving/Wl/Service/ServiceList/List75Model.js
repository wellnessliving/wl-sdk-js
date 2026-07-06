/**
 * Versioned list of appointment types with support for selected inactive services.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @see Wl\Service\ServiceList\List75Api
 */
function Wl_Service_ServiceList_List75Model()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,is_franchise";

  /**
   * @typedef {{}} Wl_Service_ServiceList_List75Model_a_service
   * @property {boolean} hide_application Whether service will be hidden in the White Label mobile application.
   *  <tt>true</tt> means that service will not be displayed, <tt>false</tt> otherwise.
   * @property {boolean} is_active Whether appointment type is active.
   * @property {string} k_service Service key.
   * @property {string} k_service_category Service category key.
   * @property {string} text_category Service category name.
   * @property {string} text_service Service name.
   */

  /**
   * Services list.
   *
   * <dl>
   *   <dt>
   *     bool <var>hide_application</var>
   *   </dt>
   *   <dd>
   *      Whether service will be hidden in the White Label mobile application.
   *      <tt>true</tt> means that service will not be displayed, <tt>false</tt> otherwise.
   *   </dd>
   *   <dt>
   *     bool <var>is_active</var>
   *   </dt>
   *   <dd>
   *     Whether appointment type is active.
   *   </dd>
   *   <dt>
   *     string <var>k_service</var>
   *   </dt>
   *   <dd>
   *     Service key.
   *   </dd>
   *   <dt>
   *     string <var>k_service_category</var>
   *   </dt>
   *   <dd>
   *     Service category key.
   *   </dd>
   *   <dt>
   *     string <var>text_category</var>
   *   </dt>
   *   <dd>
   *     Service category name.
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
   * @type {Wl_Service_ServiceList_List75Model_a_service[]}
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
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Service_ServiceList_List75Model);

/**
 * @inheritDoc
 */
Wl_Service_ServiceList_List75Model.prototype.config=function()
{
  return {"a_field": {"a_service": {"get": {"result": true}},"is_franchise": {"get": {"get": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Service_ServiceList_List75Model.instanceGet
 * @param {string} k_business Business key.
 * @param {boolean} is_franchise Whether to return franchisee-created services (if business is franchisor). <tt>true</tt> to include franchisee-created services.
 * @returns {Wl_Service_ServiceList_List75Model}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

