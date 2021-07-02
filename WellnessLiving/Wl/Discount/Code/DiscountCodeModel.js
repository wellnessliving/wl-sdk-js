/**
 * Discount codes API point.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Discount_Code_DiscountCodeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Discount_Code_DiscountCodeModel_a_list
   * @property {string} k_discount_code Discount code key. Primary key in the {@link \Wl\Discount\Code\Sql} table.
   * @property {string} text_discount_code Discount code title.
   */

  /**
   * Discount codes list.
   *
   * Each element has next structure:<dl>
   * <dt>string <var>k_discount_code</var> </dt>
   * <dd>Discount code key. Primary key in the {@link \Wl\Discount\Code\Sql} table.</dd>
   * <dt>string <var>text_discount_code</var></dt>
   * <dd>Discount code title.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Discount_Code_DiscountCodeModel_a_list[]}
   */
  this.a_list = undefined;

  /**
   * Business key of the discount codes.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Discount_Code_DiscountCodeModel);

/**
 * @inheritDoc
 */
Wl_Discount_Code_DiscountCodeModel.prototype.config=function()
{
  return {"a_field": {"a_list": {"get": {"result": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Discount_Code_DiscountCodeModel.instanceGet
 * @param {string} k_business Business key of the discount codes.
 * @returns {Wl_Discount_Code_DiscountCodeModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */