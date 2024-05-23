/**
 * An endpoint that modifies a business's payment schedule.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Account_BusinessAccountConfigModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The list of subscription settings.
   *
   * Keys are class identifiers (CID) of the subscription type. Values are arrays of the payments for this subscription required for
   * {@link Wl\Business\Account\Subscription\SubscriptionWrite::gather()}
   *
   * @post post
   * @type {{}}
   */
  this.a_subscription = [];

  /**
   * Additional taxes.
   *
   * @post post
   * @type {string}
   */
  this.f_tax = undefined;

  /**
   * The number of days to show alerts about failed payments for.
   *
   * @post post
   * @type {number}
   */
  this.i_alert_fee = 0;

  /**
   * The number of days after which the business should be terminated.
   *
   * @post post
   * @type {number}
   */
  this.i_alert_termination = 0;

  /**
   * Determines whether alerts about failed payments should be shown to business owners.
   *
   * @post post
   * @type {boolean}
   */
  this.is_alert_fee = false;

  /**
   * Determines whether alerts about future business terminations should be shown to business owners.
   *
   * @post post
   * @type {boolean}
   */
  this.is_alert_termination = false;

  /**
   * Determines whether the business's local currency should be used (instead of the system currency).
   *
   * @post post
   * @type {boolean}
   */
  this.is_currency_locale = false;

  /**
   * Determines whether additional taxes should be used.
   *
   * @post post
   * @type {boolean}
   */
  this.is_tax = false;

  /**
   * The business key.
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