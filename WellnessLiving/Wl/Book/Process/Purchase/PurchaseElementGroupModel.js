/**
 * API point to get information about a list of purchase options wile booking process.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Purchase_PurchaseElementGroupModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseElementGroupModel_a_purchase_item_a_config_a_registration_fee_list
   * @property {?{}[]} a_discount Discounts applied to the fee, `null` if there are none. Rows have the same
   *      keys as in `a_event_list`.
   * @property {string[]} a_tax Taxes of the fee. Keys are tax keys, values are tax amounts.
   *
   * @property {string} m_amount Registration fee amount for the participant, before discount and tax.
   * @property {?string} m_checkout The amount charged for this fee right now, including tax. A fee is either
   *      charged in full or deferred entirely, so `null` means it is fully deferred.
   * @property {string} m_deferred The whole fee amount if the fee is deferred, `0.00` if it is charged now.
   */
  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseElementGroupModel_a_purchase_item_a_config_a_event_list_a_discount
   * @property {number} id_discount_rule Discount rule type. One of {@link Wl_Discount_DiscountRuleSid} constants.
   * @property {string} m_discount Discount amount of this rule.
   * @property {string} [text_discount] Discount title. Only for {@link Wl_Discount_DiscountRuleSid.MANUAL}.
   */
  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseElementGroupModel_a_purchase_item_a_config_a_event_list
   * @property {Wl_Book_Process_Purchase_PurchaseElementGroupModel_a_purchase_item_a_config_a_event_list_a_discount} a_discount Discounts applied to the event, `null` if there are none. Every row has the
   *      next keys:
   * @property {?string[]} a_tax Taxes of the event. Keys are tax keys, values are tax amounts.
   *
   * @property {string} k_class Key of the event class.
   * @property {?string} m_checkout The amount charged for this event right now, including tax. `0.00` when every
   *      installment payment is still ahead. `null` when it is not calculated yet.
   * @property {string} m_deferred The part of the event cost that is not charged right now, including tax. Goes
   *      to the installment plan or to the membership schedule, depending on the
   *      tuition billing mode.
   * @property {string} m_discount Total discount amount applied to the event, `0.00` if there is none.
   * @property {?string} m_price Price of the event within the tuition, before discount and tax.
   * @property {string} uid Key of the tuition participant.
   */
  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseElementGroupModel_a_purchase_item_a_config
   * @property {Wl_Book_Process_Purchase_PurchaseElementGroupModel_a_purchase_item_a_config_a_event_list[]} [a_event_list] List of tuition events, one entry per participant and event class.
   *      Each entry has the next structure:
   * @property {Wl_Book_Process_Purchase_PurchaseElementGroupModel_a_purchase_item_a_config_a_registration_fee_list[]} a_registration_fee_list Registration fees, keyed by participant key.
   *
   *      Filled by the server, never accepted from the caller in this flow.
   *      Each value has the next structure:
   * @property {string} m_checkout The amount charged for this tuition right now, including tax. The sum of
   *      `m_checkout` of every its event and registration fee.
   *
   * @property {string} m_deferred The amount that is not charged right now, including tax. Together with
   *      `m_checkout` it adds up to the full cost of this tuition.
   */
  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseElementGroupModel_a_purchase_item
   * @property {Wl_Book_Process_Purchase_PurchaseElementGroupModel_a_purchase_item_a_config} [a_config] Additional item configurations.
   *       Only `a_event_list` is
   *      expected in the request, and only `k_class` and `uid` are accepted in every its entry.
   *      Prices, discounts, and taxes can not be overridden here: this booking flow is never
   *      authenticated as a staff member, so {@link \Wl\Purchase\Item\Tuition::verifyObjectFromSource()} strips
   *      such fields. In the response `a_event_list` comes back recomputed, and
   *      `a_registration_fee_list`, `m_checkout`, and `m_deferred` are added.
   * @property {number} [i_session] Number of sessions which are booked simultaneously.
   *      Make sense only when `id_purchase_item` = {@link RsPurchaseItemSid.CLASS_PERIOD}.
   * @property {number} id_purchase_item The ID of the purchase item type. One of {@link RsPurchaseItemSid}.
   * @property {string} k_id The key of the purchase item in the database.
   * @property {string} [k_login_prize] The key of the user's prize.
   *  Not empty only if the user wants to make a free visit from the prize.
   * @property {?string} [k_pay_installment_template] Installment template key.
   *  This property is optional.
   *  * can only be set for the purchase option which supports installment plan.
   *  * `null` if installment plan doesn't exist for bought item;
   *  * `0` if installment plan doesn't selected for bought item from the list of installment plans.
   *  NOTE:
   *  * Calculations of discounts and taxes for installment plans are for demonstration purposes only!
   *  * Installment is not an independent purchase item and has no discounts or taxes.
   *  * Installment is a division of the final amount (with taxes and discounts), of some purchase option, into N parts.
   * @property {string} [k_reward_prize] The key of the reward prize.
   *  Not empty only if the user wants to redeem prize and use it to pay for a visit.
   * @property {string} uid The key of the user for whom the purchase item is being bought.
   */

  /**
   * A list of purchase items. Each item is an associative array with the following keys:
   *
   * @get get
   * @type {Wl_Book_Process_Purchase_PurchaseElementGroupModel_a_purchase_item[]}
   */
  this.a_purchase_item = [];

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
  this.k_class_period = "0";

  /**
   * The key of the location in which the purchase is made.
   * This is also the booking process location.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * The amount that has to be charged right now for the given purchase options.
   *
   * Equals {@link Wl_Book_Process_Purchase_PurchaseElementGroupModel.m_cost} for everything that is paid for in full at
   * once. A tuition defers a part of its cost to an installment plan or to a membership schedule,
   * and `m_cost` covers the full cost regardless, so this is the amount to put into the payment
   * form. It is `m_cost` minus `a_config.m_deferred` of every tuition item in
   * {@link Wl_Book_Process_Purchase_PurchaseElementGroupModel.a_purchase_item}.
   *
   * @get result
   * @type {string}
   */
  this.m_checkout = undefined;

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
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_Purchase_PurchaseElementGroupModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Purchase_PurchaseElementGroupModel.prototype.config=function()
{
  return {"a_field": {"a_purchase_item": {"get": {"get": true}},"a_tax": {"get": {"result": true}},"dtu_date": {"get": {"get": true}},"k_class_period": {"get": {"get": true}},"k_location": {"get": {"get": true}},"m_cost": {"get": {"result": true}},"m_discount": {"get": {"result": true}},"m_discount_code": {"get": {"result": true}},"m_discount_login": {"get": {"result": true}},"m_price": {"get": {"result": true}},"m_subtotal": {"get": {"result": true}},"m_tax": {"get": {"result": true}},"text_discount_code": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};