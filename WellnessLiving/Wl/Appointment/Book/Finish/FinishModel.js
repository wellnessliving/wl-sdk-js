/**
 * Allows to pay an appointment or appointment purchase option for the client.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Finish_FinishModel()
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
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishModel_a_appointment
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
   * @type {Wl_Appointment_Book_Finish_FinishModel_a_appointment[]}
   */
  this.a_appointment = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishModel_a_book_data_a_repeat_a_resource
   * @property {*} i_index Asset index on layout. Specify only if asset category has a layout.
   * @property {string} k_resource Asset. Primary key in {@link \RsResourceSql} table.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishModel_a_book_data_a_repeat
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
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishModel_a_book_data
   * @property {*} a_product Add-ons to appointment.
   * Elements - primary keys in {@link \RsShopProductOptionSql} table.
   * Specify for appointment booking only.
   * @property {Wl_Appointment_Book_Finish_FinishModel_a_book_data_a_repeat[]} a_repeat Recurring booking information:
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
   * @property {Wl_Appointment_Book_Finish_FinishModel_a_book_data_a_repeat_a_resource[]} a_resource List of assets for appointment booking.
   * Keys - asset categories; primary keys in {@link \RsResourceCategorySql} table. Values - arrays with next keys:
   * <dl>
   *   <dt>int [<tt>i_index</tt>]</dt>
   *   <dd>Asset index on layout. Specify only if asset category has a layout.</dd>
   *   <dt>string <tt>k_resource</tt></dt>
   *   <dd>Asset. Primary key in {@link \RsResourceSql} table.</dd>
   * </dl>
   * Specify only for appointment booking.
   * @property {string} dt_date Date/time for booking in MySQL format. It location timezone.
   * @property {*} i_duration Duration for asset booking in minutes. Specify for separate asset booking only.
   * @property {*} i_index Asset index on layout.
   * Specify for separate asset booking only and for a case when asset category has layout only.
   * @property {number} id_class_tab Kind of booking service. One of {@link \Wl\Classes\Tab\TabSid} constants.
   * @property {*} id_gender_staff Gender of staff member to conduct appointment. One of {@link \Wl\Gender\GenderSid} constants.
   * Specify for appointment booking only.
   * @property {*} k_login_promotion User's pass (membership, package). Primary key in {@link \RsLoginPromotionSql} table.
   * Specify if you want to set which user's pass (membership, package) book must be payed by.
   * @property {*} k_resource Asset booking. Primary key in {@link \RsResourceSql} table. Specify for separate asset booking only.
   * @property {*} k_service Appointment booking. Primary key in {@link \RsServiceSql} table. Specify for appointment booking only.
   * @property {*} k_staff Staff member to conduct an appointment. Primary key in {@link \RsStaffSql} table.
   * Specify for appointment booking only.
   * @property {*} k_staff_date Staff member to conduct an appointment.
   * The difference from the <tt>k_staff</tt> is that this value must be set only in a case
   * when you want to add customer to an exists appointment.
   * Primary key in {@link \RsStaffSql} table.
   * Specify for appointment booking only.
   * @property {*} m_tip_appointment Amount of selected tips.
   */

  /**
   * All data from the provider model <tt>Wl_Appointment_Book_ProviderModel</tt>:
   * <dl>
   *   <dt>
   *     array [<var>a_product</var>]
   *   </dt>
   *   <dd>
   *     Add-ons to appointment.
   *     Elements - primary keys in {@link \RsShopProductOptionSql} table.
   *     Specify for appointment booking only.
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
   *     Keys - asset categories; primary keys in {@link \RsResourceCategorySql} table. Values - arrays with next keys:
   *     <dl>
   *       <dt>int [<var>i_index</var>]</dt>
   *       <dd>Asset index on layout. Specify only if asset category has a layout.</dd>
   *       <dt>string <var>k_resource</var></dt>
   *       <dd>Asset. Primary key in {@link \RsResourceSql} table.</dd>
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
   *     Kind of booking service. One of {@link \Wl\Classes\Tab\TabSid} constants.
   *   </dd>
   *   <dt>
   *     int [<var>id_gender_staff</var>]
   *   </dt>
   *   <dd>
   *     Gender of staff member to conduct appointment. One of {@link \Wl\Gender\GenderSid} constants.
   *     Specify for appointment booking only.
   *   </dd>
   *   <dt>
   *     string [<var>k_login_promotion</var>]
   *   </dt>
   *   <dd>
   *     User's pass (membership, package). Primary key in {@link \RsLoginPromotionSql} table.
   *     Specify if you want to set which user's pass (membership, package) book must be payed by.
   *   </dd>
   *   <dt>
   *     string [<var>k_resource</var>]
   *   </dt>
   *   <dd>
   *     Asset booking. Primary key in {@link \RsResourceSql} table. Specify for separate asset booking only.
   *   </dd>
   *   <dt>
   *     string [<var>k_service</var>]
   *   </dt>
   *   <dd>
   *     Appointment booking. Primary key in {@link \RsServiceSql} table. Specify for appointment booking only.
   *   </dd>
   *   <dt>
   *     string [<var>k_staff</var>]
   *   </dt>
   *   <dd>
   *     Staff member to conduct an appointment. Primary key in {@link \RsStaffSql} table.
   *     Specify for appointment booking only.
   *   </dd>
   *   <dt>
   *     string [<var>k_staff_date</var>]
   *   </dt>
   *   <dd>
   *     Staff member to conduct an appointment.
   *     The difference from the <var>k_staff</var> is that this value must be set only in a case
   *     when you want to add customer to an exists appointment.
   *     Primary key in {@link \RsStaffSql} table.
   *     Specify for appointment booking only.
   *   </dd>
   *   <dt>string [<var>m_tip_appointment</var>]</dt>
   *   <dd>Amount of selected tips.</dd>
   * </dl>
   *
   * @post get
   * @type {Wl_Appointment_Book_Finish_FinishModel_a_book_data}
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
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishModel_a_payment_data
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
   * @type {Wl_Appointment_Book_Finish_FinishModel_a_payment_data}
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
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishModel_a_user
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
   * @type {Wl_Appointment_Book_Finish_FinishModel_a_user}
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

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Finish_FinishModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Finish_FinishModel.prototype.config=function()
{
  return {"a_field": {"a_answer": {"post": {"post": true}},"a_appointment": {"post": {"result": true}},"a_book_data": {"post": {"get": true}},"a_login_activity_visit": {"post": {"result": true}},"a_pay_form": {"post": {"post": true}},"a_payment_data": {"post": {"post": true}},"a_purchase_item": {"post": {"post": true}},"a_user": {"post": {"get": true}},"a_visit": {"post": {"result": true}},"id_mode": {"post": {"post": true}},"id_pay": {"post": {"get": true}},"k_appointment": {"post": {"get": true}},"k_business": {"post": {"get": true}},"k_location": {"get": {"get": true,"result": true},"post": {"get": true}},"m_pay": {"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};