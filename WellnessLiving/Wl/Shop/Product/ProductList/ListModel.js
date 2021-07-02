/**
 * Product API.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Shop_Product_ProductList_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,is_franchise";

  /**
   * @typedef {{}} Wl_Shop_Product_ProductList_ListModel_a_product
   * @property {string} k_shop_product Product key, primary key in {@link \RsShopProductSql}.
   * @property {string} text_title Title of product.
   */

  /**
   * List of products.
   * <dl>
   *   <dt>
   *     string <var>k_shop_product</var>
   *   </dt>
   *   <dd>
   *     Product key, primary key in {@link \RsShopProductSql}.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     Title of product.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Shop_Product_ProductList_ListModel_a_product}
   */
  this.a_product = undefined;

  /**
   * Class table ID.
   *
   * @get result
   * @type {number}
   */
  this.id_table = undefined;

  /**
   * Whether to return franchisee-created products (if business is franchisor).
   * <tt>true</tt> to include franchisee-created products.
   *
   * @get get
   * @type {boolean}
   */
  this.is_franchise = false;

  /**
   * Business key.
   * Primary key in the {@link \RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Shop_Product_ProductList_ListModel);

/**
 * @inheritDoc
 */
Wl_Shop_Product_ProductList_ListModel.prototype.config=function()
{
  return {"a_field": {"a_product": {"get": {"result": true}},"id_table": {"get": {"result": true}},"is_franchise": {"get": {"get": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Shop_Product_ProductList_ListModel.instanceGet
 * @param {string} k_business Business key. Primary key in the {@link \RsBusinessSql} table.
 * @param {boolean} is_franchise Whether to return franchisee-created products (if business is franchisor). <tt>true</tt> to include franchisee-created products.
 * @returns {Wl_Shop_Product_ProductList_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */