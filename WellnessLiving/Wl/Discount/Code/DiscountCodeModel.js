/**
 * Returns discount codes of the specified business.
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
   * List of event keys to filter the discount codes by.
   *
   * A discount code is returned if it applies to any of the given events, to any of the memberships in
   * {@link Wl_Discount_Code_DiscountCodeModel.a_promotion_filter}, or to all purchase items.
   *
   * If both {@link Wl_Discount_Code_DiscountCodeModel.a_event_filter} and {@link Wl_Discount_Code_DiscountCodeModel.a_promotion_filter} are empty,
   * discount codes are not filtered by applicability.
   *
   * @get get
   * @type {string[]}
   */
  this.a_event_filter = undefined;

  /**
   * @typedef {{}} Wl_Discount_Code_DiscountCodeModel_a_list
   * @property {boolean} is_active `true` if the discount code is active, `false` otherwise.
   * @property {boolean} is_remove `true` if the discount code is removed, `false` otherwise.
   * @property {string} k_discount_code Discount code key.
   * @property {string} s_code Actual discount code string.
   * @property {string} text_discount_code Discount code title.
   */

  /**
   * Discount codes list. Each element has the following structure:
   *
   * @get result
   * @type {Wl_Discount_Code_DiscountCodeModel_a_list[]}
   */
  this.a_list = undefined;

  /**
   * List of membership and passes keys to filter the discount codes by.
   *
   * A discount code is returned if it applies to any of the given memberships, to any of the events in
   * {@link Wl_Discount_Code_DiscountCodeModel.a_event_filter}, or to all purchase items.
   *
   * If both {@link Wl_Discount_Code_DiscountCodeModel.a_event_filter} and {@link Wl_Discount_Code_DiscountCodeModel.a_promotion_filter} are empty,
   * discount codes are not filtered by applicability.
   *
   * @get get
   * @type {string[]}
   */
  this.a_promotion_filter = undefined;

  /**
   * Business key of the discount codes.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Discount_Code_DiscountCodeModel);

/**
 * @inheritDoc
 */
Wl_Discount_Code_DiscountCodeModel.prototype.config=function()
{
  return {"a_field":{"a_event_filter":{"get":{"get":true}},"a_list":{"get":{"result":true}},"a_promotion_filter":{"get":{"get":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Discount_Code_DiscountCodeModel.instanceGet
 * @param {string} k_business Business key of the discount codes.
 * @returns {Wl_Discount_Code_DiscountCodeModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns discount codes of the specified business.
 *
 * Used in the backend discount management UI to show the full list of discount codes for a business
 * so the staff member can select one to view or edit.
 *
 * @function
 * @name Wl_Discount_Code_DiscountCodeModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
