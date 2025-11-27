/**
 * Lists widget skins grouped by widget type for a business.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Skin_Widget_SkinWidgetListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Skin_Widget_SkinWidgetListModel_a_widget_skin
   * @property {string} k_skin Skin key.
   * @property {string} text_widget_name Widget name.
   */

  /**
   * List of Widget skins grouped by widget type.
   *
   * Skin type, one of {@link RsSkinSid} constants.
   *
   * The array structure:
   * Keys - Skin type, one of {@link RsSkinSid} constants.
   * Values - arrays with next keys:
   * <dl>
   *   <dt>string `k_skin`</dt><dd>Skin key.</dd>
   *   <dt>string `text_widget_name`</dt><dd>Widget name.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Skin_Widget_SkinWidgetListModel_a_widget_skin[][]}
   */
  this.a_widget_skin = [];

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Skin_Widget_SkinWidgetListModel);

/**
 * @inheritDoc
 */
Wl_Skin_Widget_SkinWidgetListModel.prototype.config=function()
{
  return {"a_field": {"a_widget_skin": {"get": {"result": true}},"k_business": {"get": {"get": true}}}};
};