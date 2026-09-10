/**
 * Gets information does "Collections" subscription plan is active or not.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Account_Subscription_Collections_CollectionsSubscriptionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * If the business has active subscription.
   *
   * @get result
   * @type {boolean}
   */
  this.is_active = undefined;

  /**
   * Business key to check subscription plan.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Account_Subscription_Collections_CollectionsSubscriptionModel);

/**
 * @inheritDoc
 */
Wl_Business_Account_Subscription_Collections_CollectionsSubscriptionModel.prototype.config=function()
{
  return {"a_field":{"is_active":{"get":{"result":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Business_Account_Subscription_Collections_CollectionsSubscriptionModel.instanceGet
 * @param {string} k_business Business key to check subscription plan.
 * @returns {Wl_Business_Account_Subscription_Collections_CollectionsSubscriptionModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets information does "Collections" subscription plan is active or not.
 *
 * Loads the "Collections" subscription for the given business and reports whether it is
 * currently active, so callers can decide whether the related feature can be used.
 *
 * @function
 * @name Wl_Business_Account_Subscription_Collections_CollectionsSubscriptionModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
