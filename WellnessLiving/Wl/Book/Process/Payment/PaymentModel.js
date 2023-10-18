/**
 * An endpoint that acts as the booking wizard for the "Pay/Billing info" page.
 *
 * This endpoint using captcha check.
 * To pass captcha need study the documentation by captcha API, there you will find that you need to send a captcha for a specific action.
 * For this API an action is `1064`.
 *
 * This model is generated automatically based on API.
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
   * @property {*} is_renew <tt>true</tt> if the item should be set to auto-renew; <tt>false</tt> if otherwise.
   * If not set yet, use the default option for this item.
   * @property {string} k_id The key of the purchase item in the database.
   * @property {string} k_login_prize ID of user's prize.
   * Not <tt>0</tt> only if user is paying book by prize.
   * @property {*} s_signature The signature of the Purchase Option contract.
   * This won't be set if the Purchase Option doesn't require a contract assignment.
   */

  /**
   * A list of items to be bought. Every element has the next keys:
   * <dl>
   *   <dt>
   *     int <var>id_purchase_item</var>
   *   </dt>
   *   <dd>
   *     The ID of purchase item type. One of {@link RsPurchaseItemSid} constants.
   *   </dd>
   *   <dt>
   *     boolean [<var>is_renew</var>]
   *   </dt>
   *   <dd>
   *     If <tt>true</tt>, the item is set to auto-renew. Otherwise, this will be <tt>false</tt>.
   *     If not set yet, use the default option for this item.
   *   </dd>
   *   <dt>
   *     string <var>k_id</var>
   *   </dt>
   *   <dd>
   *     The key of the purchase item in the database.
   *   </dd>
   *   <dt>
   *     string <var>k_login_prize</var>
   *   </dt>
   *   <dd>
   *     The ID of the user's prize. This won't be <tt>0</tt> only if user is paying for the booking by
   *     redeeming a prize.
   *   </dd>
   *   <dt>
   *     string [<var>s_signature</var>]
   *   </dt>
   *   <dd>
   *     The signature of the Purchase Option contract. This won't be set if the Purchase Option
   *     doesn't require a contract assignment.
   *   </dd>
   * </dl>
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
   * @property {Wl_Book_Process_Payment_PaymentModel_a_pay_form_a_pay_card_a_pay_address} a_pay_address The payment address:
   * <dl>
   *   <dt>boolean <tt>is_new</tt></dt>
   *   <dd>Set this value is <tt>1</tt> to add a new payment address or to <tt>0</tt> to use a saved payment address.</dd>
   *   <dt>string [<tt>k_geo_country</tt>]</dt>
   *   <dd>The key of the country used for the payment address. Specify to add a new address.</dd>
   *   <dt>string [<tt>k_geo_region</tt>]</dt>
   *   <dd>The key of the region for the payment address. Specify to add a new address.</dd>
   *   <dt>string [<tt>k_pay_address</tt>]</dt>
   *   <dd>The key of the saved payment address. Specify to use a saved address.</dd>
   *   <dt>string [<tt>s_city</tt>]</dt>
   *   <dd>The city used for the payment address. Specify to add a new address.</dd>
   *   <dt>string [<tt>s_name</tt>]</dt>
   *   <dd>The card name. Specify to add a new address.</dd>
   *   <dt>string [<tt>s_phone</tt>]</dt>
   *   <dd>The payment phone. Specify to add a new address.</dd>
   *   <dt>string [<tt>s_postal</tt>]</dt>
   *   <dd>The postal code for the payment address. Specify to add a new address.</dd>
   *   <dt>string [<tt>s_street1</tt>]</dt>
   *   <dd>The payment address. Specify to add a new address.</dd>
   *   <dt>string [<tt>s_street2</tt>]</dt>
   *   <dd>The optional payment address. Specify to add a new address.</dd>
   * </dl>
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
   * @property {Wl_Book_Process_Payment_PaymentModel_a_pay_form_a_pay_card[]} a_pay_card The payment card information:
   * <dl>
   *   <dt>
   *     array <tt>a_pay_address</tt>
   *   </dt>
   *   <dd>
   *     The payment address:
   *     <dl>
   *       <dt>boolean <tt>is_new</tt></dt>
   *       <dd>Set this value is <tt>1</tt> to add a new payment address or to <tt>0</tt> to use a saved payment address.</dd>
   *       <dt>string [<tt>k_geo_country</tt>]</dt>
   *       <dd>The key of the country used for the payment address. Specify to add a new address.</dd>
   *       <dt>string [<tt>k_geo_region</tt>]</dt>
   *       <dd>The key of the region for the payment address. Specify to add a new address.</dd>
   *       <dt>string [<tt>k_pay_address</tt>]</dt>
   *       <dd>The key of the saved payment address. Specify to use a saved address.</dd>
   *       <dt>string [<tt>s_city</tt>]</dt>
   *       <dd>The city used for the payment address. Specify to add a new address.</dd>
   *       <dt>string [<tt>s_name</tt>]</dt>
   *       <dd>The card name. Specify to add a new address.</dd>
   *       <dt>string [<tt>s_phone</tt>]</dt>
   *       <dd>The payment phone. Specify to add a new address.</dd>
   *       <dt>string [<tt>s_postal</tt>]</dt>
   *       <dd>The postal code for the payment address. Specify to add a new address.</dd>
   *       <dt>string [<tt>s_street1</tt>]</dt>
   *       <dd>The payment address. Specify to add a new address.</dd>
   *       <dt>string [<tt>s_street2</tt>]</dt>
   *       <dd>The optional payment address. Specify to add a new address.</dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     int [<tt>i_csc</tt>]
   *   </dt>
   *   <dd>
   *     The credit card CSC. Specify to add a new card.
   *   </dd>
   *   <dt>
   *     int [<tt>i_month</tt>]
   *   </dt>
   *   <dd>
   *     The credit card expiration month. Specify to add a new card.
   *   </dd>
   *   <dt>
   *     int [<tt>i_year</tt>]
   *   </dt>
   *   <dd>
   *     The credit card expiration year. Specify to add a new card.
   *   </dd>
   *   <dt>
   *     boolean <tt>is_new</tt>
   *   </dt>
   *   <dd>
   *     <tt>1</tt> to add a new card; <tt>0</tt> to use a saved card.
   *   </dd>
   *   <dt>
   *     string [<tt>k_pay_bank</tt>]
   *   </dt>
   *   <dd>
   *     The key of a credit card. Specify to use saved card.
   *   </dd>
   *   <dt>
   *     string [<tt>s_comment</tt>]
   *   </dt>
   *   <dd>
   *     Optional comment(s). Specify to add a new card.
   *   </dd>
   *   <dt>
   *     string [<tt>s_number</tt>]
   *   </dt>
   *   <dd>
   *     The card number. Specify to add a new card.
   *   </dd>
   * </dl>
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
   * Each element has next keys:
   * <dl>
   *   <dt>
   *     array [<var>a_pay_card</var>]
   *   </dt>
   *   <dd>
   *     The payment card information:
   *     <dl>
   *       <dt>
   *         array <var>a_pay_address</var>
   *       </dt>
   *       <dd>
   *         The payment address:
   *         <dl>
   *           <dt>boolean <var>is_new</var></dt>
   *           <dd>Set this value is <tt>1</tt> to add a new payment address or to <tt>0</tt> to use a saved payment address.</dd>
   *           <dt>string [<var>k_geo_country</var>]</dt>
   *           <dd>The key of the country used for the payment address. Specify to add a new address.</dd>
   *           <dt>string [<var>k_geo_region</var>]</dt>
   *           <dd>The key of the region for the payment address. Specify to add a new address.</dd>
   *           <dt>string [<var>k_pay_address</var>]</dt>
   *           <dd>The key of the saved payment address. Specify to use a saved address.</dd>
   *           <dt>string [<var>s_city</var>]</dt>
   *           <dd>The city used for the payment address. Specify to add a new address.</dd>
   *           <dt>string [<var>s_name</var>]</dt>
   *           <dd>The card name. Specify to add a new address.</dd>
   *           <dt>string [<var>s_phone</var>]</dt>
   *           <dd>The payment phone. Specify to add a new address.</dd>
   *           <dt>string [<var>s_postal</var>]</dt>
   *           <dd>The postal code for the payment address. Specify to add a new address.</dd>
   *           <dt>string [<var>s_street1</var>]</dt>
   *           <dd>The payment address. Specify to add a new address.</dd>
   *           <dt>string [<var>s_street2</var>]</dt>
   *           <dd>The optional payment address. Specify to add a new address.</dd>
   *         </dl>
   *       </dd>
   *       <dt>
   *         int [<var>i_csc</var>]
   *       </dt>
   *       <dd>
   *         The credit card CSC. Specify to add a new card.
   *       </dd>
   *       <dt>
   *         int [<var>i_month</var>]
   *       </dt>
   *       <dd>
   *         The credit card expiration month. Specify to add a new card.
   *       </dd>
   *       <dt>
   *         int [<var>i_year</var>]
   *       </dt>
   *       <dd>
   *         The credit card expiration year. Specify to add a new card.
   *       </dd>
   *       <dt>
   *         boolean <var>is_new</var>
   *       </dt>
   *       <dd>
   *         <tt>1</tt> to add a new card; <tt>0</tt> to use a saved card.
   *       </dd>
   *       <dt>
   *         string [<var>k_pay_bank</var>]
   *       </dt>
   *       <dd>
   *         The key of a credit card. Specify to use saved card.
   *       </dd>
   *       <dt>
   *         string [<var>s_comment</var>]
   *       </dt>
   *       <dd>
   *         Optional comment(s). Specify to add a new card.
   *       </dd>
   *       <dt>
   *         string [<var>s_number</var>]
   *       </dt>
   *       <dd>
   *         The card number. Specify to add a new card.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     string <var>f_amount</var>
   *   </dt>
   *   <dd>
   *     The amount of money to withdraw with this payment source.
   *   </dd>
   *   <dt>
   *     boolean [<var>is_hide</var>]
   *   </dt>
   *   <dd>
   *     Whether this payment method is hidden.
   *   </dd>
   *   <dt>
   *     boolean [<var>is_success</var>=<tt>false</tt>]
   *   </dt>
   *   <dd>
   *     Identifies whether this source was successfully charged.
   *   </dd>
   *   <dt>
   *     string [<var>m_surcharge</var>]
   *   </dt>
   *   <dd>
   *     The client-side calculated surcharge.
   *   </dd>
   *   <dt>
   *     string [<var>s_index</var>]
   *   </dt>
   *   <dd>
   *     The index of this form (optional).
   *   </dd>
   *   <dt>
   *     string <var>sid_pay_method</var>
   *   </dt>
   *   <dd>
   *     The payment method ID.
   *   </dd>
   * </dl>
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
   * <dl>
   *   <dt>int <var>i_index</var></dt>
   *   <dd>The number of asset(s). The actual number is returned for assets with a quantity greater than <tt>1</tt>.</dd>
   *   <dt>string <var>k_resource</var></dt>
   *   <dd>The key of the asset.</dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Book_Process_Payment_PaymentModel_a_resource}
   */
  this.a_resource = [];

  /**
   * A list of sessions being booked.
   * <b>Keys</b> - The class period keys.
   * <b>Values</b> - List of date/time when the session occurred.
   *
   * @post post
   * @type {{}}
   */
  this.a_session = [];

  /**
   * Selected sessions on the waiting list without pay.
   *
   * Keys - session IDs.
   *
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
   *
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