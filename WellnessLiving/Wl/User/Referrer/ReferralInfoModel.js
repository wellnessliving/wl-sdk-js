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
   * Total reward points earned by this user for referral registration ({@link RsRewardScoreSid}).
   *
   * @get result
   * @see RsRewardScoreSid
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
