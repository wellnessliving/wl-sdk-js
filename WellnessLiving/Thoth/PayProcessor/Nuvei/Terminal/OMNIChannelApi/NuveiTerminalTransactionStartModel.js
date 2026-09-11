/**
 * Starts a payment transaction on a `Nuvei` POS terminal.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Thoth_PayProcessor_Nuvei_Terminal_OMNIChannelApi_NuveiTerminalTransactionStartModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * ID of the currency.
   *
   * One of {@link Core_Locale_CurrencySid} constants.
   *
   * `null` in case when not initialized yet.
   *
   * @post post
   * @see Core_Locale_CurrencySid
   * @type {?number}
   */
  this.id_currency = null;

  /**
   * ID of the actor.
   *
   * One of {@link RsPayActorSid} constants.
   *
   * `null` in case when not initialized yet.
   *
   * @post post
   * @see RsPayActorSid
   * @type {?number}
   */
  this.id_pay_actor = null;

  /**
   * The response id. One of {@link Thoth_PayProcessor_Nuvei_Code_CSResponseSid} constants.
   *
   * `null` in case when not initialized yet.
   *
   * @post result
   * @see Thoth_PayProcessor_Nuvei_Code_CSResponseSid
   * @type {?number}
   */
  this.id_response = null;

  /**
   * Whether authorization or capture should be performed.
   *
   * `true` (or anything that is not empty) to perform authorization.
   *
   * `false` (or anything that is empty, or do not pass this value) to charge the payment amount.
   *
   * @post post
   * @type {boolean}
   */
  this.is_authorize = false;

  /**
   * Key of the business which receives the payment.
   *
   * `null` in case when not initialized yet.
   *
   * @post post
   * @type {?string}
   */
  this.k_business = null;

  /**
   * Key of the business merchant that should be used to perform the request.
   *
   * `null` in case when not initialized yet.
   *
   * @post post
   * @type {?string}
   */
  this.k_business_merchant = null;

  /**
   * Key of a custom payment method.
   *
   * `null` in case when not initialized yet or empty if payment is performed with a standard payment method.
   *
   * @post post
   * @type {?string}
   */
  this.k_pay_method = null;

  /**
   * Key of payment transaction that was created.
   *
   * `null` in case when not initialized yet.
   *
   * @post result
   * @type {?string}
   */
  this.k_pay_transaction = null;

  /**
   * Payment amount.
   *
   * `null` in case when not initialized yet.
   *
   * @post post
   * @type {?string}
   */
  this.m_amount = null;

  /**
   * Surcharge amount.
   *
   * `null` in case when not initialized yet, empty string or null for zero surcharge amount.
   *
   * @post post
   * @type {?string}
   */
  this.m_surcharge = null;

  /**
   * Amount of tips entered in shopping cart.
   *
   * @post post
   * @type {string}
   */
  this.m_tip = "0.00";

  /**
   * The request exchange identification.
   *
   * `null` in case when not initialized yet.
   *
   * @post result
   * @type {string}
   */
  this.s_exchange_identification = undefined;

  /**
   * Unique terminal identifier.
   *
   * `null` in case when not initialized yet.
   *
   * @post post
   * @type {?string}
   */
  this.s_terminal_id = null;

  /**
   * Error message.
   *
   * `null` in case response has not received yet or request is not failed.
   *
   * @post result
   * @type {?string}
   */
  this.text_message = null;

  /**
   * Payment owner user key.
   *
   * `null` in case when not initialized yet or if pay owner is anonymous.
   *
   * @post post
   * @type {?string}
   */
  this.uid_purchase = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Thoth_PayProcessor_Nuvei_Terminal_OMNIChannelApi_NuveiTerminalTransactionStartModel);

/**
 * @inheritDoc
 */
Thoth_PayProcessor_Nuvei_Terminal_OMNIChannelApi_NuveiTerminalTransactionStartModel.prototype.config=function()
{
  return {"a_field":{"id_currency":{"post":{"post":true}},"id_pay_actor":{"post":{"post":true}},"id_response":{"post":{"result":true}},"is_authorize":{"post":{"post":true}},"k_business":{"post":{"post":true}},"k_business_merchant":{"post":{"post":true}},"k_pay_method":{"post":{"post":true}},"k_pay_transaction":{"post":{"result":true}},"m_amount":{"post":{"post":true}},"m_surcharge":{"post":{"post":true}},"m_tip":{"post":{"post":true}},"s_exchange_identification":{"post":{"result":true}},"s_terminal_id":{"post":{"post":true}},"text_message":{"post":{"result":true}},"uid_purchase":{"post":{"post":true}}}};
};

/**
 * Starts a payment transaction on a `Nuvei` POS terminal.
 *
 * Validates the terminal, business merchant, and staff permissions, then creates a pay
 * transaction and sends a payment request to the terminal. If another transaction is already
 * in progress on the terminal, attempts to recover or cancel it. Schedules a background task to
 * poll the terminal for the swipe result and a fallback task to void the transaction if it is
 * never completed.
 *
 * @function
 * @name Thoth_PayProcessor_Nuvei_Terminal_OMNIChannelApi_NuveiTerminalTransactionStartModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
