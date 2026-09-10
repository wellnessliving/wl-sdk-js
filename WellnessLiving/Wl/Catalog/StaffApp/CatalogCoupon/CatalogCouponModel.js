/**
 * Performs validation of the coupon added to the cart.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Catalog_StaffApp_CatalogCoupon_CatalogCouponModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Coupon ID.
   *
   * @get get
   * @type {string}
   */
  this.k_coupon = "";

  /**
   * Coupon amount ID.
   *
   * @get get
   * @type {string}
   */
  this.k_coupon_amount = "";

  /**
   * Custom coupon code.
   *
   * @get get
   * @type {string}
   */
  this.s_code = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_StaffApp_CatalogCoupon_CatalogCouponModel);

/**
 * @inheritDoc
 */
Wl_Catalog_StaffApp_CatalogCoupon_CatalogCouponModel.prototype.config=function()
{
  return {"a_field":{"k_business":{"get":{"get":true}},"k_coupon":{"get":{"get":true}},"k_coupon_amount":{"get":{"get":true}},"s_code":{"get":{"get":true}}}};
};

/**
 * Performs validation of the coupon added to the cart.
 *
 * Confirms that the actor has store-selling privilege for the business, that the coupon
 * and, when provided, the coupon amount both exist, and that a custom coupon code
 * (when provided) is not already used by another coupon.
 *
 * @function
 * @name Wl_Catalog_StaffApp_CatalogCoupon_CatalogCouponModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
