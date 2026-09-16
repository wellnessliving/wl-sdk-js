/**
 * Retrieves the list of SMS chat dialogs for a business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Sms_Chat_Dialog_DialogListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Business_Sms_Chat_Dialog_DialogListModel_a_dialog_list
   * @property {number} i_unread_sms A count of unread messages from the client.
   * @property {string} text_client The name of the client.
   * @property {string} text_date_last_sms Date when was received the last SMS from the client.
   * @property {string} text_last_sms The text of the last SMS from the client.
   * @property {string} uid UID of the client.  table.
   * @property {string} url_profile The link to profile the client.
   * @property {string} url_profile_logo The link to logo the client.
   */

  /**
   * A list of clients' dialogs. Value has following structure:
   *
   * @get result
   * @type {Wl_Business_Sms_Chat_Dialog_DialogListModel_a_dialog_list}
   */
  this.a_dialog_list = undefined;

  /**
   * The date with time of the last sent SMS.
   * If date is set the API returns dialog list where date last SMS is less than this date.
   * If date isn't set the API returns the last dialog list.
   *
   * @get get
   * @type {string}
   */
  this.dtl_last_activity = "";

  /**
   * Key of business for which need to get list of dialogs.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * String with filter criteria.
   *
   * @get get
   * @type {string}
   */
  this.s_filter = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Sms_Chat_Dialog_DialogListModel);

/**
 * @inheritDoc
 */
Wl_Business_Sms_Chat_Dialog_DialogListModel.prototype.config=function()
{
  return {"a_field":{"a_dialog_list":{"get":{"result":true}},"dtl_last_activity":{"get":{"get":true}},"k_business":{"get":{"get":true}},"s_filter":{"get":{"get":true}}}};
};

/**
 * Retrieves the list of SMS chat dialogs for a business.
 *
 * Returns dialogs ordered by the date of the last SMS activity, optionally narrowed by
 * `s_filter` criteria (location, login type, date range, and dialog status) and paginated
 * using `dtl_last_activity` as a cursor for loading older results.
 *
 * @function
 * @name Wl_Business_Sms_Chat_Dialog_DialogListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
