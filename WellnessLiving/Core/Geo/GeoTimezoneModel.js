/**
 * Get timezone by time offset.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Geo_GeoTimezoneModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Time offset in minutes.
   *
   * @get get
   * @type {number}
   */
  this.i_timezone_offset_minutes = undefined;

  /**
   * Timezone key. <tt>null</tt> if can't determine.
   *
   * @get result
   * @type {?string}
   */
  this.k_timezone = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Geo_GeoTimezoneModel);

/**
 * @inheritDoc
 */
Core_Geo_GeoTimezoneModel.prototype.config=function()
{
  return {"a_field": {"i_timezone_offset_minutes": {"get": {"get": true}},"k_timezone": {"get": {"result": true}}}};
};