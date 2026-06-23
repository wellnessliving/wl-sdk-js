/**
 * Displays a list of purchase items.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Purchase_PurchaseElementListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseElementListModel_a_purchase_item_request
   * @property {number} [i_session] The number of sessions booked simultaneously.
   * @property {number} id_purchase_item The ID of the purchase item type. One of the {@link RsPurchaseItemSid} constants.
   * @property {string} k_id The key of the purchase item in the database. The name of the table in the database depends on <tt>id_purchase_item</tt>
   * @property {string} [k_login_prize] The key of the user's prize.
   */

  /**
   * A list of purchase items to get information for. Every element has the next keys:
   *
   * @get get
   * @type {Wl_Book_Process_Purchase_PurchaseElementListModel_a_purchase_item_request[]}
   */
  this.a_purchase_item_request = [];

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseElementListModel_a_purchase_item_result
   * @property {string[]} a_tax Information about taxes. The key refers to the tax key, and the value refers to the tax amount.
   * @property {number} id_purchase_item The ID of purchase item type. One of {@link RsPurchaseItemSid} constants.
   * @property {string} k_id The key of the purchase item in the database.
   * @property {string} m_cost The cost of the purchase item (with taxes).
   * @property {string} m_discount The amount of the whole discount.
   * @property {string} m_discount_login The amount of the discount for the client type.
   * @property {string} m_price The price of the purchase item (with or without taxes, depending on regional standards).
   * @property {string} m_tax The amount of taxes for the purchase item.
   */

  /**
   * Detailed information about the amounts for the purchase item list.
   * Every element has the next keys:
   *
   * @get result
   * @type {Wl_Book_Process_Purchase_PurchaseElementListModel_a_purchase_item_result[]}
   */
  this.a_purchase_item_result = undefined;

  /**
   * The key of the business in which the purchase is made.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * The key of the location in which the purchase is made.
   * This is also the booking process location.
   *
   * This will be `null` if not set yet or if the location can't be defined for some reason.
   *
   * @get get
   * @type {?string}
   */
  this.k_location = null;

  /**
   * The discount code.
   *
   * @get get
   * @type {string}
   */
  this.text_discount_code = "";

  /**
   * The key of the user making the purchase.
   *
   * @get get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_Purchase_PurchaseElementListModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Purchase_PurchaseElementListModel.prototype.config=function()
{
  return {"a_field": {"a_purchase_item_request": {"get": {"get": true}},"a_purchase_item_result": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_location": {"get": {"get": true}},"text_discount_code": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};