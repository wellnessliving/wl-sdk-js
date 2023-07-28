/**
 * Allows to pay an appointment or appointment purchase option for the client.
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
   * A list of answers for the questions.
   *
   * @post post
   * @type {{}}
   */
  this.a_answer = [];

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_appointment
   * @property {string} k_appointment The appointment key.
   */

  /**
   * Booked appointments. Every element has key:
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
   * @type {Wl_Appointment_Book_Finish_FinishMultipleModel_a_appointment[]}
   */
  this.a_appointment = [];

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_repeat_a_resource
   * @property {*} i_index Asset index on layout. Specify only if asset category has a layout.
   * @property {string} k_resource Asset.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_repeat
   * @property {*} a_week Days of week when appointment must repeat. Constants of {@link ADateWeekSid} class.
   * Empty if appointment must not repeat weekly.
   * @property {*} dl_end Date when appointment repeat must stop. Empty if repeat must not stop at a certain date.
   * @property {*} i_occurrence Number of occurrences after that appointment repeat must stop.
   * Empty if repeat must not stop after a certain number of occurrences.
   * @property {number} i_period Frequency of appointment repeating.
   * @property {number} id_period Measurement unit of <tt>i_period</tt>. One of {@link ADurationSid} constants.
   * @property {*} is_month <tt>true</tt> if appointment must repeat monthly at the same date.
   * <tt>false</tt> if appointment must repeat monthly at the same week day.
   * <tt>null</tt> if appointment must not repeat monthly.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data
   * @property {*} a_product Add-ons to appointment. Specify for appointment booking only.
   * Old format: array keys - primary keys in {@link \RsShopProductOptionSql} table.
   * New format: each element is an array:
   *   <dt>int <tt>i_count</tt></dt><dd>Add-on count</dd>
   *   <dt>string <tt>k_shop_product_option</tt></dt><dd>Key of add-on, primary key in {@link \RsShopProductOptionSql} table.</dd>
   * @property {Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_repeat[]} a_repeat Recurring booking information:
   * <dl>
   *   <dt>
   *     int[] [<tt>a_week</tt>]
   *   </dt>
   *   <dd>
   *     Days of week when appointment must repeat. Constants of {@link ADateWeekSid} class.
   *     Empty if appointment must not repeat weekly.
   *   </dd>
   *   <dt>
   *     string [<tt>dl_end</tt>]
   *   </dt>
   *   <dd>
   *     Date when appointment repeat must stop. Empty if repeat must not stop at a certain date.
   *   </dd>
   *   <dt>
   *     int [<tt>i_occurrence</tt>]
   *   </dt>
   *   <dd>
   *     Number of occurrences after that appointment repeat must stop.
   *     Empty if repeat must not stop after a certain number of occurrences.
   *   </dd>
   *   <dt>
   *     int <tt>i_period</tt>
   *   </dt>
   *   <dd>
   *     Frequency of appointment repeating.
   *   </dd>
   *   <dt>
   *     int <tt>id_period</tt>
   *   </dt>
   *   <dd>
   *     Measurement unit of <tt>i_period</tt>. One of {@link ADurationSid} constants.
   *   </dd>
   *   <dt>
   *     bool [<tt>is_month</tt>]
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if appointment must repeat monthly at the same date.
   *     <tt>false</tt> if appointment must repeat monthly at the same week day.
   *     <tt>null</tt> if appointment must not repeat monthly.
   *   </dd>
   * </dl>
   * Empty if appointment must not be booked recurring.
   * @property {Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_repeat_a_resource[]} a_resource List of assets for appointment booking.
   * Keys - asset categories; primary keys in {@link \RsResourceTypeSql} table. Values - arrays with next keys:
   * <dl>
   *   <dt>int [<tt>i_index</tt>]</dt>
   *   <dd>Asset index on layout. Specify only if asset category has a layout.</dd>
   *   <dt>string <tt>k_resource</tt></dt>
   *   <dd>Asset.</dd>
   * </dl>
   * Specify only for appointment booking.
   * @property {string} dt_date Date/time for booking in MySQL format. It location timezone.
   * @property {*} i_duration Duration for asset booking in minutes. Specify for separate asset booking only.
   * @property {*} i_index Asset index on layout.
   * Specify for separate asset booking only and for a case when asset category has layout only.
   * @property {number} id_class_tab Kind of booking service. One of {@link Wl_Classes_Tab_TabSid} constants.
   * @property {*} id_gender_staff Gender of staff member to conduct appointment. One of {@link Wl_Gender_GenderSid} constants.
   * Specify for appointment booking only.
   * @property {*} k_login_promotion User's pass (membership, package).
   * Specify if you want to set which user's pass (membership, package) book must be payed by.
   * @property {*} k_resource Asset booking. Specify for separate asset booking only.
   * @property {*} k_service Appointment booking. Specify for appointment booking only.
   * @property {*} k_staff Staff member to conduct an appointment.
   * Specify for appointment booking only.
   * @property {*} k_staff_date Staff member to conduct an appointment.
   * The difference from the <tt>k_staff</tt> is that this value must be set only in a case
   * when you want to add customer to an exists appointment.
   * Specify for appointment booking only.
   * @property {*} m_tip_appointment Amount of selected tips.
   * @property {*} k_timezone Key of timezone. 'null' if the time has come in the time zone of the location.
   */

  /**
   * All data from the provider model <tt>Wl_Appointment_Book_ProviderModel</tt>:
   * <dl>
   *   <dt>
   *     array [<var>a_product</var>]
   *   </dt>
   *   <dd>
   *     Add-ons to appointment. Specify for appointment booking only.
   *     Old format: array keys - primary keys in {@link \RsShopProductOptionSql} table.
   *     New format: each element is an array:
   *       <dt>int <var>i_count</var></dt><dd>Add-on count</dd>
   *       <dt>string <var>k_shop_product_option</var></dt><dd>Key of add-on, primary key in {@link \RsShopProductOptionSql} table.</dd>
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
   *         Days of week when appointment must repeat. Constants of {@link ADateWeekSid} class.
   *         Empty if appointment must not repeat weekly.
   *       </dd>
   *       <dt>
   *         string [<var>dl_end</var>]
   *       </dt>
   *       <dd>
   *         Date when appointment repeat must stop. Empty if repeat must not stop at a certain date.
   *       </dd>
   *       <dt>
   *         int [<var>i_occurrence</var>]
   *       </dt>
   *       <dd>
   *         Number of occurrences after that appointment repeat must stop.
   *         Empty if repeat must not stop after a certain number of occurrences.
   *       </dd>
   *       <dt>
   *         int <var>i_period</var>
   *       </dt>
   *       <dd>
   *         Frequency of appointment repeating.
   *       </dd>
   *       <dt>
   *         int <var>id_period</var>
   *       </dt>
   *       <dd>
   *         Measurement unit of <tt>i_period</tt>. One of {@link ADurationSid} constants.
   *       </dd>
   *       <dt>
   *         bool [<var>is_month</var>]
   *       </dt>
   *       <dd>
   *         <tt>true</tt> if appointment must repeat monthly at the same date.
   *         <tt>false</tt> if appointment must repeat monthly at the same week day.
   *         <tt>null</tt> if appointment must not repeat monthly.
   *       </dd>
   *     </dl>
   *     Empty if appointment must not be booked recurring.
   *   </dd>
   *   <dt>
   *     array [<var>a_resource</var>]
   *   </dt>
   *   <dd>
   *     List of assets for appointment booking.
   *     Keys - asset categories; primary keys in {@link \RsResourceTypeSql} table. Values - arrays with next keys:
   *     <dl>
   *       <dt>int [<var>i_index</var>]</dt>
   *       <dd>Asset index on layout. Specify only if asset category has a layout.</dd>
   *       <dt>string <var>k_resource</var></dt>
   *       <dd>Asset.</dd>
   *     </dl>
   *     Specify only for appointment booking.
   *   </dd>
   *   <dt>
   *     string <var>dt_date</var>
   *   </dt>
   *   <dd>
   *     Date/time for booking in MySQL format. It location timezone.
   *   </dd>
   *   <dt>
   *     int [<var>i_duration</var>]
   *   </dt>
   *   <dd>
   *     Duration for asset booking in minutes. Specify for separate asset booking only.
   *   </dd>
   *   <dt>
   *     int [<var>i_index</var>]
   *   </dt>
   *   <dd>
   *     Asset index on layout.
   *     Specify for separate asset booking only and for a case when asset category has layout only.
   *   </dd>
   *   <dt>
   *     int <var>id_class_tab</var>
   *   </dt>
   *   <dd>
   *     Kind of booking service. One of {@link Wl_Classes_Tab_TabSid} constants.
   *   </dd>
   *   <dt>
   *     int [<var>id_gender_staff</var>]
   *   </dt>
   *   <dd>
   *     Gender of staff member to conduct appointment. One of {@link Wl_Gender_GenderSid} constants.
   *     Specify for appointment booking only.
   *   </dd>
   *   <dt>
   *     string [<var>k_login_promotion</var>]
   *   </dt>
   *   <dd>
   *     User's pass (membership, package).
   *     Specify if you want to set which user's pass (membership, package) book must be payed by.
   *   </dd>
   *   <dt>
   *     string [<var>k_resource</var>]
   *   </dt>
   *   <dd>
   *     Asset booking. Specify for separate asset booking only.
   *   </dd>
   *   <dt>
   *     string [<var>k_service</var>]
   *   </dt>
   *   <dd>
   *     Appointment booking. Specify for appointment booking only.
   *   </dd>
   *   <dt>
   *     string [<var>k_staff</var>]
   *   </dt>
   *   <dd>
   *     Staff member to conduct an appointment.
   *     Specify for appointment booking only.
   *   </dd>
   *   <dt>
   *     string [<var>k_staff_date</var>]
   *   </dt>
   *   <dd>
   *     Staff member to conduct an appointment.
   *     The difference from the <var>k_staff</var> is that this value must be set only in a case
   *     when you want to add customer to an exists appointment.
   *     Specify for appointment booking only.
   *   </dd>
   *   <dt>string [<var>m_tip_appointment</var>]</dt>
   *   <dd>Amount of selected tips.</dd>
   *   <dt>sting <var>k_timezone</var></dt>
   *   <dd>Key of timezone. 'null' if the time has come in the time zone of the location.</dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data}
   */
  this.a_book_data = [];

  /**
   * IDs of activity of books are made.
   *
   * @post result
   * @type {string[]}
   */
  this.a_login_activity_visit = undefined;

  /**
   * A sum paid.
   *
   * @post post
   * @type {{}}
   */
  this.a_paid = [];

  /**
   * Payment type for the appointment, one of {@link Wl_Appointment_PaySid} constants.
   *
   * @post get
   * @type {{}}
   */
  this.a_pay = [];

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
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_payment_data
   * @property {number} id_purchase_item Type of the purchase item. One of the {@link Wl_Purchase_Item_ItemSid} constants.
   * @property {string} k_id Promotion key or appointment key. Depends on <tt>id_purchase_item</tt> of this array.
   * @property {string} k_login_promotion Login promotion key.
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
   *   <dt>string <var>text_discount_code</var></dt>
   *   <dd>Discount code.</dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Appointment_Book_Finish_FinishMultipleModel_a_payment_data}
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
   * List of quiz response keys.
   * Key is quiz key.
   * Value is response key.
   *
   * @post post
   * @type {{}[]}
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
   * @type {Wl_Appointment_Book_Finish_FinishMultipleModel_a_user}
   */
  this.a_user = [];

  /**
   * IDs of visits.
   *
   * @post result
   * @type {string[]}
   */
  this.a_visit = [];

  /**
   * Mode type, one of {@link Wl_Mode_ModeSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * Whether multiple appointments booked in back-to-back mode.
   *
   * @post post
   * @type {boolean}
   */
  this.is_back_to_back = false;

  /**
   * `true` whether to try to make a test booking and rollback should be applied, `false` - otherwise.
   *
   * @post post
   * @type {boolean}
   */
  this.is_try = false;

  /**
   * `true` if client is walk-in, otherwise `false`.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.is_walk_in = false;

  /**
   * Appointment key.
   * Specify to reschedule certain appointment.
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
   * User to get information for.
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
  return {"a_field": {"a_answer": {"post": {"post": true}},"a_appointment": {"post": {"result": true}},"a_book_data": {"post": {"post": true}},"a_login_activity_visit": {"post": {"result": true}},"a_paid": {"post": {"post": true}},"a_pay": {"post": {"get": true}},"a_pay_form": {"post": {"post": true}},"a_payment_data": {"post": {"post": true}},"a_purchase_item": {"post": {"post": true}},"a_quiz_response": {"post": {"post": true}},"a_uid": {"get": {"get": true},"post": {"get": true}},"a_user": {"post": {"get": true}},"a_visit": {"post": {"result": true}},"id_mode": {"post": {"post": true}},"is_back_to_back": {"post": {"post": true}},"is_try": {"post": {"post": true}},"is_walk_in": {"get": {"get": true},"post": {"get": true}},"k_appointment": {"post": {"get": true}},"k_business": {"post": {"get": true}},"k_location": {"get": {"get": true,"result": true},"post": {"get": true}},"s_id": {"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};