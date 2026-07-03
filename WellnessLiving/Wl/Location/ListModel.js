/**
 * Retrieves a list of locations for the given business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Location_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * A list of business keys.
   * You can specify this instead of {@link Wl_Location_ListModel} to load data for many businesses in one call.
   *
   * @get get
   * @type {string[]}
   */
  this.a_business = undefined;

  /**
   * @typedef {{}} Wl_Location_ListModel_a_location_a_timezone
   * @property {string} k_timezone Timezone key.
   * @property {string} text_abbr User-friendly short timezone abbreviation, for example 'EST' or 'PST'.
   * @property {string} text_name Full timezone name, for example 'America/New_York'.
   */

  /**
   * @typedef {{}} Wl_Location_ListModel_a_location
   * @property {number[]} a_directories List of directories from {@link RsProjectSid}, where location is published.
   * @property {Wl_Location_ListModel_a_location_a_timezone} a_timezone Information about location timezone:
   * @property {number} f_latitude The location latitude.
   * @property {number} f_longitude The location longitude.
   * @property {number} i_shift Timezone shift in hours.
   * @property {string} k_business The business key.
   * @property {string} k_country Country key.
   * @property {string} k_location The location key.
   * @property {string} k_region Region key.
   * @property {string} s_mail The location email address.
   * @property {string} s_phone The location phone number.
   * @property {string} s_title The location title.
   * @property {string} text_address The location's full address.
   * @property {string} url_logo The location logo's URL. This will only be set if the location has a logo and contains small thumbnail of the image.
   * @property {string} url_logo_source The location logo's URL. This will only be set if the location has a logo and contains full uploaded image.
   */

  /**
   * Information about the business's location(s). If you've specified multiple businesses for this endpoint, this will
   * return location information for multiple businesses. Keys refer to location keys. Values refer to nested arrays with the next keys:
   *
   * @get result
   * @type {Wl_Location_ListModel_a_location[]}
   */
  this.a_location = undefined;

  /**
   * The business key used internally by WellnessLiving.
   *
   * In case when passed regular or franchisee business returns only locations for requested business.
   * In case when passed franchisor business returns locations for all franchisees of this franchisor.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The primary keys of the selected businesses.
   * You can specify this instead of {@link Wl_Location_ListModel} to load data for many businesses in one call.
   *
   * This is the same as `$a_business`, but serialized with JSON (to make the URL shorter).
   *
   * @get get
   * @type {string}
   */
  this.s_business = "";

  /**
   * Determines whether removed locations should be returned.
   *
   * @get get
   * @type {boolean}
   */
  this.show_remove = false;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Location_ListModel);

/**
 * @inheritDoc
 */
Wl_Location_ListModel.prototype.config=function()
{
  return {"a_field":{"a_business":{"get":{"get":true}},"a_location":{"get":{"result":true}},"k_business":{"get":{"get":true}},"s_business":{"get":{"get":true}},"show_remove":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Location_ListModel.instanceGet
 * @param {string} k_business The business key used internally by WellnessLiving. In case when passed regular or franchisee business returns only locations for requested business. In case when passed franchisor business returns locations for all franchisees of this franchisor.
 * @returns {Wl_Location_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves a list of locations for the given business.
 *
 * Accepts a single business key, a JSON-encoded list of business keys, or an array of business keys, and
 * returns location details including coordinates, address, timezone, directories, and logo URLs. For
 * franchisor businesses, automatically expands to include all franchisee locations.
 *
 * @function
 * @name Wl_Location_ListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
