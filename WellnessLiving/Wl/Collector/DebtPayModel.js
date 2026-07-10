/**
 * Registers a debt payment made outside WellnessLiving and applies a credit to the client's account balance.
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
   * @see Core_Locale_CurrencySid
   * @type {number}
   */
  this.id_currency = 0;

  /**
   * The payment method ID.
   * One of {@link RsPayMethodSid} constants.
   *
   * `null` if the payment method is unknown. In such cases, {@link RsPayMethodSid} would be used.
   *
   * @post post
   * @see RsPayMethodSid
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
  this.k_pay_transaction = undefined;

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
  return {"a_field":{"id_currency":{"post":{"get":true}},"id_pay_method":{"post":{"post":true}},"k_business":{"post":{"get":true}},"k_collector_debt":{"post":{"post":true}},"k_pay_transaction":{"post":{"result":true}},"m_amount":{"post":{"post":true}},"uid":{"post":{"get":true}}}};
};

/**
 * Registers a debt payment made outside WellnessLiving and applies a credit to the client's account balance.
 *
 * Used by collectors to record cash or external payments against outstanding debts. The specified
 * amount is credited to the client's account and the debt status is updated accordingly.
 * Requires an active Collections subscription and the business privilege or emulation access.
 *
 * @function
 * @name Wl_Collector_DebtPayModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
