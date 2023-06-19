/**
 * An endpoint that sends payments for an appointment booking.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Payment_PaymentPostModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "id_mode,k_location,uid,id_purchase_item,k_id,k_login_promotion,k_session_pass,s_unique_key";

  /**
   * Information detailing an appointment booking.
   * Same as {@link Wl_Appointment_Book_Payment_PaymentModel.a_book_data}.
   *
   * @post post
   * @type {{}}
   */
  this.a_book_data = [];

  /**
   * A list of payment sources to pay with.
   *
   * Structure of this array corresponds structure of {@link RsPayForm::$a_pay_source}.
   *
   * @post post
   * @type {{}[]}
   */
  this.a_pay_form = [];

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentPostModel_a_promotion_data
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
   * @type {Wl_Appointment_Book_Payment_PaymentPostModel_a_promotion_data[]}
   */
  this.a_promotion_data = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentPostModel_a_purchase_a_tax
   * @property {number} m_tax The tax rate.
   * @property {string} text_title The name of the tax.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentPostModel_a_purchase
   * @property {Wl_Appointment_Book_Payment_PaymentPostModel_a_purchase_a_tax} a_tax Contains information about taxes in the following format. A list of taxes to apply.
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
   * @type {Wl_Appointment_Book_Payment_PaymentPostModel_a_purchase[]}
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
   * Surcharge amount.
   *
   * @get result
   * @type {string}
   */
  this.m_surcharge = "0.00";

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

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Payment_PaymentPostModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Payment_PaymentPostModel.prototype.config=function()
{
  return {"a_field": {"a_book_data": {"post": {"post": true}},"a_pay_form": {"post": {"post": true}},"a_promotion_data": {"get": {"result": true}},"a_purchase": {"get": {"result": true}},"a_purchase_item": {"post": {"result": true}},"a_quiz_response": {"post": {"post": true}},"a_uid": {"get": {"get": true},"post": {"get": true}},"id_mode": {"get": {"get": true},"post": {"get": true}},"id_pay": {"post": {"result": true}},"id_purchase_item": {"get": {"get": true},"post": {"get": true}},"is_walk_in": {"get": {"get": true},"post": {"get": true}},"k_id": {"get": {"get": true},"post": {"get": true}},"k_location": {"get": {"get": true,"result": true},"post": {"get": true}},"k_login_activity_purchase": {"post": {"result": true}},"k_login_promotion": {"get": {"get": true}},"k_session_pass": {"get": {"get": true}},"m_coupon": {"get": {"result": true}},"m_discount": {"get": {"result": true}},"m_surcharge": {"get": {"result": true}},"m_tax": {"get": {"result": true}},"m_total": {"get": {"result": true}},"m_variable_price": {"get": {"get": true}},"s_unique_key": {"get": {"get": true}},"text_coupon_code": {"get": {"get": true},"post": {"get": true}},"text_discount_code": {"get": {"get": true},"post": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Book_Payment_PaymentPostModel.instanceGet
 * @param {number} id_mode The key of source mode. A constant of {@link Wl_Mode_ModeSid}.
 * @param {string} k_location Location to show available appointment booking schedule.
 * @param {string} uid User to get information for.
 * @param {number} id_purchase_item The purchase item ID. A constant of {@link RsPurchaseItemSid}.
 * @param {string} k_id The item key. Depends of {@link Wl_Appointment_Book_Payment_PaymentModel.id_purchase_item} property.
 * @param {string} k_login_promotion The login promotion key.
 * @param {string} k_session_pass Session pass key.
 * @param {string} s_unique_key Service unique key. Used for model cache.
 * @returns {Wl_Appointment_Book_Payment_PaymentPostModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */