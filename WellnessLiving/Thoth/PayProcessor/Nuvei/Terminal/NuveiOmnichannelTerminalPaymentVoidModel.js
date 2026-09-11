/**
 * Cancels a payment made through a `Nuvei` omnichannel terminal.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Thoth_PayProcessor_Nuvei_Terminal_NuveiOmnichannelTerminalPaymentVoidModel()
{
  WlSdk_ModelAbstract.apply(this);

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
   * Pay transaction key, which was used to create payment intent.
   *
   * `null` in case when not initialized yet.
   *
   * @post post
   * @type {?string}
   */
  this.k_pay_transaction = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Thoth_PayProcessor_Nuvei_Terminal_NuveiOmnichannelTerminalPaymentVoidModel);

/**
 * @inheritDoc
 */
Thoth_PayProcessor_Nuvei_Terminal_NuveiOmnichannelTerminalPaymentVoidModel.prototype.config=function()
{
  return {"a_field":{"k_business":{"post":{"post":true}},"k_business_merchant":{"post":{"post":true}},"k_pay_transaction":{"post":{"post":true}}}};
};

/**
 * Cancels a payment made through a `Nuvei` omnichannel terminal.
 *
 * Validates the business merchant and pay transaction, confirms the requesting user owns the
 * terminal payment session, and verifies the transaction belongs to the specified business and
 * merchant. Schedules an asynchronous task to void the unfinished transaction instead of voiding
 * it immediately.
 *
 * @function
 * @name Thoth_PayProcessor_Nuvei_Terminal_NuveiOmnichannelTerminalPaymentVoidModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
