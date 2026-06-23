/**
 * Gets store products by shop category.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Catalog_CatalogList_CatalogProductModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_CatalogProductModel_a_category_sort
   * @property {number[]} a_order The order of the products by category if {@link Wl_Shop_Category_ShopCategorySortSid} is selected. Each element is a product key string, ordered as desired.
   * @property {?number} id_order List of possible sort order.
   * @property {number} id_sort List of Setup -> Store configuration -> Categories and Layout sort options.
   */

  /**
   * Categories with sort settings. Keys refer to shop category keys. Values refer to sort settings. Contains the following structure:
   *
   * @get result
   * @type {Wl_Catalog_CatalogList_CatalogProductModel_a_category_sort[]}
   */
  this.a_category_sort = undefined;

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_CatalogProductModel_a_filter_a_quick_config
   * @property {string} k_visit The visit key used to filter quick-buy items.
   */

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_CatalogProductModel_a_filter
   * @property {Wl_Catalog_CatalogList_CatalogProductModel_a_filter_a_quick_config} a_quick_config Additional data for cases where the catalog list is in Quick Buy mode. Contains:
   * @property {number[]} a_sale_id The list of special categories for the catalogue. Each value is a constant of {@link RsSaleSid}.
   * @property {string[]} a_shop_category Shop category keys to filter by.
   * @property {number} i_last The last shown product index for pagination.
   * @property {?number} id_order List of possible sort order.
   * @property {number} id_sort List of Setup -> Store configuration -> Categories and Layout sort options.
   * @property {string} k_business The business key.
   * @property {string} k_location The location key.
   * @property {string} s_title A title fragment to filter products by name.
   * @property {string} uid The user key.
   */

  /**
   * Additional data to filter products.
   *
   * @get get
   * @type {Wl_Catalog_CatalogList_CatalogProductModel_a_filter}
   */
  this.a_filter = undefined;

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_CatalogProductModel_a_product
   * @property {string} html_price HTML-escaped formatted price of the product.
   * @property {string} html_price_early HTML-escaped formatted early-bird price of the product. Present only when an early price applies.
   * @property {?number} id_sale List of sale categories on the store page.
   * @property {string} k_id The product key.
   * @property {string} k_shop_category The shop category key.
   * @property {string} s_title The product title.
   * @property {string} url_catalog Direct link to the catalog view page for this product.
   */

  /**
   * The list of products. Each element has the following keys:
   *
   * @get result
   * @type {Wl_Catalog_CatalogList_CatalogProductModel_a_product}
   */
  this.a_product = undefined;

  /**
   * The currently shown element.
   *
   * @get get,result
   * @type {number}
   */
  this.i_last = 0;

  /**
   * Determines whether more products can be loaded.
   *
   * @get result
   * @type {boolean}
   */
  this.is_load_more = undefined;

  /**
   * The business key to get products for.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The selected shop category.
   *
   * This will be `0` for the system's Unassigned category or `null` if not set yet.
   *
   * @get get
   * @type {string}
   */
  this.k_shop_category = "";

  /**
   * The cache key used to get products.
   *
   * @get get,result
   * @type {string}
   */
  this.s_cache_key = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_CatalogList_CatalogProductModel);

/**
 * @inheritDoc
 */
Wl_Catalog_CatalogList_CatalogProductModel.prototype.config=function()
{
  return {"a_field":{"a_category_sort":{"get":{"result":true}},"a_filter":{"get":{"get":true}},"a_product":{"get":{"result":true}},"i_last":{"get":{"get":true,"result":true}},"is_load_more":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_shop_category":{"get":{"get":true}},"s_cache_key":{"get":{"get":true,"result":true}}}};
};

/**
 * Gets store products by shop category.
 *
 * Used to populate a specific product category tab in the client-facing store. Supports pagination so
 * large categories can be loaded incrementally. Returns the products together with the sort order
 * configured for the category and a cache key for client-side caching.
 *
 * @function
 * @name Wl_Catalog_CatalogList_CatalogProductModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
