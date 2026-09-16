/**
 * Retrieves SMS message history with a specific client.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Sms_Chat_Dialog_MessageHistoryModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Business_Sms_Chat_Dialog_MessageHistoryModel_a_message_history_list
   * @property {string} dtl_message Date and time, when SMS messages were sent, in MySQL format.
   * @property {boolean} is_automated `true` if SMS was sent from task, `false` - if the staff member sent SMS.
   * @property {boolean} is_outbound `true` if staff member sent SMS, `false` - if the client sent the SMS.
   * @property {string} k_sms_history The key of SMS history.  table.
   * @property {string} text_date The day when SMS messages were sent.
   * @property {string} text_sender_name The sender's name.
   * @property {string} text_sms_body The body of the SMS.
   * @property {string} text_sms_type The title of the mail type.
   * @property {string} text_time The time when SMS was sent.
   * @property {?string} uid_sender The UID of the sender, `null` - if SMS sent from task.
   */

  /**
   * An array with SMS message history:
   *
   * @get result
   * @type {Wl_Business_Sms_Chat_Dialog_MessageHistoryModel_a_message_history_list}
   */
  this.a_message_history_list = undefined;

  /**
   * A count of SMS which need to return. Default value is 20.
   *
   * @get get
   * @type {number}
   */
  this.i_limit = 20;

  /**
   * Key of business for which need to get list of dialogs.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of SMS history.
   * If this key is set the API returns SMS histories that were sent before this SMS.
   * If this key isn't set the API returns the last sent 20 SMS histories.
   *
   * @get get
   * @type {string}
   */
  this.k_sms_history_last = "";

  /**
   * UID of the client for which need to get SMS message history.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Sms_Chat_Dialog_MessageHistoryModel);

/**
 * @inheritDoc
 */
Wl_Business_Sms_Chat_Dialog_MessageHistoryModel.prototype.config=function()
{
  return {"a_field":{"a_message_history_list":{"get":{"result":true}},"i_limit":{"get":{"get":true}},"k_business":{"get":{"get":true}},"k_sms_history_last":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * Retrieves SMS message history with a specific client.
 *
 * Returns up to `i_limit` messages exchanged with the client in the given business, ordered
 * from most recent to oldest. Pass `k_sms_history_last` to page backward and load older
 * messages sent before that message.
 *
 * @function
 * @name Wl_Business_Sms_Chat_Dialog_MessageHistoryModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
