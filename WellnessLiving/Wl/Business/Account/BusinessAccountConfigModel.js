/**
 * Allows to modify business payment schedule.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Account_BusinessAccountConfigModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of subscription settings.
   *
   * Keys are CID of the subscription type and values are arrays of the payments for this subscription required for
   * {@link \Wl\Business\Account\Subscription\SubscriptionWrite::gather()}
   *
   * @post post
   * @type {{}}
   */
  this.a_subscription = [];

  /**
   * Additional tax amount value.
   *
   * @post post
   * @type {string}
   */
  this.f_tax = undefined;

  /**
   * Number of days to show alert about failed payment.
   *
   * @post post
   * @type {number}
   */
  this.i_alert_fee = 0;

  /**
   * Number of days after which business should be terminated.
   *
   * @post post
   * @type {number}
   */
  this.i_alert_termination = 0;

  /**
   * Whether alert about failed payment should be shown to business owner.
   *
   * @post post
   * @type {boolean}
   */
  this.is_alert_fee = false;

  /**
   * Whether alert about business future termination should be shown to business owner.
   *
   * @post post
   * @type {boolean}
   */
  this.is_alert_termination = false;

  /**
   * Whether business local currency should be used instead of system currency.
   *
   * @post post
   * @type {boolean}
   */
  this.is_currency_locale = false;

  /**
   * Whether additional taxes should be used.
   *
   * @post post
   * @type {boolean}
   */
  this.is_tax = false;

  /**
   * Business key.
   *
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Account_BusinessAccountConfigModel);

/**
 * @inheritDoc
 */
Wl_Business_Account_BusinessAccountConfigModel.prototype.config=function()
{
  return {"a_field": {"a_subscription": {"post": {"post": true}},"f_tax": {"post": {"post": true}},"i_alert_fee": {"post": {"post": true}},"i_alert_termination": {"post": {"post": true}},"is_alert_fee": {"post": {"post": true}},"is_alert_termination": {"post": {"post": true}},"is_currency_locale": {"post": {"post": true}},"is_tax": {"post": {"post": true}},"k_business": {"post": {"get": true}}}};
};