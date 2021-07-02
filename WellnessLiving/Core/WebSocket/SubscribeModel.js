/**
 * Checks whether a listener can subscribe to specified channel.
 *
 * If yes, subscribes it.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_WebSocket_SubscribeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Keys of the channel.
   *
   * Key is name of a key field in a channel controller.
   * Value is its value.
   *
   * Subscriber will only receive notifications about events in which all these values equal values specified here.
   *
   * @post post
   * @type {{}}
   */
  this.a_key = [];

  /**
   * All messages in queue. Key is a message key. Value is message data.
   *
   * When a client is initially subscribed for a WebSocket channel, entire message queue is sent to the client.
   * This is needed to send message that were generated before a client has subscribed.
   *
   * @post result
   * @type {{}}
   */
  this.a_message_broadcast = [];

  /**
   * Channel controller CID.
   *
   * @post post
   * @type {number}
   */
  this.cid_channel = undefined;

  /**
   * Key of the last websocket message that was received by a browser.
   * Primary key in the {@link WebSocketChannelMessageSql} table.
   *
   * @post post
   * @type {string}
   */
  this.k_channel_message = undefined;

  /**
   * Subscriber password.
   *
   * @post post
   * @type {string}
   */
  this.s_password = undefined;

  /**
   * Request token.
   *
   * This token is only used for asynchronous functions, and identifies a specific request.
   *
   * @post post
   * @type {string}
   */
  this.s_token = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_WebSocket_SubscribeModel);

/**
 * @inheritDoc
 */
Core_WebSocket_SubscribeModel.prototype.config=function()
{
  return {"a_field": {"a_key": {"post": {"post": true}},"a_message_broadcast": {"post": {"result": true}},"cid_channel": {"post": {"post": true}},"k_channel_message": {"post": {"post": true}},"s_password": {"post": {"post": true}},"s_token": {"post": {"post": true}}}};
};