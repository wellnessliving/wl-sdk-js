/**
 * Retrieves the key and balance of a gift card by its code for the specified business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Coupon_CouponModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * The business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The gift card reference number for this specific user. WellnessLiving uses this reference number for managing
   * gift cards in the system.
   *
   * @get result
   * @type {string}
   */
  this.k_login_coupon = undefined;

  /**
   * The gift card amount.
   *
   * @get result
   * @type {string}
   */
  this.m_amount = undefined;

  /**
   * The gift card.
   *
   * @get get
   * @type {string}
   */
  this.s_code = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Coupon_CouponModel);

/**
 * @inheritDoc
 */
Wl_Login_Coupon_CouponModel.prototype.config=function()
{
  return {"a_field":{"k_business":{"get":{"get":true}},"k_login_coupon":{"get":{"result":true}},"m_amount":{"get":{"result":true}},"s_code":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Login_Coupon_CouponModel.instanceGet
 * @param {string} k_business The business key.
 * @returns {Wl_Login_Coupon_CouponModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves the key and balance of a gift card by its code for the specified business.
 *
 * Validates the gift card code against the specified business, enforces a per-IP rate limit, and checks that the
 * card is active, not already redeemed, not expired, and in the correct currency before returning its key and
 * remaining balance.
 *
 * @function
 * @name Wl_Login_Coupon_CouponModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
