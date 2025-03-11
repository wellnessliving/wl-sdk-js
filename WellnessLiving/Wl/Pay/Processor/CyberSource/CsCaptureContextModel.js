/**
 * Generate a capture context data and key ID to encrypt the card number in the follow-on Tokenize Card request.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Processor_CyberSource_CsCaptureContextModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Key of the business.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the business merchant that should be used to perform the request.
   *
   * @post post
   * @type {string}
   */
  this.k_business_merchant = "";

  /**
   * Value to improve security for payment card transactions, safeguarding sensitive information, maintaining trust in
   *  electronic payment systems, and reducing the likelihood of a data breach.
   *
   * See {@link https://support.visaacceptance.com/knowledgebase/Knowledgearticle/?code=KA-07551} for more details.
   * Uses to create JS script tag together with {@link Wl_Pay_Processor_CyberSource_CsCaptureContextModel.url_client_library}.
   *
   *
   * `null` until generated.
   *
   * @post result
   * @type {?string}
   */
  this.s_client_library_integrity = null;

  /**
   * Contents of the key.
   *
   * `null` until generated.
   *
   * @post result
   * @type {?string}
   */
  this.s_key = null;

  /**
   * ID of the key.
   *
   * `null` until generated.
   *
   * @post result
   * @type {?string}
   */
  this.s_key_id = null;

  /**
   * Microform Integration JavaScript library url.
   * Uses to create JS script tag together with {@link Wl_Pay_Processor_CyberSource_CsCaptureContextModel.s_client_library_integrity}.
   *
   * `null` until generated.
   *
   * @post result
   * @type {?string}
   */
  this.url_client_library = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Processor_CyberSource_CsCaptureContextModel);

/**
 * @inheritDoc
 */
Wl_Pay_Processor_CyberSource_CsCaptureContextModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"post": {"post": true}},"k_business_merchant": {"post": {"post": true}},"s_client_library_integrity": {"post": {"result": true}},"s_key": {"post": {"result": true}},"s_key_id": {"post": {"result": true}},"url_client_library": {"post": {"result": true}}}};
};