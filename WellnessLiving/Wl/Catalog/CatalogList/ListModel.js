/**
 * Retrieves a list of all sale items.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Catalog_CatalogList_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_location,uid";

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ListModel_a_direct_link
   * @property {?number} id_sale List of sale categories on the store page.
   * @property {boolean} is_product `true` if `k_id` value is product key, `false` if `k_id` value is product option key.      Optional. Default value is `false`.      Used for `id_sale` === {@link RsSaleSid} only.
   * @property {string} k_id Key of item.
   */

  /**
   * Arguments from direct purchase link, which can give additional access to products, which are available
   *   only by such link.
   *
   * @get get
   * @type {Wl_Catalog_CatalogList_ListModel_a_direct_link}
   */
  this.a_direct_link = undefined;

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ListModel_a_product
   * @property {string[]} a_location The list of location keys where the sale item is available.
   * @property {string[]} a_shop_category Shop category keys the item belongs to.
   * @property {string} dtu_create UTC creation date of the item in MySQL format.
   * @property {string} f_price The item price.
   * @property {boolean} hide_application `true` if the item should be hidden from the application, `false` otherwise.
   * @property {?number} id_sale List of sale categories on the store page.
   * @property {boolean} is_direct `true` if the item was accessed via a direct purchase link, `false` otherwise.
   * @property {boolean} is_introductory `true` if the item is an introductory offer, `false` otherwise.
   * @property {string} k_id The item key.
   * @property {string} k_shop_category The primary shop category key for this item entry.
   * @property {string} s_key The unique string key identifying the item (product key combined with its DB SID).
   * @property {string} s_title The item title.
   * @property {string} url_catalog Direct URL to the catalog view page for this item.
   */

  /**
   * The list of all sale items (de-duplicated). Each element has the following keys:
   *
   * @get result
   * @type {Wl_Catalog_CatalogList_ListModel_a_product[]}
   */
  this.a_product = undefined;

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ListModel_a_product_duplicate
   * @property {string[]} a_location The list of location keys where the sale item is available.
   * @property {string[]} a_shop_category Shop category keys the item belongs to.
   * @property {string} dtu_create UTC creation date of the item in MySQL format.
   * @property {string} f_price The item price.
   * @property {boolean} hide_application `true` if the item should be hidden from the application, `false` otherwise.
   * @property {?number} id_sale List of sale categories on the store page.
   * @property {boolean} is_direct `true` if the item was accessed via a direct purchase link, `false` otherwise.
   * @property {boolean} is_introductory `true` if the item is an introductory offer, `false` otherwise.
   * @property {string} k_id The item key.
   * @property {string} k_shop_category The primary shop category key for this item entry.
   * @property {string} s_key The unique string key identifying the item (product key combined with its DB SID).
   * @property {string} s_title The item title.
   * @property {string} url_catalog Direct URL to the catalog view page for this item.
   */

  /**
   * The list of products to show with duplicates.
   *
   * Products have their own order within every shop category, and they can be related to several categories.
   * As a design decision, products are sorted in the backend using duplicates for every category.
   *
   * @get result
   * @type {Wl_Catalog_CatalogList_ListModel_a_product_duplicate}
   */
  this.a_product_duplicate = undefined;

  /**
   * `true` to consider the requirement to have a credit card for booking
   * (this requirement can be set in business settings)
   * `false` to ignore it.
   *
   * @get get
   * @type {boolean}
   */
  this.is_credit_card_check = false;

  /**
   * The business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The key of a location. If `0`, all products in the business are retrieved.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * The key of user.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_CatalogList_ListModel);

/**
 * @inheritDoc
 */
Wl_Catalog_CatalogList_ListModel.prototype.config=function()
{
  return {"a_field":{"a_direct_link":{"get":{"get":true}},"a_product":{"get":{"result":true}},"a_product_duplicate":{"get":{"result":true}},"is_credit_card_check":{"get":{"get":true}},"k_business":{"get":{"get":true}},"k_location":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Catalog_CatalogList_ListModel.instanceGet
 * @param {string} k_business The business key.
 * @param {string} k_location The key of a location. If `0`, all products in the business are retrieved.
 * @param {string} uid The key of user.
 * @returns {Wl_Catalog_CatalogList_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves a list of all sale items.
 *
 * Used to render the full client-facing store catalog for a business. Returns all purchasable items -
 * promotions, products, events, and coupons - merged across the business's categories. The separate
 * de-duplicated list and category list support both the flat and category-tabbed views.
 *
 * @function
 * @name Wl_Catalog_CatalogList_ListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
