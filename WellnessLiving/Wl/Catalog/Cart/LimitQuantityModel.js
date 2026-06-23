/**
 * Checks limit quantity and whether a promotion can be added to the cart.
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
   * @property {?number} id_sale List of sale categories on the store page.
   * @property {string} k_id The sale item ID.
   * @property {string} k_shop_product_option The shop product option. `null` if the sale item has no options.
   */

  /**
   * The cart items list with the next structure:
   *
   * @get get
   * @type {Wl_Catalog_Cart_LimitQuantityModel_a_item[]}
   */
  this.a_item = undefined;

  /**
   * The quantity if promotions have already been purchased by the current user.
   *
   * If `true`, the quantity exceeded. Otherwise, this will be `false`.
   *
   * This will be `null` if not set yet, there's no limit quantity, or the limit quantity isn't exceeded.
   *
   * @get result
   * @type {?number}
   */
  this.i_purchase_already = null;

  /**
   * The current quantity of a promotion with the quantity limit in the cart.
   *
   * This will be `null` if not set yet, there's no limit quantity, or the limit quantity isn't exceeded.
   *
   * @get result
   * @type {?number}
   */
  this.i_purchase_current = null;

  /**
   * The quantity limit of the promotion.
   *
   * This will be `null` if not set yet or if there's no limit quantity.
   *
   * @get result
   * @type {?number}
   */
  this.i_quantity_limit = null;

  /**
   * Determines whether the limit quantity has been exceeded.
   *
   * If `true`, the limit quantity has been exceeded. Otherwise, this will be `false`.
   *
   * This will be `null` if not set yet.
   *
   * @get result
   * @type {?boolean}
   */
  this.is_limit_exceeded = null;

  /**
   * The business in which the purchase will be made.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The promotion key to add to the cart.
   *
   * @get get
   * @type {string}
   */
  this.k_promotion = "";

  /**
   * The user key.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_Cart_LimitQuantityModel);

/**
 * @inheritDoc
 */
Wl_Catalog_Cart_LimitQuantityModel.prototype.config=function()
{
  return {"a_field":{"a_item":{"get":{"get":true}},"i_purchase_already":{"get":{"result":true}},"i_purchase_current":{"get":{"result":true}},"i_quantity_limit":{"get":{"result":true}},"is_limit_exceeded":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_promotion":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Catalog_Cart_LimitQuantityModel.instanceGet
 * @param {string} k_business The business in which the purchase will be made.
 * @param {string} k_promotion The promotion key to add to the cart.
 * @param {string} uid The user key.
 * @returns {Wl_Catalog_Cart_LimitQuantityModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Checks limit quantity and whether a promotion can be added to the cart.
 *
 * Used in the checkout flow to prevent a client from purchasing more passes than the promotion allows.
 * Returns the limit, how many the client has already bought, and how many are currently in the cart so
 * the UI can display a clear message if the limit would be exceeded.
 *
 * @function
 * @name Wl_Catalog_Cart_LimitQuantityModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
