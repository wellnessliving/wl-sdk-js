/**
 * Allows to perform Payer Authentication Setup request.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Processor_CyberSource_CsPaSetupModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Credit card data.
   *
   * Contents of the payment source as it presents on the payment form.
   * This data is passed into {@link \RsPayBankCardSelectWidget::data_set()}.
   *
   * @post post
   * @type {{}}
   */
  this.a_card = undefined;

  /**
   * ID of the actor.
   *
   * One of {@link \RsPayActorSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_pay_actor = undefined;

  /**
   * Whether authorization or capture should be performed.
   *
   * `true` (or anything that is not empty) to perform authorization and void immediately.
   *
   * `false` (or anything that is empty, or do not pass this value) to capture the payment amount.
   *
   * @post post
   * @type {boolean}
   */
  this.is_authorize = false;

  /**
   * Key of the business which receives the payment.
   *
   * Primary key in {@link \RsBusinessSql}.
   *
   * @post post
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Key of the business merchant that should be used to perform the request.
   *
   * Primary key in {@link \RsBusinessMerchantSql}.
   *
   * @post post
   * @type {string}
   */
  this.k_business_merchant = undefined;

  /**
   * Key of a custom payment method.
   *
   * Primary key in {@link MethodSql}.
   *
   * `null` or an empty string if payment is performed with a standard payment method.
   *
   * Only payment methods based on {@link \RsPayMethodSid::ECOMMERCE} are accepted.
   *
   * @post post
   * @type {?string}
   */
  this.k_pay_method = null;

  /**
   * Key of payment transaction that was created.
   *
   * Primary key in {@link \RsPayTransactionSql}.
   *
   * @post result
   * @type {string}
   */
  this.k_pay_transaction = undefined;

  /**
   * Payment amount.
   *
   * @post post
   * @type {string}
   */
  this.m_amount = undefined;

  /**
   * Surcharge amount.
   *
   * Empty string or null for zero surcharge amount.
   *
   * @post post
   * @type {string}
   */
  this.m_surcharge = undefined;

  /**
   * JWT token, as returned by Cyber Source.
   *
   * @post result
   * @type {string}
   */
  this.s_jwt = undefined;

  /**
   * Reference ID, as returned by Cyber Source.
   *
   * @post result
   * @type {string}
   */
  this.s_reference = undefined;

  /**
   * UID of the payment owner.
   *
   * @post post
   * @type {string}
   */
  this.uid_pay_owner = undefined;

  /**
   * Device collection URL, as returned by Cyber Source.
   *
   * @post result
   * @type {string}
   */
  this.url_collection = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Processor_CyberSource_CsPaSetupModel);

/**
 * @inheritDoc
 */
Wl_Pay_Processor_CyberSource_CsPaSetupModel.prototype.config=function()
{
  return {"a_field": {"a_card": {"post": {"post": true}},"id_pay_actor": {"post": {"post": true}},"is_authorize": {"post": {"post": true}},"k_business": {"post": {"post": true}},"k_business_merchant": {"post": {"post": true}},"k_pay_method": {"post": {"post": true}},"k_pay_transaction": {"post": {"result": true}},"m_amount": {"post": {"post": true}},"m_surcharge": {"post": {"post": true}},"s_jwt": {"post": {"result": true}},"s_reference": {"post": {"result": true}},"uid_pay_owner": {"post": {"post": true}},"url_collection": {"post": {"result": true}}}};
};