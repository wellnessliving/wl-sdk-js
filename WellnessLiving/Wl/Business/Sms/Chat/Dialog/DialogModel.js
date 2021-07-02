/**
 * Returns and updates information about sms chat with a client
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Sms_Chat_Dialog_DialogModel()
{
  WlSdk_ModelAbstract.apply(this);

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
   * Key of the business this sms chat is connected to. Primary key from {@link \RsBusinessSql}.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Key of the user sms chat is related to. Primary key from {@link \PassportLoginSql}.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Sms_Chat_Dialog_DialogModel);

/**
 * @inheritDoc
 */
Wl_Business_Sms_Chat_Dialog_DialogModel.prototype.config=function()
{
  return {"a_field": {"can_unread": {"get": {"result": true}},"is_archive": {"get": {"result": true},"post": {"post": true}},"is_mute": {"get": {"result": true},"post": {"post": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};