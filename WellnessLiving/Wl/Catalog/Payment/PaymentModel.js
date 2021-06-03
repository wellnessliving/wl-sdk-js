/**
 * Allows to pay items for the client.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Catalog_Payment_PaymentModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Catalog_Payment_PaymentModel_a_commission
   * @property {string} k_staff Staff key. Primary key of {@link \RsStaffSql} table.
   * @property {string} k_staff_pay Payment schema key. Primary key of {@link \RsStaffSql} table.
   */

  /**
   * Commission which staff earns for this purchase. If not empty, has next fields: <dl>
   *   <dt>string <var>k_staff</var></dt>
   *   <dd>Staff key. Primary key of {@link \RsStaffSql} table.</dd>
   *   <dt>string <var>k_staff_pay</var></dt>
   *   <dd>Payment schema key. Primary key of {@link \RsStaffSql} table.</dd>
   * </dl>
   *
   * @post get
   * @type {Wl_Catalog_Payment_PaymentModel_a_commission}
   */
  this.a_commission = [];

  /**
   * Sale items from the catalog cart.
   *
   * @post post
   * @type {{}}
   */
  this.a_item = [];

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
   * Discount in percents.
   *
   * @post post
   * @type {number}
   */
  this.f_discount_percent = 0;

  /**
   * ID of source mode. One of {@link \Wl\Mode\ModeSid} constants.
   *
   * @post get
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * Payment owner is an anonymous user.
   *
   * @post get
   * @type {boolean}
   */
  this.is_guest = false;

  /**
   * Set if the operations are performed under the staff.
   *
   * @post get
   * @type {boolean}
   */
  this.is_staff = false;

  /**
   * Business key.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Location key.
   *
   * @post get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * Installment template key. Primary key in {@link \Wl\Pay\Installment\Template\Sql} table.
   * This property is optional. <tt>null</tt> if installment plan doesn't exists for bought item.
   *
   * @post post
   * @type {?string}
   */
  this.k_pay_installment_template = null;

  /**
   * ID of purchase that was created during payment.
   *
   * @post result
   * @type {number}
   */
  this.k_purchase = undefined;

  /**
   * ID of the visit to be paid.
   *
   * @post post
   * @type {string}
   */
  this.k_visit = "0";

  /**
   * Discount in amount of money.
   *
   * @post post
   * @type {string}
   */
  this.m_discount_flat = "0";

  /**
   * Manual surcharge amount.
   *
   * Empty string means automatic surcharge amount.
   *
   * @post post
   * @type {string}
   */
  this.m_surcharge = undefined;

  /**
   * Amount of tips.
   *
   * @post post
   * @type {string}
   */
  this.m_tip = "0";

  /**
   * Discount code.
   *
   * @post post
   * @type {string}
   */
  this.text_discount_code = "";

  /**
   * User key.
   *
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_Payment_PaymentModel);

/**
 * @inheritDoc
 */
Wl_Catalog_Payment_PaymentModel.prototype.config=function()
{
  return {"a_field": {"a_commission": {"post": {"get": true}},"a_item": {"post": {"post": true}},"a_pay_form": {"post": {"post": true}},"f_discount_percent": {"post": {"post": true}},"id_mode": {"post": {"get": true}},"is_guest": {"post": {"get": true}},"is_staff": {"post": {"get": true}},"k_business": {"post": {"get": true}},"k_location": {"post": {"get": true}},"k_pay_installment_template": {"post": {"post": true}},"k_purchase": {"post": {"result": true}},"k_visit": {"post": {"post": true}},"m_discount_flat": {"post": {"post": true}},"m_surcharge": {"post": {"post": true}},"m_tip": {"post": {"post": true}},"text_discount_code": {"post": {"post": true}},"uid": {"post": {"get": true}}}};
};