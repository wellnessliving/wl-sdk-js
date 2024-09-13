/**
 * Displays information about Purchase Options that can book specified session(s).
 *
 * Note that the terms "Purchase Option" and "promotion" are used interchangeably.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Purchase_Purchase56Model()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_class_period,dt_date_gmt,k_business,uid,id_mode";

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_Purchase56Model_a_login_prize
   * @property {string} f_price The price, always '0'.
   * @property {number} i_count Login prize remaining quantity.
   * @property {number} i_limit The limit of sessions that can be booked with reward prize.
   * @property {number} id_purchase_item The ID of Purchase Option type. One of the {@link RsPurchaseItemSid} constants.
   * @property {string} k_id The key of the Purchase Option in the database. The table depends on <tt>id_purchase_item</tt>.
   * @property {string} k_login_prize Key of login prize.
   * @property {string} s_value The unique identifier.
   * @property {string} text_title User friendly login prize description.
   */

  /**
   * Data about the login prize which can be used to pay for service.
   * <dl>
   *   <dt>string <var>f_price</var></dt>
   *   <dd>The price, always '0'.</dd>
   *   <dt>int <var>i_count</var></dt>
   *   <dd>Login prize remaining quantity.</dd>
   *   <dt>int <var>i_limit</var></dt>
   *   <dd>The limit of sessions that can be booked with reward prize.</dd>
   *   <dt>int <var>id_purchase_item</var></dt>
   *   <dd>The ID of Purchase Option type. One of the {@link RsPurchaseItemSid} constants.</dd>
   *   <dt>string <var>k_id</var></dt>
   *   <dd>The key of the Purchase Option in the database. The table depends on <var>id_purchase_item</var>.</dd>
   *   <dt>string <var>k_login_prize</var></dt>
   *   <dd>Key of login prize.</dd>
   *   <dt>string <var>s_value</var></dt>
   *   <dd>The unique identifier.</dd>
   *   <dt>string <var>text_title</var></dt>
   *   <dd>User friendly login prize description.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Book_Process_Purchase_Purchase56Model_a_login_prize}
   */
  this.a_login_prize = [];

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_Purchase56Model_a_login_promotion_a_login_promotion_info_a_restrict_a_restrict_data
   * @property {number} i_book The number of future sessions paid using this Purchase Option.
   * @property {number} i_limit The limit of visits for the restriction period.
   * @property {number} i_remain The number of remaining visits for the restriction period.
   * @property {number} i_use The Purchase Option's usage count.
   * @property {number} i_visit_past The number of attended sessions before the last renewal.
   * This will be `0` if there aren't any sessions before the last renewal or the Purchase Option doesn't auto-renew.
   * @property {string} text_restriction The description of restriction period (for example "this week" or "for a 4 day period").
   */
  /**
   * @typedef {{}} Wl_Book_Process_Purchase_Purchase56Model_a_login_promotion_a_login_promotion_info_a_restrict
   * @property {number} i_limit The limit of visits for the shortest restriction period.
   * @property {number} i_remain The number of remaining visits for the shortest restriction period.
   * @property {string} text_restriction The description of the shortest restriction period (for example "this week" or "for a 4 day period").
   */
  /**
   * @typedef {{}} Wl_Book_Process_Purchase_Purchase56Model_a_login_promotion_a_login_promotion_info
   * @property {number} i_limit The number of visits the Purchase Option allows the client to make.
   * @property {?number} i_limit_duration The maximum number of minutes the Purchase Option can be used for.
   * @property {number} i_remain The number of the remaining visits the Purchase Option has left.
   * @property {?number} i_remain_duration The number of minutes left in the Purchase Option.
   */
  /**
   * @typedef {{}} Wl_Book_Process_Purchase_Purchase56Model_a_login_promotion
   * @property {Wl_Book_Process_Purchase_Purchase56Model_a_login_promotion_a_login_promotion_info} a_login_promotion_info Information about the Purchase Option with the following information:
   *  <dl>
   *    <dt>int <tt>i_limit</tt></dt>
   *    <dd>The number of visits the Purchase Option allows the client to make.</dd>
   *    <dt>int|null <tt>i_limit_duration</tt></dt>
   *    <dd>The maximum number of minutes the Purchase Option can be used for.</dd>
   *    <dt>int <tt>i_remain</tt></dt>
   *    <dd>The number of the remaining visits the Purchase Option has left.</dd>
   *    <dt>int|null <tt>i_remain_duration</tt></dt>
   *    <dd>The number of minutes left in the Purchase Option.</dd>
   *  </dl>
   * @property {string[]} a_visit_limit The list of calendar restrictions of the promotion (for example, 4 per week).
   * @property {Wl_Book_Process_Purchase_Purchase56Model_a_login_promotion_a_login_promotion_info_a_restrict} a_restrict Data about the shortest restriction period:
   * <dl>
   *   <dt>int <tt>i_limit</tt></dt>
   *   <dd>The limit of visits for the shortest restriction period.</dd>
   *   <dt>int <tt>i_remain</tt></dt>
   *   <dd>The number of remaining visits for the shortest restriction period.</dd>
   *   <dt>string <tt>text_restriction</tt></dt>
   *   <dd>The description of the shortest restriction period (for example "this week" or "for a 4 day period").</dd>
   * </dl>
   * @property {Wl_Book_Process_Purchase_Purchase56Model_a_login_promotion_a_login_promotion_info_a_restrict_a_restrict_data[]} a_restrict_data Data about all restriction periods given as an array, where each record has the following structure:
   * <dl>
   *   <dt>int <tt>i_book</tt></dt>
   *   <dd>The number of future sessions paid using this Purchase Option.</dd>
   *   <dt>int <tt>i_limit</tt></dt>
   *   <dd>The limit of visits for the restriction period.</dd>
   *   <dt>int <tt>i_remain</tt></dt>
   *   <dd>The number of remaining visits for the restriction period.</dd>
   *   <dt>int <tt>i_use</tt></dt>
   *   <dd>The Purchase Option's usage count.</dd>
   *   <dt>int <tt>i_visit_past</tt></dt>
   *   <dd>
   *     The number of attended sessions before the last renewal.
   *     This will be `0` if there aren't any sessions before the last renewal or the Purchase Option doesn't auto-renew.
   *   </dd>
   *   <dt>string <tt>text_restriction</tt></dt>
   *   <dd>The description of restriction period (for example "this week" or "for a 4 day period").</dd>
   * </dl>
   * @property {number} i_limit The number of visits the Purchase Option allows the client to make.
   * @property {?number} i_limit_duration The maximum number of minutes the Purchase Option can be used for.
   * @property {number} i_promotion_priority Priority of this promotion. Result of {@link Wl_Promotion_Priority_PromotionPrioritySid.priorityGet()} method.
   * @property {number} id_program The program ID for Purchase Options. One of the {@link RsProgramSid} constants.
   * @property {boolean} is_shared `true` if the promotion is shared with the client, `false` if the client is owner of the promotion.
   * @property {string} k_login_promotion The login promotion key.
   * @property {string} s_class_include The list of services provided by this Purchase Option.
   * @property {string} s_description The Purchase Option description.
   * @property {string} s_duration The Purchase Option duration.
   * @property {string} s_title The Purchase Option name.
   * @property {string} text_package_item If this promotion is a package, this field will contain a list of Purchase Options contained in the package.
   */

  /**
   * A list of the client`s login promotions that can be applied to a given service.
   * Each element has the following fields:
   * <dl>
   *   <dt>array <var>a_login_promotion_info</var></dt>
   *   <dd>
   *      Information about the Purchase Option with the following information:
   *      <dl>
   *        <dt>int <var>i_limit</var></dt>
   *        <dd>The number of visits the Purchase Option allows the client to make.</dd>
   *        <dt>int|null <var>i_limit_duration</var></dt>
   *        <dd>The maximum number of minutes the Purchase Option can be used for.</dd>
   *        <dt>int <var>i_remain</var></dt>
   *        <dd>The number of the remaining visits the Purchase Option has left.</dd>
   *        <dt>int|null <var>i_remain_duration</var></dt>
   *        <dd>The number of minutes left in the Purchase Option.</dd>
   *      </dl>
   *   </dd>
   *   <dt>string[] <var>a_visit_limit</var></dt>
   *   <dd>The list of calendar restrictions of the promotion (for example, 4 per week).</dd>
   *   <dt>array <var>a_restrict</var></dt>
   *   <dd>Data about the shortest restriction period:
   *     <dl>
   *       <dt>int <var>i_limit</var></dt>
   *       <dd>The limit of visits for the shortest restriction period.</dd>
   *       <dt>int <var>i_remain</var></dt>
   *       <dd>The number of remaining visits for the shortest restriction period.</dd>
   *       <dt>string <var>text_restriction</var></dt>
   *       <dd>The description of the shortest restriction period (for example "this week" or "for a 4 day period").</dd>
   *     </dl>
   *   </dd>
   *   <dt>array[] <var>a_restrict_data</var></dt>
   *   <dd>Data about all restriction periods given as an array, where each record has the following structure:
   *     <dl>
   *       <dt>int <var>i_book</var></dt>
   *       <dd>The number of future sessions paid using this Purchase Option.</dd>
   *       <dt>int <var>i_limit</var></dt>
   *       <dd>The limit of visits for the restriction period.</dd>
   *       <dt>int <var>i_remain</var></dt>
   *       <dd>The number of remaining visits for the restriction period.</dd>
   *       <dt>int <var>i_use</var></dt>
   *       <dd>The Purchase Option's usage count.</dd>
   *       <dt>int <var>i_visit_past</var></dt>
   *       <dd>
   *         The number of attended sessions before the last renewal.
   *         This will be `0` if there aren't any sessions before the last renewal or the Purchase Option doesn't auto-renew.
   *       </dd>
   *       <dt>string <var>text_restriction</var></dt>
   *       <dd>The description of restriction period (for example "this week" or "for a 4 day period").</dd>
   *     </dl>
   *   </dd>
   *   <dt>int <var>i_limit</var></dt>
   *   <dd>The number of visits the Purchase Option allows the client to make.</dd>
   *   <dt>int|null <var>i_limit_duration</var></dt>
   *   <dd>The maximum number of minutes the Purchase Option can be used for.</dd>
   *   <dt>int <var>i_promotion_priority</var></dt>
   *   <dd>Priority of this promotion. Result of {@link Wl_Promotion_Priority_PromotionPrioritySid.priorityGet()} method.</dd>
   *   <dt>int <var>id_program</var></dt>
   *   <dd>The program ID for Purchase Options. One of the {@link RsProgramSid} constants.</dd>
   *   <dt>bool <var>is_shared</var></dt>
   *   <dd>`true` if the promotion is shared with the client, `false` if the client is owner of the promotion.</dd>
   *   <dt>string <var>k_login_promotion</var></dt>
   *   <dd>The login promotion key.</dd>
   *   <dt>string <var>s_class_include</var></dt>
   *   <dd>The list of services provided by this Purchase Option.</dd>
   *   <dt>string <var>s_description</var></dt>
   *   <dd>The Purchase Option description.</dd>
   *   <dt>string <var>s_duration</var></dt>
   *   <dd>The Purchase Option duration.</dd>
   *   <dt>string <var>s_title</var></dt>
   *   <dd>The Purchase Option name.</dd>
   *   <dt>string <var>text_package_item</var></dt>
   *   <dd>If this promotion is a package, this field will contain a list of Purchase Options contained in the package.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Book_Process_Purchase_Purchase56Model_a_login_promotion[]}
   */
  this.a_login_promotion = [];

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_Purchase56Model_a_purchase_a_installment_template_a_visit_limit
   * @property {string} s_title A description of the limit.
   */
  /**
   * @typedef {{}} Wl_Book_Process_Purchase_Purchase56Model_a_purchase_a_installment_template
   * @property {number} i_count The number of payments.
   * @property {number} id_duration The duration of a single period. One of {@link ADurationSid} constants.
   * @property {number} i_period The number of periods specified by <tt>id_period</tt> between individual payments.
   * @property {string} k_currency The payment currency key.
   * @property {string} k_pay_installment_template The key of the installment plan template.
   * @property {string} m_amount The amount of the installment plan.
   * @property {string} s_duration The title of the installment plan.
   */
  /**
   * @typedef {{}} Wl_Book_Process_Purchase_Purchase56Model_a_purchase
   * @property {Wl_Book_Process_Purchase_Purchase56Model_a_purchase_a_installment_template} a_installment_template A list of installment plans. Every element has the next keys:
   * <dl>
   *   <dt>
   *     int <tt>i_count</tt>
   *   </dt>
   *   <dd>
   *      The number of payments.
   *   </dd>
   *   <dt>
   *     int <tt>id_duration</tt>
   *   </dt>
   *   <dd>
   *      The duration of a single period. One of {@link ADurationSid} constants.
   *   </dd>
   *   <dt>
   *     int <tt>i_period</tt>
   *   </dt>
   *   <dd>
   *      The number of periods specified by <tt>id_period</tt> between individual payments.
   *   </dd>
   *   <dt>
   *     string <tt>k_currency</tt>
   *   </dt>
   *   <dd>
   *     The payment currency key.
   *   </dd>
   *   <dt>
   *     string <tt>k_pay_installment_template</tt>
   *   </dt>
   *   <dd>
   *      The key of the installment plan template.
   *   </dd>
   *   <dt>
   *     string <tt>m_amount</tt>
   *   </dt>
   *   <dd>
   *     The amount of the installment plan.
   *   </dd>
   *   <dt>
   *     string <tt>s_duration</tt>
   *   </dt>
   *   <dd>
   *     The title of the installment plan.
   *   </dd>
   * </dl>
   * @property {Wl_Book_Process_Purchase_Purchase56Model_a_purchase_a_installment_template_a_visit_limit[]} a_visit_limit Actual only for promotions. A list of limits on booking by the promotion. Every element has the next keys:
   * <dl>
   *   <dt>
   *     string <tt>s_title</tt>
   *   </dt>
   *   <dd>
   *     A description of the limit.
   *   </dd>
   * </dl>
   * @property {string} f_price The price.
   * @property {*} f_price_early The price for early bookings.
   * @property {string} html_payment_period Actual only for promotions with program 'membership'. Measurement unit of <tt>i_payment_period</tt> in short form.
   * @property {string} html_description The description, ready to paste in a browser.
   * @property {*} i_limit The limit of sessions which may be booked by Purchase Options.
   * @property {*} i_payment_period Actual only for promotions with program 'membership'. The duration of the regular payment interval.
   * @property {*} i_session Actual only for purchases of single sessions. The number of sessions which are booked simultaneously.
   * @property {*} id_program_category Actual only for promotions. The ID of the promotion program category. One of {@link RsProgramCategorySid} constants.
   * @property {*} id_program_type Actual only for promotions. The ID of the promotion program type. One of {@link RsProgramTypeSid} constants.
   * @property {number} id_purchase_item The ID of Purchase Option type. One of {@link RsPurchaseItemSid} constants.
   * @property {*} is_contract <tt>true</tt> - The Purchase Option requires a contract assignment; <tt>false</tt> - doesn't require assignment.
   * @property {*} is_convert <tt>true</tt> - after expiration, the Purchase Option should be converted to another instance; <tt>false</tt> - otherwise.
   * @property {*} is_renew <tt>true</tt> - the Purchase Option is renewable; <tt>false</tt> - otherwise.
   * @property {*} is_renew_check <tt>true</tt> - the Purchase Option is renewable and the "auto-renew" option should be turned on by default; <tt>false</tt> - otherwise.
   * @property {string} k_id The key of the Purchase Option in the database. Table depends on <tt>id_purchase_item</tt>.
   * @property {*} k_login_prize The key of the user's prize which can be used instead a Purchase Option to book the session.
   * @property {string} m_discount_login The discount amount for the client type of one purchase item. Exists only for Events and Classes.
   * @property {string} m_price_discount The price with client type discount. Exists only for Events and Classes.
   * @property {*} s_contract The contract of the Purchase Option. This is only set if <tt>is_contract</tt> is <tt>true</tt>.
   * @property {*} s_payment_duration Actual only for promotions with program 'membership'. The measurement unit of <tt>i_payment_period</tt>.
   * @property {*} s_promotion_convert Actual only if <tt>is_convert</tt> is <tt>true</tt>. The title of the promotion to which the Purchase Option should be converted after expiration.
   * @property {string} s_title The title.
   * @property {string} s_value The unique identifier.
   */

  /**
   * A list of Purchase Options which are available for session(s) that are being booked. Keys - unique string IDs. Values - arrays with the next keys:
   * <dl>
   *   <dt>
   *     array[] <var>a_installment_template</var>.
   *   </dt>
   *   <dd>
   *     A list of installment plans. Every element has the next keys:
   *     <dl>
   *       <dt>
   *         int <var>i_count</var>
   *       </dt>
   *       <dd>
   *          The number of payments.
   *       </dd>
   *       <dt>
   *         int <var>id_duration</var>
   *       </dt>
   *       <dd>
   *          The duration of a single period. One of {@link ADurationSid} constants.
   *       </dd>
   *       <dt>
   *         int <var>i_period</var>
   *       </dt>
   *       <dd>
   *          The number of periods specified by <var>id_period</var> between individual payments.
   *       </dd>
   *       <dt>
   *         string <var>k_currency</var>
   *       </dt>
   *       <dd>
   *         The payment currency key.
   *       </dd>
   *       <dt>
   *         string <var>k_pay_installment_template</var>
   *       </dt>
   *       <dd>
   *          The key of the installment plan template.
   *       </dd>
   *       <dt>
   *         string <var>m_amount</var>
   *       </dt>
   *       <dd>
   *         The amount of the installment plan.
   *       </dd>
   *       <dt>
   *         string <var>s_duration</var>
   *       </dt>
   *       <dd>
   *         The title of the installment plan.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     array[] [<var>a_visit_limit</var>]
   *   </dt>
   *   <dd>
   *     Actual only for promotions. A list of limits on booking by the promotion. Every element has the next keys:
   *     <dl>
   *       <dt>
   *         string <var>s_title</var>
   *       </dt>
   *       <dd>
   *         A description of the limit.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     string <var>f_price</var>
   *   </dt>
   *   <dd>
   *     The price.
   *   </dd>
   *   <dt>
   *     string [<var>f_price_early</var>]
   *   </dt>
   *   <dd>
   *     The price for early bookings.
   *   </dd>
   *   <dt>
   *     string <var>html_payment_period</var>
   *   </dt>
   *   <dd>
   *     Actual only for promotions with program 'membership'. Measurement unit of <var>i_payment_period</var> in short form.
   *   </dd>
   *   <dt>
   *     string <var>html_description</var>
   *   </dt>
   *   <dd>
   *     The description, ready to paste in a browser.
   *   </dd>
   *   <dt>
   *     int [<var>i_limit</var>]
   *   </dt>
   *   <dd>
   *     The limit of sessions which may be booked by Purchase Options.
   *   </dd>
   *   <dt>
   *     int [<var>i_payment_period</var>]
   *   </dt>
   *   <dd>
   *     Actual only for promotions with program 'membership'. The duration of the regular payment interval.
   *   </dd>
   *   <dt>
   *     int [<var>i_session</var>]
   *   </dt>
   *   <dd>
   *     Actual only for purchases of single sessions. The number of sessions which are booked simultaneously.
   *   </dd>
   *   <dt>
   *     int [<var>id_program_category</var>]
   *   </dt>
   *   <dd>
   *     Actual only for promotions. The ID of the promotion program category. One of {@link RsProgramCategorySid} constants.
   *   </dd>
   *   <dt>
   *     int [<var>id_program_type</var>]
   *   </dt>
   *   <dd>
   *     Actual only for promotions. The ID of the promotion program type. One of {@link RsProgramTypeSid} constants.
   *   </dd>
   *   <dt>
   *     int <var>id_purchase_item</var>
   *   </dt>
   *   <dd>
   *     The ID of Purchase Option type. One of {@link RsPurchaseItemSid} constants.
   *   </dd>
   *   <dt>
   *     bool [<var>is_contract</var>]
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - The Purchase Option requires a contract assignment; <tt>false</tt> - doesn't require assignment.
   *   </dd>
   *   <dt>
   *     bool [<var>is_convert</var>]
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - after expiration, the Purchase Option should be converted to another instance; <tt>false</tt> - otherwise.
   *   </dd>
   *   <dt>
   *     bool [<var>is_renew</var>]
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - the Purchase Option is renewable; <tt>false</tt> - otherwise.
   *   </dd>
   *   <dt>
   *     bool [<var>is_renew_check</var>]
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - the Purchase Option is renewable and the "auto-renew" option should be turned on by default; <tt>false</tt> - otherwise.
   *   </dd>
   *   <dt>
   *     string <var>k_id</var>
   *   </dt>
   *   <dd>
   *     The key of the Purchase Option in the database. Table depends on <var>id_purchase_item</var>.
   *   </dd>
   *   <dt>
   *     string [<var>k_login_prize</var>]
   *   </dt>
   *   <dd>
   *     The key of the user's prize which can be used instead a Purchase Option to book the session.
   *   </dd>
   *   <dt>
   *     string <var>m_discount_login</var>
   *   </dt>
   *   <dd>
   *     The discount amount for the client type of one purchase item. Exists only for Events and Classes.
   *   </dd>
   *   <dt>
   *     string <var>m_price_discount</var>
   *   </dt>
   *   <dd>
   *     The price with client type discount. Exists only for Events and Classes.
   *   </dd>
   *   <dt>
   *     string [<var>s_contract</var>]
   *   </dt>
   *   <dd>
   *     The contract of the Purchase Option. This is only set if <var>is_contract</var> is <tt>true</tt>.
   *   </dd>
   *   <dt>
   *     string [<var>s_payment_duration</var>]
   *   </dt>
   *   <dd>
   *     Actual only for promotions with program 'membership'. The measurement unit of <var>i_payment_period</var>.
   *   </dd>
   *   <dt>
   *     string [<var>s_promotion_convert</var>]
   *   </dt>
   *   <dd>
   *     Actual only if <var>is_convert</var> is <tt>true</tt>. The title of the promotion to which the Purchase Option should be converted after expiration.
   *   </dd>
   *   <dt>
   *     string <var>s_title</var>
   *   </dt>
   *   <dd>
   *     The title.
   *   </dd>
   *   <dt>
   *     string <var>s_value</var>
   *   </dt>
   *   <dd>
   *     The unique identifier.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Book_Process_Purchase_Purchase56Model_a_purchase[]}
   */
  this.a_purchase = [];

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_Purchase56Model_a_repeat
   * @property {*} a_week The days of week when the appointment repeat. One of the {@link ADateWeekSid} constants.
   * This will be empty if the appointment doesn't repeat weekly.
   * @property {*} dl_end The date when the appointment's repeat cycle stops. This will be empty if the repeat cycle doesn't stop at a certain date.
   * @property {*} i_occurrence The number of occurrences after which the appointment's repeat cycle stops.
   * This will be empty if the repeat cycle doesn't stop after a certain number of occurrences.
   * @property {number} i_period The frequency of the appointment's repeat cycle.
   * @property {number} id_period The measurement unit of `i_period`. One of the {@link ADurationSid} constants.
   * @property {*} is_month <tt>true</tt> - the appointment repeats monthly on the same date.
   * <tt>false</tt> - the appointment repeats monthly on the same day of the week.
   * <tt>null</tt> - the appointment doesn't repeat monthly.
   */

  /**
   * Information about the recurring booking:
   * <dl>
   *   <dt>
   *     int[] [<var>a_week</var>]
   *   </dt>
   *   <dd>
   *     The days of week when the appointment repeat. One of the {@link ADateWeekSid} constants.
   *     This will be empty if the appointment doesn't repeat weekly.
   *   </dd>
   *   <dt>
   *     string [<var>dl_end</var>]
   *   </dt>
   *   <dd>
   *     The date when the appointment's repeat cycle stops. This will be empty if the repeat cycle doesn't stop at a certain date.
   *   </dd>
   *   <dt>
   *     int [<var>i_occurrence</var>]
   *   </dt>
   *   <dd>
   *     The number of occurrences after which the appointment's repeat cycle stops.
   *     This will be empty if the repeat cycle doesn't stop after a certain number of occurrences.
   *   </dd>
   *   <dt>
   *     int <var>i_period</var>
   *   </dt>
   *   <dd>
   *     The frequency of the appointment's repeat cycle.
   *   </dd>
   *   <dt>
   *     int <var>id_period</var>
   *   </dt>
   *   <dd>
   *     The measurement unit of `i_period`. One of the {@link ADurationSid} constants.
   *   </dd>
   *   <dt>
   *     bool [<var>is_month</var>]
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - the appointment repeats monthly on the same date.
   *     <tt>false</tt> - the appointment repeats monthly on the same day of the week.
   *     <tt>null</tt> - the appointment doesn't repeat monthly.
   *   </dd>
   * </dl>
   *
   * This will be `null` if the booking isn't recurring.
   *
   * @post post
   * @type {?Wl_Book_Process_Purchase_Purchase56Model_a_repeat}
   */
  this.a_repeat = null;

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_Purchase56Model_a_reward_prize
   * @property {string} f_price The price, always '0'.
   * @property {number} i_limit The limit of sessions that can be booked with reward prize.
   * @property {number} i_score Prize price in points.
   * @property {number} id_purchase_item The ID of Purchase Option type. One of the {@link RsPurchaseItemSid} constants.
   * @property {string} k_id The key of the Purchase Option in the database. The table depends on <tt>id_purchase_item</tt>.
   * @property {string} k_reward_prize Key of redeemable prize.
   * @property {string} s_value The unique identifier.
   * @property {string} text_title User friendly prize description.
   */

  /**
   * List of redeemable prizes which can be used to pay for service.
   * Each element has the following fields:
   * <dl>
   *   <dt>string <var>f_price</var></dt>
   *   <dd>The price, always '0'.</dd>
   *   <dt>int <var>i_limit</var></dt>
   *   <dd>The limit of sessions that can be booked with reward prize.</dd>
   *   <dt>int <var>i_score</var></dt><dd>Prize price in points.</dd>
   *   <dt>int <var>id_purchase_item</var></dt>
   *   <dd>The ID of Purchase Option type. One of the {@link RsPurchaseItemSid} constants.</dd>
   *   <dt>string <var>k_id</var></dt>
   *   <dd>The key of the Purchase Option in the database. The table depends on <var>id_purchase_item</var>.</dd>
   *   <dt>string <var>k_reward_prize</var></dt>
   *   <dd>Key of redeemable prize.</dd>
   *   <dt>string <var>s_value</var></dt>
   *   <dd>The unique identifier.</dd>
   *   <dt>string <var>text_title</var></dt>
   *   <dd>User friendly prize description.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Book_Process_Purchase_Purchase56Model_a_reward_prize[]}
   */
  this.a_reward_prize = [];

  /**
   * The list of sessions being booked.
   *
   * Keys refer to class period keys.
   * And values refer to the List of dates/times when the session occurred.
   *
   * @get get
   * @type {{}}
   */
  this.a_session = [];

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_Purchase56Model_a_session_pass
   * @property {number} i_remain Number of remaining visits on session pass.
   * @property {string} k_session_pass Session pass key.
   * @property {number} id_purchase_item Type of the session pass purchase. One of {@link RsPurchaseItemSid} constants.
   * @property {string} s_title Session pass title.
   */

  /**
   * The list of session passes that might be used in booking process.
   * Each element has the following fields:
   *  <dl>
   *    <dt>int <var>i_remain</var></dt>
   *    <dd>Number of remaining visits on session pass.</dd>
   *    <dt>string <var>k_session_pass</var></dt>
   *    <dd>Session pass key.</dd>
   *    <dt>int <var>id_purchase_item</var></dt>
   *    <dd>Type of the session pass purchase. One of {@link RsPurchaseItemSid} constants.</dd>
   *    <dt>string <var>s_title</var></dt>
   *    <dd>Session pass title.</dd>
   *  </dl>
   *
   * @get result
   * @type {Wl_Book_Process_Purchase_Purchase56Model_a_session_pass[]}
   */
  this.a_session_pass = [];

  /**
   * The selected sessions on the wait list that are unpaid.
   *
   * Keys refer to session IDs.
   * And values refer to the index arrays of dates/times when the session occurred (returned in MySQL format and GMT).
   *
   * @get get
   * @type {{}}
   */
  this.a_session_wait_list_unpaid = [];

  /**
   * Determines whether the class/event can be booked at this step or not.
   * This is an external process control flag.
   *
   * @post post
   * @type {boolean}
   */
  this.can_book = true;

  /**
   * Date/time to which session is booked.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.dt_date_gmt = "";

  /**
   * The image height in pixels. Specify this value if you need image to be returned in specific size.
   * The returned image will have the default thumbnail size if this value isn't specified.
   *
   * @get get
   * @type {number}
   */
  this.i_image_height = 0;

  /**
   * The image width in pixels. Specify this value if you need image to be returned in specific size.
   * The returned image will have the default thumbnail size if this value isn't specified.
   *
   * @get get
   * @type {number}
   */
  this.i_image_width = 0;

  /**
   * The mode type. One of the {@link Wl_Mode_ModeSid} constants.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * Determines if the client must authorize the credit card.
   *
   * @get get
   * @type {boolean}
   */
  this.is_card_authorize = false;

  /**
   * `true` if user pressed 'Pay later'.
   * `false` if user pressed 'Pay now'.
   *
   * @post post
   * @type {boolean}
   */
  this.is_force_pay_later = false;

  /**
   * Indicates if the drop-in rate should be the default promotion.
   *
   * @get result
   * @type {boolean}
   */
  this.is_single_default = false;

  /**
   * The selected sessions.
   * This won't be empty for session mode only.
   *
   * Fields refer to IDs of sessions in the database. Values refer to arrays of dates/times when session occurred, returned in MySQL format and in GMT.
   *
   * Serialized with JSON.
   *
   * @get get
   * @type {string}
   */
  this.json_session = "";

  /**
   * The business key.
   *
   * `null` if business key was not passed.
   *
   * @get get
   * @type {?string}
   */
  this.k_business = null;

  /**
   * Key of session which is booked.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_class_period = "0";

  /**
   * Login promotion to be used to book a class.
   *
   * @post post
   * @type {string}
   */
  this.k_login_promotion = "";

  /**
   * The default Purchase Option key.
   * This will be empty if the class has no default Purchase Option.
   *
   * @get result
   * @type {string}
   */
  this.k_promotion_default = "";

  /**
   * Session pass to be used to book a class.
   *
   * @post post
   * @type {string}
   */
  this.k_session_pass = "";

  /**
   * Key of a user who is making a book.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_Purchase_Purchase56Model);

/**
 * @inheritDoc
 */
