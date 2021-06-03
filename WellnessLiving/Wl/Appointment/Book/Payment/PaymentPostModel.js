/**
 * {@inheritdoc}
 * Wl-sdk users have encountered a problem sending a request due to the request length limit.
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
   * All data from the provider model <tt>Wl_Appointment_Book_ProviderModel</tt>.
   *
   * @post post
   * @type {{}}
   */
  this.a_book_data = undefined;

  /**
   * A list of payment sources to pay with.
   *
   * Structure of this array corresponds structure of {@link \RsPayForm::$a_pay_source}.
   *
   * @post post
   * @type {{}[]}
   */
  this.a_pay_form = [];

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentPostModel_a_promotion_data
   * @property {string} s_expire The expiration date.
   * @property {string} s_title The title of promotion.
   */

  /**
   * Information about promotion.
   * <dl>
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
   * @type {Wl_Appointment_Book_Payment_PaymentPostModel_a_promotion_data}
   */
  this.a_promotion_data = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentPostModel_a_purchase_a_tax
   * @property {number} m_tax Tax rate.
   * @property {string} text_title Name of the tax.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentPostModel_a_purchase
   * @property {Wl_Appointment_Book_Payment_PaymentPostModel_a_purchase_a_tax} a_tax Contains information about taxes in the following format. A list of taxes to apply. The array keys are <tt>k_tax</tt> keys. Each element contains the following fields:
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
   * @property {string} id_purchase_item Purchase item ID. One of {@link \RsPurchaseItemSid} constant.
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
   *     Purchase item ID. One of {@link \RsPurchaseItemSid} constant.
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
   * @type {Wl_Appointment_Book_Payment_PaymentPostModel_a_purchase}
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
   * Key of source mode. One of {@link \Wl\Mode\ModeSid} constants.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * Payment type for the appointment, one of {@link RsAppointmentPaySid} constants.
   *
   * @post result
   * @type {number}
   */
  this.id_pay = undefined;

  /**
   * Purchase item ID. One of {@link \RsPurchaseItemSid}.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.id_purchase_item = 0;

  /**
   * Promotion key or appointment key. Depends of {@link \Wl\Appointment\Book\Payment\PaymentApi::$id_purchase_item}.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_id = "0";

  /**
   * Location to show available appointment booking schedule.
   *
   * Primary key in {@link \RsLocationSql} table.
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
   * Login promotion ID.
   *
   * @get get
   * @type {string}
   */
  this.k_login_promotion = "0";

  /**
   * The price of service with the tax.
   *
   * @get result
   * @type {string}
   */
  this.m_total = undefined;

  /**
   * Variable price. Is set only during booking an appointment with variable type of the price
   *   {@link \RsServicePriceSid::VARIES} from spa backend {@link ModeSid::SPA_BACKEND}.
   *
   * @get get
   * @type {string}
   */
  this.m_variable_price = "";

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
   * Primary key in {@link \PassportLoginSql} table.
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
  return {"a_field": {"a_book_data": {"post": {"post": true}},"a_pay_form": {"post": {"post": true}},"a_promotion_data": {"get": {"result": true}},"a_purchase": {"get": {"result": true}},"a_purchase_item": {"post": {"result": true}},"id_mode": {"get": {"get": true},"post": {"get": true}},"id_pay": {"post": {"result": true}},"id_purchase_item": {"get": {"get": true},"post": {"get": true}},"k_id": {"get": {"get": true},"post": {"get": true}},"k_location": {"get": {"get": true,"result": true},"post": {"get": true}},"k_login_activity_purchase": {"post": {"result": true}},"k_login_promotion": {"get": {"get": true}},"m_total": {"get": {"result": true}},"m_variable_price": {"get": {"get": true}},"text_discount_code": {"get": {"get": true},"post": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};