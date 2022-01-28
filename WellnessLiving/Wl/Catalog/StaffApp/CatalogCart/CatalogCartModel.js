/**
 * Catalog cart.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid_current";

  /**
   * @typedef {{}} Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel_a_item_a_tax_custom
   * @property {string} f_tax Tax amount.
   * @property {string} k_tax Tax identifiers, primary key in {@link \RsTaxSql}.
   */
  /**
   * @typedef {{}} Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel_a_item
   * @property {Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel_a_item_a_tax_custom[]} a_tax_custom Information about taxes. If not passed means no custom taxes applied to sale item.
   * If record is present, it means that tax is custom. Structure:<dl>
   *   <dt>string <tt>f_tax</tt></dt>
   *   <dd>Tax amount.</dd>
   *   <dt>string <tt>k_tax</tt></dt>
   *   <dd>Tax identifiers, primary key in {@link \RsTaxSql}.</dd>
   * </dl>
   * @property {number} i_quantity Quantity of sale items.
   * @property {number} id_sale Sale item type, one of {@link \RsSaleSid}.
   * @property {string} k_id Sale item ID.
   * @property {string} k_shop_product_option Shop product option. <tt>null</tt> if sale item has no options.
   * @property {*} m_price_custom Custom price of sale item. If not passed means no custom price applied to sale item.
   */

  /**
   * Cart items list with next structure:
   * <dl>
   * <dt>array [<var>a_option</var>]</dt>
   * <dd>List of purchase item additional options:<dl>
   *   <dt>string [<var>f_price</var>]</dt>
   *   <dd>Custom price.</dd>
   *   <dt>string [<var>dt_prorate</var>]</dt>
   *   <dd>Prorate date.</dd>
   *   <dt>string [<var>dt_start</var>]</dt>
   *   <dd>Start date.</dd>
   *   <dt>bool [<var>is_prorate</var>]</dt>
   *   <dd>Whether selected option 'prorate option'.</dd>
   *   <dt>bool [<var>is_prorate_fix</var>]</dt>
   *   <dd>Whether selected option 'pay prorate amount only' and prorate amount entered by user.</dd>
   *   <dt>bool [<var>is_prorate_only</var>]</dt>
   *   <dd>Whether selected option 'pay prorate amount only' to include to price prorate amount only.</dd>
   *   <dt>string [<var>m_custom</var>]</dt>
   *   <dd>Custom price for gift card.</dd>
   *   <dt>string [<var>dt_send_local</var>]</dt>
   *   <dd>Date when mail with gift card must be sent.</dd>
   *   <dt>bool <var>is_mail</var></dt>
   *   <dd><tt>true</tt> if gift card will be sent on email, <tt>false</tt> if gift card will be printed.</dd>
   *   <dt>string [<var>s_mail</var>]</dt>
   *   <dd>Recipient's email.</dd>
   *   <dt>string [<var>s_message</var>]</dt>
   *   <dd>Message.</dd>
   *   <dt>string <var>s_recipient</var></dt>
   *   <dd>Recipient's name.</dd>
   *   <dt>string <var>s_sender</var></dt>
   *   <dd>Sender's name.</dd>
   * </dl></dd>
   * <dt>array [<var>a_tax_custom</var>]</dt>
   * <dd>Information about taxes. If not passed means no custom taxes applied to sale item.
   * If record is present, it means that tax is custom. Structure:<dl>
   *   <dt>string <var>f_tax</var></dt>
   *   <dd>Tax amount.</dd>
   *   <dt>string <var>k_tax</var></dt>
   *   <dd>Tax identifiers, primary key in {@link \RsTaxSql}.</dd>
   * </dl></dd>
   * <dt>int <var>i_quantity</var></dt>
   * <dd>Quantity of sale items.</dd>
   * <dt>int <var>id_sale</var></dt>
   * <dd>Sale item type, one of {@link \RsSaleSid}.</dd>
   * <dt>string <var>k_id</var></dt>
   * <dd>Sale item ID.</dd>
   * <dt>string <var>k_shop_product_option</var></dt>
   * <dd>Shop product option. <tt>null</tt> if sale item has no options.</dd>
   * <dt>string [<var>m_price_custom</var>]</dt>
   * <dd>Custom price of sale item. If not passed means no custom price applied to sale item.</dd>
   * </dl>
   *
   * @get get
   * @type {Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel_a_item[]}
   */
  this.a_item = [];

  /**
   * Discount in percents.
   *
   * @get get
   * @type {number}
   */
  this.f_discount_percent = 0;

  /**
   * `true` to enable checking every item at the cart; `false` to disable.
   *
   * @get get
   * @var {boolean}
   */
  this.is_check_cart_item = 0;

  /**
   * Whether business applied commission at checkout.
   *
   * @get result
   * @type {boolean}
   */
  this.is_commission = 0;

  /**
   * Whether display custom receipt notes at checkout.
   *
   * @get result
   * @var {boolean}
   */
  this.is_receipt_note = 0;

  /**
   * Business key.
   *
   * <b>This field is not used directly and described for correct auto generation JavaScript.</b>
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Primary key of location in {@link RsLocationSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * Amount of discount.
   *
   * @get result
   * @type {string}
   */
  this.m_discount = undefined;

  /**
   * Discount in amount of money.
   *
   * @get get
   * @type {string}
   */
  this.m_discount_flat = "";

  /**
   * Amount of total discount.
   *
   * @get result
   * @type {string}
   */
  this.m_discount_total = undefined;

  /**
   * Amount of subtotal.
   *
   * @get result
   * @type {string}
   */
  this.m_subtotal = undefined;

  /**
   * Amount of tax.
   *
   * @get result
   * @type {string}
   */
  this.m_tax = undefined;

  /**
   * Tips amount.
   *
   * @get get
   * @type {string}
   */
  this.m_tip = "";

  /**
   * Amount of appointment tips.
   *
   * @get result
   * @type {string}
   */
  this.m_tip_purchase = undefined;

  /**
   * Total amount of the cart.
   *
   * @get result
   * @type {string}
   */
  this.m_total = undefined;

  /**
   * Discount code.
   *
   * <tt>null</tt> if not set.
   *
   * @get get
   * @type {?string}
   */
  this.text_discount_code = null;

  /**
   * Error code. Error should be shown on form but form should be calculated without exceptions.
   *
   * @get result
   * @type {*}
   */
  this.text_error_code = undefined;

  /**
   * Custom receipt note text.
   *
   * @get result
   * @var {string}
   */
  this.text_receipt_note = "";

  /**
   * Current user key.
   *
   * @get get
   * @type {string}
   */
  this.uid_current = undefined;

  /**
   * User key to which purchase performs. Primary key in {@link \PassportLoginSql} table.
   * Empty for a guest.
   *
   * @get get
   * @type {string}
   */
  this.uid_customer = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel);

/**
 * @inheritDoc
 */
Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel.prototype.config=function()
{
  return {"a_field": {"a_item": {"get": {"get": true}},"f_discount_percent": {"get": {"get": true}},"is_check_cart_item": {"get": {"get": true}},"is_commission": {"get": {"result": true}},"is_receipt_note": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_location": {"get": {"get": true}},"m_discount": {"get": {"result": true}},"m_discount_flat": {"get": {"get": true}},"m_discount_total": {"get": {"result": true}},"m_subtotal": {"get": {"result": true}},"m_tax": {"get": {"result": true}},"m_tip": {"get": {"get": true}},"m_tip_purchase": {"get": {"result": true}},"m_total": {"get": {"result": true}},"text_discount_code": {"get": {"get": true}},"text_error_code": {"get": {"result": true}},"text_receipt_note": {"get": {"result": true}},"uid_current": {"get": {"get": true}},"uid_customer": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel.instanceGet
 * @param {string} k_business Business key. <b>This field is not used directly and described for correct auto generation JavaScript.</b>
 * @param {string} uid_current Current user key.
 * @returns {Wl_Catalog_StaffApp_CatalogCart_CatalogCartModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */