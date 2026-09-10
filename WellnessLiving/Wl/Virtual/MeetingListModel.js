/**
 * Returns the list of currently active virtual meetings.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Virtual_MeetingListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Virtual_MeetingListModel_a_meeting_list_a_staff
   * @property {string} text_staff Full name of the staff.
   * @property {string} url_photo Url photo of the staff.
   * @property {string} url_staff Url for view information about the staff.
   */

  /**
   * @typedef {{}} Wl_Virtual_MeetingListModel_a_meeting_list
   * @property {Wl_Virtual_MeetingListModel_a_meeting_list_a_staff} a_staff Information about staff. Each element has next structure:
   * @property {string} s_meeting_id Meeting id.
   * @property {string} text_date Date of the session.
   * @property {string} text_service Name of the class or service.
   * @property {string} text_time Time of the session.
   */

  /**
   * Active meeting list. Each element has next structure:
   *
   * @get result
   * @type {Wl_Virtual_MeetingListModel_a_meeting_list[]}
   */
  this.a_meeting_list = undefined;

  /**
   * `true` if can add FitLIVE licenses, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.can_add_license = undefined;

  /**
   * Number of paid FitLIVE licenses.
   *
   * @get result
   * @type {number}
   */
  this.i_license = undefined;

  /**
   * `true` if business use FitLIVE, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_fitlive = undefined;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Virtual_MeetingListModel);

/**
 * @inheritDoc
 */
Wl_Virtual_MeetingListModel.prototype.config=function()
{
  return {"a_field":{"a_meeting_list":{"get":{"result":true}},"can_add_license":{"get":{"result":true}},"i_license":{"get":{"result":true}},"is_fitlive":{"get":{"result":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * Returns the list of currently active virtual meetings.
 *
 * Loads the Zoom users configured for the business and matches them against in-progress
 * appointment or class virtual sessions, returning staff, client, and timing details for
 * each active meeting. Also reports the business's FitLIVE subscription status, licensed
 * seat count, and whether additional licenses can be purchased.
 *
 * @function
 * @name Wl_Virtual_MeetingListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
