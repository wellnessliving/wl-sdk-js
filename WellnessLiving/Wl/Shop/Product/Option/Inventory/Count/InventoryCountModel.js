/**
 * Change inventory quantity and notes for the shop product options.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Shop_Product_Option_Inventory_Count_InventoryCountModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of notes for the shop product options.
   * Key is shop product option inventory key from the {@link \RsShopProductOptionInventorySql} table, value is text note.
   *
   * @get get
   * @post get
   * @type {{}}
   */
  this.a_note = [];

  /**
   * @typedef {{}} Wl_Shop_Product_Option_Inventory_Count_InventoryCountModel_a_product_option_a_image
   * @property {number} i_height Height of the image.
   * @property {number} i_width Width of the image.
   * @property {string} url URL of the image.
   */
  /**
   * @typedef {{}} Wl_Shop_Product_Option_Inventory_Count_InventoryCountModel_a_product_option
   * @property {Wl_Shop_Product_Option_Inventory_Count_InventoryCountModel_a_product_option_a_image} a_image Information about product image:
   * <dl>
   *   <dt>int <tt>i_height</tt></dt>
   *   <dd>Height of the image.</dd>
   *   <dt>int <tt>i_width</tt></dt>
   *   <dd>Width of the image.</dd>
   *   <dt>string <tt>url</tt></dt>
   *   <dd>URL of the image.</dd>
   * </dl>
   * @property {string} dl_change Date of the last change product inventory.
   * @property {number} i_count Product quantity.
   * @property {string} k_location Key of the location. Primary key in {@link \RsLocationSql} table.
   * @property {string} k_shop_product_option Key of the shop product option. Primary key in {@link \RsShopProductOptionSql} table.
   * @property {string} k_shop_product_option_inventory Key of the shop product option inventory. Primary key in {@link \RsShopProductOptionInventorySql} table.
   * @property {string} text_category Online Store categories title.
   * @property {string} text_location Location title.
   * @property {string} text_note Product option inventory note.
   * @property {string} text_option Product option title.
   * @property {string} text_product Product title.
   */

  /**
   * Information about product options for review or search.
   * Each element contains:
   * <dl>
   *   <dt>array <var>a_image</var></dt>
   *   <dd>Information about product image:
   *     <dl>
   *       <dt>int <var>i_height</var></dt>
   *       <dd>Height of the image.</dd>
   *       <dt>int <var>i_width</var></dt>
   *       <dd>Width of the image.</dd>
   *       <dt>string <var>url</var></dt>
   *       <dd>URL of the image.</dd>
   *     </dl>
   *   </dd>
   *   <dt>string <var>dl_change</var></dt>
   *   <dd>Date of the last change product inventory.</dd>
   *   <dt>int <var>i_count</var></dt>
   *   <dd>Product quantity.</dd>
   *   <dt>string <var>k_location</var></dt>
   *   <dd>Key of the location. Primary key in {@link \RsLocationSql} table.</dd>
   *   <dt>string <var>k_shop_product_option</var></dt>
   *   <dd>Key of the shop product option. Primary key in {@link \RsShopProductOptionSql} table.</dd>
   *   <dt>string <var>k_shop_product_option_inventory</var></dt>
   *   <dd>Key of the shop product option inventory. Primary key in {@link \RsShopProductOptionInventorySql} table.</dd>
   *   <dt>string <var>text_category</var></dt>
   *   <dd>Online Store categories title.</dd>
   *   <dt>string <var>text_location</var></dt>
   *   <dd>Location title.</dd>
   *   <dt>string <var>text_note</var></dt>
   *   <dd>Product option inventory note.</dd>
   *   <dt>string <var>text_option</var></dt>
   *   <dd>Product option title.</dd>
   *   <dt>string <var>text_product</var></dt>
   *   <dd>Product title.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Shop_Product_Option_Inventory_Count_InventoryCountModel_a_product_option[]}
   */
  this.a_product_option = [];

  /**
   * List of quantities of the shop product options.
   * Key is shop product option inventory key from the {@link \RsShopProductOptionInventorySql} table, value is count of the product.
   *
   * @get get
   * @post get
   * @type {{}}
   */
  this.a_quantity = [];

  /**
   * Current business. Primary key from the {@link \RsBusinessSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Product barcode for the search.
   *
   * @get get
   * @type {string}
   */
  this.text_barcode = undefined;

  /**
   * Current user name.
   *
   * @get result
   * @type {string}
   */
  this.text_user_name = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Shop_Product_Option_Inventory_Count_InventoryCountModel);

/**
 * @inheritDoc
 */
Wl_Shop_Product_Option_Inventory_Count_InventoryCountModel.prototype.config=function()
{
  return {"a_field": {"a_note": {"get": {"get": true},"post": {"get": true}},"a_product_option": {"get": {"result": true}},"a_quantity": {"get": {"get": true},"post": {"get": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"text_barcode": {"get": {"get": true}},"text_user_name": {"get": {"result": true}}}};
};