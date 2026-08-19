/**
 * Builds a single-item purchase list from the scalar input fields and delegates to the parent for price calculation.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Purchase_PurchaseElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "id_purchase_item,k_id,k_location,uid,i_session,k_login_prize,text_discount_code,k_pay_installment_template,k_reward_prize,dtu_date";

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseElementModel_a_config_a_event_list_a_discount
   * @property {number} id_discount_rule Discount rule type. One of {@link Wl_Discount_DiscountRuleSid} constants.
   * @property {string} m_discount Discount amount of this rule.
   * @property {string} text_discount Discount title. Only for {@link Wl_Discount_DiscountRuleSid}.
   */

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseElementModel_a_config_a_event_list
   * @property {?Wl_Book_Process_Purchase_PurchaseElementModel_a_config_a_event_list_a_discount} a_discount Discounts applied to the event, `null` if there are none. Every row has the next keys:
   * @property {?string[]} a_tax Taxes of the event. Keys are tax keys, values are tax amounts.
   * @property {string} k_class Key of the event class.
   * @property {?string} m_checkout The amount charged for this event right now, including tax. `0.00` when every installment payment is still ahead. `null` when the amount is not calculated yet.
   * @property {string} m_deferred The part of the event cost that is not charged right now, including tax. Goes to the installment plan or to the membership schedule, depending on the tuition billing mode.
   * @property {string} m_discount Total discount amount applied to the event, `0.00` if there is none.
   * @property {?string} m_price Price of the event within the tuition, before discount and tax.
   * @property {string} uid Key of the tuition participant.
   */

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseElementModel_a_config_a_registration_fee_list
   * @property {?*[][]} a_discount Discounts applied to the fee, `null` if there are none. Rows have the same keys as in `a_event_list`.
   * @property {string[]} a_tax Taxes of the fee. Keys are tax keys, values are tax amounts.
   * @property {string} m_amount Registration fee amount for the participant, before discount and tax.
   * @property {?string} m_checkout The amount charged for this fee right now, including tax. A fee is either charged in full or deferred entirely, so `null` means the whole fee is deferred.
   * @property {string} m_deferred The whole fee amount if the fee is deferred, `0.00` if it is charged right now.
   */

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseElementModel_a_config
   * @property {Wl_Book_Process_Purchase_PurchaseElementModel_a_config_a_event_list} a_event_list List of tuition events, one entry per participant and event class. Each entry has the next structure:
   * @property {Wl_Book_Process_Purchase_PurchaseElementModel_a_config_a_registration_fee_list} a_registration_fee_list Registration fees, keyed by participant key.
   * @property {string} m_checkout The total amount charged for the tuition right now, including tax. The sum of `m_checkout` of every event and every registration fee.
   * @property {string} m_deferred The total amount that is not charged right now, including tax. Together with `m_checkout` it adds up to the full cost of the tuition.
   */

  /**
   * Additional configuration for the purchase item.
   * Depending on purchase item type different configuration parameters can be passed.
   *
   * For purchase items with {@link RsPurchaseItemSid} type only `a_event_list` is
   * expected in the request, and only `k_class` and `uid` are accepted in every its entry. Prices,
   * discounts, and taxes can not be overridden here: this booking flow is never authenticated as a
   * staff member, so Tuition::verifyObjectFromSource() strips such fields.
   *
   * In the response this is not an echo: `a_event_list` comes back recomputed, and
   * `a_registration_fee_list`, `m_checkout`, and `m_deferred` are added.
   *
   * @get get,result
   * @type {Wl_Book_Process_Purchase_PurchaseElementModel_a_config}
   */
  this.a_config = undefined;

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
   * The number of sessions which are booked simultaneously.
   *
   * Required when {@link Wl_Book_Process_Purchase_PurchaseElementModel.id_purchase_item} = {@link RsPurchaseItemSid}.
   *
   * @get get
   * @see RsPurchaseItemSid
   * @type {number}
   */
  this.i_session = 0;

  /**
   * The ID of the purchase item type. One of {@link RsPurchaseItemSid}.
   *
   * @get get
   * @see RsPurchaseItemSid
   * @type {number}
   */
  this.id_purchase_item = 0;

  /**
   * The key of the session to check for booking availability.
   *
   * @get get
   * @type {string}
   */
  this.k_class_period = "";

  /**
   * The key of the purchase item in the database.
   *
   * @get get
   * @type {string}
   */
  this.k_id = "";

  /**
   * The key of the location in which the purchase is made.
   * This is also the booking process location.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * The key of the user's prize.
   * Not empty only if the user wants to make a free visit from the prize.
   *
   * @get get
   * @type {string}
   */
  this.k_login_prize = "";

  /**
   * Installment template key.
   * This property is optional.
   *
   * * can only be set for the purchase option which supports installment plan.
   *
   * * `null` if installment plan doesn't exist for bought item;
   * * `0` if installment plan doesn't selected for bought item from the list of installment plans.
   *
   * NOTE:
   * * Calculations of discounts and taxes for installment plans are for demonstration purposes only!
   * * Installment is not an independent purchase item and has no discounts or taxes.
   * * Installment is a division of the final amount (with taxes and discounts), of some purchase option, into N
   * parts.
   *
   * @get get
   * @type {?string}
   */
  this.k_pay_installment_template = null;

  /**
   * The key of the reward prize.
   * Not empty only if the user wants to redeem prize and use it to pay for a visit.
   *
   * @get get
   * @type {string}
   */
  this.k_reward_prize = "";

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
   * The tax portion of {@link Wl_Book_Process_Purchase_PurchaseElementGroupModel.m_checkout}.
   *
   * Equals {@link Wl_Book_Process_Purchase_PurchaseElementGroupModel.m_tax} for everything that is paid for in full at
   * once. A tuition defers a part of its tax to an installment plan along with the rest of its
   * cost, so this is the tax on the amount actually charged right now, not on the full cost.
   *
   * @get result
   * @type {string}
   */
  this.m_checkout_tax = undefined;

  /**
   * The total cost of the given purchase options.
   *
   * For a tuition this is the full cost, including whatever is deferred to an installment plan or
   * to a membership schedule.
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

WlSdk_ModelAbstract.extend(Wl_Book_Process_Purchase_PurchaseElementModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Purchase_PurchaseElementModel.prototype.config=function()
{
  return {"a_field":{"a_config":{"get":{"get":true,"result":true}},"a_tax":{"get":{"result":true}},"dtu_date":{"get":{"get":true}},"i_session":{"get":{"get":true}},"id_purchase_item":{"get":{"get":true}},"k_class_period":{"get":{"get":true}},"k_id":{"get":{"get":true}},"k_location":{"get":{"get":true}},"k_login_prize":{"get":{"get":true}},"k_pay_installment_template":{"get":{"get":true}},"k_reward_prize":{"get":{"get":true}},"m_checkout":{"get":{"result":true}},"m_checkout_tax":{"get":{"result":true}},"m_cost":{"get":{"result":true}},"m_discount":{"get":{"result":true}},"m_discount_code":{"get":{"result":true}},"m_discount_login":{"get":{"result":true}},"m_price":{"get":{"result":true}},"m_subtotal":{"get":{"result":true}},"m_tax":{"get":{"result":true}},"text_discount_code":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Book_Process_Purchase_PurchaseElementModel.instanceGet
 * @param {number} id_purchase_item The ID of the purchase item type. One of {@link RsPurchaseItemSid}.
 * @param {string} k_id The key of the purchase item in the database.
 * @param {string} k_location The key of the location in which the purchase is made. This is also the booking process location.
 * @param {string} uid The key of the current user.
 * @param {number} i_session The number of sessions which are booked simultaneously. Required when {@link Wl_Book_Process_Purchase_PurchaseElementModel.id_purchase_item} = {@link RsPurchaseItemSid}.
 * @param {string} k_login_prize The key of the user's prize. Not empty only if the user wants to make a free visit from the prize.
 * @param {string} text_discount_code The discount code.
 * @param {?string} k_pay_installment_template Installment template key. This property is optional. * can only be set for the purchase option which supports installment plan. * `null` if installment plan doesn't exist for bought item; * `0` if installment plan doesn't selected for bought item from the list of installment plans. NOTE: * Calculations of discounts and taxes for installment plans are for demonstration purposes only! * Installment is not an independent purchase item and has no discounts or taxes. * Installment is a division of the final amount (with taxes and discounts), of some purchase option, into N parts.
 * @param {string} k_reward_prize The key of the reward prize. Not empty only if the user wants to redeem prize and use it to pay for a visit.
 * @param {?string} dtu_date Date/time of session is booking. `null` until initialized.
 * @returns {Wl_Book_Process_Purchase_PurchaseElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Builds a single-item purchase list from the scalar input fields and delegates to the parent for price calculation.
 *
 * Constructs a one-element `a_purchase_item` array from the individual scalar GET fields (purchase item type,
 * item key, session count, prize keys, and installment template), then delegates to
 * `get()` to compute the price breakdown for that item.
 *
 * @function
 * @name Wl_Book_Process_Purchase_PurchaseElementModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
