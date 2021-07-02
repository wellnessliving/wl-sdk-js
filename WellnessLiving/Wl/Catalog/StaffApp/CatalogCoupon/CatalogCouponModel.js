/**
 * Coupon validation API.
 *
 * This model is generated automatically based on API.
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
   * Primary key in {@link \RsCouponSql}
   *
   * @get get
   * @type {string}
   */
  this.k_coupon = "";

  /**
   * Coupon amount ID.
   * Primary key in {@link \Wl\Coupon\AmountSql}
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
  return {"a_field": {"k_business": {"get": {"get": true}},"k_coupon": {"get": {"get": true}},"k_coupon_amount": {"get": {"get": true}},"s_code": {"get": {"get": true}}}};
};