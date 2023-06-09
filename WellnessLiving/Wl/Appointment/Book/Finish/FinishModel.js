/**
 * An endpoint that performs paid or unpaid appointment bookings. This endpoint can also be used to allow a
 * client to buy a Purchase Option to book an appointment.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Finish_FinishModel()
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
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishModel_a_appointment
   * @property {string} k_appointment The appointment ID.
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
   * @type {Wl_Appointment_Book_Finish_FinishModel_a_appointment[]}
   */
  this.a_appointment = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishModel_a_book_data_a_repeat_a_resource
   * @property {*} i_index The asset index on the layout, specified only if the asset category has a layout.
   * @property {string} k_resource The asset.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishModel_a_book_data_a_repeat
   * @property {*} a_week The days of week when appointment repeats. One of the constants of the {@link ADateWeekSid} class.
   * This will be empty if the appointment doesn't repeat weekly.
   * @property {*} dl_end The date when the appointment repeating stops. This will be empty if the appointment doesn't have a
   * date set for the repeating to stop.
   * @property {*} i_occurrence The number of occurrences after which the appointment's repeat cycle stops.
   * This will be empty if the repeating doesn't stop after a certain number of occurrences.
   * @property {number} i_period The frequency of appointment repeats.
   * @property {number} id_period The measurement unit of <tt>i_period</tt>. One of the {@link ADurationSid} constants.
   * @property {*} is_month This will be <tt>true</tt> if the appointment repeats monthly on the same date.
   * Otherwise, this will be <tt>false</tt> if appointment doesn't repeat monthly on the same day or <tt>null</tt>
   * if the appointment doesn't repeat monthly.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishModel_a_book_data_a_product (old format)
   * The object properties.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishModel_a_book_data_a_product (new format)
   * @property {number} i_count The add-on count.
   * @property {string} k_shop_product_option The add-on key.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishModel_a_book_data
   * @property {Wl_Appointment_Book_Finish_FinishModel_a_book_data_a_product[]} a_product The add-ons for the appointment,
   * specified for appointment bookings only.
   * @property {Wl_Appointment_Book_Finish_FinishModel_a_book_data_a_repeat[]} a_repeat The recurring booking information:
   * <dl>
   *   <dt>
   *     int[] [<tt>a_week</tt>]
   *   </dt>
   *   <dd>
   *     The days of week when appointment repeats. One of the constants of the {@link ADateWeekSid} class.
   *     This will be empty if appointment doesn't repeat weekly.
   *   </dd>
   *   <dt>
   *     string [<tt>dl_end</tt>]
   *   </dt>
   *   <dd>
   *     The date when appointment repeating stops. This will be empty if the repeating doesn't stop at a certain date.
   *   </dd>
   *   <dt>
   *     int [<tt>i_occurrence</tt>]
   *   </dt>
   *   <dd>
   *     The number of occurrences after which the appointment's repeat cycle stops.
   *     This will be empty if the repeating doesn't stop after a certain number of occurrences.
   *   </dd>
   *   <dt>
   *     int <tt>i_period</tt>
   *   </dt>
   *   <dd>
   *     The frequency of the appointment repeats.
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
   *     <tt>true</tt> - the appointment repeats monthly on the same date.
   *     <tt>false</tt> - the appointment repeats monthly on the same day of the week.
   *     <tt>null</tt> - the appointment doesn't repeat monthly.
   *   </dd>
   * </dl>
   * This will be empty if the appointment doesn't get booked on a recurring basis.
   * @property {Wl_Appointment_Book_Finish_FinishModel_a_book_data_a_repeat_a_resource[]} a_resource A list of assets for
   * the appointment booking. Keys refer to asset categories. Values are arrays with the next keys:
   * <dl>
   *   <dt>int [<tt>i_index</tt>]</dt>
   *   <dd>The asset index on layout. This is specified only if the asset category has a layout.</dd>
   *   <dt>string <tt>k_resource</tt></dt>
   *   <dd>The asset.</dd>
   * </dl>
   * This is specified only for appointment bookings.
   * @property {string} dt_date The date and time for the booking in MySQL format (in the location's time zone).
   * @property {*} i_duration The duration for the asset booking in minutes. This is specified for separate asset bookings only.
   * @property {*} i_index The asset index on the layout.
   * This is specified for separate asset bookings only and for cases when the asset category only has a layout.
   * @property {number} id_class_tab The service booking type. One of the {@link \Wl\Classes\Tab\TabSid} constants.
   * @property {*} id_gender_staff The gender of the staff member conducting the appointment. One of the {@link \Wl\Gender\GenderSid} constants.
   * This is specified for appointment bookings only.
   * @property {*} k_login_promotion The client's Purchase Option.
   * This is specified if you want to set a specific Purchase Option to be used for the booking.
   * @property {*} k_resource The asset booking. This is specified for separate asset bookings only.
   * @property {*} k_service The appointment booking. This is specified for appointment bookings only.
   * @property {*} k_staff The staff member conducting the appointment. This is specified for appointment bookings only.
   * @property {*} k_staff_date The staff member conducting the appointment.
   * Unlike the <tt>k_staff</tt> value, this value is set only in a cases where you want to add a customer to an existing appointment.
   * This is specified for appointment bookings only.
   * @property {*} m_tip_appointment The amount of selected tips.
   */

  this.a_book_data = [];
  /**
   * All the data from the provider model <tt>Wl_Appointment_Book_ProviderModel</tt>:
   * <dl>
   *   <dt>
   *     array [<var>a_product</var>]
   *   </dt>
   *   <dd>
   *     The appointment add-ons. This is specified for appointment bookings only.
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
   *         The days of the week when appointment repeats. One of the constants of the {@link ADateWeekSid} class.
   *         This will be empty if the appointment doesn't repeat weekly.
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
   *           The number of occurrences after which the appointment's repeat cycle stops.
   *           This will be empty if the repeating doesn't stop after a certain number of occurrences.
   *       </dd>
   *       <dt>
   *         int <var>i_period</var>
   *       </dt>
   *       <dd>
   *         The frequency at which the appointment repeats.
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
   *         <tt>true</tt> - the appointment repeats monthly on the same date.
   *         <tt>false</tt> - the appointment repeats monthly on the same day of the week.
   *         <tt>null</tt> - the appointment doesn't repeat monthly.
   *       </dd>
   *     </dl>
   *     This will be empty if the appointment doesn't get booked on a recurring basis.
   *   </dd>
   *   <dt>
   *     array [<var>a_resource</var>]
   *   </dt>
   *   <dd>
   *     A list of assets for the appointment booking.
   *     Keys refer to asset categories. Values are arrays with the next keys:
   *     <dl>
   *       <dt>int [<var>i_index</var>]</dt>
   *       <dd>The asset index on the layout. This is specified only if the asset category has a layout.</dd>
   *       <dt>string <var>k_resource</var></dt>
   *       <dd>The asset.</dd>
   *     </dl>
   *     This is specified only for appointment bookings.
   *   </dd>
   *   <dt>
   *     string <var>dt_date</var>
   *   </dt>
   *   <dd>
   *     The date/time for the booking in MySQL format (in the location's time zone).
   *   </dd>
   *   <dt>
   *     int [<var>i_duration</var>]
   *   </dt>
   *   <dd>
   *     The duration for the asset booking in minutes. This is specified for separate asset bookings only.
   *   </dd>
   *   <dt>
   *     int [<var>i_index</var>]
   *   </dt>
   *   <dd>
   *     The asset index on the layout.
   *     This is specified for separate asset bookings only and for cases where the asset category only has a layout.
   *   </dd>
   *   <dt>
   *     int <var>id_class_tab</var>
   *   </dt>
   *   <dd>
   *     The service booking type. One of the {@link \Wl\Classes\Tab\TabSid} constants.
   *   </dd>
   *   <dt>
   *     int [<var>id_gender_staff</var>]
   *   </dt>
   *   <dd>
   *     The gender of the staff member conducting the appointment. One of the {@link \Wl\Gender\GenderSid} constants.
   *     This is specified for appointment bookings only.
   *   </dd>
   *   <dt>
   *     string [<var>k_login_promotion</var>]
   *   </dt>
   *   <dd>
   *     The client's Purchase Option.
   *     This is specified if you want to set a specific Purchase Option to be used for the booking.
   *   </dd>
   *   <dt>
   *     string [<var>k_resource</var>]
   *   </dt>
   *   <dd>
   *     The asset booking. This is specified for separate asset bookings only.
   *   </dd>
   *   <dt>
   *     string [<var>k_service</var>]
   *   </dt>
   *   <dd>
   *     The appointment booking. This is specified for appointment bookings only.
   *   </dd>
   *   <dt>
   *     string [<var>k_staff</var>]
   *   </dt>
   *   <dd>
   *     The staff member conducting the appointment.
   *     This is specified for appointment bookings only.
   *   </dd>
   *   <dt>
   *     string [<var>k_staff_date</var>]
   *   </dt>
   *   <dd>
   *     Unlike the <tt>k_staff</tt> value, this value is set only in a cases where you want to add a customer to an existing appointment.
   *     This is specified for appointment bookings only.
   *   </dd>
   *   <dt>string [<var>m_tip_appointment</var>]</dt>
   *   <dd>The amount of selected tips.</dd>
   * </dl>
   *
   * @post get
   * @type {Wl_Appointment_Book_Finish_FinishModel_a_book_data}
   */

  /**
   * The activity IDs representing bookings that have been made.
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
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishModel_a_payment_data
   * @property {number} id_purchase_item The type of the purchase item. One of the {@link \RsPurchaseItemSid} constants.
   * @property {string} k_id The promotion key or appointment key, depending on <tt>id_purchase_item</tt> of this array.
   * @property {string} k_login_promotion The login promotion key.
   * @property {string} text_discount_code The discount code.
   */

  /**
   * Data required for payment with the next structure:<dl>
   *   <dt>int <var>id_purchase_item</var></dt>
   *   <dd>The type of the purchase item. One of the {@link \RsPurchaseItemSid} constants.</dd>
   *   <dt>string <var>k_id</var></dt>
   *   <dd>The promotion key or appointment key, depending on <var>id_purchase_item</var> of this array.</dd>
   *   <dt>string <var>k_login_promotion</var></dt>
   *   <dd>The login promotion key.</dd>
   *   <dt>string <var>text_discount_code</var></dt>
   *   <dd>The discount code.</dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Appointment_Book_Finish_FinishModel_a_payment_data}
   */
  this.a_payment_data = [];

  /**
   * The purchase item keys.
   * This will be empty if no purchases have been made for the appointment booking.
   *
   * @post post
   * @type {string[]}
   */
  this.a_purchase_item = [];

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishModel_a_user
   * @property {string[]} a_note A list of notes to add to the client.
   * @property {string} text_mail The client's email address.
   * @property {string} text_name_first The client's first name.
   * @property {string} text_name_last The client's last name.
   * @property {string} text_phone The client's mobile phone number.
   */

  /**
   * Data to create a new client.
   * This is specified if <var>$uid</var> is empty.
   * The data must contain the next keys:
   * <dl><dt>string[] <var>a_note</var></dt><dd>A list of notes to add to the client.</dd>
   * <dt>string <var>text_mail</var></dt><dd>The client's email address.</dd>
   * <dt>string <var>text_name_first</var></dt><dd>The client's first name.</dd>
   * <dt>string <var>text_name_last</var></dt><dd>The client's last name.</dd>
   * <dt>string <var>text_phone</var></dt><dd>The client's mobile phone number.</dd></dl>
   *
   * @post get
   * @type {Wl_Appointment_Book_Finish_FinishModel_a_user}
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
   * The payment type for the appointment. One of the {@link RsAppointmentPaySid} constants.
   *
   * @post get
   * @type {number}
   */
  this.id_pay = 0;

  /**
   * The appointment key.
   * This is specified when rescheduling certain appointments.
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
   * The location to show available appointment booking schedule for.
   *
   * @get get,result
   * @post get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * The sum paid.
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

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Finish_FinishModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Finish_FinishModel.prototype.config=function()
{
  return {"a_field": {"a_answer": {"post": {"post": true}},"a_appointment": {"post": {"result": true}},"a_book_data": {"post": {"get": true}},"a_login_activity_visit": {"post": {"result": true}},"a_pay_form": {"post": {"post": true}},"a_payment_data": {"post": {"post": true}},"a_purchase_item": {"post": {"post": true}},"a_user": {"post": {"get": true}},"a_visit": {"post": {"result": true}},"id_mode": {"post": {"post": true}},"id_pay": {"post": {"get": true}},"k_appointment": {"post": {"get": true}},"k_business": {"post": {"get": true}},"k_location": {"get": {"get": true,"result": true},"post": {"get": true}},"m_pay": {"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};