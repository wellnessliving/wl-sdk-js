/**
 * Loads the list of online store categories for the business.
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
   * @property {string} k_shop_category ID in  table.
   * @property {string} text_description Category description.
   * @property {string} text_title Category title.
   */

  /**
   * Categories in online store for business {@link Wl_Shop_Category_CategoryModel.k_business}, with next keys:
   *
   * @get result
   * @type {Wl_Shop_Category_StaffApp_CategoryModel_a_shop_category}
   */
  this.a_shop_category = undefined;

  /**
   * Key of business to get categories for.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Shop_Category_StaffApp_CategoryModel);

/**
 * @inheritDoc
 */
Wl_Shop_Category_StaffApp_CategoryModel.prototype.config=function()
{
  return {"a_field":{"a_shop_category":{"get":{"result":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Shop_Category_StaffApp_CategoryModel.instanceGet
 * @param {string} k_business Key of business to get categories for.
 * @returns {Wl_Shop_Category_StaffApp_CategoryModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Loads the list of online store categories for the business.
 *
 * Returns the active shop categories configured for the business, together with their order,
 * title and description. The result is left unset when the business has no shop categories.
 *
 * @function
 * @name Wl_Shop_Category_StaffApp_CategoryModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
