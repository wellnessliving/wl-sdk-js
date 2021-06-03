/**
 * Retrieves a list of information about locations in the catalog.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Catalog_Location_LocationModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * A list of information about locations.
   *
   * @get result
   * @type {{}}
   */
  this.a_location = undefined;

  /**
   * ID of the business.
   *
   * @get get
   * @type {number}
   */
  this.k_business = 0;

  /**
   * Location key that was selected by the client last time.
   *
   * @get result
   * @type {string}
   */
  this.k_location_active = undefined;

  /**
   * Home location ID.
   *
   * @get result
   * @type {string}
   */
  this.k_location_home = undefined;

  /**
   * Random location ID for the business.
   *
   * @get result
   * @type {string}
   */
  this.k_location_random = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_Location_LocationModel);

/**
 * @inheritDoc
 */
Wl_Catalog_Location_LocationModel.prototype.config=function()
{
  return {"a_field": {"a_location": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_location_active": {"get": {"result": true}},"k_location_home": {"get": {"result": true}},"k_location_random": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Catalog_Location_LocationModel.instanceGet
 * @param {number} k_business ID of the business.
 * @returns {Wl_Catalog_Location_LocationModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */