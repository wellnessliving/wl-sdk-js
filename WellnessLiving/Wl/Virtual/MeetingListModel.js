/**
 * Retrieves currently active meetings.
 *
 * This model is generated automatically based on API.
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
   * @property {Wl_Virtual_MeetingListModel_a_meeting_list_a_staff[]} a_staff Information about staff. Each element has next structure: <dl>
   *   <dt>string <tt>text_staff</tt></dt>
   *   <dd>Full name of the staff.</dd>
   *   <dt>string <tt>url_photo</tt></dt>
   *   <dd>Url photo of the staff.</dd>
   *   <dt>string <tt>url_staff</tt></dt>
   *   <dd>Url for view information about the staff.</dd>
   * </dl>
   * @property {string} text_service Name of the class or service.
   * @property {string} text_date Date of the session.
   * @property {string} text_time Time of the session.
   * @property {string} s_meeting_id Meeting id.
   */

  /**
   * Active meeting list. Each element has next structure: <dl>
   *   <dt>array[] <var>a_staff</var></dt>
   *   <dd>
   *     Information about staff. Each element has next structure: <dl>
   *       <dt>string <var>text_staff</var></dt>
   *       <dd>Full name of the staff.</dd>
   *       <dt>string <var>url_photo</var></dt>
   *       <dd>Url photo of the staff.</dd>
   *       <dt>string <var>url_staff</var></dt>
   *       <dd>Url for view information about the staff.</dd>
   *     </dl>
   *   </dd>
   *   <dt>string <var>text_service</var></dt>
   *   <dd>Name of the class or service.</dd>
   *   <dt>string <var>text_date</var></dt>
   *   <dd>Date of the session.</dd>
   *   <dt>string <var>text_time</var></dt>
   *   <dd>Time of the session.</dd>
   *   <dt>string <var>s_meeting_id</var></dt>
   *   <dd>Meeting id.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Virtual_MeetingListModel_a_meeting_list[]}
   */
  this.a_meeting_list = [];

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Virtual_MeetingListModel);

/**
 * @inheritDoc
 */
Wl_Virtual_MeetingListModel.prototype.config=function()
{
  return {"a_field": {"a_meeting_list": {"get": {"result": true}},"k_business": {"get": {"get": true}}}};
};