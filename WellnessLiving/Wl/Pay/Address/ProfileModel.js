/**
 * An endpoint that retrieves a client’s physical address from their profile.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Address_ProfileModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * The business key number used internally by WellnessLiving.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The country key.
   *
   * This will be `null` if not set yet.
   *
   * @get result
   * @type {?string}
   */
  this.k_geo_country = null;

  /**
   * The region ID.
   *
   * This will be `null` if not set yet.
   *
   * @get result
   * @type {?string}
   */
  this.k_geo_region = null;

  /**
   * The name of the city in the address.
   *
   * This will be `null` if not set yet.
   *
   * @get result
   * @type {?string}
   */
  this.s_city = null;

  /**
   * The client name as listed in their address.
   *
   * This will be `null` if not set yet.
   *
   * @get result
   * @type {?string}
   */
  this.s_name = null;

  /**
   * The client phone number.
   *
   * This will be `null` if not set yet.
   *
   * @get result
   * @type {?string}
   */
  this.s_phone = null;

  /**
   * The client postal or zip code.
   *
   * This will be `null` if not set yet.
   *
   * @get result
   * @type {?string}
   */
  this.s_postal = null;

  /**
   * The first line of the client address.
   *
   * This will be `null` if not set yet.
   *
   * @get result
   * @type {?string}
   */
  this.s_street1 = null;

  /**
   * The second line of the client address.
   *
   * This will be `null` if not set yet.
   *
   * @get result
   * @type {?string}
   */
  this.s_street2 = null;

  /**
   * The key of the user whose data should be retrieved.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Address_ProfileModel);

/**
 * @inheritDoc
 */
Wl_Pay_Address_ProfileModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"get": {"get": true}},"k_geo_country": {"get": {"result": true}},"k_geo_region": {"get": {"result": true}},"s_city": {"get": {"result": true}},"s_name": {"get": {"result": true}},"s_phone": {"get": {"result": true}},"s_postal": {"get": {"result": true}},"s_street1": {"get": {"result": true}},"s_street2": {"get": {"result": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Pay_Address_ProfileModel.instanceGet
 * @param {string} k_business The business key number used internally by WellnessLiving.
 * @param {string} uid The key of the user whose data should be retrieved.
 * @returns {Wl_Pay_Address_ProfileModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */