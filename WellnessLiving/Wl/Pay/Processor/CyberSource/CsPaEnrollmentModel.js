/**
 * Allows to Check Payer Authentication Enrollment request.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Processor_CyberSource_CsPaEnrollmentModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Key of payment transaction that was previously created with {@link \Wl\Pay\Processor\CyberSource\CsPaSetupApi}.
   *
   * Primary key in {@link \RsPayTransactionSql}.
   *
   * @post post
   * @type {string}
   */
  this.k_pay_transaction = undefined;

  /**
   * JSON Web Token to include into the request to the second frame.
   *
   * @post result
   * @type {?string}
   */
  this.s_jwt = null;

  /**
   * URL for frontend interaction.
   * This normally means that payer needs to make further steps for the authentication.
   *
   * `null` if no interaction required, and we should proceed with the withdrawal.
   * This normally means that payer is authenticated.
   *
   * If payer is not authenticated, or there is an error occurred during check of the enrollment,
   * this API returns an exception.
   *
   * @post result
   * @type {?string}
   */
  this.url_interact = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Processor_CyberSource_CsPaEnrollmentModel);

/**
 * @inheritDoc
 */
Wl_Pay_Processor_CyberSource_CsPaEnrollmentModel.prototype.config=function()
{
  return {"a_field": {"k_pay_transaction": {"post": {"post": true}},"s_jwt": {"post": {"result": true}},"url_interact": {"post": {"result": true}}}};
};