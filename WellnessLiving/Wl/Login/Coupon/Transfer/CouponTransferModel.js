/**
 * Transfer purchased coupon to another user.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Coupon_Transfer_CouponTransferModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Key of business. Primary key in {@link \RsBusinessSql} table.
   * <tt>null</tt> if not initialized.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Key of login coupon to be transferred. Primary key in {@link \RsLoginCouponSql} table.
   * <tt>null</tt> if not initialized.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_login_coupon = undefined;

  /**
   * User ID to transfer purchased coupon from. Primary key in {@link \PassportLoginSql} table.
   * <tt>null</tt> if not initialized.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid_from = undefined;

  /**
   * User ID to transfer purchased coupon to. Primary key in {@link \PassportLoginSql} table.
   * <tt>null</tt> if not initialized.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid_to = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Coupon_Transfer_CouponTransferModel);

/**
 * @inheritDoc
 */
Wl_Login_Coupon_Transfer_CouponTransferModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"get": {"get": true},"post": {"get": true}},"k_login_coupon": {"get": {"get": true},"post": {"get": true}},"uid_from": {"get": {"get": true},"post": {"get": true}},"uid_to": {"get": {"get": true},"post": {"get": true}}}};
};