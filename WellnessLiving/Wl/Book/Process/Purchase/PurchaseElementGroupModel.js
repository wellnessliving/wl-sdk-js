/**
 * An endpoint that provides information about a purchase item list.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Purchase_PurchaseElementGroupModel()
{
    WlSdk_ModelAbstract.apply(this);

    /**
     * A list of purchase items. Each item is an associative array with the following keys:
     *  <dl>
     *      <dt>int `id_purchase_item`</dt>
     *      <dd>The ID of the purchase item type.</dd>
     *      <dt>string `k_id`</dt>
     *      <dd>The key of the purchase item in the database.</dd>
     *      <dt>string [`k_login_prize`]</dt>
     *      <dd>The key of the user's prize.
     *      Not empty only if the user wants to make a free visit from the prize.</dd>
     *      <dt>string [`k_pay_installment_template`]</dt>
     *      <dd>Installment template key in database.
     *      This property is optional.
     *      * can only be set for the purchase option which supports installment plan, see {@link PurchaseItemAbstract::INSTALLMENT_ALLOW_USER} property;
     *      * `null` if installment plan doesn't exist for bought item;
     *      * `0` if installment plan doesn't selected for bought item from the list of installment plans.
     *      NOTE:
     *      * Calculations of discounts and taxes for installment plans are for demonstration purposes only!
     *      * Installment is not an independent purchase item and has no discounts or taxes.
     *      * Installment is a division of the final amount (with taxes and discounts), of some purchase option, into N parts.</dd>
     *      <dt>string [`k_reward_prize`]</dt>
     *      <dd>The key of the reward prize.
     *      Not empty only if the user wants to redeem prize and use it to pay for a visit.</dd>
     *  </dl>
     *
     * @get get
     * @type {{
     *   id_purchase_item: number,
     *   k_id: string,
     *   k_login_prize: string,
     *   k_pay_installment_template: string,
     *   k_reward_prize: string
     * }[]}
     */
    this.a_purchase_item = [];

    /**
     * A list of taxes for one purchase item.
     *
     * Keys refer to tax keys and values refer to tax amounts.
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
     * @var string|null
     */
    this.dtu_date = null;

    /**
     * The number of sessions booked simultaneously.
     *
     * @get get
     * @type {number}
     */
    this.i_session = 0;

    /**
     * The key of the location where the purchase is made.
     * This is also the booking process location.
     *
     * @get get
     * @type {string}
     */
    this.k_location = "0";

    /**
     * The cost of one purchase item with taxes included.
     *
     * @get result
     * @type {string}
     */
    this.m_cost = undefined;

    /**
     * The entire discount amount for one purchase item.
     *
     * @get result
     * @type {string}
     */
    this.m_discount = undefined;

    /**
     * The discount amount for the discount code of one purchase item.
     *
     * @get result
     * @type {string}
     */
    this.m_discount_code = undefined;

    /**
     * The discount amount for the client type of one purchase item.
     *
     * @get result
     * @type {string}
     */
    this.m_discount_login = undefined;

    /**
     * The price of the purchase item with or without taxes (depending on regional standards).
     *
     * @get result
     * @type {string}
     */
    this.m_price = undefined;

    /**
     * The subtotal amount for one purchase item.
     *
     * @get result
     * @type {string}
     */
    this.m_subtotal = undefined;

    /**
     * The amount of taxes for one purchase item.
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

WlSdk_ModelAbstract.extends(Wl_Book_Process_Purchase_PurchaseElementGroupModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Purchase_PurchaseElementGroupModel.prototype.config=function()
{
    return {"a_field": {"a_purchase_item": {"get": {"get": true}},"a_field": {"a_tax": {"get": {"result": true}},"dtu_date": {"get": {"get": true}},"i_session": {"get": {"get": true}},"k_location": {"get": {"get": true}},"m_cost": {"get": {"result": true}},"m_discount": {"get": {"result": true}},"m_discount_code": {"get": {"result": true}},"m_discount_login": {"get": {"result": true}},"m_price": {"get": {"result": true}},"m_subtotal": {"get": {"result": true}},"m_tax": {"get": {"result": true}},"text_discount_code": {"get": {"get": true}},"uid": {"get": {"get": true}}}}};
};