/**
 * Returns the pricing breakdown for a list of purchase items, applying applicable discounts and taxes.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Purchase_PurchaseElementListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseElementListModel_a_purchase_item_request_a_config_a_event_list
   * @property {string} k_class Key of the event class.
   * @property {string} uid Key of the tuition participant.
   */

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseElementListModel_a_purchase_item_request_a_config
   * @property {Wl_Book_Process_Purchase_PurchaseElementListModel_a_purchase_item_request_a_config_a_event_list} a_event_list List of tuition events.  Each entry has the next structure:
   */

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseElementListModel_a_purchase_item_request
   * @property {Wl_Book_Process_Purchase_PurchaseElementListModel_a_purchase_item_request_a_config} a_config Additional configuration.
   * @property {number} i_session The number of sessions booked simultaneously.
   * @property {number} id_purchase_item The ID of the purchase item type. One of the {@link RsPurchaseItemSid} constants.
   * @property {string} k_id The key of the purchase item in the database. The name of the table in the database depends on `id_purchase_item`
   * @property {string} k_login_prize The key of the user's prize.
   */

  /**
   * A list of purchase items to get information for. Every element has the next keys:
   *
   * @get get
   * @type {Wl_Book_Process_Purchase_PurchaseElementListModel_a_purchase_item_request[]}
   */
  this.a_purchase_item_request = undefined;

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
  this.k_business = "";

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
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_Purchase_PurchaseElementListModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Purchase_PurchaseElementListModel.prototype.config=function()
{
  return {"a_field":{"a_purchase_item_request":{"get":{"get":true}},"a_purchase_item_result":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_location":{"get":{"get":true}},"text_discount_code":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * Returns the pricing breakdown for a list of purchase items, applying applicable discounts and taxes.
 *
 * Validates the business, location, and user, then for each item in `a_purchase_item_request` computes the price,
 * applicable discount code reduction, login-type discount, and taxes, and returns per-item cost, discount,
 * price, tax, and subtotal amounts in `a_purchase_item_result`.
 *
 * @function
 * @name Wl_Book_Process_Purchase_PurchaseElementListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
