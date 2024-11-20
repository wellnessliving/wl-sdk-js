/**
 * Generate a one-time use public key and key ID to encrypt the card number in the follow-on Tokenize Card request.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Processor_CyberSource_CsFlexKeyModel()
{
  WlSdk_ModelAbstract.apply(this);

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
   * Contents of the key.
   *
   * @post result
   * @type {?string}
   */
  this.s_key = null;

  /**
   * ID of the key.
   *
   * @post result
   * @type {?string}
   */
  this.s_key_id = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Processor_CyberSource_CsFlexKeyModel);

/**
 * @inheritDoc
 */
Wl_Pay_Processor_CyberSource_CsFlexKeyModel.prototype.config=function()
{
  return {"a_field": {"k_business_merchant": {"post": {"post": true}},"s_key": {"post": {"result": true}},"s_key_id": {"post": {"result": true}}}};
};