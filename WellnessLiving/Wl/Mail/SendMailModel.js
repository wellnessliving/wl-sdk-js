/**
 * Sends email.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Mail_SendMailModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_A
   * @property {string} i_id Widget analytics event key.
   * @property {string} k_business Business key.
   * @property {string} uid Client user key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_B
   * @property {number} id_service Optional. Type of the service to book. One of {@link RsServiceSid} constants. If not set, the link leads to the schedule of the business.
   * @property {string} k_business Business key.
   * @property {string} k_id Optional. Key of the service in the database. Depends on `id_service`. If not set, the link leads to the schedule of the business.
   * @property {string} text_url_suffix Optional. Query string to append to the booking link. If empty or not set, the link is not changed.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_C
   * @property {number} id_purchase_item Optional. Type of the purchase item. One of {@link RsPurchaseItemSid} constants. Required if `k_id` is set.
   * @property {string} k_business Business key.
   * @property {string} k_id Optional. Key of the purchase item. If it is not set or empty, the link leads to the catalog of the business.
   * @property {string} text_url_suffix Optional. Query string to append to the purchase link. If it is not set or empty, the link is not changed.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_D
   * @property {string} k_visit Visit ID.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_E
   * @property {string} html_view_conversation_button Button that staff can click to view the conversation between client and AI Agent.
   * @property {string} k_business Business key.
   * @property {string} text_client_mail Client's email address.
   * @property {string} text_client_name Client's name.
   * @property {string} text_client_phone Client's phone number.
   * @property {string} text_date_day Appointment date (display format).
   * @property {string} text_date_day_sms Appointment date (SMS format).
   * @property {string} text_date_time Appointment time (display format).
   * @property {string} text_date_time_sms Appointment time (SMS format).
   * @property {string} text_location Appointment location.
   * @property {string} uid Recipient user's key.
   * @property {string} url_view_conversation_link URL to view the conversation (for email).
   * @property {string} url_view_conversation_link_sms URL to view the conversation (for SMS).
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_F_a_asset
   * @property {string} k_resource Primary key of the asset.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_F
   * @property {Wl_Mail_SendMailModel_a_data_F_a_asset} a_asset Optional. Assets connected to the visit, which must be passed when they are already released (for example, when the visit is canceled). Default is an empty array. Each element:
   * @property {string} k_business Key of the business to which the visit belongs.
   * @property {string} k_visit Key of the visit.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_G_a_asset
   * @property {string} k_resource Primary key of the asset.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_G
   * @property {Wl_Mail_SendMailModel_a_data_G_a_asset} a_asset List of assets info. Each element:
   * @property {string} k_visit Reservation ID.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_H
   * @property {string} k_appointment If you want to send simple cancellation email to appointment staff - pass this parameter only.  In other cases - read further.
   * @property {string} k_staff If you want to send an appointment cancellation email to some other staff(business owner) - use his  `k_staff` in addition to `k_appointment`
   * @property {string} k_staff_old In case you want to send an appointment cancellation email to substituted staff - pass his  `k_staff` as `k_staff_old` in addition to `k_appointment`
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_I_a_asset
   * @property {string} k_resource Primary key of the asset.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_I
   * @property {Wl_Mail_SendMailModel_a_data_I_a_asset} a_asset Optional. Assets connected to the visit, which must be passed when they are already released (for example, when the visit is canceled). Default is an empty array. Each element:
   * @property {string} k_business Key of the business to which the visit belongs.
   * @property {string} k_visit Key of the visit.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_J_a_change
   * @property {string} field Title of the changed field.
   * @property {string} html_new New value as HTML. Optional.
   * @property {string} html_old Old value as HTML. Optional.
   * @property {string} new New value. For the price it is an array with keys `i_price`, `k_currency`, `m_offline_max` and `m_offline_min`.
   * @property {string} old Old value. It has the same format as `new`.
   * @property {string} s_field Name of the changed field.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_J_a_appointment_future
   * @property {string} k_visit Visit key.
   * @property {string} s_date_day Formatted date of the appointment.
   * @property {string} s_date_time Formatted time of the appointment.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_J
   * @property {Wl_Mail_SendMailModel_a_data_J_a_appointment_future} a_appointment_future List of future appointments of the client. Every element is an array:
   * @property {Wl_Mail_SendMailModel_a_data_J_a_change} a_change Array of changes. Keys are names of changed fields (`s_service`, `s_price`, `s_describe`, `s_special`, `i_capacity`), values are the descriptions of changes:
   * @property {string} k_business Business key.
   * @property {string} k_service Service key.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_K_a_change
   * @property {string} field Translated title of the changed field.
   * @property {string} html_new New value as HTML. Can be absent.
   * @property {string} html_old Old value as HTML. Can be absent.
   * @property {string} new New value of the field.
   * @property {string} old Old value of the field.
   * @property {string} s_field Name of the changed field.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_K_a_appointment_future
   * @property {string} s_client Full name of the client.
   * @property {string} s_date_day Date of the appointment.
   * @property {string} s_date_time Time of the appointment.
   * @property {?string} s_mail Email of the client.
   * @property {?string} s_phone Cell phone of the client.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_K
   * @property {Wl_Mail_SendMailModel_a_data_K_a_appointment_future} a_appointment_future List of future appointments. Every element describes one appointment:
   * @property {Wl_Mail_SendMailModel_a_data_K_a_change} a_change Array of changes. Keys are names of changed fields, values are descriptions of changes:
   * @property {string} k_business Business key.
   * @property {string} k_service Service key.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_L
   * @property {string} dt_date Date and time of the appointment in UTC, in the MySQL format.
   * @property {string} k_appointment Key of the appointment.
   * @property {string} k_location Key of the location of the appointment.
   * @property {string} k_service Key of the service of the appointment.
   * @property {string} k_staff Key of the staff member who is notified.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_M
   * @property {string} k_mail_pattern_live Mail pattern live ID.
   * @property {string} k_visit ID of visit.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_N_a_asset
   * @property {string} k_resource Primary key of the asset.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_N
   * @property {Wl_Mail_SendMailModel_a_data_N_a_asset} a_asset Optional. Assets connected to the visit. Default is an empty array. Each element:
   * @property {string} k_appointment Key of the appointment.
   * @property {string} k_business Key of the business to which the appointment belongs.
   * @property {string} k_staff Optional. Key of the staff member who is notified.  If empty, the staff member assigned to the appointment is used; if there is none, the email is not formed.
   * @property {string} k_visit Optional. Key of the visit.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_O
   * @property {string} k_visit Book ID.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_P
   * @property {string[]} a_visit Array of visit primary keys that must be included in the same e-mail.
   * @property {string} k_business Business primary key.
   * @property {string} uid Client primary key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_Q
   * @property {string} k_appointment Appointment booking key.
   * @property {string} k_business Business key.
   * @property {string} k_visit Visit key.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_R
   * @property {string} k_appointment Appointment booking key.
   * @property {string} k_business Business key.
   * @property {string} k_visit Visit key.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_S_a_asset
   * @property {number} i_count Number of sessions.
   * @property {string} text_name Asset name.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_S_a_visit
   * @property {string} k_visit Visit key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_S
   * @property {Wl_Mail_SendMailModel_a_data_S_a_asset} a_asset Optional. List of assets info that is shown in the e-mail. If it is not set, the list is empty. Each element is an array:
   * @property {Wl_Mail_SendMailModel_a_data_S_a_visit} a_visit List of visit IDs for canceling the reservation. If it is empty or not set, the e-mail is not formed and `false` is returned. Each element:
   * @property {string} k_business Business key. Required.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_T_a_visit
   * @property {string} k_visit Visit key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_T
   * @property {Wl_Mail_SendMailModel_a_data_T_a_visit} a_visit List of visit IDs for canceling the reservation. Optional. If it is empty or not set, the e-mail is not formed and `false` is returned. Each element:
   * @property {string} k_business Business key.  Required.
   * @property {string} k_staff Key of the staff member who receives the e-mail.  Required.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_U
   * @property {string[]} a_visit List of visit keys for canceling the reservation.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_V
   * @property {string} html_view_conversation_button Button that staff can click to view the conversation between client and AI Agent.
   * @property {string} k_business Business key.
   * @property {string} text_client_mail Client's email address.
   * @property {string} text_client_name Client's name.
   * @property {string} text_client_phone Client's phone number.
   * @property {string} text_location Appointment location.
   * @property {string} text_preferred_date_time The date of the requested service in the format: Thursday, May 15, 2015, 10:00 - 11:00 a.m.
   * @property {string} text_preferred_date_time_sms The date of the requested service in the format: Jan 14, 11:00 a.m.
   * @property {string} uid Recipient user's key.
   * @property {string} url_view_conversation_link URL to view the conversation (for email).
   * @property {string} url_view_conversation_link_sms URL to view the conversation (for SMS).
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_W
   * @property {string} k_visit Book ID.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_X
   * @property {boolean} is_send_force `true` if mail should be sent even if this pattern is disabled on the mails page.
   * @property {string} k_appointment Appointment ID.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_Y
   * @property {string} k_visit Book ID.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_Z
   * @property {boolean} is_secondary Optional. Whether the e-mail is sent to a secondary e-mail address. If `true`, the cancel button in the e-mail is disabled. If not set, the e-mail is built as for the primary address.
   * @property {string} k_business Business key.
   * @property {string} k_visit Visit key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_26
   * @property {string} html_view_conversation_button Button that staff can click to view the conversation between client and AI Agent.
   * @property {string} k_business Business key.
   * @property {string} text_client_mail Client's email address.
   * @property {string} text_client_name Client's name.
   * @property {string} text_client_phone Client's phone number.
   * @property {string} text_location The name of the specific location referred to in the email.
   * @property {string} text_query_note Any note left by the client for the staff.
   * @property {string} uid Recipient user's key.
   * @property {string} url_view_conversation_link URL to view the conversation (for email).
   * @property {string} url_view_conversation_link_sms URL to view the conversation (for SMS).
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_27_a_asset
   * @property {string} text_name Asset title.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_27
   * @property {Wl_Mail_SendMailModel_a_data_27_a_asset} a_asset Optional. Assets connected to the visit. Empty array by default. They are listed in the e-mail without the number of sessions. Each element:
   * @property {string} k_business Business key.
   * @property {string} k_mail_pattern_live Optional. Live mail pattern key.  This method does not read it; it is used when the e-mail is built from its pattern.
   * @property {string} k_visit Visit key (book ID).
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_28
   * @property {boolean} is_secondary Optional. Whether the e-mail is sent to a secondary e-mail address. If `true`, the button to start the virtual service is disabled. If not set, the e-mail is built as for the primary address.
   * @property {string} k_business Business key.
   * @property {string} k_staff Staff key.
   * @property {string} k_visit Visit key (book ID).
   * @property {string} s_mail Optional. E-mail address of the staff member. Empty string by default.
   * @property {string} uid Optional. Key of the client user. If empty, the default user settings are used to build the e-mail, and `uid` of the result is an empty string.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_29
   * @property {string} i_id Key of the canceled visit.
   * @property {string} k_business Key of the business. It is used to open the shard connection and must be the same as the business of the visit.
   * @property {string} uid Key of the user to whom the e-mail is sent. If the user does not exist, the e-mail is not sent.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_30_a_asset
   * @property {number} i_count Number of sessions. Shown in the e-mail next to the asset title.
   * @property {string} k_resource Resource key.  An asset that is a location is removed from the list and is used as the location of the visit.
   * @property {string} text_name Asset title.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_30
   * @property {Wl_Mail_SendMailModel_a_data_30_a_asset} a_asset Optional. Assets connected to the visit. Empty array by default. They are passed to the function that loads the visit, because the assets of a cancelled visit are released already. Each element:
   * @property {string} k_business Business key.
   * @property {string} k_mail_pattern_live Optional. Live mail pattern key.  This method does not read it; it is used when the e-mail is built from its pattern.
   * @property {string} k_visit Visit key (book ID).
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_31_a_asset
   * @property {string} k_resource Resource key.  An asset that is a location is removed from the list and is used as the location of the visit.
   * @property {string} text_name Asset title.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_31
   * @property {Wl_Mail_SendMailModel_a_data_31_a_asset} a_asset Optional. Assets connected to the visit. Empty array by default. They are listed in the e-mail without the number of sessions. Each element:
   * @property {boolean} is_calendar_attachment Optional. `true` to attach an .ics calendar file with the sessions to the e-mail.
   * @property {boolean} is_client_book Optional. `true` - only the schedule that is booked by the user `uid` is included in the schedule of the e-mail; `false` or not set - the whole schedule of the event is included.
   * @property {boolean} is_own Optional. `true` - the schedule is derived for the staff member `k_staff` only; `false` or not set - for all staff.
   * @property {boolean} is_secondary Optional. Whether the e-mail is sent to a secondary e-mail address. If `true`, the button to join the virtual session is disabled. If not set, the e-mail is built as for the primary address.
   * @property {string} k_business Business key.
   * @property {string} k_class Optional. Class key.  Required unless it is derived from `k_visit` or `k_enrollment_book`. If the class does not exist, the e-mail is not sent.
   * @property {string} k_enrollment_book Optional. Enrollment book key.  The class and the user are taken from it when `k_visit` and `k_class` are not set; it also selects the sessions of the enrollment that are listed in the e-mail.
   * @property {string} k_mail_pattern_live Optional. Live mail pattern key.  This method does not read it; it is used when the e-mail is built from its pattern.
   * @property {string} k_staff Optional. Staff key.  Required if `is_own` is set or if `uid` is empty.
   * @property {string} k_visit Optional. Visit key (book ID).  When it is set, the class, the user and the location are taken from the visit.
   * @property {string} s_mail Optional. E-mail address of the receiver. Empty string by default.
   * @property {string} uid Optional. Key of the client user. It is derived automatically when `k_visit` or `k_enrollment_book` is set. If it is empty, the e-mail is built for the staff member `k_staff`.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_32_a_asset
   * @property {number} i_count Number of sessions.
   * @property {string} text_name Asset title that consists of the asset title itself concatenated with its index (in case of multiple assets) by `#`.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_32
   * @property {Wl_Mail_SendMailModel_a_data_32_a_asset} a_asset Optional. Assets of the visit to show in the e-mail. Used when the visit is loaded and when the assets block is rendered. By default, no assets. Each element:
   * @property {string[]} a_visit List of visit keys of the cancelled sessions.  Either this key or `k_visit` is required, otherwise no e-mail is built. The first element is the main visit of the e-mail.
   * @property {string} k_business Key of the business.  Required.
   * @property {string} k_visit Optional. Key of the visit.  Used only when `a_visit` is empty. In this case it is the only visit of the e-mail.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_33_a_asset
   * @property {number} i_count Number of sessions. Shown in the e-mail next to the asset title.
   * @property {string} text_name Asset title.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_33
   * @property {Wl_Mail_SendMailModel_a_data_33_a_asset} a_asset Optional. Assets connected to the visit. Empty array by default. Each element:
   * @property {string} k_business Business key.
   * @property {string} k_mail_pattern_live Optional. Live mail pattern key.  This method does not read it; it is used when the e-mail is built from its pattern.
   * @property {string} k_visit Visit key (book ID).
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_34_a_asset
   * @property {string} k_resource Resource key.  An asset that is a location is removed from the list and is used as the location of the visit.
   * @property {string} text_name Asset title.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_34
   * @property {Wl_Mail_SendMailModel_a_data_34_a_asset} a_asset Optional. Assets connected to the visit. Empty array by default. They are listed in the e-mail without the number of sessions. Each element:
   * @property {boolean} is_calendar_attachment Optional. `true` to attach an .ics calendar file with the sessions to the e-mail.
   * @property {boolean} is_client_book Optional. `true` - only the schedule that is booked by the user `uid` is included in the schedule of the e-mail; `false` or not set - the whole schedule of the event is included.
   * @property {boolean} is_own Optional. `true` - the schedule is derived for the staff member `k_staff` only; `false` or not set - for all staff.
   * @property {boolean} is_secondary Optional. Whether the e-mail is sent to a secondary e-mail address. If `true`, the button to join the virtual session is disabled. If not set, the e-mail is built as for the primary address.
   * @property {string} k_business Business key.
   * @property {string} k_class Optional. Class key.  Required unless it is derived from `k_visit` or `k_enrollment_book`. If the class does not exist, the e-mail is not sent.
   * @property {string} k_enrollment_book Optional. Enrollment book key.  The class and the user are taken from it when `k_visit` and `k_class` are not set; it also selects the sessions of the enrollment that are listed in the e-mail.
   * @property {string} k_mail_pattern_live Optional. Live mail pattern key.  This method does not read it; it is used when the e-mail is built from its pattern.
   * @property {string} k_staff Optional. Staff key.  Required if `is_own` is set or if `uid` is empty.
   * @property {string} k_visit Optional. Visit key (book ID).  When it is set, the class, the user and the location are taken from the visit.
   * @property {string} s_mail Optional. E-mail address of the receiver. Empty string by default.
   * @property {string} uid Optional. Key of the client user. It is derived automatically when `k_visit` or `k_enrollment_book` is set. If it is empty, the e-mail is built for the staff member `k_staff`.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_35_a_asset
   * @property {number} i_count Number of sessions. Shown in the e-mail next to the asset title.
   * @property {string} k_resource Resource key.  An asset that is a location is removed from the list and is used as the location of the visit.
   * @property {string} text_name Asset title.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_35
   * @property {Wl_Mail_SendMailModel_a_data_35_a_asset} a_asset Optional. Assets connected to the visit. Empty array by default. They are passed to the function that loads the visit, because the assets of a cancelled visit are released already. Each element:
   * @property {string} k_business Business key.
   * @property {string} k_mail_pattern_live Optional. Live mail pattern key.  This method does not read it; it is used when the e-mail is built from its pattern.
   * @property {string} k_visit Visit key (book ID).
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_36_a_asset
   * @property {string} k_resource Resource key.  An asset that is a location is removed from the list and is used as the location of the visit.
   * @property {string} text_name Asset title.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_36
   * @property {Wl_Mail_SendMailModel_a_data_36_a_asset} a_asset Optional. Assets connected to the visit. Empty array by default. They are listed in the e-mail without the number of sessions. Each element:
   * @property {boolean} is_calendar_attachment Optional. `true` to attach an .ics calendar file with the sessions to the e-mail.
   * @property {boolean} is_client_book Optional. `true` - only the schedule that is booked by the user `uid` is included in the schedule of the e-mail; `false` or not set - the whole schedule of the event is included.
   * @property {boolean} is_own Optional. `true` - the schedule is derived for the staff member `k_staff` only; `false` or not set - for all staff.
   * @property {boolean} is_secondary Optional. Whether the e-mail is sent to a secondary e-mail address. If `true`, the button to join the virtual session is disabled. If not set, the e-mail is built as for the primary address.
   * @property {string} k_business Business key.
   * @property {string} k_class Optional. Class key.  Required unless it is derived from `k_visit` or `k_enrollment_book`. If the class does not exist, the e-mail is not sent.
   * @property {string} k_enrollment_book Optional. Enrollment book key.  The class and the user are taken from it when `k_visit` and `k_class` are not set; it also selects the sessions of the enrollment that are listed in the e-mail.
   * @property {string} k_mail_pattern_live Optional. Live mail pattern key.  This method does not read it; it is used when the e-mail is built from its pattern.
   * @property {string} k_staff Optional. Staff key.  Required if `is_own` is set or if `uid` is empty.
   * @property {string} k_visit Optional. Visit key (book ID).  When it is set, the class, the user and the location are taken from the visit.
   * @property {string} s_mail Optional. E-mail address of the receiver. Empty string by default.
   * @property {string} uid Optional. Key of the client user. It is derived automatically when `k_visit` or `k_enrollment_book` is set. If it is empty, the e-mail is built for the staff member `k_staff`.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_37_a_asset
   * @property {string} k_resource Resource key.  An asset that is a location is removed from the list and is used as the location of the visit.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_37
   * @property {Wl_Mail_SendMailModel_a_data_37_a_asset} a_asset Optional. Assets connected to the visit. Empty array by default. They are passed to the function that loads the visit, because the assets of a cancelled visit are released already. Each element:
   * @property {string} k_business Business key.
   * @property {string} k_staff Staff key.
   * @property {string} k_visit Visit key (book ID).
   * @property {string} s_mail Optional. E-mail address of the staff member. Empty string by default.
   * @property {string} uid Optional. Key of the client user. If empty, the default user settings are used to build the e-mail, and `uid` of the result is an empty string.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_38
   * @property {string} k_class Class key.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_39_a_asset
   * @property {string} k_resource Resource key.  An asset that is a location is removed from the list and is used as the location of the visit.
   * @property {string} text_name Asset title.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_39
   * @property {Wl_Mail_SendMailModel_a_data_39_a_asset} a_asset Optional. Assets connected to the visit. Empty array by default. They are listed in the e-mail without the number of sessions. Each element:
   * @property {boolean} is_calendar_attachment Optional. `true` to attach an .ics calendar file with the sessions to the e-mail.
   * @property {boolean} is_client_book Optional. `true` - only the schedule that is booked by the user `uid` is included in the schedule of the e-mail; `false` or not set - the whole schedule of the event is included.
   * @property {boolean} is_own Optional. `true` - the schedule is derived for the staff member `k_staff` only; `false` or not set - for all staff.
   * @property {boolean} is_secondary Optional. Whether the e-mail is sent to a secondary e-mail address. If `true`, the button to join the virtual session is disabled. If not set, the e-mail is built as for the primary address.
   * @property {string} k_business Business key.
   * @property {string} k_class Optional. Class key.  Required unless it is derived from `k_visit` or `k_enrollment_book`. If the class does not exist, the e-mail is not sent.
   * @property {string} k_enrollment_book Enrollment book key.  If the record does not exist, the e-mail is not sent. The class and the user are taken from it.
   * @property {string} k_staff Optional. Staff key.  Required if `is_own` is set or if `uid` is empty.
   * @property {string} k_visit Optional. Visit key (book ID).  When it is set, the class, the user and the location are taken from the visit.
   * @property {string} s_mail Optional. E-mail address of the receiver. Empty string by default.
   * @property {string} uid Optional. Key of the client user. It is derived automatically when `k_visit` or `k_enrollment_book` is set. If it is empty, the e-mail is built for the staff member `k_staff`.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_40_a_asset
   * @property {string} k_resource Resource key.  An asset that is a location is removed from the list and is used as the location of the visit.
   * @property {string} text_name Asset title.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_40
   * @property {Wl_Mail_SendMailModel_a_data_40_a_asset} a_asset Optional. Assets connected to the visit. Empty array by default. They are listed in the e-mail without the number of sessions. Each element:
   * @property {boolean} is_calendar_attachment Optional. `true` to attach an .ics calendar file with the sessions to the e-mail.
   * @property {boolean} is_client_book Optional. `true` - only the schedule that is booked by the user `uid` is included in the schedule of the e-mail; `false` or not set - the whole schedule of the event is included.
   * @property {boolean} is_own Optional. `true` - the schedule is derived for the staff member `k_staff` only; `false` or not set - for all staff.
   * @property {boolean} is_secondary Optional. Whether the e-mail is sent to a secondary e-mail address. If `true`, the button to join the virtual session is disabled. If not set, the e-mail is built as for the primary address.
   * @property {string} k_business Business key.
   * @property {string} k_class Optional. Class key.  Required unless it is derived from `k_visit` or `k_enrollment_book`. If the class does not exist, the e-mail is not sent.
   * @property {string} k_enrollment_book Enrollment book key.  If the record does not exist, the e-mail is not sent. The class and the user are taken from it.
   * @property {string} k_staff Optional. Staff key.  Required if `is_own` is set or if `uid` is empty.
   * @property {string} k_visit Optional. Visit key (book ID).  When it is set, the class, the user and the location are taken from the visit.
   * @property {string} s_mail Optional. E-mail address of the receiver. Empty string by default.
   * @property {string} uid Optional. Key of the client user. It is derived automatically when `k_visit` or `k_enrollment_book` is set. If it is empty, the e-mail is built for the staff member `k_staff`.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_41
   * @property {string} k_business Business key.
   * @property {string} uid User key. If the user does not exist, the e-mail is not sent.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_42
   * @property {boolean} is_secondary Optional. Whether the e-mail is sent to a secondary e-mail address. If `true`, the cancel button in the e-mail is disabled. If not set, the e-mail is built as for the primary address.
   * @property {string} k_business Business key.
   * @property {string} k_visit Visit key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_43_a_asset
   * @property {string} k_resource Resource key.  An asset that is a location is removed from the list and is used as the location of the visit.
   * @property {string} text_name Asset title.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_43
   * @property {Wl_Mail_SendMailModel_a_data_43_a_asset} a_asset Optional. Assets connected to the visit. Empty array by default. They are listed in the e-mail without the number of sessions. Each element:
   * @property {boolean} is_secondary Optional. Whether the e-mail is sent to a secondary e-mail address. If `true`, the buttons to cancel the visit and to confirm the promotion are disabled. If not set, the e-mail is built as for the primary address.
   * @property {string} k_business Business key.
   * @property {string} k_mail_pattern_live Optional. Live mail pattern key.  This method does not read it; it is used when the e-mail is built from its pattern.
   * @property {string} k_visit Visit key (book ID).
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_44_a_asset
   * @property {string} k_resource Resource key.  An asset that is a location is removed from the list and is used as the location of the visit.
   * @property {string} text_name Asset title.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_44
   * @property {Wl_Mail_SendMailModel_a_data_44_a_asset} a_asset Optional. Assets connected to the visit. Empty array by default. They are listed in the e-mail without the number of sessions. Each element:
   * @property {boolean} is_secondary Optional. Whether the e-mail is sent to a secondary e-mail address. If `true`, the buttons to cancel the visit and to confirm the promotion are disabled. If not set, the e-mail is built as for the primary address.
   * @property {string} k_business Business key.
   * @property {string} k_mail_pattern_live Optional. Live mail pattern key.  This method does not read it; it is used when the e-mail is built from its pattern.
   * @property {string} k_visit Visit key (book ID).
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_45
   * @property {boolean} is_secondary Optional. Whether the e-mail is sent to a secondary e-mail address. If `true`, the cancel button in the e-mail is disabled. If not set, the e-mail is built as for the primary address.
   * @property {string} k_business Business key.
   * @property {string} k_visit Visit key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_46_a_asset
   * @property {string} k_resource Resource key.  An asset that is a location is removed from the list and is used as the location of the visit.
   * @property {string} text_name Asset title.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_46
   * @property {Wl_Mail_SendMailModel_a_data_46_a_asset} a_asset Optional. Assets connected to the visit. Empty array by default. They are listed in the e-mail without the number of sessions. Each element:
   * @property {boolean} is_secondary Optional. Whether the e-mail is sent to a secondary e-mail address. If `true`, the buttons to cancel the visit and to confirm the promotion are disabled. If not set, the e-mail is built as for the primary address.
   * @property {string} k_business Business key.
   * @property {string} k_mail_pattern_live Optional. Live mail pattern key.  This method does not read it; it is used when the e-mail is built from its pattern.
   * @property {string} k_visit Visit key (book ID).
   * @property {string} s_action Optional. Name of the action. Known value: `waitinglist-confirm` - the URL to confirm the promotion is built. For any other value the confirmation URL is empty.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_47_a_asset
   * @property {string} k_resource Resource key.  An asset that is a location is removed from the list and is used as the location of the visit.
   * @property {string} text_name Asset title.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_47
   * @property {Wl_Mail_SendMailModel_a_data_47_a_asset} a_asset Optional. Assets connected to the visit. Empty array by default. They are listed in the e-mail without the number of sessions. Each element:
   * @property {boolean} is_secondary Optional. Whether the e-mail is sent to a secondary e-mail address. If `true`, the buttons to cancel the visit and to confirm the promotion are disabled. If not set, the e-mail is built as for the primary address.
   * @property {string} k_business Business key.
   * @property {string} k_mail_pattern_live Optional. Live mail pattern key.  This method does not read it; it is used when the e-mail is built from its pattern.
   * @property {string} k_visit Visit key (book ID).
   * @property {string} s_action Optional. Name of the action. Known value: `waitinglist-confirm` - the URL to confirm the promotion is built. For any other value the confirmation URL is empty.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_48_a_asset
   * @property {string} k_resource Resource key.  An asset that is a location is removed from the list and is used as the location of the visit.
   * @property {string} text_name Asset title.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_48
   * @property {Wl_Mail_SendMailModel_a_data_48_a_asset} a_asset Optional. Assets connected to the visit. Empty array by default. They are listed in the e-mail without the number of sessions. Each element:
   * @property {string} dt_date Optional. Date and time of the session in UTC (MySQL format). Together with `k_class_period` and `uid` it is used to find the visit when `k_visit` is not set.
   * @property {boolean} is_secondary Optional. Whether the e-mail is sent to a secondary e-mail address. If `true`, the buttons to cancel the visit and to join the virtual session are disabled. If not set, the e-mail is built as for the primary address.
   * @property {string} k_business Business key.
   * @property {string} k_class_period Optional. Class period key.  Together with `dt_date` and `uid` it is used to find the active visit of the user when `k_visit` is not set. If there is no such visit, the e-mail is not sent.
   * @property {string} k_visit Visit key (book ID).  Required if `k_class_period` and `dt_date` are not both set.
   * @property {string} uid Optional. Key of the client user. It is used only together with `k_class_period` and `dt_date`.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_49_a_asset
   * @property {string} k_resource Resource key.  An asset that is a location is removed from the list and is used as the location of the visit.
   * @property {string} text_name Asset title.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_49
   * @property {Wl_Mail_SendMailModel_a_data_49_a_asset} a_asset Optional. Assets connected to the visit. Empty array by default. They are listed in the e-mail without the number of sessions. Each element:
   * @property {string} dt_date Optional. Date and time of the session in UTC (MySQL format). Together with `k_class_period` and `uid` it is used to find the visit when `k_visit` is not set.
   * @property {boolean} is_secondary Optional. Whether the e-mail is sent to a secondary e-mail address. If `true`, the buttons to cancel the visit and to join the virtual session are disabled. If not set, the e-mail is built as for the primary address.
   * @property {string} k_business Business key.
   * @property {string} k_class_period Optional. Class period key.  Together with `dt_date` and `uid` it is used to find the active visit of the user when `k_visit` is not set. If there is no such visit, the e-mail is not sent.
   * @property {string} k_visit Visit key (book ID).  Required if `k_class_period` and `dt_date` are not both set.
   * @property {string} uid Optional. Key of the client user. It is used only together with `k_class_period` and `dt_date`.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_50
   * @property {string} k_business Business key.
   * @property {string} k_staff Staff key.
   * @property {string} k_visit Visit key (book ID).
   * @property {string} s_mail Optional. E-mail address of the staff member. Empty string by default.
   * @property {string} uid Optional. Key of the client user. If empty, the default user settings are used to build the e-mail, and `uid` of the result is an empty string.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_51_a_asset
   * @property {string} k_resource Resource key.  An asset that is a location is removed from the list and is used as the location of the visit.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_51
   * @property {Wl_Mail_SendMailModel_a_data_51_a_asset} a_asset Optional. Assets connected to the visit. Empty array by default. They are passed to the function that loads the visit only to find the location. The assets listed in the e-mail are loaded from the appointment. Each element:
   * @property {boolean} is_secondary Optional. Whether the e-mail is sent to a secondary e-mail address. If `true`, the buttons to cancel the appointment, to confirm it and to join the virtual service are disabled. If not set, the e-mail is built as for the primary address.
   * @property {string} k_business Business key.
   * @property {string} k_visit Visit key (book ID).
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_52_a_asset
   * @property {number} i_count Number of sessions.
   * @property {string} text_name Asset title that consists of the asset title itself concatenated with its index (in case of multiple assets) by `#`.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_52
   * @property {Wl_Mail_SendMailModel_a_data_52_a_asset} a_asset Optional. Assets used for the reservations. Empty array by default. Each element:
   * @property {string[]} a_visit List of visit IDs for canceling the reservation. Required if `k_visit` is not set: when both are empty, the e-mail is not built and `false` is returned. The first element is used as `k_visit`.
   * @property {string} k_business Key of the business. Required.
   * @property {string} k_visit Optional. Key of a visit. Used only when `a_visit` is empty, then the list of visits consists of this one visit. Required if `a_visit` is not set.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_53_a_asset
   * @property {number} i_count Number of sessions.
   * @property {string} text_name Asset title that consists of the asset title itself concatenated with its index (in case of multiple assets) by `#`.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_53
   * @property {Wl_Mail_SendMailModel_a_data_53_a_asset} a_asset Optional. Assets used for the reservations. Empty array by default. Each element:
   * @property {string[]} a_visit List of visit IDs for canceling the reservation. Required if `k_visit` is not set: when both are empty, the e-mail is not built and `false` is returned. The first element is used as `k_visit`.
   * @property {string} k_business Key of the business. Required.
   * @property {string} k_visit Optional. Key of a visit. Used only when `a_visit` is empty, then the list of visits consists of this one visit. Required if `a_visit` is not set.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_54_a_asset
   * @property {number} i_count Number of sessions.
   * @property {string} text_name Asset title that consists of the asset title itself concatenated with its index (in case of multiple assets) by `#`.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_54
   * @property {Wl_Mail_SendMailModel_a_data_54_a_asset} a_asset Optional. Assets used for the reservations. Empty array by default. Each element:
   * @property {string[]} a_visit List of visit IDs for canceling the reservation. Required if `k_visit` is not set: when both are empty, the e-mail is not built and `false` is returned. The first element is used as `k_visit`.
   * @property {string} k_business Key of the business. Required.
   * @property {string} k_visit Optional. Key of a visit. Used only when `a_visit` is empty, then the list of visits consists of this one visit. Required if `a_visit` is not set.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_55
   * @property {string} dt_date Date and time of the visit in GMT.
   * @property {string} k_appointment Appointment identifier, `0` if this is a class visit.
   * @property {string} k_business Business key.
   * @property {string} k_class_period Class Period ID, `0` if this is a appointment visit.
   * @property {string} k_location Location key.
   * @property {string} k_visit Visit ID.
   * @property {string} s_mail Client's email address.
   * @property {string} s_realname Client's realname.
   * @property {string} s_visit Title of visit, it can be service title or class title.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_56
   * @property {boolean} is_secondary Optional. Whether the e-mail is sent to a secondary e-mail address. If `true`, the cancel button in the e-mail is disabled. If not set, the e-mail is built as for the primary address.
   * @property {string} k_business Business key.
   * @property {string} k_visit Visit key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_57_a_asset
   * @property {number} i_count Number of sessions. Shown in the e-mail next to the asset title.
   * @property {string} k_resource Resource key.  An asset that is a location is removed from the list and is used as the location of the visit.
   * @property {string} text_name Asset title.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_57
   * @property {Wl_Mail_SendMailModel_a_data_57_a_asset} a_asset Optional. Assets connected to the visit. Empty array by default. Each element:
   * @property {boolean} is_secondary Optional. Whether the e-mail is sent to a secondary e-mail address. If `true`, the button to cancel the visit is disabled. If not set, the e-mail is built as for the primary address.
   * @property {string} k_business Business key.
   * @property {string} k_visit Visit key.  If it is empty, the e-mail is not sent.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_58
   * @property {string} k_class Event key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_59
   * @property {string} dl_churn Churn date.
   * @property {string} k_business_customer Key of affected business.
   * @property {string} k_location (Optional) Key of affected location.
   * @property {string} s_mail Email address sent email message.
   * @property {string} text_churn_note Churn note.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_60
   * @property {string} dl_payment Payment date in MySQL format. Only the month and the year are used in the e-mail.
   * @property {string} k_business Key of the business to which the business account belongs.
   * @property {{}} o_pay_amount Purchase amount object.
   * @property {string} s_message Optional. Error message. If empty or not set, an empty string is used.
   * @property {string} text_payment Title of the payment (the account).
   * @property {string} uid Key of the user who will receive the e-mail. If the user does not exist, the e-mail is skipped.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_61
   * @property {string} dl_payment Payment date in MySQL format. Only the month and the year are used in the e-mail.
   * @property {string} k_business Key of the business to which the business account belongs.
   * @property {{}} o_pay_amount Purchase amount object.
   * @property {string} text_payment Title of the payment (the account).
   * @property {string} uid Key of the user who will receive the e-mail.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_62
   * @property {string} dl_payment Payment date in MySQL format. Only the month and the year are used in the e-mail.
   * @property {string} k_business Key of the business to which the business account belongs.
   * @property {{}} o_pay_amount Purchase amount object.
   * @property {string} s_message Optional. Error message. If empty or not set, an empty string is used.
   * @property {string} text_payment Title of the payment (the account).
   * @property {string} uid Key of the user who will receive the e-mail. If the user does not exist, the e-mail is skipped.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_63
   * @property {string} dl_month Affected month.
   * @property {number} i_limit Postcard limit that was exceeded.
   * @property {string} k_business_customer Key of affected business.
   * @property {string} s_mail Email address sent email message.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_64
   * @property {number} cid_subscription Subscription CID. CID of a class that extends {@link Wl_Business_Account_Subscription_SubscriptionAbstract}.
   * @property {string} k_business_customer Key of affected business.
   * @property {string} s_mail Email address sent email message.
   * @property {string} text_note Subscription price override note.
   * @property {string} text_price The formatted subscription price.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_65
   * @property {number} cid_subscription Subscription CID. One of the CID of {@link Wl_Business_Account_Subscription_SubscriptionAbstract} classes.
   * @property {string} k_business_customer Business key.
   * @property {string} s_mail Email address sent email message.
   * @property {string} text_periodicity The payment frequency.
   * @property {string} text_price_new The new override value.
   * @property {string} text_price_plan The old override value.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_66
   * @property {number} cid_subscription Subscription CID that was marked as paid. CID of one of the {@link Wl_Business_Account_Subscription_SubscriptionAbstract} subclasses.
   * @property {string} k_business_customer Key of affected business.
   * @property {string} m_amount Amount that was marked as paid.
   * @property {string} s_mail Email address sent email message.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_67
   * @property {number} cid_subscription Subscription CID, where class inherits from {@link Wl_Business_Account_Subscription_SubscriptionAbstract}.
   * @property {number} i_skip The number of skipped payments.
   * @property {string} k_business_customer Key of affected business.
   * @property {string} s_mail Email address sent email message.
   * @property {string} text_note The reason to skip payments.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_68
   * @property {number} cid_subscription Subscription CID. One of the CID constants of {@link Wl_Business_Account_Subscription_SubscriptionAbstract} subclasses.
   * @property {number} i_location The number of locations in the business.
   * @property {number} i_location_paying The number of locations the business is paying for.
   * @property {string} k_business_customer Key of affected business.
   * @property {string} s_mail Email address sent email message.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_69
   * @property {number} i_license Number of licenses.
   * @property {string} k_business_customer Key of affected business.
   * @property {string} s_mail Email address sent email message.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_70
   * @property {number} i_license Number of licenses.
   * @property {string} k_business_customer Key of affected business.
   * @property {string} s_mail Email address sent email message.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_71
   * @property {string} k_business Business key.
   * @property {string} text_first_name Client's first name.
   * @property {string} uid User's key.
   * @property {string} url_create_password_page_link URL to open changing user's password page.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_72
   * @property {string} k_business_subscribe Key of affected business.
   * @property {string} s_mail Email address sent email message.
   * @property {string} text_plan_name Name Of Message Center Plan Chosen.
   * @property {string} uid_actor User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_73
   * @property {number} id_mail_copy One of {@link RsMailCopySid} constants.
   * @property {string} k_business_customer Key of affected business.
   * @property {string} s_mail Receiver email address.
   * @property {string} s_mail_copy Copy receiver email address.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_74
   * @property {string} k_business_enroll Business key, that joined to Business Partner Program.
   * @property {string} uid User key, who is a recipient.
   * @property {string} uid_enroll User key, who enabled Business Partner Program.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_75
   * @property {string} k_business_partner Business partner key.
   * @property {string} text_business_lead Referral business name.
   * @property {string} uid User key, who is a recipient.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_76
   * @property {string} k_business_partner Business partner key.
   * @property {string} k_business_referral Business referral key.
   * @property {string} uid User key, who is a recipient.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_77
   * @property {string} k_business_partner Business partner key.
   * @property {string} k_business_referral Business referral key.
   * @property {string} uid User key, who is a recipient.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_78
   * @property {string} k_business_partner Business partner key.
   * @property {string} k_business_referral Business referral key.
   * @property {string} uid User key, who is a recipient.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_79
   * @property {string} k_business_partner Business partner key.
   * @property {string} k_business_referral Business referral key.
   * @property {string} uid Key of the user who is a recipient.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_80
   * @property {string} k_business_partner Business partner key.
   * @property {string} k_business_referral Business referral key.
   * @property {string} uid User key, who is a recipient.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_81
   * @property {string} k_business Business key.
   * @property {string} text_business_phone Business phone number.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_82
   * @property {string} k_business Business key. Required, must not be empty.
   * @property {string} uid Key of the client user. Required, must not be empty.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_83
   * @property {string} html_view_conversation_button Button that staff can click to view the conversation between client and AI Agent.
   * @property {string} k_business Business key.
   * @property {string} text_booking_details The details of booking if provided by client.
   * @property {string} text_booking_details_sms The details of booking if provided by client.
   * @property {string} text_cancel_reason Any note provided by the client explaining the cancellation request.
   * @property {string} text_client_mail Client's email address.
   * @property {string} text_client_name Client's name.
   * @property {string} text_client_phone Client's phone number.
   * @property {string} uid Recipient user's key.
   * @property {string} url_view_conversation_link URL to view the conversation (for email).
   * @property {string} url_view_conversation_link_sms URL to view the conversation (for SMS).
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_84
   * @property {string} html_view_conversation_button Button that staff can click to view the conversation between client and AI Agent.
   * @property {string} k_business Business key.
   * @property {string} text_client_mail Client's email address.
   * @property {string} text_client_name Client's name.
   * @property {string} text_client_phone Client's phone number.
   * @property {string} text_location Appointment location.
   * @property {string} text_preferred_date_time The date of the requested service in the format: Thursday, May 15, 2015, 10:00 - 11:00 a.m.
   * @property {string} text_preferred_date_time_sms The date of the requested service in the format: Jan 14, 11:00 a.m.
   * @property {string} uid Recipient user's key.
   * @property {string} url_view_conversation_link URL to view the conversation (for email).
   * @property {string} url_view_conversation_link_sms URL to view the conversation (for SMS).
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_85
   * @property {string} html_view_conversation_button Button that staff can click to view the conversation between client and AI Agent.
   * @property {string} k_business Business key.
   * @property {string} text_client_mail Client's email address.
   * @property {string} text_client_name Client's name.
   * @property {string} text_client_phone Client's phone number.
   * @property {string} text_date_day Class date (display format).
   * @property {string} text_date_day_sms Class date (SMS format).
   * @property {string} text_date_time Class time (display format).
   * @property {string} text_date_time_sms Class time (SMS format).
   * @property {string} text_duration The duration of the service.
   * @property {string} text_location Class location.
   * @property {string} text_room The name of the specific location referred to by the client.
   * @property {string} uid Recipient user's key.
   * @property {string} url_view_conversation_link URL to view the conversation (for email).
   * @property {string} url_view_conversation_link_sms URL to view the conversation (for SMS).
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_86
   * @property {string[]} a_visit List of visit keys.
   * @property {string} k_class Class key.
   * @property {string} k_mail_pattern_live Live mail pattern key.
   * @property {string} text_title_old Old class title.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_87
   * @property {string[]} a_visit List of visit keys.
   * @property {string} k_class Class key.
   * @property {string} k_mail_pattern_live Live mail pattern key.
   * @property {string} text_title_old Old class title.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_88_a_asset
   * @property {number} i_count Number of sessions.
   * @property {string} text_name Asset title with its index (in case of several assets).
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_88
   * @property {Wl_Mail_SendMailModel_a_data_88_a_asset} a_asset Optional. Assets of the visit to show in the e-mail. Empty by default. Each element:
   * @property {string} dt_date Date of the class period (MySQL date and time format).
   * @property {string} dt_time_new New time of the class period. If it is not a valid MySQL date and time, `dt_date` is used for the time interval.
   * @property {string} k_business Business ID.
   * @property {string} k_class_period Class period ID.
   * @property {string} k_location Location ID.
   * @property {string} k_mail_pattern_live Optional. Live mail pattern ID.
   * @property {string} s_cancel_list Optional. Comma-separated list of the cancelled dates. If empty, the date of `dt_date` is used.
   * @property {string} s_change_html Changes in html format.
   * @property {string} s_change_sms Changes in sms format.
   * @property {string} s_change_text Changes in text format.
   * @property {string} s_class Class title.
   * @property {string} s_duration Duration.
   * @property {string} s_location Location title.
   * @property {string} s_location_address Location address.
   * @property {string} s_location_city City title.
   * @property {string} s_location_country Country title.
   * @property {string} s_location_postalcode Postalcode.
   * @property {string} s_location_region Region title.
   * @property {string} s_room Room.
   * @property {?string} s_special Special information.
   * @property {string} uid User ID.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_89_a_asset
   * @property {number} i_count Number of sessions.
   * @property {string} text_name Asset title with its index (in case of several assets).
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_89
   * @property {Wl_Mail_SendMailModel_a_data_89_a_asset} a_asset Optional. Assets of the visit to show in the e-mail. Empty by default. Each element:
   * @property {string} dt_date Date of the class period (MySQL date and time format).
   * @property {string} dt_time_new New time of the class period. If it is not a valid MySQL date and time, `dt_date` is used for the time interval.
   * @property {string} k_business Business ID.
   * @property {string} k_class_period Class period ID.
   * @property {string} k_location Location ID.
   * @property {string} k_mail_pattern_live Optional. Live mail pattern ID.
   * @property {string} s_cancel_list Optional. Comma-separated list of the cancelled dates. If empty, the date of `dt_date` is used.
   * @property {string} s_change_html Changes in html format.
   * @property {string} s_change_sms Changes in sms format.
   * @property {string} s_change_text Changes in text format.
   * @property {string} s_class Class title.
   * @property {string} s_duration Duration.
   * @property {string} s_location Location title.
   * @property {string} s_location_address Location address.
   * @property {string} s_location_city City title.
   * @property {string} s_location_country Country title.
   * @property {string} s_location_postalcode Postalcode.
   * @property {string} s_location_region Region title.
   * @property {string} s_room Room.
   * @property {?string} s_special Special information.
   * @property {string} uid User ID.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_90_a_asset
   * @property {number} i_count Number of sessions.
   * @property {string} text_name Asset title with its index (in case of several assets).
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_90
   * @property {Wl_Mail_SendMailModel_a_data_90_a_asset} a_asset Optional. Assets of the visit to show in the e-mail. Empty by default. Each element:
   * @property {string} dt_date Date of the class period (MySQL date and time format).
   * @property {string} dt_time_new New time of the class period. If it is not a valid MySQL date and time, `dt_date` is used for the time interval.
   * @property {boolean} is_book_cancel Whether all books of the session are cancelled.
   * @property {string} k_business Business ID.
   * @property {string} k_class_period Class period ID.
   * @property {string} k_location Location ID.
   * @property {string} k_mail_pattern_live Optional. Live mail pattern ID.
   * @property {string} s_change_html Changes in html format.
   * @property {string} s_change_sms Changes in sms format.
   * @property {string} s_change_text Changes in text format.
   * @property {string} s_class Class title.
   * @property {string} s_day Day.
   * @property {string} s_duration Duration.
   * @property {string} s_location Location title.
   * @property {string} s_location_address Location address.
   * @property {string} s_location_city City title.
   * @property {string} s_location_country Country title.
   * @property {string} s_location_postalcode Postalcode.
   * @property {string} s_location_region Region title.
   * @property {string} s_room Room.
   * @property {?string} s_special Special information.
   * @property {string} uid User ID.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_91_a_asset
   * @property {number} i_count Number of sessions.
   * @property {string} text_name Asset title with its index (in case of several assets).
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_91
   * @property {Wl_Mail_SendMailModel_a_data_91_a_asset} a_asset Optional. Assets of the visit to show in the e-mail. Empty by default. Each element:
   * @property {string} dt_date Date of the class period (MySQL date and time format).
   * @property {string} dt_time_new New time of the class period. If it is not a valid MySQL date and time, `dt_date` is used for the time interval.
   * @property {boolean} is_book_cancel Whether all books of the session are cancelled.
   * @property {string} k_business Business ID.
   * @property {string} k_class_period Class period ID.
   * @property {string} k_location Location ID.
   * @property {string} k_mail_pattern_live Optional. Live mail pattern ID.
   * @property {string} s_change_html Changes in html format.
   * @property {string} s_change_sms Changes in sms format.
   * @property {string} s_change_text Changes in text format.
   * @property {string} s_class Class title.
   * @property {string} s_day Day.
   * @property {string} s_duration Duration.
   * @property {string} s_location Location title.
   * @property {string} s_location_address Location address.
   * @property {string} s_location_city City title.
   * @property {string} s_location_country Country title.
   * @property {string} s_location_postalcode Postalcode.
   * @property {string} s_location_region Region title.
   * @property {string} s_room Room.
   * @property {?string} s_special Special information.
   * @property {string} uid User ID.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_92
   * @property {string[]} a_class_period A list of canceled class period keys. Each value is class period key.
   * @property {?string} dl_end End date of range to cancel sessions. `null` when cancelation is ongoing.
   * @property {string} dl_start Start date of range to cancel sessions.
   * @property {string} uid Recipient user key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_93
   * @property {string[]} a_class_period List of keys of the changed class periods. Only the first 10 are used to build the mail identifier.
   * @property {string} k_business Key of the business.
   * @property {string} s_change_sms Short list of the changes of the class period in SMS format. Used as the changes in all formats of the mail.
   * @property {string} s_class Class title.
   * @property {string} s_date_day_sms Date of the first changed class period in SMS format.
   * @property {string} s_date_time_sms Start time of the first changed class period in SMS format.
   * @property {string} s_schedule_details_html Details of the changed class periods in HTML format.
   * @property {string} s_schedule_details_text Details of the changed class periods in text format.
   * @property {string} uid Key of the staff member (user) who receives the mail. If empty, the mail is not sent.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_94
   * @property {string} dl_visit Date, when client can visit this class.
   * @property {string} dt_visit Date, when client can visit this class. The legacy prefix remains for backward compatibility.
   * @property {string} k_class_period Class schedule ID.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_95_a_asset
   * @property {string} k_asset Asset key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_95_a_visit
   * @property {string} k_visit Visit key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_95
   * @property {Wl_Mail_SendMailModel_a_data_95_a_asset} a_asset Optional. Keys of the assets used for the reservations. Empty array by default.  Each element:
   * @property {Wl_Mail_SendMailModel_a_data_95_a_visit} a_visit Keys of the visits of the recurrent booking. The first one identifies the booking. If the list is empty, the e-mail is not sent. Each element:
   * @property {string} k_business Key of the business to which the visits belong.
   * @property {string} uid Key of the staff member's user who receives the e-mail.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_96_a_asset
   * @property {string} k_asset Asset key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_96_a_visit
   * @property {string} k_visit Visit key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_96
   * @property {Wl_Mail_SendMailModel_a_data_96_a_asset} a_asset Optional. Keys of the assets used for the reservations. Empty array by default.  Each element:
   * @property {Wl_Mail_SendMailModel_a_data_96_a_visit} a_visit Keys of the visits of the recurrent booking. The first one identifies the booking. If the list is empty, the e-mail is not sent. Each element:
   * @property {string} k_business Key of the business to which the visits belong.
   * @property {string} uid Key of the staff member's user who receives the e-mail.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_97
   * @property {string[]} a_class_period List of class periods ID.
   * @property {string} dt_start The start date of the period.
   * @property {string} dt_time New time.
   * @property {string} k_business Business key.
   * @property {string} k_location Location key.
   * @property {string} s_change_html Changes in html format.
   * @property {string} s_change_sms Changes in sms format.
   * @property {string} s_change_text Changes Changes in text format.
   * @property {string} s_class Class title.
   * @property {string} s_duration Duration.
   * @property {string} s_location Location title.
   * @property {string} s_location_address Location address.
   * @property {string} s_location_city City title.
   * @property {string} s_location_country Country title.
   * @property {string} s_location_postalcode Postalcode.
   * @property {string} s_location_region Region title.
   * @property {string} s_room Room.
   * @property {string} s_special Special information.
   * @property {string} s_with List of staff members (without the recipient's mail).
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_98
   * @property {string} dt_date The date and the time of the class session.
   * @property {string} k_business Business key.
   * @property {string} k_class_period Class period key.
   * @property {string} k_location Location key.
   * @property {string} s_duration Duration.
   * @property {string} s_location Location title.
   * @property {string} s_location_address Location address.
   * @property {string} s_location_city City title.
   * @property {string} s_location_country Country title.
   * @property {string} s_location_postalcode Postalcode.
   * @property {string} s_location_region Region title.
   * @property {string} s_room Room.
   * @property {string} s_service_name Class title.
   * @property {string} s_special Special information.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_99
   * @property {string} k_business Business key.
   * @property {string} k_video Video key.
   * @property {string} k_visit Visit key.
   * @property {string} uid Recipient user key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_100
   * @property {string} dl_birthday Optional. Feb-29-normalized cycle anchor date (business local, no time).  Not set for the legacy non-automation send, which always fires exactly on the client's actual birthday, so the birth date of the client is used instead.
   * @property {string} k_business Business key. Required: if it is empty, the e-mail is not sent.
   * @property {string} s_id User ID. Not read by this method.
   * @property {string} s_realname User real name. Not read by this method.
   * @property {string} uid Key of the user (client) who has the birthday. Required: if the user does not exist, the e-mail is not sent.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_101
   * @property {string} dt_agree Date of signing the contract. The contract signed at this date is sent. A zero date or `null` selects the contract that is not signed yet. The key is required: the method reads it without a check.
   * @property {string} k_business Business ID.
   * @property {string} k_purchase_item Purchase item ID.
   * @property {string} uid User ID.  Optional. If it is empty (the purchase was done for a guest), the mail is not sent.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_102
   * @property {string} k_login_coupon Key of the purchased coupon (Gift Card).
   * @property {string} s_mail Optional. E-mail of the recipient.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_103
   * @property {string[]} a_visit Visit keys.
   * @property {string} k_visit Visit key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_104
   * @property {string[]} a_visit Visit keys.
   * @property {string} k_mail_pattern_live Email pattern live key.
   * @property {string} k_staff Staff key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_105
   * @property {string} dl_visit Date, when client can visit this class.
   * @property {string} dt_visit Date, when client can visit this class. The legacy prefix remains for backward compatibility.
   * @property {string} k_class_period Class schedule ID.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_106
   * @property {string} k_business Business key.
   * @property {string} k_video Video key.
   * @property {string} k_visit Visit key.
   * @property {string} uid Recipient user key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_107
   * @property {string} k_business Key of the business to send the e-mail from.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_108
   * @property {string} k_business Key of the business to send the e-mail from.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_109
   * @property {string} k_business Key of the business to send the e-mail from.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_110
   * @property {string} k_business Business key.
   * @property {string} text_date_day The date of the Service in the following format: Friday, May 15, 2015.
   * @property {string} text_duration The duration of the workout.
   * @property {string} text_fitbuilder_wod_url The URL of the workout.
   * @property {string} text_workout_title The title of the workout.
   * @property {string} uid_actor Recipient id.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_111
   * @property {string} k_business Business key.
   * @property {string} s_secret Secret of the guest pass invite.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_112
   * @property {string} k_business Business key.
   * @property {string} s_secret Secret of the guest pass invite.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_113
   * @property {string} k_business Business key.
   * @property {string} s_secret Secret of the guest pass invite.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_114
   * @property {string} k_business Business key.
   * @property {string} s_description The description of the issue or question the user is experiencing.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_115
   * @property {number} i_trial_period The number of days in the trial period.
   * @property {string} k_business_customer Key of affected business.
   * @property {string} s_mail Email address sent email message.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_116
   * @property {string} k_business_actor Key of affected business.
   * @property {string} s_mail Email address sent email message.
   * @property {string} uid_actor User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_117
   * @property {string} k_business Business key.
   * @property {string} s_mail Recipient email.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_118
   * @property {string} k_business_partner Optional. Key of the business partner, if the client came from the partner program. Default is `0`.
   * @property {string} s_business_name Optional. Business name. Default is an empty string.
   * @property {string} s_client_mail Client's email. Required: if it is empty, the email is not sent.
   * @property {string} s_firstname Optional. Client's firstname. Default is an empty string.
   * @property {string} s_fullname Client's full name. Required. Also used for the field `s_id` of the email.
   * @property {string} s_industry Optional. Type of industry of the client business. Default is an empty string.
   * @property {string} s_lastname Optional. Client's lastname. Default is an empty string.
   * @property {string} s_phone Optional. Client's phone. Default is an empty string.
   * @property {string} s_promo Optional. Promo code. Default is an empty string.
   * @property {string} s_reference Optional. From where client hear about wellnessliving. Default is an empty string.
   * @property {string} s_website Optional. Client's website. Default is an empty string.
   * @property {string} text_site_page Optional. Current page title. Default is an empty string.
   * @property {string} url_current Optional. Current page url. Default is an empty string.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_119_a_lead_info
   * @property {number} i_day Day of birthday. Used only for the birthday field.
   * @property {number} i_month Month of birthday. Used only for the birthday field.
   * @property {number} i_year Year of birthday. Used only for the birthday field.
   * @property {string} uid_referrer Key of the user who referred the lead. Used only for the referrer field.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_119
   * @property {Wl_Mail_SendMailModel_a_data_119_a_lead_info} a_lead_info The post request from lead form widget. Besides the keys below it has one string value of every form field under the key `field-` followed by the key of the field:
   * @property {string} k_business Key of business.
   * @property {?string} k_location Key of location.  `null` if form of lead not contains field with location
   * @property {string} k_skin Key of skin.
   * @property {string} s_mail Mail of staff.
   * @property {string} uid Staff user key.
   * @property {string} uid_lead Lead user key.
   * @property {string} url_view_profile Url to Lead's client profile.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_120
   * @property {string} k_business Business key.
   * @property {string} k_mail_pattern Pattern key.
   * @property {string} uid User ID.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_121
   * @property {string} html_view_conversation_button Button that staff can click to view the conversation between client and AI Agent.
   * @property {string} k_business Business key.
   * @property {string} text_lead_information The information submitted by a prospective client to the AI agent.
   * @property {string} text_lead_information_sms The information submitted by a prospective client to the AI agent (SMS format).
   * @property {string} uid Recipient user's key.
   * @property {string} url_view_conversation_link URL to view the conversation (for email).
   * @property {string} url_view_conversation_link_sms URL to view the conversation (for SMS).
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_122
   * @property {string} dtu_date Optional. Date and time of the stage change in UTC, in MySQL format. If empty or invalid, the stage change date variable stays empty.
   * @property {string} k_business Optional. Key of the business.  If empty, no variable is resolved and the data is returned with empty variables.
   * @property {string} k_lead_stage Optional. Key of the current lead stage.  If empty, the current stage variable stays empty.
   * @property {string} k_lead_stage_old Optional. Key of the previous lead stage.  If empty, the previous stage variable stays empty.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_123
   * @property {string} k_business Business ID.
   * @property {string} uid User ID.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_124
   * @property {string} dt_date Date of the attendance in the MySQL date format.
   * @property {string} k_business Business key.
   * @property {string} s_class_period_html Details of the class period in html format.
   * @property {string} s_class_period_text Details of the class period in text format.
   * @property {string} s_mail Email address.
   * @property {string} s_name User name.
   * @property {string} uid User ID.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_125
   * @property {number} i_id Optional. ID of the location. Required if `k_location` is not set.
   * @property {string} k_location Optional. Location key. Takes precedence over `i_id`.
   * @property {string} k_mail_pattern Mail pattern ID. If empty, the e-mail is not sent.
   * @property {string} uid User ID. If empty, the e-mail is not sent.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_126
   * @property {string} dl_birthday Optional. Feb-29-normalized cycle anchor date (business local, no time), set for automation sends.
   * @property {string} k_business Business ID. If empty, the e-mail is not sent.
   * @property {string} uid User ID.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_127
   * @property {string} k_pay_bank Payment card ID.  Required.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_128
   * @property {string} k_business Key of the business.
   * @property {string} text_mail Email address.
   * @property {string} uid Key of the user.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_129
   * @property {string} k_business Optional. Business key.  If not set, it is determined by `k_mail_pattern_live`.
   * @property {string} k_mail_pattern_live Live mail pattern key. Required if `k_business` is not set.
   * @property {string} s_business_name Optional. Business name. If empty, the title of the business `k_business` is used.
   * @property {string} s_business_reply Optional. Reply-to address of the business. Empty by default.
   * @property {string} s_mail Optional if `uid` is set. Email address. If both `s_mail` and `uid` are empty, the e-mail is not sent.
   * @property {string} s_phone Optional. Phone number. Empty by default.
   * @property {string} uid Optional if `s_mail` is set. User ID. Empty for a recipient who is not a user.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_130_a_action
   * @property {string} dt_date Date of the action in the MySQL date format.
   * @property {string} k_appointment Appointment key. Set only for an appointment; when it is empty the action is treated as a class or an enrollment.
   * @property {string} k_class_period Class period key. Used when `k_appointment` is empty.
   * @property {string} k_location Location key.
   * @property {string} k_visit Visit key. Used when `k_appointment` is set.
   * @property {string} s_location_postalcode Optional. Postal code of the location. Empty by default.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_130_a_asset
   * @property {number} i_count Number of sessions of the asset.
   * @property {string} text_name Name of the asset.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_130
   * @property {Wl_Mail_SendMailModel_a_data_130_a_action} a_action Information about the appointment. Used elements:
   * @property {Wl_Mail_SendMailModel_a_data_130_a_asset} a_asset Optional. List of assets info. Empty list by default. Every element is:
   * @property {string} uid User ID.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_131_a_action
   * @property {string} dt_date Date of the action in the MySQL date format.
   * @property {string} k_appointment Appointment key. Set only for an appointment; when it is empty the action is treated as a class or an enrollment.
   * @property {string} k_class_period Class period key. Used when `k_appointment` is empty.
   * @property {string} k_location Location key.
   * @property {string} k_visit Visit key. Used when `k_appointment` is set.
   * @property {string} s_location_postalcode Optional. Postal code of the location. Empty by default.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_131_a_asset
   * @property {number} i_count Number of sessions of the asset.
   * @property {string} text_name Name of the asset.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_131
   * @property {Wl_Mail_SendMailModel_a_data_131_a_action} a_action Information about the class. Used elements:
   * @property {Wl_Mail_SendMailModel_a_data_131_a_asset} a_asset Optional. List of assets info. Empty list by default. Every element is:
   * @property {string} uid User ID.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_132_a_action
   * @property {string} dt_date Date of the action in the MySQL date format.
   * @property {string} k_appointment Appointment key. Set only for an appointment; when it is empty the action is treated as a class or an enrollment.
   * @property {string} k_class_period Class period key. Used when `k_appointment` is empty.
   * @property {string} k_location Location key.
   * @property {string} k_visit Visit key. Used when `k_appointment` is set.
   * @property {string} s_location_postalcode Optional. Postal code of the location. Empty by default.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_132_a_asset
   * @property {number} i_count Number of sessions of the asset.
   * @property {string} text_name Name of the asset.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_132
   * @property {Wl_Mail_SendMailModel_a_data_132_a_action} a_action Information about the enrollment. Used elements:
   * @property {Wl_Mail_SendMailModel_a_data_132_a_asset} a_asset Optional. List of assets info. Empty list by default. Every element is:
   * @property {string} uid User ID.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_133
   * @property {string} dtu_purchase Purchase date.
   * @property {string} k_currency Currency key.
   * @property {string} k_login_promotion Login promotion key.
   * @property {string} k_pay_installment Installment that purchase belongs to.
   * @property {string} k_purchase Purchase key.
   * @property {string} m_amount An amount which was debit from a client account.
   * @property {string} uid_money Money owner of the account debit. Used together with `k_login_promotion` or `k_pay_installment`: the email is sent to this user. If not set, the email is sent to the payer of the purchase option.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_134
   * @property {number} i_id Optional. ID of the location. Required if `k_location` is not set.
   * @property {string} k_location Optional. Location key. Takes precedence over `i_id`.
   * @property {string} k_mail_pattern Mail pattern ID. If empty, the e-mail is not sent.
   * @property {string} uid User ID. If empty, the e-mail is not sent.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_135
   * @property {string} k_business Business key.
   * @property {string} k_statement Statement key.
   * @property {string} uid User key of the payer.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_136
   * @property {boolean} is_password Optional. `true` to add a new password, `false` to change the existing password. If not set, it is determined from the stored password of the user.
   * @property {string} k_business Optional. Business key.
   * @property {string} uid User ID.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_137
   * @property {string} html_message Notification message HTML, already resolved for this recipient (bracket tokens already substituted and the WYSIWYG content already filtered).
   * @property {string} k_business Key of business.
   * @property {string} text_subject Notification subject, already resolved for this recipient.
   * @property {string} uid Staff user key who receives this notification.
   * @property {?string} uid_client User key of the client who triggered the automation.  `null` if the automation has no triggering client.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_138
   * @property {string} i_id Key of the member group the client was added to.
   * @property {string} k_business Key of the business in which the client was added to the member group.
   * @property {string} uid Key of the user (client) who was added to the member group.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_139
   * @property {number|string} i_id Key of the member group the client was removed from.
   * @property {string} k_business Business key.
   * @property {string} uid Key of the removed user. If the user does not exist, the e-mail is not sent.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_140
   * @property {string} html_view_conversation_button Button that staff can click to view the conversation between client and AI Agent.
   * @property {string} k_business Business key.
   * @property {string} text_client_mail Client's email address.
   * @property {string} text_client_name Client's name.
   * @property {string} text_client_phone Client's phone number.
   * @property {string} text_location The name of the specific location referred to in the email.
   * @property {string} text_query_note Any note left by the client for the staff.
   * @property {string} uid Recipient user's key.
   * @property {string} url_view_conversation_link URL to view the conversation (for email).
   * @property {string} url_view_conversation_link_sms URL to view the conversation (for SMS).
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_141
   * @property {string} s_otp_code Otp code integer that was random generated.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_142
   * @property {string} s_otp_code Otp code integer that was random generated.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_143
   * @property {string} text_business_name Business name.
   * @property {string} text_first_name Client's first name.
   * @property {string} text_newemail New email address.
   * @property {string} text_oldemail Old email address.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_144
   * @property {boolean} is_print Optional. Whether print version of an email is loaded. The button to print the e-mail is added to the e-mail only if the key is set and is `false`; if the key is not set, the button is not added.
   * @property {string} k_pay_account ID of the payment account to send information for.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_145
   * @property {boolean} is_send_force Optional. Value of the same name in the result. If not set or empty, `false`.
   * @property {string|number} k_business Optional. Key of the business the purchase belongs to.  Used together with `uid` to find the staff member who performed the purchase.
   * @property {string} k_purchase Key of the purchase.  If empty, the e-mail is not sent.
   * @property {string|number} uid Optional. Key of the user the purchase was performed for.  Used only when the purchase was made by a business. `0` or not set if there is no such user.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_146
   * @property {number} id_mode Mode ID. One of {@link Wl_Mode_ModeSid} constants.
   * @property {number} id_pay_exception Transaction exception ID. One of {@link Thoth_WlPay_PayExceptionSid} constants.
   * @property {string} k_business Business key.
   * @property {string} k_pay_transaction Transaction ID.
   * @property {string} k_pay_transaction_process Transaction process ID.
   * @property {string} s_mail Email address sent email message.
   * @property {string} uid_money Client user key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_147
   * @property {number} id_call_outcome How the call ended. One of {@link Wl_AiAgent_Phone_CallOutcomeEnum} cases.
   * @property {string} k_business Business key.
   * @property {string} text_call_summary Short summary of the call generated by CAASI.
   * @property {string} text_caller_name The caller's name, if identified.
   * @property {string} text_caller_phone The caller's phone number.
   * @property {string} uid Recipient user's key.
   * @property {string} url_view_conversation_link URL to view the conversation (for email).
   * @property {string} url_view_conversation_link_sms URL to view the conversation (for SMS).
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_148
   * @property {number} id_website ID of the desired subscription plan from {@link Wl_Business_Account_WebsiteSid}.
   * @property {string} k_business Business key.
   * @property {string} s_mail Recipient email.
   * @property {string} uid Key of the user, who requested activation.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_149
   * @property {number} i_id Purchase item key. Required to find the product.
   * @property {string} uid Uid of the receiver of the email.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_150
   * @property {string} k_business Optional. Business ID, where procedure has been started. If it is empty or not set, the business name is empty and user data is loaded without a business.
   * @property {string} s_mail Address to which email must be sent. It is old user email.
   * @property {string} uid User ID - owner of the email address.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_151
   * @property {string} k_business Optional. Business ID, where procedure has been started. If it is empty or not set, the business name is empty and user data is loaded without a business.
   * @property {string} uid User ID - owner of the email address.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_152
   * @property {string} k_business Business key, where procedure has been started.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_153
   * @property {string} k_business Business key, where procedure has been started.
   * @property {string} uid User key.
   * @property {string} url_change_password The URL at which the user can change their password.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_154_a_low
   * @property {string} k_location Location key. If empty, it is detected by the promotion.
   * @property {string} k_login_promotion Login promotion key. Used to calculate the remaining visits.
   * @property {string} k_promotion Promotion key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_154
   * @property {Wl_Mail_SendMailModel_a_data_154_a_low} a_low Location, promotion IDs. If not set, it is built from `k_login_promotion`:
   * @property {string} k_login_promotion Login promotion key. Required if `a_low` is not set.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_155
   * @property {string} k_business Key of the business.
   * @property {string} k_login_promotion Login promotion key.
   * @property {string} k_mail_pattern_live Customized live mail pattern key.  Empty or `null` when no live mail pattern is used.
   * @property {string} uid User key, receiver of notification.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_156
   * @property {string} k_business Key of the business.
   * @property {string} k_login_promotion Login promotion key.
   * @property {string} uid Staff user key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_157
   * @property {string[]} a_id List of keys of login promotions (legacy automation). If not set, `i_id` is used instead.
   * @property {string} dl_end Optional. Local end date for new automation trigger. The new automation is used only when this key and `uid` are both not empty; otherwise the legacy automation is used.
   * @property {string} dt_end End date of the client login promotion. This key is not read by the method.
   * @property {number} i_delay Delay of mail pattern. For new automation it is replaced with the delay of the mail pattern `k_mail_pattern`, if that pattern is an automated one.
   * @property {number} i_id Id of login promotion. Required when `a_id` is not set: it is used to find the promotion and as the identifier of the mail.
   * @property {number} id_duration_delay Measuring unit of `i_delay`. One of {@link ADurationSid} constants.
   * @property {string} k_business Optional. Business key. Required for new automation.
   * @property {string} k_mail_pattern Optional. Key of the mail pattern. Used for new automation only to get the actual delay.
   * @property {string} uid Optional. User key. Required for new automation.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_158
   * @property {string} dt_date Date when payment occur.
   * @property {number} f_account_amount Amount of account balance. Always negative otherwise this mail should not be sent.
   * @property {number} f_pay_amount Payment amount.
   * @property {string} k_currency Currency ID.
   * @property {string} k_login_promotion ID of the purchased membership. If `k_pay_installment` not specified then this field is required otherwise is should not be specified.
   * @property {string} k_pay_installment ID of an installment plan to charge for. If `k_login_promotion` not specified then this field is required otherwise is should not be specified.
   * @property {string} uid_money Money owner of the charge. The e-mail is sent to this user. If not set, the e-mail is sent to the payer of the purchase option.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_159
   * @property {string} dt_date Date of the failed payment by UTC.
   * @property {string} k_login_promotion Optional. ID of the purchased membership. If `k_pay_installment` is not specified then this field is required, otherwise it should not be specified.
   * @property {string} k_pay_installment Optional. ID of an installment plan to charge for. If `k_login_promotion` is not specified then this field is required, otherwise it should not be specified.
   * @property {?string} k_promotion Optional. ID of the purchase option to be converted in, if this is a conversion. `null`, if this is not a conversion. Used only together with `k_login_promotion`.
   * @property {{}} o_pay_amount Payment amount.
   * @property {string} s_message Error messages that occurred while payment.
   * @property {string} uid_money Optional. Money owner of the charge. The e-mail is sent to this user. If not set, the e-mail is sent to the payer of the purchase option.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_160
   * @property {string} dt_date Due date.
   * @property {string} k_login_promotion ID of the purchased membership.
   * @property {{}} o_pay_amount Payment amount.
   * @property {string} uid_money Optional. Money owner of the charge. The e-mail is sent to this user. If not set, the e-mail is sent to the payer of the purchase option.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_161
   * @property {string} dt_end Optional. Date of the renewal. If empty or not set, the renewal text of the e-mail is empty.
   * @property {string} dt_start Optional. New activation date after renewal. If empty or not set, the start date of the promotion is used.
   * @property {string} k_business Business ID.
   * @property {string} k_promotion Promotion ID.
   * @property {string} uid User ID.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_162
   * @property {number} i_delay Delay of mail pattern.
   * @property {number} i_id Login promotion ID.
   * @property {number} id_duration_delay Measuring unit of `i_delay`.One of {@link ADurationSid} constants.
   * @property {string} uid UID of user.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_163
   * @property {number} i_id Id of login promotion. The key must be set; pass an empty value to use `k_login_promotion` or `k_promotion` instead.
   * @property {string} k_login_promotion Optional. Id of login promotion. Used only when `i_id` is empty.
   * @property {string} k_promotion Optional. Promotion ID. Used only when `i_id` and `k_login_promotion` are empty.
   * @property {string} uid Id of user.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_164
   * @property {boolean} is_send_force `true` if mail should be sent even if this pattern is disabled on the mails page.
   * @property {string} k_business Business key.
   * @property {string} k_mail_pattern_live Key of the custom pattern.
   * @property {string} k_promotion Promotion key.
   * @property {string} k_purchase Purchase key.
   * @property {string} uid User key purchase performed for.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_165
   * @property {number} i_id Key of the visit.
   * @property {string} k_business Key of the business in which the visit was made.
   * @property {string} uid Key of the user who attended the service and receives the e-mail.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_166
   * @property {string} k_promotion_pay_pause Key of the hold period.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_167
   * @property {number} $id_language Language ID. One of {@link Core_Locale_Language_LocaleLanguageSid} constants.
   * @property {string} k_promotion_pay_pause Key of the hold period.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_168
   * @property {boolean} is_send_force Optional. `true` to send the e-mail even if the user has disabled it. When the key is missing or empty, it is treated as `false`. It is passed to the result as is.
   * @property {string} k_business Optional. Key of the business the purchase belongs to.  Together with `uid` it is used to find out whether the recipient is a staff member of the business; if so, the name of the staff member is used as the name of the sender.
   * @property {string} k_purchase Key of the purchase.  If it is empty or the purchase does not exist, the e-mail is not sent.
   * @property {string} uid Optional. Key of the user the e-mail is sent to. Used only if the purchase was made by a business; otherwise the user is taken from the purchase.
   * @property {string} uid_money Optional. Money owner of the charge. Used only if the purchase was made by a user: the e-mail is sent to this user. If not set, or the user does not exist, the e-mail is sent to the money owner of the user who made the purchase.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_169
   * @property {boolean} is_send_force Optional. `true` to send the e-mail even if the user has disabled it. When the key is missing or empty, it is treated as `false`. It is passed to the result as is.
   * @property {string} k_business Optional. Key of the business the purchase belongs to.  Together with `uid` it is used to find out whether the recipient is a staff member of the business; if so, the name of the staff member is used as the name of the sender.
   * @property {string} k_purchase Key of the purchase.  If it is empty or the purchase does not exist, the e-mail is not sent.
   * @property {string} uid Optional. Key of the user the e-mail is sent to. Used only if the purchase was made by a business; otherwise the user is taken from the purchase.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_170
   * @property {boolean} is_send_force Optional. `true` to send the e-mail even if the user has disabled it. When the key is missing or empty, it is treated as `false`. It is passed to the result as is.
   * @property {string} k_business Optional. Key of the business the purchase belongs to.  Together with `uid` it is used to find out whether the recipient is a staff member of the business; if so, the name of the staff member is used as the name of the sender.
   * @property {string} k_purchase Key of the purchase.  If it is empty or the purchase does not exist, the e-mail is not sent.
   * @property {string} uid Optional. Key of the user the e-mail is sent to. Used only if the purchase was made by a business; otherwise the user is taken from the purchase.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_171
   * @property {string} k_location Location ID.
   * @property {string} k_shop_product_option Product option ID.
   * @property {string} uid User ID.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_172
   * @property {string} k_business Business key.
   * @property {string} k_promotion Promotion key.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_173
   * @property {string} k_currency A currency identifier with which the purchase was bought.
   * @property {string} k_purchase Purchase ID.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_174
   * @property {string} k_business Key of business.
   * @property {string} s_mail Mail of staff.
   * @property {string} uid Staff user key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_175
   * @property {string} k_business_subscribe Key of affected business.
   * @property {string} s_mail Email address sent email message.
   * @property {string} uid_actor User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_176
   * @property {string} k_business Key of business.
   * @property {string} k_quiz The quiz key.
   * @property {string} s_mail Mail of staff.
   * @property {string} uid Staff user key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_177
   * @property {string} k_business Key of business.
   * @property {string} k_quiz_login Quiz login key.
   * @property {string} uid Staff user key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_178
   * @property {string} k_business Business key.
   * @property {string} s_mail Recipient email.
   * @property {string} text_report_name Name of the report.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_179
   * @property {string} k_review Review key.
   * @property {string} s_mail User email address.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_180
   * @property {string} k_review Review key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_181
   * @property {number} i_id Key of the review.  It is passed to `rs_review_item()` as the review key.
   * @property {string} k_business Key of the business in which the review was left.
   * @property {string} uid Key of the user who left the review and who receives the e-mail.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_182
   * @property {string} s_balance Number of reward points the client currently has on their account.
   * @property {string} s_points The number of points that the client used to redeem the reward.
   * @property {string} s_reward The item that the client has requested as a reward.
   * @property {string} uid Client ID.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_183
   * @property {string} s_business_name Name of business.
   * @property {string} s_client_full_name Name and surname of the client, that redeemed reward.
   * @property {string} s_client_name Name of the client, that redeemed reward.
   * @property {string} s_points The number of points that the client used to redeem the reward.
   * @property {string} s_reward The item that the client has requested as a reward.
   * @property {string} uid Staff key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_184
   * @property {boolean} is_send_force Optional. `true` to send the e-mail even if the user has disabled it. When the key is missing or empty, it is treated as `false`.
   * @property {string} k_business Business ID.
   * @property {string} k_purchase Purchase ID.
   * @property {string} uid Optional. Key of the staff member the e-mail is sent to.  The receiver in the result is always set to this value, or to `0` if the key is missing.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_185
   * @property {number} i_id Key of the visit of the service.
   * @property {string} k_business Key of the business to which the visit belongs. It is required.
   * @property {string} uid Key of the user who booked the service. The e-mail is not sent if this user does not exist.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_186
   * @property {number} i_day Day of the finished through finished work push certificate.
   * @property {string} k_spa_application Application ID.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_187
   * @property {string} html_view_conversation_button Button that staff can click to view the conversation between client and AI Agent.
   * @property {string} k_business Business key.
   * @property {string} text_callback_note Any note left by the client for the staff.
   * @property {string} text_client_mail The client's email address.
   * @property {string} text_client_name The client's name.
   * @property {string} text_client_phone The client's phone.
   * @property {string} text_location Appointment location.
   * @property {string} uid Recipient user's key.
   * @property {string} url_view_conversation_link URL to view the conversation (for email).
   * @property {string} url_view_conversation_link_sms URL to view the conversation (for SMS).
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_188
   * @property {string} k_staff Identifier of the staff assigned to task.
   * @property {string} k_task Task ID.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_189
   * @property {string} dt_agree Date and time when the user agreed to the contract, in UTC, in MySQL format. It must exactly match the date of an agreement of the user. If it is not set or empty, the current contract text of the business is used and the e-mail is built without an agreement date. If the user has no agreement at exactly this date, nothing is sent.
   * @property {string} k_business Business ID.
   * @property {string} uid User ID.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_190
   * @property {string} k_business Business key.
   * @property {string} k_ticket_order Key of the order.
   * @property {string} s_mail Email to send the message to instead of the email of the buyer. For example, when the tickets are sent once again to another address.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_191
   * @property {string} dt_visit Date, when client can visit this class.
   * @property {string} k_class_period Class schedule ID.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_192
   * @property {number} id_plan ID of the desired subscription plan from {@link Wl_Business_Account_Subscription_Fitvid_FitvidSubscriptionSid}.
   * @property {string} k_business Business key.
   * @property {string} s_mail Recipient email.
   * @property {string} uid_actor Key of the user, who requested activation.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_193
   * @property {number} i_id Key of the visit.
   * @property {string} k_business Key of the business.  Must match the business of the visit.
   * @property {string} k_mail_pattern Key of the mail pattern.  Used to check whether the campaign was already sent for the visit.
   * @property {string} uid Key of the user (client) to whom the e-mail is sent.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_194
   * @property {string} i_id Key of the visit that was marked as no-show.
   * @property {string} k_business Key of the business to which the visit belongs.  Required: it is used to create the shard connection.
   * @property {string} uid Key of the user to whom the e-mail is sent.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_195
   * @property {string} k_business Business key.
   * @property {string} k_visit Visit key.
   */

  /**
   * @typedef {{}} Wl_Mail_SendMailModel_a_data_196
   * @property {number} i_license_all Total number of Zoom licenses.
   * @property {number} i_license_remain Number of Zoom licenses that remain unused.
   * @property {number} i_percent_use Percent of Zoom licenses that are in use.
   * @property {string} s_mail E-mail address of the recipient.
   */

  /**
   * Additional data for the notification.
   *
   * The structure depends on the notification type specified in {@link Wl_Mail_SendMailModel.id_mail}.
   *
   * @post post
   * @type {Wl_Mail_SendMailModel_a_data_A|Wl_Mail_SendMailModel_a_data_B|Wl_Mail_SendMailModel_a_data_C|Wl_Mail_SendMailModel_a_data_D|Wl_Mail_SendMailModel_a_data_E|Wl_Mail_SendMailModel_a_data_F|Wl_Mail_SendMailModel_a_data_G|Wl_Mail_SendMailModel_a_data_H|Wl_Mail_SendMailModel_a_data_I|Wl_Mail_SendMailModel_a_data_J|Wl_Mail_SendMailModel_a_data_K|Wl_Mail_SendMailModel_a_data_L|Wl_Mail_SendMailModel_a_data_M|Wl_Mail_SendMailModel_a_data_N|Wl_Mail_SendMailModel_a_data_O|Wl_Mail_SendMailModel_a_data_P|Wl_Mail_SendMailModel_a_data_Q|Wl_Mail_SendMailModel_a_data_R|Wl_Mail_SendMailModel_a_data_S|Wl_Mail_SendMailModel_a_data_T|Wl_Mail_SendMailModel_a_data_U|Wl_Mail_SendMailModel_a_data_V|Wl_Mail_SendMailModel_a_data_W|Wl_Mail_SendMailModel_a_data_X|Wl_Mail_SendMailModel_a_data_Y|Wl_Mail_SendMailModel_a_data_Z|Wl_Mail_SendMailModel_a_data_26|Wl_Mail_SendMailModel_a_data_27|Wl_Mail_SendMailModel_a_data_28|Wl_Mail_SendMailModel_a_data_29|Wl_Mail_SendMailModel_a_data_30|Wl_Mail_SendMailModel_a_data_31|Wl_Mail_SendMailModel_a_data_32|Wl_Mail_SendMailModel_a_data_33|Wl_Mail_SendMailModel_a_data_34|Wl_Mail_SendMailModel_a_data_35|Wl_Mail_SendMailModel_a_data_36|Wl_Mail_SendMailModel_a_data_37|Wl_Mail_SendMailModel_a_data_38|Wl_Mail_SendMailModel_a_data_39|Wl_Mail_SendMailModel_a_data_40|Wl_Mail_SendMailModel_a_data_41|Wl_Mail_SendMailModel_a_data_42|Wl_Mail_SendMailModel_a_data_43|Wl_Mail_SendMailModel_a_data_44|Wl_Mail_SendMailModel_a_data_45|Wl_Mail_SendMailModel_a_data_46|Wl_Mail_SendMailModel_a_data_47|Wl_Mail_SendMailModel_a_data_48|Wl_Mail_SendMailModel_a_data_49|Wl_Mail_SendMailModel_a_data_50|Wl_Mail_SendMailModel_a_data_51|Wl_Mail_SendMailModel_a_data_52|Wl_Mail_SendMailModel_a_data_53|Wl_Mail_SendMailModel_a_data_54|Wl_Mail_SendMailModel_a_data_55|Wl_Mail_SendMailModel_a_data_56|Wl_Mail_SendMailModel_a_data_57|Wl_Mail_SendMailModel_a_data_58|Wl_Mail_SendMailModel_a_data_59|Wl_Mail_SendMailModel_a_data_60|Wl_Mail_SendMailModel_a_data_61|Wl_Mail_SendMailModel_a_data_62|Wl_Mail_SendMailModel_a_data_63|Wl_Mail_SendMailModel_a_data_64|Wl_Mail_SendMailModel_a_data_65|Wl_Mail_SendMailModel_a_data_66|Wl_Mail_SendMailModel_a_data_67|Wl_Mail_SendMailModel_a_data_68|Wl_Mail_SendMailModel_a_data_69|Wl_Mail_SendMailModel_a_data_70|Wl_Mail_SendMailModel_a_data_71|Wl_Mail_SendMailModel_a_data_72|{}|Wl_Mail_SendMailModel_a_data_73|Wl_Mail_SendMailModel_a_data_74|Wl_Mail_SendMailModel_a_data_75|Wl_Mail_SendMailModel_a_data_76|Wl_Mail_SendMailModel_a_data_77|Wl_Mail_SendMailModel_a_data_78|Wl_Mail_SendMailModel_a_data_79|Wl_Mail_SendMailModel_a_data_80|Wl_Mail_SendMailModel_a_data_81|Wl_Mail_SendMailModel_a_data_82|Wl_Mail_SendMailModel_a_data_83|Wl_Mail_SendMailModel_a_data_84|Wl_Mail_SendMailModel_a_data_85|Wl_Mail_SendMailModel_a_data_86|Wl_Mail_SendMailModel_a_data_87|Wl_Mail_SendMailModel_a_data_88|Wl_Mail_SendMailModel_a_data_89|Wl_Mail_SendMailModel_a_data_90|Wl_Mail_SendMailModel_a_data_91|Wl_Mail_SendMailModel_a_data_92|Wl_Mail_SendMailModel_a_data_93|Wl_Mail_SendMailModel_a_data_94|Wl_Mail_SendMailModel_a_data_95|Wl_Mail_SendMailModel_a_data_96|Wl_Mail_SendMailModel_a_data_97|Wl_Mail_SendMailModel_a_data_98|Wl_Mail_SendMailModel_a_data_99|Wl_Mail_SendMailModel_a_data_100|Wl_Mail_SendMailModel_a_data_101|Wl_Mail_SendMailModel_a_data_102|Wl_Mail_SendMailModel_a_data_103|Wl_Mail_SendMailModel_a_data_104|Wl_Mail_SendMailModel_a_data_105|Wl_Mail_SendMailModel_a_data_106|Wl_Mail_SendMailModel_a_data_107|Wl_Mail_SendMailModel_a_data_108|Wl_Mail_SendMailModel_a_data_109|Wl_Mail_SendMailModel_a_data_110|Wl_Mail_SendMailModel_a_data_111|Wl_Mail_SendMailModel_a_data_112|Wl_Mail_SendMailModel_a_data_113|Wl_Mail_SendMailModel_a_data_114|Wl_Mail_SendMailModel_a_data_115|Wl_Mail_SendMailModel_a_data_116|Wl_Mail_SendMailModel_a_data_117|Wl_Mail_SendMailModel_a_data_118|Wl_Mail_SendMailModel_a_data_119|Wl_Mail_SendMailModel_a_data_120|Wl_Mail_SendMailModel_a_data_121|Wl_Mail_SendMailModel_a_data_122|Wl_Mail_SendMailModel_a_data_123|Wl_Mail_SendMailModel_a_data_124|Wl_Mail_SendMailModel_a_data_125|Wl_Mail_SendMailModel_a_data_126|Wl_Mail_SendMailModel_a_data_127|Wl_Mail_SendMailModel_a_data_128|Wl_Mail_SendMailModel_a_data_129|Wl_Mail_SendMailModel_a_data_130|Wl_Mail_SendMailModel_a_data_131|Wl_Mail_SendMailModel_a_data_132|Wl_Mail_SendMailModel_a_data_133|Wl_Mail_SendMailModel_a_data_134|Wl_Mail_SendMailModel_a_data_135|Wl_Mail_SendMailModel_a_data_136|Wl_Mail_SendMailModel_a_data_137|Wl_Mail_SendMailModel_a_data_138|Wl_Mail_SendMailModel_a_data_139|Wl_Mail_SendMailModel_a_data_140|Wl_Mail_SendMailModel_a_data_141|Wl_Mail_SendMailModel_a_data_142|Wl_Mail_SendMailModel_a_data_143|Wl_Mail_SendMailModel_a_data_144|Wl_Mail_SendMailModel_a_data_145|Wl_Mail_SendMailModel_a_data_146|Wl_Mail_SendMailModel_a_data_147|Wl_Mail_SendMailModel_a_data_148|Wl_Mail_SendMailModel_a_data_149|Wl_Mail_SendMailModel_a_data_150|Wl_Mail_SendMailModel_a_data_151|Wl_Mail_SendMailModel_a_data_152|Wl_Mail_SendMailModel_a_data_153|Wl_Mail_SendMailModel_a_data_154|Wl_Mail_SendMailModel_a_data_155|Wl_Mail_SendMailModel_a_data_156|Wl_Mail_SendMailModel_a_data_157|Wl_Mail_SendMailModel_a_data_158|Wl_Mail_SendMailModel_a_data_159|Wl_Mail_SendMailModel_a_data_160|Wl_Mail_SendMailModel_a_data_161|Wl_Mail_SendMailModel_a_data_162|Wl_Mail_SendMailModel_a_data_163|Wl_Mail_SendMailModel_a_data_164|Wl_Mail_SendMailModel_a_data_165|Wl_Mail_SendMailModel_a_data_166|Wl_Mail_SendMailModel_a_data_167|Wl_Mail_SendMailModel_a_data_168|Wl_Mail_SendMailModel_a_data_169|Wl_Mail_SendMailModel_a_data_170|Wl_Mail_SendMailModel_a_data_171|Wl_Mail_SendMailModel_a_data_172|Wl_Mail_SendMailModel_a_data_173|Wl_Mail_SendMailModel_a_data_174|Wl_Mail_SendMailModel_a_data_175|Wl_Mail_SendMailModel_a_data_176|Wl_Mail_SendMailModel_a_data_177|Wl_Mail_SendMailModel_a_data_178|Wl_Mail_SendMailModel_a_data_179|Wl_Mail_SendMailModel_a_data_180|Wl_Mail_SendMailModel_a_data_181|Wl_Mail_SendMailModel_a_data_182|Wl_Mail_SendMailModel_a_data_183|Wl_Mail_SendMailModel_a_data_184|Wl_Mail_SendMailModel_a_data_185|Wl_Mail_SendMailModel_a_data_186|Wl_Mail_SendMailModel_a_data_187|Wl_Mail_SendMailModel_a_data_188|Wl_Mail_SendMailModel_a_data_189|Wl_Mail_SendMailModel_a_data_190|Wl_Mail_SendMailModel_a_data_191|Wl_Mail_SendMailModel_a_data_192|Wl_Mail_SendMailModel_a_data_193|Wl_Mail_SendMailModel_a_data_194|Wl_Mail_SendMailModel_a_data_195|Wl_Mail_SendMailModel_a_data_196}
   */
  this.a_data = undefined;

  /**
   * The mail type ID.
   *
   * One of the {@link RsMailSid} constants.
   * If not provided, {@link RsMailSid} is used.
   *
   * @post post
   * @see RsMailSid
   * @type {number}
   */
  this.id_mail = 22;

  /**
   * The business key.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The business's mailing address.
   *
   * @post post
   * @type {string}
   */
  this.s_business_mail = "";

  /**
   * The business name.
   *
   * @post post
   * @type {string}
   */
  this.s_business_name = "";

  /**
   * The business's reply.
   *
   * @post post
   * @type {string}
   */
  this.s_business_reply = "";

  /**
   * The campaign name.
   *
   * @post post
   * @type {string}
   */
  this.s_campaign = "";

  /**
   * The message uncompressed content.
   *
   * @post post
   * @type {string}
   */
  this.s_html = "";

  /**
   * The message recipient's address.
   *
   * @post post
   * @type {string}
   */
  this.s_mail = "";

  /**
   * The message's subject line.
   *
   * @post post
   * @type {string}
   */
  this.s_subject = "";

  /**
   * The receiver user key.
   * `null` if the email should not be linked to a specific user's contact history.
   *
   * @post post
   * @type {?string}
   */
  this.uid = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Mail_SendMailModel);

/**
 * @inheritDoc
 */
Wl_Mail_SendMailModel.prototype.config=function()
{
  return {"a_field":{"a_data":{"post":{"post":true}},"id_mail":{"post":{"post":true}},"k_business":{"post":{"get":true}},"s_business_mail":{"post":{"post":true}},"s_business_name":{"post":{"post":true}},"s_business_reply":{"post":{"post":true}},"s_campaign":{"post":{"post":true}},"s_html":{"post":{"post":true}},"s_mail":{"post":{"post":true}},"s_subject":{"post":{"post":true}},"uid":{"post":{"post":true}}}};
};

/**
 * Sends email.
 *
 * Validates the recipient address, business email, subject, and HTML content, then saves the email pattern
 * and dispatches the message to the specified recipient. Rate limiting is applied per hour and per minute.
 *
 * @function
 * @name Wl_Mail_SendMailModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
