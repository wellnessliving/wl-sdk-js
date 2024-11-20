/**
 * API for testing.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Virtual_Zoom_Webhook_Test_TestWebhookModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Event payload information.
   *
   * @post post
   * @type {{}}
   */
  this.payload = undefined;

  /**
   * Event type.
   *
   * @post post
   * @type {string}
   */
  this.event = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Virtual_Zoom_Webhook_Test_TestWebhookModel);

/**
 * @inheritDoc
 */
Wl_Virtual_Zoom_Webhook_Test_TestWebhookModel.prototype.config=function()
{
  return {"a_field": {"payload": {"post": {"post": true}},"event": {"post": {"post": true}}}};
};