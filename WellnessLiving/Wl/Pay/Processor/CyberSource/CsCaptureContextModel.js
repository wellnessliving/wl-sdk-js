/**
 * Generates a capture context for `CyberSource` Flex Microform.
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
   * Microform Integration JavaScript library integrity property value.
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
  return {"a_field":{"k_business":{"post":{"post":true}},"k_business_merchant":{"post":{"post":true}},"s_client_library_integrity":{"post":{"result":true}},"s_key":{"post":{"result":true}},"s_key_id":{"post":{"result":true}},"url_client_library":{"post":{"result":true}}}};
};

/**
 * Generates a capture context for `CyberSource` Flex Microform.
 *
 * Returns a capture context and key ID that the client uses to encrypt the card number before
 * sending it in the follow-on Tokenize Card request.
 *
 * @function
 * @name Wl_Pay_Processor_CyberSource_CsCaptureContextModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
