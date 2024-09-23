/**
 * An endpoint that acts as the booking wizard for the "Pay/Billing info" page.
 *
 * This endpoint using captcha check.
 * To pass captcha need study the documentation by captcha API, there you will find that you need to send a captcha for a specific action.
 * For this API an action is `1064`.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Book_Process_Payment_PaymentModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_class_period,dt_date_gmt,uid";

  /**
   * @typedef {{}} Wl_Book_Process_Payment_PaymentModel_a_item
   * @property {number} id_purchase_item The ID of purchase item type. One of {@link RsPurchaseItemSid} constants.
   * @property {*} is_renew `true` if the item should be set to auto-renew; `false` otherwise.
   * If not set yet, use the default option for this item.
   * @property {string} k_id The key of the purchase item in the database.
   * @property {string} k_login_prize ID of user's prize.
   * Not `0` only if user is paying book by prize.
   * @property {string} k_reward_prize key of reward prize.
   * Not `0` only if user wants to redeem prize and use it to pay for visit.
   * @property {*} s_signature The signature of the Purchase Option contract.
   * This won't be set if the Purchase Option doesn't require a contract assignment.
   */

  /**
   * @post post
   * @type {Wl_Book_Process_Payment_PaymentModel_a_item[]}
   */
  this.a_item = [];

  /**
   * Keys of the user's activity which correspond to bookings made.
   * Not empty when the booking process is finished.
   *
   * @post result
   * @type {string[]}
   */
  this.a_login_activity_book = undefined;

  /**
   * @typedef {{}} Wl_Book_Process_Payment_PaymentModel_a_pay_form_a_pay_card_a_pay_address
   * @property {*} is_new Set this value is <tt>1</tt> to add a new payment address or to <tt>0</tt> to use a saved payment address.
   * @property {*} k_geo_country The key of the country used for the payment address. Specify to add a new address.
   * @property {*} k_geo_region The key of the region for the payment address. Specify to add a new address.
   * @property {*} k_pay_address The key of the saved payment address. Specify to use a saved address.
   * @property {*} s_city The city used for the payment address. Specify to add a new address.
   * @property {*} s_name The card name. Specify to add a new address.
   * @property {*} s_phone The payment phone. Specify to add a new address.
   * @property {*} s_postal The postal code for the payment address. Specify to add a new address.
   * @property {*} s_street1 The payment address. Specify to add a new address.
   * @property {*} s_street2 The optional payment address. Specify to add a new address.
   */

  /**
   * @typedef {{}} Wl_Book_Process_Payment_PaymentModel_a_pay_form_a_pay_card
   * @property {Wl_Book_Process_Payment_PaymentModel_a_pay_form_a_pay_card_a_pay_address} a_pay_address The payment address.
   * @property {*} i_csc The credit card CSC. Specify to add a new card.
   * @property {*} i_month The credit card expiration month. Specify to add a new card.
   * @property {*} i_year The credit card expiration year. Specify to add a new card.
   * @property {*} is_new <tt>1</tt> to add a new card; <tt>0</tt> to use a saved card.
   * @property {*} k_pay_bank The key of a credit card. Specify to use saved card.
   * @property {*} s_comment Optional comment(s). Specify to add a new card.
   * @property {*} s_number The card number. Specify to add a new card.
   */
  /**
   * @typedef {{}} Wl_Book_Process_Payment_PaymentModel_a_pay_form
   * @property {Wl_Book_Process_Payment_PaymentModel_a_pay_form_a_pay_card[]} a_pay_card The payment card information.
   * @property {string} f_amount The amount of money to withdraw with this payment source.
   * @property {*} is_hide Whether this payment method is hidden.
   * @property {*} is_success Identifies whether this source was successfully charged.
   * @property {*} m_surcharge The client-side calculated surcharge.
   * @property {*} s_index The index of this form (optional).
   * @property {string} sid_pay_method The payment method ID.
   */

  /**
   * A list of payment sources to pay with.
   *
   * @post post
   * @type {Wl_Book_Process_Payment_PaymentModel_a_pay_form[]}
   */
  this.a_pay_form = [];

  /**
   * List of quiz response keys.
   * Key is quiz key from {@link \Core\Quiz\QuizSql} table.
   * Value is response key from {@link \Core\Quiz\Response\ResponseSql} table or
   * special value from {@link Wl\Quiz\Response\QuizResponse::RESPONSE_SKIP} constant.
   *
   * @post post
   * @type {{}}
   */
  this.a_quiz_response = [];

  /**
   * @typedef {{}} Wl_Book_Process_Payment_PaymentModel_a_repeat
   * @property {number[]} a_day The days of week when the appointment repeat.One of the {@link ADateWeekSid} constants.
   * Should be passed for any type of repetition.
   * @property {number[]} a_week Deprecated, use `a_day` instead!
   * @property {*} dl_end Deprecated, use `dt_from` and `dt_to` instead!
   * @property {*} dt_from Date to start recurring booking.
   * Expected for `id_repeat_end` = {@link RsRepeatEndSid.DATE}.
   * @property {*} dt_to Date to complete recurring booking.
   * Expected for `id_repeat_end` = {@link RsRepeatEndSid.DATE}.
   * @property {*} i_count The number of occurrences after which the appointment's repeat cycle stops.
   *  Should be empty if the repeat cycle doesn't stop after a certain number of occurrences.
   *  Expected for `id_repeat_end` = {@link RsRepeatEndSid.COUNT}.
   * @property {number} i_duration Count of days\weeks\months between recurring bookings.
   * @property {*} i_occurrence Deprecated, use `i_count` instead!
   * @property {number} i_period Deprecated, use `i_duration` instead!
   * @property {number} id_duration The measurement unit of `i_period`. One of the {@link ADurationSid} constants.
   * Available duration units are: {@link ADurationSid.DAY}, {@link ADurationSid.WEEK}, {@link ADurationSid.MONTH}.
   * @property {number} id_period Deprecated, use `id_duration` instead!
   * @property {number} id_repeat_end Possible ways to stop repeatable events. One of the {@link RsRepeatEndSid} constants.
   */

  /**
   * Information about the recurring booking:
   * <dl>
   *   <dt>int[] <var>a_day</var></dt>
   *   <dd>
   *     The days of week when the appointment repeat.One of the {@link ADateWeekSid} constants.
   *     Should be passed for any type of repetition.
   *   </dd>
   *   <dt>int[] <var>a_week</var></dt>
   *   <dd>Deprecated, use `a_day` instead!</dd>
   *   <dt>string [<var>dl_end</var>]</dt>
   *   <dd>Deprecated, use `dt_from` and `dt_to` instead!</dd>
   *   <dt>
   *     string [<var>dt_from</var>]
   *   </dt>
   *   <dd>
   *     Date to start recurring booking.
   *     Expected for `id_repeat_end` = {@link RsRepeatEndSid.DATE}.
   *   </dd>
   *   <dt>
   *     string [<var>dt_to</var>]
   *   </dt>
   *   <dd>
   *     Date to complete recurring booking.
   *     Expected for `id_repeat_end` = {@link RsRepeatEndSid.DATE}.
   *   </dd>
   *   <dt>
   *      int [<var>i_count</var>]
   *    </dt>
   *    <dd>
   *      The number of occurrences after which the appointment's repeat cycle stops.
   *      Should be empty if the repeat cycle doesn't stop after a certain number of occurrences.
   *      Expected for `id_repeat_end` = {@link RsRepeatEndSid.COUNT}.
   *    </dd>
   *   <dt>int <var>i_duration</var></dt>
   *   <dd>Count of days\weeks\months between recurring bookings.</dd>
   *   <dt>int [<var>i_occurrence</var>]</dt>
   *   <dd>Deprecated, use `i_count` instead!</dd>
   *   <dt>int <var>i_period</var></dt>
   *   <dd>Deprecated, use `i_duration` instead!</dd>
   *   <dt>
   *     int <var>id_duration</var>
   *   </dt>
   *   <dd>
   *     The measurement unit of `i_period`. One of the {@link ADurationSid} constants.
   *     Available duration units are: {@link ADurationSid.DAY}, {@link ADurationSid.WEEK}, {@link ADurationSid.MONTH}.
   *   </dd>
   *   <dt>int <var>id_period</var></dt>
   *   <dd>Deprecated, use `id_duration` instead!</dd>
   *   <dt>int <var>id_repeat_end</var></dt>
   *   <dd>Possible ways to stop repeatable events. One of the {@link RsRepeatEndSid} constants.</dd>
   * </dl>
   *
   * This will be `null` if the booking isn't recurring.
   *
   * @post post
   * @type {?Wl_Book_Process_Payment_PaymentModel_a_repeat}
   */
  this.a_repeat = null;

  /**
   * @typedef {{}} Wl_Book_Process_Payment_PaymentModel_a_resource
   * @property {number} i_index The number of asset(s). The actual number is returned for assets with a quantity greater than <tt>1</tt>.
   * @property {string} k_resource The key of the asset.
   */

  /**
   * A list of assets being booked. Every element has the next keys.
   *
   * @post post
   * @type {Wl_Book_Process_Payment_PaymentModel_a_resource}
   */
  this.a_resource = [];

  /**
   * A list of sessions being booked.
   * Keys - the class period keys.
   * Values - list of date/time when the session occurred.
   *
   * @post post
   * @type {{}}
   */
  this.a_session = [];

  /**
   * Selected sessions on the waiting list without pay.
   * Keys - session IDs.
   * Values - index arrays of dates/time when session is occurred. In MySQL format. In GMT.
   *
   * @post post
   * @type {{}}
   */
  this.a_session_wait_list_unpaid = [];

  /**
   * The keys of bookings made.
   *
   * @post result
   * @type {string[]}
   */
  this.a_visit = undefined;

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
   * @post post
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
   * Key of session which is booked.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_class_period = "0";

  /**
   * The keys of the user's activity corresponding to the purchase made. This won't be empty when the booking process is finished.
   *
   * @post result
   * @type {string}
   */
  this.k_login_activity_purchase = undefined;

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
   * The installment template key.
   * This property is optional and it will be `null` if an installment plan doesn't exist for the purchased item.
   * This will be `0` if an installment plan isn't selected for the purchased item from the list of installment plans.
   *
   * @post post
   * @type {?string}
   */
  this.k_pay_installment_template = null;

  /**
   * Session pass to be used to book a class.
   * Primary key from {@link  \Wl\Session\Pass\Sql}.
   *
   * @post post
   * @type {string}
   */
  this.k_session_pass = "";

  /**
   * The discount code to be applied to the purchase.
   *
   * @post post
   * @type {string}
   */
  this.text_discount_code = "";

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

WlSdk_ModelAbstract.extend(Wl_Book_Process_Payment_PaymentModel);

/**
 * @inheritDoc
 */
Wl_Book_Process_Payment_PaymentModel.prototype.config=function()
{
  return {"a_field": {"a_item": {"post": {"post": true}},"a_login_activity_book": {"post": {"result": true}},"a_pay_form": {"post": {"post": true}},"a_quiz_response": {"post": {"post": true}},"a_repeat": {"post": {"post": true}},"a_resource": {"post": {"post": true}},"a_session": {"post": {"post": true}},"a_session_wait_list_unpaid": {"post": {"post": true}},"a_visit": {"post": {"result": true}},"can_book": {"post": {"post": true}},"dt_date_gmt": {"get": {"get": true},"post": {"get": true}},"id_mode": {"get": {"get": true},"post": {"get": true}},"is_card_authorize": {"post": {"post": true}},"is_force_pay_later": {"post": {"post": true}},"k_class_period": {"get": {"get": true},"post": {"get": true}},"k_login_activity_purchase": {"post": {"result": true}},"k_login_promotion": {"post": {"post": true}},"k_pay_installment_template": {"post": {"post": true}},"k_session_pass": {"post": {"post": true}},"text_discount_code": {"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Book_Process_Payment_PaymentModel.instanceGet
 * @param {string} k_class_period Key of session which is booked.
 * @param {string} dt_date_gmt Date/time to which session is booked.
 * @param {string} uid Key of a user who is making a book.
 * @returns {Wl_Book_Process_Payment_PaymentModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */