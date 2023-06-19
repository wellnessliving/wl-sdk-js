/**
 * Information about Purchase Options that can book specified session(s).
 *
 * This model is generated automatically based on API.
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
   * @property {number} i_book The count of future sessions that are paid with this promotion.
   * @property {number} i_limit The limit of visits for the restriction period.
   * @property {number} i_remain The number of remaining visits for the restriction period.
   * @property {number} i_use The count of usage of the promotion.
   * @property {number} i_visit_past The count of attended sessions before the last renewal.
   * `0` if no sessions before the last renewal or the promotion does not auto-renew.
   * @property {string} text_restriction The description of restriction period, for example "this week" or "for a 4 day period".
   */
  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseModel_a_login_promotion_a_login_promotion_info_a_restrict
   * @property {number} i_limit The limit of visits for the shortest restriction period.
   * @property {number} i_remain The number of remaining visits for the shortest restriction period.
   * @property {string} text_restriction The description of the shortest restriction period, for example "this week" or "for a 4 day period".
   */
  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseModel_a_login_promotion_a_login_promotion_info
   * @property {number} i_limit The count of visits that the purchase option allows the client to make.
   * @property {?number} i_limit_duration The maximum number of minutes that current promotion can be used.
   * @property {number} i_remain The count of the remaining visits.
   * @property {?number} i_remain_duration The number of minutes left in this promotion.
   */
  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseModel_a_login_promotion
   * @property {Wl_Book_Process_Purchase_PurchaseModel_a_login_promotion_a_login_promotion_info} a_login_promotion_info Information about the Purchase Option. It contains the following information:
   *  <dl>
   *    <dt>int <tt>i_limit</tt></dt>
   *    <dd>The count of visits that the purchase option allows the client to make.</dd>
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
   *   <dd>The count of future sessions that are paid with this promotion.</dd>
   *   <dt>int <tt>i_limit</tt></dt>
   *   <dd>The limit of visits for the restriction period.</dd>
   *   <dt>int <tt>i_remain</tt></dt>
   *   <dd>The number of remaining visits for the restriction period.</dd>
   *   <dt>int <tt>i_use</tt></dt>
   *   <dd>The count of usage of the promotion.</dd>
   *   <dt>int <tt>i_visit_past</tt></dt>
   *   <dd>
   *     The count of attended sessions before the last renewal.
   *     `0` if no sessions before the last renewal or the promotion does not auto-renew.
   *   </dd>
   *   <dt>string <tt>text_restriction</tt></dt>
   *   <dd>The description of restriction period, for example "this week" or "for a 4 day period".</dd>
   * </dl>
   * @property {number} i_limit The count of visits that the purchase option allows the client to make.
   * @property {?number} i_limit_duration The maximum number of minutes that current promotion can be used.
   * @property {number} id_program The program ID for promotions, one of the {@link RsProgramSid} constants.
   * @property {string} k_login_promotion The login promotion key.
   * @property {string} s_class_include This list of services provided by this promotion.
   * @property {string} s_description The description of the purchase option.
   * @property {string} s_duration The duration of the promotion.
   * @property {string} s_title The name of the purchase option.
   * @property {string} text_package_item If this promotion is a package, then this field contains a list of promotions contained in the package.
   */

  /**
   * A list of the client`s login promotions which can be applied to a given service.
   * <dl>
   *   <dt>array <var>a_login_promotion_info</var></dt>
   *   <dd>
   *      Information about the Purchase Option. It contains the following information:
   *      <dl>
   *        <dt>int <var>i_limit</var></dt>
   *        <dd>The count of visits that the purchase option allows the client to make.</dd>
   *        <dt>int|null <var>i_limit_duration</var></dt>
   *        <dd>The maximum number of minutes that current promotion can be used.</dd>
   *        <dt>int <var>i_remain</var></dt>
   *        <dd>The count of the remaining visits.</dd>
   *        <dt>int|null <var>i_remain_duration</var></dt>
   *        <dd>The number of minutes left in this promotion.</dd>
   *      </dl>
   *   </dd>
   *   <dt>string[] <var>a_visit_limit</var></dt>
   *   <dd>The list of calendar restrictions of the promotion, for example, 4 per week.</dd>
   *   <dt>array <var>a_restrict</var></dt>
   *   <dd>The data about the shortest restriction period:
   *     <dl>
   *       <dt>int <var>i_limit</var></dt>
   *       <dd>The limit of visits for the shortest restriction period.</dd>
   *       <dt>int <var>i_remain</var></dt>
   *       <dd>The number of remaining visits for the shortest restriction period.</dd>
   *       <dt>string <var>text_restriction</var></dt>
   *       <dd>The description of the shortest restriction period, for example "this week" or "for a 4 day period".</dd>
   *     </dl>
   *   </dd>
   *   <dt>array[] <var>a_restrict_data</var></dt>
   *   <dd>The data about all restriction periods. Given as an array, where each record has the following structure:
   *     <dl>
   *       <dt>int <var>i_book</var></dt>
   *       <dd>The count of future sessions that are paid with this promotion.</dd>
   *       <dt>int <var>i_limit</var></dt>
   *       <dd>The limit of visits for the restriction period.</dd>
   *       <dt>int <var>i_remain</var></dt>
   *       <dd>The number of remaining visits for the restriction period.</dd>
   *       <dt>int <var>i_use</var></dt>
   *       <dd>The count of usage of the promotion.</dd>
   *       <dt>int <var>i_visit_past</var></dt>
   *       <dd>
   *         The count of attended sessions before the last renewal.
   *         `0` if no sessions before the last renewal or the promotion does not auto-renew.
   *       </dd>
   *       <dt>string <var>text_restriction</var></dt>
   *       <dd>The description of restriction period, for example "this week" or "for a 4 day period".</dd>
   *     </dl>
   *   </dd>
   *   <dt>int <var>i_limit</var></dt>
   *   <dd>The count of visits that the purchase option allows the client to make.</dd>
   *   <dt>int|null <var>i_limit_duration</var></dt>
   *   <dd>The maximum number of minutes that current promotion can be used.</dd>
   *   <dt>int <var>id_program</var></dt>
   *   <dd>The program ID for promotions, one of the {@link RsProgramSid} constants.</dd>
   *   <dt>string <var>k_login_promotion</var></dt>
   *   <dd>The login promotion key.</dd>
   *   <dt>string <var>s_class_include</var></dt>
   *   <dd>This list of services provided by this promotion.</dd>
   *   <dt>string <var>s_description</var></dt>
   *   <dd>The description of the purchase option.</dd>
   *   <dt>string <var>s_duration</var></dt>
   *   <dd>The duration of the promotion.</dd>
   *   <dt>string <var>s_title</var></dt>
   *   <dd>The name of the purchase option.</dd>
   *   <dt>string <var>text_package_item</var></dt>
   *   <dd>If this promotion is a package, then this field contains a list of promotions contained in the package.</dd>
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
   * @property {number} id_duration The duration of a single period. One of {@link ADurationSid} constants.
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
   * @type {Wl_Book_Process_Purchase_PurchaseModel_a_purchase[]}
   */
  this.a_purchase = [];

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseModel_a_repeat
   * @property {*} a_week Days of week when appointment must repeat. Constants of {@link ADateWeekSid} class.
   * Empty if appointment must not repeat weekly.
   * @property {*} dl_end Date when appointment repeat must stop. Empty if repeat must not stop at a certain date.
   * @property {*} i_occurrence Number of occurrences after that appointment repeat must stop.
   * Empty if repeat must not stop after a certain number of occurrences.
   * @property {number} i_period Frequency of appointment repeating.
   * @property {number} id_period Measurement unit of `i_period`. One of {@link ADurationSid} constants.
   * @property {*} is_month `true` if appointment must repeat monthly at the same date.
   * `false` if appointment must repeat monthly at the same week day.
   * `null` if appointment must not repeat monthly.
   */

  /**
   * Information about recurring booking:
   * <dl>
   *   <dt>
   *     int[] [<var>a_week</var>]
   *   </dt>
   *   <dd>
   *     Days of week when appointment must repeat. Constants of {@link ADateWeekSid} class.
   *     Empty if appointment must not repeat weekly.
   *   </dd>
   *   <dt>
   *     string [<var>dl_end</var>]
   *   </dt>
   *   <dd>
   *     Date when appointment repeat must stop. Empty if repeat must not stop at a certain date.
   *   </dd>
   *   <dt>
   *     int [<var>i_occurrence</var>]
   *   </dt>
   *   <dd>
   *     Number of occurrences after that appointment repeat must stop.
   *     Empty if repeat must not stop after a certain number of occurrences.
   *   </dd>
   *   <dt>
   *     int <var>i_period</var>
   *   </dt>
   *   <dd>
   *     Frequency of appointment repeating.
   *   </dd>
   *   <dt>
   *     int <var>id_period</var>
   *   </dt>
   *   <dd>
   *     Measurement unit of `i_period`. One of {@link ADurationSid} constants.
   *   </dd>
   *   <dt>
   *     bool [<var>is_month</var>]
   *   </dt>
   *   <dd>
   *     `true` if appointment must repeat monthly at the same date.
   *     `false` if appointment must repeat monthly at the same week day.
   *     `null` if appointment must not repeat monthly.
   *   </dd>
   * </dl>
   *
   * `null` if booking must be not recurring.
   *
   * @post post
   * @type {?Wl_Book_Process_Purchase_PurchaseModel_a_repeat}
   */
  this.a_repeat = null;

  /**
   * A list of sessions being booked.
   * <b>Keys</b> - The class period keys.
   * <b>Values</b> - List of date/time when the session occurred.
   *
   * @get get
   * @type {{}}
   */
  this.a_session = [];

  /**
   * List of session passes that might be used in booking process.
   *
   * @get result
   * @type {{}}
   */
  this.a_session_pass = [];

  /**
   * Selected sessions on the waiting list without pay.
   *
   * Keys - session IDs.
   *
   * Values - index arrays of dates/time when session is occurred. In MySQL format. In GMT.
   *
   * @get get
   * @type {{}}
   */
  this.a_session_wait_list_unpaid = [];

  /**
   * Whether the class/event can be booked at this step or not.
   * External process control flag.
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
   * Image height in pixels. Please specify this value if you need image to be returned in specific size.
   * In case this value is not specified returned image will have default thumbnail size.
   *
   * @get get
   * @type {number}
   */
  this.i_image_height = 0;

  /**
   * Image width in pixels. Please specify this value if you need image to be returned in specific size.
   * In case this value is not specified returned image will have default thumbnail size.
   *
   * @get get
   * @type {number}
   */
  this.i_image_width = 0;

  /**
   * Mode type. One of {@link Wl_Mode_ModeSid} constants.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * If client must authorize credit card.
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
   * The business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

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
   * Primary key from {@link  \RsLoginProductSql}.
   *
   * @post post
   * @type {string}
   */
  this.k_login_promotion = "";

  /**
   * Session pass to be used to book a class.
   *
   * Primary key from {@link  \Wl\Session\Pass\Sql}.
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

WlSdk_ModelAbstract.extend(Wl_Book_Process_Purchase_PurchaseModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Purchase_PurchaseModel.prototype.config=function()
{
  return {"a_field": {"a_login_promotion": {"get": {"result": true}},"a_purchase": {"get": {"result": true}},"a_repeat": {"post": {"post": true}},"a_session": {"get": {"get": true}},"a_session_pass": {"get": {"result": true}},"a_session_wait_list_unpaid": {"get": {"get": true}},"can_book": {"post": {"post": true}},"dt_date_gmt": {"get": {"get": true},"post": {"get": true}},"i_image_height": {"get": {"get": true}},"i_image_width": {"get": {"get": true}},"id_mode": {"get": {"get": true},"post": {"get": true}},"is_card_authorize": {"get": {"get": true}},"is_force_pay_later": {"post": {"post": true}},"k_business": {"get": {"get": true}},"k_class_period": {"get": {"get": true},"post": {"get": true}},"k_login_promotion": {"post": {"post": true}},"k_session_pass": {"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Book_Process_Purchase_PurchaseModel.instanceGet
 * @param {string} k_class_period Key of session which is booked.
 * @param {string} dt_date_gmt Date/time to which session is booked.
 * @param {string} k_business The business key.
 * @param {string} uid Key of a user who is making a book.
 * @param {number} id_mode Mode type. One of {@link Wl_Mode_ModeSid} constants.
 * @returns {Wl_Book_Process_Purchase_PurchaseModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */