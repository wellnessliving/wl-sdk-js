/**
 * Loads data to prepare client side to complete booking.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Finish_Finish47Model()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A list of answers for the questions from {@link Wl_Appointment_Book_Question_QuestionModel.a_question}.
   * Keys refer to hashes of the questions. Values refer to answers for the questions.
   *
   * @post post
   * @type {string[]}
   */
  this.a_answer = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_Finish47Model_a_appointment
   * @property {string} k_appointment The appointment key.
   */

  /**
   * The keys of the booked appointments.
   * Every element has key:
   *
   * @post result
   * @type {Wl_Appointment_Book_Finish_Finish47Model_a_appointment[]}
   */
  this.a_appointment = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_Finish47Model_a_book_data_a_conflict
   * @property {string} dt_date_local New appointment date/time in MySQL in locale timezone.
   * @property {number} i_duration New asset booking duration.
   * @property {number} i_index New asset index.
   * @property {number} id_conflict Solution type. One of {@link RsAppointmentEditConflictSid} constants.
   * @property {string} k_resource New asset.
   * @property {?string} k_staff New staff member.  `null` in a case of asset booking.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_Finish47Model_a_book_data_a_product
   * @property {number} i_count The add-on count
   * @property {number} i_count_use The add-on use count.
   * @property {string} k_shop_product_option The key of add-on.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_Finish47Model_a_book_data_a_repeat
   * @property {number[]} a_week The days of week when appointment repeats. One of the {@link ADateWeekSid} constants. This will be empty if the appointment doesn't repeat weekly.
   * @property {string} dl_end The date when the appointment's repeat cycle stops. This will be empty if the repeat cycle doesn't stop at a certain date.
   * @property {number} i_occurrence The number of occurrences after which the appointment's repeat cycle must stop. This will be empty if the repeat cycle doesn't stop after a certain number of occurrences.
   * @property {number} i_period The frequency of the appointment's repeat cycle.
   * @property {number} id_period The measurement unit of `i_period`. One of the {@link ADurationSid} constants.
   * @property {boolean} is_month `true` if the appointment repeats monthly on the same date. `false` if the appointment repeats monthly on the same day of the week. `null` if the appointment doesn't repeat monthly.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_Finish47Model_a_book_data_a_resource
   * @property {number} i_index The asset index on the layout. Specify this only if the asset category has a layout.
   * @property {string} k_resource The asset.
   */

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_Finish47Model_a_book_data
   * @property {Wl_Appointment_Book_Finish_Finish47Model_a_book_data_a_conflict} a_conflict Information about booking conflicts. Keys are bookings dates/times in MySQL format in UTC. Values are arrays with next keys:
   * @property {Wl_Appointment_Book_Finish_Finish47Model_a_book_data_a_product} a_product Add-ons to the appointment. Specify this for appointment bookings only. Old format: array keys refer to primary keys.  New format: each element is an array:
   * @property {Wl_Appointment_Book_Finish_Finish47Model_a_book_data_a_repeat} a_repeat Recurring booking information:
   * @property {Wl_Appointment_Book_Finish_Finish47Model_a_book_data_a_resource} a_resource A list of assets for the appointment booking. Keys refer to asset categories.  Values refer to arrays with the next keys:
   * @property {string} dt_date The date/time for the booking in MySQL format in the location's time zone.
   * @property {number} i_duration The duration of asset booking in minutes. Specify this for separate asset bookings only.
   * @property {number} i_index The asset index on the layout. Specify this for separate asset bookings only and for cases when the asset category only has a layout.
   * @property {number} id_class_tab The booking service type. One of the {@link Wl_Classes_Tab_TabSid} constants.
   * @property {number} id_gender_staff The gender of the staff member conducting the appointment. One of the {@link AGenderSid} constants. Specify this for appointment bookings only.
   * @property {boolean} is_wait_list_unpaid If `true`, appointment waits unpaid.
   * @property {string} k_login_prize The user's prize.
   * @property {string} k_login_promotion The user's pass (for example, a membership or a package). Specify this if you want to set the pass to use to pay for the booking.
   * @property {string} k_resource The asset booking. Specify this for separate asset bookings only.
   * @property {string} k_service The appointment booking. Specify this for appointment bookings only.
   * @property {string} k_session_pass The user's pass.
   * @property {string} k_staff The staff member conducting the appointment. Specify this for appointment bookings only.
   * @property {string} k_staff_date The staff member conducting the appointment. The difference between this an `k_staff` is that this value must be set only in cases when you want to add a customer to an appointment that already exists. Specify this for appointment bookings only.
   */

  /**
   * The documentation is the same as in {@link Wl_Appointment_Book_Finish_FinishModel.a_book_data}.
   *
   * @post post
   * @type {Wl_Appointment_Book_Finish_Finish47Model_a_book_data}
   */
  this.a_book_data = undefined;

  /**
   * The activity keys of the bookings that were made.
   *
   * @post result
   * @type {string[]}
   */
  this.a_login_activity_visit = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_Finish47Model_a_notification
   * @property {boolean} is_attach `true` to attach calendar file, `false` to not attach calendar file.
   * @property {boolean} is_campaign Whether mail should track as a part of campaign. `true` if yes, `false` if no.
   * @property {boolean} is_mail `true` to send mail; `false` to not send.
   * @property {boolean} is_push `true` to send push notification; `false` to not send.
   * @property {boolean} is_sms `true` to send SMS; `false` to not send.
   * @property {string} text_business_name Business name.
   * @property {string} text_business_reply Reply email address.
   * @property {string} text_campaign Campaign name.
   * @property {string} text_content_mail Email content.
   * @property {string} text_push Push notification content.
   * @property {string} text_sms SMS content.
   * @property {string} text_subject Email subject.
   */

  /**
   * Information for sending an appointment notification.
   *
   * @get result
   * @post post
   * @type {Wl_Appointment_Book_Finish_Finish47Model_a_notification}
   */
  this.a_notification = undefined;

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
   * @type {*[][]}
   */
  this.a_pay_form = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_Finish47Model_a_payment_data
   * @property {number} id_purchase_item Type of the purchase item. One of the {@link RsPurchaseItemSid} constants.
   */

  /**
   * Data required for payment. Has next structure:
   *
   * @post post
   * @type {Wl_Appointment_Book_Finish_Finish47Model_a_payment_data}
   */
  this.a_payment_data = undefined;

  /**
   * The purchase item keys.
   * Empty if no purchases are made for the appointment booking.
   *
   * @post post
   * @type {string[]}
   */
  this.a_purchase_item = undefined;

  /**
   * List of quiz response keys.
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
   * @get get
   * @post get
   * @type {string[]}
   */
  this.a_uid = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_Finish47Model_a_user
   * @property {string[]} a_note List of notes to add to user.
   * @property {string} text_mail Mail.
   * @property {string} text_name_first First name.
   * @property {string} text_name_last Last name.
   * @property {string} text_phone Phone.
   */

  /**
   * Data to create new user.
   * Specify this if `uid` is empty.
   * Must contain the following keys:
   *
   * @post get
   * @type {Wl_Appointment_Book_Finish_Finish47Model_a_user}
   */
  this.a_user = undefined;

  /**
   * The keys of visits.
   *
   * @post result
   * @type {string[]}
   */
  this.a_visit = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_Finish47Model_a_visit_payment
   * @property {boolean} is_free `true` if the visit is free; `false` otherwise.
   * @property {boolean} is_waitlist `true` whether the booked slot was waitlisted; `false` otherwise.
   * @property {string} k_login_promotion Applied user's purchase option.
   * @property {string} k_promotion Purchase option.
   * @property {string} k_session_pass Applied session pass.
   * @property {string} text_promotion Purchase option title.
   */

  /**
   * Values are arrays with next keys:
   *
   * @post result
   * @type {Wl_Appointment_Book_Finish_Finish47Model_a_visit_payment[]}
   */
  this.a_visit_payment = undefined;

  /**
   * The booking mode ID. One of the {@link Wl_Mode_ModeSid} constants.
   *
   * @post post
   * @see Wl_Mode_ModeSid
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * The payment type ID for the service.
   *
   * One of the {@link RsAppointmentPaySid} constants.
   *
   * @deprecated This field is deprecated.
   * @post get
   * @see RsAppointmentPaySid
   * @type {number}
   */
  this.id_pay = 0;

  /**
   * Determines whether multiple appointments are booked in back-to-back mode.
   *
   * @post post
   * @type {boolean}
   */
  this.is_back_to_back = false;

  /**
   * If `true`, the appointment is booked as unpaid. Otherwise, this will be `false` to select an available Purchase Option.
   *
   * @post post
   * @type {boolean}
   */
  this.is_unpaid_force = false;

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
   * This should be set if you're rebooking an existing appointment.
   *
   * Otherwise, use `0` to book a new appointment.
   *
   * @post get
   * @type {string}
   */
  this.k_appointment = "";

  /**
   * The business key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Location to show available appointment booking schedule.
   *
   * @get get,result
   * @post get
   * @type {string}
   */
  this.k_location = "";

  /**
   * Key of timezone.
   *
   * `null` if not set then use default timezone client.
   *
   * @post get
   * @type {?string}
   */
  this.k_timezone = null;

  /**
   * The sum paid without tax.
   *
   * Only used for the following types of purchases:
   * * {@link RsPurchaseItemSid}
   * * {@link RsPurchaseItemSid}
   * * {@link RsPurchaseItemSid}
   * * {@link RsPurchaseItemSid}
   *
   * @deprecated Paid amount is calculated and verified automatically from booking data.
 The field is left for compatibility with old code and to control the new algorithm.
   * @post post
   * @type {string}
   */
  this.m_pay = "";

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
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Finish_Finish47Model);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Finish_Finish47Model.prototype.config=function()
{
  return {"a_field":{"a_answer":{"post":{"post":true}},"a_appointment":{"post":{"result":true}},"a_book_data":{"post":{"post":true}},"a_login_activity_visit":{"post":{"result":true}},"a_notification":{"get":{"result":true},"post":{"post":true}},"a_pay_form":{"post":{"post":true}},"a_payment_data":{"post":{"post":true}},"a_purchase_item":{"post":{"post":true}},"a_quiz_response":{"post":{"post":true}},"a_uid":{"get":{"get":true},"post":{"get":true}},"a_user":{"post":{"get":true}},"a_visit":{"post":{"result":true}},"a_visit_payment":{"post":{"result":true}},"id_mode":{"post":{"post":true}},"id_pay":{"post":{"get":true}},"is_back_to_back":{"post":{"post":true}},"is_unpaid_force":{"post":{"post":true}},"is_walk_in":{"get":{"get":true},"post":{"get":true}},"k_appointment":{"post":{"get":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_location":{"get":{"get":true,"result":true},"post":{"get":true}},"k_timezone":{"post":{"get":true}},"m_pay":{"post":{"post":true}},"s_id":{"post":{"post":true}},"uid":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * Loads data to prepare client side to complete booking.
 *
 * Returns notification settings (email, push, SMS) for the appointment creation confirmation
 * so the client side can display the appropriate notification options before finalizing the booking.
 *
 * @function
 * @name Wl_Appointment_Book_Finish_Finish47Model.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Completes the appointment booking and logs variable counts for diagnostic purposes.
 *
 * Delegates to the parent `post()` implementation after logging the total variable counts
 * from GET, POST, and the booking data array. The logging is temporary and intended to diagnose
 * "Too many variables" errors in production.
 *
 * @function
 * @name Wl_Appointment_Book_Finish_Finish47Model.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
