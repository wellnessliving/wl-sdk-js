/**
 * Resources list.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Resource_ResourceList_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Resource_ResourceList_ListModel_a_resource
   * @property {boolean} hide_application Whether resource will be hidden in the White Label mobile application.
   *  <tt>true</tt> means that resource will not be displayed, <tt>false</tt> otherwise.
   * @property {boolean} is_active Whether resource is active.
   * @property {string} k_resource Resource identifier, primary key in {@link \RsClassSql}.
   * @property {string} text_title Resource name.
   */

  /**
   * Resources list:
   * <dl>
   *   <dt>
   *     bool <var>hide_application</var>
   *   </dt>
   *   <dd>
   *      Whether resource will be hidden in the White Label mobile application.
   *      <tt>true</tt> means that resource will not be displayed, <tt>false</tt> otherwise.
   *   </dd>
   *   <dt>
   *     bool <var>is_active</var>
   *   </dt>
   *   <dd>
   *     Whether resource is active.
   *   </dd>
   *   <dt>
   *     string <var>k_resource</var>
   *   </dt>
   *   <dd>
   *     Resource identifier, primary key in {@link \RsClassSql}.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     Resource name.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Resource_ResourceList_ListModel_a_resource[]}
   */
  this.a_resource = undefined;

  /**
   * Whether to return franchisee-created resources (if business is franchisor).
   * <tt>true</tt> to include franchisee-created resources.
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

WlSdk_ModelAbstract.extend(Wl_Resource_ResourceList_ListModel);

/**
 * @inheritDoc
 */
Wl_Resource_ResourceList_ListModel.prototype.config=function()
{
  return {"a_field": {"a_resource": {"get": {"result": true}},"is_franchise": {"get": {"get": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Resource_ResourceList_ListModel.instanceGet
 * @param {string} k_business Business key, primary key in {@link \RsBusinessSql}.
 * @returns {Wl_Resource_ResourceList_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */