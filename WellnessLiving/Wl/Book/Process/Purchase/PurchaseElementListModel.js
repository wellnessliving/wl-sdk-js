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
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseElementListModel_a_purchase_item_result_a_event_list_a_discount
   * @property {number} id_discount_rule Discount rule type. One of {@link Wl_Discount_DiscountRuleSid} constants.
   * @property {string} m_discount Discount amount of this rule.
   * @property {string} text_discount Discount title. Only for {@link Wl_Discount_DiscountRuleSid}.
   */

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseElementListModel_a_purchase_item_result_a_event_list
   * @property {?Wl_Book_Process_Purchase_PurchaseElementListModel_a_purchase_item_result_a_event_list_a_discount} a_discount Discounts applied to the event, `null` if there are none. Every row has the next keys:
   * @property {?string[]} a_tax Taxes of the event. Keys are tax keys, values are tax amounts.
   * @property {string} k_class Key of the event class.
   * @property {?string} m_checkout The amount charged for this event right now, including tax. `0.00` when every installment payment is still ahead. `null` when the amount is not calculated yet.
   * @property {string} m_deferred The part of the event cost that is not charged right now, including tax. Goes to the installment plan or to the membership schedule, depending on the tuition billing mode.
   * @property {string} m_discount Total discount amount applied to the event, `0.00` if there is none.
   * @property {?string} m_price Price of the event within the tuition, before discount and tax.
   * @property {string} uid Key of the tuition participant.
   */

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseElementListModel_a_purchase_item_result_a_registration_fee_list_a_discount
   * @property {number} id_discount_rule Discount rule type. One of {@link Wl_Discount_DiscountRuleSid} constants.
   * @property {string} m_discount Discount amount of this rule.
   * @property {string} text_discount Discount title. Only for {@link Wl_Discount_DiscountRuleSid}.
   */

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseElementListModel_a_purchase_item_result_a_registration_fee_list
   * @property {?Wl_Book_Process_Purchase_PurchaseElementListModel_a_purchase_item_result_a_registration_fee_list_a_discount} a_discount Discounts applied to the fee, `null` if there are none. Every row has the next keys:
   * @property {string[]} a_tax Taxes of the fee. Keys are tax keys, values are tax amounts.
   * @property {string} m_amount Registration fee amount for the participant, before discount and tax.
   * @property {?string} m_checkout The amount charged for this fee right now, including tax. A fee is either charged in full or deferred entirely, so `null` means the whole fee is deferred.
   * @property {string} m_deferred The whole fee amount if the fee is deferred, `0.00` if it is charged right now.
   */

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseElementListModel_a_purchase_item_result
   * @property {Wl_Book_Process_Purchase_PurchaseElementListModel_a_purchase_item_result_a_event_list} a_event_list Tuition events with calculated amounts.
   * @property {Wl_Book_Process_Purchase_PurchaseElementListModel_a_purchase_item_result_a_registration_fee_list} a_registration_fee_list Registration fees with calculated amounts, keyed by participant key.
   * @property {string[]} a_tax Information about taxes. The key refers to the tax key, and the value refers to the tax amount.
   * @property {number} id_purchase_item The ID of purchase item type. One of {@link RsPurchaseItemSid} constants.
   * @property {string} k_id The key of the purchase item in the database.
   * @property {string} m_checkout The amount that has to be charged for the tuition right now, including tax. The other amounts of this row cover the full cost, including whatever is deferred to an installment plan or to a membership schedule.
   * @property {string} m_cost The cost of the purchase item (with taxes).
   * @property {string} m_deferred The part of the tuition cost that is not charged right now, including tax. Equals `m_cost` minus `m_checkout`. Rows for everything else are always paid for in full at once, so the amount to charge for the whole list is the sum of `m_cost` minus the sum of `m_deferred`.
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
 * price, tax, and subtotal amounts in `a_purchase_item_result`. For a tuition the amounts cover the
 * full cost, and the split between what is charged right now and what is deferred is added to the
 * same row.
 *
 * @function
 * @name Wl_Book_Process_Purchase_PurchaseElementListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
