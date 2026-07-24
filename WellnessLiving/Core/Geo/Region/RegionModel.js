/**
 * Retrieves information about countries and regions.
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
   * @property {Core_Geo_Region_RegionModel_a_region_a_region} a_region A list of regions in the country. Every element has the next keys:
   * @property {number} id_locale The locale ID of the country. One of the {@link Core_Locale_LocaleSid} constants.
   * @property {string} k_geo_country The country key.
   * @property {string} s_abbr The country abbreviation.
   * @property {string} s_title The name of the country.
   */

  /**
   * A list of regions grouped by their country.
   *
   * @get result
   * @type {Core_Geo_Region_RegionModel_a_region[]}
   */
  this.a_region = undefined;

  /**
   * The locale ID to find regions for. One of the {@link Core_Locale_LocaleSid} constants.
   *
   * @get get
   * @see Core_Locale_LocaleSid
   * @type {number}
   */
  this.id_locale = 0;

  /**
   * Determines whether to get regions for all locales.
   *
   * If `true`, this will get regions for all locales. Otherwise, this will be `false`.
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
  return {"a_field":{"a_region":{"get":{"result":true}},"id_locale":{"get":{"get":true}},"is_locale_all":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Core_Geo_Region_RegionModel.instanceGet
 * @param {number} id_locale The locale ID to find regions for. One of the {@link Core_Locale_LocaleSid} constants.
 * @returns {Core_Geo_Region_RegionModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves information about countries and regions.
 *
 * Populates country and region dropdowns in address forms. Returns one or all countries together with
 * their subordinate regions (states, provinces, territories). Pass a locale to get only the country
 * relevant to a given market, or set `$is_locale_all` to retrieve the full list for multi-country UIs.
 *
 * @function
 * @name Core_Geo_Region_RegionModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
