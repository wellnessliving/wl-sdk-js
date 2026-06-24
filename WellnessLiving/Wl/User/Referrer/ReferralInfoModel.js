/**
 * Returns referral statistics for a user within a business.
 *
 * Provides the count of referred users, total reward points earned from referrals, and
 * a shareable invite link. The link encodes the referrer's user key so that when a new
 * client registers via the link, the "Referred By" field is pre-filled.
 *
 * This model is generated automatically based on API.
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
   * Total reward points earned by this user for referral registration ({@link RsRewardScoreSid.REFER_REGISTER}).
   *
   * @get result
   * @type {number}
   */
  this.i_point = 0;

  /**
   * Number of invited referrals.
   *
   * @get result
   * @type {number}
   */
  this.i_referral = 0;

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
  this.url_referral = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_User_Referrer_ReferralInfoModel);

/**
 * @inheritDoc
 */
Wl_User_Referrer_ReferralInfoModel.prototype.config=function()
{
  return {"a_field": {"i_point": {"get": {"result": true}},"i_referral": {"get": {"result": true}},"k_business": {"get": {"get": true}},"uid": {"get": {"get": true}},"url_referral": {"get": {"result": true}}}};
};