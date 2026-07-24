/**
 * Gets list of coupons.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Coupon_CouponList_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,is_franchise,is_frontend,is_inactive_include";

  /**
   * @typedef {{}} Wl_Coupon_CouponList_ListModel_a_coupon
   * @property {number} id_type The type of coupon. One of {@link Wl_Coupon_TypeSid} constants.
   * @property {string} k_coupon The gift card key.
   * @property {string} text_title The title of the gift card.
   */

  /**
   * A list of gift cards. Every element has the following keys:
   *
   * @get result
   * @type {Wl_Coupon_CouponList_ListModel_a_coupon[]}
   */
  this.a_coupon = undefined;

  /**
   * Whether to return franchisee-created coupons (if business is franchisor).
   * `true` to include franchisee-created coupons.
   *
   * @get get
   * @type {boolean}
   */
  this.is_franchise = false;

  /**
   * `true` to get only gift cards available for current user; `false` to get all gift cards.
   *
   * @get get
   * @type {boolean}
   */
  this.is_frontend = false;

  /**
   * A flag to include disabled items in the query result
   *
   * @get get
   * @type {boolean}
   */
  this.is_inactive_include = false;

  /**
   * The business key to retrieve a list of all the gift cards in a business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Coupon_CouponList_ListModel);

/**
 * @inheritDoc
 */
Wl_Coupon_CouponList_ListModel.prototype.config=function()
{
  return {"a_field":{"a_coupon":{"get":{"result":true}},"is_franchise":{"get":{"get":true}},"is_frontend":{"get":{"get":true}},"is_inactive_include":{"get":{"get":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Coupon_CouponList_ListModel.instanceGet
 * @param {string} k_business The business key to retrieve a list of all the gift cards in a business.
 * @param {boolean} is_franchise Whether to return franchisee-created coupons (if business is franchisor). `true` to include franchisee-created coupons.
 * @param {boolean} is_frontend `true` to get only gift cards available for current user; `false` to get all gift cards.
 * @param {boolean} is_inactive_include A flag to include disabled items in the query result
 * @returns {Wl_Coupon_CouponList_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets list of coupons.
 *
 * Used to populate the gift card picker in the store and booking flows. Returns all gift card types
 * offered by the business. In franchise mode, gift cards from all franchise locations are included.
 *
 * @function
 * @name Wl_Coupon_CouponList_ListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
