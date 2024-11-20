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
   * @typedef {{}} Wl_Login_Coupon_Transfer_CouponTransferModel_a_relation
   * @property {string} html_relation Name of relation type.
   * @property {string} html_user_name User name with whom purchased event owner has relation.
   */

  /**
   * Information about relation between users:
   * <dl>
   *   <dt>
   *     string <var>html_relation</var>
   *   </dt>
   *   <dd>
   *     Name of relation type.
   *   </dd>
   *   <dt>
   *     string <var>html_user_name</var>
   *   </dt>
   *   <dd>
   *     User name with whom purchased event owner has relation.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Login_Coupon_Transfer_CouponTransferModel_a_relation}
   */
  this.a_relation = undefined;

  /**
   * Key of source mode. One of {@link Wl_Mode_ModeSid} constants.
   *
   * @post get
   * @type {?number}
   */
  this.id_mode = null;

  /**
   * Key of business.
   * <tt>null</tt> if not initialized.
   *
   * @get get
   * @post get
   * @type {*}
   */
  this.k_business = undefined;

  /**
   * Key of login coupon to be transferred.
   * <tt>null</tt> if not initialized.
   *
   * @post get
   * @type {*}
   */
  this.k_login_coupon = undefined;

  /**
   * User ID to transfer purchased coupon from.
   * <tt>null</tt> if not initialized.
   *
   * @get get
   * @post get
   * @type {*}
   */
  this.uid_from = undefined;

  /**
   * User ID to transfer purchased coupon to.
   * <tt>null</tt> if not initialized.
   *
   * @get get
   * @post get
   * @type {*}
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
  return {"a_field": {"a_relation": {"get": {"result": true}},"id_mode": {"post": {"get": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_login_coupon": {"post": {"get": true}},"uid_from": {"get": {"get": true},"post": {"get": true}},"uid_to": {"get": {"get": true},"post": {"get": true}}}};
};