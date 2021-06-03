/**
 * Point to get data for "edit payment address" widget.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Address_Widget_WidgetEditModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * List of possible regions.
   *
   * @get result
   * @type {{}[]}
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
   * Business primary key in {@link RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Mask for phone entering.
   *
   * @get result
   * @type {string}
   */
  this.text_phone_mask = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Address_Widget_WidgetEditModel);

/**
 * @inheritDoc
 */
Wl_Pay_Address_Widget_WidgetEditModel.prototype.config=function()
{
  return {"a_field": {"a_geo": {"get": {"result": true}},"html_phone_mask": {"get": {"result": true}},"k_business": {"get": {"get": true}},"text_phone_mask": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Pay_Address_Widget_WidgetEditModel.instanceGet
 * @param {string} k_business Business primary key in {@link RsBusinessSql} table.
 * @returns {Wl_Pay_Address_Widget_WidgetEditModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */