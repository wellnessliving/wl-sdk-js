/**
 * Get key of country, key of region and name of city from geo city key.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Geo_GeoAddressModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_geo_city";

  /**
   * Geo city key. Primary key in the {@link \AGeoSql} table.
   *
   * @get get
   * @type {?string}
   */
  this.k_geo_city = null;

  /**
   * Geo country key. Primary key in the {@link \AGeoSql} table.
   *
   * @get result
   * @type {?string}
   */
  this.k_geo_country = null;

  /**
   * Geo region key. Primary key in the {@link \AGeoSql} table.
   *
   * @get result
   * @type {?string}
   */
  this.k_geo_region = null;

  /**
   * Name of the city.
   *
   * @get result
   * @type {?string}
   */
  this.text_city = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Geo_GeoAddressModel);

/**
 * @inheritDoc
 */
Core_Geo_GeoAddressModel.prototype.config=function()
{
  return {"a_field": {"k_geo_city": {"get": {"get": true}},"k_geo_country": {"get": {"result": true}},"k_geo_region": {"get": {"result": true}},"text_city": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Core_Geo_GeoAddressModel.instanceGet
 * @param {?string} k_geo_city Geo city key. Primary key in the {@link \AGeoSql} table.
 * @returns {Core_Geo_GeoAddressModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */