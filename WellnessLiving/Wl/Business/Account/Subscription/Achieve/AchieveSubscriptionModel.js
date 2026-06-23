/**
 * Returns the Achieve subscription plan flags (free and white-label) for the given business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Account_Subscription_Achieve_AchieveSubscriptionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * If Achieve app has free subscription plan is `true`, otherwise (white label, professional) - `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_free = undefined;

  /**
   * If Achieve app has white label subscription plan is `true`, otherwise (free, professional) - `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_white_label = undefined;

  /**
   * Business key to check Achieve app subscription plan.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Account_Subscription_Achieve_AchieveSubscriptionModel);

/**
 * @inheritDoc
 */
Wl_Business_Account_Subscription_Achieve_AchieveSubscriptionModel.prototype.config=function()
{
  return {"a_field":{"is_free":{"get":{"result":true}},"is_white_label":{"get":{"result":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Business_Account_Subscription_Achieve_AchieveSubscriptionModel.instanceGet
 * @param {string} k_business Business key to check Achieve app subscription plan.
 * @returns {Wl_Business_Account_Subscription_Achieve_AchieveSubscriptionModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns the Achieve subscription plan flags (free and white-label) for the given business.
 *
 * Used to determine which features and branding options are available in the Achieve mobile app for a
 * business. For franchisees, the franchisor's subscription is used. Call this before rendering any
 * Achieve-specific UI that depends on the plan tier.
 *
 * @function
 * @name Wl_Business_Account_Subscription_Achieve_AchieveSubscriptionModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