Wl_Book_Process_Purchase_Purchase56Model.prototype.config=function()
{
  return {"a_field": {"a_login_prize": {"get": {"result": true}},"a_login_promotion": {"get": {"result": true}},"a_purchase": {"get": {"result": true}},"a_repeat": {"post": {"post": true}},"a_reward_prize": {"get": {"result": true}},"a_session": {"get": {"get": true}},"a_session_pass": {"get": {"result": true}},"a_session_wait_list_unpaid": {"get": {"get": true}},"can_book": {"post": {"post": true}},"dt_date_gmt": {"get": {"get": true},"post": {"get": true}},"i_image_height": {"get": {"get": true}},"i_image_width": {"get": {"get": true}},"id_mode": {"get": {"get": true},"post": {"get": true}},"is_card_authorize": {"get": {"get": true}},"is_force_pay_later": {"post": {"post": true}},"is_single_default": {"get": {"result": true}},"json_session": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_class_period": {"get": {"get": true},"post": {"get": true}},"k_login_promotion": {"post": {"post": true}},"k_promotion_default": {"get": {"result": true}},"k_session_pass": {"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Book_Process_Purchase_Purchase56Model.instanceGet
 * @param {string} k_class_period Key of session which is booked.
 * @param {string} dt_date_gmt Date/time to which session is booked.
 * @param {?string} k_business The business key. `null` if business key was not passed.
 * @param {string} uid Key of a user who is making a book.
 * @param {number} id_mode The mode type. One of the {@link Wl_Mode_ModeSid} constants.
 * @returns {Wl_Book_Process_Purchase_Purchase56Model}
 * @see WlSdk_ModelAbstract.instanceGet()
 */