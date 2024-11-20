/**
 * Information about the quantity limit when a promotion is added to the cart.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
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
   * @property {number} i_quantity The quantity of sale items.
   * @property {number} id_sale The sale item type, one of {@link RsSaleSid}.
   * @property {string} k_id The sale item ID.
   * @property {string} k_shop_product_option The shop product option. <tt>null</tt> if sale item has no options.
   */

  /**
   * The cart items list with the next structure: <dl>
   *   <dt>int <var>i_quantity</var></dt>
   *   <dd>The quantity of sale items.</dd>
   *   <dt>int <var>id_sale</var></dt>
   *   <dd>The sale item type, one of {@link RsSaleSid}.</dd>
   *   <dt>string <var>k_id</var></dt>
   *   <dd>The sale item ID.</dd>
   *   <dt>string <var>k_shop_product_option</var></dt>
   *   <dd>The shop product option. <tt>null</tt> if sale item has no options.</dd>
   * </dl>
   *
   * @get get
   * @type {Wl_Catalog_Cart_LimitQuantityModel_a_item[]}
   */
  this.a_item = [];

  /**
   * The quantity if promotions have already been purchased by the current user.
   *  `true` if exceeded, `false` - otherwise.
   * `null` if not initialized yet or if there is no limit quantity or limit quantity is not exceeded.
   *
   * @get result
   * @type {?number}
   */
  this.i_purchase_already = null;

  /**
   * The current quantity of a promotion with the quantity limit in the cart.
   * `null` if not initialized yet or if there is no limit quantity or limit quantity is not exceeded.
   *
   * @get result
   * @type {?number}
   */
  this.i_purchase_current = null;

  /**
   * The quantity limit of a promotion.
   * `null` if not initialized yet or if there is no limit quantity.
   *
   * @get result
   * @type {?number}
   */
  this.i_quantity_limit = null;

  /**
   * Determines whether the limit quantity has been exceeded.
   *  `true` if exceeded, `false` - otherwise.
   * `null` if not initialized yet.
   *
   * @get result
   * @type {?boolean}
   */
  this.is_limit_exceeded = null;

  /**
   * The business in which the purchase is made.
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
   * The user key.
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

/**
 * @function
 * @name Wl_Catalog_Cart_LimitQuantityModel.instanceGet
 * @param {string} k_business The business in which the purchase is made.
 * @param {string} k_promotion A promotion key to add to cart.
 * @param {string} uid The user key.
 * @returns {Wl_Catalog_Cart_LimitQuantityModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */