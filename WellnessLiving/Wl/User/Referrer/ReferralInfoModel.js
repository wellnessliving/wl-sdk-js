/**
 * Returns referral count, total referral points, and shareable referral link for the given user.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_User_Referrer_ReferralInfoModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * Types of reward actions.
   *
   * Last used ID: 32
   *
   * Values:
   * - 16 (`BIRTHDAY`): Customer Birthday earns X points.
   * - 14 (`BOOK`): Book a class online.
   * - 2 (`BOOK_FACEBOOK`): Book a class and share on Facebook.
   * - 3 (`BOOK_TWITTER`): Book a class and share on Twitter.
   * - 26 (`CUSTOM`): Custom action.
   * - 7 (`LOGIN_FACEBOOK`): Connect profile to Facebook.
   * - 15 (`PAY`): Each Dollar spent earns customers X points.
   * - 28 (`PURCHASE_PRODUCT`): The reward for the purchase of some product.
   * - 27 (`PURCHASE_PROMOTION`): The reward for the purchase of some promotion.
   * - 22 (`PURCHASE_SHARE_FACEBOOK`): Share to facebook purchased item.
   * - 23 (`PURCHASE_SHARE_TWITTER`): Share to twitter purchased item.
   * - 30 (`REFER_PURCHASE`): Referral purchase.
   * - 31 (`REFER_REGISTER`): Referral registration.
   * - 20 (`REGISTRATION`): User registration.
   * - 25 (`RESET`): Record to reset all-time earned user points. This points will be always negative.
   * - 32 (`RESET_AVAILABLE`): Record to reset current available user points. This points will be always negative.
   * - 11 (`REVIEW`): Write a review on microsite.
   * - 9 (`REVIEW_FACEBOOK`): Write a review on microsite and share on Facebook.
   * - 10 (`REVIEW_TWITTER`): Write a review on microsite and share on Twitter.
   * - 12 (`VISIT`): Visit classes on the same location.
   * - 29 (`VISIT_APPOINTMENT`): Attending a specific appointment earns customers X points.
   * - 18 (`VISIT_CLASS`): Attending a specific class earns customers X points.
   * - 19 (`VISIT_ENROLLMENT`): Attending a specific Workshop/Enrollment/Event earns customers X points.
   *
   * @get result
   * @type {?number}
   */
  this.i_point = null;

  /**
   * Number of invited referrals.
   *
   * @get result
   * @type {number}
   */
  this.i_referral = undefined;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * User key of the referrer whose statistics are being requested.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  /**
   * Shareable invite link for the referrer.
   *
   * Navigates to the business registration page with the referrer's encrypted user key as the
   *  `s_referral` parameter. When a new client registers through this link, the "Referred By"
   *  field is pre-filled with this user.
   *
   * @get result
   * @type {string}
   */
  this.url_referral = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_User_Referrer_ReferralInfoModel);

/**
 * @inheritDoc
 */
Wl_User_Referrer_ReferralInfoModel.prototype.config=function()
{
  return {"a_field":{"i_point":{"get":{"result":true}},"i_referral":{"get":{"result":true}},"k_business":{"get":{"get":true}},"uid":{"get":{"get":true}},"url_referral":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_User_Referrer_ReferralInfoModel.instanceGet
 * @param {string} k_business Business key.
 * @param {string} uid User key of the referrer whose statistics are being requested.
 * @returns {Wl_User_Referrer_ReferralInfoModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns referral count, total referral points, and shareable referral link for the given user.
 *
 * Computes result fields for the referrer identified:
 * - number of invited referrals;
 * - reward points earned for referral registrations;
 * - the shareable invite link with the referrer's encrypted user key.
 *
 * @function
 * @name Wl_User_Referrer_ReferralInfoModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
