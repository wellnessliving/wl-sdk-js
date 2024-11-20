/**
 * An endpoint that displays attendance list data.
 * Version of {@link Wl_Login_Attendance_AttendanceListModel} for access validation by security token.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Attendance_AttendanceListByTokenModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "dt_date_local,k_appointment,k_class_period,k_business";

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListByTokenModel_a_list_active_a_photo
   * @property {number} i_height The height of the photo.
   * @property {number} i_width The width of the photo.
   * @property {string} is_empty This will be <tt>true</tt> if a photo hasn't been set yet.
   * @property {string} s_url The URL of the photo.
   */
  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListByTokenModel_a_list_active
   * @property {Wl_Login_Attendance_AttendanceListByTokenModel_a_list_active_a_photo} a_photo Information about the user's photo. The information returned has the following structure:
   * <dl>
   *   <dt>int <tt>i_height</tt></dt>
   *   <dd>The height of the photo.</dd>
   *   <dt>int <tt>i_width</tt></dt>
   *   <dd>The width of the photo.</dd>
   *   <dt>string <tt>is_empty</tt></dt>
   *   <dd>This will be <tt>true</tt> if a photo hasn't been set yet.</dd>
   *   <dt>string <tt>s_url</tt></dt>
   *   <dd>The URL of the photo.</dd>
   * </dl>
   * @property {{}} a_progress Information about a user's current progress. By default, this information isn't sent.
   * @property {{}} a_resource A list of information for any associated resources for this visit.
   * @property {{}} a_wait_confirm The list of visit keys for clients on the wait list.
   * @property {{}} a_wearable A list of information pertaining to the client's wearables.
   * @property {boolean} can_profile If <tt>true</tt>, the current user can access this client profile.
   * @property {string} dt_book The date the session was booked, in UTC.
   * @property {string} dt_date The date of the session, in UTC.
   * @property {string} dt_expire The date the Purchase Option that was used will expire, in UTC.
   * @property {string} dt_register The date the client checked in for the visit, in UTC.
   * @property {string} html_age The client age.
   * @property {string} html_book_by The name of the person who booked this visit.
   * @property {string} html_gender_class The name of the icon to show under gender in the class attendance list.
   * @property {string} html_member The client's member ID, if set.
   * @property {string} html_tooltip_book_by When and where this visit was booked, along with who booked it.
   * @property {number} i The default place in the list to show this client. This is a deprecated copy of the <tt>i_order</tt> field.
   * @property {number} i_left The number of visits left on this Purchase Option. This will be <tt>NULL</tt> if there's no limit.
   * @property {number} i_order The default place in the list to show this client.
   * @property {number} i_total The total visits available from this Purchase Option.
   * @property {number} id_gender The gender ID of the client. One of the {@link AGenderSid} constants.
   * @property {number} id_pass_prospect If this visit was paid for by an external system, this ID will be set. Otherwise, it will be <tt>0</tt>.
   * @property {number} id_program The program ID of the Purchase Option. One of the {@link RsProgramSid} constants.
   * @property {number} id_visit The status of the visit. One of the {@link Wl_Visit_VisitSid} constants.
   * @property {boolean} is_attend This will be <tt>true</tt> if the client has attended the visit.
   * @property {boolean} is_duration_pass This will be <tt>true</tt> if the Purchase Option used is a duration pass.
   * @property {boolean} is_deposit This will be <tt>true</tt> if the client has paid a deposit for the visit.
   * @property {boolean} is_early This will be <tt>true</tt> if the client has canceled the visit early, incurring no penalty.
   * This will be <tt>false</tt> if canceled late or if not canceled at all.
   * @property {boolean} is_free This will be <tt>true</tt> if the visit is free.
   * @property {boolean} is_hidden This will be <tt>true</tt> if details on this visit should be hidden from staff members.
   * @property {boolean} is_penalty This will be <tt>true</tt> if this visit was cancelled late and a penalty is applied.
   * @property {boolean} is_promotion_first This will be <tt>true</tt> if this was the first visit for the Purchase Option used.
   * @property {boolean} is_promotion_last This will be <tt>true</tt> if this was the latest visit for the Purchase Option used.
   * @property {boolean} is_unlimited This will be <tt>true</tt> if the Purchase Option used has no usage limits.
   * @property {boolean} is_visit This will be <tt>true</tt> if this visit is still considered valid.
   * If visit was removed by the system or a staff member, this will be <tt>false</tt>.
   * @property {boolean} is_wait This will be <tt>true</tt> if the visit is on the waiting list.
   * @property {boolean} is_wait_confirm This will be <tt>true</tt> if the visit is awaiting confirmation.
   * @property {boolean} is_wait_priority This will be <tt>true</tt> if the visit has priority on the wait list.
   * @property {string} k_location The key of the location.
   * @property {string} k_login_promotion The key of the client's Purchase Option.
   * @property {string} k_visit The key of the visit.
   * @property {{}} [o_purchase_item] The purchase used to pay for the session.
   * @property {string} s_expire The expiry information for the Purchase Option. This field is deprecated, use the text_ version instead.
   * @property {string} s_firstname The client's first name. This field is deprecated, use the text_ version instead.
   * @property {string} s_lastname The client's last name. This field is deprecated, use the text_ version instead.
   * @property {string} s_note Any notes tied to the client. This field is deprecated, use the text_ version instead.
   * @property {string} s_promotion The description of the type of Purchase Option. This field is deprecated, use the text_ version instead.
   * @property {string} text_expire The expiry information for the Purchase Option.
   * @property {string} text_firstname The client first name.
   * @property {string} text_lastname The client last name.
   * @property {string} text_note Any notes tied to the client.
   * @property {string} text_promotion The description of the type of Purchase Option.
   * @property {string} text_restrict_title The Purchase Option restriction description. It can be empty string when the Purchase Option has no restrictions.
   * @property {string} text_visit_status_class The class visit status.
   * @property {string} text_visit_status_icon The icon to use for the class visit status.
   * @property {string} text_wearable The wearable device ID.
   * @property {string} uid The client user key.
   * @property {string} uid_book The key of the user who made the booking.
   * If differing from <tt>uid</tt>, the booking could have been made by a staff or family member.
   * @property {string} url-cancel The URL that can be used to cancel the visit.
   * @property {string} url-cancel-admin The URL that can be used by an admin to cancel the visit.
   * @property {string} url-login-view The URL that for the user's page.
   * @property {string} url-mail The URL to a page for sending an email to the client.
   * @property {string} url-profile The URL that for the client's profile.
   */

  /**
   * The list of clients in the active attendance list who haven't confirmed or canceled.
   * Each element is an array with the following fields:
   * <dl>
   *   <dt>array <var>a_photo</var></dt>
   *   <dd>
   *     Information about the user's photo. The information returned has the following structure:
   *     <dl>
   *       <dt>int <var>i_height</var></dt>
   *       <dd>The height of the photo.</dd>
   *       <dt>int <var>i_width</var></dt>
   *       <dd>The width of the photo.</dd>
   *       <dt>string <var>is_empty</var></dt>
   *       <dd>This will be <tt>true</tt> if a photo hasn't been set yet.</dd>
   *       <dt>string <var>s_url</var></dt>
   *       <dd>The URL of the photo.</dd>
   *     </dl>
   *   </dd>
   *   <dt>array <var>a_progress</var></dt>
   *   <dd>Information about a user's current progress. By default, this information isn't sent.</dd>
   *   <dt>array <var>a_resource</var></dt>
   *   <dd>A list of information for any associated resources for this visit.</dd>
   *   <dt>array <var>a_wait_confirm</var></dt>
   *   <dd>The list of visit keys for clients on the wait list.</dd>
   *   <dt>array <var>a_wearable</var></dt>
   *   <dd>A list of information pertaining to the client's wearables.</dd>
   *   <dt>bool <var>can_profile</var></dt>
   *   <dd>If <tt>true</tt>, the current user can access this client profile.</dd>
   *   <dt>string <var>dt_book</var></dt>
   *   <dd>The date the session was booked, in UTC.</dd>
   *   <dt>string <var>dt_date</var></dt>
   *   <dd>The date of the session, in UTC.</dd>
   *   <dt>string <var>dt_expire</var></dt>
   *   <dd>The date the Purchase Option that was used will expire, in UTC.</dd>
   *   <dt>string <var>dt_register</var></dt>
   *   <dd>The date the client checked in for the visit, in UTC.</dd>
   *   <dt>string <var>html_age</var></dt>
   *   <dd>The client age.</dd>
   *   <dt>string <var>html_book_by</var></dt>
   *   <dd>The name of the person who booked this visit.</dd>
   *   <dt>string <var>html_gender_class</var></dt>
   *   <dd>The name of the icon to show under gender in the class attendance list.</dd>
   *   <dt>string <var>html_member</var></dt>
   *   <dd>The client's member ID, if set.</dd>
   *   <dt>string <var>html_tooltip_book_by</var></dt>
   *   <dd>When and where this visit was booked, along with who booked it.</dd>
   *   <dt>int <var>i</var></dt>
   *   <dd>The default place in the list to show this client. This is a deprecated copy of the <tt>i_order</tt> field.</dd>
   *   <dt>int <var>i_left</var></dt>
   *   <dd>The number of visits left on this Purchase Option. This will be <tt>NULL</tt> if there's no limit.</dd>
   *   <dt>int <var>i_order</var></dt>
   *   <dd>The default place in the list to show this client.</dd>
   *   <dt>int <var>i_total</var></dt>
   *   <dd>The total visits available from this Purchase Option.</dd>
   *   <dt>int <var>id_gender</var></dt>
   *   <dd>The gender ID of the client. One of the {@link AGenderSid} constants.</dd>
   *   <dt>int <var>id_pass_prospect</var></dt>
   *   <dd>If this visit was paid for by an external system, this ID will be set. Otherwise, it will be <tt>0</tt>.</dd>
   *   <dt>int <var>id_program</var></dt>
   *   <dd>The program ID of the Purchase Option. One of the {@link RsProgramSid} constants.</dd>
   *   <dt>int <var>id_visit</var></dt>
   *   <dd>The status of the visit. One of the {@link Wl_Visit_VisitSid} constants.</dd>
   *   <dt>bool <var>is_attend</var></dt>
   *   <dd>This will be <tt>true</tt> if the client has attended the visit.</dd>
   *   <dt>bool <var>is_duration_pass</var></dt>
   *   <dd>This will be <tt>true</tt> if the Purchase Option used is a duration pass.</dd>
   *   <dt>bool <var>is_deposit</var></dt>
   *   <dd>This will be <tt>true</tt> if the client has paid a deposit for the visit.</dd>
   *   <dt>bool <var>is_early</var></dt>
   *   <dd>This will be <tt>true</tt> if the client has canceled the visit early, incurring no penalty.
   *     This will be <tt>false</tt> if canceled late or if not canceled at all.
   *   </dd>
   *   <dt>bool <var>is_free</var></dt>
   *   <dd>This will be <tt>true</tt> if the visit is free.</dd>
   *   <dt>bool <var>is_hidden</var></dt>
   *   <dd>This will be <tt>true</tt> if details on this visit should be hidden from staff members.</dd>
   *   <dt>bool <var>is_penalty</var></dt>
   *   <dd>This will be <tt>true</tt> if this visit was cancelled late and a penalty is applied.</dd>
   *   <dt>bool <var>is_promotion_first</var></dt>
   *   <dd>This will be <tt>true</tt> if this was the first visit for the Purchase Option used.</dd>
   *   <dt>bool <var>is_promotion_last</var></dt>
   *   <dd>This will be <tt>true</tt> if this was the latest visit for the Purchase Option used.</dd>
   *   <dt>bool <var>is_unlimited</var></dt>
   *   <dd>This will be <tt>true</tt> if the Purchase Option used has no usage limits.</dd>
   *   <dt>bool <var>is_visit</var></dt>
   *   <dd>This will be <tt>true</tt> if this visit is still considered valid.
   *     If visit was removed by the system or a staff member, this will be <tt>false</tt>.</dd>
   *   <dt>bool <var>is_wait</var></dt>
   *   <dd>This will be <tt>true</tt> if the visit is on the waiting list.</dd>
   *   <dt>bool <var>is_wait_confirm</var></dt>
   *   <dd>This will be <tt>true</tt> if the visit is awaiting confirmation.</dd>
   *   <dt>bool <var>is_wait_priority</var></dt>
   *   <dd>This will be <tt>true</tt> if the visit has priority on the wait list.</dd>
   *   <dt>string <var>k_location</var></dt>
   *   <dd>The key of the location.</dd>
   *   <dt>string <var>k_login_promotion</var></dt>
   *   <dd>The key of the client's Purchase Option.</dd>
   *   <dt>string <var>k_visit</var></dt>
   *   <dd>The key of the visit.</dd>
   *   <dt>array <var>[o_purchase_item]</var></dt>
   *   <dd>The purchase used to pay for the session.</dd>
   *   <dt>string <var>s_expire</var></dt>
   *   <dd>The expiry information for the Purchase Option. This field is deprecated, use the text_ version instead.</dd>
   *   <dt>string <var>s_firstname</var></dt>
   *   <dd>The client's first name. This field is deprecated, use the text_ version instead.</dd>
   *   <dt>string <var>s_lastname</var></dt>
   *   <dd>The client's last name. This field is deprecated, use the text_ version instead.</dd>
   *   <dt>string <var>s_note</var></dt>
   *   <dd>Any notes tied to the client. This field is deprecated, use the text_ version instead.</dd>
   *   <dt>string <var>s_promotion</var></dt>
   *   <dd>The description of the type of Purchase Option. This field is deprecated, use the text_ version instead.</dd>
   *   <dt>string <var>text_expire</var></dt>
   *   <dd>The expiry information for the Purchase Option.</dd>
   *   <dt>string <var>text_firstname</var></dt>
   *   <dd>The client first name.</dd>
   *   <dt>string <var>text_lastname</var></dt>
   *   <dd>The client last name.</dd>
   *   <dt>string <var>text_note</var></dt>
   *   <dd>Any notes tied to the client.</dd>
   *   <dt>string <var>text_promotion</var></dt>
   *   <dd>The description of the type of Purchase Option.</dd>
   *   <dt>string <var>text_restrict_title</var></dt>
   *   <dd>The Purchase Option restriction description. It can be empty string when the Purchase Option has no restrictions.</dd>
   *   <dt>string <var>text_visit_status_class</var></dt>
   *   <dd>The class visit status.</dd>
   *   <dt>string <var>text_visit_status_icon</var></dt>
   *   <dd>The icon to use for the class visit status.</dd>
   *   <dt>string <var>text_wearable</var></dt>
   *   <dd>The wearable device ID.</dd>
   *   <dt>string <var>uid</var></dt>
   *   <dd>The client user key.</dd>
   *   <dt>string <var>uid_book</var></dt>
   *   <dd>
   *     The key of the user who made the booking.
   *     If differing from <tt>uid</tt>, the booking could have been made by a staff or family member.
   *   </dd>
   *   <dt>string <var>url-cancel</var></dt>
   *   <dd>The URL that can be used to cancel the visit.</dd>
   *   <dt>string <var>url-cancel-admin</var></dt>
   *   <dd>The URL that can be used by an admin to cancel the visit.</dd>
   *   <dt>string <var>url-login-view</var></dt>
   *   <dd>The URL that for the user's page.</dd>
   *   <dt>string <var>url-mail</var></dt>
   *   <dd>The URL to a page for sending an email to the client.</dd>
   *   <dt>string <var>url-profile</var></dt>
   *   <dd>The URL that for the client's profile.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Login_Attendance_AttendanceListByTokenModel_a_list_active[]}
   */
  this.a_list_active = undefined;

  /**
   * The list of clients who have confirmed their attendance.
   * Has the same structure as {@link Wl_Login_Attendance_AttendanceListModel.a_list_active} property.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_list_confirm = undefined;

  /**
   * The list of clients who are on the wait list.
   * Has the same structure as {@link Wl_Login_Attendance_AttendanceListModel.a_list_active} property.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_list_wait = undefined;

  /**
   * The local date of the class or event session.
   *
   * @get get
   * @type {string}
   */
  this.dt_date_local = "";

  /**
   * The maximum capacity of the class or event session.
   *
   * @get result
   * @type {number}
   */
  this.i_capacity = undefined;

  /**
   * Count client on the attendance.
   *
   * @get result
   * @type {number}
   */
  this.i_client = undefined;

  /**
   * If <tt>true</tt>, then return the purchase used to pay for session.
   * Otherwise <tt>false</tt>, do not return any purchase information.
   *
   * @get get
   * @type {boolean}
   */
  this.is_purchase_info_return = false;

  /**
   * The appointment key. Not used if requesting information for a class or event session.
   *
   * @get get
   * @type {string}
   */
  this.k_appointment = "0";

  /**
   * The business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The class period key. Not used if requesting information for an appointment.
   *
   * @get get
   * @type {string}
   */
  this.k_class_period = "0";

  /**
   * The Location key.
   *
   * @get result
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * The security token.
   *
   * @get get
   * @type {string}
   */
  this.text_token = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Attendance_AttendanceListByTokenModel);

/**
 * @inheritDoc
 */
Wl_Login_Attendance_AttendanceListByTokenModel.prototype.config=function()
{
  return {"a_field": {"a_list_active": {"get": {"result": true}},"a_list_confirm": {"get": {"result": true}},"a_list_wait": {"get": {"result": true}},"dt_date_local": {"get": {"get": true}},"i_capacity": {"get": {"result": true}},"i_client": {"get": {"result": true}},"is_purchase_info_return": {"get": {"get": true}},"k_appointment": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_class_period": {"get": {"get": true}},"k_location": {"get": {"result": true}},"text_token": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Login_Attendance_AttendanceListByTokenModel.instanceGet
 * @param {string} dt_date_local The local date of the class or event session.
 * @param {string} k_appointment The appointment key. Not used if requesting information for a class or event session.
 * @param {string} k_class_period The class period key. Not used if requesting information for an appointment.
 * @param {string} k_business The business key.
 * @returns {Wl_Login_Attendance_AttendanceListByTokenModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */