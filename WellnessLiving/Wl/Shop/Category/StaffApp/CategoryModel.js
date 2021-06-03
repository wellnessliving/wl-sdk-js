/**
 * Categories of online store.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Shop_Category_StaffApp_CategoryModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Shop_Category_StaffApp_CategoryModel_a_shop_category
   * @property {number} i_order Shop category order.
   * @property {string} k_shop_category ID in {@link RsShopCategorySql} table.
   * @property {string} text_description Category description.
   * @property {string} text_title Category title.
   */

  /**
   * Categories in online store for business {@link \Wl\Shop\Category\CategoryApi::$k_business}, with next keys:
   * <dl>
   *   <dt>
   *     int <var>i_order</var>
   *   </dt>
   *   <dd>
   *     Shop category order.
   *   </dd>
   *   <dt>
   *     string <var>k_shop_category</var>
   *   </dt>
   *   <dd>
   *     ID in {@link RsShopCategorySql} table.
   *   </dd>
   *   <dt>
   *     string <var>text_description</var>
   *   </dt>
   *   <dd>
   *     Category description.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     Category title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Shop_Category_StaffApp_CategoryModel_a_shop_category}
   */
  this.a_shop_category = undefined;

  /**
   * Key of business to get categories for. Primary key in {@link RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Shop_Category_StaffApp_CategoryModel);

/**
 * @inheritDoc
 */
Wl_Shop_Category_StaffApp_CategoryModel.prototype.config=function()
{
  return {"a_field": {"a_shop_category": {"get": {"result": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Shop_Category_StaffApp_CategoryModel.instanceGet
 * @param {string} k_business Key of business to get categories for. Primary key in {@link RsBusinessSql} table.
 * @returns {Wl_Shop_Category_StaffApp_CategoryModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */