/**
 * Sends an SMS message from the business virtual phone number to a client.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Sms_SmsSendModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Local date with time when sms sent successfully (or failed) in MySQL format.
   *
   * If business is not specified, will not be returned.
   *
   * @post result
   * @type {string}
   */
  this.dtl_send = undefined;

  /**
   * Key of the business.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * The unique key of the sent SMS.
   *
   * @post post
   * @type {string}
   */
  this.s_key = "";

  /**
   * The body of the sms.
   *
   * @post post
   * @type {string}
   */
  this.text_sms_body = "";

  /**
   * The body of the SMS that is actually sent to the client - the same text as
   * {@link Wl_Business_Sms_SmsSendModel.text_sms_body}, but with every link replaced by a short link.
   *
   * The client side uses this value to refresh the message that is already shown in the chat, so the staff member
   * sees exactly the same text that the client receives.
   *
   * Equals to the text that was posted if it contains no links, or if none of the links could be shortened.
   *
   * @post result
   * @type {string}
   */
  this.text_sms_body_short = undefined;

  /**
   * User key for which need to send the sms.
   *
   * @post post
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Sms_SmsSendModel);

/**
 * @inheritDoc
 */
Wl_Business_Sms_SmsSendModel.prototype.config=function()
{
  return {"a_field":{"dtl_send":{"post":{"result":true}},"k_business":{"post":{"post":true}},"s_key":{"post":{"post":true}},"text_sms_body":{"post":{"post":true}},"text_sms_body_short":{"post":{"result":true}},"uid":{"post":{"post":true}}}};
};

/**
 * Sends an SMS message from the business virtual phone number to a client.
 *
 * Applies smart-encoding replacements to the message body, shortens links so the client
 * receives a short link instead of the raw URL, and queues the actual sending through an
 * asynchronous task. Returns the shortened message body so the staff interface can show
 * exactly what the client will receive.
 *
 * @function
 * @name Wl_Business_Sms_SmsSendModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
