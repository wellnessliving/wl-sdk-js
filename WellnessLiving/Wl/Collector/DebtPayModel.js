/**
 * An endpoint that registers a debt payment that was performed beyond Wellnessliving, with a specified credit amount applied to a client's account balance.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Collector_DebtPayModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The currency of the payment.
   * One of {@link Core_Locale_CurrencySid} constants.
   *
   * Important! The currency must coincide with currency of the debt that was sent to collections.
   *
   * @post get
   * @type {number}
   */
  this.id_currency = 0;

  /**
   * The payment method ID.
   * One of {@link RsPayMethodSid} constants.
   *
   * `null` if the payment method is unknown. In such cases, {@link RsPayMethodSid.CASH} would be used.
   *
   * @post post
   * @type {?number}
   */
  this.id_pay_method = null;

  /**
   * The key of the business from which the debt originates.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The debt key towards which the payment was performed.
   *
   * @post post
   * @type {string}
   */
  this.k_collector_debt = "";

  /**
   * The transaction key generated to register the payment.
   *
   * @post result
   * @type {string}
   */
  this.k_pay_transaction = "";

  /**
   * The amount of money that's been paid towards the debt.
   *
   * @post post
   * @type {string}
   */
  this.m_amount = "";

  /**
   * The key of the user with the debt.
   *
   * @post get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Collector_DebtPayModel);

/**
 * @inheritDoc
 */
Wl_Collector_DebtPayModel.prototype.config=function()
{
  return {"a_field": {"id_currency": {"post": {"get": true}},"id_pay_method": {"post": {"post": true}},"k_business": {"post": {"get": true}},"k_collector_debt": {"post": {"post": true}},"k_pay_transaction": {"post": {"result": true}},"m_amount": {"post": {"post": true}},"uid": {"post": {"get": true}}}};
};