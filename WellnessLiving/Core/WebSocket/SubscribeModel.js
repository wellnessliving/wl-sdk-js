/**
 * Checks whether a listener can subscribe to specified channel.
 * Subscribes in a case of positive result.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_WebSocket_SubscribeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_A
   * @property {number} id_visit Visit status ID. One of {@link Wl_Visit_VisitSid} constants.
   * @property {string} k_business Key of a business.
   * @property {string} uid Key of the user.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_B
   * @property {string} k_business Key of a business.
   * @property {string} uid_receiver Key of the user.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_C
   * @property {string} k_channel Messenger channel key.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_D
   * @property {string} dtu_class_period Class schedule session date.
   * @property {string} k_appointment Appointment key.
   * @property {string} k_business Business key.
   * @property {string} k_class_period Class schedule key.
   * @property {string} k_visit Visit key.
   * @property {string} s_secret Visit secret key.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_E
   * @property {string} k_business Business key.
   * @property {string} uid_receiver User key who will receive message.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_F
   * @property {?string} k_business Key of a business to which report to subscribe.
   * @property {string} s_report Key of a report to subscribe to.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_G
   * @property {string} k_business Business key.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_H
   * @property {string} k_business Key of the business.
   * @property {string} uid_actor Key of the actor.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_I
   * @property {string} k_business Business key.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_J
   * @property {string} k_business Business key.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_K
   * @property {number} id_import_custom ID of custom import process. One of {@link Wl_Import_Custom_CustomSid} constants.
   * @property {string} k_business Business key within which import is progressing.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_L
   * @property {string} k_business Business in which the report was generated.
   * @property {string} uid User who requested the report generation.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_M
   * @property {number} id_report ID of the report.
   * @property {string} k_business Business key in which the report was monitoring.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_N
   * @property {string} k_business Key of the business.
   * @property {string} uid UID of the client for which failed to send SMS.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_O
   * @property {string} k_business Business key.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_P
   * @property {string} k_business Business key.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_Q
   * @property {string} k_business Business key.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_R
   * @property {string} k_location Location where session booked or cancelled.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_S
   * @property {string} k_business Business key.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_T
   * @property {string} k_business Key of a business.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_U
   * @property {string} k_business Key of the business.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_V
   * @property {string} k_business Key of the business.
   * @property {string} k_business_merchant Key of the business merchant.
   * @property {string} k_pay_transaction Pay transaction key, which was used to create ticket.
   * @property {string} s_ticket_id Gateway Ticket ID.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_W
   * @property {string} k_business Key of the business.
   * @property {string} uid_actor Key of the actor.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_X
   * @property {string} uid_response Key of user who can grant access to location.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_Y
   * @property {string} k_location Location key.
   * @property {string} uid User-receiver of response.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_Z
   * @property {string} k_location Key of location access to which was requested.
   * @property {string} uid_request Key of user who requested access to location.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_26
   * @property {string} k_business Business key.
   * @property {string} uid User key.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_27
   * @property {string} k_business Business key.
   * @property {string} s_id Key of the task where addresses should be verified.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_28
   * @property {string} k_business Key of the business.
   * @property {string} k_business_merchant Key of the business merchant.
   * @property {string} k_pay_transaction Pay transaction key, which was used to create ticket.
   * @property {string} s_exchange_identification Gateway exchange identification.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_29
   * @property {string} k_business Business key.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_30
   * @property {string} k_business Key of the business.
   * @property {string} uid_receiver Key of the user.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_key_31
   * @property {string} k_business Key of the business.
   * @property {string} uid UID of the client.
   */

  /**
   * Keys of the channel.
   *
   * Key is name of a key field in a channel controller.
   * Value is its value.
   *
   * Subscriber will only receive notifications about events in which all these values equal values specified here.
   *
   * @post post
   * @type {Core_WebSocket_SubscribeModel_a_key_A|Core_WebSocket_SubscribeModel_a_key_B|Core_WebSocket_SubscribeModel_a_key_C|{}|Core_WebSocket_SubscribeModel_a_key_D|Core_WebSocket_SubscribeModel_a_key_E|Core_WebSocket_SubscribeModel_a_key_F|Core_WebSocket_SubscribeModel_a_key_G|Core_WebSocket_SubscribeModel_a_key_H|Core_WebSocket_SubscribeModel_a_key_I|Core_WebSocket_SubscribeModel_a_key_J|Core_WebSocket_SubscribeModel_a_key_K|Core_WebSocket_SubscribeModel_a_key_L|Core_WebSocket_SubscribeModel_a_key_M|Core_WebSocket_SubscribeModel_a_key_N|Core_WebSocket_SubscribeModel_a_key_O|Core_WebSocket_SubscribeModel_a_key_P|Core_WebSocket_SubscribeModel_a_key_Q|Core_WebSocket_SubscribeModel_a_key_R|Core_WebSocket_SubscribeModel_a_key_S|Core_WebSocket_SubscribeModel_a_key_T|Core_WebSocket_SubscribeModel_a_key_U|Core_WebSocket_SubscribeModel_a_key_V|Core_WebSocket_SubscribeModel_a_key_W|Core_WebSocket_SubscribeModel_a_key_X|Core_WebSocket_SubscribeModel_a_key_Y|Core_WebSocket_SubscribeModel_a_key_Z|Core_WebSocket_SubscribeModel_a_key_26|Core_WebSocket_SubscribeModel_a_key_27|Core_WebSocket_SubscribeModel_a_key_28|Core_WebSocket_SubscribeModel_a_key_29|Core_WebSocket_SubscribeModel_a_key_30|Core_WebSocket_SubscribeModel_a_key_31}
   */
  this.a_key = undefined;

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_A
   * @property {string} k_visit Key of a book/visit.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_B
   * @property {number} i_unread_alert The count with unread alert for the user.
   * @property {boolean} is_active Whether message is active. This is needed to avoid showing previous messages on page reload.
   * @property {boolean} is_message Whether this is an alert for an SMS message
   * @property {boolean} is_sound Whether the user should hear a sound when a notification is sent.
   * @property {?string} k_alert Key of the alert that was just sent.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_C_a_data_message
   * @property {number} id Message key.
   * @property {string} message Message text.
   * @property {string} updated_at Date/time when the message has been posted.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_C_a_data_user_profile
   * @property {number} id_gender User gender. One of {@link Wl_Gender_GenderSid} constants.
   * @property {string} s_first_name User first name.
   * @property {string} s_last_name User last name.
   * @property {string} uid User key.
   * @property {string} url_photo URL of the user's profile photo.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_C_a_data
   * @property {Core_WebSocket_SubscribeModel_a_message_broadcast_C_a_data_message} message Message information:
   * @property {Core_WebSocket_SubscribeModel_a_message_broadcast_C_a_data_user_profile} user_profile User's information:
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_C
   * @property {Core_WebSocket_SubscribeModel_a_message_broadcast_C_a_data} a_data New information for messenger.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_D
   * @property {?string} k_business Business key.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_E
   * @property {string} url_redirect Url link to redirect to join virtual meeting.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_F
   * @property {number} i_overdue Number of overdue tasks.
   * @property {number} id_task_status New task status of the changed task.
   * @property {string} k_task Key of the changed task.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_G
   * @property {number} i_cas_change A CAS (compare-and-swap) number that allows to track changes in the report storage.
   * @property {number} id_report_status Status of this report.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_H
   * @property {string} text_title New title of the business.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_I
   * @property {boolean} is_active Whether message is active. This is needed to avoid showing previous messages on page reload.
   * @property {?boolean} is_booking_in_progress Whether booking is in progress.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_J_a_visit
   * @property {string} dtl_end Date/time of end.
   * @property {string} dtl_start Date/time of start.
   * @property {boolean} is_cancel `true` if book was canceled; `false` otherwise.
   * @property {string} s_key Book key.
   * @property {string} text_address Address of location.
   * @property {string} text_location Title of location.
   * @property {string} text_note Description of event.
   * @property {string} text_title Title of event.
   * @property {string} url URL of virtual service. Empty if the visit is not virtual.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_J
   * @property {Core_WebSocket_SubscribeModel_a_message_broadcast_J_a_visit} a_visit New data of changes schedule item:
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_K
   * @property {number} i_complete Number of successfully processed items.
   * @property {number} i_fail Number of failed items.
   * @property {number} i_left Number of items left to process.
   * @property {string} k_import Key of the import being processing.
   * @property {string} url_log Url link to download log file with import progress.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_L
   * @property {number} i_generation Duration of the generation of the report in seconds.
   * @property {number} id_report ID of the report that was generated. One of the {@link RsReportSid} constants.
   * @property {boolean} is_need_show Whether need to display a message about report generation, regardless of the generation time.
   * @property {string} k_report_accumulation Report accumulation.
   * @property {string} text_report Title of the report that was generated.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_M
   * @property {string} html_error_message The text of the error.
   * @property {string} s_key The unique key of the sent SMS.
   * @property {number} tl_send The time in UNIX format when socket message was sent.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_N
   * @property {string} text_title New title of the business.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_O_a_domain_token
   * @property {number} id_status Status of the token. One of {@link Wl_Mail_Domain_DomainVerifyStatusSid} constants.
   * @property {string} text_host Host part of the token, which should be added to the DNS records.
   * @property {string} text_icon_class CSS class for the icon representing the token status.
   * @property {string} text_status Text representation of the token status.
   * @property {string} text_type Type of the token. One of {@link Wl_Mail_Domain_DomainTokenTypeSid} constants in text representation.
   * @property {string} text_value Value of the token, which should be added to the DNS records.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_O
   * @property {Core_WebSocket_SubscribeModel_a_message_broadcast_O_a_domain_token} a_domain_token List of email domain tokens:
   * @property {number} id_domain_status Email domain status.
   * @property {string} text_domain_status_icon CSS class for the icon representing the email domain status.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_P
   * @property {number} id_mail_verify_status Status of mail verification. One of the {@link Wl_Mail_Verify_MailVerifyStatusSid} constants. Or {@link Wl_Business_Config_Option_OptionSidAbstract} if option "Enable Custom Reply To Emails" in Business -> Feature is disabled.
   * @property {string} text_email Email address to check.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_Q
   * @property {string} dtl_end Session end date/time.
   * @property {string} dtl_start Session start date/time.
   * @property {?string} k_appointment Key of the changed appointment. Is set only if changed session is appointment.
   * @property {?string} k_class_period Key of the changed class session. Is set only if changed session is class.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_R
   * @property {string} dt_end_local End of change interval.
   * @property {string} dt_start_local Start of change interval.
   * @property {?string} k_class_tab_new New "Book now" tab primary key in {@link Wl_Classes_Tab_TabSid} table.
   * @property {?string} k_class_tab_old Old "Book now" tab primary key in {@link Wl_Classes_Tab_TabSid} table.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_S
   * @property {?string} k_login_type Key of the client type.
   * @property {string} uid Key of the user.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_T
   * @property {?number} id_card_system Card type ID.
   * @property {?number} id_pay_exception Transaction exception ID.
   * @property {?number} id_ticket_status Ticket status.
   * @property {string} m_tip Amount of tips entered by customer on terminal.
   * @property {?string} s_card_holder Cardholder name.
   * @property {?string} s_expire Card expiration date.
   * @property {?string} s_last4 Last four digits of the card number.
   * @property {?string} text_message Text message to notify the client.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_U
   * @property {number} i_unread_sms The count with unread SMS in the business.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_V
   * @property {boolean} is_close `true` if the request has been already processed (question window must not be shown); `false` otherwise (question window must be shown).
   * @property {string} k_location Location key.
   * @property {string} text_full_name Name of the user requesting access.
   * @property {string} text_location Location title.
   * @property {string} uid_request Key of user who request access to location.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_W
   * @property {boolean} is_grant `true` - access is granted; `false` - denied.
   * @property {string} text_full_name Full name of user-receiver of response.
   * @property {number} tu_send The time in seconds with fractional part in UNIX format when socket message was sent.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_X
   * @property {boolean} is_inactive `true` if a new assess request has been sent (question window must be not closed); `false` otherwise (question window must be closed).
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_Y_a_visit
   * @property {string} dtl_end Date/time of end.
   * @property {string} dtl_start Date/time of start.
   * @property {boolean} is_cancel `true` if book was canceled; `false` otherwise.
   * @property {string} s_key Book key.
   * @property {string} text_location Title of location.
   * @property {string} text_note Description of event.
   * @property {string} text_title Title of event.
   * @property {string} url URL of virtual service. Empty if the visit is not virtual.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_Y
   * @property {Core_WebSocket_SubscribeModel_a_message_broadcast_Y_a_visit} a_visit New data of changes schedule item:
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_Z_a_invalid_a_address
   * @property {string} text_address Address string.
   * @property {string} text_city City title.
   * @property {string} text_country Country title.
   * @property {string} text_postal Postal address.
   * @property {string} text_state State.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_Z_a_invalid
   * @property {Core_WebSocket_SubscribeModel_a_message_broadcast_Z_a_invalid_a_address} a_address Address information.
   * @property {boolean} is_address Whether address string is specified.
   * @property {boolean} is_checked `true` if address check, `false` otherwise.
   * @property {string} text_email User email address.
   * @property {string} text_name User name.
   * @property {string} text_note Note.
   * @property {string} text_phone User phone number.
   * @property {string} uid User key.
   * @property {string} url Link to user profile.
   * @property {string} url_image Link to user image.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_Z_a_valid_a_address
   * @property {string} text_address Address string.
   * @property {string} text_city City title.
   * @property {string} text_country Country title.
   * @property {string} text_postal Postal address.
   * @property {string} text_state State.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_Z_a_valid
   * @property {Core_WebSocket_SubscribeModel_a_message_broadcast_Z_a_valid_a_address} a_address Address information.
   * @property {boolean} is_address Whether address string is specified.
   * @property {boolean} is_checked `true` if address check, `false` otherwise.
   * @property {string} text_email User email address.
   * @property {string} text_name User name.
   * @property {string} text_note Note.
   * @property {string} text_phone User phone number.
   * @property {string} uid User key.
   * @property {string} url Link to user profile.
   * @property {string} url_image Link to user image.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_Z
   * @property {Core_WebSocket_SubscribeModel_a_message_broadcast_Z_a_invalid} a_invalid List of users for which address verification failed.
   * @property {Core_WebSocket_SubscribeModel_a_message_broadcast_Z_a_valid} a_valid List of users for which address verification succeed.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_26
   * @property {?number} id_card_system Card type ID.
   * @property {?number} id_card_type Card type ID.
   * @property {?number} id_pay_exception Transaction exception ID.
   * @property {?number} id_payment_status Payment status.
   * @property {?string} m_tip Tip amount entered by the customer at the terminal.
   * @property {?string} s_last4 Last four digits of the card number.
   * @property {?string} text_card_holder Cardholder name.
   * @property {?string} text_message Text message to notify the client.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_27
   * @property {number} f_progress Accumulation process progress.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_28_a_info
   * @property {string} dtl_last_activity The date and time of the last SMS in the dialog.
   * @property {number} i_unread_sms A count of unread messages.
   * @property {boolean} is_inbound Whether the last SMS is inbound or not.
   * @property {string} text_last_sms The text of last sms.
   * @property {string} uid The UID of the client.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_28
   * @property {Core_WebSocket_SubscribeModel_a_message_broadcast_28_a_info} a_info An array with information about dialog:
   * @property {number} tl_send The time in UNIX format when socket message was sent.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_29_a_info
   * @property {string} dtl_message Date and time, when SMS messages were sent, in MySQL format.
   * @property {boolean} is_automated `true` if SMS was sent from task, `false` - if the staff member sent SMS.
   * @property {boolean} is_outbound `true` if staff member sent SMS, `false` - if the client sent the SMS.
   * @property {string} k_sms_history The key of SMS history.
   * @property {string} sid_sms_status Sid of the SMS status.
   * @property {string} text_date The day when SMS messages were sent.
   * @property {string} text_sender_name The sender's name.
   * @property {string} text_sms_body The body of the SMS.
   * @property {string} text_sms_status The title of the SMS status.
   * @property {string} text_sms_type The title of the mail type.
   * @property {string} text_time The time when SMS was sent.
   * @property {?string} uid_sender The UID of the sender, `null` - if SMS sent from task.
   */

  /**
   * @typedef {{}} Core_WebSocket_SubscribeModel_a_message_broadcast_29
   * @property {Core_WebSocket_SubscribeModel_a_message_broadcast_29_a_info} a_info An array with information about SMS:
   * @property {string} s_key The unique key of sent SMS from 2-way SMS chat. The key need to update SMS information in the chat after sent SMS to client.
   */

  /**
   * All messages in queue. Key is a message key. Value is message data.
   *
   * When a client is initially subscribed for a WebSocket channel, entire message queue is sent to the client.
   * This is needed to send message that were generated before a client has subscribed.
   *
   * @post result
   * @type {(Core_WebSocket_SubscribeModel_a_message_broadcast_A|Core_WebSocket_SubscribeModel_a_message_broadcast_B|Core_WebSocket_SubscribeModel_a_message_broadcast_C|Core_WebSocket_SubscribeModel_a_message_broadcast_D|Core_WebSocket_SubscribeModel_a_message_broadcast_E|Core_WebSocket_SubscribeModel_a_message_broadcast_F|Core_WebSocket_SubscribeModel_a_message_broadcast_G|Core_WebSocket_SubscribeModel_a_message_broadcast_H|Core_WebSocket_SubscribeModel_a_message_broadcast_I|{}|Core_WebSocket_SubscribeModel_a_message_broadcast_J|Core_WebSocket_SubscribeModel_a_message_broadcast_K|Core_WebSocket_SubscribeModel_a_message_broadcast_L|Core_WebSocket_SubscribeModel_a_message_broadcast_M|Core_WebSocket_SubscribeModel_a_message_broadcast_N|Core_WebSocket_SubscribeModel_a_message_broadcast_O|Core_WebSocket_SubscribeModel_a_message_broadcast_P|Core_WebSocket_SubscribeModel_a_message_broadcast_Q|Core_WebSocket_SubscribeModel_a_message_broadcast_R|Core_WebSocket_SubscribeModel_a_message_broadcast_S|Core_WebSocket_SubscribeModel_a_message_broadcast_T|Core_WebSocket_SubscribeModel_a_message_broadcast_U|Core_WebSocket_SubscribeModel_a_message_broadcast_V|Core_WebSocket_SubscribeModel_a_message_broadcast_W|Core_WebSocket_SubscribeModel_a_message_broadcast_X|Core_WebSocket_SubscribeModel_a_message_broadcast_Y|Core_WebSocket_SubscribeModel_a_message_broadcast_Z|Core_WebSocket_SubscribeModel_a_message_broadcast_26|Core_WebSocket_SubscribeModel_a_message_broadcast_27|Core_WebSocket_SubscribeModel_a_message_broadcast_28|Core_WebSocket_SubscribeModel_a_message_broadcast_29)[]}
   */
  this.a_message_broadcast = undefined;

  /**
   * Channel controller CID.
   *
   * @post post
   * @see Core_WebSocket_ChannelAbstract
   * @type {number}
   */
  this.cid_channel = 0;

  /**
   * Subscriber password.
   *
   * @post post
   * @type {string}
   */
  this.s_password = "";

  /**
   * Request token.
   *
   * This token is only used for asynchronous functions, and identifies a specific request.
   *
   * @post post
   * @type {string}
   */
  this.s_token = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_WebSocket_SubscribeModel);

/**
 * @inheritDoc
 */
Core_WebSocket_SubscribeModel.prototype.config=function()
{
  return {"a_field":{"a_key":{"post":{"post":true}},"a_message_broadcast":{"post":{"result":true}},"cid_channel":{"post":{"post":true}},"s_password":{"post":{"post":true}},"s_token":{"post":{"post":true}}}};
};

/**
 * Checks whether a listener can subscribe to specified channel.
 * Subscribes in a case of positive result.
 *
 * Called by the WebSocket client immediately after a connection is established, to register interest in
 * a specific channel (identified by CID and key fields). If the current user is not permitted to receive
 * events on that channel, the subscription is rejected. On success, any messages already queued for the
 * channel are returned so the client does not miss events that arrived before the subscription was set up.
 *
 * @function
 * @name Core_WebSocket_SubscribeModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
