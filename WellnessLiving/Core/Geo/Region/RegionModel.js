/**
 * Gets a list of regions for a specified country or a list of regions for all countries.
 * A region is a political subdivision like a state, province, or territory.
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
   * @property {string} k_geo The region key.
   * @property {string} s_title The name of the region.
   */
  /**
   * @typedef {{}} Core_Geo_Region_RegionModel_a_region
   * @property {Core_Geo_Region_RegionModel_a_region_a_region[]} a_region List of region in country. Every element has keys: <dl>
   *   <dt>
   *     string <tt>k_geo</tt>
   *   </dt>
   *   <dd>
   *     The region key.
   *   </dd>
   *   <dt>
   *     string <tt>s_title</tt>
   *   </dt>
   *   <dd>
   *     The name of the region.
   *   </dd>
   * </dl>
   * @property {string} k_geo_country The country key.
   * @property {string} s_title The name of the country
   */

  /**
   * A list of regions, grouped by their countries.
   * <dl>
   *   <dt>
   *     string[] <var>a_region</var>
   *   </dt>
   *   <dd>
   *     List of region in country. Every element has keys: <dl>
   *       <dt>
   *         string <var>k_geo</var>
   *       </dt>
   *       <dd>
   *         The region key.
   *       </dd>
   *       <dt>
   *         string <var>s_title</var>
   *       </dt>
   *       <dd>
   *         The name of the region.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     string <var>k_geo_country</var>
   *   </dt>
   *   <dd>
   *     The country key.
   *   </dd>
   *   <dt>
   *     string <var>s_title</var>
   *   </dt>
   *   <dd>
   *     The name of the country
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Core_Geo_Region_RegionModel_a_region[]}
   */
  this.a_region = undefined;

  /**
   * The ID of the locale to find regions for. One of the {@link Core_Locale_LocaleSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_locale = 0;

  /**
   * Whether to get the regions for all locales.
   *
   * If `true` then get regions for all locales, `false` - otherwise.
   *
   * @get get
   * @type {boolean}
   */
  this.is_locale_all = false;

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
 * @param {number} id_locale The ID of the locale to find regions for. One of the {@link Core_Locale_LocaleSid} constants.
 * @returns {Core_Geo_Region_RegionModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */