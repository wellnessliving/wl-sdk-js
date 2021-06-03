/**
 * Data of certain purchase.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Purchase_Item_PurchaseItemAmountModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Number of units of the purchase item.
   *
   * @get get
   * @type {number}
   */
  this.i_count = undefined;

  /**
   * ID of the purchase item.
   * One of {@link RsPurchaseItemSid} constants.
   * Key of the appropriate item stored in {@link PurchaseItemAmountApi::$k_id}.
   *
   * @get get
   * @type {number}
   */
  this.id_purchase_item = undefined;

  /**
   * Whether purchase item is new.
   *
   * @get get
   * @type {boolean}
   */
  this.is_new = false;

  /**
   * Key of the business that should be set to the purchase item.
   * Primary key from {@link \RsBusinessSql}.
   *
   * <tt>null</tt> if not set.
   *
   * @get get
   * @type {?string}
   */
  this.k_business = null;

  /**
   * Key of the item within appropriate table according to {@link PurchaseItemAmountApi::$id_purchase_item}.
   *
   * Can be <tt>null</tt> if it is new purchase item.
   *
   * @get get
   * @type {?string}
   */
  this.k_id = null;

  /**
   * Key of the location purchase occur. Primary key from {@link \RsLocationSql}.
   *
   * <tt>null</tt> if not set.
   *
   * @get get
   * @type {?string}
   */
  this.k_location = null;

  /**
   * Key of the reward prize that should be applied to the purchase item.
   * Primary key from {@link \RsRewardPrize}.
   *
   * @get get
   * @type {string}
   */
  this.k_reward_prize = undefined;

  /**
   * Amount of discounts applied to the purchase item.
   *
   * @get result
   * @type {string}
   */
  this.m_discount = undefined;

  /**
   * Manual price that should be set to the purchase item.
   *
   * <tt>null</tt> if not set.
   *
   * @get get
   * @type {?string}
   */
  this.m_price = null;

  /**
   * Amount of all units of the purchase item without taxes and discounts.
   *
   * @get result
   * @type {string}
   */
  this.m_subtotal = undefined;

  /**
   * Amount of all taxes applied to the purchase item.
   *
   * @get result
   * @type {string}
   */
  this.m_tax = undefined;

  /**
   * Total amount of the purchase item.
   *
   * @get result
   * @type {string}
   */
  this.m_total = undefined;

  /**
   * Key of the user that performs purchase.
   * Primary key from {@link \PassportLoginSql}.
   *
   * @get get
   * @type {string}
   */
  this.uid_purchase = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Purchase_Item_PurchaseItemAmountModel);

/**
 * @inheritDoc
 */
Wl_Purchase_Item_PurchaseItemAmountModel.prototype.config=function()
{
  return {"a_field": {"i_count": {"get": {"get": true}},"id_purchase_item": {"get": {"get": true}},"is_new": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_id": {"get": {"get": true}},"k_location": {"get": {"get": true}},"k_reward_prize": {"get": {"get": true}},"m_discount": {"get": {"result": true}},"m_price": {"get": {"get": true}},"m_subtotal": {"get": {"result": true}},"m_tax": {"get": {"result": true}},"m_total": {"get": {"result": true}},"uid_purchase": {"get": {"get": true}}}};
};