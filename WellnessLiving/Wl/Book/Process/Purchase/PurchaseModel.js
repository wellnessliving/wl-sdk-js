/**
 * An endpoint that retrieves information about Purchase Options that can be used to book specified session(s).
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @deprecated Use {@link Wl_Book_Process_Purchase_Purchase56Model} instead.
 */
function Wl_Book_Process_Purchase_PurchaseModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_class_period,dt_date_gmt,k_business,uid,id_mode";

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseModel_a_login_promotion_a_login_promotion_info_a_restrict_a_restrict_data
   * @property {number} i_book The number of future sessions that are paid using this Purchase Option.
   * @property {number} i_limit The limit of visits for the restriction period.
   * @property {number} i_remain The number of remaining visits for the restriction period.
   * @property {number} i_use The Purchase Option's usage count.
   * @property {number} i_visit_past The number of attended sessions before the last renewal.
   * This will be `0` if there weren't any sessions before the last renewal or the Purchase Option doesn't auto-renew.
   * @property {string} text_restriction The description of the restriction period. For example, "this week" or "for a four-day period".
   */
  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseModel_a_login_promotion_a_login_promotion_info_a_restrict
   * @property {number} i_limit The limit of visits for the shortest restriction period.
   * @property {number} i_remain The number of remaining visits for the shortest restriction period.
   * @property {string} text_restriction The description of the shortest restriction period. For example, "this week" or "for a four-day period".
   */
  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseModel_a_login_promotion_a_login_promotion_info
   * @property {number} i_limit The number of visits that the Purchase Option allows the client to make.
   * @property {?number} i_limit_duration The maximum number of minutes this Purchase Option can be used for.
   * @property {number} i_remain The number of remaining visits.
   * @property {?number} i_remain_duration The number of minutes left in this Purchase Option.
   */
  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseModel_a_login_promotion
   * @property {Wl_Book_Process_Purchase_PurchaseModel_a_login_promotion_a_login_promotion_info} a_login_promotion_info Information about the Purchase Option. It contains the following information:
   *  <dl>
   *    <dt>int <tt>i_limit</tt></dt>
   *    <dd>The number of visits that the Purchase Option allows the client to make.</dd>
   *    <dt>int|null <tt>i_limit_duration</tt></dt>
   *    <dd>The maximum number of minutes that current promotion can be used.</dd>
   *    <dt>int <tt>i_remain</tt></dt>
   *    <dd>The count of the remaining visits.</dd>
   *    <dt>int|null <tt>i_remain_duration</tt></dt>
   *    <dd>The number of minutes left in this promotion.</dd>
   *  </dl>
   * @property {string[]} a_visit_limit The list of calendar restrictions of the promotion, for example, 4 per week.
   * @property {Wl_Book_Process_Purchase_PurchaseModel_a_login_promotion_a_login_promotion_info_a_restrict} a_restrict The data about the shortest restriction period:
   * <dl>
   *   <dt>int <tt>i_limit</tt></dt>
   *   <dd>The limit of visits for the shortest restriction period.</dd>
   *   <dt>int <tt>i_remain</tt></dt>
   *   <dd>The number of remaining visits for the shortest restriction period.</dd>
   *   <dt>string <tt>text_restriction</tt></dt>
   *   <dd>The description of the shortest restriction period, for example "this week" or "for a 4 day period".</dd>
   * </dl>
   * @property {Wl_Book_Process_Purchase_PurchaseModel_a_login_promotion_a_login_promotion_info_a_restrict_a_restrict_data[]} a_restrict_data The data about all restriction periods. Given as an array, where each record has the following structure:
   * <dl>
   *   <dt>int <tt>i_book</tt></dt>
   *   <dd>The number of future sessions that are paid using this Purchase Option.</dd>
   *   <dt>int <tt>i_limit</tt></dt>
   *   <dd>The limit of visits for the restriction period.</dd>
   *   <dt>int <tt>i_remain</tt></dt>
   *   <dd>The number of remaining visits for the restriction period.</dd>
   *   <dt>int <tt>i_use</tt></dt>
   *   <dd>The Purchase Option's usage count.</dd>
   *   <dt>int <tt>i_visit_past</tt></dt>
   *   <dd>
   *     The number of attended sessions before the last renewal.
   *     This will be `0` if there weren't any sessions before the last renewal or the Purchase Option doesn't auto-renew.
   *   </dd>
   *   <dt>string <tt>text_restriction</tt></dt>
   *   <dd>The description of the restriction period. For example, "this week" or "for a four-day period".</dd>
   * </dl>
   * @property {number} i_limit The number of visits that the Purchase Option allows the client to make.
   * @property {?number} i_limit_duration The maximum number of minutes this Purchase Option can be used for.
   * @property {number} id_program The program ID for the Purchase Option. One of the {@link RsProgramSid} constants.
   * @property {string} k_login_promotion The login promotion (Purchase Option) key.
   * @property {string} s_class_include This list of services provided by this Purchase Option.
   * @property {string} s_description The Purchase Option description.
   * @property {string} s_duration The Purchase Option duration.
   * @property {string} s_title The Purchase Option name.
   * @property {string} text_package_item If this Purchase Option is a package, this field will contain a list of Purchase Options
   * contained in the package.
   */

  /**
   * A list of the client`s login promotions (Purchase Options) that can be applied to a given service.
   * <dl>
   *   <dt>array <var>a_login_promotion_info</var></dt>
   *   <dd>
   *      Information about the Purchase Option containing the following information:
   *      <dl>
   *        <dt>int <var>i_limit</var></dt>
   *        <dd>The number of visits that the Purchase Option allows the client to make.</dd>
   *        <dt>int|null <var>i_limit_duration</var></dt>
   *        <dd>The maximum number of minutes this Purchase Option can be used for.</dd>
   *        <dt>int <var>i_remain</var></dt>
   *        <dd>The number of remaining visits.</dd>
   *        <dt>int|null <var>i_remain_duration</var></dt>
   *        <dd>The number of minutes left in this Purchase Option.</dd>
   *      </dl>
   *   </dd>
   *   <dt>string[] <var>a_visit_limit</var></dt>
   *   <dd>The list of calendar restrictions for this Purchase Option. For example, four per week.</dd>
   *   <dt>array <var>a_restrict</var></dt>
   *   <dd>The data about the shortest restriction period:
   *     <dl>
   *       <dt>int <var>i_limit</var></dt>
   *       <dd>The limit of visits for the shortest restriction period.</dd>
   *       <dt>int <var>i_remain</var></dt>
   *       <dd>The number of remaining visits for the shortest restriction period.</dd>
   *       <dt>string <var>text_restriction</var></dt>
   *       <dd>The description of the restriction period. For example, "this week" or "for a four-day period".</dd>
   *     </dl>
   *   </dd>
   *   <dt>array[] <var>a_restrict_data</var></dt>
   *   <dd>The data about all the restriction periods provided as an array, where each record has the following structure:
   *     <dl>
   *       <dt>int <var>i_book</var></dt>
   *       <dd>The number of future sessions that are paid using this Purchase Option.</dd>
   *       <dt>int <var>i_limit</var></dt>
   *       <dd>The limit of visits for the restriction period.</dd>
   *       <dt>int <var>i_remain</var></dt>
   *       <dd>The number of remaining visits for the restriction period.</dd>
   *       <dt>int <var>i_use</var></dt>
   *       <dd>The Purchase Option's usage count.</dd>
   *       <dt>int <var>i_visit_past</var></dt>
   *       <dd>
   *         The number of attended sessions before the last renewal.
   *         This will be `0` if there weren't any sessions before the last renewal or the Purchase Option doesn't auto-renew.
   *       </dd>
   *       <dt>string <var>text_restriction</var></dt>
   *       <dd>The description of the restriction period. For example, "this week" or "for a four-day period".</dd>
   *     </dl>
   *   </dd>
   *   <dt>int <var>i_limit</var></dt>
   *   <dd>The number of visits the Purchase Option allows the client to make.</dd>
   *   <dt>int|null <var>i_limit_duration</var></dt>
   *   <dd>The maximum number of minutes this Purchase Option can be used for.</dd>
   *   <dt>int <var>id_program</var></dt>
   *   <dd>The program ID for the Purchase Option. One of the {@link RsProgramSid} constants.</dd>
   *   <dt>string <var>k_login_promotion</var></dt>
   *   <dd>The login promotion (Purchase Option) key.</dd>
   *   <dt>string <var>s_class_include</var></dt>
   *   <dd>The list of services provided by this Purchase Option.</dd>
   *   <dt>string <var>s_description</var></dt>
   *   <dd>The Purchase Option description.</dd>
   *   <dt>string <var>s_duration</var></dt>
   *   <dd>The Purchase Option duration.</dd>
   *   <dt>string <var>s_title</var></dt>
   *   <dd>The Purchase Option name.</dd>
   *   <dt>string <var>text_package_item</var></dt>
   *   <dd>If this Purchase Option is a package, this field will contain a list of Purchase Options contained in the package.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Book_Process_Purchase_PurchaseModel_a_login_promotion[]}
   */
  this.a_login_promotion = [];

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseModel_a_purchase_a_installment_template_a_visit_limit
   * @property {string} s_title A description of the limit.
   */
  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseModel_a_purchase_a_installment_template
   * @property {number} i_count The number of payments.
   * @property {number} id_duration The duration of a single period. One of the {@link ADurationSid} constants.
   * @property {number} i_period The number of periods specified by <tt>id_period</tt> between individual payments.
   * @property {string} k_currency The payment currency key.
   * @property {string} k_pay_installment_template The key of the installment plan template.
   * @property {string} m_amount The amount of the installment plan.
   * @property {string} s_duration The title of the installment plan.
   */
  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseModel_a_purchase
   * @property {Wl_Book_Process_Purchase_PurchaseModel_a_purchase_a_installment_template} a_installment_template A list of installment plans. Every element has the next keys:
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
   *      The duration of a single period. One of the {@link ADurationSid} constants.
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
   * @property {Wl_Book_Process_Purchase_PurchaseModel_a_purchase_a_installment_template_a_visit_limit[]} a_visit_limit Actual only for promotions. A list of limits on booking by the promotion. Every element has the next keys:
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
   * @property {string} html_payment_period Actual only for membership Purchase Options. The measurement unit of <tt>i_payment_period</tt> in short form.
   * @property {string} html_description The description, ready to paste in a browser.
   * @property {*} i_limit The limit of sessions that can be booked using the Purchase Options.
   * @property {*} i_payment_period Actual only for membership Purchase Options. The duration of the regular payment interval.
   * @property {*} i_session Actual only for purchases of single sessions. The number of sessions booked simultaneously.
   * @property {*} id_program_category Actual only for Purchase Options. The ID of the Purchase Option program category. One of the {@link RsProgramCategorySid} constants.
   * @property {*} id_program_type Actual only for Purchase Options. The ID of the Purchase Option program type. One of the {@link RsProgramTypeSid} constants.
   * @property {number} id_purchase_item The ID of the Purchase Option type. One of the {@link RsPurchaseItemSid} constants.
   * @property {*} is_contract This will be <tt>true</tt> if the Purchase Option requires a contract assignment.
   * Otherwise, this will be <tt>false</tt> if it doesn't require assignment.
   * @property {*} is_convert This will be <tt>true</tt> the Purchase Option should be converted to another instance
   * after it expires. Otherwise, this will be <tt>false</tt>.
   * @property {*} is_renew This will be <tt>true</tt> if the Purchase Option is renewable.
   * Otherwise, this will be <tt>false</tt>.
   * @property {*} is_renew_check This will be <tt>true</tt> if the Purchase Option is renewable and the "auto-renew"
   * option is turned on by default. Otherwise, this will be <tt>false</tt>.
   * @property {string} k_id The key of the Purchase Option in the database. The table depends on <tt>id_purchase_item</tt>.
   * @property {*} k_login_prize The key of the user's prize that can be used instead a Purchase Option to book the session.
   * @property {*} s_contract The contract of the Purchase Option. This is only set if <tt>is_contract</tt> is <tt>true</tt>.
   * @property {*} s_payment_duration Actual only for membership Purchase Options. The measurement unit of <tt>i_payment_period</tt>.
   * @property {*} s_promotion_convert Actual only if <tt>is_convert</tt> is <tt>true</tt>. The title of the Purchase Option
   * to be used upon conversion after expiration.
   * @property {string} s_title The title.
   * @property {string} s_value The unique identifier.
   */

  /**
   * A list of Purchase Options that are available for session(s) being booked. Keys refer to unique string IDs and
   * values refer to arrays with the next keys:
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
   *          The duration of a single period. One of the {@link ADurationSid} constants.
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
   *     Actual only for Purchase Options. A list of limits on booking by the promotion. Every element has the next keys:
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
   *     Actual only for membership Purchase Options. The measurement unit of <var>i_payment_period</var> in short form.
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
   *     The limit of sessions that can be used by the Purchase Options.
   *   </dd>
   *   <dt>
   *     int [<var>i_payment_period</var>]
   *   </dt>
   *   <dd>
   *     Actual only for membership Purchase Options. The duration of the regular payment interval.
   *   </dd>
   *   <dt>
   *     int [<var>i_session</var>]
   *   </dt>
   *   <dd>
   *     Actual only for purchases of single sessions. The number of sessions booked simultaneously.
   *   </dd>
   *   <dt>
   *     int [<var>id_program_category</var>]
   *   </dt>
   *   <dd>
   *     Actual only for promotions. The ID of the Purchase Option program category. One of the {@link RsProgramCategorySid} constants.
   *   </dd>
   *   <dt>
   *     int [<var>id_program_type</var>]
   *   </dt>
   *   <dd>
   *     Actual only for promotions. The ID of the Purchase Option program type. One of the {@link RsProgramTypeSid} constants.
   *   </dd>
   *   <dt>
   *     int <var>id_purchase_item</var>
   *   </dt>
   *   <dd>
   *     The ID of Purchase Option type. One of the {@link RsPurchaseItemSid} constants.
   *   </dd>
   *   <dt>
   *     bool [<var>is_contract</var>]
   *   </dt>
   *   <dd>
   *     This will be <tt>true</tt> if the Purchase Option requires a contract assignment. Otherwise, this will be
   *     <tt>false</tt> if it isn't required.
   *   </dd>
   *   <dt>
   *     bool [<var>is_convert</var>]
   *   </dt>
   *   <dd>
   *     This will be <tt>true</tt> if the Purchase Option should be converted to another instance upon expiration.
   *     Otherwise, this will be <tt>false</tt>.
   *   </dd>
   *   <dt>
   *     bool [<var>is_renew</var>]
   *   </dt>
   *   <dd>
   *     This will be <tt>true</tt> if the Purchase Option is renewable. Otherwise, this will be <tt>false</tt>.
   *   </dd>
   *   <dt>
   *     bool [<var>is_renew_check</var>]
   *   </dt>
   *   <dd>
   *     This will be <tt>true</tt> if the Purchase Option is renewable and the "auto-renew" option is turned on
   *     by default. Otherwise, this will be <tt>false</tt>.
   *   </dd>
   *   <dt>
   *     string <var>k_id</var>
   *   </dt>
   *   <dd>
   *     The key of the Purchase Option in the database. The table depends on <var>id_purchase_item</var>.
   *   </dd>
   *   <dt>
   *     string [<var>k_login_prize</var>]
   *   </dt>
   *   <dd>
   *     The key of the user's prize that can be used instead a Purchase Option to book the session.
   *   </dd>
   *   <dt>
   *     string [<var>s_contract</var>]
   *   </dt>
   *   <dd>
   *     The Purchase Option contract. This is only set if <var>is_contract</var> is <tt>true</tt>.
   *   </dd>
   *   <dt>
   *     string [<var>s_payment_duration</var>]
   *   </dt>
   *   <dd>
   *     Actual only for membership Purchase Options. The measurement unit of <var>i_payment_period</var>.
   *   </dd>
   *   <dt>
   *     string [<var>s_promotion_convert</var>]
   *   </dt>
   *   <dd>
   *     Actual only if <var>is_convert</var> is <tt>true</tt>. If the Purchase Option is set to convert upon expiration,
   *     this will be the name to use for the new instance of the Purchase Option.
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
   * @type {Wl_Book_Process_Purchase_PurchaseModel_a_purchase[]}
   */
  this.a_purchase = [];

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseModel_a_repeat
   * @property {*} a_week The days of week when the appointment repeats. One of the {@link ADateWeekSid} constants.
   * This will be empty if appointment doesn't repeat weekly.
   * @property {*} dl_end The date when the appointment's repeat cycle stops. This will be empty if the repeat cycle
   * doesn't stop at a certain date.
   * @property {*} i_occurrence The number of occurrences after which the appointment's repeat cycle stops.
   * This will be empty if the repeat cycle doesn't stop after a certain number of occurrences.
   * @property {number} i_period The frequency of the appointment repeat cycle.
   * @property {number} id_period The measurement unit of `i_period`. One of the {@link ADurationSid} constants.
   * @property {*} is_month This will be `true` if the appointment repeats monthly at the same date.
   * Otherwise, this will be `false` if the appointment repeats monthly on the same day of the week or `null` if
   * the appointment doesn't repeat monthly.
   */

  /**
   * Information about recurring booking:
   * <dl>
   *   <dt>
   *     int[] [<var>a_week</var>]
   *   </dt>
   *   <dd>
   *     The days of week when the appointment repeats. One of the {@link ADateWeekSid} constants.
   *     This will be empty if appointment doesn't repeat weekly.
   *   </dd>
   *   <dt>
   *     string [<var>dl_end</var>]
   *   </dt>
   *   <dd>
   *     The date when the appointment's repeat cycle stops. This will be empty if the repeat cycle doesn't stop
   *     at a certain date.
   *   </dd>
   *   <dt>
   *     int [<var>i_occurrence</var>]
   *   </dt>
   *   <dd>
   *     The number of occurrences after which the appointment's repeat cycle stops. This will be empty if the
   *     repeat cycle doesn't stop after a certain number of occurrences.
   *   </dd>
   *   <dt>
   *     int <var>i_period</var>
   *   </dt>
   *   <dd>
   *     The frequency of the appointment repeat cycle.
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
   *     This will be `true` if the appointment repeats monthly at the same date.
   *     Otherwise, this will be `false` if the appointment repeats monthly on the same day of the week or `null` if
   *     the appointment doesn't repeat monthly.
   *   </dd>
   * </dl>
   *
   * This will be `null` if this isn't a recurring booking.
   *
   * @post post
   * @type {?Wl_Book_Process_Purchase_PurchaseModel_a_repeat}
   */
  this.a_repeat = null;

  /**
   * A list of sessions being booked.
   *
   * Keys refer to class period keys and values refer to the dates/times when the session occurred.
   *
   * @get get
   * @type {{}}
   */
  this.a_session = [];

  /**
   * A list of session passes that could be used in the booking process.
   *
   * @get result
   * @type {{}}
   */
  this.a_session_pass = [];

  /**
   * Selected sessions on the wait list that are unpaid.
   *
   * Keys refer to session IDs. Values refer to dates/times when the session occurred provided as an array in MySQL
   * format and in GMT.
   *
   * @get get
   * @type {{}}
   */
  this.a_session_wait_list_unpaid = [];

  /**
   * Determines whether the class/event can be booked at this step.
   * This is an external process control flag.
   *
   * @post post
   * @type {boolean}
   */
  this.can_book = true;

  /**
   * The date/time the session is booked for.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.dt_date_gmt = "";

  /**
   * The image height in pixels. Specify this value if you need an image returned in a specific size.
   * If this value isn't specified, the returned image will have the default thumbnail size.
   *
   * @get get
   * @type {number}
   */
  this.i_image_height = 0;

  /**
   * The image width in pixels. Specify this value if you need an image returned in a specific size.
   * If this value isn't specified, the returned image will have the default thumbnail size.
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
   * Determines if the client must authorize a credit card.
   *
   * @get get
   * @type {boolean}
   */
  this.is_card_authorize = false;

  /**
   * If `true`, the user pressed 'Pay later'. Otherwise, this will be `false` if the user
   * pressed 'Pay now'.
   *
   * @post post
   * @type {boolean}
   */
  this.is_force_pay_later = false;

  /**
   * Indicates if drop-in rate should be the default purchase option.
   *
   * @get result
   * @var {boolean}
   */
  this.is_single_default = false;

  /**
   * The business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The key of the booked session.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_class_period = "0";

  /**
   * The login promotion (Purchase Option) used to book a class.
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
   * The session pass used to book the class.
   *
   * @post post
   * @type {string}
   */
  this.k_session_pass = "";

  /**
   * The key of the user making the booking.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Book_Process_Purchase_PurchaseModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Purchase_PurchaseModel.prototype.config=function()
{
  return {"a_field": {"a_login_promotion": {"get": {"result": true}},"a_purchase": {"get": {"result": true}},"a_repeat": {"post": {"post": true}},"a_session": {"get": {"get": true}},"a_session_pass": {"get": {"result": true}},"a_session_wait_list_unpaid": {"get": {"get": true}},"can_book": {"post": {"post": true}},"dt_date_gmt": {"get": {"get": true},"post": {"get": true}},"i_image_height": {"get": {"get": true}},"i_image_width": {"get": {"get": true}},"id_mode": {"get": {"get": true},"post": {"get": true}},"is_card_authorize": {"get": {"get": true}},"is_force_pay_later": {"post": {"post": true}},"is_single_default": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_class_period": {"get": {"get": true},"post": {"get": true}},"k_login_promotion": {"post": {"post": true}},"k_promotion_default": {"get": {"result": true}},"k_session_pass": {"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Book_Process_Purchase_PurchaseModel.instanceGet
 * @param {string} k_class_period The key of the booked session.
 * @param {string} dt_date_gmt The date/time the session is booked for.
 * @param {string} k_business The business key.
 * @param {string} uid The key of the user making the booking.
 * @param {number} id_mode The mode type. One of the {@link Wl_Mode_ModeSid} constants.
 * @returns {Wl_Book_Process_Purchase_PurchaseModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */