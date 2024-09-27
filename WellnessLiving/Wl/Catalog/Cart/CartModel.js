/**
 * Displays information about the cart in the catalog.
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
   * The list of discounts for each item.
   *
   * Keys refer to unique item keys, and values refer to discount amounts for the item.
   *
   * @get result
   * @type {string[]}
   */
  this.a_discount_item = [];

  /**
   * @typedef {{}} Wl_Catalog_Cart_CartModel_a_item
   * @property {string} dl_client_prorate The client prorate date. This will be `null` in cases where the client prorate date hasn't passed.
   * @property {number} i_quantity The quantity of sale items.
   * @property {number} id_sale The sale item type, one of the {@link RsSaleSid} constants.
   * @property {string} k_id The sale item key.
   * @property {*} k_login_prize Key of login prize used on item, primary key in {@link \RsLoginPrizeSql} table.
   * @property {string} k_shop_product_option The shop product option. If empty string, the sale item has no options.
   */

  /**
   * The list of items in the cart.
   * <dl>
   *   <dt>string <var>dl_client_prorate</var></dt>
   *   <dd>The client prorate date. This will be `null` in cases where the client prorate date hasn't passed.</dd>
   *   <dt>int <var>i_quantity</var></dt>
   *   <dd>The quantity of sale items.</dd>
   *   <dt>int <var>id_sale</var></dt>
   *   <dd>The sale item type, one of the {@link RsSaleSid} constants.</dd>
   *   <dt>string <var>k_id</var></dt>
   *   <dd>The sale item key.</dd>
   *   <dt>?string [<var>k_login_prize</var>]</dt>
   *   <dd>Key of login prize used on item, primary key in {@link \RsLoginPrizeSql} table.</dd>
   *   <dt>string <var>k_shop_product_option</var></dt>
   *   <dd>The shop product option. If empty string, the sale item has no options.</dd>
   * </dl>
   *
   * @get get,result
   * @type {Wl_Catalog_Cart_CartModel_a_item[]}
   */
  this.a_item = [];

  /**
   * @typedef {{}} Wl_Catalog_Cart_CartModel_a_prize_propose
   * @property {number} i_score Amount of points needed to redeem the prize.
   * @property {string} k_reward_prize Reward prize key, primary key in {@link \RsRewardPrizeSql} table.
   * @property {string} text_discount Reward prize discount, e.g. '$10.00 off', '10% off'.
   * @property {string} text_title Reward prize title, e.g. 'on any item', 'on Water bottle', 'on any Appointment Pass or Membership Purchase Option'.
   */

  /**
   * List of prizes that can be redeemed and applied to items in the cart.
   * <dl>
   *   <dt>int <var>i_score</var></dt>
   *   <dd>Amount of points needed to redeem the prize.</dd>
   *   <dt>string <var>k_reward_prize</var></dt>
   *   <dd>Reward prize key, primary key in {@link \RsRewardPrizeSql} table.</dd>
   *   <dt>string <var>text_discount</var></dt>
   *   <dd>Reward prize discount, e.g. '$10.00 off', '10% off'.</dd>
   *   <dt>string <var>text_title</var></dt>
   *   <dd>Reward prize title, e.g. 'on any item', 'on Water bottle', 'on any Appointment Pass or Membership Purchase Option'.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Catalog_Cart_CartModel_a_prize_propose[]}
   */
  this.a_prize_propose = [];

  /**
   * @typedef {{}} Wl_Catalog_Cart_CartModel_a_reward_item
   * @property {number} i_quantity The quantity of sale items.
   * @property {number} id_sale The sale item type, one of the {@link RsSaleSid} constants.
   * @property {boolean} is_login_prize_used Whether selected login prize discount applied to item.
   * @property {string} k_id The sale item key.
   * @property {string} k_shop_product_option The shop product option. If <tt>null</tt>, the sale item has no options.
   */

  /**
   * List of cart items to which the selected prize can be applied
   * <dl>
   *   <dt>int <var>i_quantity</var></dt>
   *   <dd>The quantity of sale items.</dd>
   *   <dt>int <var>id_sale</var></dt>
   *   <dd>The sale item type, one of the {@link RsSaleSid} constants.</dd>
   *   <dt>bool <var>is_login_prize_used</var></dt>
   *   <dd>Whether selected login prize discount applied to item.</dd>
   *   <dt>string <var>k_id</var></dt>
   *   <dd>The sale item key.</dd>
   *   <dt>string <var>k_shop_product_option</var></dt>
   *   <dd>The shop product option. If <tt>null</tt>, the sale item has no options.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Catalog_Cart_CartModel_a_reward_item[]}
   */
  this.a_reward_item = [];

  /**
   * @typedef {{}} Wl_Catalog_Cart_CartModel_a_reward_propose
   * @property {string} k_login_prize Login prize key, primary key in {@link \RsLoginPrizeSql} table.
   * @property {string} text_discount Reward prize discount, e.g. '$10.00 off', '10% off'.
   * @property {string} text_discount_applied Applied login prize discount title, e.g. '10% discount'.
   * @property {string} text_discount_purpose Purpose login prize discount title, e.g. 'Apply 10% off'.
   * @property {string} text_title Reward prize title, e.g. 'on any item', 'on Water bottle', 'on any Appointment Pass or Membership Purchase Option'.
   */

  /**
   * List of login prizes that can be applied to items in the cart.
   * <dl>
   *   <dt>string <var>k_login_prize</var></dt>
   *   <dd>Login prize key, primary key in {@link \RsLoginPrizeSql} table.</dd>
   *   <dt>string <var>text_discount</var></dt>
   *   <dd>Reward prize discount, e.g. '$10.00 off', '10% off'.</dd>
   *   <dt>string <var>text_discount_applied</var></dt>
   *   <dd>Applied login prize discount title, e.g. '10% discount'.</dd>
   *   <dt>string <var>text_discount_purpose</var></dt>
   *   <dd>Purpose login prize discount title, e.g. 'Apply 10% off'.</dd>
   *   <dt>string <var>text_title</var></dt>
   *   <dd>Reward prize title, e.g. 'on any item', 'on Water bottle', 'on any Appointment Pass or Membership Purchase Option'.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Catalog_Cart_CartModel_a_reward_propose[]}
   */
  this.a_reward_propose = [];

  /**
   * Values derived for individual tax rates.
   *
   * Keys refer to tax keys.
   * And values refer to the amount of tax in the cart.
   *
   * @get result
   * @type {{}}
   */
  this.a_tax_list = [];

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
  this.is_auto_apply_prize = true;

  /**
   * The location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * The login prize key.
   *
   * @get get
   * @type {string}
   */
  this.k_login_prize = "0";

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
  this.text_discount_code = "";

  /**
   * The user key.
   *
   * This will be `0` for guests.
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
  return {"a_field": {"a_discount_item": {"get": {"result": true}},"a_item": {"get": {"get": true,"result": true}},"a_prize_propose": {"get": {"result": true}},"a_reward_item": {"get": {"result": true}},"a_reward_propose": {"get": {"result": true}},"a_tax_list": {"get": {"result": true}},"i_score": {"get": {"result": true}},"is_auto_apply_prize": {"get": {"get": true}},"k_location": {"get": {"get": true}},"k_login_prize": {"get": {"get": true}},"m_discount": {"get": {"result": true}},"m_discount_total": {"get": {"result": true}},"m_subtotal": {"get": {"result": true}},"m_tax": {"get": {"result": true}},"m_tip_purchase": {"get": {"result": true}},"m_total": {"get": {"result": true}},"text_discount_code": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Catalog_Cart_CartModel.instanceGet
 * @param {string} k_location The location key.
 * @param {string} uid The user key. This will be `0` for guests.
 * @returns {Wl_Catalog_Cart_CartModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */