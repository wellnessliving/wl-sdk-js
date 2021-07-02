/**
 * Allows to pay an appointment or appointment purchase option for the client.
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
   * A list of answers for the questions.
   *
   * @post post
   * @type {{}}
   */
  this.a_answer = [];

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_Finish47Model_a_appointment
   * @property {string} k_appointment Appointment ID. Primary key in {@link \RsAppointmentSql} table.
   */

  /**
   * Booked appointments. Every element has key:
   * <dl>
   *   <dt>
   *     string <var>k_appointment</var>
   *   </dt>
   *   <dd>
   *     Appointment ID. Primary key in {@link \RsAppointmentSql} table.
   *   </dd>
   * </dl>
   *
   * @post result
   * @type {Wl_Appointment_Book_Finish_Finish47Model_a_appointment[]}
   */
  this.a_appointment = undefined;

  /**
   * The documentation is the same as in {@link FinishApi::$a_book_data}.
   *
   * @post post
   * @type {{}}
   */
  this.a_book_data = [];

  /**
   * IDs of activity of books are made. Primary keys in {@link RsLoginActivitySql} table.
   *
   * @post result
   * @type {string[]}
   */
  this.a_login_activity_visit = undefined;

  /**
   * A list of payment sources to pay with.
   *
   * Structure of this array corresponds structure of {@link \RsPayForm::$a_pay_source}.
   *
   * @post post
   * @type {{}[]}
   */
  this.a_pay_form = [];

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_Finish47Model_a_payment_data
   * @property {number} id_purchase_item Type of the purchase item. One of the {@link \RsPurchaseItemSid} constants.
   * @property {string} k_id Promotion key or appointment key. Depends on <tt>id_purchase_item</tt> of this array.
   * @property {string} k_login_promotion Login promotion key. Primary key in the {@link \RsLoginPromotionSql} table.
   * @property {string} text_discount_code Discount code.
   */

  /**
   * Data required for payment. Has next structure:<dl>
   *   <dt>int <var>id_purchase_item</var></dt>
   *   <dd>Type of the purchase item. One of the {@link \RsPurchaseItemSid} constants.</dd>
   *   <dt>string <var>k_id</var></dt>
   *   <dd>Promotion key or appointment key. Depends on <var>id_purchase_item</var> of this array.</dd>
   *   <dt>string <var>k_login_promotion</var></dt>
   *   <dd>Login promotion key. Primary key in the {@link \RsLoginPromotionSql} table.</dd>
   *   <dt>string <var>text_discount_code</var></dt>
   *   <dd>Discount code.</dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Appointment_Book_Finish_Finish47Model_a_payment_data}
   */
  this.a_payment_data = [];

  /**
   * Purchase items keys.
   * Empty if no purchases are made for appointment booking.
   *
   * @post post
   * @type {string[]}
   */
  this.a_purchase_item = [];

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_Finish47Model_a_user
   * @property {string[]} a_note List of notes to add to user.
   * @property {string} text_mail Mail.
   * @property {string} text_name_first First name.
   * @property {string} text_name_last Last name.
   * @property {string} text_phone Mobile phone.
   */

  /**
   * Data to create new user.
   * Specify if <var>$uid</var> is empty.
   * Must contain keys:
   * <dl><dt>string[] <var>a_note</var></dt><dd>List of notes to add to user.</dd>
   * <dt>string <var>text_mail</var></dt><dd>Mail.</dd>
   * <dt>string <var>text_name_first</var></dt><dd>First name.</dd>
   * <dt>string <var>text_name_last</var></dt><dd>Last name.</dd>
   * <dt>string <var>text_phone</var></dt><dd>Mobile phone.</dd></dl>
   *
   * @post get
   * @type {Wl_Appointment_Book_Finish_Finish47Model_a_user}
   */
  this.a_user = [];

  /**
   * IDs of visits. Primary keys in {@link RsVisitSql} table.
   *
   * @post result
   * @type {string[]}
   */
  this.a_visit = undefined;

  /**
   * Mode type, one of {@link \Wl\Mode\ModeSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * Payment type for the appointment, one of {@link RsAppointmentPaySid} constants.
   *
   * @post get
   * @type {number}
   */
  this.id_pay = 0;

  /**
   * Appointment key.
   * Specify to reschedule certain appointment.
   * Primary key in {@link \RsAppointmentSql} table.
   *
   * @post get
   * @type {string}
   */
  this.k_appointment = "0";

  /**
   * Business key.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Location to show available appointment booking schedule.
   *
   * Primary key in {@link \RsLocationSql} table.
   *
   * @get get,result
   * @post get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * A sum paid.
   *
   * @post post
   * @type {string}
   */
  this.m_pay = "0";

  /**
   * User to get information for.
   *
   * Primary key in {@link \PassportLoginSql} table.
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
  return {"a_field": {"a_answer": {"post": {"post": true}},"a_appointment": {"post": {"result": true}},"a_book_data": {"post": {"post": true}},"a_login_activity_visit": {"post": {"result": true}},"a_pay_form": {"post": {"post": true}},"a_payment_data": {"post": {"post": true}},"a_purchase_item": {"post": {"post": true}},"a_user": {"post": {"get": true}},"a_visit": {"post": {"result": true}},"id_mode": {"post": {"post": true}},"id_pay": {"post": {"get": true}},"k_appointment": {"post": {"get": true}},"k_business": {"post": {"get": true}},"k_location": {"get": {"get": true,"result": true},"post": {"get": true}},"m_pay": {"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};