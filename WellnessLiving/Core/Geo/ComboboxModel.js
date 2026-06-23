/**
 * Returns a list of cities to show in combobox list.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Geo_ComboboxModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "id_locale,s_value";

  /**
   * @typedef {{}} Core_Geo_ComboboxModel_a_list
   * @property {string} s_key The `k_city` value for the city.
   * @property {string} s_value The human-readable name of the city, including the state/province and country.
   */

  /**
   * A list of items to show in the combobox list.
   *
   * Each element of the array is a city matching the string with the following structure:
   *
   * @get result
   * @type {Core_Geo_ComboboxModel_a_list[]}
   */
  this.a_list = undefined;

  /**
   * The locale ID used as a filter. The locale is generally a country.
   *
   * One of the {@link Core_Locale_LocaleSid} constants.
   *
   * This will be `0` if all locations are searched.
   *
   * @get get
   * @see Core_Locale_LocaleSid
   * @type {number}
   */
  this.id_locale = 0;

  /**
   * The city name (or a fragment of the city name) used for the search.
   *
   * @get get
   * @type {string}
   */
  this.s_value = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Geo_ComboboxModel);

/**
 * @inheritDoc
 */
Core_Geo_ComboboxModel.prototype.config=function()
{
  return {"a_field":{"a_list":{"get":{"result":true}},"id_locale":{"get":{"get":true}},"s_value":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Core_Geo_ComboboxModel.instanceGet
 * @param {number} id_locale The locale ID used as a filter. The locale is generally a country. One of the {@link Core_Locale_LocaleSid} constants. This will be `0` if all locations are searched.
 * @param {string} s_value The city name (or a fragment of the city name) used for the search.
 * @returns {Core_Geo_ComboboxModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns a list of cities to show in combobox list.
 *
 * Powers city autocomplete dropdowns in address forms. Returns up to 100 cities whose names start with
 * the given fragment, each labelled as "City, Region, Country". Pass a locale to restrict results to a
 * single country, or omit it to search worldwide.
 *
 * @function
 * @name Core_Geo_ComboboxModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
