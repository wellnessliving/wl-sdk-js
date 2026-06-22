/**
 * Completes an appointment booking.
 *
 * This model is generated automatically based on API.
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
  this.a_answer = [];

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_Finish47Model_a_appointment
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
   * @type {Wl_Appointment_Book_Finish_Finish47Model_a_appointment[]}
   */
  this.a_appointment = undefined;

  /**
   * The documentation is the same as in {@link Wl_Appointment_Book_Finish_FinishModel.a_book_data}.
   *
   * @post post
   * @type {{}}
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
   * @typedef {{}} Wl_Appointment_Book_Finish_Finish47Model_a_notification
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
   * @type {Wl_Appointment_Book_Finish_Finish47Model_a_notification}
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
   * @typedef {{}} Wl_Appointment_Book_Finish_Finish47Model_a_payment_data
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
   * @type {Wl_Appointment_Book_Finish_Finish47Model_a_payment_data}
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
   * List of quiz response keys.
   * Key is quiz key from {@link \Core\Quiz\QuizSql} table.
   * Value is response key from {@link \Core\Quiz\Response\ResponseSql} table.
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
   * @typedef {{}} Wl_Appointment_Book_Finish_Finish47Model_a_user
   * @property {string[]} a_note List of notes to add to user.
   * @property {string} text_mail Mail.
   * @property {string} text_name_first First name.
   * @property {string} text_name_last Last name.
   * @property {string} text_phone Phone.
   */

  /**
   * Data to create new user.
   * Specify this if <var>$uid</var> is empty.
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
   * @type {Wl_Appointment_Book_Finish_Finish47Model_a_user}
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
   * @typedef {{}} Wl_Appointment_Book_Finish_Finish47Model_a_visit_payment
   * @property {boolean} is_free `true` if the visit is free; `false` otherwise.
   * @property {string} k_login_promotion Key of applied user's purchase option.
   * @property {string} k_promotion Key of purchase option.
   * @property {string} k_session_pass Key of applied session pass.
   * @property {string} text_promotion Purchase option title.
   */

  /**
   * Keys - keys of books made.
   * Values - arrays with next keys:
   * <dl>
   *     <dt>bool `is_free`</dt>
   *     <dd>`true` if the visit is free; `false` otherwise.</dd>
   *     <dt>string `k_login_promotion`</dt>
   *     <dd>Key of applied user's purchase option.</dd>
   *     <dt>string `k_promotion`</dt>
   *     <dd>Key of purchase option.</dd>
   *     <dt>string `k_session_pass`</dt>
   *     <dd>Key of applied session pass.</dd>
   *     <dt>string `text_promotion`</dt>
   *     <dd>Purchase option title.</dd>
   * </dl>
   *
   * @post result
   * @type {Wl_Appointment_Book_Finish_Finish47Model_a_visit_payment[]}
   */
  this.a_visit_payment = undefined;

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

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Finish_Finish47Model);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Finish_Finish47Model.prototype.config=function()
{
  return {"a_field": {"a_answer": {"post": {"post": true}},"a_appointment": {"post": {"result": true}},"a_book_data": {"post": {"post": true}},"a_login_activity_visit": {"post": {"result": true}},"a_notification": {"get": {"result": true},"post": {"post": true}},"a_pay_form": {"post": {"post": true}},"a_payment_data": {"post": {"post": true}},"a_purchase_item": {"post": {"post": true}},"a_quiz_response": {"post": {"post": true}},"a_uid": {"get": {"get": true},"post": {"get": true}},"a_user": {"post": {"get": true}},"a_visit": {"post": {"result": true}},"a_visit_payment": {"post": {"result": true}},"id_mode": {"post": {"post": true}},"id_pay": {"post": {"get": true}},"is_back_to_back": {"post": {"post": true}},"is_unpaid_force": {"post": {"post": true}},"is_walk_in": {"get": {"get": true},"post": {"get": true}},"k_appointment": {"post": {"get": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_location": {"get": {"get": true,"result": true},"post": {"get": true}},"k_timezone": {"post": {"get": true}},"m_pay": {"post": {"post": true}},"s_id": {"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};