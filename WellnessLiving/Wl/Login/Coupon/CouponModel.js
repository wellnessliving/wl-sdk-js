/**
 * Api for gets information about gift card.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Coupon_CouponModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Business key. Primary key in {@link \RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Login coupon key. Primary key in {@link \RsLoginCouponSql} table.
   *
   * @get result
   * @type {string}
   */
  this.k_login_coupon = undefined;

  /**
   * Sum that user can get after redemption.
   *
   * @get result
   * @type {string}
   */
  this.m_amount = undefined;

  /**
   * Code of the coupon.
   *
   * @get get
   * @type {string}
   */
  this.s_code = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Coupon_CouponModel);

/**
 * @inheritDoc
 */
Wl_Login_Coupon_CouponModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"get": {"get": true}},"k_login_coupon": {"get": {"result": true}},"m_amount": {"get": {"result": true}},"s_code": {"get": {"get": true}}}};
};