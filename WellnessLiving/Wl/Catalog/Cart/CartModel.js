/**
 * Entry point to get purchase cost data.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Catalog_Cart_CartModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_location,uid";

  /**
   * @typedef {{}} Wl_Catalog_Cart_CartModel_a_item
   * @property {number} i_quantity Quantity of sale items.
   * @property {number} id_sale Sale item type, one of {@link \RsSaleSid}.
   * @property {string} k_id Sale item ID.
   * @property {string} k_shop_product_option Shop product option. <tt>null</tt> if sale item has no options.
   */

  /**
   * Cart items list with next structure: <dl>
   *   <dt>int <var>i_quantity</var></dt>
   *   <dd>Quantity of sale items.</dd>
   *   <dt>int <var>id_sale</var></dt>
   *   <dd>Sale item type, one of {@link \RsSaleSid}.</dd>
   *   <dt>string <var>k_id</var></dt>
   *   <dd>Sale item ID.</dd>
   *   <dt>string <var>k_shop_product_option</var></dt>
   *   <dd>Shop product option. <tt>null</tt> if sale item has no options.</dd>
   * </dl>
   *
   * @get get
   * @type {Wl_Catalog_Cart_CartModel_a_item[]}
   */
  this.a_item = [];

  /**
   * Values derived for individual tax rates.
   * Key is key of the tax (primary key in {@link \RsTaxSql}).
   * Value is the amount of tax in cart.
   *
   * @get result
   * @type {{}}
   */
  this.a_tax_list = [];

  /**
   * Location primary key in {@link RsLocationSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * Full discount of the cart.
   *
   * @get result
   * @type {?string}
   */
  this.m_discount = null;

  /**
   * Total amount in the catalog cart without tax.
   *
   * @get result
   * @type {?string}
   */
  this.m_subtotal = null;

  /**
   * Amount of tax.
   *
   * @get result
   * @type {?string}
   */
  this.m_tax = null;

  /**
   * Amount of appointment tips.
   *
   * @get result
   * @type {?string}
   */
  this.m_tip_purchase = null;

  /**
   * Total amount in the catalog cart.
   *
   * @get result
   * @type {?string}
   */
  this.m_total = null;

  /**
   * Discount code.
   *
   * Empty if not set.
   *
   * @get get
   * @type {?string}
   */
  this.text_discount_code = "";

  /**
   * Primary key of client in {@link \PassportLoginSql} table.
   *
   * <tt>false</tt> for guest.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_Cart_CartModel);

/**
 * @inheritDoc
 */
Wl_Catalog_Cart_CartModel.prototype.config=function()
{
  return {"a_field": {"a_item": {"get": {"get": true}},"a_tax_list": {"get": {"result": true}},"k_location": {"get": {"get": true}},"m_discount": {"get": {"result": true}},"m_subtotal": {"get": {"result": true}},"m_tax": {"get": {"result": true}},"m_tip_purchase": {"get": {"result": true}},"m_total": {"get": {"result": true}},"text_discount_code": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Catalog_Cart_CartModel.instanceGet
 * @param {string} k_location Location primary key in {@link RsLocationSql} table.
 * @param {string} uid Primary key of client in {@link \PassportLoginSql} table. <tt>false</tt> for guest.
 * @returns {Wl_Catalog_Cart_CartModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */