/**
 * Gets the page of the list of Purchase Options of the business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Promotion_Editor_List_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * The optional columns whose data is wanted. Empty to read the default columns only.
   *
   * Each item is one of the {@link Wl_Promotion_Editor_List_ListColumnEnum} cases. The data of a column that is not asked is not read, and its
   * fields are not in the rows.
   *
   * @get get
   * @type {number[]}
   */
  this.a_column = undefined;

  /**
   * @typedef {{}} Wl_Promotion_Editor_List_ListModel_a_filter_location
   * @property {string} k_location The key of the location.
   * @property {string} text_title The title of the location.
   */

  /**
   * The locations of the business that the list can be filtered by, in alphabetical order.
   *
   * It does not depend on the filters of the request, so a page that shows no Purchase Option still has the options of
   * its filters. The locations that were removed are not in it.
   *
   * @get result
   * @type {Wl_Promotion_Editor_List_ListModel_a_filter_location[]}
   */
  this.a_filter_location = undefined;

  /**
   * @typedef {{}} Wl_Promotion_Editor_List_ListModel_a_filter_program_category
   * @property {number} id_program_category The service category. One of the {@link RsProgramCategorySid} constants.
   * @property {string} text_title The title of the service category.
   */

  /**
   * The service categories that the list can be filtered by: the categories that are enabled for the business.
   *
   * @get result
   * @type {Wl_Promotion_Editor_List_ListModel_a_filter_program_category[]}
   */
  this.a_filter_program_category = undefined;

  /**
   * @typedef {{}} Wl_Promotion_Editor_List_ListModel_a_filter_shop_category
   * @property {string} k_shop_category The key of the store category.
   * @property {string} text_title The title of the store category.
   */

  /**
   * The store categories that the list can be filtered by, in the order of the store. The system category of the
   * Purchase Options that are in no store category is not in it, see {@link Wl_Promotion_Editor_List_ListModel.is_shop_category_none}.
   *
   * @get result
   * @type {Wl_Promotion_Editor_List_ListModel_a_filter_shop_category[]}
   */
  this.a_filter_shop_category = undefined;

  /**
   * The service categories to show. `null` to show every category.
   *
   * Each item is one of the {@link RsProgramCategorySid} constants.
   *
   * @get get
   * @type {?number[]}
   */
  this.a_program_category = null;

  /**
   * The types of the Purchase Options to show. `null` to show every type.
   *
   * Each item is one of the {@link RsProgramTypeSid} constants. A session pass is the three types `LIMIT`, `PASS` and
   * `DURATION` together.
   *
   * @get get
   * @type {?number[]}
   */
  this.a_program_type = null;

  /**
   * @typedef {{}} Wl_Promotion_Editor_List_ListModel_a_promotion
   * @property {string[]} a_client_group With the column {@link Wl_Promotion_Editor_List_ListColumnEnum}. The titles of the client groups that the Purchase Option is only for. Empty if it is not restricted to groups.
   * @property {string[]} a_client_type With the column {@link Wl_Promotion_Editor_List_ListColumnEnum}. The titles of the client types that the Purchase Option is only for. Empty if it is not restricted to types.
   * @property {string[]} a_location With the column {@link Wl_Promotion_Editor_List_ListColumnEnum}. The titles of the locations where the Purchase Option is sold, in alphabetical order. Empty if it is sold in every location. A package is sold where its components are.
   * @property {string[]} a_shop_category With the column {@link Wl_Promotion_Editor_List_ListColumnEnum}. The titles of the store categories of the Purchase Option, in alphabetical order. Empty if it is in none.
   * @property {?string} dl_terminate With the column {@link Wl_Promotion_Editor_List_ListColumnEnum}. The date when the Purchase Option is planned to be switched off. `null` if none is planned.
   * @property {?string} dtl_publish With the column {@link Wl_Promotion_Editor_List_ListColumnEnum}. The date and time when the Purchase Option is published, local to the business. `null` if it is published at once.
   * @property {?string} dtl_unpublish With the column {@link Wl_Promotion_Editor_List_ListColumnEnum}. The date and time when the Purchase Option is unpublished, local to the business. `null` if it is published until it is removed.
   * @property {number} i_client The number of the clients who use the Purchase Option. A client counts once however many purchases they have, the purchases that are finished or cancelled do not count, and the purchases of the copies of the Purchase Option made for one client count under the Purchase Option itself.
   * @property {?number} i_quantity_limit With the column {@link Wl_Promotion_Editor_List_ListColumnEnum}. How many times one client can buy the Purchase Option. `null` if there is no limit.
   * @property {number} id_program The program of the Purchase Option. One of the {@link RsProgramSid} constants.
   * @property {number} id_program_type The type of the Purchase Option. One of the {@link RsProgramTypeSid} constants.
   * @property {boolean} is_active Whether the Purchase Option is active now: it is switched on and has not expired.
   * @property {boolean} is_introductory Whether the Purchase Option is an introductory offer.
   * @property {boolean} is_location_all With the column {@link Wl_Promotion_Editor_List_ListColumnEnum}. Whether the Purchase Option is sold in every location of the business.
   * @property {boolean} is_online_sell Whether clients can buy the Purchase Option online. `false` if only the staff can sell it.
   * @property {boolean} is_renew With the column {@link Wl_Promotion_Editor_List_ListColumnEnum}. Whether the Purchase Option renews itself.
   * @property {string} k_promotion The key of the Purchase Option.
   * @property {string} text_create_by With the column {@link Wl_Promotion_Editor_List_ListColumnEnum}. Who created the Purchase Option: the word for the franchisor, for an admin, or the public name of a staff member of the business. Empty for anybody else.
   * @property {string} text_create_date With the column {@link Wl_Promotion_Editor_List_ListColumnEnum}. When the Purchase Option was created, in the time zone and the format of the business.
   * @property {string} text_edit_by With the column {@link Wl_Promotion_Editor_List_ListColumnEnum}. Who changed the Purchase Option last, named as the creator, or the words for an option that nobody changed.
   * @property {string} text_edit_date With the column {@link Wl_Promotion_Editor_List_ListColumnEnum}. When the Purchase Option was changed last, or the words for an option that nobody changed.
   * @property {string} text_length How long the Purchase Option lasts: the number of periods, the last date or the word for no end. Empty if it has no length, as a guest pass.
   * @property {string} text_price The price in the currency of the Purchase Option, or the word for a free one.
   * @property {string} text_price_period The period that the price of a membership is paid for. Empty for the other types.
   * @property {string} text_program_type The title of the type of the Purchase Option.
   * @property {string} text_service_category The titles of the service categories of the Purchase Option, those of its components for a package.
   * @property {string} text_title The title of the Purchase Option in the language of the business.
   * @property {string} text_visit The visits that the Purchase Option includes, with the attending restriction, or the word for no limit.
   * @property {string} url_edit The link to the page where the Purchase Option is edited.
   * @property {string} url_image The link to the small image of the Purchase Option. Empty if it has no image.
   */

  /**
   * The Purchase Options of the requested page, in the requested order.
   * The fields marked "with a column" are in a row only when the column is asked in {@link Wl_Promotion_Editor_List_ListModel.a_column}.
   *
   * @get result
   * @type {Wl_Promotion_Editor_List_ListModel_a_promotion[]}
   */
  this.a_promotion = undefined;

  /**
   * The keys of the store categories to show. `null` to show every store category.
   *
   * Each item is the key of a store category of the business. The Purchase Options that are in no store category are
   * added by {@link Wl_Promotion_Editor_List_ListModel.is_shop_category_none}.
   *
   * @get get
   * @type {?string[]}
   */
  this.a_shop_category = null;

  /**
   * The number of the page to read, the first page is 1.
   *
   * @get get
   * @type {number}
   */
  this.i_page = 1;

  /**
   * The number of the Purchase Options on a page.
   *
   * @get get
   * @type {number}
   */
  this.i_page_size = 25;

  /**
   * The number of the Purchase Options in the whole list, not only on the requested page.
   *
   * @get result
   * @type {number}
   */
  this.i_total = undefined;

  /**
   * The sort of the list. One of the {@link Wl_Promotion_Editor_List_ListSortEnum} cases.
   *
   * @get get
   * @see Wl_Promotion_Editor_List_ListSortEnum
   * @type {number}
   */
  this.id_sort = 1;

  /**
   * The status of the Purchase Options to show. One of the {@link Wl_Promotion_Editor_List_ListStatusEnum} cases.
   *
   * @get get
   * @see Wl_Promotion_Editor_List_ListStatusEnum
   * @type {number}
   */
  this.id_status = 3;

  /**
   * Whether the Purchase Options that are in no store category are shown in addition to the requested store
   * categories. It is the only filter by the store categories when
   * {@link Wl_Promotion_Editor_List_ListModel.a_shop_category} is `null`.
   *
   * @get get
   * @type {boolean}
   */
  this.is_shop_category_none = false;

  /**
   * Whether the list is sorted from the last to the first.
   *
   * @get get
   * @type {boolean}
   */
  this.is_sort_desc = false;

  /**
   * The key of the business whose Purchase Options are listed.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The key of the location whose Purchase Options are shown. `null` to show the Purchase Options of every location.
   *
   * The Purchase Options that are not limited to any location are always shown.
   *
   * @get get
   * @type {?string}
   */
  this.k_location = null;

  /**
   * The words to search in the titles of the Purchase Options, and the beginning of their barcodes. `null` to show
   * every Purchase Option.
   *
   * @get get
   * @type {?string}
   */
  this.text_search = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Promotion_Editor_List_ListModel);

/**
 * @inheritDoc
 */
Wl_Promotion_Editor_List_ListModel.prototype.config=function()
{
  return {"a_field":{"a_column":{"get":{"get":true}},"a_filter_location":{"get":{"result":true}},"a_filter_program_category":{"get":{"result":true}},"a_filter_shop_category":{"get":{"result":true}},"a_program_category":{"get":{"get":true}},"a_program_type":{"get":{"get":true}},"a_promotion":{"get":{"result":true}},"a_shop_category":{"get":{"get":true}},"i_page":{"get":{"get":true}},"i_page_size":{"get":{"get":true}},"i_total":{"get":{"result":true}},"id_sort":{"get":{"get":true}},"id_status":{"get":{"get":true}},"is_shop_category_none":{"get":{"get":true}},"is_sort_desc":{"get":{"get":true}},"k_business":{"get":{"get":true}},"k_location":{"get":{"get":true}},"text_search":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Promotion_Editor_List_ListModel.instanceGet
 * @param {string} k_business The key of the business whose Purchase Options are listed.
 * @returns {Wl_Promotion_Editor_List_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets the page of the list of Purchase Options of the business.
 *
 * The list holds the Purchase Options of the business that were not removed, filtered by the search words, the
 * status, the type, the service category, the store category and the location, in the requested order. The daily
 * deals, the enrollments, the programs of the services that the business has switched off and the programs that
 * the user has no right to see are never listed.
 *
 * @function
 * @name Wl_Promotion_Editor_List_ListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
