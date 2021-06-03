/**
 * Manages referrals and referrers for a business lead request within partner program.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Lead_BusinessChangeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Defines whether {@link BusinessChangeApi::$k_business} should be associated with referral or with referrer business.
   *
   * <tt>true</tt> - to associate with referral business.
   * <tt>false</tt> - to associate with referrer business.
   *
   * @post post
   * @type {boolean}
   */
  this.is_referral = false;

  /**
   * Depending on value {@link BusinessChangeApi::$is_referral} defines referrer or referral business ID.
   * Empty value mean that business is not specified.
   * Primary key from {@link \RsBusinessSql}.
   *
   * @post post
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * ID of the business lead request within partner program.
   *
   * Primary key from {@link \Wl\Business\LeadSql}.
   *
   * @post post
   * @type {string}
   */
  this.k_business_lead = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Lead_BusinessChangeModel);

/**
 * @inheritDoc
 */
Wl_Business_Lead_BusinessChangeModel.prototype.config=function()
{
  return {"a_field": {"is_referral": {"post": {"post": true}},"k_business": {"post": {"post": true}},"k_business_lead": {"post": {"post": true}}}};
};