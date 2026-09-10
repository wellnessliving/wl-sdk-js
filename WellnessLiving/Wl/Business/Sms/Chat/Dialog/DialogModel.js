/**
 * Retrieves information about sms chat with give user in the given business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Sms_Chat_Dialog_DialogModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * `true` if chat can be marked as archive.
   * `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.can_archive = undefined;

  /**
   * `true` if conversation can be marked as pinned.
   * `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.can_pin = undefined;

  /**
   * `true` if the last message in the chat is from client and chat can be marked read.
   * `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.can_read = undefined;

  /**
   * `true` if the last message in the chat is from client and chat can be marked unread.
   * `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.can_unread = undefined;

  /**
   * `true` if chat should be hidden on the list of chats.
   * `false` - otherwise.
   * `null` - do not change current status.
   *
   * @get result
   * @post post
   * @type {?boolean}
   */
  this.is_archive = null;

  /**
   * `true` if chat should be muted and all new messages should not fire notifications to staff members.
   * `false` - otherwise.
   * `null` - do not change current status.
   *
   * @get result
   * @post post
   * @type {?boolean}
   */
  this.is_mute = null;

  /**
   * The business key this SMS chat is connected to.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The key of the user this SMS chat is related to.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Sms_Chat_Dialog_DialogModel);

/**
 * @inheritDoc
 */
Wl_Business_Sms_Chat_Dialog_DialogModel.prototype.config=function()
{
  return {"a_field":{"can_archive":{"get":{"result":true}},"can_pin":{"get":{"result":true}},"can_read":{"get":{"result":true}},"can_unread":{"get":{"result":true}},"is_archive":{"get":{"result":true},"post":{"post":true}},"is_mute":{"get":{"result":true},"post":{"post":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"uid":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * Retrieves information about sms chat with give user in the given business.
 *
 * Loads the mute, archive, and pin state of the dialog and determines whether the last
 * message can be marked read or unread. Read state is only computed for an inbound last
 * message that was received within the visible days window; if the client has not sent
 * any message yet, only the default flags are returned.
 *
 * @function
 * @name Wl_Business_Sms_Chat_Dialog_DialogModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Retrieves information about sms chat with give user in the given business.
 *
 * Updates the dialog's archive and mute flags for the client identified by `uid` and
 * `k_business`, leaving unspecified flags unchanged. An empty chat cannot be archived.
 * Refreshes the unread SMS counter and, if any flag changed, broadcasts the update to
 * connected clients in real time.
 *
 * @function
 * @name Wl_Business_Sms_Chat_Dialog_DialogModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
