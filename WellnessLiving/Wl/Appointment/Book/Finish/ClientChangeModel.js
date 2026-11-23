/**
 * Changes the client of an appointment by ending the original client's visit and booking a new client
 * in one atomic transaction.
 *
 * The visit is ended in one of two ways, which the staff member confirmed ({@link Wl_Appointment_Book_Finish_ClientChangeModel.is_deny}):
 * - an early cancel of a Booked, Pending or Checked-in visit;
 * - a denial of an unanswered booking request, as the denial in the back office does it. An unfinished
 *   Book & pay (a system request) is ended by the denial too: it sends no mail, because the client has not been
 *   told about the booking.
 *
 * The status of the visit that the staff member saw is sent in {@link Wl_Appointment_Book_Finish_ClientChangeModel.id_visit}. The visit is
 * locked and checked inside the transaction, and when it has another status now, nothing is written.
 *
 * Either both the ending of the visit and the booking succeed, or neither is written.
 *
 * The booking input follows the same format as a single provider entry of
 * {@link Wl_Appointment_Book_Finish_FinishMultipleModel.a_book_data}.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Finish_ClientChangeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A list of answers for the questions from {@link Wl_Appointment_Book_Question_QuestionModel.a_question}.
   *
   * Keys refer to hashes of the questions. Values refer to answers for the questions.
   *
   * @post post
   * @type {string[]}
   */
  this.a_answer = [];

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_ClientChangeModel_a_appointment
   * @property {string} k_appointment The appointment key.
   */

  /**
   * The booked appointments. Every element has the key:
   *
   * @post result
   * @type {Wl_Appointment_Book_Finish_ClientChangeModel_a_appointment[]}
   */
  this.a_appointment = [];

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_ClientChangeModel_a_book_data_a_resource
   * @property {number} [i_index] The asset index on the layout.
   * @property {string} k_resource The asset.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_ClientChangeModel_a_book_data_a_product
   * @property {number} i_count The add-on buy count.
   * @property {number} [i_count_use] The add-on use count. Defaults to buy count.
   * @property {string} k_shop_product_option The add-on key.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_ClientChangeModel_a_book_data
   * @property {Wl_Appointment_Book_Finish_ClientChangeModel_a_book_data_a_product[]} [a_product] Add-ons to the appointment. Each element:
   * @property {Wl_Appointment_Book_Finish_ClientChangeModel_a_book_data_a_resource} [a_resource] The list of assets for the appointment booking.
   * Keys refer to asset categories. Values are arrays with the next keys:
   * @property {string} dt_date The date/time for the booking in MySQL format in the location's time zone.
   * @property {number} [i_duration] The duration for the asset booking in minutes. For separate asset bookings only.
   * @property {number} [i_index] The asset index on the layout. For separate asset bookings only.
   * @property {number} [id_gender_staff] The gender of the staff member. One of the {@link AGenderSid} constants.
   * @property {number} [id_purchase_item] Type of the purchase item. One of the {@link RsPurchaseItemSid} constants.
   * @property {boolean} [is_unpaid_force] `true` to book the appointment as unpaid.
   * @property {boolean} [is_wait_list_unpaid] `true` if appointment waits unpaid.
   * @property {string} [k_login_prize] The user's prize.
   *
   * @property {string} [k_login_promotion] The user's Purchase Option.
   *
   * @property {string} [k_resource] The asset. For separate asset bookings only.
   *
   * @property {string} k_service The appointment service.
   *
   * @property {string} [k_session_pass] The user's pass.
   *
   * @property {string} [k_timezone] The time zone key.
   * @property {string} [uid_staff] The staff member conducting the appointment.
   *
   * @property {string} [uid_staff_date] The staff member conducting the appointment. Set only when adding a customer
   * to an existing appointment.
   *
   * @property {string} [url_virtual] The meeting link for a non-integrated virtual service.
   */

  /**
   * All data required to book the new appointment for the replacement client.
   *
   * Uses the same format as a single element of the `a_provider` array within
   * {@link Wl_Appointment_Book_Finish_FinishMultipleModel.a_book_data}.
   *
   * @post post
   * @type {Wl_Appointment_Book_Finish_ClientChangeModel_a_book_data}
   */
  this.a_book_data = {};

  /**
   * The activity IDs of bookings that have been made.
   *
   * @post result
   * @type {string[]}
   */
  this.a_login_activity_visit = [];

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_ClientChangeModel_a_notification
   * @property {boolean} [is_attach] `true` to attach calendar file, `false` to not attach calendar file.
   * @property {boolean} [is_campaign] Whether mail should track as a part of campaign. `true` if yes, `false` if no.
   * @property {boolean} [is_mail] `true` to send mail; `false` to not send.
   * @property {boolean} [is_push] `true` to send push notification; `false` to not send.
   * @property {boolean} [is_sms] `true` to send SMS; `false` to not send.
   * @property {string} [text_business_name] Business name.
   * @property {string} [text_business_reply] Reply email address.
   * @property {string} [text_campaign] Campaign name.
   * @property {string} [text_content_mail] Email content.
   * @property {string} [text_push] Push notification content.
   * @property {string} [text_sms] SMS content.
   * @property {string} [text_subject] Email subject.
   */

  /**
   * Information for sending an appointment notification to the new client.
   *
   * @post post
   * @type {Wl_Appointment_Book_Finish_ClientChangeModel_a_notification}
   */
  this.a_notification = {};

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_ClientChangeModel_a_notification_cancel
   * @property {boolean} [is_attach] `true` to attach calendar file, `false` to not attach calendar file.
   * @property {boolean} [is_campaign] Whether mail should track as a part of campaign. `true` if yes, `false` if no.
   * @property {string} [text_business_name] Business name.
   * @property {string} [text_business_reply] Reply email address.
   * @property {string} [text_campaign] Campaign name.
   * @property {string} [text_content_mail] Email content.
   * @property {string} [text_push] Push notification content.
   * @property {string} [text_sms] SMS content.
   * @property {string} [text_subject] Email subject.
   */

  /**
   * Edited content of the cancellation notification for the original client.
   * Used only when the visit is cancelled. A denial of a request sends the standard denial mail and ignores this field.
   *
   * @post post
   * @type {Wl_Appointment_Book_Finish_ClientChangeModel_a_notification_cancel}
   */
  this.a_notification_cancel = {};

  /**
   * The list of quiz response keys.
   * Key is quiz key.
   * Value is quiz response key.
   *
   * @post post
   * @type {string[]}
   */
  this.a_quiz_response = [];

  /**
   * The visit IDs of the newly booked appointments.
   *
   * @post result
   * @type {string[]}
   */
  this.a_visit = [];

  /**
   * Keys of booked visits.
   *
   * Structured into a two-dimensional array.
   * 1st dimension - providers; 2nd dimension - visit keys inside a provider.
   *
   * @post result
   * @type {string[][]}
   */
  this.a_visit_provider = [];

  /**
   * The booking service type. One of the {@link Wl_Classes_Tab_TabSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_class_tab = 0;

  /**
   * The mode type. One of the {@link Wl_Mode_ModeSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * The status of the original visit that the staff member saw. One of the {@link Wl_Visit_VisitSid} constants.
   *
   * When the visit has another status when the request is processed, the request is refused.
   *
   * @post post
   * @type {number}
   */
  this.id_visit = 0;

  /**
   * `true` if the staff member confirmed the denial of an unanswered booking request (the original visit is
   * ended as the denial of a request in the back office does it, the denial mail is always sent).
   * `false` if the staff member confirmed the early cancel of the visit.
   *
   * @post post
   * @type {boolean}
   */
  this.is_deny = false;

  /**
   * `true` to send cancellation mail to the original client.
   * `false` to suppress cancellation mail.
   *
   * @post post
   * @type {boolean}
   */
  this.is_inform_mail = true;

  /**
   * `true` to send cancellation push notification to the original client.
   * `false` to suppress push notification.
   *
   * @post post
   * @type {boolean}
   */
  this.is_inform_push = true;

  /**
   * `true` to send cancellation SMS to the original client.
   * `false` to suppress SMS notification.
   *
   * @post post
   * @type {boolean}
   */
  this.is_inform_sms = true;

  /**
   * `true` if the new client is a walk-in: a client without a profile, who has no key. {@link Wl_Appointment_Book_Finish_ClientChangeModel.uid_new}
   * is ignored then. `false` if the new client is the user {@link Wl_Appointment_Book_Finish_ClientChangeModel.uid_new}.
   *
   * @post get
   * @type {boolean}
   */
  this.is_walk_in = false;

  /**
   * The appointment key of the original appointment whose client is being changed.
   *
   * @post get
   * @type {string}
   */
  this.k_appointment = "0";

  /**
   * The business key.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The location of the original appointment and of the new booking.
   *
   * @post get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * The visit key of the original visit being cancelled.
   *
   * @post get
   * @type {string}
   */
  this.k_visit = "0";

  /**
   * Unique identifier of the wizard.
   *
   * @post post
   * @type {string}
   */
  this.s_id = "";

  /**
   * The reason of the cancellation. Ignored when the request is denied.
   *
   * @post post
   * @type {string}
   */
  this.text_reason = "";

  /**
   * The user key of the new client to book.
   *
   * @post get
   * @type {string}
   */
  this.uid_new = "0";

  /**
   * The user key of the original client whose visit is being cancelled.
   * For walk-in appointments, this should be empty.
   *
   * @post get
   * @type {string}
   */
  this.uid_original = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Finish_ClientChangeModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Finish_ClientChangeModel.prototype.config=function()
{
  return {"a_field": {"a_answer": {"post": {"post": true}},"a_appointment": {"post": {"result": true}},"a_book_data": {"post": {"post": true}},"a_login_activity_visit": {"post": {"result": true}},"a_notification": {"post": {"post": true}},"a_notification_cancel": {"post": {"post": true}},"a_quiz_response": {"post": {"post": true}},"a_visit": {"post": {"result": true}},"a_visit_provider": {"post": {"result": true}},"id_class_tab": {"post": {"post": true}},"id_mode": {"post": {"post": true}},"id_visit": {"post": {"post": true}},"is_deny": {"post": {"post": true}},"is_inform_mail": {"post": {"post": true}},"is_inform_push": {"post": {"post": true}},"is_inform_sms": {"post": {"post": true}},"is_walk_in": {"post": {"get": true}},"k_appointment": {"post": {"get": true}},"k_business": {"post": {"get": true}},"k_location": {"post": {"get": true}},"k_visit": {"post": {"get": true}},"s_id": {"post": {"post": true}},"text_reason": {"post": {"post": true}},"uid_new": {"post": {"get": true}},"uid_original": {"post": {"get": true}}}};
};
