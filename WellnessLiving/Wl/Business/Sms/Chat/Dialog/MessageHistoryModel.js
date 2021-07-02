/**
 * API for get SMS message history with the specific client in 2-way SMS chat.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Sms_Chat_Dialog_MessageHistoryModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Business_Sms_Chat_Dialog_MessageHistoryModel_a_message_history_list
   * @property {string} is_automated <tt>true</tt> if SMS was sent from task, <tt>false</tt> - if the staff member sent SMS.
   * @property {string} is_outbound <tt>true</tt> if staff member sent SMS, <tt>false</tt> - if the client sent the SMS.
   * @property {string} k_sms_history The key of SMS history. Primary key in {@link \ASmsHistorySql} table.
   * @property {string} text_date The day when SMS messages were sent.
   * @property {string} text_sender_name The sender's name.
   * @property {string} text_sms_body The body of the SMS.
   * @property {string} text_sms_type The title of the mail type.
   * @property {string} text_time The time when SMS was sent.
   * @property {?string} uid_sender The UID of the sender, <tt>null</tt> - if SMS sent from task.
   */

  /**
   * An array with SMS message history: <dl>
   *   <dt>string <var>is_automated</var></dt>
   *   <dd><tt>true</tt> if SMS was sent from task, <tt>false</tt> - if the staff member sent SMS.</dd>
   *   <dt>string <var>is_outbound</var></dt>
   *   <dd><tt>true</tt> if staff member sent SMS, <tt>false</tt> - if the client sent the SMS.</dd>
   *   <dt>string <var>k_sms_history</var></dt>
   *   <dd>The key of SMS history. Primary key in {@link \ASmsHistorySql} table.</dd>
   *   <dt>string <var>text_date</var></dt>
   *   <dd>The day when SMS messages were sent.</dd>
   *   <dt>string <var>text_sender_name</var></dt>
   *   <dd>The sender's name.</dd>
   *   <dt>string <var>text_sms_body</var></dt>
   *   <dd>The body of the SMS.</dd>
   *   <dt>string <var>text_sms_type</var></dt>
   *   <dd>The title of the mail type.</dd>
   *   <dt>string <var>text_time</var></dt>
   *   <dd>The time when SMS was sent.</dd>
   *   <dt>string|null <var>uid_sender</var></dt>
   *   <dd>The UID of the sender, <tt>null</tt> - if SMS sent from task.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Business_Sms_Chat_Dialog_MessageHistoryModel_a_message_history_list}
   */
  this.a_message_history_list = [];

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
  this.k_business = undefined;

  /**
   * Key of SMS history.
   * If this key is set the API returns SMS histories that were sent before this SMS.
   * If this key isn't set the API returns the last sent 20 SMS histories.
   *
   * @get get
   * @type {string}
   */
  this.k_sms_history_last = "0";

  /**
   * UID of the client for which need to get SMS message history.
   *
   * @get get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Sms_Chat_Dialog_MessageHistoryModel);

/**
 * @inheritDoc
 */
Wl_Business_Sms_Chat_Dialog_MessageHistoryModel.prototype.config=function()
{
  return {"a_field": {"a_message_history_list": {"get": {"result": true}},"i_limit": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_sms_history_last": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};