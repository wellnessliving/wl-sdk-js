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
   * A list of payment methods.
   *
   *
   *
   * Last used ID: 13.
   *
   * Values:
   * - 7 (`ACCOUNT`): Payment with personal user account (rs.pay.account).
   * - 9 (`ACH`): ACH system (USA-specific direct banking transactions).
   * - 4 (`CASH`): Payment with cash.
   * - 5 (`CHEQUE`): Payment with a cheque.
   * - 8 (`COUPON`): Payment with a coupon.
   * - 10 (`DIRECT_ENTRY`): Direct Entry system (australian-specific direct banking transactions).
   * - 2 (`ECOMMERCE`): Online payment. Card not present.
   * - 6 (`EXTERNAL`): Payment with an external terminal.
   * - 11 (`IMPORT_ACCRUAL`): Special method to be used for migration process.
   *
   *   There are sales in Mindbody that were not bought using account balance or reward points.
   *   This is not real revenue and cannot be imported as real sales. So, they can be imported as this special method
   *   to be in the system and to allow business owner to hide on sales report.
   *
   *   In online store this method should not be available.
   * - 1 (`POS`): Payment method at a Points of sale.
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
