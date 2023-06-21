/**
 * Retrieves a list of cities matching the search string for a given locale.
 *
 * This model is generated automatically based on API.
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
   * @property {string} s_value The human-readable name of the city including state/province and country.
   * @property {string} s_key The <tt>k_city</tt> value for the city.
   */

  /**
   * A list of items to show in the combobox list.
   *
   * Each element of the array is a city matching the string. Each element is an array with the following structure:
   * <dl>
   *   <dt>string <var>s_value</var></dt>
   *   <dd>The human-readable name of the city including state/province and country.</dd>
   *   <dt>string <var>s_key</var></dt>
   *   <dd>The <var>k_city</var> value for the city.</dd>
   * </dl>
   *
   * @get result
   * @type {Core_Geo_ComboboxModel_a_list[]}
   */
  this.a_list = undefined;

  /**
   * The Locale ID that is used as a filter. Generally a locale is a country.
   *
   * One of {@link Core_Locale_LocaleSid} constants.
   *
   * `0` means to search in all locales.
   *
   * @get get
   * @type {number}
   */
  this.id_locale = 0;

  /**
   * The city name or a fragment of the name used to search for a city.
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
  return {"a_field": {"a_list": {"get": {"result": true}},"id_locale": {"get": {"get": true}},"s_value": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Core_Geo_ComboboxModel.instanceGet
 * @param {number} id_locale The Locale ID that is used as a filter. Generally a locale is a country. One of {@link Core_Locale_LocaleSid} constants. `0` means to search in all locales.
 * @param {string} s_value The city name or a fragment of the name used to search for a city.
 * @returns {Core_Geo_ComboboxModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */