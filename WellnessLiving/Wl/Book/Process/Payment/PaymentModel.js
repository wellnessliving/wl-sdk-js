/**
 * Acts as the booking wizard for the "Pay/Billing info" page.
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
   * @property {number} id_purchase_item The ID of purchase item type. One of {@link Wl_Purchase_Item_ItemSid} constants.
   * @property {boolean} [is_renew] `true` if the item should be set to auto-renew; `false` otherwise. If not set yet, use the default option for this item.
   * @property {string} k_id The key of the purchase item in the database.
   * @property {string} k_login_prize Key of user's prize.  Not `0` only if user is paying book by prize.
   * @property {string} k_reward_prize Key of reward prize.  Not `0` only if user wants to redeem prize and use it to pay for visit.
   * @property {string} [s_signature] The signature of the Purchase Option contract. This won't be set if the Purchase Option doesn't require a contract assignment.
   */

  /**
   * A list of items to be bought. Every element has the next keys:
   *
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
   * @property {boolean} is_new Set this value to `1` to add a new payment address or to `0` to use a saved payment address.
   * @property {string} [k_geo_country] The key of the country used for the payment address. Specify this to add a new address.
   * @property {string} [k_geo_region] The key of the region for the payment address. Specify this to add a new address.
   * @property {string} [k_pay_address] The key of the saved payment address. Specify this to use a saved address.
   * @property {string} [s_city] The city used for the payment address. Specify this to add a new address.
   * @property {string} [s_name] The card name. Specify this to add a new address.
   * @property {string} [s_phone] The payment phone. Specify this to add a new address.
   * @property {string} [s_postal] The postal code for the payment address. Specify this to add a new address.
   * @property {string} [s_street1] The payment address. Specify this to add a new address.
   * @property {string} [s_street2] The optional payment address. Specify this to add a new address.
   */
  /**
   * @typedef {{}} Wl_Book_Process_Payment_PaymentModel_a_pay_form_a_pay_card
   * @property {Wl_Book_Process_Payment_PaymentModel_a_pay_form_a_pay_card_a_pay_address} a_pay_address The payment address:
   * @property {number} [i_csc] The credit card CSC. Specify this to add a new card.
   * @property {number} [i_month] The credit card expiration month. Specify this to add a new card.
   * @property {number} [i_year] The credit card expiration year. Specify this to add a new card.
   * @property {boolean} is_new Specify `1` to add a new card, or `0` to use a saved card.
   * @property {string} [k_pay_bank] The key of the credit card. Specify this to use saved card.
   * @property {string} [s_comment] Optional comment(s). Specify this to add a new card.
   * @property {string} [s_number] The card number. Specify this to add a new card.
   */
  /**
   * @typedef {{}} Wl_Book_Process_Payment_PaymentModel_a_pay_form
   * @property {Wl_Book_Process_Payment_PaymentModel_a_pay_form_a_pay_card} [a_pay_card] The payment card information:
   * @property {string} f_amount The amount of money to withdraw with this payment source.
   * @property {boolean} [is_hide] Determines whether this payment method is hidden.
   * @property {boolean} [is_save] Whether payment method should be saved to user's account.
   * @property {boolean} [is_success] Identifies whether this source was successfully charged.
   * @property {string} [m_surcharge] The client-side calculated surcharge.
   * @property {string} [s_index] The index of this form (optional).
   * @property {string} sid_pay_method The payment method ID.
   */

  /**
   * A list of payment sources to pay with.
   *
   * Each element has next keys:
   *
   * @post post
   * @type {Wl_Book_Process_Payment_PaymentModel_a_pay_form[]}
   */
  this.a_pay_form = [];

  /**
   * List of quiz response keys.
   *
   * Keys are quiz keys.
   * Values are response keys.
   * Or the {@link \Wl\Quiz\Response\QuizResponse::RESPONSE_SKIP} to skip the quiz.
   *
   * @post post
   * @type {string[]}
   */
  this.a_quiz_response = [];

  /**
   * @typedef {{}} Wl_Book_Process_Payment_PaymentModel_a_repeat
   * @property {number[]} a_day The days of week when the appointment repeat.One of the {@link ADateWeekSid} constants.
   * Should be passed for any type of repetition.
   * @property {number[]} a_week Deprecated, use `a_day` instead!
   * @property {string} [dl_end] Deprecated, use `dt_from` and `dt_to` instead!
   * @property {string} [dt_from] Date to start recurring booking.
   * Expected for `id_repeat_end` = {@link RsRepeatEndSid.DATE}.
   * @property {string} [dt_to] Date to complete recurring booking.
   * Expected for `id_repeat_end` = {@link RsRepeatEndSid.DATE}.
   * @property {number} [i_count] The number of occurrences after which the appointment's repeat cycle stops.
   *  Should be empty if the repeat cycle doesn't stop after a certain number of occurrences.
   *  Expected for `id_repeat_end` = {@link RsRepeatEndSid.COUNT}.
   * @property {number} i_duration Count of days\weeks\months between recurring bookings.
   * @property {number} [i_occurrence] Deprecated, use `i_count` instead!
   * @property {number} i_period Deprecated, use `i_duration` instead!
   * @property {number} id_duration The measurement unit of `i_period`. One of the {@link ADurationSid} constants.
   * Available duration units are: {@link ADurationSid.DAY}, {@link ADurationSid.WEEK}, {@link ADurationSid.MONTH}.
   * @property {number} id_period Deprecated, use `id_duration` instead! One of {@link ADurationSid} constants.
   * @property {number} id_repeat_end Possible ways to stop repeatable events. One of the {@link RsRepeatEndSid} constants.
   */

  /**
   * Information about the recurring booking:
   *
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
   * A list of assets being booked. Every element has the next keys:
   *
   * @post post
   * @type {Wl_Book_Process_Payment_PaymentModel_a_resource}
   */
  this.a_resource = [];

  /**
   * A list of sessions being booked.
   *
   * Keys are class period keys.
   * Values are index arrays of date/time strings when the session occurred, in MySQL format and in GMT.
   *
   * @post post
   * @type {string[]}
   */
  this.a_session = [];

  /**
   * Selected sessions on the waiting list without pay.
   *
   * Keys are class period keys.
   * Values are index arrays of date/time strings when the session occurred, in MySQL format and in GMT
   *
   * @post post
   * @type {string[]}
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
   * @typedef {{}} Wl_Book_Process_Payment_PaymentModel_a_visit_payment
   * @property {boolean} is_free `true` if the visit is free; `false` otherwise.
   * @property {boolean} is_waitlist `true` whether the booked slot was waitlisted; `false` otherwise.
   * @property {string} k_login_promotion Applied user's purchase option.
   * @property {string} k_promotion Purchase option.
   * @property {string} k_session_pass Applied session pass.
   * @property {string} text_promotion Purchase option title.
   */

  /**
   * Values are arrays with next keys:
   *
   * @post result
   * @type {Wl_Book_Process_Payment_PaymentModel_a_visit_payment[]}
   */
  this.a_visit_payment = undefined;

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
   * The mode type. One of the {@link Wl_Mode_ModeSid} constants.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * `true` if action is performed as a staff member; `false` otherwise.
   *
   * If `true` is sent, access to the business and to the client will be checked.
   * If `false` is sent, user can book only for himself or for relatives if this is allowed in business settings.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * `true` to book unpaid.
   * `false` otherwise.
   *
   * Allows booking unpaid when client has a login promotion that can be used to pay for the service.
   * Allowed in {@link Wl_Mode_ModeSid.WIDGET} mode only.
   *
   * @post post
   * @type {boolean}
   */
  this.is_book_unpaid = false;

  /**
   * If client must authorize credit card.
   *
   * @post post
   * @type {boolean}
   */
  this.is_card_authorize = false;

  /**
   * Checking whether the client has a credit card (if configured in the business) will be skipped if this flag is set to `false`.
   *
   * Use this field with caution.
   * The final booking will not use this flag, and the check will still be performed.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.is_credit_card_check = true;

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
   * @post post
   * @type {string}
   */
  this.k_login_promotion = "";

  /**
   * The installment template key.
   * This property is optional, and it will be `null` if an installment plan doesn't exist for the purchased item.
   * This will be `0` if an installment plan isn't selected for the purchased item from the list of installment plans.
   *
   * @post post
   * @type {?string}
   */
  this.k_pay_installment_template = null;

  /**
   * Session pass to be used to book a class.
   *
   * @post post
   * @type {string}
   */
  this.k_session_pass = "";

  /**
   * `true` to show "book for" option in booking wizard. `false` for default behavior.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.show_relation = false;

  /**
   * The discount code to be applied to the purchase.
   *
   * @post post
   * @type {string}
   */
  this.text_discount_code = "";

  /**
   * The client key for which the booking is being made.
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
  return {"a_field": {"a_item": {"post": {"post": true}},"a_login_activity_book": {"post": {"result": true}},"a_pay_form": {"post": {"post": true}},"a_quiz_response": {"post": {"post": true}},"a_repeat": {"post": {"post": true}},"a_resource": {"post": {"post": true}},"a_session": {"post": {"post": true}},"a_session_wait_list_unpaid": {"post": {"post": true}},"a_visit": {"post": {"result": true}},"a_visit_payment": {"post": {"result": true}},"can_book": {"post": {"post": true}},"dt_date_gmt": {"get": {"get": true},"post": {"get": true}},"id_mode": {"get": {"get": true},"post": {"get": true}},"is_backend": {"get": {"get": true},"post": {"get": true}},"is_book_unpaid": {"post": {"post": true}},"is_card_authorize": {"post": {"post": true}},"is_credit_card_check": {"get": {"get": true},"post": {"get": true}},"is_force_pay_later": {"post": {"post": true}},"k_class_period": {"get": {"get": true},"post": {"get": true}},"k_login_activity_purchase": {"post": {"result": true}},"k_login_promotion": {"post": {"post": true}},"k_pay_installment_template": {"post": {"post": true}},"k_session_pass": {"post": {"post": true}},"show_relation": {"get": {"get": true},"post": {"get": true}},"text_discount_code": {"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Book_Process_Payment_PaymentModel.instanceGet
 * @param {string} k_class_period Key of session which is booked.
 * @param {string} dt_date_gmt Date/time to which session is booked.
 * @param {string} uid The client key for which the booking is being made.
 * @returns {Wl_Book_Process_Payment_PaymentModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */