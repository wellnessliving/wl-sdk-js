/**
 * API for buying amount coupon gifts.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Catalog_Coupon_AmountCouponModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Amount coupon information.
   *
   * @post result
   * @type {?{}}
   */
  this.a_cart_coupon = null;

  /**
   * Business key.
   *
   * <tt>null</tt> if not set yet.
   *
   * @post post
   * @type {*}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_Coupon_AmountCouponModel);

/**
 * @inheritDoc
 */
Wl_Catalog_Coupon_AmountCouponModel.prototype.config=function()
{
  return {"a_field": {"a_cart_coupon": {"post": {"result": true}},"k_business": {"post": {"post": true}}}};
};