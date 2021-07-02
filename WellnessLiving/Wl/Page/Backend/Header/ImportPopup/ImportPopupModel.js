/**
 * Import popup API.
 * This is a banner that can be enabled at the time of import.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Page_Backend_Header_ImportPopup_ImportPopupModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * Content visibility flag.
   * <tt>true</tt> if the popup should be visible or <tt>false</tt> otherwise.
   *
   * @put post
   * @type {boolean}
   */
  this.is_visible = false;

  /**
   * Business key from {@link \RsBusinessSql}.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Should a popup be shown? <tt>true</tt> - show, <tt>false</tt> - do not show.
   *
   * @get result
   * @type {{}}
   */
  this.show_import_popup = undefined;

  /**
   * Should full content be shown? <tt>true</tt> - show, <tt>false</tt> - do not show.
   *
   * @get result
   * @type {boolean}
   */
  this.show_import_popup_full = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Page_Backend_Header_ImportPopup_ImportPopupModel);

/**
 * @inheritDoc
 */
Wl_Page_Backend_Header_ImportPopup_ImportPopupModel.prototype.config=function()
{
  return {"a_field": {"is_visible": {"put": {"post": true}},"k_business": {"get": {"get": true},"put": {"get": true}},"show_import_popup": {"get": {"result": true}},"show_import_popup_full": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Page_Backend_Header_ImportPopup_ImportPopupModel.instanceGet
 * @param {string} k_business Business key from {@link \RsBusinessSql}.
 * @returns {Wl_Page_Backend_Header_ImportPopup_ImportPopupModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */