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
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_A
   * @property {number} id_visit Possible states of the visit: book, attended, cancelled, etc.
   * @property {string} k_business Key of a business.
   * @property {string} uid Key of the user.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_B
   * @property {string} k_business Business key.
   * @property {string} uid_receiver User key who will receive message.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_C
   * @property {string} k_channel Messenger channel key.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_D
   * @property {string} k_business Key of a business.
   * @property {string} uid_receiver Key of the user.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_E
   * @property {string} dtu_class_period Class schedule session date.
   * @property {string} k_appointment Appointment key.
   * @property {string} k_business Business key.
   * @property {string} k_class_period Class schedule key.
   * @property {string} k_visit Visit key.
   * @property {string} s_secret Visit secret key.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_F
   * @property {?string} k_business Key of a business to which report to subscribe.
   * @property {string} s_report Key of a report to subscribe to.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_G
   * @property {string} k_business Business key.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_H
   * @property {string} k_business Key of a business.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_I
   * @property {string} k_business Business in which the report was generated.
   * @property {string} uid User who requested the report generation.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_J
   * @property {number} id_report A list of reports.
   * @property {string} k_business Business key in which the report was monitoring.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_K
   * @property {string} k_business Key of the business.
   * @property {string} uid UID of the client for which failed to send SMS.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_L
   * @property {string} k_business Business key.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_M
   * @property {string} k_business Business key.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_N
   * @property {string} k_business Business key.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_O
   * @property {string} k_business Key of the business.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_P
   * @property {string} k_business Business key.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_Q
   * @property {string} k_location Location where session booked or cancelled.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_R
   * @property {string} k_business Key of the business.
   * @property {string} uid_actor Key of the actor.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_S
   * @property {number} id_import_custom List of all custom imports that are supported by system. Each constant defines specific import. Note that if you are adding new constant you should also add new class which should extend {@link Wl_Import_Custom_CustomPerformAbstract} with appropriate name according to constant name, see {@link Wl_Import_Custom_Contact_CustomContact}.
   * @property {string} k_business Business key within which import is progressing.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_T
   * @property {string} k_business Business key.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_U
   * @property {string} k_business Business key.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_V
   * @property {string} k_business Key of the business.
   * @property {string} k_business_merchant Key of the business merchant.
   * @property {string} k_pay_transaction Pay transaction key, which was used to create ticket.
   * @property {string} s_ticket_id Gateway Ticket ID.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_W
   * @property {string} k_business Key of the business.
   * @property {string} uid_actor Key of the actor.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_X
   * @property {string} uid_response Key of user who can grant access to location.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_Y
   * @property {string} k_location Location key.
   * @property {string} uid User-receiver of response.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_Z
   * @property {string} k_location Key of location access to which was requested.
   * @property {string} uid_request Key of user who requested access to location.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_26
   * @property {string} k_business Business key.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_27
   * @property {string} k_business Business key.
   * @property {string} s_id Key of the task where addresses should be verified.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_28
   * @property {string} k_business Key of the business.
   * @property {string} k_business_merchant Key of the business merchant.
   * @property {string} k_pay_transaction Pay transaction key, which was used to create ticket.
   * @property {string} s_exchange_identification Gateway exchange identification.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_29
   * @property {string} k_business Key of the business.
   * @property {string} uid_receiver Key of the user.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_30
   * @property {string} k_business Key of the business.
   * @property {string} uid UID of the client.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_31
   * @property {string} k_business Business key.
   */

  /**
   * Keys of the channel.
   *
   * Key is name of a key field in a channel controller.
   * Value is its value.
   *
   * Subscriber will only receive notifications about events in which all these values equal values specified here.
   *
   * @post post
   * @type {Core_WebSocket_SubscribeModel_a_key_A|Core_WebSocket_SubscribeModel_a_key_B|Core_WebSocket_SubscribeModel_a_key_C|Core_WebSocket_SubscribeModel_a_key_D|{}|Core_WebSocket_SubscribeModel_a_key_E|Core_WebSocket_SubscribeModel_a_key_F|Core_WebSocket_SubscribeModel_a_key_G|Core_WebSocket_SubscribeModel_a_key_H|Core_WebSocket_SubscribeModel_a_key_I|Core_WebSocket_SubscribeModel_a_key_J|Core_WebSocket_SubscribeModel_a_key_K|Core_WebSocket_SubscribeModel_a_key_L|Core_WebSocket_SubscribeModel_a_key_M|Core_WebSocket_SubscribeModel_a_key_N|Core_WebSocket_SubscribeModel_a_key_O|Core_WebSocket_SubscribeModel_a_key_P|Core_WebSocket_SubscribeModel_a_key_Q|Core_WebSocket_SubscribeModel_a_key_R|Core_WebSocket_SubscribeModel_a_key_S|Core_WebSocket_SubscribeModel_a_key_T|Core_WebSocket_SubscribeModel_a_key_U|Core_WebSocket_SubscribeModel_a_key_V|Core_WebSocket_SubscribeModel_a_key_W|Core_WebSocket_SubscribeModel_a_key_X|Core_WebSocket_SubscribeModel_a_key_Y|Core_WebSocket_SubscribeModel_a_key_Z|Core_WebSocket_SubscribeModel_a_key_26|Core_WebSocket_SubscribeModel_a_key_27|Core_WebSocket_SubscribeModel_a_key_28|Core_WebSocket_SubscribeModel_a_key_29|Core_WebSocket_SubscribeModel_a_key_30|Core_WebSocket_SubscribeModel_a_key_31}
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
