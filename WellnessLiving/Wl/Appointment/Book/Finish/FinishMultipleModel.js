/**
 * Completes the appointment booking for one or more providers, optionally creating a new client.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Finish_FinishMultipleModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A list of answers for the questions from [QuestionApi](/Wl/Appointment/Book/Question/Question.json).
   *
   * 1st dimension - provider index.
   * 2nd dimension - keys refer to hashes of the questions. Values refer to answers for the questions.
   *
   * @post post
   * @type {string[][]}
   */
  this.a_answer = undefined;

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
  this.a_appointment = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_provider_a_conflict
   * @property {string} dt_date_local New appointment date/time in MySQL in locale timezone.
   * @property {number} i_duration New asset booking duration.
   * @property {number} i_index New asset index.
   * @property {number} id_conflict List of possible ways to solve a conflict.
   * @property {string} k_resource New asset.
   * @property {?string} k_staff New staff member.  `null` in a case of asset booking.
   * @property {?string} uid_staff New staff member.  `null` in a case of asset booking.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_provider_a_product
   * @property {number} i_count The add-on buy count.
   * @property {number} i_count_use The add-on use count. If not set, then use count is equals to buy count.
   * @property {string} k_shop_product_option The add-on key.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_provider_a_repeat
   * @property {number[]} a_week The days of the week when the appointment repeats. One of the constants of the {@link ADateWeekSid} class. This will be empty if the appointment doesn't repeat weekly.
   * @property {string} dl_end The date when the appointment's repeat cycle stops. This will be empty if the repeat cycle doesn't stop at a certain date.
   * @property {number} i_occurrence The number of occurrences after which the appointment's repeat cycle stops. This will be empty if the repeat cycle doesn't stop after a certain number of occurrences.
   * @property {number} i_period The frequency at which the appointment repeats.
   * @property {number} id_period A class for managing time intervals. Last ID: 9.
   * @property {boolean} is_month `true` if the appointment repeats monthly on the same date. `false` if the appointment repeats monthly on the same day of the week. `null` if the appointment doesn't repeat monthly.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_provider_a_resource
   * @property {number} i_index The asset index on the layout. This is only specified if the asset category has a layout.
   * @property {string} k_resource The asset.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_provider
   * @property {Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_provider_a_conflict} a_conflict Information about booking conflicts. Keys are bookings dates/times in MySQL format in UTC. Values are arrays with next keys:
   * @property {Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_provider_a_product} a_product Add-ons to the appointment. Specified for appointment bookings only. The old format used array keys.  While the new format has each element as an array:
   * @property {Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_provider_a_repeat} a_repeat Information for the recurring booking:
   * @property {Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_provider_a_resource} a_resource The list of assets for the appointment booking. Keys refer to asset categories. Values are arrays with the next keys:
   * @property {string} dt_date The date/time for the booking in MySQL format in the location's time zone.
   * @property {number} i_duration The duration for the asset booking in minutes. Specify this for separate asset bookings only.
   * @property {number} i_index The asset index on the layout. Specify this for separate asset bookings only and for cases when the asset category only has the layout.
   * @property {number} id_gender_staff String identifiers for gender.
   * @property {number} id_purchase_item A list of purchase types.
   * @property {boolean} is_unpaid_force If `true`, the appointment is booked as unpaid. Otherwise, this will be `false` to select an available Purchase Option.
   * @property {boolean} is_wait_list_unpaid If `true`, appointment waits unpaid.
   * @property {string} k_login_prize The user's prize.
   * @property {string} k_login_promotion The user's Purchase Option. Specify this if you want to use a specific Purchase Option to pay for the booking.
   * @property {string} k_resource The asset booking. Specify this for separate asset bookings only.
   * @property {string} k_service The appointment booking. Specify this for appointment bookings only.
   * @property {string} k_session_pass The user's pass (for example, a membership or a package). Specify this if you want to set the pass to use to pay for the booking.
   * @property {string} k_staff The staff member conducting the appointment. Specify this for appointment bookings only. deprecated Use `uid_staff`. Available for legacy allow-list only.
   * @property {string} k_staff_date The staff member conducting the appointment. The difference between this and `k_staff` is that this value must be set only in cases when you want to add customer to an appointment that already exists. Specify this for appointment bookings only.
   * @property {string} k_timezone The time zone key. This will be 'null' if the time zone used matches the time zone of the location.
   * @property {string} uid User key.  Specify only in a case of booking for a lof of different users.
   * @property {string} uid_staff The staff member conducting the appointment. Specify this for appointment bookings only.
   * @property {string} uid_staff_date The staff member conducting the appointment. The difference between this and `uid_staff` is that this value must be set only in cases when you want to add customer to an appointment that already exists. Specify this for appointment bookings only.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data
   * @property {Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_provider} a_provider A list of providers and their booking details. Every element has next keys:
   * @property {number} id_class_tab List of class tab objects.
   */

  /**
   * All data required to book an appointment.
   *
   * @post post
   * @type {Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data}
   */
  this.a_book_data = undefined;

  /**
   * The activity IDs of bookings that have been made.
   *
   * @post result
   * @type {string[]}
   */
  this.a_login_activity_visit = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_notification
   * @property {boolean} is_mail `true` to send mail; `false` to not send.
   * @property {boolean} is_push `true` to send push notification; `false` to not send.
   * @property {boolean} is_sms `true` to send SMS; `false` to not send.
   */

  /**
   * Information for sending an appointment notification.
   *
   * @post post
   * @type {Wl_Appointment_Book_Finish_FinishMultipleModel_a_notification}
   */
  this.a_notification = undefined;

  /**
   * The sum paid without tax for each provider.
   *
   * * Keys refer to provider indexes.
   * * Values are the paid amounts without tax.
   *
   * Only used for the following types of purchases:
   * * {@link RsPurchaseItemSid}
   * * {@link RsPurchaseItemSid}
   * * {@link RsPurchaseItemSid}
   * * {@link RsPurchaseItemSid}
   *
   * This is a multi-provider equivalent of [FinishApi](/Wl/Appointment/Book/Finish/Finish.json).
   *
   * @post post
   * @type {number[]}
   */
  this.a_paid = undefined;

  /**
   * The payment type ID for each provider.
   *
   * * Keys refer to provider indexes.
   * * Values are one of the {@link RsAppointmentPaySid} constants.
   *
   * This is a multi-provider equivalent of [FinishApi](/Wl/Appointment/Book/Finish/Finish.json).
   *
   * @post get
   * @type {number[]}
   */
  this.a_pay = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_pay_form_pa
   * @property {string} json_data Additional payer authentication data.
   * @property {string} k_pay_transaction Key of the payment transaction that was created during payer authentication.  In this case, payment transaction should be attached to this transaction.
   * @property {string} m_amount Authenticated payment amount.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_pay_form
   * @property {number} f_amount Amount of money to withdraw with this payment source.
   * @property {?number} id_pay_method A list of payment methods.
   * @property {boolean} is_hide Whether this payment method is hidden.
   * @property {boolean} is_success Whether this source was successfully charged.
   * @property {string} m_fee Fee amount for this payment source.
   * @property {string} m_surcharge Surcharge amount for this payment source.
   * @property {Wl_Appointment_Book_Finish_FinishMultipleModel_a_pay_form_pa} pa Payer authentication data. Element may not present for payment sources that do not support payer authentication,  or payer authentication is not implemented by this payment processor.
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
  this.a_pay_form = undefined;

  /**
   * Payment is not processed by this API.
   *
   * Use the following APIs for payment:
   * * [PaymentApi](/Wl/Appointment/Book/Payment/Payment.json)
   * * [PaymentPostApi](/Wl/Appointment/Book/Payment/PaymentPost.json)
   * * [PaymentMultipleApi](/Wl/Appointment/Book/Payment/PaymentMultiple.json)
   *
   * @post post
   * @type {*[]}
   */
  this.a_payment_data = undefined;

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
  this.a_purchase_item = undefined;

  /**
   * The list of quiz response keys.
   * Key is quiz key.
   * Value is quiz response key.
   *
   * @post post
   * @type {string[]}
   */
  this.a_quiz_response = undefined;

  /**
   * List of user keys to book appointments.
   * There may be empty values in this list, which means that this is a walk-in.
   *
   * @post get
   * @type {string[]}
   */
  this.a_uid = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_user
   * @property {*} a_note The note or list of notes to add to the new user's profile.
   * @property {string} text_mail The new user's email address.
   * @property {string} text_name_first The new user's first name.
   * @property {string} text_name_last The new user's last name.
   * @property {string} text_phone The new user's mobile phone number.
   */

  /**
   * Data to create new users.
   * Specify this if `$uid` is empty.
   * The data must contain the next keys:
   *
   * @post get
   * @type {Wl_Appointment_Book_Finish_FinishMultipleModel_a_user}
   */
  this.a_user = undefined;

  /**
   * The visit IDs.
   *
   * @post result
   * @type {string[]}
   */
  this.a_visit = undefined;

  /**
   * Keys of booked visits.
   *
   * Structured into a two-dimensional array.
   * 1st dimension - providers; 2nd dimension - visit keys inside a provider.
   *
   * @post result
   * @type {string[][]}
   */
  this.a_visit_provider = undefined;

  /**
   * The source of a visit.
   *
   * Last used ID: 31.
   *
   * Values:
   * - 28 (`API`): Action made via Api Endpoint. Default for leads created via API, unless overridden.
   * - 21 (`AZURE`): Registered through `Azure`.
   * - 31 (`BRIVO_DOOR_ACCESS`): Visit has been checked-in by Brivo Door Access.
   * - 23 (`CENTRED`): Visit has been created by `CENTRED`.
   * - 8 (`CLASSPASS_BOOKING`): Visit has been created by `ClassPass`.
   * - 22 (`COLLECTIONS`): Debt paid via collections.
   * - 26 (`COLLECTIONS_FUTURE`): Debt paid via collections.
   * - 27 (`CONCERTO`): Action from Concerto.
   * - 18 (`EMAIL`): Action made via email.
   * - 20 (`FACEBOOK`): Indicating that the source is Facebook.
   * - 30 (`GO_HIGH_LEVEL`): Action from Go High Level.
   * - 19 (`GOOGLE`): Indicating that the source is Google.
   * - 7 (`GOOGLE_BOOKING`): Visit has been created by Google Booking Service.
   * - 14 (`GYMPASS_BOOKING`): Visit has been created by `GymPass`.
   * - 5 (`IMPORT`): Visit was created during import.
   * - 12 (`MICROSITE`): Action made via microsite.
   *
   *   It is also names as directory listing.
   * - 24 (`MICROSOFT`): Indicating that the source is Microsoft.
   * - 13 (`MY_PRESENCE_SITE`): Client booked session on My Presence Site.
   * - 17 (`SMS`): Action made via SMS.
   * - 4 (`SPA_BACKEND`): Staff booked session from spa backend.
   * - 3 (`SPA_FRONTEND`): Client booked session from spa frontend.
   * - 10 (`SYSTEM`): Created by system.
   * - 6 (`UNDEFINED`): Means that we did not define mode.
   * - 16 (`WEB_APP_ATTENDANCE`): Client booked session from Attendance Web App.
   * - 15 (`WEB_APP_CHECK_IN`): Client checked-in for the session through Check-In Web App.
   * - 2 (`WEB_BACKEND`): Staff booked session for client from website backend.
   * - 1 (`WEB_FRONTEND`): Client booked session from website frontend.
   * - 11 (`WIDGET`): Action made via widget (purchase, book etc).
   * - 25 (`ZAPIER`): Action from Zapier.
   *
   * @post post
   * @see Wl_Mode_ModeSid
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
  this.k_appointment = "";

  /**
   * The business key.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Location to show available appointment booking schedule.
   *
   * @post get
   * @type {string}
   */
  this.k_location = "";

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
   * @post get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Finish_FinishMultipleModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Finish_FinishMultipleModel.prototype.config=function()
{
  return {"a_field":{"a_answer":{"post":{"post":true}},"a_appointment":{"post":{"result":true}},"a_book_data":{"post":{"post":true}},"a_login_activity_visit":{"post":{"result":true}},"a_notification":{"post":{"post":true}},"a_paid":{"post":{"post":true}},"a_pay":{"post":{"get":true}},"a_pay_form":{"post":{"post":true}},"a_payment_data":{"post":{"post":true}},"a_purchase_item":{"post":{"post":true}},"a_quiz_response":{"post":{"post":true}},"a_uid":{"post":{"get":true}},"a_user":{"post":{"get":true}},"a_visit":{"post":{"result":true}},"a_visit_provider":{"post":{"result":true}},"id_mode":{"post":{"post":true}},"is_back_to_back":{"post":{"post":true}},"is_try":{"post":{"post":true}},"is_walk_in":{"post":{"get":true}},"k_appointment":{"post":{"get":true}},"k_business":{"post":{"get":true}},"k_location":{"post":{"get":true}},"s_id":{"post":{"post":true}},"uid":{"post":{"get":true}}}};
};

/**
 * Completes the appointment booking for one or more providers, optionally creating a new client.
 *
 * Accepts booking details for one or more providers in [FinishMultipleApi](/Wl/Appointment/Book/Finish/FinishMultiple.json),
 * processes payment using the selected Purchase Option, creates appointment records, and sends
 * booking confirmation notifications. A new client account can be created by supplying user
 * details in [FinishMultipleApi](/Wl/Appointment/Book/Finish/FinishMultiple.json) when no UID is provided.
 *
 * @function
 * @name Wl_Appointment_Book_Finish_FinishMultipleModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
