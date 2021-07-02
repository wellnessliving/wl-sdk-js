/**
 * Removes Gift Card from the business.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Coupon_Edit_CouponRemoveModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * ID of the Gift Card that should be removed.
   * Primary key from {@link \RsCouponSql}.
   *
   * @post post
   * @type {string}
   */
  this.k_coupon = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Coupon_Edit_CouponRemoveModel);

/**
 * @inheritDoc
 */
Wl_Coupon_Edit_CouponRemoveModel.prototype.config=function()
{
  return {"a_field": {"k_coupon": {"post": {"post": true}}}};
};