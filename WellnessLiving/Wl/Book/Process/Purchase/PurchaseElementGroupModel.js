/**
 * Returns the pricing breakdown (totals, taxes, and discounts) for the given list of purchase items.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Purchase_PurchaseElementGroupModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseElementGroupModel_a_purchase_item_a_config_a_event_list
   * @property {string} k_class Key of the event class.
   * @property {string} uid Key of the tuition participant.
   */

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseElementGroupModel_a_purchase_item_a_config
   * @property {Wl_Book_Process_Purchase_PurchaseElementGroupModel_a_purchase_item_a_config_a_event_list} a_event_list List of tuition events.       Each entry has the next structure:
   */

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseElementGroupModel_a_purchase_item
   * @property {Wl_Book_Process_Purchase_PurchaseElementGroupModel_a_purchase_item_a_config} a_config Additional item configurations.
   * @property {number} i_session Number of sessions which are booked simultaneously.      Make sense only when `id_purchase_item` = {@link RsPurchaseItemSid}.
   * @property {number} id_purchase_item A list of purchase types.
   * @property {string} k_id The key of the purchase item in the database.
   * @property {string} k_login_prize The key of the user's prize.  Not empty only if the user wants to make a free visit from the prize.
   * @property {?string} k_pay_installment_template Installment template key.   This property is optional.  * can only be set for the purchase option which supports installment plan.   * `null` if installment plan doesn't exist for bought item;  * `0` if installment plan doesn't selected for bought item from the list of installment plans.  NOTE:  * Calculations of discounts and taxes for installment plans are for demonstration purposes only!  * Installment is not an independent purchase item and has no discounts or taxes.  * Installment is a division of the final amount (with taxes and discounts), of some purchase option, into N parts.
   * @property {string} k_reward_prize The key of the reward prize.  Not empty only if the user wants to redeem prize and use it to pay for a visit.
   * @property {string} uid The key of the user for whom the purchase item is being bought.
   */

  /**
   * A list of purchase items. Each item is an associative array with the following keys:
   *
   * @get get
   * @type {Wl_Book_Process_Purchase_PurchaseElementGroupModel_a_purchase_item[]}
   */
  this.a_purchase_item = undefined;

  /**
   * A list of taxes for the given purchase options.
   * Keys - tax keys, values - tax amounts.
   *
   * @get result
   * @type {string[]}
   */
  this.a_tax = undefined;

  /**
   * Date/time of session is booking.
   *
   * `null` until initialized.
   *
   * @get get
   * @type {?string}
   */
  this.dtu_date = null;

  /**
   * The key of the session to check for booking availability.
   *
   * @get get
   * @type {string}
   */
  this.k_class_period = "";

  /**
   * The key of the location in which the purchase is made.
   * This is also the booking process location.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * The total cost of the given purchase options.
   *
   * @get result
   * @type {string}
   */
  this.m_cost = undefined;

  /**
   * The amount of the whole discount for the given purchase options.
   *
   * @get result
   * @type {string}
   */
  this.m_discount = undefined;

  /**
   * The discount amount provided by a discount code for the given purchase options.
   *
   * @get result
   * @type {string}
   */
  this.m_discount_code = undefined;

  /**
   * The discount amount for the client type for the given purchase options.
   *
   * @get result
   * @type {string}
   */
  this.m_discount_login = undefined;

  /**
   * The price of the given purchase options (with or without taxes, depending on regional standards).
   *
   * @get result
   * @type {string}
   */
  this.m_price = undefined;

  /**
   * The amount of subtotal for the given purchase options.
   *
   * @get result
   * @type {string}
   */
  this.m_subtotal = undefined;

  /**
   * The amount of taxes for the given purchase options.
   *
   * @get result
   * @type {string}
   */
  this.m_tax = undefined;

  /**
   * The discount code.
   *
   * @get get
   * @type {string}
   */
  this.text_discount_code = "";

  /**
   * The key of the current user.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_Purchase_PurchaseElementGroupModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Purchase_PurchaseElementGroupModel.prototype.config=function()
{
  return {"a_field":{"a_purchase_item":{"get":{"get":true}},"a_tax":{"get":{"result":true}},"dtu_date":{"get":{"get":true}},"k_class_period":{"get":{"get":true}},"k_location":{"get":{"get":true}},"m_cost":{"get":{"result":true}},"m_discount":{"get":{"result":true}},"m_discount_code":{"get":{"result":true}},"m_discount_login":{"get":{"result":true}},"m_price":{"get":{"result":true}},"m_subtotal":{"get":{"result":true}},"m_tax":{"get":{"result":true}},"text_discount_code":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * Returns the pricing breakdown (totals, taxes, and discounts) for the given list of purchase items.
 *
 * Validates each item in `a_purchase_item` (type, key, installment eligibility, and prize applicability),
 * applies discount codes, login-type discounts, and installment adjustments, then accumulates price, subtotal,
 * discount, tax, and cost totals across all items and returns them as result fields.
 *
 * @function
 * @name Wl_Book_Process_Purchase_PurchaseElementGroupModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
