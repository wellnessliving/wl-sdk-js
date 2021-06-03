/**
 * Model of 1 purchase item.
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
  this._s_key = "id_purchase_item,k_id,k_location,uid,i_session,k_login_prize,text_discount_code";

  /**
   * List of taxes for 1 purchase item. Keys - tax keys (primary key in {@link \RsTaxSql} table); values - tax amount.
   *
   * @get result
   * @type {{}}
   */
  this.a_tax = undefined;

  /**
   * Number of sessions which are booked simultaneously.
   *
   * @get get
   * @type {number}
   */
  this.i_session = 0;

  /**
   * ID of purchase item type. One of {@link \RsPurchaseItemSid}.
   *
   * @get get
   * @type {number}
   */
  this.id_purchase_item = 0;

  /**
   * ID of certain purchase item in database.
   * Name of table in database depends on {@link \Wl\Book\Process\ProcessPurchaseElementApi::$id_purchase_item}.
   *
   * @get get
   * @type {string}
   */
  this.k_id = "0";

  /**
   * ID of the location in which the purchase is made.
   * Actually this is booking process location.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * ID of user's prize.
   * Not empty only if user wants to make free visit by prize.
   * Primary key in {@link \RsLoginPrizeSql} table.
   *
   * @get get
   * @type {?string}
   */
  this.k_login_prize = "0";

  /**
   * Cost of 1 purchase item. (With taxes.)
   *
   * @get result
   * @type {string}
   */
  this.m_cost = undefined;

  /**
   * Amount of whole discount of 1 purchase item.
   *
   * @get result
   * @type {string}
   */
  this.m_discount = undefined;

  /**
   * Amount of discount for client type of 1 purchase item.
   *
   * @get result
   * @type {string}
   */
  this.m_discount_login = undefined;

  /**
   * Price of 1 purchase item. (With or without taxes. It depends on regional standards.)
   *
   * @get result
   * @type {string}
   */
  this.m_price = undefined;

  /**
   * Amount of subtotal for 1 purchase item.
   *
   * @get result
   * @type {string}
   */
  this.m_subtotal = undefined;

  /**
   * Amount of taxes for 1 purchase item.
   *
   * @get result
   * @type {string}
   */
  this.m_tax = undefined;

  /**
   * Discount code.
   *
   * @get get
   * @type {string}
   */
  this.text_discount_code = "";

  /**
   * Key of current user. Primary key in table {@link \PassportLoginSql}.
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
  return {"a_field": {"a_tax": {"get": {"result": true}},"i_session": {"get": {"get": true}},"id_purchase_item": {"get": {"get": true}},"k_id": {"get": {"get": true}},"k_location": {"get": {"get": true}},"k_login_prize": {"get": {"get": true}},"m_cost": {"get": {"result": true}},"m_discount": {"get": {"result": true}},"m_discount_login": {"get": {"result": true}},"m_price": {"get": {"result": true}},"m_subtotal": {"get": {"result": true}},"m_tax": {"get": {"result": true}},"text_discount_code": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Book_Process_Purchase_PurchaseElementModel.instanceGet
 * @param {number} id_purchase_item ID of purchase item type. One of {@link \RsPurchaseItemSid}.
 * @param {string} k_id ID of certain purchase item in database. Name of table in database depends on {@link \Wl\Book\Process\ProcessPurchaseElementApi::$id_purchase_item}.
 * @param {string} k_location ID of the location in which the purchase is made. Actually this is booking process location.
 * @param {string} uid Key of current user. Primary key in table {@link \PassportLoginSql}.
 * @param {number} i_session Number of sessions which are booked simultaneously.
 * @param {?string} k_login_prize ID of user's prize. Not empty only if user wants to make free visit by prize. Primary key in {@link \RsLoginPrizeSql} table.
 * @param {string} text_discount_code Discount code.
 * @returns {Wl_Book_Process_Purchase_PurchaseElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */