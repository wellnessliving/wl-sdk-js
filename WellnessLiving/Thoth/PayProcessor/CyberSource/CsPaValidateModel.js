/**
 * Validates the `CyberSource` Payer Authentication result.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Thoth_PayProcessor_CyberSource_CsPaValidateModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Key of payment transaction that was previously created with {@link Thoth_PayProcessor_CyberSource_CsPaSetupModel}.
   *
   * @post post
   * @type {string}
   */
  this.k_pay_transaction = "";

  /**
   * Payer authentication transaction ID.
   *
   * @post post
   * @type {string}
   */
  this.s_transaction = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Thoth_PayProcessor_CyberSource_CsPaValidateModel);

/**
 * @inheritDoc
 */
Thoth_PayProcessor_CyberSource_CsPaValidateModel.prototype.config=function()
{
  return {"a_field":{"k_pay_transaction":{"post":{"post":true}},"s_transaction":{"post":{"post":true}}}};
};

/**
 * Validates the `CyberSource` Payer Authentication result.
 *
 * Retrieves the authentication result for the transaction validated by {@link Thoth_PayProcessor_CyberSource_CsPaEnrollmentModel}
 * and confirms whether the payer authentication succeeded, allowing the merchant to proceed with
 * processing the payment.
 *
 * @function
 * @name Thoth_PayProcessor_CyberSource_CsPaValidateModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
