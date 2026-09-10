/**
 * Gets information does Fitbuilder subscription plan is free or not.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Fitbuilder_Subscription_FitbuilderSubscriptionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * New subscription plan. One of {@link Wl_Business_Account_Subscription_Fitbuilder_FitbuilderSubscriptionSid} constants.
   *
   * @post post
   * @see Wl_Business_Account_Subscription_Fitbuilder_FitbuilderSubscriptionSid
   * @type {number}
   */
  this.id_plan = 0;

  /**
   * If Fitbuilder has free subscription plan is `true`, otherwise - `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_free = true;

  /**
   * Business key to check Fitbuilder subscription plan.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Fitbuilder_Subscription_FitbuilderSubscriptionModel);

/**
 * @inheritDoc
 */
Wl_Fitbuilder_Subscription_FitbuilderSubscriptionModel.prototype.config=function()
{
  return {"a_field":{"id_plan":{"post":{"post":true}},"is_free":{"get":{"result":true}},"k_business":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Fitbuilder_Subscription_FitbuilderSubscriptionModel.instanceGet
 * @param {string} k_business Business key to check Fitbuilder subscription plan.
 * @returns {Wl_Fitbuilder_Subscription_FitbuilderSubscriptionModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets information does Fitbuilder subscription plan is free or not.
 *
 * Validates the business key, then checks whether Fitbuilder is currently enabled as a free
 * subscription plan for the business.
 *
 * @function
 * @name Wl_Fitbuilder_Subscription_FitbuilderSubscriptionModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Upgrades the business Fitbuilder subscription plan.
 *
 * Validates the business key and checks that the current user has backend access and the privilege to
 * manage the Fitbuilder subscription, then upgrades the subscription plan within a database transaction.
 *
 * @function
 * @name Wl_Fitbuilder_Subscription_FitbuilderSubscriptionModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
