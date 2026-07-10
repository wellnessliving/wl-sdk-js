/**
 * Gets information about subscription.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Account_Subscription_SubscriptionInfoModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,cid_subscription";

  /**
   * CID of the subscription information of which is requested.
   *
   * @get get
   * @type {number}
   */
  this.cid_subscription = 0;

  /**
   * Locale ID of the business which subscription information is requested for.
   *
   * @get result
   * @see Core_Locale_LocaleSid
   * @type {number}
   */
  this.id_locale = undefined;

  /**
   * Currently active plan ID for requested subscription.
   *
   * Depending on subscription type constant from one of {@link Wl_Business_Account_Subscription_PlanSid} inheritors.
   *
   * @get result
   * @type {number}
   */
  this.id_plan = undefined;

  /**
   * Whether subscription is active.
   *
   * `true` if subscription is active, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_active = undefined;

  /**
   * Business key for which subscription information is requested.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Account_Subscription_SubscriptionInfoModel);

/**
 * @inheritDoc
 */
Wl_Business_Account_Subscription_SubscriptionInfoModel.prototype.config=function()
{
  return {"a_field":{"cid_subscription":{"get":{"get":true}},"id_locale":{"get":{"result":true}},"id_plan":{"get":{"result":true}},"is_active":{"get":{"result":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Business_Account_Subscription_SubscriptionInfoModel.instanceGet
 * @param {string} k_business Business key for which subscription information is requested.
 * @param {number} cid_subscription CID of the subscription information of which is requested.
 * @returns {Wl_Business_Account_Subscription_SubscriptionInfoModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets information about subscription.
 *
 * Used in the backend settings UI to read the current state of a business subscription (e.g., Achieve or
 * another product). Returns whether the subscription is active, the current plan tier, and the business
 * locale. Requires backend access to the business.
 *
 * @function
 * @name Wl_Business_Account_Subscription_SubscriptionInfoModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
