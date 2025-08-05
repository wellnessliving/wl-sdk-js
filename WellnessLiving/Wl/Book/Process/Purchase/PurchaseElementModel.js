/**
 * An endpoint that provides information about a purchase item.
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
  this._s_key = "id_purchase_item,k_id,k_location,uid,i_session,k_login_prize,text_discount_code,k_pay_installment_template,dtu_date";

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
   * The purchase item type ID. One of the {@link RsPurchaseItemSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_purchase_item = 0;

  /**
   * The key of the purchase item in the database.
   * The name of the table in the database depends on {@link Wl_Book_Process_ProcessPurchaseElementModel.id_purchase_item}.
   *
   * @get get
   * @type {string}
   */
  this.k_id = "0";

  /**
   * The key of the location where the purchase is made.
   * This is also the booking process location.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * The key of the user's prize.
   * This won't be empty if the user wants to create a free visit from the prize.
   *
   * @get get
   * @type {string}
   */
  this.k_login_prize = "0";

  /**
   * The installment template key. This property is optional.
   *
   * This will be `null` if an installment plan doesn't exist for the purchased item or `0` if an installment plan
   * isn't selected for the purchased item from the list of installment plans.
   *
   * @get get
   * @type {?string}
   */
  this.k_pay_installment_template = null;

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

WlSdk_ModelAbstract.extend(Wl_Book_Process_Purchase_PurchaseElementModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Purchase_PurchaseElementModel.prototype.config=function()
{
  return {"a_field": {"a_tax": {"get": {"result": true}},"dtu_date": {"get": {"get": true}},"i_session": {"get": {"get": true}},"id_purchase_item": {"get": {"get": true}},"k_id": {"get": {"get": true}},"k_location": {"get": {"get": true}},"k_login_prize": {"get": {"get": true}},"k_pay_installment_template": {"get": {"get": true}},"m_cost": {"get": {"result": true}},"m_discount": {"get": {"result": true}},"m_discount_code": {"get": {"result": true}},"m_discount_login": {"get": {"result": true}},"m_price": {"get": {"result": true}},"m_subtotal": {"get": {"result": true}},"m_tax": {"get": {"result": true}},"text_discount_code": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Book_Process_Purchase_PurchaseElementModel.instanceGet
 * @param {number} id_purchase_item The purchase item type ID. One of the {@link RsPurchaseItemSid} constants.
 * @param {string} k_id The key of the purchase item in the database.
 * The name of the table in the database depends on {@link Wl_Book_Process_ProcessPurchaseElementModel.id_purchase_item}.
 * @param {string} k_location The key of the location where the purchase is made.
 * This is also the booking process location.
 * @param {string} uid The key of the current user.
 * @param {number} i_session The number of sessions booked simultaneously.
 * @param {string} k_login_prize The key of the user's prize.
 * This won't be empty if the user wants to create a free visit from the prize.
 * @param {string} text_discount_code The discount code.
 * @param {?string} k_pay_installment_template The installment template key. This property is optional.
 * This will be `null` if an installment plan doesn't exist for the purchased item or `0` if an installment plan
 * isn't selected for the purchased item from the list of installment plans.
 * @param {?string} dtu_date Date/time of session is booking. `null` until initialized.
 * @returns {Wl_Book_Process_Purchase_PurchaseElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */