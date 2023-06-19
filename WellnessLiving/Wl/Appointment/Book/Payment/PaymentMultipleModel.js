/**
 * Allows to pay an appointment or appointment purchase option for the client.
 *
 * Only difference from {@link Wl_Appointment_Book_Payment_PaymentModel} is possibility to pay for a lot of appointments at the same time.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Payment_PaymentMultipleModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Structure of this array corresponds to the structure of
   * the <tt>Wl_Appointment_Book_ProviderAbstractModel</tt> class in JavaScript,
   * which is normally used as its subclass <tt>Wl_Appointment_Book_ProviderModel</tt>.
   * Property of the object is stored as an element of this array with the same name.
   *
   * @get get
   * @type {{}}
   */
  this.a_book_data = [];

  /**
   * Structure of this array corresponds to the structure of
   * the <tt>Wl_Appointment_Book_ProviderAbstractModel</tt> class in JavaScript,
   * which is normally used as its subclass <tt>Wl_Appointment_Book_ProviderModel</tt>.
   * Property of the object is stored as an element of this array with the same name.
   *
   * @post post
   * @type {{}}
   */
  this.a_book_data_post = [];

  /**
   * Payment type for the appointment, one of {@link RsAppointmentPaySid} constants.
   *
   * @post result
   * @type {number[]}
   */
  this.a_pay = undefined;

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
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentMultipleModel_a_promotion_data
   * @property {number} i_limit Limit on the visit count of the promotion.
   * @property {number} i_remain Count of remaining visits.
   * @property {string} s_expire The expiration date.
   * @property {string} s_title The title of promotion.
   */

  /**
   * Information about selected login promotion.
   *
   * <dl>
   *   <dt>
   *     int <var>i_limit</var>
   *   </dt>
   *   <dd>
   *      Limit on the visit count of the promotion.
   *   </dd>
   *   <dt>
   *     int <var>i_remain</var>
   *   </dt>
   *   <dd>
   *     Count of remaining visits.
   *   </dd>
   *   <dt>
   *     string <var>s_expire</var>
   *   </dt>
   *   <dd>
   *     The expiration date.
   *   </dd>
   *   <dt>
   *     string <var>s_title</var>
   *   </dt>
   *   <dd>
   *     The title of promotion.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Payment_PaymentMultipleModel_a_promotion_data}
   */
  this.a_promotion_data = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentMultipleModel_a_purchase_a_tax
   * @property {number} m_tax Tax rate.
   * @property {string} text_title Name of the tax.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentMultipleModel_a_purchase
   * @property {Wl_Appointment_Book_Payment_PaymentMultipleModel_a_purchase_a_tax} a_tax Contains information about taxes in the following format. A list of taxes to apply. The array keys are <tt>k_tax</tt> keys. Each element contains the following fields:
   * <dl>
   *   <dt>
   *     float <tt>m_tax</tt>
   *   </dt>
   *   <dd>
   *     Tax rate.
   *   </dd>
   *   <dt>
   *     string <tt>text_title</tt>
   *   </dt>
   *   <dd>
   *     Name of the tax.
   *   </dd>
   * </dl>
   * @property {string} id_purchase_item Purchase item ID. One of {@link RsPurchaseItemSid} constant.
   * @property {string} k_id The value of the discount used for purchase.
   * @property {string} m_discount The value of the discount used for purchase.
   * @property {string} m_pay The payment for the promotion or single visit without taxes.
   * @property {string} m_price The price of the promotion or single visit.
   */

  /**
   * Fields - string in format <tt>id_purchase_item-k_id</tt>. Values - array with next stricture:
   * <dl>
   *   <dt>
   *     array <var>a_tax</var>
   *   </dt>
   *   <dd>
   *     Contains information about taxes in the following format. A list of taxes to apply. The array keys are <tt>k_tax</tt> keys. Each element contains the following fields:
   *     <dl>
   *       <dt>
   *         float <var>m_tax</var>
   *       </dt>
   *       <dd>
   *         Tax rate.
   *       </dd>
   *       <dt>
   *         string <var>text_title</var>
   *       </dt>
   *       <dd>
   *         Name of the tax.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     string <var>id_purchase_item</var>
   *   </dt>
   *   <dd>
   *     Purchase item ID. One of {@link RsPurchaseItemSid} constant.
   *   </dd>
   *   <dt>
   *     string <var>k_id</var>
   *   </dt>
   *   <dd>
   *     The value of the discount used for purchase.
   *   </dd>
   *   <dt>
   *     string <var>m_discount</var>
   *   </dt>
   *   <dd>
   *     The value of the discount used for purchase.
   *   </dd>
   *   <dt>
   *     string <var>m_pay</var>
   *   </dt>
   *   <dd>
   *     The payment for the promotion or single visit without taxes.
   *   </dd>
   *   <dt>
   *     string <var>m_price</var>
   *   </dt>
   *   <dd>
   *     The price of the promotion or single visit.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Payment_PaymentMultipleModel_a_purchase}
   */
  this.a_purchase = undefined;

  /**
   * Purchase item IDs from the database.
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
   * The price of service with the tax without surcharge.
   *
   * @get result
   * @type {string}
   */
  this.a_total = undefined;

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
   * Key of source mode. One of {@link Wl_Mode_ModeSid} constants.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * `true` if client is walk-in, otherwise `false`.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.is_walk_in = false;

  /**
   * Location to show available appointment booking schedule.
   *
   * @get get,result
   * @post get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * ID of activity of purchase is made. Empty if no purchase is made.
   *
   * @post result
   * @type {string}
   */
  this.k_login_activity_purchase = undefined;

  /**
   * Gift card amount.
   *
   * @get result
   * @type {string}
   */
  this.m_coupon = undefined;

  /**
   * Discount amount.
   *
   * @get result
   * @type {string}
   */
  this.m_discount = undefined;

  /**
   * Surcharge amount.
   *
   * @get result
   * @type {string}
   */
  this.m_surcharge = undefined;

  /**
   * The tax of service.
   *
   * @get result
   * @type {string}
   */
  this.m_tax = undefined;

  /**
   * The price of service with the tax without surcharge.
   *
   * @get result
   * @type {string}
   */
  this.m_total = undefined;

  /**
   * Gift card code.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.text_coupon_code = "";

  /**
   * Discount code.
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

WlSdk_ModelAbstract.extend(Wl_Appointment_Book_Payment_PaymentMultipleModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Book_Payment_PaymentMultipleModel.prototype.config=function()
{
  return {"a_field": {"a_book_data": {"get": {"get": true}},"a_book_data_post": {"post": {"post": true}},"a_pay": {"post": {"result": true}},"a_pay_form": {"post": {"post": true}},"a_promotion_data": {"get": {"result": true}},"a_purchase": {"get": {"result": true}},"a_purchase_item": {"post": {"result": true}},"a_quiz_response": {"post": {"post": true}},"a_total": {"get": {"result": true}},"a_uid": {"get": {"get": true},"post": {"get": true}},"id_mode": {"get": {"get": true},"post": {"get": true}},"is_walk_in": {"get": {"get": true},"post": {"get": true}},"k_location": {"get": {"get": true,"result": true},"post": {"get": true}},"k_login_activity_purchase": {"post": {"result": true}},"m_coupon": {"get": {"result": true}},"m_discount": {"get": {"result": true}},"m_surcharge": {"get": {"result": true}},"m_tax": {"get": {"result": true}},"m_total": {"get": {"result": true}},"text_coupon_code": {"get": {"get": true},"post": {"get": true}},"text_discount_code": {"get": {"get": true},"post": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};