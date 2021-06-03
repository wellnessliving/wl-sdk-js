/**
 * Discount code check API.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Catalog_Cart_DiscountCodeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Catalog_Cart_DiscountCodeModel_a_discount_code
   * @property {string} f_amount Fixed amount of discount. For 1 unit of purchase item.
   * @property {number} f_percent Discount size in percents.
   * @property {number} i_limit Maximum count of usage. Zero means unlimited usage.
   * @property {string} k_discount_code Discount code key. See {@link \Wl\Discount\Code\Sql}.
   * @property {string} s_discount_code Discount code value.
   */

  /**
   * <dl>
   *   <dt>
   *     string <var>f_amount</var>
   *   </dt>
   *   <dd>
   *     Fixed amount of discount. For 1 unit of purchase item.
   *   </dd>
   *   <dt>
   *     float <var>f_percent</var>
   *   </dt>
   *   <dd>
   *     Discount size in percents.
   *   </dd>
   *   <dt>
   *     int <var>i_limit</var>
   *   </dt>
   *   <dd>
   *     Maximum count of usage. Zero means unlimited usage.
   *   </dd>
   *   <dt>
   *     string <var>k_discount_code</var>
   *   </dt>
   *   <dd>
   *     Discount code key. See {@link \Wl\Discount\Code\Sql}.
   *   </dd>
   *   <dt>
   *     string <var>s_discount_code</var>
   *   </dt>
   *   <dd>
   *     Discount code value.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Catalog_Cart_DiscountCodeModel_a_discount_code}
   */
  this.a_discount_code = undefined;

  /**
   * @typedef {{}} Wl_Catalog_Cart_DiscountCodeModel_a_item
   * @property {number} id_sale Purchase ite sale category. Constant from {@link \RsSaleSid}.
   * @property {string} k_id Purchase item key.
   */

  /**
   * Information about elements of purchase.
   *
   * <dl>
   *  <dt>int <var>id_sale</var></dt>
   *  <dd>Purchase ite sale category. Constant from {@link \RsSaleSid}.</dd>
   *  <dt>string <var>k_id</var></dt>
   *  <dd>Purchase item key.</dd>
   * </dl>
   *
   * @get get
   * @type {Wl_Catalog_Cart_DiscountCodeModel_a_item[]}
   */
  this.a_item = [];

  /**
   * Business in which the purchase is made.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Discount code value.
   *
   * @get get
   * @type {string}
   */
  this.text_discount_code = "";

  /**
   * Error code. Empty string if no errors.
   *
   * @get result
   * @type {string}
   */
  this.text_error_code = undefined;

  /**
   * Customer UID.
   *
   * @get get
   * @type {string}
   */
  this.uid_customer = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_Cart_DiscountCodeModel);

/**
 * @inheritDoc
 */
Wl_Catalog_Cart_DiscountCodeModel.prototype.config=function()
{
  return {"a_field": {"a_discount_code": {"get": {"result": true}},"a_item": {"get": {"get": true}},"k_business": {"get": {"get": true}},"text_discount_code": {"get": {"get": true}},"text_error_code": {"get": {"result": true}},"uid_customer": {"get": {"get": true}}}};
};