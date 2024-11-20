/**
 * Point to get current geo position.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Geo_GeoPositionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Latitude coordinate.
   *
   * @get result
   * @type {number}
   */
  this.f_latitude = undefined;

  /**
   * Longitude coordinate.
   *
   * @get result
   * @type {number}
   */
  this.f_longitude = undefined;

  /**
   * City primary key in {@link \AGeoSql} table.
   *
   * @get result
   * @type {string}
   */
  this.k_city = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Geo_GeoPositionModel);

/**
 * @inheritDoc
 */
Core_Geo_GeoPositionModel.prototype.config=function()
{
  return {"a_field": {"f_latitude": {"get": {"result": true}},"f_longitude": {"get": {"result": true}},"k_city": {"get": {"result": true}}}};
};