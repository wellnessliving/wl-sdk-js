/**
 * Business design (skin) settings API.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Skin_BusinessSkinModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "id_place,k_business";

  /**
   * Full business skin data.
   *
   * See result of the {@link \rs_business_skin()} function.
   *
   * @get result
   * @type {{}}
   */
  this.a_skin = undefined;

  /**
   * Period without any actions from owner after which we move focus on Client Search Field.
   *
   * @get result
   * @type {number}
   */
  this.i_focus_delay = undefined;

  /**
   * Measurement unit of <var>i_focus_delay</var>. Member of {@link \ADurationSid}.
   *
   * @get result
   * @type {number}
   */
  this.id_focus_duration = undefined;

  /**
   * Current place ID.
   * Constant from {@link \RsPlaceSid}.
   *
   * @get get
   * @type {number}
   */
  this.id_place = 0;

  /**
   * Business key from {@link \RsBusinessSql}.
   *
   * If <tt>null</tt> you will receive data for the default skin.
   *
   * @get get
   * @type {?string}
   */
  this.k_business = null;

  /**
   * Size of icons in the top header panel for quick access.
   *
   * @get result
   * @type {string}
   */
  this.sid_header_button_size = undefined;

  /**
   * Type of icons in the top header panel for quick access.
   *
   * @get result
   * @type {string}
   */
  this.sid_header_button_type = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Skin_BusinessSkinModel);

/**
 * @inheritDoc
 */
Wl_Business_Skin_BusinessSkinModel.prototype.config=function()
{
  return {"a_field": {"a_skin": {"get": {"result": true}},"i_focus_delay": {"get": {"result": true}},"id_focus_duration": {"get": {"result": true}},"id_place": {"get": {"get": true}},"k_business": {"get": {"get": true}},"sid_header_button_size": {"get": {"result": true}},"sid_header_button_type": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Business_Skin_BusinessSkinModel.instanceGet
 * @param {number} id_place Current place ID. Constant from {@link \RsPlaceSid}.
 * @param {?string} k_business Business key from {@link \RsBusinessSql}. If <tt>null</tt> you will receive data for the default skin.
 * @returns {Wl_Business_Skin_BusinessSkinModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */