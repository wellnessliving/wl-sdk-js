/**
 * Model of list of purchase items.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Purchase_PurchaseElementListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseElementListModel_a_purchase_item_request
   * @property {*} i_session Number of sessions which are booked simultaneously.
   * @property {number} id_purchase_item ID of purchase item type. One of {@link \RsPurchaseItemSid}.
   * @property {string} k_id Key of certain purchase item in database. Name of table in database depends on <tt>id_purchase_item</tt>
   * @property {*} k_login_prize Key of user's prize. Primary key in {@link \RsLoginPrizeSql} table.
   */

  /**
   * List of purchase items to get information for. Every element has next keys:<dl>
   *   <dt>int [<var>i_session</var>]</dt>
   *   <dd>Number of sessions which are booked simultaneously.</dd>
   *   <dt>int <var>id_purchase_item</var></dt>
   *   <dd>ID of purchase item type. One of {@link \RsPurchaseItemSid}.</dd>
   *   <dt>string <var>k_id</var></dt>
   *   <dd>Key of certain purchase item in database. Name of table in database depends on <var>id_purchase_item</var></dd>
   *   <dt>string [<var>k_login_prize</var>]</dt>
   *   <dd>Key of user's prize. Primary key in {@link \RsLoginPrizeSql} table.</dd>
   * </dl>
   *
   * @get get
   * @type {Wl_Book_Process_Purchase_PurchaseElementListModel_a_purchase_item_request[]}
   */
  this.a_purchase_item_request = [];

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseElementListModel_a_purchase_item_result
   * @property {{}} a_tax Information about taxes. Key - tax key (primary key in {@link \RsTaxSql} table); value - tax amount.
   * @property {string} id_purchase_item ID of purchase item type.
   * @property {string} k_id Key of certain purchase item in database.
   * @property {string} m_cost Cost of purchase item (with taxes).
   * @property {string} m_discount Amount of whole discount.
   * @property {string} m_discount_login Amount of discount for client type.
   * @property {string} m_price Price of purchase item (with or without taxes - it depends on regional standards).
   * @property {string} m_tax Amount of taxes for purchase item.
   */

  /**
   * Detail information about amounts for purchase item list. Every element has next keys:
   * <dl>
   *   <dt>
   *     array <var>a_tax</var>
   *   </dt>
   *   <dd>
   *     Information about taxes. Key - tax key (primary key in {@link \RsTaxSql} table); value - tax amount.
   *   </dd>
   *   <dt>
   *     string <var>id_purchase_item</var>
   *   </dt>
   *   <dd>
   *     ID of purchase item type.
   *   </dd>
   *   <dt>
   *     string <var>k_id</var>
   *   </dt>
   *   <dd>
   *     Key of certain purchase item in database.
   *   </dd>
   *   <dt>
   *     string <var>m_cost</var>
   *   </dt>
   *   <dd>
   *     Cost of purchase item (with taxes).
   *   </dd>
   *   <dt>
   *     string <var>m_discount</var>
   *   </dt>
   *   <dd>
   *     Amount of whole discount.
   *   </dd>
   *   <dt>
   *     string <var>m_discount_login</var>
   *   </dt>
   *   <dd>
   *     Amount of discount for client type.
   *   </dd>
   *   <dt>
   *     string <var>m_price</var>
   *   </dt>
   *   <dd>
   *     Price of purchase item (with or without taxes - it depends on regional standards).
   *   </dd>
   *   <dt>
   *     string <var>m_tax</var>
   *   </dt>
   *   <dd>
   *     Amount of taxes for purchase item.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Book_Process_Purchase_PurchaseElementListModel_a_purchase_item_result[]}
   */
  this.a_purchase_item_result = undefined;

  /**
   * Key of the business in which the purchase is made.
   * Primary key in {@link \RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Key of the location in which the purchase is made.
   * Actually this is booking process location.
   * Primary key in {@link \RsLocationSql} table.
   *
   * <tt>null</tt> if not set or location can not be defined for some reason.
   *
   * @get get
   * @type {?string}
   */
  this.k_location = null;

  /**
   * Discount code.
   *
   * @get get
   * @type {string}
   */
  this.text_discount_code = "";

  /**
   * Key of user who is making the purchase. Primary key in table {@link \PassportLoginSql}.
   *
   * @get get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_Purchase_PurchaseElementListModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Purchase_PurchaseElementListModel.prototype.config=function()
{
  return {"a_field": {"a_purchase_item_request": {"get": {"get": true}},"a_purchase_item_result": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_location": {"get": {"get": true}},"text_discount_code": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};