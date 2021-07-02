/**
 * Returns default payment address data that is retrieved from user profile.
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
   * The business identifier in which editing is performed.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * ID of GEO country.
   *
   * @get result
   * @type {?string}
   */
  this.k_geo_country = null;

  /**
   * ID of GEO region.
   *
   * @get result
   * @type {?string}
   */
  this.k_geo_region = null;

  /**
   * Name of the city. <tt>null</tt> if city is not selected in user profile.
   *
   * @get result
   * @type {?string}
   */
  this.s_city = null;

  /**
   * Name of the user. <tt>null</tt> if user name is not entered in user profile.
   *
   * @get result
   * @type {?string}
   */
  this.s_name = null;

  /**
   * Phone number.
   *
   * @get result
   * @type {?string}
   */
  this.s_phone = null;

  /**
   * Postal code. <tt>null</tt> if postal code is not entered in user profile.
   *
   * @get result
   * @type {?string}
   */
  this.s_postal = null;

  /**
   * Street address, line 1. <tt>null</tt> if street address is not entered in user profile.
   *
   * @get result
   * @type {?string}
   */
  this.s_street1 = null;

  /**
   * Street address, line 2. <tt>null</tt> if street address is not entered in user profile.
   *
   * @get result
   * @type {?string}
   */
  this.s_street2 = null;

  /**
   * ID of a user whose default payment address should be returned.
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
 * @param {string} k_business The business identifier in which editing is performed.
 * @param {string} uid ID of a user whose default payment address should be returned.
 * @returns {Wl_Pay_Address_ProfileModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */