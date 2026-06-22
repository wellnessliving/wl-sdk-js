/**
 * Completes the booking process for a service.
 *
 * This endpoint can be used with an existing client by specifying their UID. It can also be used to create a new
 * client by specifying user details in {@link Wl_Appointment_Book_Finish_FinishModel.a_user} and omitting any UID.
 * This endpoint can be accessed anonymously without authentication, but only when creating clients.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @deprecated Use {@link Wl_Appointment_Book_Finish_Finish47Model} instead.
 */
function Wl_Appointment_Book_Finish_FinishModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A list of answers for the questions from {@link Wl_Appointment_Book_Question_QuestionModel.a_question}.
   * Keys refer to hashes of the questions. Values refer to answers for the questions.
   *
   * @post post
   * @type {string[]}
   */
  this.a_answer = [];

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishModel_a_appointment
   * @property {string} k_appointment The appointment key.
   */

  /**
   * The keys of the booked appointments.
   * Every element has key:
   * <dl>
   *   <dt>
   *     string <var>k_appointment</var>
   *   </dt>
   *   <dd>
   *     The appointment key.
   *   </dd>
   * </dl>
   *
   * @post result
   * @type {Wl_Appointment_Book_Finish_FinishModel_a_appointment[]}
   */
  this.a_appointment = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishModel_a_book_data_a_conflict_a_product_a_repeat_a_resource
   * @property {number} [i_index] The asset index on the layout. Specify this only if the asset category has a layout.
   * @property {string} k_resource The asset.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishModel_a_book_data_a_conflict_a_product_a_repeat
   * @property {number[]} [a_week] The days of week when appointment repeats. One of the {@link ADateWeekSid} constants.
   * This will be empty if the appointment doesn't repeat weekly.
   * @property {string} [dl_end] The date when the appointment's repeat cycle stops. This will be empty if the repeat cycle doesn't stop at a certain date.
   * @property {number} [i_occurrence] The number of occurrences after which the appointment's repeat cycle must stop.
   * This will be empty if the repeat cycle doesn't stop after a certain number of occurrences.
   * @property {number} i_period The frequency of the appointment's repeat cycle.
   * @property {number} id_period The measurement unit of <tt>i_period</tt>. One of the {@link ADurationSid} constants.
   * @property {boolean} [is_month] <tt>true</tt> if the appointment repeats monthly on the same date.
   * <tt>false</tt> if the appointment repeats monthly on the same day of the week.
   * <tt>null</tt> if the appointment doesn't repeat monthly.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishModel_a_book_data_a_conflict_a_product
   * @property {number} i_count The add-on count
   * @property {number} [i_count_use] The add-on use count.
   * @property {string} k_shop_product_option The key of add-on.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishModel_a_book_data_a_conflict
   * @property {string} dt_date_local New appointment date/time in MySQL in locale timezone.
   * @property {number} i_duration New asset booking duration.
   * @property {number} i_index New asset index.
   * @property {number} id_conflict Solution type.
   * @property {string} k_resource New asset primary key.
   * @property {?string} k_staff New staff member's primary key. `null` in a case of asset booking.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishModel_a_book_data
   * @property {Wl_Appointment_Book_Finish_FinishModel_a_book_data_a_conflict} [a_conflict] Information about booking conflicts. Keys are bookings dates/times in MySQL format in UTC. Values are arrays with next keys:
   * <dl>
   *   <dt>string <tt>dt_date_local</tt></dt>
   *   <dd>New appointment date/time in MySQL in locale timezone.</dd>
   *   <dt>int <tt>i_duration</tt></dt>
   *   <dd>New asset booking duration.</dd>
   *   <dt>int <tt>i_index</tt></dt>
   *   <dd>New asset index.</dd>
   *   <dt>int <tt>id_conflict</tt></dt>
   *   <dd>Solution type. One of {@link RsAppointmentEditConflictSid} constants.</dd>
   *   <dt>string <tt>k_resource</tt></dt>
   *   <dd>New asset primary key.</dd>
   *   <dt>string|null <tt>k_staff</tt></dt>
   *   <dd>New staff member's primary key. `null` in a case of asset booking.</dd>
   * </dl>
   * @property {Wl_Appointment_Book_Finish_FinishModel_a_book_data_a_conflict_a_product} [a_product] Add-ons to the appointment. Specify this for appointment bookings only.
   * Old format: array keys refer to primary keys.
   * New format: each element is an array:
   * <dl>
   *   <dt>int <tt>i_count</tt></dt><dd>The add-on count</dd>
   *   <dt>int [<tt>i_count_use</tt>]</dt><dd>The add-on use count.</dd>
   *   <dt>string <tt>k_shop_product_option</tt></dt><dd>The key of add-on.</dd>
   * </dl>
   * @property {Wl_Appointment_Book_Finish_FinishModel_a_book_data_a_conflict_a_product_a_repeat} [a_repeat] Recurring booking information:
   * <dl>
   *   <dt>
   *     int[] [<tt>a_week</tt>]
   *   </dt>
   *   <dd>
   *     The days of week when appointment repeats. One of the {@link ADateWeekSid} constants.
   *     This will be empty if the appointment doesn't repeat weekly.
   *   </dd>
   *   <dt>
   *     string [<tt>dl_end</tt>]
   *   </dt>
   *   <dd>
   *     The date when the appointment's repeat cycle stops. This will be empty if the repeat cycle doesn't stop at a certain date.
   *   </dd>
   *   <dt>
   *     int [<tt>i_occurrence</tt>]
   *   </dt>
   *   <dd>
   *     The number of occurrences after which the appointment's repeat cycle must stop.
   *     This will be empty if the repeat cycle doesn't stop after a certain number of occurrences.
   *   </dd>
   *   <dt>
   *     int <tt>i_period</tt>
   *   </dt>
   *   <dd>
   *     The frequency of the appointment's repeat cycle.
   *   </dd>
   *   <dt>
   *     int <tt>id_period</tt>
   *   </dt>
   *   <dd>
   *     The measurement unit of <tt>i_period</tt>. One of the {@link ADurationSid} constants.
   *   </dd>
   *   <dt>
   *     bool [<tt>is_month</tt>]
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if the appointment repeats monthly on the same date.
   *     <tt>false</tt> if the appointment repeats monthly on the same day of the week.
   *     <tt>null</tt> if the appointment doesn't repeat monthly.
   *   </dd>
   * </dl>
   * This will be empty if the appointment isn't recurring.
   * @property {Wl_Appointment_Book_Finish_FinishModel_a_book_data_a_conflict_a_product_a_repeat_a_resource} [a_resource] A list of assets for the appointment booking.
   * Keys refer to asset categories. Values refer to arrays with the next keys:
   * <dl>
   *   <dt>int [<tt>i_index</tt>]</dt>
   *   <dd>The asset index on the layout. Specify this only if the asset category has a layout.</dd>
   *   <dt>string <tt>k_resource</tt></dt>
   *   <dd>The asset.</dd>
   * </dl>
   * Specify this only for the appointment booking.
   * @property {string} dt_date The date/time for the booking in MySQL format in the location's time zone.
   * @property {number} [i_duration] The duration of asset booking in minutes. Specify this for separate asset bookings only.
   * @property {number} [i_index] The asset index on the layout.
   * Specify this for separate asset bookings only and for cases when the asset category only has a layout.
   * @property {number} [id_class_tab] The booking service type. One of the {@link Wl_Classes_Tab_TabSid} constants.
   * @property {number} [id_gender_staff] The gender of the staff member conducting the appointment. One of the {@link Wl_Gender_GenderSid} constants.
   * Specify this for appointment bookings only.
   * @property {boolean} [is_wait_list_unpaid] If `true`, appointment waits unpaid.
   * @property {string} [k_login_prize] The user's prize.
   * @property {string} [k_login_promotion] The user's pass (for example, a membership or a package).
   * Specify this if you want to set the pass to use to pay for the booking.
   * @property {string} [k_resource] The asset booking. Specify this for separate asset bookings only.
   * @property {string} [k_service] The appointment booking. Specify this for appointment bookings only.
   * @property {string} [k_session_pass] The user's pass.
   * @property {string} [k_staff] The staff member conducting the appointment.
   * Specify this for appointment bookings only.
   * @property {string} [k_staff_date] The staff member conducting the appointment.
   * The difference between this an <tt>k_staff</tt> is that this value must be set only in cases
   * when you want to add a customer to an appointment that already exists.
   * Specify this for appointment bookings only.
   * @property {string} [m_tip_appointment] The amount of selected tips.
   */

  /**
   * All data from the provider model <tt>Wl_Appointment_Book_ProviderModel</tt>:
   * <dl>
   *   <dt>
   *     array [<var>a_conflict</var>]
   *   </dt>
   *   <dd>
   *     Information about booking conflicts. Keys are bookings dates/times in MySQL format in UTC. Values are arrays with next keys:
   *     <dl>
   *       <dt>string <var>dt_date_local</var></dt>
   *       <dd>New appointment date/time in MySQL in locale timezone.</dd>
   *       <dt>int <var>i_duration</var></dt>
   *       <dd>New asset booking duration.</dd>
   *       <dt>int <var>i_index</var></dt>
   *       <dd>New asset index.</dd>
   *       <dt>int <var>id_conflict</var></dt>
   *       <dd>Solution type. One of {@link RsAppointmentEditConflictSid} constants.</dd>
   *       <dt>string <var>k_resource</var></dt>
   *       <dd>New asset primary key.</dd>
   *       <dt>string|null <var>k_staff</var></dt>
   *       <dd>New staff member's primary key. `null` in a case of asset booking.</dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     array [<var>a_product</var>]
   *   </dt>
   *   <dd>
   *     Add-ons to the appointment. Specify this for appointment bookings only.
   *     Old format: array keys refer to primary keys.
   *     New format: each element is an array:
   *     <dl>
   *       <dt>int <var>i_count</var></dt><dd>The add-on count</dd>
   *       <dt>int [<var>i_count_use</var>]</dt><dd>The add-on use count.</dd>
   *       <dt>string <var>k_shop_product_option</var></dt><dd>The key of add-on.</dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     array [<var>a_repeat</var>]
   *   </dt>
   *   <dd>
   *     Recurring booking information:
   *     <dl>
   *       <dt>
   *         int[] [<var>a_week</var>]
   *       </dt>
   *       <dd>
   *         The days of week when appointment repeats. One of the {@link ADateWeekSid} constants.
   *         This will be empty if the appointment doesn't repeat weekly.
   *       </dd>
   *       <dt>
   *         string [<var>dl_end</var>]
   *       </dt>
   *       <dd>
   *         The date when the appointment's repeat cycle stops. This will be empty if the repeat cycle doesn't stop at a certain date.
   *       </dd>
   *       <dt>
   *         int [<var>i_occurrence</var>]
   *       </dt>
   *       <dd>
   *         The number of occurrences after which the appointment's repeat cycle must stop.
   *         This will be empty if the repeat cycle doesn't stop after a certain number of occurrences.
   *       </dd>
   *       <dt>
   *         int <var>i_period</var>
   *       </dt>
   *       <dd>
   *         The frequency of the appointment's repeat cycle.
   *       </dd>
   *       <dt>
   *         int <var>id_period</var>
   *       </dt>
   *       <dd>
   *         The measurement unit of <tt>i_period</tt>. One of the {@link ADurationSid} constants.
   *       </dd>
   *       <dt>
   *         bool [<var>is_month</var>]
   *       </dt>
   *       <dd>
   *         <tt>true</tt> if the appointment repeats monthly on the same date.
   *         <tt>false</tt> if the appointment repeats monthly on the same day of the week.
   *         <tt>null</tt> if the appointment doesn't repeat monthly.
   *       </dd>
   *     </dl>
   *     This will be empty if the appointment isn't recurring.
   *   </dd>
   *   <dt>
   *     array [<var>a_resource</var>]
   *   </dt>
   *   <dd>
   *     A list of assets for the appointment booking.
   *     Keys refer to asset categories. Values refer to arrays with the next keys:
   *     <dl>
   *       <dt>int [<var>i_index</var>]</dt>
   *       <dd>The asset index on the layout. Specify this only if the asset category has a layout.</dd>
   *       <dt>string <var>k_resource</var></dt>
   *       <dd>The asset.</dd>
   *     </dl>
   *     Specify this only for the appointment booking.
   *   </dd>
   *   <dt>
   *     string <var>dt_date</var>
   *   </dt>
   *   <dd>
   *     The date/time for the booking in MySQL format in the location's time zone.
   *   </dd>
   *   <dt>
   *     int [<var>i_duration</var>]
   *   </dt>
   *   <dd>
   *     The duration of asset booking in minutes. Specify this for separate asset bookings only.
   *   </dd>
   *   <dt>
   *     int [<var>i_index</var>]
   *   </dt>
   *   <dd>
   *     The asset index on the layout.
   *     Specify this for separate asset bookings only and for cases when the asset category only has a layout.
   *   </dd>
   *   <dt>
   *     int [<var>id_class_tab</var>]
   *   </dt>
   *   <dd>
   *     The booking service type. One of the {@link Wl_Classes_Tab_TabSid} constants.
   *   </dd>
   *   <dt>
   *     int [<var>id_gender_staff</var>]
   *   </dt>
   *   <dd>
   *     The gender of the staff member conducting the appointment. One of the {@link Wl_Gender_GenderSid} constants.
   *     Specify this for appointment bookings only.
   *   </dd>
   *   <dt>
   *     bool [<var>is_wait_list_unpaid</var>]
   *   </dt>
   *   <dd>
   *     If `true`, appointment waits unpaid.
   *   </dd>
   *   <dt>
   *     string [<var>k_login_prize</var>]
   *   </dt>
   *   <dd>
   *     The user's prize.
   *   </dd>
   *   <dt>
   *     string [<var>k_login_promotion</var>]
   *   </dt>
   *   <dd>
   *     The user's pass (for example, a membership or a package).
   *     Specify this if you want to set the pass to use to pay for the booking.
   *   </dd>
   *   <dt>
   *     string [<var>k_resource</var>]
   *   </dt>
   *   <dd>
   *     The asset booking. Specify this for separate asset bookings only.
   *   </dd>
   *   <dt>
   *     string [<var>k_service</var>]
   *   </dt>
   *   <dd>
   *     The appointment booking. Specify this for appointment bookings only.
   *   </dd>
   *   <dt>
   *     string [<var>k_session_pass</var>]
   *   </dt>
   *   <dd>
   *     The user's pass.
   *   </dd>
   *   <dt>
   *     string [<var>k_staff</var>]
   *   </dt>
   *   <dd>
   *     The staff member conducting the appointment.
   *     Specify this for appointment bookings only.
   *   </dd>
   *   <dt>
   *     string [<var>k_staff_date</var>]
   *   </dt>
   *   <dd>
   *     The staff member conducting the appointment.
   *     The difference between this an <var>k_staff</var> is that this value must be set only in cases
   *     when you want to add a customer to an appointment that already exists.
   *     Specify this for appointment bookings only.
   *   </dd>
   *   <dt>string [<var>m_tip_appointment</var>]</dt>
   *   <dd>The amount of selected tips.</dd>
   * </dl>
   *
   * @post get
   * @type {Wl_Appointment_Book_Finish_FinishModel_a_book_data}
   */
  this.a_book_data = [];

  /**
   * The activity keys of the bookings that were made.
   *
   * @post result
   * @type {string[]}
   */
  this.a_login_activity_visit = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishModel_a_notification
   * @property {boolean} [is_mail] `true` to send mail; `false` to not send.
   * @property {boolean} [is_sms] `true` to send SMS; `false` to not send.
   * @property {boolean} [is_push] `true` to send push notification; `false` to not send.
   */

  /**
   * Information for sending an appointment notification.
   * <dl>
   *    <dt>bool [<var>is_mail</var>]</dt>
   *    <dd>`true` to send mail; `false` to not send.</dd>
   *    <dt>bool [<var>is_sms</var>]</dt>
   *    <dd>`true` to send SMS; `false` to not send.</dd>
   *    <dt>bool [<var>is_push</var>]</dt>
   *    <dd>`true` to send push notification; `false` to not send.</dd>
   *  </dl>
   *
   * @get result
   * @post post
   * @type {Wl_Appointment_Book_Finish_FinishModel_a_notification}
   */
  this.a_notification = [];

  /**
   * A list of payment sources to pay with.
   *
   * Structure of this array corresponds structure of {@link RsPayForm::$a_pay_source}.
   *
   * @post post
   * @type {{}[]}
   */
  this.a_pay_form = [];

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishModel_a_payment_data
   * @property {number} id_purchase_item Type of the purchase item. One of the {@link Wl_Purchase_Item_ItemSid} constants.
   * @property {string} k_id Promotion key or appointment key. Depends on <tt>id_purchase_item</tt> of this array.
   * @property {string} k_login_promotion Login promotion key.
   * @property {string} k_session_pass Session pass key.
   * @property {string} text_discount_code Discount code.
   */

  /**
   * Data required for payment. Has next structure:<dl>
   *   <dt>int <var>id_purchase_item</var></dt>
   *   <dd>Type of the purchase item. One of the {@link Wl_Purchase_Item_ItemSid} constants.</dd>
   *   <dt>string <var>k_id</var></dt>
   *   <dd>Promotion key or appointment key. Depends on <var>id_purchase_item</var> of this array.</dd>
   *   <dt>string <var>k_login_promotion</var></dt>
   *   <dd>Login promotion key.</dd>
   *   <dt>string <var>k_session_pass</var></dt>
   *   <dd>Session pass key.</dd>
   *   <dt>string <var>text_discount_code</var></dt>
   *   <dd>Discount code.</dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Appointment_Book_Finish_FinishModel_a_payment_data}
   */
  this.a_payment_data = [];

  /**
   * The purchase item keys.
   * Empty if no purchases are made for the appointment booking.
   *
   * @post post
   * @type {string[]}
   */
  this.a_purchase_item = [];

  /**
   * A list of quiz response keys.
   * Keys refer to quiz keys.
   * Values refer to response keys.
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
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishModel_a_user
   * @property {string[]} a_note List of notes to add to user.
   * @property {string} text_mail Mail.
   * @property {string} text_name_first First name.
   * @property {string} text_name_last Last name.
   * @property {string} text_phone Phone.
   */

  /**
   * Data to create new user.
   * Specify this if <var>uid</var> is empty.
   * Must contain the following keys:
   * <dl>
   *   <dt>string[] <var>a_note</var></dt>
   *   <dd>List of notes to add to user.</dd>
   *   <dt>string <var>text_mail</var></dt>
   *   <dd>Mail.</dd>
   *   <dt>string <var>text_name_first</var></dt>
   *   <dd>First name.</dd>
   *   <dt>string <var>text_name_last</var></dt>
   *   <dd>Last name.</dd>
   *   <dt>string <var>text_phone</var></dt>
   *   <dd>Phone.</dd>
   * </dl>
   *
   * @post get
   * @type {Wl_Appointment_Book_Finish_FinishModel_a_user}
   */
  this.a_user = [];

  /**
   * The keys of visits.
   *
   * @post result
   * @type {string[]}
   */
  this.a_visit = undefined;

  /**
   * The booking mode ID. One of the {@link Wl_Mode_ModeSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * The payment type ID for the appointment. One of the {@link Wl_Appointment_PaySid} constants.
   *
   * @post get
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
  this.k_appointment = "0";

  /**
   * The business key.
   *
   * @get get
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
   * Key of timezone.
   *
   * `null` if not set then use default timezone client.
   *
   * @post get
   * @type {?string}
   */
  this.k_timezone = null;

  /**
   * The sum paid for a deposit.
   *
   * @post post
   * @type {string}
   */
  this.m_pay = "0";

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
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Finish_FinishModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Finish_FinishModel.prototype.config=function()
{
  return {"a_field": {"a_answer": {"post": {"post": true}},"a_appointment": {"post": {"result": true}},"a_book_data": {"post": {"get": true}},"a_login_activity_visit": {"post": {"result": true}},"a_notification": {"get": {"result": true},"post": {"post": true}},"a_pay_form": {"post": {"post": true}},"a_payment_data": {"post": {"post": true}},"a_purchase_item": {"post": {"post": true}},"a_quiz_response": {"post": {"post": true}},"a_uid": {"get": {"get": true},"post": {"get": true}},"a_user": {"post": {"get": true}},"a_visit": {"post": {"result": true}},"id_mode": {"post": {"post": true}},"id_pay": {"post": {"get": true}},"is_back_to_back": {"post": {"post": true}},"is_unpaid_force": {"post": {"post": true}},"is_walk_in": {"get": {"get": true},"post": {"get": true}},"k_appointment": {"post": {"get": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_location": {"get": {"get": true,"result": true},"post": {"get": true}},"k_timezone": {"post": {"get": true}},"m_pay": {"post": {"post": true}},"s_id": {"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};