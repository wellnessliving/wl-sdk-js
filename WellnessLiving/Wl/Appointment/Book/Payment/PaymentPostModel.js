/**
 * An endpoint that allows for an appointment or appointment Purchase Option payment for a client.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Book_Payment_PaymentPostModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * All data from the provider model.
   *
   * @post post
   * @type {{}}
   */
  this.a_book_data = undefined;

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
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentPostModel_a_promotion_data
   * @property {string} s_expire The expiration date.
   * @property {string} s_title The title of the Purchase Option.
   */

  /**
   * Information about the Purchase Option.
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
   *     The title of the Purchase Option.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Book_Payment_PaymentPostModel_a_promotion_data}
   */
  this.a_promotion_data = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentPostModel_a_purchase_a_tax
   * @property {number} m_tax The tax rate.
   * @property {string} text_title The name of the tax.
   */
  /**
   * @typedef {{}} Wl_Appointment_Book_Payment_PaymentPostModel_a_purchase
   * @property {Wl_Appointment_Book_Payment_PaymentPostModel_a_purchase_a_tax} a_tax Information about taxes in the following format.
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
   *    Information about taxes in the following format.
   *    A list of taxes to apply. The array keys are `k_tax` keys. Each element contains the following fields:
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
   *     The purchase item ID. One of the {@link \RsPurchaseItemSid} constants.
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
   * @type {Wl_Appointment_Book_Payment_PaymentPostModel_a_purchase}
   */
  this.a_purchase = undefined;

  /**
   * The purchase item IDs from the database.
   *
   * @post result
   * @type {?string[]}
   */
  this.a_purchase_item = null;

  /**
   * The key of the source mode. One of the {@link \Wl\Mode\ModeSid} constants.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * The payment type for the appointment. One of the {@link RsAppointmentPaySid} constants.
   *
   * @post result
   * @type {number}
   */
  this.id_pay = undefined;

  /**
   * The purchase item ID. One of the {@link \RsPurchaseItemSid} constants.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.id_purchase_item = 0;

  /**
   * The Purchase Option or appointment key, depending on {@link Wl_Appointment_Book_Payment_PaymentModel.id_purchase_item}.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_id = "0";

  /**
   * The location to show the available appointment booking schedule for.
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
   * The login promotion ID.
   *
   * @get get
   * @type {string}
   */
  this.k_login_promotion = "0";

  /**
   * The price of the service with tax.
   *
   * @get result
   * @type {string}
   */
  this.m_total = undefined;

  /**
   * The variable price, which is only set when booking an appointment with a variable price type
   *   ({@link \RsServicePriceSid::VARIES} from spa backend {@link ModeSid::SPA_BACKEND}).
   *
   * @get get
   * @type {string}
   */
  this.m_variable_price = "";

  /**
   * The discount code.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.text_discount_code = "";

  /**
   * The user to get information for.
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