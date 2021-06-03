/**
 * List of regions.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Geo_Region_RegionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "id_locale";

  /**
   * @typedef {{}} Core_Geo_Region_RegionModel_a_region_a_region
   * @property {string} k_geo Region key.
   * @property {string} s_title Region name.
   */
  /**
   * @typedef {{}} Core_Geo_Region_RegionModel_a_region
   * @property {Core_Geo_Region_RegionModel_a_region_a_region[]} a_region List of regions within the country: <dl>
   *   <dt>
   *     string <tt>k_geo</tt>
   *   </dt>
   *   <dd>
   *     Region key.
   *   </dd>
   *   <dt>
   *     string <tt>s_title</tt>
   *   </dt>
   *   <dd>
   *     Region name.
   *   </dd>
   * </dl>
   * @property {string} k_geo_country Country key.
   * @property {string} s_title Country name.
   */

  /**
   * List of countries and nested regions.
   * <dl>
   *   <dt>
   *     string[] <var>a_region</var>
   *   </dt>
   *   <dd>
   *     List of regions within the country: <dl>
   *       <dt>
   *         string <var>k_geo</var>
   *       </dt>
   *       <dd>
   *         Region key.
   *       </dd>
   *       <dt>
   *         string <var>s_title</var>
   *       </dt>
   *       <dd>
   *         Region name.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     string <var>k_geo_country</var>
   *   </dt>
   *   <dd>
   *     Country key.
   *   </dd>
   *   <dt>
   *     string <var>s_title</var>
   *   </dt>
   *   <dd>
   *     Country name.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Core_Geo_Region_RegionModel_a_region[]}
   */
  this.a_region = undefined;

  /**
   * ID of locale to get regions for.
   *
   * @get get
   * @type {number}
   */
  this.id_locale = 0;

  /**
   * Whether to get regions for all locales.
   *
   * <tt>true</tt> - to get regions for all locales, <tt>false</tt> - otherwise.
   * By default <tt>false</tt>.
   *
   * @get get
   * @type {boolean}
   */
  this.is_locale_all = 0;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Geo_Region_RegionModel);

/**
 * @inheritDoc
 */
Core_Geo_Region_RegionModel.prototype.config=function()
{
  return {"a_field": {"a_region": {"get": {"result": true}},"id_locale": {"get": {"get": true}},"is_locale_all": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Core_Geo_Region_RegionModel.instanceGet
 * @param {number} id_locale ID of locale to get regions for.
 * @returns {Core_Geo_Region_RegionModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */