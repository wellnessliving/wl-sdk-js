/**
 * Webhook for the event when Twilio return errors.
 *
 * <b>Attention!</b>
 * You can't move this API in another namespace. This API use for webhook in the Twilio account.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Sms_Response_ResponseTwilioErrorModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Event payload information.
   *
   * @post post
   * @type {{}}
   */
  this.Payload = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Sms_Response_ResponseTwilioErrorModel);

/**
 * @inheritDoc
 */
Core_Sms_Response_ResponseTwilioErrorModel.prototype.config=function()
{
  return {"a_field": {"Payload": {"post": {"post": true}}}};
};