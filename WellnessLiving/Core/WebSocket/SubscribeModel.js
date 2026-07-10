/**
 * Checks whether a listener can subscribe to specified channel.
 * Subscribes in a case of positive result.
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
   * @type {*}
   */
  this.a_key = undefined;

  /**
   * All messages in queue. Key is a message key. Value is message data.
   *
   * When a client is initially subscribed for a WebSocket channel, entire message queue is sent to the client.
   * This is needed to send message that were generated before a client has subscribed.
   *
   * @post result
   * @type {*[]}
   */
  this.a_message_broadcast = undefined;

  /**
   * Channel controller CID.
   *
   * @post post
   * @type {number}
   */
  this.cid_channel = 0;

  /**
   * Subscriber password.
   *
   * @post post
   * @type {string}
   */
  this.s_password = "";

  /**
   * Request token.
   *
   * This token is only used for asynchronous functions, and identifies a specific request.
   *
   * @post post
   * @type {string}
   */
  this.s_token = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_WebSocket_SubscribeModel);

/**
 * @inheritDoc
 */
Core_WebSocket_SubscribeModel.prototype.config=function()
{
  return {"a_field":{"a_key":{"post":{"post":true}},"a_message_broadcast":{"post":{"result":true}},"cid_channel":{"post":{"post":true}},"s_password":{"post":{"post":true}},"s_token":{"post":{"post":true}}}};
};

/**
 * Checks whether a listener can subscribe to specified channel.
Subscribes in a case of positive result.
 *
 * Called by the WebSocket client immediately after a connection is established, to register interest in
 * a specific channel (identified by CID and key fields). If the current user is not permitted to receive
 * events on that channel, the subscription is rejected. On success, any messages already queued for the
 * channel are returned so the client does not miss events that arrived before the subscription was set up.
 *
 * @function
 * @name Core_WebSocket_SubscribeModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
