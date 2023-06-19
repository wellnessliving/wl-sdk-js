/**
 * Allows to pay an appointment or appointment purchase option for the client.
 *
 * Only difference from {@link Wl_Appointment_Book_Payment_PaymentModel}
 * is possibility to pay for a lot of appointments at the same time.
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
   *
   * @get get
   * @type {{}}
   */
  this.a_book_data = {};

  /**
   * Structure of this array corresponds to the structure of
   * the <tt>Wl_Appointment_Book_ProviderAbstractModel</tt> class in JavaScript,
   * which is normally used as its subclass <tt>Wl_Appointment_Book_ProviderModel</tt>.
   *
   * @post post
   * @type {{}}
   */
  this.a_book_data_post = {};

  /**
   * ID of payment type for the appointment.
   *
   * @post result
   * @type {number[]}
   */
  this.a_pay = undefined;

  /**
   * A list of payment sources to pay with.
   *
   * The structure of this array corresponds with the structure of {@link \RsPayForm::$a_pay_source}.
   *
   * @post post
   * @type {{}[]}
   */
  this.a_pay_form = [];

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentMultipleModel_a_promotion_data
   * @property {string} s_expire The Purchase Option expiration date.
   * @property {string} s_title The title of the Purchase Option.
   */

  /**
   * Information about the Purchase Option.
   * <dl>
   *   <dt>
   *     string <var>s_expire</var>
   *   </dt>
   *   <dd>
   *     The Purchase Option expiration date.
   *   </dd>
   *   <dt>
   *     string <var>s_title</var>
   *   </dt>
   *   <dd>
   *     The title of the Purchase Option.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Payment_PaymentMultipleModel_a_promotion_data}
   */
  this.a_promotion_data = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentMultipleModel_a_purchase_a_tax
   * @property {number} m_tax The tax rate.
   * @property {string} text_title The name of the tax.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentMultipleModel_a_purchase
   * @property {Wl_Appointment_Book_Payment_PaymentMultipleModel_a_purchase_a_tax} a_tax Information about taxes in the following format.
   * A list of taxes to apply. The array keys are <tt>k_tax</tt> keys. Each element contains the following fields:
   * <dl>
   *   <dt>
   *     float <tt>m_tax</tt>
   *   </dt>
   *   <dd>
   *     The tax rate.
   *   </dd>
   *   <dt>
   *     string <tt>text_title</tt>
   *   </dt>
   *   <dd>
   *     The name of the tax.
   *   </dd>
   * </dl>
   * @property {string} id_purchase_item The purchase item ID. One of the {@link \RsPurchaseItemSid} constants.
   * @property {string} k_id The key of the discount used for the purchase.
   * @property {string} m_discount The value of the discount used for the purchase.
   * @property {string} m_pay The payment for the Purchase Option or single visit without taxes.
   * @property {string} m_price The price of the Purchase Option or single visit.
   */

  /**
   * <b>Field -</b> a string in the format `id_purchase_item-k_id`.
   *
   * <b>Value -</b> an array with the next stricture:
   * <dl>
   *   <dt>
   *     array <var>a_tax</var>
   *   </dt>
   *   <dd>
   *     Information about taxes in the following format.
   *     A list of taxes to apply. The array keys are `k_tax` keys. Each element contains the following fields:
   *     <dl>
   *       <dt>
   *         float <var>m_tax</var>
   *       </dt>
   *       <dd>
   *         The tax rate.
   *       </dd>
   *       <dt>
   *         string <var>text_title</var>
   *       </dt>
   *       <dd>
   *         The name of the tax.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     string <var>id_purchase_item</var>
   *   </dt>
   *   <dd>
   *     The purchase item ID.
   *   </dd>
   *   <dt>
   *     string <var>k_id</var>
   *   </dt>
   *   <dd>
   *     The key of the discount used for the purchase.
   *   </dd>
   *   <dt>
   *     string <var>m_discount</var>
   *   </dt>
   *   <dd>
   *     The value of the discount used for the purchase.
   *   </dd>
   *   <dt>
   *     string <var>m_pay</var>
   *   </dt>
   *   <dd>
   *     The payment for the Purchase Option or single visit without taxes.
   *   </dd>
   *   <dt>
   *     string <var>m_price</var>
   *   </dt>
   *   <dd>
   *     The price of the Purchase Option or single visit.
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
   * Key is quiz key.
   * Value is response key.
   *
   * @post post
   * @type {{}}
   */
  this.a_quiz_response = {};

  /**
   * The price of service with the tax without surcharge.
   *
   * @get result
   * @var {{}}
   */
  this.a_total = undefined;

  /**
   * The ID of the source mode.
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
   * The location to show available appointment booking schedule for.
   *
   * @get get,result
   * @post get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * The activity ID of the purchase that was made. This will be empty if no purchase was made.
   *
   * @post result
   * @type {string}
   */
  this.k_login_activity_purchase = undefined;

  /**
   * Gift card amount.
   *
   * @get result
   * @var {string}
   */
  this.m_coupon = undefined;

  /**
   * Discount amount.
   *
   * @get result
   * @var {string}
   */
  this.m_discount = undefined;

  /**
   * Surcharge amount.
   *
   * @get result
   * @var {string}
   */
  this.m_surcharge = undefined;

  /**
   * The tax of service.
   *
   * @get result
   * @var {string}
   */
  this.m_tax = undefined;

  /**
   * The price of the service with tax.
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
   * @var {string}
   */
  this.text_coupon_code = '';

  /**
   * The discount code.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.text_discount_code = "";

  /**
   * The client to get information for.
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
Wl_Appointment_Book_Payment_PaymentMultipleModel.prototype.config = function()
{
  return {"a_field": {"a_book_data": {"get": {"get": true}},"a_book_data_post": {"post": {"post": true}},"a_pay": {"post": {"result": true}},"a_pay_form": {"post": {"post": true}},"a_promotion_data": {"get": {"result": true}},"a_purchase": {"get": {"result": true}},"a_purchase_item": {"post": {"result": true}},"a_quiz_response": {"post": {"post": true}},"a_total": {"get": {"result": true}},"a_uid": {"get": {"get": true},"post": {"get": true}},"id_mode": {"get": {"get": true},"post": {"get": true}},"is_walk_in": {"get": {"get": true},"post": {"get": true}},"k_location": {"get": {"get": true,"result": true},"post": {"get": true}},"k_login_activity_purchase": {"post": {"result": true}},"m_coupon": {"get": {"result": true}},"m_discount": {"get": {"result": true}},"m_surcharge": {"get": {"result": true}},"m_tax": {"get": {"result": true}},"m_total": {"get": {"result": true}},"text_coupon_code": {"get": {"get": true},"post": {"get": true}},"text_discount_code": {"get": {"get": true},"post": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};