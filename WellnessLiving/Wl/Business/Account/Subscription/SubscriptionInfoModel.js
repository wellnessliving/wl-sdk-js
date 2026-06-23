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
   * A list of locales.
   *
   * Last used ID: 21
   *
   * Values:
   * - 4 (`AUSTRALIA`): Australia.
   * - 20 (`BAHAMAS`): Bahamas.
   * - 19 (`BERMUDA`): Bermuda.
   * - 2 (`CANADA`): Canada.
   * - 5 (`CAYMAN`): Cayman Islands.
   * - 13 (`CYPRUS`): Cyprus.
   * - 8 (`EGYPT`): Egypt.
   * - 18 (`IRELAND`): Republic of Ireland.
   * - 14 (`KUWAIT`): Kuwait
   * - 16 (`MAURITIUS`): Republic of Mauritius.
   * - 9 (`NEVERLAND`): A special locale that can be used for testing or a business situated in an unknown region.
   * - 10 (`NEW_ZEALAND`): New Zealand.
   * - 12 (`PHILIPPINES`): Philippines.
   * - 15 (`SAUDI_ARABIA`): Saudi Arabia.
   * - 17 (`SENEGAL`): Senegal
   * - 21 (`SINGAPORE`): Singapore.
   * - 6 (`SOUTH_AFRICA`): South Africa.
   * - 11 (`UAE`): United Arab Emirates.
   * - 3 (`UK`): United Kingdom.
   * - 1 (`USA`): United States of America.
   *
   * @get result
   * @type {number}
   */
  this.id_locale = undefined;

  /**
   * Currently active plan ID for requested subscription.
   *
   * Depending on subscription type constant from one of {@link Wl_Business_Account_Subscription_PlanSid} inheritors.
   *
   * @get result
   * @type {*}
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
