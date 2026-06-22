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
   * <tt>1st dimension</tt> - provider index.
   * <tt>2nd dimension</tt> - keys refer to hashes of the questions. Values refer to answers for the questions.
   *
   * @post post
   * @type {{}[]}
   */
  this.a_answer = [];

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_appointment
   * @property {string} k_appointment The appointment key.
   */

  /**
   * The booked appointments. Every element has the key:
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
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_provider_a_conflict_a_product_a_repeat_a_resource
   * @property {number} [i_index] The asset index on the layout. This is only specified if the asset category has a layout.
   * @property {string} k_resource The asset.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_provider_a_conflict_a_product_a_repeat
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
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_provider_a_conflict_a_product
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
   * @property {string} k_resource New asset primary key.
   * @property {?string} k_staff New staff member's primary key. `null` in a case of asset booking.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_provider
   * @property {Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_provider_a_conflict[]} [a_conflict] Information about booking conflicts. Keys are bookings dates/times in MySQL format in UTC. Values are arrays with next keys:
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
   * @property {Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_provider_a_conflict_a_product} [a_product] Add-ons to the appointment. Specified for appointment bookings only.
   * The old format used array keys. While the new format has each element as an array:
   * <dl>
   *   <dt>int <tt>i_count</tt></dt><dd>The add-on buy count.</dd>
   *   <dt>int [<tt>i_count_use</tt>]</dt><dd>The add-on use count. If not set, then use count is equals to buy count.</dd>
   *   <dt>string <tt>k_shop_product_option</tt></dt><dd>The add-on key.</dd>
   * </dl>
   * @property {Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_provider_a_conflict_a_product_a_repeat} [a_repeat] Information for the recurring booking:
   * <dl>
   *   <dt>
   *     int[] [<tt>a_week</tt>]
   *   </dt>
   *   <dd>
   *     The days of the week when the appointment repeats. One of the constants of the {@link ADateWeekSid} class.
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
   *     The number of occurrences after which the appointment's repeat cycle stops.
   *     This will be empty if the repeat cycle doesn't stop after a certain number of occurrences.
   *   </dd>
   *   <dt>
   *     int <tt>i_period</tt>
   *   </dt>
   *   <dd>
   *     The frequency at which the appointment repeats.
   *   </dd>
   *   <dt>
   *     int <tt>id_period</tt>
   *   </dt>
   *   <dd>
   *     The measurement unit of `i_period`. One of the {@link ADurationSid} constants.
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
   * This will be empty if the appointment isn't booked recurringly.
   * @property {Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_provider_a_conflict_a_product_a_repeat_a_resource} [a_resource] The list of assets for the appointment booking.
   * Keys refer to asset categories. Values are arrays with the next keys:
   * <dl>
   *   <dt>int [<tt>i_index</tt>]</dt>
   *   <dd>The asset index on the layout. This is only specified if the asset category has a layout.</dd>
   *   <dt>string <tt>k_resource</tt></dt>
   *   <dd>The asset.</dd>
   * </dl>
   * Specify this only for an appointment booking.
   * @property {string} dt_date The date/time for the booking in MySQL format in the location's time zone.
   * @property {number} [i_duration] The duration for the asset booking in minutes. Specify this for separate asset bookings only.
   * @property {number} [i_index] The asset index on the layout.
   * Specify this for separate asset bookings only and for cases when the asset category only has the layout.
   * @property {number} [id_gender_staff] The gender of the staff member conducting the appointment. One of the {@link Wl_Gender_GenderSid} constants.
   * Specify this for appointment bookings only.
   * @property {number} [id_purchase_item] Type of the purchase item. One of the {@link Wl_Purchase_Item_ItemSid} constants.
   * @property {boolean} [is_unpaid_force] If `true`, the appointment is booked as unpaid. Otherwise, this will be `false` to select an available Purchase Option.
   * @property {boolean} [is_wait_list_unpaid] If `true`, appointment waits unpaid.
   * @property {string} [k_login_prize] The user's prize.
   * @property {string} [k_login_promotion] The user's Purchase Option.
   * Specify this if you want to use a specific Purchase Option to pay for the booking.
   * @property {string} [k_resource] The asset booking. Specify this for separate asset bookings only.
   * @property {string} k_service The appointment booking. Specify this for appointment bookings only.
   * @property {string} [k_session_pass] The user's pass (for example, a membership or a package).
   * Specify this if you want to set the pass to use to pay for the booking.
   * @property {string} [k_staff] The staff member conducting the appointment.
   * Specify this for appointment bookings only.
   * @property {string} [k_staff_date] The staff member conducting the appointment.
   * The difference between this and <tt>k_staff</tt> is that this value must be set only in cases
   * when you want to add customer to an appointment that already exists.
   * Specify this for appointment bookings only.
   * @property {string} [m_tip_appointment] The amount of selected tips.
   * @property {string} [k_timezone] The time zone key. This will be 'null' if the time zone used matches the time zone of the location.
   * @property {string} [uid] User's primary key.
   * Specify only in a case of booking for a lof of different users.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data
   * @property {number} [id_class_tab] The booking service type. One of the {@link Wl_Classes_Tab_TabSid} constants.
   * @property {Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data_a_provider[]} [a_provider] A list of providers and their booking details. Every element has next keys:
   * <dl>
   *   <dt>
   *     array[] [<tt>a_conflict</tt>]
   *   </dt>
   *   <dd>
   *     Information about booking conflicts. Keys are bookings dates/times in MySQL format in UTC. Values are arrays with next keys:
   *     <dl>
   *       <dt>string <tt>dt_date_local</tt></dt>
   *       <dd>New appointment date/time in MySQL in locale timezone.</dd>
   *       <dt>int <tt>i_duration</tt></dt>
   *       <dd>New asset booking duration.</dd>
   *       <dt>int <tt>i_index</tt></dt>
   *       <dd>New asset index.</dd>
   *       <dt>int <tt>id_conflict</tt></dt>
   *       <dd>Solution type. One of {@link RsAppointmentEditConflictSid} constants.</dd>
   *       <dt>string <tt>k_resource</tt></dt>
   *       <dd>New asset primary key.</dd>
   *       <dt>string|null <tt>k_staff</tt></dt>
   *       <dd>New staff member's primary key. `null` in a case of asset booking.</dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     array [<tt>a_product</tt>]
   *   </dt>
   *   <dd>
   *     Add-ons to the appointment. Specified for appointment bookings only.
   *     The old format used array keys. While the new format has each element as an array:
   *     <dl>
   *       <dt>int <tt>i_count</tt></dt><dd>The add-on buy count.</dd>
   *       <dt>int [<tt>i_count_use</tt>]</dt><dd>The add-on use count. If not set, then use count is equals to buy count.</dd>
   *       <dt>string <tt>k_shop_product_option</tt></dt><dd>The add-on key.</dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     array [<tt>a_repeat</tt>]
   *   </dt>
   *   <dd>
   *     Information for the recurring booking:
   *     <dl>
   *       <dt>
   *         int[] [<tt>a_week</tt>]
   *       </dt>
   *       <dd>
   *         The days of the week when the appointment repeats. One of the constants of the {@link ADateWeekSid} class.
   *         This will be empty if the appointment doesn't repeat weekly.
   *       </dd>
   *       <dt>
   *         string [<tt>dl_end</tt>]
   *       </dt>
   *       <dd>
   *         The date when the appointment's repeat cycle stops. This will be empty if the repeat cycle doesn't stop at a certain date.
   *       </dd>
   *       <dt>
   *         int [<tt>i_occurrence</tt>]
   *       </dt>
   *       <dd>
   *         The number of occurrences after which the appointment's repeat cycle stops.
   *         This will be empty if the repeat cycle doesn't stop after a certain number of occurrences.
   *       </dd>
   *       <dt>
   *         int <tt>i_period</tt>
   *       </dt>
   *       <dd>
   *         The frequency at which the appointment repeats.
   *       </dd>
   *       <dt>
   *         int <tt>id_period</tt>
   *       </dt>
   *       <dd>
   *         The measurement unit of `i_period`. One of the {@link ADurationSid} constants.
   *       </dd>
   *       <dt>
   *         bool [<tt>is_month</tt>]
   *       </dt>
   *       <dd>
   *         <tt>true</tt> if the appointment repeats monthly on the same date.
   *         <tt>false</tt> if the appointment repeats monthly on the same day of the week.
   *         <tt>null</tt> if the appointment doesn't repeat monthly.
   *       </dd>
   *     </dl>
   *     This will be empty if the appointment isn't booked recurringly.
   *   </dd>
   *   <dt>
   *     array [<tt>a_resource</tt>]
   *   </dt>
   *   <dd>
   *     The list of assets for the appointment booking.
   *     Keys refer to asset categories. Values are arrays with the next keys:
   *     <dl>
   *       <dt>int [<tt>i_index</tt>]</dt>
   *       <dd>The asset index on the layout. This is only specified if the asset category has a layout.</dd>
   *       <dt>string <tt>k_resource</tt></dt>
   *       <dd>The asset.</dd>
   *     </dl>
   *     Specify this only for an appointment booking.
   *   </dd>
   *   <dt>
   *     string <tt>dt_date</tt>
   *   </dt>
   *   <dd>
   *     The date/time for the booking in MySQL format in the location's time zone.
   *   </dd>
   *   <dt>
   *     int [<tt>i_duration</tt>]
   *   </dt>
   *   <dd>
   *     The duration for the asset booking in minutes. Specify this for separate asset bookings only.
   *   </dd>
   *   <dt>
   *     int [<tt>i_index</tt>]
   *   </dt>
   *   <dd>
   *     The asset index on the layout.
   *     Specify this for separate asset bookings only and for cases when the asset category only has the layout.
   *   </dd>
   *   <dt>
   *     int [<tt>id_gender_staff</tt>]
   *   </dt>
   *   <dd>
   *     The gender of the staff member conducting the appointment. One of the {@link Wl_Gender_GenderSid} constants.
   *     Specify this for appointment bookings only.
   *   </dd>
   *   <dt>
   *     int [<tt>id_purchase_item</tt>]
   *   </dt>
   *   <dd>
   *     Type of the purchase item. One of the {@link Wl_Purchase_Item_ItemSid} constants.
   *   </dd>
   *   <dt>
   *     bool [<tt>is_unpaid_force</tt>]
   *   </dt>
   *   <dd>
   *     If `true`, the appointment is booked as unpaid. Otherwise, this will be `false` to select an available Purchase Option.
   *   </dd>
   *   <dt>
   *     bool [<tt>is_wait_list_unpaid</tt>]
   *   </dt>
   *   <dd>
   *     If `true`, appointment waits unpaid.
   *   </dd>
   *   <dt>
   *     string [<tt>k_login_prize</tt>]
   *   </dt>
   *   <dd>
   *     The user's prize.
   *   </dd>
   *   <dt>
   *     string [<tt>k_login_promotion</tt>]
   *   </dt>
   *   <dd>
   *     The user's Purchase Option.
   *     Specify this if you want to use a specific Purchase Option to pay for the booking.
   *   </dd>
   *   <dt>
   *     string [<tt>k_resource</tt>]
   *   </dt>
   *   <dd>
   *     The asset booking. Specify this for separate asset bookings only.
   *   </dd>
   *   <dt>
   *     string <tt>k_service</tt>
   *   </dt>
   *   <dd>
   *     The appointment booking. Specify this for appointment bookings only.
   *   </dd>
   *   <dt>
   *     string [<tt>k_session_pass</tt>]
   *   </dt>
   *   <dd>
   *     The user's pass (for example, a membership or a package).
   *     Specify this if you want to set the pass to use to pay for the booking.
   *   </dd>
   *   <dt>
   *     string [<tt>k_staff</tt>]
   *   </dt>
   *   <dd>
   *     The staff member conducting the appointment.
   *     Specify this for appointment bookings only.
   *   </dd>
   *   <dt>
   *     string [<tt>k_staff_date</tt>]
   *   </dt>
   *   <dd>
   *     The staff member conducting the appointment.
   *     The difference between this and <tt>k_staff</tt> is that this value must be set only in cases
   *     when you want to add customer to an appointment that already exists.
   *     Specify this for appointment bookings only.
   *   </dd>
   *   <dt>string [<tt>m_tip_appointment</tt>]</dt>
   *   <dd>The amount of selected tips.</dd>
   *   <dt>string [<tt>k_timezone</tt>]</dt>
   *   <dd>The time zone key. This will be 'null' if the time zone used matches the time zone of the location.</dd>
   *   <dt>
   *     string [<tt>uid</tt>]
   *   </dt>
   *   <dd>
   *     User's primary key.
   *     Specify only in a case of booking for a lof of different users.
   *   </dd>
   * </dl>
   */

  /**
   * All data required to book an appointment.
   * <dl>
   *   <dt>
   *     int [<var>id_class_tab</var>]
   *   </dt>
   *   <dd>
   *     The booking service type. One of the {@link Wl_Classes_Tab_TabSid} constants.
   *   </dd>
   *   <dt>
   *     array[] [<var>a_provider</var>]
   *   </dt>
   *   <dd>
   *     A list of providers and their booking details. Every element has next keys:
   *     <dl>
   *       <dt>
   *         array[] [<var>a_conflict</var>]
   *       </dt>
   *       <dd>
   *         Information about booking conflicts. Keys are bookings dates/times in MySQL format in UTC. Values are arrays with next keys:
   *         <dl>
   *           <dt>string <var>dt_date_local</var></dt>
   *           <dd>New appointment date/time in MySQL in locale timezone.</dd>
   *           <dt>int <var>i_duration</var></dt>
   *           <dd>New asset booking duration.</dd>
   *           <dt>int <var>i_index</var></dt>
   *           <dd>New asset index.</dd>
   *           <dt>int <var>id_conflict</var></dt>
   *           <dd>Solution type. One of {@link RsAppointmentEditConflictSid} constants.</dd>
   *           <dt>string <var>k_resource</var></dt>
   *           <dd>New asset primary key.</dd>
   *           <dt>string|null <var>k_staff</var></dt>
   *           <dd>New staff member's primary key. `null` in a case of asset booking.</dd>
   *         </dl>
   *       </dd>
   *       <dt>
   *         array [<var>a_product</var>]
   *       </dt>
   *       <dd>
   *         Add-ons to the appointment. Specified for appointment bookings only.
   *         The old format used array keys. While the new format has each element as an array:
   *         <dl>
   *           <dt>int <var>i_count</var></dt><dd>The add-on buy count.</dd>
   *           <dt>int [<var>i_count_use</var>]</dt><dd>The add-on use count. If not set, then use count is equals to buy count.</dd>
   *           <dt>string <var>k_shop_product_option</var></dt><dd>The add-on key.</dd>
   *         </dl>
   *       </dd>
   *       <dt>
   *         array [<var>a_repeat</var>]
   *       </dt>
   *       <dd>
   *         Information for the recurring booking:
   *         <dl>
   *           <dt>
   *             int[] [<var>a_week</var>]
   *           </dt>
   *           <dd>
   *             The days of the week when the appointment repeats. One of the constants of the {@link ADateWeekSid} class.
   *             This will be empty if the appointment doesn't repeat weekly.
   *           </dd>
   *           <dt>
   *             string [<var>dl_end</var>]
   *           </dt>
   *           <dd>
   *             The date when the appointment's repeat cycle stops. This will be empty if the repeat cycle doesn't stop at a certain date.
   *           </dd>
   *           <dt>
   *             int [<var>i_occurrence</var>]
   *           </dt>
   *           <dd>
   *             The number of occurrences after which the appointment's repeat cycle stops.
   *             This will be empty if the repeat cycle doesn't stop after a certain number of occurrences.
   *           </dd>
   *           <dt>
   *             int <var>i_period</var>
   *           </dt>
   *           <dd>
   *             The frequency at which the appointment repeats.
   *           </dd>
   *           <dt>
   *             int <var>id_period</var>
   *           </dt>
   *           <dd>
   *             The measurement unit of `i_period`. One of the {@link ADurationSid} constants.
   *           </dd>
   *           <dt>
   *             bool [<var>is_month</var>]
   *           </dt>
   *           <dd>
   *             <tt>true</tt> if the appointment repeats monthly on the same date.
   *             <tt>false</tt> if the appointment repeats monthly on the same day of the week.
   *             <tt>null</tt> if the appointment doesn't repeat monthly.
   *           </dd>
   *         </dl>
   *         This will be empty if the appointment isn't booked recurringly.
   *       </dd>
   *       <dt>
   *         array [<var>a_resource</var>]
   *       </dt>
   *       <dd>
   *         The list of assets for the appointment booking.
   *         Keys refer to asset categories. Values are arrays with the next keys:
   *         <dl>
   *           <dt>int [<var>i_index</var>]</dt>
   *           <dd>The asset index on the layout. This is only specified if the asset category has a layout.</dd>
   *           <dt>string <var>k_resource</var></dt>
   *           <dd>The asset.</dd>
   *         </dl>
   *         Specify this only for an appointment booking.
   *       </dd>
   *       <dt>
   *         string <var>dt_date</var>
   *       </dt>
   *       <dd>
   *         The date/time for the booking in MySQL format in the location's time zone.
   *       </dd>
   *       <dt>
   *         int [<var>i_duration</var>]
   *       </dt>
   *       <dd>
   *         The duration for the asset booking in minutes. Specify this for separate asset bookings only.
   *       </dd>
   *       <dt>
   *         int [<var>i_index</var>]
   *       </dt>
   *       <dd>
   *         The asset index on the layout.
   *         Specify this for separate asset bookings only and for cases when the asset category only has the layout.
   *       </dd>
   *       <dt>
   *         int [<var>id_gender_staff</var>]
   *       </dt>
   *       <dd>
   *         The gender of the staff member conducting the appointment. One of the {@link Wl_Gender_GenderSid} constants.
   *         Specify this for appointment bookings only.
   *       </dd>
   *       <dt>
   *         int [<var>id_purchase_item</var>]
   *       </dt>
   *       <dd>
   *         Type of the purchase item. One of the {@link Wl_Purchase_Item_ItemSid} constants.
   *       </dd>
   *       <dt>
   *         bool [<var>is_unpaid_force</var>]
   *       </dt>
   *       <dd>
   *         If `true`, the appointment is booked as unpaid. Otherwise, this will be `false` to select an available Purchase Option.
   *       </dd>
   *       <dt>
   *         bool [<var>is_wait_list_unpaid</var>]
   *       </dt>
   *       <dd>
   *         If `true`, appointment waits unpaid.
   *       </dd>
   *       <dt>
   *         string [<var>k_login_prize</var>]
   *       </dt>
   *       <dd>
   *         The user's prize.
   *       </dd>
   *       <dt>
   *         string [<var>k_login_promotion</var>]
   *       </dt>
   *       <dd>
   *         The user's Purchase Option.
   *         Specify this if you want to use a specific Purchase Option to pay for the booking.
   *       </dd>
   *       <dt>
   *         string [<var>k_resource</var>]
   *       </dt>
   *       <dd>
   *         The asset booking. Specify this for separate asset bookings only.
   *       </dd>
   *       <dt>
   *         string <var>k_service</var>
   *       </dt>
   *       <dd>
   *         The appointment booking. Specify this for appointment bookings only.
   *       </dd>
   *       <dt>
   *         string [<var>k_session_pass</var>]
   *       </dt>
   *       <dd>
   *         The user's pass (for example, a membership or a package).
   *         Specify this if you want to set the pass to use to pay for the booking.
   *       </dd>
   *       <dt>
   *         string [<var>k_staff</var>]
   *       </dt>
   *       <dd>
   *         The staff member conducting the appointment.
   *         Specify this for appointment bookings only.
   *       </dd>
   *       <dt>
   *         string [<var>k_staff_date</var>]
   *       </dt>
   *       <dd>
   *         The staff member conducting the appointment.
   *         The difference between this and <var>k_staff</var> is that this value must be set only in cases
   *         when you want to add customer to an appointment that already exists.
   *         Specify this for appointment bookings only.
   *       </dd>
   *       <dt>string [<var>m_tip_appointment</var>]</dt>
   *       <dd>The amount of selected tips.</dd>
   *       <dt>string [<var>k_timezone</var>]</dt>
   *       <dd>The time zone key. This will be 'null' if the time zone used matches the time zone of the location.</dd>
   *       <dt>
   *         string [<var>uid</var>]
   *       </dt>
   *       <dd>
   *         User's primary key.
   *         Specify only in a case of booking for a lof of different users.
   *       </dd>
   *     </dl>
   *   </dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Appointment_Book_Finish_FinishMultipleModel_a_book_data}
   */
  this.a_book_data = [];

  /**
   * The activity IDs of bookings that have been made.
   *
   * @post result
   * @type {string[]}
   */
  this.a_login_activity_visit = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_notification
   * @property {boolean} [is_mail] `true` to send mail; `false` to not send.
   * @property {boolean} [is_sms] `true` to send SMS; `false` to not send.
   * @property {boolean} [is_push] `true` to send push notification; `false` to not send.
   */

  /**
   * Information for sending an appointment notification.
   *  <dl>
   *     <dt>bool [<var>is_mail</var>]</dt>
   *     <dd>`true` to send mail; `false` to not send.</dd>
   *     <dt>bool [<var>is_sms</var>]</dt>
   *     <dd>`true` to send SMS; `false` to not send.</dd>
   *     <dt>bool [<var>is_push</var>]</dt>
   *     <dd>`true` to send push notification; `false` to not send.</dd>
   *   </dl>
   *
   * @post post
   * @type {Wl_Appointment_Book_Finish_FinishMultipleModel_a_notification}
   */
  this.a_notification = [];

  /**
   * The sum paid.
   *
   * Keys refer to provider indexes.
   *
   * @post post
   * @type {string[]}
   */
  this.a_paid = [];

  /**
   * The payment type for the appointment. One of the {@link Wl_Appointment_PaySid} constants.
   *
   * Keys refer to provider indexes.
   *
   * @post get
   * @type {number[]}
   */
  this.a_pay = [];

  /**
   * A list of payment sources to pay with.
   *
   * The structure of this array corresponds with the structure of {@link RsPayForm::$a_pay_source}.
   *
   * @post post
   * @type {{}[]}
   */
  this.a_pay_form = [];

  /**
   * @typedef {{}} Wl_Appointment_Book_Finish_FinishMultipleModel_a_payment_data
   * @property {number} id_purchase_item The purchase item type. One of the {@link Wl_Purchase_Item_ItemSid} constants.
   * @property {string} k_id The promotion or appointment key, depending on <tt>id_purchase_item</tt> in this array.
   * @property {string} k_login_promotion The login promotion key.
   * @property {string} text_discount_code The discount code.
   */

  /**
   * Data required for payment with the next structure:<dl>
   *   <dt>int <var>id_purchase_item</var></dt>
   *   <dd>The purchase item type. One of the {@link Wl_Purchase_Item_ItemSid} constants.</dd>
   *   <dt>string <var>k_id</var></dt>
   *   <dd>The promotion or appointment key, depending on <var>id_purchase_item</var> in this array.</dd>
   *   <dt>string <var>k_login_promotion</var></dt>
   *   <dd>The login promotion key.</dd>
   *   <dt>string <var>text_discount_code</var></dt>
   *   <dd>The discount code.</dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Appointment_Book_Finish_FinishMultipleModel_a_payment_data}
   */
  this.a_payment_data = [];

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
   * Keys refer to quiz keys.
   * And values refer to response keys.
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
   * @property {string[]} a_note The list of notes to add to the new user's profile.
   * @property {string} text_mail The new user's email address.
   * @property {string} text_name_first The new user's first name.
   * @property {string} text_name_last The new user's last name.
   * @property {string} text_phone The new user's mobile phone number.
   */

  /**
   * Data to create new users.
   * Specify this if <var>$uid</var> is empty.
   * The data must contain the next keys:
   * <dl><dt>string[] <var>a_note</var></dt><dd>The list of notes to add to the new user's profile.</dd>
   * <dt>string <var>text_mail</var></dt><dd>The new user's email address.</dd>
   * <dt>string <var>text_name_first</var></dt><dd>The new user's first name.</dd>
   * <dt>string <var>text_name_last</var></dt><dd>The new user's last name.</dd>
   * <dt>string <var>text_phone</var></dt><dd>The new user's mobile phone number.</dd></dl>
   *
   * @post get
   * @type {Wl_Appointment_Book_Finish_FinishMultipleModel_a_user}
   */
  this.a_user = [];

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