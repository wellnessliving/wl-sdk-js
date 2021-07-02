/**
 * Resources list.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Resource_Select_ResourceModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_location,is_book";

  /**
   * @typedef {{}} Wl_Resource_Select_ResourceModel_a_resource
   * @property {boolean} is_active Whether resource is active.
   * @property {string} k_resource Resource identifier, primary key in {@link \RsResourceSql}.
   * @property {string} text_title Resource name.
   */

  /**
   * Resources list:
   * <dl>
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
   *     Resource identifier, primary key in {@link \RsResourceSql}.
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
   * @type {Wl_Resource_Select_ResourceModel_a_resource[]}
   */
  this.a_resource = undefined;

  /**
   * @typedef {{}} Wl_Resource_Select_ResourceModel_a_resource_period
   * @property {string} html_title Title of resources period.
   * @property {number} i_duration Duration of asset.
   * @property {boolean} is_select <tt>true</tt> if asset was selected. <tt>false</tt> in other cases.
   * @property {boolean} is_visible <tt>true</tt> if asset are visible. <tt>false</tt> in other cases.
   * @property {string} k_resource Asset key. Primary key in {@link \RsResourceSql} table.
   * @property {string} k_resource_type Key of asset category. Primary key in {@link RsResourceTypeSql} table.
   */

  /**
   * Resources period data list:
   * <dl>
   *   <dt>
   *     string <var>html_title</var>
   *   </dt>
   *   <dd>
   *     Title of resources period.
   *   </dd>
   *   <dt>
   *     int <var>i_duration</var>
   *   </dt>
   *   <dd>
   *     Duration of asset.
   *   </dd>
   *   <dt>
   *     bool <var>is_select</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if asset was selected. <tt>false</tt> in other cases.
   *   </dd>
   *   <dt>
   *     bool <var>is_visible</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if asset are visible. <tt>false</tt> in other cases.
   *   </dd>
   *   <dt>
   *     string <var>k_resource</var>
   *   </dt>
   *   <dd>
   *     Asset key. Primary key in {@link \RsResourceSql} table.
   *   </dd>
   *   <dt>
   *     string <var>k_resource_type</var>
   *   </dt>
   *   <dd>
   *     Key of asset category. Primary key in {@link RsResourceTypeSql} table.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Resource_Select_ResourceModel_a_resource_period}
   */
  this.a_resource_period = undefined;

  /**
   * Resources period one template.
   *
   * @get result
   * @type {string}
   */
  this.html_period_one = undefined;

  /**
   * Duration of the service in minutes.
   * <tt>null</tt> if duration not set.
   *
   * @get get
   * @type {?number}
   */
  this.i_duration = null;

  /**
   * ID of the purchase item.
   * One of {@link RsPurchaseItemSid} constants.
   * <tt>null</tt> if purchase item id not set.
   *
   * @get get
   * @type {number}
   */
  this.id_purchase_item = undefined;

  /**
   * If return only bookable resources. If <tt>false</tt> returns all resources.
   *
   * @get get
   * @type {boolean}
   */
  this.is_book = true;

  /**
   * If need period only data.
   *
   * @get get
   * @type {boolean}
   */
  this.is_period_only = false;

  /**
   * Is resource period data needed. <tt>true</tt> if need resource period data.
   *   <tt>false</tt> if this data not need.
   *
   * @get get
   * @type {boolean}
   */
  this.is_resource_period = false;

  /**
   * Business key, primary key in {@link \RsBusinessSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Location to show resource.
   * Primary key in {@link \RsLocationSql} table.
   *
   * @get get
   * @type {?string}
   */
  this.k_location = null;

  /**
   * Asset primary key in {@link \RsResourceSql} table.
   *
   * @get get
   * @type {?string}
   */
  this.k_resource = null;

  /**
   * Whether duration is empty. <tt>true</tt> if duration not empty.
   *   <tt>false</tt> if duration empty.
   *
   * @get get
   * @type {boolean}
   */
  this.not_duration_empty = false;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Resource_Select_ResourceModel);

/**
 * @inheritDoc
 */
Wl_Resource_Select_ResourceModel.prototype.config=function()
{
  return {"a_field": {"a_resource": {"get": {"result": true}},"a_resource_period": {"get": {"result": true}},"html_period_one": {"get": {"result": true}},"i_duration": {"get": {"get": true}},"id_purchase_item": {"get": {"get": true}},"is_book": {"get": {"get": true}},"is_period_only": {"get": {"get": true}},"is_resource_period": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_location": {"get": {"get": true}},"k_resource": {"get": {"get": true}},"not_duration_empty": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Resource_Select_ResourceModel.instanceGet
 * @param {string} k_business Business key, primary key in {@link \RsBusinessSql}.
 * @param {?string} k_location Location to show resource. Primary key in {@link \RsLocationSql} table.
 * @param {boolean} is_book If return only bookable resources. If <tt>false</tt> returns all resources.
 * @returns {Wl_Resource_Select_ResourceModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */