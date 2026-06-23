/**
 * Returns the list of shop categories available for the given business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Shop_Category_CategoryModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Shop_Category_CategoryModel_a_shop_category
   * @property {number} i_order The display order for the category.
   * @property {boolean} is_default Whether category is selected as default.
   * @property {string} k_shop_category The shop category key.
   * @property {string} text_description The category description.
   * @property {string} text_title The category name.
   */

  /**
   * An array containing information about all store categories.
   * Each array element is an array containing the following fields:
   *
   * @get result
   * @type {Wl_Shop_Category_CategoryModel_a_shop_category}
   */
  this.a_shop_category = undefined;

  /**
   * The key of the business to get shop categories for.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the created shop category.
   *
   * @post result
   * @type {string}
   */
  this.k_shop_category = undefined;

  /**
   * Title of new category.
   *
   * @post post
   * @type {string}
   */
  this.text_title = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Shop_Category_CategoryModel);

/**
 * @inheritDoc
 */
Wl_Shop_Category_CategoryModel.prototype.config=function()
{
  return {"a_field":{"a_shop_category":{"get":{"result":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_shop_category":{"post":{"result":true}},"text_title":{"post":{"post":true}}}};
};

/**
 * @function
 * @name Wl_Shop_Category_CategoryModel.instanceGet
 * @param {string} k_business The key of the business to get shop categories for.
 * @returns {Wl_Shop_Category_CategoryModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns the list of shop categories available for the given business.
 *
 * Returns all store categories that the current user is allowed to access, including their
 * titles, descriptions, and display order. Guest and client users see only public categories;
 * staff and admin users may see additional categories based on their access level.
 *
 * @function
 * @name Wl_Shop_Category_CategoryModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Creates new shop category.
 *
 * Creates a new product category in the business store with the given title. Requires
 * backend access with the appropriate store management privilege.
 *
 * @function
 * @name Wl_Shop_Category_CategoryModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
