/**
 * Webhook for the event when the client reply to sent SMS to them.
 *
 * <b>Attention!</b>
 * You can't move this API in another namespace. This API use for webhook in the Twilio account.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Sms_Response_ResponseTwilioModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The phone number of the user who received SMS.
   *
   * @post post
   * @type {string}
   */
  this.From = undefined;

  /**
   * The phone number user who sent SMS.
   *
   * @post post
   * @type {string}
   */
  this.To = undefined;

  /**
   * Body of the SMS.
   *
   * @post post
   * @type {string}
   */
  this.Body = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Sms_Response_ResponseTwilioModel);

/**
 * @inheritDoc
 */
Core_Sms_Response_ResponseTwilioModel.prototype.config=function()
{
  return {"a_field": {"From": {"post": {"post": true}},"To": {"post": {"post": true}},"Body": {"post": {"post": true}}}};
};