/**
 * Retrieves information about if user is subscribed on specified business or not.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_User_Subscribe_SubscribeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Information about the user`s subscription.
   *
   * When getting information, `true` indicates the user has an email subscription in the business (`false` otherwise).
   *
   * When changing a subscription, `true` subscribes the user in the business. `false` unsubscribes the user in the business.
   *
   * This will be `null` if not set yet.
   *
   * @get result
   * @put get
   * @type {?boolean}
   */
  this.is_subscribe = null;

  /**
   * Information about the user`s subscription.
   *
   * When getting information, `true` indicates the user has an SMS subscription in the business (`false` otherwise).
   *
   * When changing a subscription, `true` subscribes the user in the business. `false1 unsubscribes the user in the business.
   *
   * This will be `null` if not set yet.
   *
   * @get result
   * @put get
   * @type {?boolean}
   */
  this.is_subscribe_sms = null;

  /**
   * The business key used for users to subscribe, unsubscribe, and receive information about the status of the subscription.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The key of the user whose subscription status needs to be checked or switched to subscribed/unsubscribed.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_User_Subscribe_SubscribeModel);

/**
 * @inheritDoc
 */
Wl_Business_User_Subscribe_SubscribeModel.prototype.config=function()
{
  return {"a_field":{"is_subscribe":{"get":{"result":true},"put":{"get":true}},"is_subscribe_sms":{"get":{"result":true},"put":{"get":true}},"k_business":{"get":{"get":true},"put":{"get":true}},"uid":{"get":{"get":true},"put":{"get":true}}}};
};

/**
 * Retrieves information about if user is subscribed on specified business or not.
 *
 * Used to pre-populate the notification preferences toggle in a client's profile page. Shows whether
 * the client has opted in to email and SMS communications from the business.
 *
 * @function
 * @name Wl_Business_User_Subscribe_SubscribeModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Subscribes or unsubscribes user on specified business.
 *
 * Called when a client changes their notification preferences. Controls whether the business can
 * contact the client by email and by SMS.
 *
 * @function
 * @name Wl_Business_User_Subscribe_SubscribeModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
