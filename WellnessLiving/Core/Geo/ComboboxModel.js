/**
 * Returns a list of cities to show in combobox list.
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
   * @property {string} s_key Value of key of the item (<tt>k_city</tt>).
   * @property {string} s_value String representation of the item.
   */

  /**
   * A list of cities to show in the combobox list. Each element of this list contains:
   * <dl>
   *   <dt>
   *     string <var>s_key</var>
   *   </dt>
   *   <dd>
   *     Value of key of the item (<tt>k_city</tt>).
   *   </dd>
   *   <dt>
   *     string <var>s_value</var>
   *   </dt>
   *   <dd>
   *     String representation of the item.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Core_Geo_ComboboxModel_a_list[]}
   */
  this.a_list = undefined;

  /**
   * Current locale that is used as a filter.
   *
   * One of {@link \Core\Locale\LocaleSid} constants.
   *
   * <tt>0</tt> means to search in all locales.
   *
   * @get get
   * @type {number}
   */
  this.id_locale = 0;

  /**
   * Value that is used as a filter.
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
 * @param {number} id_locale Current locale that is used as a filter. One of {@link \Core\Locale\LocaleSid} constants. <tt>0</tt> means to search in all locales.
 * @param {string} s_value Value that is used as a filter.
 * @returns {Core_Geo_ComboboxModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */