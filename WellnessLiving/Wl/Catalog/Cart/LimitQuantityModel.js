/**
 * Limit quantity check API.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @see Wl\Catalog\Cart\LimitQuantityApi
 */
function Wl_Catalog_Cart_LimitQuantityModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_promotion,uid";

  /**
   * @typedef {{}} Wl_Catalog_Cart_LimitQuantityModel_a_item
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
   * @type {Wl_Catalog_Cart_LimitQuantityModel_a_item[]}
   */
  this.a_item = [];

  /**
   * Quantity if already purchased promotions by current user.
   * `null` if not initialized yet or if there is no limit quantity or limit quantity is not exceeded.
   *
   * @get result
   * @type {?number}
   */
  this.i_purchase_already = null;

  /**
   * Current quantity of a promotion with limit quantity in the cart.
   * `null` if not initialized yet or if there is no limit quantity or limit quantity is not exceeded.
   *
   * @get result
   * @type {?number}
   */
  this.i_purchase_current = null;

  /**
   * Quantity limit of a promotion.
   * `null` if not initialized yet or if there is no limit quantity.
   *
   * @get result
   * @type {?number}
   */
  this.i_quantity_limit = null;

  /**
   * Whether limit quantity is exceeded.
   *  `true` if exceeded, `false` - otherwise.
   * `null` if not initialized yet.
   *
   * @get result
   * @type {?boolean}
   */
  this.is_limit_exceeded = null;

  /**
   * Business in which the purchase is made.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * A promotion key to add to cart.
   *
   * @get get
   * @type {string}
   */
  this.k_promotion = "0";

  /**
   * UID of a user.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_Cart_LimitQuantityModel);

/**
 * @inheritDoc
 */
Wl_Catalog_Cart_LimitQuantityModel.prototype.config=function()
{
  return {"a_field": {"a_item": {"get": {"get": true}},"i_purchase_already": {"get": {"result": true}},"i_purchase_current": {"get": {"result": true}},"i_quantity_limit": {"get": {"result": true}},"is_limit_exceeded": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_promotion": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};