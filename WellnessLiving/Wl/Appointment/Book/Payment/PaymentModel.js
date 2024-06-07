/**
 * An endpoint that displays information about payments for an appointment.
 * The POST method for this endpoint is implemented as a separate endpoint (see
 * {@link Wl_Appointment_Book_Payment_PaymentPostModel}).
 *
 * This endpoint using captcha check.
 * To pass captcha need study the documentation by captcha API, there you will find that you need to send a captcha for a specific action.
 * For this API an action is `1064`.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @deprecated Use {@link Wl_Appointment_Book_Payment_PaymentPostModel} instead.
 */
function Wl_Appointment_Book_Payment_PaymentModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "id_mode,k_location,uid,id_purchase_item,k_id,k_login_promotion,k_session_pass,s_unique_key";

  /**
   * All data from the provider <tt>Wl_Appointment_Book_ProviderModel</tt> model.
   *
   * @get get
   * @post get
   * @type {{}}
   */
  this.a_book_data = [];

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentModel_a_pay_form_a_pay_card_a_pay_address
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
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentModel_a_pay_form_a_pay_card
   * @property {Wl_Appointment_Book_Payment_PaymentModel_a_pay_form_a_pay_card_a_pay_address} a_pay_address The payment address:
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
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentModel_a_pay_form
   * @property {Wl_Appointment_Book_Payment_PaymentModel_a_pay_form_a_pay_card[]} a_pay_card The payment card information:
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
   * @type {Wl_Appointment_Book_Payment_PaymentModel_a_pay_form[]}
   */
  this.a_pay_form = [];

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentModel_a_promotion_data
   * @property {string} i_limit The limit of total visits.
   * @property {number} i_remain The number of remaining visits.
   * @property {string} s_expire The expiration date.
   * @property {string} s_title The title of the Purchase Option.
   */

  /**
   * Information about selected Purchase Options.
   * <dl>
   *   <dt>string <var>i_limit</var></dt>
   *   <dd>The limit of total visits.</dd>
   *
   *   <dt>int <var>i_remain</var></dt>
   *   <dd>The number of remaining visits.</dd>
   *
   *   <dt>string <var>s_expire</var></dt>
   *   <dd>The expiration date.</dd>
   *
   *   <dt>string <var>s_title</var></dt>
   *   <dd>The title of the Purchase Option.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Payment_PaymentModel_a_promotion_data[]}
   */
  this.a_promotion_data = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentModel_a_purchase_a_tax
   * @property {number} m_tax The tax rate.
   * @property {string} text_title The name of the tax.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentModel_a_purchase
   * @property {Wl_Appointment_Book_Payment_PaymentModel_a_purchase_a_tax} a_tax Contains information about taxes in the following format. A list of taxes to apply.
   * The array keys are `k_tax` keys. Each element contains the following fields: <dl>
   *   <dt>float <tt>m_tax</tt></dt>
   *   <dd>The tax rate.</dd>
   *
   *   <dt>string <tt>text_title</tt></dt>
   *   <dd>The name of the tax.</dd>
   * </dl>
   * @property {string} id_purchase_item The purchase item ID. A constant of {@link RsPurchaseItemSid}.
   * @property {string} k_id The value of the discount used for the purchase.
   * @property {string} m_discount The value of the discount used for the purchase.
   * @property {string} m_pay The payment for the Purchase Option or single visit without taxes.
   * @property {string} m_price The price of the Purchase Option or single visit.
   */

  /**
   * Information about selected purchase items.
   *
   * Indexes are strings in the format `id_purchase_item-k_id`.
   *
   * Values are an array with the following structure:
   *
   * <dl>
   *   <dt>array <var>a_tax</var></dt>
   *   <dd>
   *     Contains information about taxes in the following format. A list of taxes to apply.
   *     The array keys are `k_tax` keys. Each element contains the following fields: <dl>
   *       <dt>float <var>m_tax</var></dt>
   *       <dd>The tax rate.</dd>
   *
   *       <dt>string <var>text_title</var></dt>
   *       <dd>The name of the tax.</dd>
   *     </dl>
   *   </dd>
   *
   *   <dt>string <var>id_purchase_item</var></dt>
   *   <dd>The purchase item ID. A constant of {@link RsPurchaseItemSid}.</dd>
   *
   *   <dt>string <var>k_id</var></dt>
   *   <dd>The value of the discount used for the purchase.</dd>
   *
   *   <dt>string <var>m_discount</var></dt>
   *   <dd>The value of the discount used for the purchase.</dd>
   *
   *   <dt>string <var>m_pay</var></dt>
   *   <dd>The payment for the Purchase Option or single visit without taxes.</dd>
   *
   *   <dt>string <var>m_price</var></dt>
   *   <dd>The price of the Purchase Option or single visit.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Payment_PaymentModel_a_purchase[]}
   */
  this.a_purchase = undefined;

  /**
   * The purchase item keys from the database.
   *
   * This will be `null` if not set yet.
   *
   * @post result
   * @type {?string[]}
   */
  this.a_purchase_item = null;

  /**
   * List of quiz response keys.
   * Key is quiz key from {@link \Core\Quiz\QuizSql} table.
   * Value is response key from {@link \Core\Quiz\Response\ResponseSql} table.
   *
   * @post post
   * @type {{}}
   */
  this.a_quiz_response = [];

  /**
   * List of user keys to book appointments - primary keys in {@link \PassportLoginSql}.
   * There may be empty values in this list, which means that this is a walk-in.
   *
   * @get get
   * @post get
   * @type {string[]}
   */
  this.a_uid = [];

  /**
   * The key of source mode. A constant of {@link Wl_Mode_ModeSid}.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * The payment type for the appointment. A constant of {@link RsAppointmentPaySid}.
   *
   * @post result
   * @type {number}
   */
  this.id_pay = undefined;

  /**
   * The purchase item ID. A constant of {@link RsPurchaseItemSid}.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.id_purchase_item = 0;

  /**
   * `true` if client is walk-in, otherwise `false`.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.is_walk_in = false;

  /**
   * The item key. Depends of {@link Wl_Appointment_Book_Payment_PaymentModel.id_purchase_item} property.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_id = "0";

  /**
   * Location to show available appointment booking schedule.
   *
   * @get get,result
   * @post get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * The key of activity of the purchase made.
   * Empty if no purchase has been made.
   *
   * @post result
   * @type {string}
   */
  this.k_login_activity_purchase = undefined;

  /**
   * Login prize key. In case when appointment paid by reward prize, there is the key of redeemed login prize. Empty otherwise.
   *
   * @post result
   * @type {string}
   */
  this.k_login_prize = "0";

  /**
   * The login promotion key.
   *
   * @get get
   * @type {string}
   */
  this.k_login_promotion = "0";

  /**
   * Session pass key.
   *
   * @get get
   * @type {string}
   */
  this.k_session_pass = "0";

  /**
   * Gift card amount.
   *
   * @get result
   * @type {string}
   */
  this.m_coupon = "0.00";

  /**
   * Discount amount.
   *
   * @get result
   * @type {string}
   */
  this.m_discount = "0.00";

  /**
   * Surcharge amount calculated for credit cards (Virtual Terminal and Card Swiper).
   *
   * @get result
   * @type {string}
   */
  this.m_surcharge = "0.00";

  /**
   * Surcharge amount calculated for money transfers from account: ACH, Direct Connect.
   *
   * @get result
   * @type {string}
   */
  this.m_surcharge_ach = "0.00";

  /**
   * The tax of service.
   *
   * @get result
   * @type {string}
   */
  this.m_tax = "0.00";

  /**
   * The total cost of the purchase.
   *
   * @get result
   * @type {string}
   */
  this.m_total = undefined;

  /**
   * Variable price. Is set only during booking an appointment with variable type of the price
   *   {@link RsServicePriceSid.VARIES} from spa backend {@link Wl_Mode_ModeSid.SPA_BACKEND}.
   *
   * @get get
   * @type {string}
   */
  this.m_variable_price = "";

  /**
   * Service unique key.
   * Used for model cache.
   *
   * @get get
   * @type {string}
   */
  this.s_unique_key = "";

  /**
   * Gift card code.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.text_coupon_code = "";

  /**
   * The discount code to be applied to the purchase.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.text_discount_code = "";

  /**
   * User to get information for.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Payment_PaymentModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Payment_PaymentModel.prototype.config=function()
{
  return {"a_field": {"a_book_data": {"get": {"get": true},"post": {"get": true}},"a_pay_form": {"post": {"post": true}},"a_promotion_data": {"get": {"result": true}},"a_purchase": {"get": {"result": true}},"a_purchase_item": {"post": {"result": true}},"a_quiz_response": {"post": {"post": true}},"a_uid": {"get": {"get": true},"post": {"get": true}},"id_mode": {"get": {"get": true},"post": {"get": true}},"id_pay": {"post": {"result": true}},"id_purchase_item": {"get": {"get": true},"post": {"get": true}},"is_walk_in": {"get": {"get": true},"post": {"get": true}},"k_id": {"get": {"get": true},"post": {"get": true}},"k_location": {"get": {"get": true,"result": true},"post": {"get": true}},"k_login_activity_purchase": {"post": {"result": true}},"k_login_prize": {"post": {"result": true}},"k_login_promotion": {"get": {"get": true}},"k_session_pass": {"get": {"get": true}},"m_coupon": {"get": {"result": true}},"m_discount": {"get": {"result": true}},"m_surcharge": {"get": {"result": true}},"m_surcharge_ach": {"get": {"result": true}},"m_tax": {"get": {"result": true}},"m_total": {"get": {"result": true}},"m_variable_price": {"get": {"get": true}},"s_unique_key": {"get": {"get": true}},"text_coupon_code": {"get": {"get": true},"post": {"get": true}},"text_discount_code": {"get": {"get": true},"post": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Payment_PaymentModel.instanceGet
 * @param {number} id_mode The key of source mode. A constant of {@link Wl_Mode_ModeSid}.
 * @param {string} k_location Location to show available appointment booking schedule.
 * @param {string} uid User to get information for.
 * @param {number} id_purchase_item The purchase item ID. A constant of {@link RsPurchaseItemSid}.
 * @param {string} k_id The item key. Depends of {@link Wl_Appointment_Book_Payment_PaymentModel.id_purchase_item} property.
 * @param {string} k_login_promotion The login promotion key.
 * @param {string} k_session_pass Session pass key.
 * @param {string} s_unique_key Service unique key. Used for model cache.
 * @returns {Wl_Appointment_Book_Payment_PaymentModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */