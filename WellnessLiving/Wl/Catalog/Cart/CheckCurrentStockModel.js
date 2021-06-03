/**
 * API to check current stock count.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Catalog_Cart_CheckCurrentStockModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Catalog_Cart_CheckCurrentStockModel_a_current
   * @property {number} i_current Product's inventory count at current location.
   * @property {string} k_id Product option key.
   * @property {string} html_title Product title.
   */

  /**
   * Current stock counts for products. Every element has next fields:
   * <dl>
   *   <dt>
   *     int <var>i_current</var>
   *   </dt>
   *   <dd>
   *     Product's inventory count at current location.
   *   </dd>
   *   <dt>
   *     string <var>k_id</var>
   *   </dt>
   *   <dd>
   *     Product option key.
   *   </dd>
   *   <dt>
   *     string <var>html_title</var>
   *   </dt>
   *   <dd>
   *     Product title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @post result
   * @type {Wl_Catalog_Cart_CheckCurrentStockModel_a_current}
   */
  this.a_current = undefined;

  /**
   * @typedef {{}} Wl_Catalog_Cart_CheckCurrentStockModel_a_item
   * @property {number} i_count Current stock quantity.
   * @property {number} id_purchase_item Purchase Item ID, one of {@link \RsPurchaseItemSid} constants.
   * @property {string} k_id Product option key, primary key in {@link RsShopProductOptionSql} table.
   */

  /**
   * Purchase items.
   * Every element has next fields:
   * <dl>
   *   <dt>int <var>i_count</var></dt>
   *   <dd>Current stock quantity.</dd>
   *   <dt>int <var>id_purchase_item</var></dt>
   *   <dd>Purchase Item ID, one of {@link \RsPurchaseItemSid} constants.</dd>
   *   <dt>string <var>k_id</var></dt>
   *   <dd>Product option key, primary key in {@link RsShopProductOptionSql} table.</dd>
   * </dl>
   *
   * @get get
   * @post get
   * @type {Wl_Catalog_Cart_CheckCurrentStockModel_a_item[]}
   */
  this.a_item = [];

  /**
   * @typedef {{}} Wl_Catalog_Cart_CheckCurrentStockModel_a_item_post
   * @property {number} i_count Current stock quantity.
   * @property {number} id_purchase_item Purchase Item ID, one of {@link \RsPurchaseItemSid} constants.
   * @property {string} k_id Product option key, primary key in {@link \RsShopProductOptionSql} table.
   */

  /**
   * Purchase items.
   * This field is the same as {@link CheckCurrentStockApi::$a_item}, but for POST method.
   *
   * Currently, it's prohibited to make API field working for both GET and POST, so it's necessary to make another field
   *   for different method.
   *
   * Every element has next fields:
   * <dl>
   *   <dt>int <var>i_count</var></dt>
   *   <dd>Current stock quantity.</dd>
   *   <dt>int <var>id_purchase_item</var></dt>
   *   <dd>Purchase Item ID, one of {@link \RsPurchaseItemSid} constants.</dd>
   *   <dt>string <var>k_id</var></dt>
   *   <dd>Product option key, primary key in {@link \RsShopProductOptionSql} table.</dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Catalog_Cart_CheckCurrentStockModel_a_item_post[]}
   */
  this.a_item_post = [];

  /**
   * <tt>true</tt> if user has access to the business, <tt>false</tt> otherwise.
   *
   * @get result
   * @post result
   * @type {boolean}
   */
  this.has_access = undefined;

  /**
   * Business key, primary key in {@link \RsBusinessSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Location key, primary key in {@link \RsLocationSql} table.
   *
   * <tt>null</tt> if not set.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * <tt>true</tt> if show confirmation of negative current count, <tt>false</tt> otherwise.
   *
   * @get result
   * @post result
   * @type {boolean}
   */
  this.show_confirmation = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_Cart_CheckCurrentStockModel);

/**
 * @inheritDoc
 */
Wl_Catalog_Cart_CheckCurrentStockModel.prototype.config=function()
{
  return {"a_field": {"a_current": {"get": {"result": true},"post": {"result": true}},"a_item": {"get": {"get": true},"post": {"get": true}},"a_item_post": {"post": {"post": true}},"has_access": {"get": {"result": true},"post": {"result": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_location": {"get": {"get": true},"post": {"get": true}},"show_confirmation": {"get": {"result": true},"post": {"result": true}}}};
};