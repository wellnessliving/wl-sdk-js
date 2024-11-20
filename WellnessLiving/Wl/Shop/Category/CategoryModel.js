/**
 * An endpoint that returns a list of all categories in a business’s store.
 *
 * This model is generated automatically based on API.
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
   * @property {boolean} is_default Whether category is selected as default.
   * @property {number} i_order The display order for the category.
   * @property {string} k_shop_category The shop category key.
   * @property {string} text_description The category description.
   * @property {string} text_title The category name.
   */

  /**
   * An array containing information about all store categories.
   * Each array element is an array containing the following fields:
   * <dl>
   *   <dt>
   *     bool <var>is_default</var>
   *   </dt>
   *   <dd>
   *     Whether category is selected as default.
   *   </dd>
   *   <dt>
   *     int <var>i_order</var>
   *   </dt>
   *   <dd>
   *     The display order for the category.
   *   </dd>
   *   <dt>
   *     string <var>k_shop_category</var>
   *   </dt>
   *   <dd>
   *     The shop category key.
   *   </dd>
   *   <dt>
   *     string <var>text_description</var>
   *   </dt>
   *   <dd>
   *     The category description.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     The category name.
   *   </dd>
   * </dl>
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
  this.k_business = "0";

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
  return {"a_field": {"a_shop_category": {"get": {"result": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_shop_category": {"post": {"result": true}},"text_title": {"post": {"post": true}}}};
};

/**
 * @function
 * @name Wl_Shop_Category_CategoryModel.instanceGet
 * @param {string} k_business The key of the business to get shop categories for.
 * @returns {Wl_Shop_Category_CategoryModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */