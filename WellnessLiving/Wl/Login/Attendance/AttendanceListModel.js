/**
 * Returns the attendance list for a class period or appointment session.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Attendance_AttendanceListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "dt_date_local,k_appointment,k_class_period,k_business";

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_active_a_info_a_icon
   * @property {string} s_color_background Color of background.
   * @property {string} s_color_foreground Color of letter.
   * @property {string} s_letter Icon letter.
   * @property {string} s_shape Symbol from font of shapes.
   * @property {string} s_title Title.
   * @property {string} sid_shape SID of the icon type shape. Constant from {@link Wl_Login_Type_ShapeSid}.
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_active_a_info_a_vaccination_status
   * @property {string} sid_vaccination_status Vaccination status sid. Result from {@link Wl_Login_Member_VaccinationStatus_VaccinationStatusSid} method.
   * @property {string} text_vaccination_status Vaccination status.
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_active_a_info_a_note
   * @property {string} html_note HTML text ready to be pasted in browser.
   * @property {boolean} is_flag `true` if this note has a flag; `false` otherwise.
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_active_a_info
   * @property {Wl_Login_Attendance_AttendanceListModel_a_list_active_a_info_a_icon} a_icon List of icons with additional information about business member.
   * @property {Wl_Login_Attendance_AttendanceListModel_a_list_active_a_info_a_note} a_note List of client's notes. Every element has keys:
   * @property {Wl_Login_Attendance_AttendanceListModel_a_list_active_a_info_a_vaccination_status} a_vaccination_status Information about users vaccination status.
   * @property {string} html_credit Amount the client owns to the business.
   * @property {string} html_note User`s login notes.</dd>
   * @property {boolean} is_task_active `true` if for user exists not completed tasks.
   * @property {boolean} is_task_urgent `true` if for user exists urgent tasks.
   * @property {boolean} is_waiver `true` if client has not agreed with online waiver.
   * @property {string} k_currency Currency of business `$k_business`.
   * @property {string} m_credit User's account balance.
   * @property {boolean} show_amount Display user balance or not.
   * @property {string} text_address User's address.
   * @property {string} text_age Users age. Appears only on the day of birth.
   * @property {string} text_firstname Users first name.
   * @property {string} text_mail User's email.
   * @property {string} text_phone User's cell phone.
   * @property {string} text_visit_credit Link to the page with client's attendance.
   * @property {string} url_attendance Link to the page with information about client's account balance.
   * @property {string} url_billing Link to user's billing page.
   * @property {string} url_contract Link to user's contract page
   * @property {string} url_form Link to user's forms page.
   * @property {string} url_overview Link to the client's overview page. Empty if for user not existing active or urgent tasks.
   * @property {string} url_profile Link to user's profile.
   * @property {string} url_waiver Link to user's waiver page.
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_active_a_photo
   * @property {number} i_height The height of the photo.
   * @property {number} i_width The width of the photo.
   * @property {boolean} is_empty This will be `true` if a photo hasn't been set yet.
   * @property {string} s_url The URL of the photo.
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_active_a_progress
   * @property {number} id_field List of progress log fields.
   * @property {number} id_measurement_unit Possible measurement units of the progress fields values.
   * @property {number} id_type Possible types of the progress fields values.
   * @property {string} k_field Field key.
   * @property {string} text_name Translated field name.
   * @property {string} x_value Progress field log value.
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_active_a_quiz
   * @property {number} id_status List of response statuses.
   * @property {boolean} is_hide Whether it's hidden. `true` quiz is hidden, `false` otherwise.
   * @property {boolean} is_require Whether it's required. `true` quiz is required, `false` otherwise.
   * @property {string} k_quiz Quiz key.
   * @property {string} k_quiz_login Quiz login key.
   * @property {string} k_quiz_response Quiz response key.
   * @property {string} text_title Quiz title.
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_active_a_resource
   * @property {number} i_index Index of the resource among multiple assets. `0` if the resource was booked from the wait list.
   * @property {string} k_resource Resource key.
   * @property {string} text_alias Resource layout alias.
   * @property {string} text_title Resource title.
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_active_a_wait_confirm
   * @property {string} s_day The formatted date string (for example, "Monday, Nov 08, 2021").
   * @property {string} s_time The formatted time string (for example, "10:00 AM").
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_active_a_wearable
   * @property {number} id_type List of sensor types.
   * @property {boolean} is_remove `true` if the device has been removed.
   * @property {string} s_sensor Sensor identifier. Also used as the array key.
   * @property {string} text_name Device name.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_active
   * @property {Wl_Login_Attendance_AttendanceListModel_a_list_active_a_info} a_info Information about member.
   * @property {Wl_Login_Attendance_AttendanceListModel_a_list_active_a_photo} a_photo Information about the user's photo. The information returned has the following structure:
   * @property {Wl_Login_Attendance_AttendanceListModel_a_list_active_a_progress} a_progress Information about a user's current progress. By default, this information isn't sent.
   * @property {Wl_Login_Attendance_AttendanceListModel_a_list_active_a_quiz} a_quiz Quiz information that concerns current visit.
   * @property {Wl_Login_Attendance_AttendanceListModel_a_list_active_a_resource} a_resource A list of information for any associated resources for this visit. Each element:
   * @property {Wl_Login_Attendance_AttendanceListModel_a_list_active_a_wait_confirm} a_wait_confirm The date and time when the client transitioned from the wait list to the active list, in human-readable format. Empty array if the visit is not awaiting confirmation. Each element:
   * @property {Wl_Login_Attendance_AttendanceListModel_a_list_active_a_wearable} a_wearable A list of information pertaining to the client's wearables.
   * @property {boolean} can_profile If `true`, the current user can access this client profile.
   * @property {string} dt_book The date the session was booked, in UTC.
   * @property {string} dt_date The date of the session, in UTC.
   * @property {string} dt_expire The date the Purchase Option that was used will expire, in UTC.
   * @property {string} dt_register The date the client checked in for the visit, in UTC.
   * @property {string} html_age The client age.
   * @property {string} html_book_by The name of the person who booked this visit.
   * @property {string} html_gender_class The name of the icon to show under gender in the class attendance list.
   * @property {string} html_member The client's member ID, if set.
   * @property {string} html_tooltip_book_by When and where this visit was booked, along with who booked it.
   * @property {number} i The default place in the list to show this client. This is a deprecated copy of the `i_order` field.
   * @property {number} i_left The number of visits left on this Purchase Option. This will be `NULL` if there's no limit.
   * @property {number} i_order The default place in the list to show this client.
   * @property {number} i_total The total visits available from this Purchase Option.
   * @property {number} i_visit_return Number of purchase option usages that was returned to user.
   * @property {number} id_gender String identifiers for gender.
   * @property {number} id_pass_prospect List foreign sites that can pay for visits.
   * @property {number} id_program Program types.
   * @property {number} id_visit Possible states of the visit: book, attended, cancelled, etc.
   * @property {boolean} is_attend This will be `true` if the client has attended the visit.
   * @property {boolean} is_deposit This will be `true` if the client has paid a deposit for the visit.
   * @property {boolean} is_duration_pass This will be `true` if the Purchase Option used is a duration pass.
   * @property {boolean} is_early This will be `true` if the client has canceled the visit early, incurring no penalty. This will be `false` if canceled late or if not canceled at all.
   * @property {boolean} is_free This will be `true` if the visit is free.
   * @property {boolean} is_hidden This will be `true` if details on this visit should be hidden from staff members.
   * @property {boolean} is_penalty This will be `true` if this visit was cancelled late and a penalty is applied.
   * @property {boolean} is_promotion_first This will be `true` if this was the first visit for the Purchase Option used.
   * @property {boolean} is_promotion_last This will be `true` if this was the latest visit for the Purchase Option used.
   * @property {boolean} is_unlimited This will be `true` if the Purchase Option used has no usage limits.
   * @property {boolean} is_visit This will be `true` if this visit is still considered valid. If visit was removed by the system or a staff member, this will be `false`.
   * @property {boolean} is_wait This will be `true` if the visit is on the waiting list.
   * @property {boolean} is_wait_confirm This will be `true` if the visit is awaiting confirmation.
   * @property {boolean} is_wait_priority This will be `true` if the visit has priority on the wait list.
   * @property {string} k_location The key of the location.
   * @property {string} k_login_promotion The key of the client's Purchase Option.
   * @property {string} k_visit The key of the visit.
   * @property {?string} o_purchase_item The purchase used to pay for the session. Instance of [PurchaseListElementApi](/Wl/Profile/PurchaseList/PurchaseListElement.json). `null` if the visit has no associated purchase or access is denied. Only present when `is_purchase_info_return` is `true`.
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
   * @property {string} text_promotion_return Title of purchase option usages of that was returned to user.
   * @property {string} text_restrict_title The Purchase Option restriction description. It can be empty string when the Purchase Option has no restrictions.
   * @property {string} text_visit_status_class The class visit status.
   * @property {string} text_visit_status_icon The icon to use for the class visit status.
   * @property {string} text_wearable The wearable device ID.
   * @property {string} uid The client user key.
   * @property {string} uid_book The key of the user who made the booking. If differing from `uid`, the booking could have been made by a staff or family member.
   * @property {string} url-cancel The URL that can be used to cancel the visit.
   * @property {string} url-cancel-admin The URL that can be used by an admin to cancel the visit.
   * @property {string} url-login-view The URL that for the user's page.
   * @property {string} url-mail The URL to a page for sending an email to the client.
   * @property {string} url-profile The URL that for the client's profile.
   */

  /**
   * The list of clients in the active attendance list who haven't confirmed or canceled.
   * Each element is an array with the following fields:
   *
   * @get result
   * @type {Wl_Login_Attendance_AttendanceListModel_a_list_active[]}
   */
  this.a_list_active = undefined;

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_confirm_a_info_a_icon
   * @property {string} s_color_background Color of background.
   * @property {string} s_color_foreground Color of letter.
   * @property {string} s_letter Icon letter.
   * @property {string} s_shape Symbol from font of shapes.
   * @property {string} s_title Title.
   * @property {string} sid_shape SID of the icon type shape. Constant from {@link Wl_Login_Type_ShapeSid}.
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_confirm_a_info_a_vaccination_status
   * @property {string} sid_vaccination_status Vaccination status sid. Result from {@link Wl_Login_Member_VaccinationStatus_VaccinationStatusSid} method.
   * @property {string} text_vaccination_status Vaccination status.
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_confirm_a_info_a_note
   * @property {string} html_note HTML text ready to be pasted in browser.
   * @property {boolean} is_flag `true` if this note has a flag; `false` otherwise.
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_confirm_a_info
   * @property {Wl_Login_Attendance_AttendanceListModel_a_list_confirm_a_info_a_icon} a_icon List of icons with additional information about business member.
   * @property {Wl_Login_Attendance_AttendanceListModel_a_list_confirm_a_info_a_note} a_note List of client's notes. Every element has keys:
   * @property {Wl_Login_Attendance_AttendanceListModel_a_list_confirm_a_info_a_vaccination_status} a_vaccination_status Information about users vaccination status.
   * @property {string} html_credit Amount the client owns to the business.
   * @property {string} html_note User`s login notes.</dd>
   * @property {boolean} is_task_active `true` if for user exists not completed tasks.
   * @property {boolean} is_task_urgent `true` if for user exists urgent tasks.
   * @property {boolean} is_waiver `true` if client has not agreed with online waiver.
   * @property {string} k_currency Currency of business `$k_business`.
   * @property {string} m_credit User's account balance.
   * @property {boolean} show_amount Display user balance or not.
   * @property {string} text_address User's address.
   * @property {string} text_age Users age. Appears only on the day of birth.
   * @property {string} text_firstname Users first name.
   * @property {string} text_mail User's email.
   * @property {string} text_phone User's cell phone.
   * @property {string} text_visit_credit Link to the page with client's attendance.
   * @property {string} url_attendance Link to the page with information about client's account balance.
   * @property {string} url_billing Link to user's billing page.
   * @property {string} url_contract Link to user's contract page
   * @property {string} url_form Link to user's forms page.
   * @property {string} url_overview Link to the client's overview page. Empty if for user not existing active or urgent tasks.
   * @property {string} url_profile Link to user's profile.
   * @property {string} url_waiver Link to user's waiver page.
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_confirm_a_photo
   * @property {number} i_height The height of the photo.
   * @property {number} i_width The width of the photo.
   * @property {boolean} is_empty This will be `true` if a photo hasn't been set yet.
   * @property {string} s_url The URL of the photo.
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_confirm_a_progress
   * @property {number} id_field List of progress log fields.
   * @property {number} id_measurement_unit Possible measurement units of the progress fields values.
   * @property {number} id_type Possible types of the progress fields values.
   * @property {string} k_field Field key.
   * @property {string} text_name Translated field name.
   * @property {string} x_value Progress field log value.
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_confirm_a_quiz
   * @property {number} id_status List of response statuses.
   * @property {boolean} is_hide Whether it's hidden. `true` quiz is hidden, `false` otherwise.
   * @property {boolean} is_require Whether it's required. `true` quiz is required, `false` otherwise.
   * @property {string} k_quiz Quiz key.
   * @property {string} k_quiz_login Quiz login key.
   * @property {string} k_quiz_response Quiz response key.
   * @property {string} text_title Quiz title.
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_confirm_a_resource
   * @property {number} i_index Index of the resource among multiple assets. `0` if the resource was booked from the wait list.
   * @property {string} k_resource Resource key.
   * @property {string} text_alias Resource layout alias.
   * @property {string} text_title Resource title.
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_confirm_a_wait_confirm
   * @property {string} s_day The formatted date string (for example, "Monday, Nov 08, 2021").
   * @property {string} s_time The formatted time string (for example, "10:00 AM").
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_confirm_a_wearable
   * @property {number} id_type List of sensor types.
   * @property {boolean} is_remove `true` if the device has been removed.
   * @property {string} s_sensor Sensor identifier. Also used as the array key.
   * @property {string} text_name Device name.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_confirm
   * @property {Wl_Login_Attendance_AttendanceListModel_a_list_confirm_a_info} a_info Information about member.
   * @property {Wl_Login_Attendance_AttendanceListModel_a_list_confirm_a_photo} a_photo Information about the user's photo. The information returned has the following structure:
   * @property {Wl_Login_Attendance_AttendanceListModel_a_list_confirm_a_progress} a_progress Information about a user's current progress. By default, this information isn't sent.
   * @property {Wl_Login_Attendance_AttendanceListModel_a_list_confirm_a_quiz} a_quiz Quiz information that concerns current visit.
   * @property {Wl_Login_Attendance_AttendanceListModel_a_list_confirm_a_resource} a_resource A list of information for any associated resources for this visit. Each element:
   * @property {Wl_Login_Attendance_AttendanceListModel_a_list_confirm_a_wait_confirm} a_wait_confirm The date and time when the client transitioned from the wait list to the active list, in human-readable format. Empty array if the visit is not awaiting confirmation. Each element:
   * @property {Wl_Login_Attendance_AttendanceListModel_a_list_confirm_a_wearable} a_wearable A list of information pertaining to the client's wearables.
   * @property {boolean} can_profile If `true`, the current user can access this client profile.
   * @property {string} dt_book The date the session was booked, in UTC.
   * @property {string} dt_date The date of the session, in UTC.
   * @property {string} dt_expire The date the Purchase Option that was used will expire, in UTC.
   * @property {string} dt_register The date the client checked in for the visit, in UTC.
   * @property {string} html_age The client age.
   * @property {string} html_book_by The name of the person who booked this visit.
   * @property {string} html_gender_class The name of the icon to show under gender in the class attendance list.
   * @property {string} html_member The client's member ID, if set.
   * @property {string} html_tooltip_book_by When and where this visit was booked, along with who booked it.
   * @property {number} i The default place in the list to show this client. This is a deprecated copy of the `i_order` field.
   * @property {number} i_left The number of visits left on this Purchase Option. This will be `NULL` if there's no limit.
   * @property {number} i_order The default place in the list to show this client.
   * @property {number} i_total The total visits available from this Purchase Option.
   * @property {number} i_visit_return Number of purchase option usages that was returned to user.
   * @property {number} id_gender String identifiers for gender.
   * @property {number} id_pass_prospect List foreign sites that can pay for visits.
   * @property {number} id_program Program types.
   * @property {number} id_visit Possible states of the visit: book, attended, cancelled, etc.
   * @property {boolean} is_attend This will be `true` if the client has attended the visit.
   * @property {boolean} is_deposit This will be `true` if the client has paid a deposit for the visit.
   * @property {boolean} is_duration_pass This will be `true` if the Purchase Option used is a duration pass.
   * @property {boolean} is_early This will be `true` if the client has canceled the visit early, incurring no penalty. This will be `false` if canceled late or if not canceled at all.
   * @property {boolean} is_free This will be `true` if the visit is free.
   * @property {boolean} is_hidden This will be `true` if details on this visit should be hidden from staff members.
   * @property {boolean} is_penalty This will be `true` if this visit was cancelled late and a penalty is applied.
   * @property {boolean} is_promotion_first This will be `true` if this was the first visit for the Purchase Option used.
   * @property {boolean} is_promotion_last This will be `true` if this was the latest visit for the Purchase Option used.
   * @property {boolean} is_unlimited This will be `true` if the Purchase Option used has no usage limits.
   * @property {boolean} is_visit This will be `true` if this visit is still considered valid. If visit was removed by the system or a staff member, this will be `false`.
   * @property {boolean} is_wait This will be `true` if the visit is on the waiting list.
   * @property {boolean} is_wait_confirm This will be `true` if the visit is awaiting confirmation.
   * @property {boolean} is_wait_priority This will be `true` if the visit has priority on the wait list.
   * @property {string} k_location The key of the location.
   * @property {string} k_login_promotion The key of the client's Purchase Option.
   * @property {string} k_visit The key of the visit.
   * @property {?string} o_purchase_item The purchase used to pay for the session. Instance of [PurchaseListElementApi](/Wl/Profile/PurchaseList/PurchaseListElement.json). `null` if the visit has no associated purchase or access is denied. Only present when `is_purchase_info_return` is `true`.
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
   * @property {string} text_promotion_return Title of purchase option usages of that was returned to user.
   * @property {string} text_restrict_title The Purchase Option restriction description. It can be empty string when the Purchase Option has no restrictions.
   * @property {string} text_visit_status_class The class visit status.
   * @property {string} text_visit_status_icon The icon to use for the class visit status.
   * @property {string} text_wearable The wearable device ID.
   * @property {string} uid The client user key.
   * @property {string} uid_book The key of the user who made the booking. If differing from `uid`, the booking could have been made by a staff or family member.
   * @property {string} url-cancel The URL that can be used to cancel the visit.
   * @property {string} url-cancel-admin The URL that can be used by an admin to cancel the visit.
   * @property {string} url-login-view The URL that for the user's page.
   * @property {string} url-mail The URL to a page for sending an email to the client.
   * @property {string} url-profile The URL that for the client's profile.
   */

  /**
   * The list of clients who have confirmed their attendance.
   *
   * @get result
   * @type {Wl_Login_Attendance_AttendanceListModel_a_list_confirm[]}
   */
  this.a_list_confirm = undefined;

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_wait_a_info_a_icon
   * @property {string} s_color_background Color of background.
   * @property {string} s_color_foreground Color of letter.
   * @property {string} s_letter Icon letter.
   * @property {string} s_shape Symbol from font of shapes.
   * @property {string} s_title Title.
   * @property {string} sid_shape SID of the icon type shape. Constant from {@link Wl_Login_Type_ShapeSid}.
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_wait_a_info_a_vaccination_status
   * @property {string} sid_vaccination_status Vaccination status sid. Result from {@link Wl_Login_Member_VaccinationStatus_VaccinationStatusSid} method.
   * @property {string} text_vaccination_status Vaccination status.
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_wait_a_info_a_note
   * @property {string} html_note HTML text ready to be pasted in browser.
   * @property {boolean} is_flag `true` if this note has a flag; `false` otherwise.
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_wait_a_info
   * @property {Wl_Login_Attendance_AttendanceListModel_a_list_wait_a_info_a_icon} a_icon List of icons with additional information about business member.
   * @property {Wl_Login_Attendance_AttendanceListModel_a_list_wait_a_info_a_note} a_note List of client's notes. Every element has keys:
   * @property {Wl_Login_Attendance_AttendanceListModel_a_list_wait_a_info_a_vaccination_status} a_vaccination_status Information about users vaccination status.
   * @property {string} html_credit Amount the client owns to the business.
   * @property {string} html_note User`s login notes.</dd>
   * @property {boolean} is_task_active `true` if for user exists not completed tasks.
   * @property {boolean} is_task_urgent `true` if for user exists urgent tasks.
   * @property {boolean} is_waiver `true` if client has not agreed with online waiver.
   * @property {string} k_currency Currency of business `$k_business`.
   * @property {string} m_credit User's account balance.
   * @property {boolean} show_amount Display user balance or not.
   * @property {string} text_address User's address.
   * @property {string} text_age Users age. Appears only on the day of birth.
   * @property {string} text_firstname Users first name.
   * @property {string} text_mail User's email.
   * @property {string} text_phone User's cell phone.
   * @property {string} text_visit_credit Link to the page with client's attendance.
   * @property {string} url_attendance Link to the page with information about client's account balance.
   * @property {string} url_billing Link to user's billing page.
   * @property {string} url_contract Link to user's contract page
   * @property {string} url_form Link to user's forms page.
   * @property {string} url_overview Link to the client's overview page. Empty if for user not existing active or urgent tasks.
   * @property {string} url_profile Link to user's profile.
   * @property {string} url_waiver Link to user's waiver page.
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_wait_a_photo
   * @property {number} i_height The height of the photo.
   * @property {number} i_width The width of the photo.
   * @property {boolean} is_empty This will be `true` if a photo hasn't been set yet.
   * @property {string} s_url The URL of the photo.
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_wait_a_progress
   * @property {number} id_field List of progress log fields.
   * @property {number} id_measurement_unit Possible measurement units of the progress fields values.
   * @property {number} id_type Possible types of the progress fields values.
   * @property {string} k_field Field key.
   * @property {string} text_name Translated field name.
   * @property {string} x_value Progress field log value.
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_wait_a_quiz
   * @property {number} id_status List of response statuses.
   * @property {boolean} is_hide Whether it's hidden. `true` quiz is hidden, `false` otherwise.
   * @property {boolean} is_require Whether it's required. `true` quiz is required, `false` otherwise.
   * @property {string} k_quiz Quiz key.
   * @property {string} k_quiz_login Quiz login key.
   * @property {string} k_quiz_response Quiz response key.
   * @property {string} text_title Quiz title.
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_wait_a_resource
   * @property {number} i_index Index of the resource among multiple assets. `0` if the resource was booked from the wait list.
   * @property {string} k_resource Resource key.
   * @property {string} text_alias Resource layout alias.
   * @property {string} text_title Resource title.
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_wait_a_wait_confirm
   * @property {string} s_day The formatted date string (for example, "Monday, Nov 08, 2021").
   * @property {string} s_time The formatted time string (for example, "10:00 AM").
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_wait_a_wearable
   * @property {number} id_type List of sensor types.
   * @property {boolean} is_remove `true` if the device has been removed.
   * @property {string} s_sensor Sensor identifier. Also used as the array key.
   * @property {string} text_name Device name.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Login_Attendance_AttendanceListModel_a_list_wait
   * @property {Wl_Login_Attendance_AttendanceListModel_a_list_wait_a_info} a_info Information about member.
   * @property {Wl_Login_Attendance_AttendanceListModel_a_list_wait_a_photo} a_photo Information about the user's photo. The information returned has the following structure:
   * @property {Wl_Login_Attendance_AttendanceListModel_a_list_wait_a_progress} a_progress Information about a user's current progress. By default, this information isn't sent.
   * @property {Wl_Login_Attendance_AttendanceListModel_a_list_wait_a_quiz} a_quiz Quiz information that concerns current visit.
   * @property {Wl_Login_Attendance_AttendanceListModel_a_list_wait_a_resource} a_resource A list of information for any associated resources for this visit. Each element:
   * @property {Wl_Login_Attendance_AttendanceListModel_a_list_wait_a_wait_confirm} a_wait_confirm The date and time when the client transitioned from the wait list to the active list, in human-readable format. Empty array if the visit is not awaiting confirmation. Each element:
   * @property {Wl_Login_Attendance_AttendanceListModel_a_list_wait_a_wearable} a_wearable A list of information pertaining to the client's wearables.
   * @property {boolean} can_profile If `true`, the current user can access this client profile.
   * @property {string} dt_book The date the session was booked, in UTC.
   * @property {string} dt_date The date of the session, in UTC.
   * @property {string} dt_expire The date the Purchase Option that was used will expire, in UTC.
   * @property {string} dt_register The date the client checked in for the visit, in UTC.
   * @property {string} html_age The client age.
   * @property {string} html_book_by The name of the person who booked this visit.
   * @property {string} html_gender_class The name of the icon to show under gender in the class attendance list.
   * @property {string} html_member The client's member ID, if set.
   * @property {string} html_tooltip_book_by When and where this visit was booked, along with who booked it.
   * @property {number} i The default place in the list to show this client. This is a deprecated copy of the `i_order` field.
   * @property {number} i_left The number of visits left on this Purchase Option. This will be `NULL` if there's no limit.
   * @property {number} i_order The default place in the list to show this client.
   * @property {number} i_total The total visits available from this Purchase Option.
   * @property {number} i_visit_return Number of purchase option usages that was returned to user.
   * @property {number} id_gender String identifiers for gender.
   * @property {number} id_pass_prospect List foreign sites that can pay for visits.
   * @property {number} id_program Program types.
   * @property {number} id_visit Possible states of the visit: book, attended, cancelled, etc.
   * @property {boolean} is_attend This will be `true` if the client has attended the visit.
   * @property {boolean} is_deposit This will be `true` if the client has paid a deposit for the visit.
   * @property {boolean} is_duration_pass This will be `true` if the Purchase Option used is a duration pass.
   * @property {boolean} is_early This will be `true` if the client has canceled the visit early, incurring no penalty. This will be `false` if canceled late or if not canceled at all.
   * @property {boolean} is_free This will be `true` if the visit is free.
   * @property {boolean} is_hidden This will be `true` if details on this visit should be hidden from staff members.
   * @property {boolean} is_penalty This will be `true` if this visit was cancelled late and a penalty is applied.
   * @property {boolean} is_promotion_first This will be `true` if this was the first visit for the Purchase Option used.
   * @property {boolean} is_promotion_last This will be `true` if this was the latest visit for the Purchase Option used.
   * @property {boolean} is_unlimited This will be `true` if the Purchase Option used has no usage limits.
   * @property {boolean} is_visit This will be `true` if this visit is still considered valid. If visit was removed by the system or a staff member, this will be `false`.
   * @property {boolean} is_wait This will be `true` if the visit is on the waiting list.
   * @property {boolean} is_wait_confirm This will be `true` if the visit is awaiting confirmation.
   * @property {boolean} is_wait_priority This will be `true` if the visit has priority on the wait list.
   * @property {string} k_location The key of the location.
   * @property {string} k_login_promotion The key of the client's Purchase Option.
   * @property {string} k_visit The key of the visit.
   * @property {?string} o_purchase_item The purchase used to pay for the session. Instance of [PurchaseListElementApi](/Wl/Profile/PurchaseList/PurchaseListElement.json). `null` if the visit has no associated purchase or access is denied. Only present when `is_purchase_info_return` is `true`.
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
   * @property {string} text_promotion_return Title of purchase option usages of that was returned to user.
   * @property {string} text_restrict_title The Purchase Option restriction description. It can be empty string when the Purchase Option has no restrictions.
   * @property {string} text_visit_status_class The class visit status.
   * @property {string} text_visit_status_icon The icon to use for the class visit status.
   * @property {string} text_wearable The wearable device ID.
   * @property {string} uid The client user key.
   * @property {string} uid_book The key of the user who made the booking. If differing from `uid`, the booking could have been made by a staff or family member.
   * @property {string} url-cancel The URL that can be used to cancel the visit.
   * @property {string} url-cancel-admin The URL that can be used by an admin to cancel the visit.
   * @property {string} url-login-view The URL that for the user's page.
   * @property {string} url-mail The URL to a page for sending an email to the client.
   * @property {string} url-profile The URL that for the client's profile.
   */

  /**
   * The list of clients who are on the wait list.
   *
   * @get result
   * @type {Wl_Login_Attendance_AttendanceListModel_a_list_wait[]}
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
   * The maximum number of clients on wait list of the class or event session.
   * `0` for appointments, use [AppointmentWaitListApi](/Wl/Appointment/WaitList/AppointmentWaitList.json) instead.
   *
   * @get result
   * @type {number}
   */
  this.i_wait_list_limit = undefined;

  /**
   * If `true`, then return the purchase used to pay for session.
   * Otherwise, do not return any purchase information.
   *
   * @get get
   * @type {boolean}
   */
  this.is_purchase_info_return = false;

  /**
   * `true` to use class/event specific wait list limit, `false` to use the limit from default policies.
   * `false` for appointments. Use [AppointmentWaitListApi](/Wl/Appointment/WaitList/AppointmentWaitList.json) instead.
   *
   * @get result
   * @type {boolean}
   */
  this.is_wait_list_limit = undefined;

  /**
   * The appointment key. Not used if requesting information for a class or event session.
   *
   * @get get
   * @type {string}
   */
  this.k_appointment = "";

  /**
   * The business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The class period key. Not used if requesting information for an appointment.
   *
   * @get get
   * @type {string}
   */
  this.k_class_period = "";

  /**
   * The Location key.
   *
   * @get result
   * @type {string}
   */
  this.k_location = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Attendance_AttendanceListModel);

/**
 * @inheritDoc
 */
Wl_Login_Attendance_AttendanceListModel.prototype.config=function()
{
  return {"a_field":{"a_list_active":{"get":{"result":true}},"a_list_confirm":{"get":{"result":true}},"a_list_wait":{"get":{"result":true}},"dt_date_local":{"get":{"get":true}},"i_capacity":{"get":{"result":true}},"i_client":{"get":{"result":true}},"i_wait_list_limit":{"get":{"result":true}},"is_purchase_info_return":{"get":{"get":true}},"is_wait_list_limit":{"get":{"result":true}},"k_appointment":{"get":{"get":true}},"k_business":{"get":{"get":true}},"k_class_period":{"get":{"get":true}},"k_location":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Login_Attendance_AttendanceListModel.instanceGet
 * @param {string} dt_date_local The local date of the class or event session.
 * @param {string} k_appointment The appointment key. Not used if requesting information for a class or event session.
 * @param {string} k_class_period The class period key. Not used if requesting information for an appointment.
 * @param {string} k_business The business key.
 * @returns {Wl_Login_Attendance_AttendanceListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns the attendance list for a class period or appointment session.
 *
 * Accepts either a class period key with a local date or an appointment key, validates access and date, and returns
 * the active list, wait list, and confirmed list of attending clients, along with session capacity, wait list limit,
 * and per-client details such as purchase option, visit status, wearables, and quiz responses.
 *
 * @function
 * @name Wl_Login_Attendance_AttendanceListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
