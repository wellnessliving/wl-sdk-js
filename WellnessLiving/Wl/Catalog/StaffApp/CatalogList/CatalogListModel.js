/**
 * Products list for online store.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Catalog_StaffApp_CatalogList_CatalogListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_location,k_visit";

  /**
   * @typedef {{}} Wl_Catalog_StaffApp_CatalogList_CatalogListModel_a_shop_product
   * @property {{}} a_location List of locations, where current sale item is available.
   * @property {string[]} a_login_type List of login types available to purchase sale item.
   * @property {string[]} a_shop_category Online store categories. Primary keys in {@link RsShopCategorySql} table.
   * @property {number} [id_program] Program ID. One of {@link \RsProgramSid} constants. Set for promotions.
   * @property {number} id_restriction Restriction ID. One of {@link \Wl\Shop\Product\PurchaseRestrictionSid} constants.
   * @property {number} id_sale Sale category ID. One of {@link \RsSaleSid}.
   * @property {boolean} is_online_sell Whether sale item can be purchased by client.
   * @property {boolean} is_visit <tt>true</tt> if this purchase option is suitable to pay for visit {@link \Wl\Catalog\StaffApp\CatalogList\CatalogListApi::$k_visit}; <tt>false</tt> otherwise.
   * If {@link \Wl\Catalog\StaffApp\CatalogList\CatalogListApi::$k_visit} is empty, always false.
   * @property {string} k_id Sale item ID.
   * @property {string} text_title Title of sale item.
   */

  /**
   * Products list for online store:
   * <dl>
   *   <dt>
   *     array <var>a_location</var>
   *   </dt>
   *   <dd>
   *     List of locations, where current sale item is available.
   *   </dd>
   *   <dt>
   *     string[] <var>a_login_type</var>
   *   </dt>
   *   <dd>
   *     List of login types available to purchase sale item.
   *   </dd>
   *   <dt>
   *     string[] <var>a_shop_category</var>
   *   </dt>
   *   <dd>
   *     Online store categories. Primary keys in {@link RsShopCategorySql} table.
   *   </dd>
   *   <dt>
   *     int <var>[id_program]</var>
   *   </dt>
   *   <dd>
   *     Program ID. One of {@link \RsProgramSid} constants. Set for promotions.
   *   </dd>
   *   <dt>
   *     int <var>id_restriction</var>
   *   </dt>
   *   <dd>
   *     Restriction ID. One of {@link \Wl\Shop\Product\PurchaseRestrictionSid} constants.
   *   </dd>
   *   <dt>
   *     int <var>id_sale</var>
   *   </dt>
   *   <dd>
   *     Sale category ID. One of {@link \RsSaleSid}.
   *   </dd>
   *   <dt>
   *     bool <var>is_online_sell</var>
   *   </dt>
   *   <dd>
   *     Whether sale item can be purchased by client.
   *   </dd>
   *   <dt>
   *     bool <var>is_visit</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if this purchase option is suitable to pay for visit {@link \Wl\Catalog\StaffApp\CatalogList\CatalogListApi::$k_visit}; <tt>false</tt> otherwise.
   *     If {@link \Wl\Catalog\StaffApp\CatalogList\CatalogListApi::$k_visit} is empty, always false.
   *   </dd>
   *   <dt>
   *     string <var>k_id</var>
   *   </dt>
   *   <dd>
   *     Sale item ID.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     Title of sale item.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Catalog_StaffApp_CatalogList_CatalogListModel_a_shop_product}
   */
  this.a_shop_product = undefined;

  /**
   * Does the employee have access to the Client Add page or not.
   *
   * @get result
   * @type {boolean}
   */
  this.can_add = undefined;

  /**
   * ID of business to get categories for. Primary key in {@link RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * ID of location.
   * Can affect the list of displayed products.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * ID of a visit to show purchase options for.
   *
   * @get get
   * @type {string}
   */
  this.k_visit = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_StaffApp_CatalogList_CatalogListModel);

/**
 * @inheritDoc
 */
Wl_Catalog_StaffApp_CatalogList_CatalogListModel.prototype.config=function()
{
  return {"a_field": {"a_shop_product": {"get": {"result": true}},"can_add": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_location": {"get": {"get": true}},"k_visit": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Catalog_StaffApp_CatalogList_CatalogListModel.instanceGet
 * @param {string} k_business ID of business to get categories for. Primary key in {@link RsBusinessSql} table.
 * @param {string} k_location ID of location. Can affect the list of displayed products.
 * @param {string} k_visit ID of a visit to show purchase options for.
 * @returns {Wl_Catalog_StaffApp_CatalogList_CatalogListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */