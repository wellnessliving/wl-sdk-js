/**
 * Information about purchases which allow to book given session(s).
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Purchase_PurchaseModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseModel_a_purchase_a_installment_template_a_visit_limit
   * @property {string} s_title Description of limit.
   */
  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseModel_a_purchase_a_installment_template
   * @property {number} i_count Number of payments.
   * @property {number} id_duration Duration of a single period. One of {@link \ADurationSid} constants.
   * @property {number} i_period Number of periods specified by <tt>id_period</tt> between individual payments.
   * @property {string} k_currency Payment currency Key.
   * @property {string} k_pay_installment_template Key of installment plan template. Primary key in {@link \Wl\Pay\Installment\Template\Sql}
   * @property {string} m_amount Amount of installment plan.
   * @property {string} s_duration Title of installment plan.
   */
  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseModel_a_purchase
   * @property {Wl_Book_Process_Purchase_PurchaseModel_a_purchase_a_installment_template} a_installment_template A list of installment plans. Every element has next keys:
   * <dl>
   *   <dt>
   *     int <tt>i_count</tt>
   *   </dt>
   *   <dd>
   *      Number of payments.
   *   </dd>
   *   <dt>
   *     int <tt>id_duration</tt>
   *   </dt>
   *   <dd>
   *      Duration of a single period. One of {@link \ADurationSid} constants.
   *   </dd>
   *   <dt>
   *     int <tt>i_period</tt>
   *   </dt>
   *   <dd>
   *      Number of periods specified by <tt>id_period</tt> between individual payments.
   *   </dd>
   *   <dt>
   *     string <tt>k_currency</tt>
   *   </dt>
   *   <dd>
   *     Payment currency Key.
   *   </dd>
   *   <dt>
   *     string <tt>k_pay_installment_template</tt>
   *   </dt>
   *   <dd>
   *      Key of installment plan template. Primary key in {@link \Wl\Pay\Installment\Template\Sql}
   *   </dd>
   *   <dt>
   *     string <tt>m_amount</tt>
   *   </dt>
   *   <dd>
   *     Amount of installment plan.
   *   </dd>
   *   <dt>
   *     string <tt>s_duration</tt>
   *   </dt>
   *   <dd>
   *     Title of installment plan.
   *   </dd>
   * </dl>
   * @property {Wl_Book_Process_Purchase_PurchaseModel_a_purchase_a_installment_template_a_visit_limit[]} a_visit_limit Actual only for promotions. List of limits on booking by promotion. Every element has next keys:
   * <dl>
   *   <dt>
   *     string <tt>s_title</tt>
   *   </dt>
   *   <dd>
   *     Description of limit.
   *   </dd>
   * </dl>
   * @property {string} f_price Price.
   * @property {*} f_price_early Price which is actual for early bookings.
   * @property {string} html_description Description. Ready to paste in browser.
   * @property {*} i_limit Limit of sessions which may be booked by purchase options.
   * @property {*} i_payment_period Actual only for promotions with program 'membership'. Duration of regular payment interval.
   * @property {*} i_session Actual only for buy of single sessions. Number of sessions which is booked simultaneously.
   * @property {*} id_program_category Actual only for promotions. ID of promotion program category. One of {@link RsProgramCategorySid} constants.
   * @property {*} id_program_type Actual only for promotions. ID of promotion program type. One of {@link RsProgramTypeSid} constants.
   * @property {number} id_purchase_item ID of purchase option type. One of {@link RsPurchaseItemSid} constants.
   * @property {*} is_contract <tt>true</tt> - purchase option requires assignment of contract; <tt>false</tt> - does not require assignment.
   * @property {*} is_convert <tt>true</tt> - after expiration purchase option should be converted to certain anther instance; <tt>false</tt> - otherwise.
   * @property {*} is_renew <tt>true</tt> - purchase option is renewable; <tt>false</tt> - otherwise.
   * @property {*} is_renew_check <tt>true</tt> - purchase option is renewable and option "auto-renew" should be turned on by default; <tt>false</tt> - otherwise.
   * @property {string} k_id Key of purchase option in database. Table depends on <tt>id_purchase_item</tt>.
   * @property {*} k_login_prize Key of user's prize which can be used instead purchase option to book session.
   * @property {*} s_contract Contract of purchase option. Is set only if <tt>is_contract</tt> is <tt>true</tt>.
   * @property {*} s_payment_duration Actual only for promotions with program 'membership'. Measurement unit of <tt>i_payment_period</tt>.
   * @property {*} s_promotion_convert Actual only if <tt>is_convert</tt> is <tt>true</tt>. Title of promotion to which purchase option should be converted after expiration.
   * @property {string} s_title Title.
   * @property {string} s_value Unique identifier.
   */

  /**
   * List of purchase options which are available for session(s) which is(are) being booked. Keys - unique string IDs. Values - arrays with next keys:
   * <dl>
   *   <dt>
   *     array[] <var>a_installment_template</var>.
   *   </dt>
   *   <dd>
   *     A list of installment plans. Every element has next keys:
   *     <dl>
   *       <dt>
   *         int <var>i_count</var>
   *       </dt>
   *       <dd>
   *          Number of payments.
   *       </dd>
   *       <dt>
   *         int <var>id_duration</var>
   *       </dt>
   *       <dd>
   *          Duration of a single period. One of {@link \ADurationSid} constants.
   *       </dd>
   *       <dt>
   *         int <var>i_period</var>
   *       </dt>
   *       <dd>
   *          Number of periods specified by <var>id_period</var> between individual payments.
   *       </dd>
   *       <dt>
   *         string <var>k_currency</var>
   *       </dt>
   *       <dd>
   *         Payment currency Key.
   *       </dd>
   *       <dt>
   *         string <var>k_pay_installment_template</var>
   *       </dt>
   *       <dd>
   *          Key of installment plan template. Primary key in {@link \Wl\Pay\Installment\Template\Sql}
   *       </dd>
   *       <dt>
   *         string <var>m_amount</var>
   *       </dt>
   *       <dd>
   *         Amount of installment plan.
   *       </dd>
   *       <dt>
   *         string <var>s_duration</var>
   *       </dt>
   *       <dd>
   *         Title of installment plan.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     array[] [<var>a_visit_limit</var>]
   *   </dt>
   *   <dd>
   *     Actual only for promotions. List of limits on booking by promotion. Every element has next keys:
   *     <dl>
   *       <dt>
   *         string <var>s_title</var>
   *       </dt>
   *       <dd>
   *         Description of limit.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     string <var>f_price</var>
   *   </dt>
   *   <dd>
   *     Price.
   *   </dd>
   *   <dt>
   *     string [<var>f_price_early</var>]
   *   </dt>
   *   <dd>
   *     Price which is actual for early bookings.
   *   </dd>
   *   <dt>
   *     string <var>html_description</var>
   *   </dt>
   *   <dd>
   *     Description. Ready to paste in browser.
   *   </dd>
   *   <dt>
   *     int [<var>i_limit</var>]
   *   </dt>
   *   <dd>
   *     Limit of sessions which may be booked by purchase options.
   *   </dd>
   *   <dt>
   *     int [<var>i_payment_period</var>]
   *   </dt>
   *   <dd>
   *     Actual only for promotions with program 'membership'. Duration of regular payment interval.
   *   </dd>
   *   <dt>
   *     int [<var>i_session</var>]
   *   </dt>
   *   <dd>
   *     Actual only for buy of single sessions. Number of sessions which is booked simultaneously.
   *   </dd>
   *   <dt>
   *     int [<var>id_program_category</var>]
   *   </dt>
   *   <dd>
   *     Actual only for promotions. ID of promotion program category. One of {@link RsProgramCategorySid} constants.
   *   </dd>
   *   <dt>
   *     int [<var>id_program_type</var>]
   *   </dt>
   *   <dd>
   *     Actual only for promotions. ID of promotion program type. One of {@link RsProgramTypeSid} constants.
   *   </dd>
   *   <dt>
   *     int <var>id_purchase_item</var>
   *   </dt>
   *   <dd>
   *     ID of purchase option type. One of {@link RsPurchaseItemSid} constants.
   *   </dd>
   *   <dt>
   *     bool [<var>is_contract</var>]
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - purchase option requires assignment of contract; <tt>false</tt> - does not require assignment.
   *   </dd>
   *   <dt>
   *     bool [<var>is_convert</var>]
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - after expiration purchase option should be converted to certain anther instance; <tt>false</tt> - otherwise.
   *   </dd>
   *   <dt>
   *     bool [<var>is_renew</var>]
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - purchase option is renewable; <tt>false</tt> - otherwise.
   *   </dd>
   *   <dt>
   *     bool [<var>is_renew_check</var>]
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - purchase option is renewable and option "auto-renew" should be turned on by default; <tt>false</tt> - otherwise.
   *   </dd>
   *   <dt>
   *     string <var>k_id</var>
   *   </dt>
   *   <dd>
   *     Key of purchase option in database. Table depends on <var>id_purchase_item</var>.
   *   </dd>
   *   <dt>
   *     string [<var>k_login_prize</var>]
   *   </dt>
   *   <dd>
   *     Key of user's prize which can be used instead purchase option to book session.
   *   </dd>
   *   <dt>
   *     string [<var>s_contract</var>]
   *   </dt>
   *   <dd>
   *     Contract of purchase option. Is set only if <var>is_contract</var> is <tt>true</tt>.
   *   </dd>
   *   <dt>
   *     string [<var>s_payment_duration</var>]
   *   </dt>
   *   <dd>
   *     Actual only for promotions with program 'membership'. Measurement unit of <var>i_payment_period</var>.
   *   </dd>
   *   <dt>
   *     string [<var>s_promotion_convert</var>]
   *   </dt>
   *   <dd>
   *     Actual only if <var>is_convert</var> is <tt>true</tt>. Title of promotion to which purchase option should be converted after expiration.
   *   </dd>
   *   <dt>
   *     string <var>s_title</var>
   *   </dt>
   *   <dd>
   *     Title.
   *   </dd>
   *   <dt>
   *     string <var>s_value</var>
   *   </dt>
   *   <dd>
   *     Unique identifier.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Book_Process_Purchase_PurchaseModel_a_purchase}
   */
  this.a_purchase = undefined;

  /**
   * @typedef {{}} Wl_Book_Process_Purchase_PurchaseModel_a_repeat
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
   *     Measurement unit of <tt>i_period</tt>. One of {@link ADurationSid} constants.
   *   </dd>
   *   <dt>
   *     bool [<var>is_month</var>]
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if appointment must repeat monthly at the same date.
   *     <tt>false</tt> if appointment must repeat monthly at the same week day.
   *     <tt>null</tt> if appointment must not repeat monthly.
   *   </dd>
   * </dl>
   *
   * <tt>null</tt> if booking must be not recurring.
   *
   * @post post
   * @type {?Wl_Book_Process_Purchase_PurchaseModel_a_repeat}
   */
  this.a_repeat = null;

  /**
   * List of session is being booked. Keys - IDs of sessions. Values - lists of date/time when sessions are occurred.
   *
   * @get get
   * @type {{}}
   */
  this.a_session = [];

  /**
   * Date/time to which session is booked.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.dt_date_gmt = "";

  /**
   * Mode type. One of {@link \Wl\Mode\ModeSid} constants.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * Business key,
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
  return {"a_field": {"a_purchase": {"get": {"result": true}},"a_repeat": {"post": {"post": true}},"a_session": {"get": {"get": true}},"dt_date_gmt": {"get": {"get": true},"post": {"get": true}},"id_mode": {"get": {"get": true},"post": {"get": true}},"k_business": {"get": {"get": true}},"k_class_period": {"get": {"get": true},"post": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};