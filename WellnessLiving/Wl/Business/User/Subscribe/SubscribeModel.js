/**
 * Manages user`s subscription on business.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_User_Subscribe_SubscribeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Information about user`s subscription.
   * In case of getting information,
   * <tt>true</tt> if user has email subscription on business, <tt>false</tt> otherwise.
   * In case of changing subscription,
   * <tt>true</tt> if subscribe user on business, <tt>false</tt> is unsubscribe user on business.
   *
   * <tt>null</tt> until loaded.
   *
   * @get result
   * @put get
   * @type {?boolean}
   */
  this.is_subscribe = null;

  /**
   * Information about user`s subscription.
   * In case of getting information,
   * <tt>true</tt> if user has sms subscription on business, <tt>false</tt> otherwise.
   * In case of changing subscription,
   * <tt>true</tt> if subscribe user on business, <tt>false</tt> if unsubscribe user on business.
   *
   * <tt>null</tt> until loaded.
   *
   * @get result
   * @put get
   * @type {?boolean}
   */
  this.is_subscribe_sms = null;

  /**
   * Business key
   * Key of the business for which user will subscribe, unsubscribe,
   * receive information about the status of the subscription.
   * Primary key in the {@link RsBusinessSql} table.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * User key.
   * The key of the user whose subscription status needs to check or switch to subscribe / unsubscribe.
   * Primary key in {@link PassportLoginSql} table.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_User_Subscribe_SubscribeModel);

/**
 * @inheritDoc
 */
Wl_Business_User_Subscribe_SubscribeModel.prototype.config=function()
{
  return {"a_field": {"is_subscribe": {"get": {"result": true},"put": {"get": true}},"is_subscribe_sms": {"get": {"result": true},"put": {"get": true}},"k_business": {"get": {"get": true},"put": {"get": true}},"uid": {"get": {"get": true},"put": {"get": true}}}};
};