/**
 * An endpoint that performs paid or unpaid appointment bookings. This endpoint can also be used to allow a
 * client to buy a Purchase Option to book an appointment.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Finish_Finish47Model()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A list of answers for the questions required for the appointment booking.
   *
   * @post post
   * @type {{}}
   */
  this.a_answer = [];

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_Finish47Model_a_appointment
   * @property {string} k_appointment Appointment ID.
   */

  /**
   * The booked appointments. Every element has the next key:
   * <dl>
   *   <dt>
   *     string <var>k_appointment</var>
   *   </dt>
   *   <dd>
   *     The appointment ID.
   *   </dd>
   * </dl>
   *
   * @post result
   * @type {Wl_Appointment_Book_Finish_Finish47Model_a_appointment[]}
   */
  this.a_appointment = undefined;

  /**
   * See {@link FinishApi::$a_book_data} for details.
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
   * A list of payment sources to pay with.
   *
   * The structure of this array corresponds with the structure of {@link \RsPayForm::$a_pay_source}.
   *
   * @post post
   * @type {{}[]}
   */
  this.a_pay_form = [];

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_Finish47Model_a_payment_data
   * @property {number} id_purchase_item The type of the purchase item. One of the {@link \RsPurchaseItemSid} constants.
   * @property {string} k_id The promotion or appointment key (depending on <tt>id_purchase_item</tt> of this array).
   * @property {string} k_login_promotion The login promotion key.
   * @property {string} text_discount_code The discount code.
   */

  /**
   * Data required for a payment. The data has the next structure:<dl>
   *   <dt>int <var>id_purchase_item</var></dt>
   *   <dd>The purchase item type. One of the {@link \RsPurchaseItemSid} constants.</dd>
   *   <dt>string <var>k_id</var></dt>
   *   <dd>The promotion or appointment key (depending on <var>id_purchase_item</var> of this array).</dd>
   *   <dt>string <var>k_login_promotion</var></dt>
   *   <dd>The login promotion key.</dd>
   *   <dt>string <var>text_discount_code</var></dt>
   *   <dd>The discount code.</dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Appointment_Book_Finish_Finish47Model_a_payment_data}
   */
  this.a_payment_data = [];

  /**
   * The purchase items keys.
   * This will be empty if no purchases have been made for the appointment booking.
   *
   * @post post
   * @type {string[]}
   */
  this.a_purchase_item = [];

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_Finish47Model_a_user
   * @property {string[]} a_note A list of notes to add to the client.
   * @property {string} text_mail The client's email address.
   * @property {string} text_name_first The client's first name.
   * @property {string} text_name_last The client's last name.
   * @property {string} text_phone The client's mobile phone number.
   */

  /**
   * Data used to create a new client.
   * This will be specified if <var>$uid</var> is empty.
   * The <tt>a_user</tt> property must contain the next keys:
   * <dl><dt>string[] <var>a_note</var></dt><dd>A list of notes to add to the client.</dd>
   * <dt>string <var>text_mail</var></dt><dd>The client's email address.</dd>
   * <dt>string <var>text_name_first</var></dt><dd>The client's first name.</dd>
   * <dt>string <var>text_name_last</var></dt><dd>The client's last name.</dd>
   * <dt>string <var>text_phone</var></dt><dd>The client's mobile phone.</dd></dl>
   *
   * @post get
   * @type {Wl_Appointment_Book_Finish_Finish47Model_a_user}
   */
  this.a_user = [];

  /**
   * The visit IDs.
   *
   * @post result
   * @type {string[]}
   */
  this.a_visit = undefined;

  /**
   * The mode type. One of the {@link \Wl\Mode\ModeSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * The ID of the payment type used for the appointment booking. One of {@link RsAppointmentPaySid} constants.
   *
   * @post get
   * @type {number}
   */
  this.id_pay = 0;

  /**
   * The appointment key.
   * This is used when rescheduling appointment sessions.
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
   * The location to show the available appointment booking schedule for.
   *
   * @get get,result
   * @post get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * The amount paid by the client.
   *
   * @post post
   * @type {string}
   */
  this.m_pay = "0";

  /**
   * The client to get information for.
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