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
   * @property {?number} id_sale Type of the item from {@link RsSaleSid}.
   * @property {boolean} is_product `true` if `k_id` value is product key, `false` if `k_id` value is product option key.      Optional. Default value is `false`.
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
   * @typedef {{}} Wl_Catalog_CatalogList_ListModel_a_filter_a_schema_a_item
   * @property {?number} id_sale Sale type of the item. One of {@link RsSaleSid} constants. Any type of a purchase option matches any other type of a purchase option.
   * @property {string} k_id Key of the item, as `k_id` of {@link Wl_Catalog_CatalogList_ListModel.a_product}.
   */

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ListModel_a_filter_a_schema
   * @property {Wl_Catalog_CatalogList_ListModel_a_filter_a_schema_a_item} a_item The items of the category to show. Each element has the following keys:
   * @property {boolean} is_all `true` to show all the items of the category, `false` to show only the items of `a_item`.
   * @property {string} k_shop_category Key of the category. `0` for the items without a category.
   */

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ListModel_a_filter_a_settings
   * @property {string[]} a_coupon Keys of the gift cards to show, as `k_id` of {@link Wl_Catalog_CatalogList_ListModel.a_product}.
   * @property {string[]} a_event Keys of the events to show, as `k_id` of {@link Wl_Catalog_CatalogList_ListModel.a_product}.
   * @property {string[]} a_product Keys of the products to show, as `k_id` of {@link Wl_Catalog_CatalogList_ListModel.a_product}.
   * @property {string[]} a_promotion Keys of the purchase options to show, as `k_id` of {@link Wl_Catalog_CatalogList_ListModel.a_product}.
   */

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ListModel_a_filter
   * @property {number[]} a_sale_id Sale types to show. One of {@link RsSaleSid} constants each. Empty to show all the types. The catalog is considered empty when this filter leaves nothing, see {@link Wl_Catalog_CatalogList_ListModel.is_catalog_empty}.
   * @property {Wl_Catalog_CatalogList_ListModel_a_filter_a_schema} a_schema The categories and the items a widget is configured to show. Empty to show everything. An item is shown when one of its categories is listed here with `is_all` set, or with the item in its `a_item`. The sidebar of {@link Wl_Catalog_CatalogList_ListModel.a_shop_category} lists only these categories. Each element has the following keys:
   * @property {Wl_Catalog_CatalogList_ListModel_a_filter_a_settings} a_settings The items a widget is configured to show, by their types. When at least one of the keys below is set, an item is shown only when the key of its type is set and holds its `k_id`; a type whose key is not set or is empty is not shown at all. The keys:
   * @property {string[]} a_shop_category Categories to show the items of. `0` for the items without a category. Empty to not filter by category. Not used when `is_category_default` is `true`.
   * @property {?number} id_order Sort order. One of {@link Core_Sid_SortOrderSid} constants. Empty for the default order of the sort: ascending for the name and the price, descending for the date. Not used by the custom sort.
   * @property {number} id_sort Sort of the items. One of {@link Wl_Shop_Category_ShopCategorySortSid} constants. Empty for the custom sort, the order of the catalog. Equal items are ordered by `k_id`, then by `id_sale`.
   * @property {boolean} is_application_hide `true` to leave out the items hidden from the application, `false` to show them.
   * @property {boolean} is_category_default `true` to show only the items of the default categories of the sidebar, or all the items when the sidebar has no default category. `false` to use `a_shop_category`.
   * @property {string} k_location Location to show the items of. Empty to show the items of all the locations.
   * @property {string} text_search Text to search in the titles of the items. Empty to not search.
   */

  /**
   * Filter and sort of the paged mode. Read only when {@link Wl_Catalog_CatalogList_ListModel.i_last} is set or {@link Wl_Catalog_CatalogList_ListModel.a_item}
   *   is not empty. Every key is optional:
   *
   * @get get
   * @type {Wl_Catalog_CatalogList_ListModel_a_filter}
   */
  this.a_filter = undefined;

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ListModel_a_item
   * @property {?number} id_sale Sale type of the item. One of {@link RsSaleSid} constants. Not needed for a product option.
   * @property {boolean} is_promotion `true` to find a purchase option by `k_id` whatever its sale type is, `false` otherwise.
   * @property {string} k_id Key of the item, as `k_id` of {@link Wl_Catalog_CatalogList_ListModel.a_product}. Not needed for a product option.
   * @property {string} k_shop_product_option Key of a product option. When set, the product of this option is found, and the other keys are not used.
   */

  /**
   * Items to look up by their keys. When not empty, {@link Wl_Catalog_CatalogList_ListModel.a_product} holds the found items in the order
   *   of this list, without paging, search, category filter and sort. Items that are not found are left out.
   *
   *   Each element has the following keys:
   *
   * @get get
   * @type {Wl_Catalog_CatalogList_ListModel_a_item[]}
   */
  this.a_item = undefined;

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ListModel_a_product_a_ticket_inventory
   * @property {number} i_capacity Total number of tickets that can be sold for the event.
   * @property {number} i_order_limit Maximum number of tickets that can be ordered in one purchase. `0` if there is no limit.
   * @property {number} i_remain Number of tickets still available to sell. `0` if the event is sold out.
   */

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ListModel_a_product_a_tickets
   * @property {string} k_ticket_option Globally unique identifier of the ticket option.
   * @property {string} m_price One ticket price.
   * @property {string} text_title Ticket option name.
   */

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ListModel_a_product
   * @property {string[]} a_location The list of location keys where the sale item is available.
   * @property {string[]} a_shop_category Shop category keys the item belongs to.
   * @property {Wl_Catalog_CatalogList_ListModel_a_product_a_ticket_inventory} a_ticket_inventory How many tickets can be sold for the event and how many of those are still available. Empty if the item is not a ticketed event.  Returned for items with `id_sale` equal to {@link RsSaleSid} only.
   * @property {Wl_Catalog_CatalogList_ListModel_a_product_a_tickets} a_tickets List of ticket options available for booking the event. Empty if the item is not a ticketed event.  Each element contains the following keys:
   * @property {string} dtu_create UTC creation date of the item in MySQL format.
   * @property {string} f_price The item price.
   * @property {boolean} hide_application `true` if the item should be hidden from the application, `false` otherwise.
   * @property {?number} id_sale The sale category ID. One of the {@link RsSaleSid} constants.
   * @property {boolean} is_direct `true` if the item was accessed via a direct purchase link, `false` otherwise.
   * @property {boolean} is_introductory `true` if the item is an introductory offer, `false` otherwise.
   * @property {boolean} is_ticket `true` if the item is a ticketed event, `false` otherwise. Returned for items with `id_sale` equal to {@link RsSaleSid} only.
   * @property {boolean} is_ticket_guest_allowed `true` if a client can buy tickets without creating an account. `false` if the item is not a ticketed event. Returned for items with `id_sale` equal to {@link RsSaleSid} only.
   * @property {string} k_id The item key.
   * @property {string} k_shop_category The primary shop category key for this item entry.
   * @property {string} s_key The unique string key identifying the item (product key combined with its DB SID).
   * @property {string} s_title The item title.
   * @property {string} url_catalog Direct URL to the catalog view page for this item.
   */

  /**
   * The list of all sale items (de-duplicated). In the paged mode, only the items of the page or the found
   *   items, see {@link Wl_Catalog_CatalogList_ListModel.i_last} and {@link Wl_Catalog_CatalogList_ListModel.a_item}. Each element has the following keys:
   *
   * @get result
   * @type {Wl_Catalog_CatalogList_ListModel_a_product[]}
   */
  this.a_product = undefined;

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ListModel_a_product_duplicate_a_ticket_inventory
   * @property {number} i_capacity Total number of tickets that can be sold for the event.
   * @property {number} i_order_limit Maximum number of tickets that can be ordered in one purchase. `0` if there is no limit.
   * @property {number} i_remain Number of tickets still available to sell. `0` if the event is sold out.
   */

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ListModel_a_product_duplicate_a_tickets
   * @property {string} k_ticket_option Globally unique identifier of the ticket option.
   * @property {string} m_price One ticket price.
   * @property {string} text_title Ticket option name.
   */

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ListModel_a_product_duplicate
   * @property {string[]} a_location The list of location keys where the sale item is available.
   * @property {string[]} a_shop_category Shop category keys the item belongs to.
   * @property {Wl_Catalog_CatalogList_ListModel_a_product_duplicate_a_ticket_inventory} a_ticket_inventory How many tickets can be sold for the event and how many of those are still available. Empty if the item is not a ticketed event.  Returned for items with `id_sale` equal to {@link RsSaleSid} only.
   * @property {Wl_Catalog_CatalogList_ListModel_a_product_duplicate_a_tickets} a_tickets List of ticket options available for booking the event. Empty if the item is not a ticketed event.  Each element contains the following keys:
   * @property {string} dtu_create UTC creation date of the item in MySQL format.
   * @property {string} f_price The item price.
   * @property {boolean} hide_application `true` if the item should be hidden from the application, `false` otherwise.
   * @property {?number} id_sale The sale category ID. One of the {@link RsSaleSid} constants.
   * @property {boolean} is_direct `true` if the item was accessed via a direct purchase link, `false` otherwise.
   * @property {boolean} is_introductory `true` if the item is an introductory offer, `false` otherwise.
   * @property {boolean} is_ticket `true` if the item is a ticketed event, `false` otherwise. Returned for items with `id_sale` equal to {@link RsSaleSid} only.
   * @property {boolean} is_ticket_guest_allowed `true` if a client can buy tickets without creating an account. `false` if the item is not a ticketed event. Returned for items with `id_sale` equal to {@link RsSaleSid} only.
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
   * Empty in the paged mode, see {@link Wl_Catalog_CatalogList_ListModel.i_last} and {@link Wl_Catalog_CatalogList_ListModel.a_item}.
   *
   * @get result
   * @type {Wl_Catalog_CatalogList_ListModel_a_product_duplicate}
   */
  this.a_product_duplicate = undefined;

  /**
   * @typedef {{}} Wl_Catalog_CatalogList_ListModel_a_shop_category
   * @property {number} i_order Order of the category in the sidebar.
   * @property {boolean} is_default `true` if the category is selected by default, `false` otherwise.
   * @property {string} k_shop_category Key of the category. `0` for the system category of the items without a category.
   * @property {string} text_title Title of the category.
   */

  /**
   * Categories of the sidebar of the paged mode, sorted by their order. Only the categories that have items
   *   after the filters `a_sale_id`, `a_schema`, `a_settings`, `is_application_hide` and `k_location` of
   *   {@link Wl_Catalog_CatalogList_ListModel.a_filter}, with the category `0` when there are items without a category. Returned only
   *   when {@link Wl_Catalog_CatalogList_ListModel.i_last} is `0`, empty otherwise.
   *
   *   Each element has the following keys:
   *
   * @get result
   * @type {Wl_Catalog_CatalogList_ListModel_a_shop_category[]}
   */
  this.a_shop_category = undefined;

  /**
   * Offset of the page: the number of the items shown before it. `0` for the first page.
   *
   * `null` to return all the items at once in {@link Wl_Catalog_CatalogList_ListModel.a_product} and {@link Wl_Catalog_CatalogList_ListModel.a_product_duplicate},
   *   unless {@link Wl_Catalog_CatalogList_ListModel.a_item} is not empty. When set, {@link Wl_Catalog_CatalogList_ListModel.a_product} holds one page of the
   *   items, filtered and sorted by {@link Wl_Catalog_CatalogList_ListModel.a_filter}.
   *
   * @get get
   * @type {?number}
   */
  this.i_last = null;

  /**
   * Number of the items in a page of the paged mode. See {@link Wl_Catalog_CatalogList_ListModel.i_last}.
   *
   * @get get
   * @type {number}
   */
  this.i_limit = 20;

  /**
   * Whether the catalog of the paged mode has no items at all.
   *
   * `true` if no item is left after the filters `a_sale_id`, `a_schema`, `a_settings` and `is_application_hide`
   *   of {@link Wl_Catalog_CatalogList_ListModel.a_filter}, `false` otherwise. The category, the search and `k_location` of the filter
   *   do not change it. Always `false` when the paged mode is not used.
   *
   * @get result
   * @type {boolean}
   */
  this.is_catalog_empty = undefined;

  /**
   * `true` to consider the requirement to have a credit card for booking
   * (this requirement can be set in business settings)
   * `false` to ignore it.
   *
   * @get get
   * @type {boolean}
   */
  this.is_credit_card_check = true;

  /**
   * Whether there are more items after the page of the paged mode.
   *
   * `true` if more items follow the page, `false` if the page is the last one, if the items were looked up by
   *   {@link Wl_Catalog_CatalogList_ListModel.a_item} or if the paged mode is not used.
   *
   * @get result
   * @type {boolean}
   */
  this.is_load_more = undefined;

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
  return {"a_field":{"a_direct_link":{"get":{"get":true}},"a_filter":{"get":{"get":true}},"a_item":{"get":{"get":true}},"a_product":{"get":{"result":true}},"a_product_duplicate":{"get":{"result":true}},"a_shop_category":{"get":{"result":true}},"i_last":{"get":{"get":true}},"i_limit":{"get":{"get":true}},"is_catalog_empty":{"get":{"result":true}},"is_credit_card_check":{"get":{"get":true}},"is_load_more":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_location":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
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
 * In the paged mode, when `i_last` is set or `a_item` is not empty, the items are read from a list cached for
 * 10 minutes, filtered and sorted by `a_filter`, and one page of them is returned with the categories of the
 * sidebar; or the items of `a_item` are looked up.
 *
 * @function
 * @name Wl_Catalog_CatalogList_ListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
