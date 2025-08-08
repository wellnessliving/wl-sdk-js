/**
 * A model of the purchase item.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Purchase_PurchaseElementModel()
{
    WlSdk_ModelAbstract.apply(this);

    /**
     * A list of taxes for the given purchase options.
     * Keys - tax keys.
     * Values - tax amounts.
     *
     * @get result
     * @type {{}}
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
     * @get get
     * @type {number}
     */
    this.i_session = 0;

    /**
     * The ID of the purchase item type. One of {@link Wl_Purchase_Item_ItemSid}.
     *
     * @get get
     * @type {number}
     */
    this.id_purchase_item = 0;

    /**
     * The key of the purchase item in the database.
     *
     * @get get
     * @type {string}
     */
    this.k_id = "0";

    /**
     * The key of the location in which the purchase is made.
     * This is also the booking process location.
     *
     * @get get
     * @type {string}
     */
    this.k_location = "0";

    /**
     * The key of the user's prize.
     * Not empty only if the user wants to make a free visit from the prize.
     *
     * @get get
     * @type {string}
     */
    this.k_login_prize = "0";

    /**
     * Installment template key.
     * This property is optional.
     *
     * * can only be set for the purchase option which supports installment plan, see {@link Wl\Purchase\Item\PurchaseItemAbstract::INSTALLMENT_ALLOW_USER} property;
     * * `null` if installment plan doesn't exist for bought item;
     * * `0` if installment plan doesn't selected for bought item from the list of installment plans.
     *
     * NOTE:
     * * Calculations of discounts and taxes for installment plans are for demonstration purposes only!
     * * Installment is not an independent purchase item and has no discounts or taxes.
     * * Installment is a division of the final amount (with taxes and discounts), of some purchase option, into N parts.
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
    this.k_reward_prize = "0";

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

WlSdk_ModelAbstract.extend(Wl_Book_Process_Purchase_PurchaseElementModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Purchase_PurchaseElementModel.prototype.config=function()
{
    return {"a_field": {"a_tax": {"get": {"result": true}},"dtu_date": {"get": {"get": true}},"i_session": {"get": {"get": true}},"id_purchase_item": {"get": {"get": true}},"k_id": {"get": {"get": true}},"k_location": {"get": {"get": true}},"k_login_prize": {"get": {"get": true}},"k_pay_installment_template": {"get": {"get": true}},"k_reward_prize": {"get": {"get": true}},"m_cost": {"get": {"result": true}},"m_discount": {"get": {"result": true}},"m_discount_code": {"get": {"result": true}},"m_discount_login": {"get": {"result": true}},"m_price": {"get": {"result": true}},"m_subtotal": {"get": {"result": true}},"m_tax": {"get": {"result": true}},"text_discount_code": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Book_Process_Purchase_PurchaseElementModel.instanceGet
 * @param {number} id_purchase_item The ID of the purchase item type. One of {@link RsPurchaseItemSid}.
 * @param {string} k_id The key of the purchase item in the database.
 * @param {string} k_location The key of the location in which the purchase is made. This is also the booking process location.
 * @param {string} uid The key of the current user.
 * @param {number} i_session The number of sessions which are booked simultaneously.
 * @param {string} k_login_prize The key of the user's prize. Not empty only if the user wants to make a free visit from the prize.
 * @param {string} text_discount_code The discount code.
 * @param {?string} k_pay_installment_template Installment template key. This property is optional. * can only be set for the purchase option which supports installment plan, see {@link Wl\Purchase\Item\PurchaseItemAbstract::INSTALLMENT_ALLOW_USER} property; * `null` if installment plan doesn't exist for bought item; * `0` if installment plan doesn't selected for bought item from the list of installment plans. NOTE: * Calculations of discounts and taxes for installment plans are for demonstration purposes only! * Installment is not an independent purchase item and has no discounts or taxes. * Installment is a division of the final amount (with taxes and discounts), of some purchase option, into N parts.
 * @param {string} k_reward_prize The key of the reward prize. Not empty only if the user wants to redeem prize and use it to pay for a visit.
 * @param {?string} dtu_date Date/time of session is booking. `null` until initialized.
 * @returns {Wl_Book_Process_Purchase_PurchaseElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */