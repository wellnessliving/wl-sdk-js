/**
 * Checks whether limit for video upload reached for specific business.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Video_VideoLimitModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Whether business has reach limits for video upload.
   *
   * @get result
   * @type {boolean}
   */
  this.has_limit = undefined;

  /**
   * Subscription plan proposed for upgrade if limit reached and this subscription plan can avoid this limit.
   *
   * One of {@link FitvidSubscriptionSid} constants.
   * <tt>null</tt> if plan can not be upgraded.
   *
   * @get result
   * @type {?number}
   */
  this.id_upgrade_plan = null;

  /**
   * Business key from {@link \RsBusinessSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Monthly payment amount for subscription plan proposed for upgrade
   * if limit reached and this subscription plan can avoid this limit.
   *
   * <tt>null</tt> if plan can not be upgraded.
   *
   * @get result
   * @type {?string}
   */
  this.m_upgrade_price = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Video_VideoLimitModel);

/**
 * @inheritDoc
 */
Wl_Video_VideoLimitModel.prototype.config=function()
{
  return {"a_field": {"has_limit": {"get": {"result": true}},"id_upgrade_plan": {"get": {"result": true}},"k_business": {"get": {"get": true}},"m_upgrade_price": {"get": {"result": true}}}};
};