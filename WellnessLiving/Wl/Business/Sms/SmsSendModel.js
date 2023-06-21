/**
 * The API for send messages from the virtual phone number of the business.
 *
 * This model is generated automatically based on API.
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
   * @post result,error
   * @type {string}
   */
  this.dtl_send = undefined;

  /**
   * Key of the business.
   *
   * @post post
   * @type {string}
   */
  this.k_business = undefined;

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
   * User key for which need to send the sms.
   *
   * @post post
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Sms_SmsSendModel);

/**
 * @inheritDoc
 */
Wl_Business_Sms_SmsSendModel.prototype.config=function()
{
  return {"a_field": {"dtl_send": {"post": {"result": true,"error": true}},"k_business": {"post": {"post": true}},"s_key": {"post": {"post": true}},"text_sms_body": {"post": {"post": true}},"uid": {"post": {"post": true}}}};
};