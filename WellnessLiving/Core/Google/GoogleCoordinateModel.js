/**
 * Point to get geo position from address.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Google_GoogleCoordinateModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "s_address";

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
   * Address to get geo position for.
   *
   * @get get
   * @type {string}
   */
  this.s_address = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Google_GoogleCoordinateModel);

/**
 * @inheritDoc
 */
Core_Google_GoogleCoordinateModel.prototype.config=function()
{
  return {"a_field": {"f_latitude": {"get": {"result": true}},"f_longitude": {"get": {"result": true}},"s_address": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Core_Google_GoogleCoordinateModel.instanceGet
 * @param {string} s_address Address to get geo position for.
 * @returns {Core_Google_GoogleCoordinateModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */