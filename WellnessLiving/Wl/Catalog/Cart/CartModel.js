/**
 * Gets purchase cost data.
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
   * The list of discounts for each item.
   *
   * Keys refer to unique item keys, and values refer to discount amounts for the item.
   *
   * @get result
   * @type {string[]}
   */
  this.a_discount_item = undefined;

  /**
   * @typedef {{}} Wl_Catalog_Cart_CartModel_a_item
   * @property {string} dl_client_prorate The client prorate date. This will be `null` in cases where the client prorate date hasn't passed.
   * @property {number} i_quantity The quantity of sale items.
   * @property {?number} id_sale List of sale categories on the store page.
   * @property {string} k_id The sale item key.   Note:
   * @property {string} k_login_prize Key of login prize used on item.
   * @property {string} k_shop_product_option Note:      Used for products only `id_sale` = {@link RsSaleSid}.      If empty the first available option will be used automatically.
   */

  /**
   * The list of items in the cart.
   *
   * @get get,result
   * @type {Wl_Catalog_Cart_CartModel_a_item[]}
   */
  this.a_item = undefined;

  /**
   * @typedef {{}} Wl_Catalog_Cart_CartModel_a_prize_propose
   * @property {number} i_score Amount of points needed to redeem the prize.
   * @property {string} k_reward_prize Reward prize key.
   * @property {string} text_discount Reward prize discount, e.g. '$10.00 off', '10% off'.
   * @property {string} text_title Reward prize title, e.g. 'on any item', 'on Water bottle', 'on any Appointment Pass or Membership Purchase Option'.
   */

  /**
   * List of prizes that can be redeemed and applied to items in the cart.
   *
   * @get result
   * @type {Wl_Catalog_Cart_CartModel_a_prize_propose[]}
   */
  this.a_prize_propose = undefined;

  /**
   * @typedef {{}} Wl_Catalog_Cart_CartModel_a_reward_item
   * @property {number} i_quantity The quantity of sale items.
   * @property {?number} id_sale List of sale categories on the store page.
   * @property {boolean} is_login_prize_used Whether selected login prize discount applied to item.
   * @property {string} k_id The sale item key.
   * @property {string} k_shop_product_option The shop product option. If `null`, the sale item has no options.
   */

  /**
   * List of cart items to which the selected prize can be applied
   *
   * @get result
   * @type {Wl_Catalog_Cart_CartModel_a_reward_item[]}
   */
  this.a_reward_item = undefined;

  /**
   * @typedef {{}} Wl_Catalog_Cart_CartModel_a_reward_propose
   * @property {string} k_login_prize Login prize key.
   * @property {string} text_discount Reward prize discount, e.g. '$10.00 off', '10% off'.
   * @property {string} text_discount_applied Applied login prize discount title, e.g. '10% discount'.
   * @property {string} text_discount_purpose Purpose login prize discount title, e.g. 'Apply 10% off'.
   * @property {string} text_title Reward prize title, e.g. 'on any item', 'on Water bottle', 'on any Appointment Pass or Membership Purchase Option'.
   */

  /**
   * List of login prizes that can be applied to items in the cart.
   *
   * @get result
   * @type {Wl_Catalog_Cart_CartModel_a_reward_propose[]}
   */
  this.a_reward_propose = undefined;

  /**
   * Values derived for individual tax rates.
   *
   * Keys refer to tax keys, values refer to the amount of tax in the cart.
   *
   * @get result
   * @type {string[]}
   */
  this.a_tax_list = undefined;

  /**
   * Amount of client's reward points.
   *
   * @get result
   * @type {?number}
   */
  this.i_score = null;

  /**
   * Whether selected login prize should be auto applied to first applicable item.
   *
   * @get get
   * @type {boolean}
   */
  this.is_auto_apply_prize = false;

  /**
   * The location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * The login prize key.
   *
   * @get get
   * @type {string}
   */
  this.k_login_prize = "";

  /**
   * The full discount of the cart.
   *
   * If `null`, the discount isn't calculated yet.
   *
   * @get result
   * @type {?string}
   */
  this.m_discount = null;

  /**
   * The total discount amount.
   *
   * @get result
   * @type {string}
   */
  this.m_discount_total = undefined;

  /**
   * The total amount in the catalog cart without tax.
   *
   * If `null`, the total amount isn't set yet.
   *
   * @get result
   * @type {?string}
   */
  this.m_subtotal = null;

  /**
   * The tax amount.
   *
   * If `null`, the tax amount isn't set yet.
   *
   * @get result
   * @type {?string}
   */
  this.m_tax = null;

  /**
   * The amount of appointment tips.
   *
   * @get result
   * @type {?string}
   */
  this.m_tip_purchase = null;

  /**
   * The total amount in the catalog cart.
   *
   * If `null`, the total amount isn't set yet.
   *
   * @get result
   * @type {?string}
   */
  this.m_total = null;

  /**
   * The discount code.
   *
   * If `null`, the discount code has been reset.
   *
   * @get get
   * @type {?string}
   */
  this.text_discount_code = null;

  /**
   * The user key.
   *
   * This will be `0` for guests.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_Cart_CartModel);

/**
 * @inheritDoc
 */
Wl_Catalog_Cart_CartModel.prototype.config=function()
{
  return {"a_field":{"a_discount_item":{"get":{"result":true}},"a_item":{"get":{"get":true,"result":true}},"a_prize_propose":{"get":{"result":true}},"a_reward_item":{"get":{"result":true}},"a_reward_propose":{"get":{"result":true}},"a_tax_list":{"get":{"result":true}},"i_score":{"get":{"result":true}},"is_auto_apply_prize":{"get":{"get":true}},"k_location":{"get":{"get":true}},"k_login_prize":{"get":{"get":true}},"m_discount":{"get":{"result":true}},"m_discount_total":{"get":{"result":true}},"m_subtotal":{"get":{"result":true}},"m_tax":{"get":{"result":true}},"m_tip_purchase":{"get":{"result":true}},"m_total":{"get":{"result":true}},"text_discount_code":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Catalog_Cart_CartModel.instanceGet
 * @param {string} k_location The location key.
 * @param {string} uid The user key. This will be `0` for guests.
 * @returns {Wl_Catalog_Cart_CartModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets purchase cost data.
 *
 * Used in the client-facing checkout flow to show a live price summary before the client submits
 * payment. Calculates the full breakdown - subtotal, taxes, applied discounts, reward redemptions,
 * and tips - so the client can review the total before confirming.
 *
 * @function
 * @name Wl_Catalog_Cart_CartModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
