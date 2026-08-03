/**
 * Pays for an appointment or appointment Purchase Option for a client.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Finish_FinishMultipleModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A list of answers for the questions from {@link Wl_Appointment_Book_Question_QuestionModel.a_question}.
   *
   * 1st dimension - provider index.
   * 2nd dimension - keys refer to hashes of the questions. Values refer to answers for the questions.
   *
   * @post post
   * @type {string[][]}
   */
  this.a_answer = [];

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_appointment
   * @property {string} k_appointment The appointment key.
   */

  /**
   * The booked appointments. Every element has the key:
   *
   * @post result
   * @type {Wl_Appointment_Book_Finish_FinishMultipleModel_a_appointment[]}
   */
  this.a_appointment = [];

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_provider_a_resource
   * @property {number} [i_index] The asset index on the layout. This is only specified if the asset category has a layout.
   * @property {string} k_resource The asset.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_provider_a_repeat
   * @property {number[]} [a_week] The days of the week when the appointment repeats. One of the constants of the {@link ADateWeekSid} class.
   * This will be empty if the appointment doesn't repeat weekly.
   * @property {string} [dl_end] The date when the appointment's repeat cycle stops. This will be empty if the repeat cycle doesn't stop at a certain date.
   * @property {number} [i_occurrence] The number of occurrences after which the appointment's repeat cycle stops.
   * This will be empty if the repeat cycle doesn't stop after a certain number of occurrences.
   * @property {number} i_period The frequency at which the appointment repeats.
   * @property {number} id_period The measurement unit of `i_period`. One of the {@link ADurationSid} constants.
   * @property {boolean} [is_month] <tt>true</tt> if the appointment repeats monthly on the same date.
   * <tt>false</tt> if the appointment repeats monthly on the same day of the week.
   * <tt>null</tt> if the appointment doesn't repeat monthly.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_provider_a_product
   * @property {number} i_count The add-on buy count.
   * @property {number} [i_count_use] The add-on use count. If not set, then use count is equals to buy count.
   * @property {string} k_shop_product_option The add-on key.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_provider_a_conflict
   * @property {string} dt_date_local New appointment date/time in MySQL in locale timezone.
   * @property {number} i_duration New asset booking duration.
   * @property {number} i_index New asset index.
   * @property {number} id_conflict Solution type. One of {@link RsAppointmentEditConflictSid} constants.
   * @property {string} k_resource New asset.
   * @property {?string} k_staff New staff member.  `null` in a case of asset booking.
   * @property {?string} uid_staff New staff member.  `null` in a case of asset booking.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_provider
   * @property {Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_provider_a_conflict[]} [a_conflict] Information about booking conflicts. Keys are bookings dates/times in MySQL format in UTC. Values are arrays with next keys:
   * @property {Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_provider_a_product} [a_product] Add-ons to the appointment. Specified for appointment bookings only.
   * The old format used array keys.  While the new format has each element as an array:
   * @property {Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_provider_a_repeat} [a_repeat] Information for the recurring booking:
   *
   * This will be empty if the appointment isn't booked recurringly.
   * @property {Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_provider_a_resource} [a_resource] The list of assets for the appointment booking.
   * Keys refer to asset categories. Values are arrays with the next keys:
   *
   * Specify this only for an appointment booking.
   * @property {string} dt_date The date/time for the booking in MySQL format in the location's time zone.
   * @property {number} [i_duration] The duration for the asset booking in minutes. Specify this for separate asset bookings only.
   * @property {number} [i_index] The asset index on the layout.
   * Specify this for separate asset bookings only and for cases when the asset category only has the layout.
   * @property {number} [id_gender_staff] The gender of the staff member conducting the appointment. One of the {@link AGenderSid} constants.
   * Specify this for appointment bookings only.
   * @property {number} [id_purchase_item] Type of the purchase item. One of the {@link Wl_Purchase_Item_ItemSid} constants.
   * @property {boolean} [is_unpaid_force] If `true`, the appointment is booked as unpaid. Otherwise, this will be `false` to select an available Purchase Option.
   * @property {boolean} [is_wait_list_unpaid] If `true`, appointment waits unpaid.
   * @property {string} [k_login_prize] The user's prize.
   *
   * @property {string} [k_login_promotion] The user's Purchase Option.
   * Specify this if you want to use a specific Purchase Option to pay for the booking.
   *
   * @property {string} [k_resource] The asset booking. Specify this for separate asset bookings only.
   *
   * @property {string} k_service The appointment booking. Specify this for appointment bookings only.
   *
   * @property {string} [k_session_pass] The user's pass (for example, a membership or a package).
   * Specify this if you want to set the pass to use to pay for the booking.
   *
   * @property {string} [k_staff] The staff member conducting the appointment.
   * Specify this for appointment bookings only.
   * deprecated Use <tt>uid_staff</tt>. Available for legacy allow-list only.
   *
   * @property {string} [uid_staff] The staff member conducting the appointment.
   * Specify this for appointment bookings only.
   *
   * @property {string} [k_staff_date] The staff member conducting the appointment.
   * The difference between this and <tt>k_staff</tt> is that this value must be set only in cases
   * when you want to add customer to an appointment that already exists.
   * Specify this for appointment bookings only.
   *
   * @property {string} [uid_staff_date] The staff member conducting the appointment.
   * The difference between this and <tt>uid_staff</tt> is that this value must be set only in cases
   * when you want to add customer to an appointment that already exists.
   * Specify this for appointment bookings only.
   *
   * @property {string} [k_timezone] The time zone key. This will be 'null' if the time zone used matches the time zone of the location.
   * @property {string} [uid] User key.
   * Specify only in a case of booking for a lof of different users.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data
   * @property {number} [id_class_tab] The booking service type. One of the {@link Wl_Classes_Tab_TabSid} constants.
   * @property {Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_provider[]} [a_provider] A list of providers and their booking details. Every element has next keys:
   */

  /**
   * All data required to book an appointment.
   *
   * @post post
   * @type {Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data}
   */
  this.a_book_data = {};

  /**
   * The activity IDs of bookings that have been made.
   *
   * @post result
   * @type {string[]}
   */
  this.a_login_activity_visit = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_notification
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
   * Information for sending an appointment notification.
   *
   * @post post
   * @type {Wl_Appointment_Book_Finish_FinishMultipleModel_a_notification}
   */
  this.a_notification = {};

  /**
   * The sum paid without tax for each provider.
   *
   * * Keys refer to provider indexes.
   * * Values are the paid amounts without tax.
   *
   * Only used for the following types of purchases:
   * * {@link Wl_Purchase_Item_ItemSid.SERVICE}
   * * {@link Wl_Purchase_Item_ItemSid.RESOURCE}
   * * {@link Wl_Purchase_Item_ItemSid.RESOURCE_DEPOSIT}
   * * {@link Wl_Purchase_Item_ItemSid.APPOINTMENT_DEPOSIT}
   *
   * This is a multi-provider equivalent of {@link Wl_Appointment_Book_Finish_FinishModel.m_pay}.
   *
   * @deprecated Paid amount is calculated and verified automatically from booking data.
   The field is left for compatibility with old code and to control the new algorithm.
   * @post post
   * @type {string[]}
   */
  this.a_paid = [];

  /**
   * The payment type ID for each provider.
   *
   * * Keys refer to provider indexes.
   * * Values are one of the {@link Wl_Appointment_PaySid} constants.
   *
   * This is a multi-provider equivalent of {@link Wl_Appointment_Book_Finish_FinishModel.id_pay}.
   *
   * @deprecated Payment type is calculated and verified automatically from booking data.
   The field is left for compatibility with old code and to control the new algorithm.
   * @post get
   * @type {number[]}
   */
  this.a_pay = [];

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_pay_form_pa
   * @property {string} [json_data] Additional payer authentication data.
   *
   *  Copy of value set with
   *  <tt>Wl_Pay_Processor_ProcessorInterface_Abstract.paDataSet()</tt>.
   *
   *  An empty string (or element not passed) if this payment processor does not provide additional payer
   *  authentication data, or payer authentication was not performed.
   * @property {string} [m_amount] Authenticated payment amount.
   *
   *  Copy of value set with
   *  <tt>Wl_Pay_Processor_ProcessorInterface_Abstract.paAmountSet()</tt>.
   *
   *  An empty string (or element not passed) if payer authentication was not performed.
   * @property {string} [k_pay_transaction] Key of the payment transaction that was created during payer authentication.
   *  In this case, payment transaction should be attached to this transaction.
   *
   *  An empty string (or element not passed) if transaction was not created during payer authentication, or payer
   *  authentication was not executed.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_pay_form
   * @property {number} f_amount Amount of money to withdraw with this payment source.
   * @property {number} id_pay_method Payment method. One of {@link WlPayMethodSid} constants.
   * @property {boolean} is_hide Whether this payment method is hidden.
   *
   * @property {boolean} [is_success] Whether this source was successfully charged.
   * @property {string} [m_fee] Fee amount for this payment source.
   *
   * @property {string} [m_surcharge] Surcharge amount for this payment source.
   * @property {Wl_Appointment_Book_Finish_FinishMultipleModel_a_pay_form_pa} [pa] Payer authentication data. Element may not present for payment sources that do not support payer authentication,
   *  or payer authentication is not implemented by this payment processor.
   *
   *  This array is represented by
   *  <tt>namespace.Wl/Pay/Processor/ProcessorInterface/PayerAuthenticationForm.xml</tt>
   *  at browser side.
   *
   *  Structure of the array:
   * @property {string} s_index Index of this form. This corresponds the key this item is written in this array with.
   */

  /**
   * A list of payment sources to pay with.
   *
   * Each source contains:
   *
   * @post post
   * @type {Wl_Appointment_Book_Finish_FinishMultipleModel_a_pay_form[]}
   */
  this.a_pay_form = [];

  /**
   * Payment is not processed by this API.
   *
   * Use the following APIs for payment:
   * * {@link Wl_Appointment_Book_Payment_PaymentModel}
   * * {@link Wl_Appointment_Book_Payment_PaymentPostModel}
   * * {@link Wl_Appointment_Book_Payment_PaymentMultipleModel}
   *
   * @deprecated Not used. See documentation.
   * @post post
   * @type {{}}
   */
  this.a_payment_data = {};

  /**
   * The purchase items keys.
   * This will be empty if no purchases have been made for the appointment booking.
   *
   * Keys refer to provider indexes.
   * Value is array of item keys.
   *
   * @post post
   * @type {string[][]}
   */
  this.a_purchase_item = [];

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
   * List of user keys to book appointments.
   * There may be empty values in this list, which means that this is a walk-in.
   *
   * @get get
   * @post get
   * @type {string[]}
   */
  this.a_uid = [];

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_user
   * @property {string|string[]} a_note The note or list of notes to add to the new user's profile.
   * @property {string} text_mail The new user's email address.
   * @property {string} text_name_first The new user's first name.
   * @property {string} text_name_last The new user's last name.
   * @property {string} text_phone The new user's mobile phone number.
   */

  /**
   * Data to create new users.
   * Specify this if <var>$uid</var> is empty.
   * The data must contain the next keys:
   *
   * @post get
   * @type {Wl_Appointment_Book_Finish_FinishMultipleModel_a_user}
   */
  this.a_user = {};

  /**
   * The visit IDs.
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
   * The mode type. One of the {@link Wl_Mode_ModeSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * Determines whether multiple appointments have been booked in back-to-back mode.
   *
   * @post post
   * @type {boolean}
   */
  this.is_back_to_back = false;

  /**
   * This will be `true` when trying to make a test booking and rollback should be applied.
   * Otherwise, this will be `false`.
   *
   * If the flag is set to `true`, credit card requirement will be ignored during this check.
   *
   * @post post
   * @type {boolean}
   */
  this.is_try = false;

  /**
   * If `true`, the client is a walk-in. Otherwise, this will be `false`.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.is_walk_in = false;

  /**
   * The appointment key.
   * Specify this to reschedule a certain appointment.
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
   * Location to show available appointment booking schedule.
   *
   * @get get,result
   * @post get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * Unique identifier of the wizard.
   *
   * @post post
   * @type {string}
   */
  this.s_id = "";

  /**
   * The user key.
   *
   * This field is used if the client books for himself or for the relative.
   *
   * This field is incorrect to use for guest booking since in this case the client will be checked as a relative.
   *
   * In case of a group booking or a guest booking, the key of the client who is making the booking is set here.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Finish_FinishMultipleModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Finish_FinishMultipleModel.prototype.config=function()
{
  return {"a_field": {"a_answer": {"post": {"post": true}},"a_appointment": {"post": {"result": true}},"a_book_data": {"post": {"post": true}},"a_login_activity_visit": {"post": {"result": true}},"a_notification": {"post": {"post": true}},"a_paid": {"post": {"post": true}},"a_pay": {"post": {"get": true}},"a_pay_form": {"post": {"post": true}},"a_payment_data": {"post": {"post": true}},"a_purchase_item": {"post": {"post": true}},"a_quiz_response": {"post": {"post": true}},"a_uid": {"get": {"get": true},"post": {"get": true}},"a_user": {"post": {"get": true}},"a_visit": {"post": {"result": true}},"a_visit_provider": {"post": {"result": true}},"id_mode": {"post": {"post": true}},"is_back_to_back": {"post": {"post": true}},"is_try": {"post": {"post": true}},"is_walk_in": {"get": {"get": true},"post": {"get": true}},"k_appointment": {"post": {"get": true}},"k_business": {"post": {"get": true}},"k_location": {"get": {"get": true,"result": true},"post": {"get": true}},"s_id": {"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};