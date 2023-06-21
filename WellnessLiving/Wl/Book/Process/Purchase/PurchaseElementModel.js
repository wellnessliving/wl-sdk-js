/**
 * A model of the purchase item.
 *
 * This model is generated automatically based on API.
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
  this._s_key = "id_purchase_item,k_id,k_location,uid,i_session,k_login_prize,text_discount_code,k_pay_installment_template";

  /**
   * A list of taxes for one purchase item. Keys - tax keys (primary key in {@link \RsTaxSql} table); values - tax amount.
   *
   * @get result
   * @type {{}}
   */
  this.a_tax = undefined;

  /**
   * The number of sessions which are booked simultaneously.
   *
   * @get get
   * @type {number}
   */
  this.i_session = 0;

  /**
   * The ID of the purchase item type. One of {@link RsPurchaseItemSid}.
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
   * This property is optional. `null` if installment plan doesn't exist for bought item.
   * `0` if installment plan doesn't selected for bought item from the list of installment plans.
   *
   * @get get
   * @type {?string}
   */
  this.k_pay_installment_template = null;

  /**
   * The cost of one purchase item (with taxes).
   *
   * @get result
   * @type {string}
   */
  this.m_cost = undefined;

  /**
   * The amount of the whole discount of one purchase item.
   *
   * @get result
   * @type {string}
   */
  this.m_discount = undefined;

  /**
   * Amount of discount for discount code of 1 purchase item.
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
   * The price of the purchase item (with or without taxes, depending on regional standards).
   *
   * @get result
   * @type {string}
   */
  this.m_price = undefined;

  /**
   * Remaining price of 1 purchase item. (With or without taxes. It depends on regional standards.)
   *
   * @get result
   * @type {string}
   */
  this.m_price_remaining = undefined;

  /**
   * Amount of subtotal for 1 purchase item.
   *
   * @get result
   * @type {string}
   */
  this.m_subtotal = undefined;

  /**
   * The amount of taxes for the one purchase item.
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
  return {"a_field": {"a_tax": {"get": {"result": true}},"i_session": {"get": {"get": true}},"id_purchase_item": {"get": {"get": true}},"k_id": {"get": {"get": true}},"k_location": {"get": {"get": true}},"k_login_prize": {"get": {"get": true}},"k_pay_installment_template": {"get": {"get": true}},"m_cost": {"get": {"result": true}},"m_discount": {"get": {"result": true}},"m_discount_code": {"get": {"result": true}},"m_discount_login": {"get": {"result": true}},"m_price": {"get": {"result": true}},"m_price_remaining": {"get": {"result": true}},"m_subtotal": {"get": {"result": true}},"m_tax": {"get": {"result": true}},"text_discount_code": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Book_Process_Purchase_PurchaseElementModel.instanceGet
 * @param {number} id_purchase_item The ID of the purchase item type. One of {@link RsPurchaseItemSid}.
 * @param {string} k_id The key of the purchase item in the database. The name of the table in the database depends on {@link Wl_Book_Process_ProcessPurchaseElementModel.id_purchase_item}.
 * @param {string} k_location The key of the location in which the purchase is made. This is also the booking process location.
 * @param {string} uid The key of the current user.
 * @param {number} i_session The number of sessions which are booked simultaneously.
 * @param {string} k_login_prize The key of the user's prize. Not empty only if the user wants to make a free visit from the prize.
 * @param {string} text_discount_code The discount code.
 * @param {?string} k_pay_installment_template Installment template key. This property is optional. `null` if installment plan doesn't exist for bought item. `0` if installment plan doesn't selected for bought item from the list of installment plans.
 * @returns {Wl_Book_Process_Purchase_PurchaseElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */