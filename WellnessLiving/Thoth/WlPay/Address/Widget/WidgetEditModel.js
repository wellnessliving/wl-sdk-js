/**
 * Gets data for "edit payment address" widget.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Thoth_WlPay_Address_Widget_WidgetEditModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Thoth_WlPay_Address_Widget_WidgetEditModel_a_geo_a_region
   * @property {boolean} is_select `true` if this region is currently selected; `false` otherwise.
   * @property {string} k_geo Region key.
   * @property {string} s_title Region title.
   * @property {string} text_abbr Region abbreviation.
   */

  /**
   * @typedef {{}} Thoth_WlPay_Address_Widget_WidgetEditModel_a_geo
   * @property {Thoth_WlPay_Address_Widget_WidgetEditModel_a_geo_a_region} a_region List of geographic regions within the country. Each element:
   * @property {boolean} is_select `true` if this country is currently selected; `false` otherwise.
   * @property {string} k_geo Country key.
   * @property {string} s_title Country title.
   * @property {string} text_abbr Country abbreviation.
   */

  /**
   * List of countries with their regions, keyed by country geo key. Each element:
   *
   * @get result
   * @type {Thoth_WlPay_Address_Widget_WidgetEditModel_a_geo[]}
   */
  this.a_geo = undefined;

  /**
   * Mask for phone entering (ready for output to the page).
   *
   * @get result
   * @type {string}
   */
  this.html_phone_mask = undefined;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Mask for phone entering.
   *
   * @get result
   * @type {string}
   */
  this.text_phone_mask = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Thoth_WlPay_Address_Widget_WidgetEditModel);

/**
 * @inheritDoc
 */
Thoth_WlPay_Address_Widget_WidgetEditModel.prototype.config=function()
{
  return {"a_field":{"a_geo":{"get":{"result":true}},"html_phone_mask":{"get":{"result":true}},"k_business":{"get":{"get":true}},"text_phone_mask":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Thoth_WlPay_Address_Widget_WidgetEditModel.instanceGet
 * @param {string} k_business Business key.
 * @returns {Thoth_WlPay_Address_Widget_WidgetEditModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets data for "edit payment address" widget.
 *
 * Returns the list of geographic regions and phone number format masks configured for the given business locale.
 * When no business key is provided, system-level defaults are returned.
 *
 * @function
 * @name Thoth_WlPay_Address_Widget_WidgetEditModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
