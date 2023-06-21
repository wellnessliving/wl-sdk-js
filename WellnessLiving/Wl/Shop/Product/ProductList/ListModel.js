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
  this._s_key = "k_business,is_franchise,is_frontend";

  /**
   * @typedef {{}} Wl_Shop_Product_ProductList_ListModel_a_product_a_option
   * @property {string} k_shop_product_option Shop product option key, primary key in {@link \RsShopProductOptionSql}.
   * @property {string} text_title Title of the product option.
   */
  /**
   * @typedef {{}} Wl_Shop_Product_ProductList_ListModel_a_product
   * @property {Wl_Shop_Product_ProductList_ListModel_a_product_a_option} a_option <dl>
   *    <dt>string <tt>k_shop_product_option</tt></dt>
   *    <dd>Shop product option key, primary key in {@link \RsShopProductOptionSql}.</dd>
   *    <dt>string <tt>text_title</tt></dt>
   *    <dd>Title of the product option.</dd>
   * </dl>
   * @property {string} k_shop_product Product key, primary key in {@link \RsShopProductSql}.
   * @property {string} text_title Title of product.
   */

  /**
   * List of products.
   * <dl>
   *   <dt>array <var>a_option</var></dt>
   *   <dd>
   *     <dl>
   *        <dt>string <var>k_shop_product_option</var></dt>
   *        <dd>Shop product option key, primary key in {@link \RsShopProductOptionSql}.</dd>
   *        <dt>string <var>text_title</var></dt>
   *        <dd>Title of the product option.</dd>
   *     </dl>
   *   </dd>
   *   <dt>string <var>k_shop_product</var></dt>
   *   <dd>Product key, primary key in {@link \RsShopProductSql}.</dd>
   *   <dt>string <var>text_title</var></dt>
   *   <dd>Title of product.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Shop_Product_ProductList_ListModel_a_product}
   */
  this.a_product = [];

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
   * `true` to get only gift cards available for current user; `false` to get all gift cards.
   *
   * @get get
   * @type {boolean}
   */
  this.is_frontend = false;

  /**
   * A flag to include disabled items in the query result
   *
   * @get get
   * @type {boolean}
   */
  this.is_inactive_include = false;

  /**
   * Business key.
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
  return {"a_field": {"a_product": {"get": {"result": true}},"id_table": {"get": {"result": true}},"is_franchise": {"get": {"get": true}},"is_frontend": {"get": {"get": true}},"is_inactive_include": {"get": {"get": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Shop_Product_ProductList_ListModel.instanceGet
 * @param {string} k_business Business key.
 * @param {boolean} is_franchise Whether to return franchisee-created products (if business is franchisor). <tt>true</tt> to include franchisee-created products.
 * @param {boolean} is_frontend `true` to get only gift cards available for current user; `false` to get all gift cards.
 * @returns {Wl_Shop_Product_ProductList_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */