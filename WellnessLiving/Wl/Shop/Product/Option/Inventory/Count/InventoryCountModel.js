/**
 * Returns information about product options.
 * Works in two modes: review and search.
 * In review mode, the method returns products with changed inventory quantities and notes.
 * In search mode, the method returns one product and its options (the result of searching by product barcode).
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Shop_Product_Option_Inventory_Count_InventoryCountModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The list of notes for product options in the store.
   * Keys refer to product options in the store. Values refer to text notes.
   *
   * @get get
   * @post get
   * @type {{}}
   */
  this.a_note = null;

  /**
   * @typedef {{}} Wl_Shop_Product_Option_Inventory_Count_InventoryCountModel_a_product_option_a_image
   * @property {number} i_height The image height.
   * @property {number} i_width The image width.
   * @property {string} url The image URL.
   */

  /**
   * @typedef {{}} Wl_Shop_Product_Option_Inventory_Count_InventoryCountModel_a_product_option
   * @property {Wl_Shop_Product_Option_Inventory_Count_InventoryCountModel_a_product_option_a_image} a_image Information about the product option image:
   * @property {string} dl_change The date of the last product inventory change.
   * @property {number} i_count The product option quantity.
   * @property {string} k_location The location key.
   * @property {string} k_shop_product_option The key of the product option in the store.
   * @property {string} k_shop_product_option_inventory The key of the product option inventory in the store.
   * @property {string} text_category The title of the store category.
   * @property {string} text_location The location title.
   * @property {string} text_note The product option inventory note.
   * @property {string} text_option The product option title.
   * @property {string} text_product The product option title.
   */

  /**
   * Information about product options for review or search.
   * Each element contains:
   *
   * @get result
   * @type {Wl_Shop_Product_Option_Inventory_Count_InventoryCountModel_a_product_option[]}
   */
  this.a_product_option = undefined;

  /**
   * The list of product option quantities in the store.
   * Keys refer to product options in the store. Values refer to product counts.
   *
   * @get get
   * @post get
   * @type {{}}
   */
  this.a_quantity = null;

  /**
   * The current business.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The product barcode, used for the search.
   *
   * @get get
   * @type {string}
   */
  this.text_barcode = "";

  /**
   * The current username.
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
  return {"a_field":{"a_note":{"get":{"get":true},"post":{"get":true}},"a_product_option":{"get":{"result":true}},"a_quantity":{"get":{"get":true},"post":{"get":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"text_barcode":{"get":{"get":true}},"text_user_name":{"get":{"result":true}}}};
};

/**
 * Returns information about product options.
Works in two modes: review and search.
In review mode, the method returns products with changed inventory quantities and notes.
In search mode, the method returns one product and its options (the result of searching by product barcode).
 *
 * Returns product option details including the current inventory quantity, last change date,
 * and notes. In barcode search mode, returns matching products; in review mode, returns only
 * options whose inventory or notes have been modified via the pending quantity or note maps.
 *
 * @function
 * @name Wl_Shop_Product_Option_Inventory_Count_InventoryCountModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Saves changes of product inventory quantities and notes.
 *
 * Persists updated inventory counts and per-option notes for the specified product options.
 * Requires backend access with the store management privilege. Creates an inventory
 * transaction record for audit trail purposes.
 *
 * @function
 * @name Wl_Shop_Product_Option_Inventory_Count_InventoryCountModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
