/**
 * Information about staff commission for purchase item in the specified business.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Purchase_Staff_PurchaseStaffCommissionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Purchase_Staff_PurchaseStaffCommissionModel_a_available_staff_a_staff_pay
   * @property {boolean} is_select <tt>true</tt> if pay rate is applied for purchase; <tt>false</tt> otherwise.
   * @property {string} k_staff_pay Pay rate key, primary key in {@link \RsStaffPaySql}.
   * @property {string} text_pay_title Pay rate title.
   */
  /**
   * @typedef {{}} Wl_Purchase_Staff_PurchaseStaffCommissionModel_a_available_staff
   * @property {Wl_Purchase_Staff_PurchaseStaffCommissionModel_a_available_staff_a_staff_pay} a_staff_pay List of staff pay rates. Every element has next information:
   * <dl>
   *   <dt>
   *     bool <tt>is_select</tt>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if pay rate is applied for purchase; <tt>false</tt> otherwise.
   *   </dd>
   *   <dt>
   *     string <tt>k_staff_pay</tt>
   *   </dt>
   *   <dd>
   *     Pay rate key, primary key in {@link \RsStaffPaySql}.
   *   </dd>
   *   <dt>
   *     string <tt>text_pay_title</tt>
   *   </dt>
   *   <dd>
   *     Pay rate title.
   *   </dd>
   * </dl>
   * @property {boolean} is_select <tt>true</tt> if staff pay rate is applied for purchase; <tt>false</tt> otherwise.
   * @property {string} k_staff Staff key, primary key in {@link \RsStaffSql} table.
   * @property {string} text_staff_family Staff surname.
   * @property {string} text_staff_name Staff name.
   */

  /**
   * Information about all staff commission in the business which can be applied for purchase. Every element has next keys:
   * <dl>
   *   <dt>
   *     array <var>a_staff_pay</var>
   *   </dt>
   *   <dd>
   *     List of staff pay rates. Every element has next information:
   *     <dl>
   *       <dt>
   *         bool <var>is_select</var>
   *       </dt>
   *       <dd>
   *         <tt>true</tt> if pay rate is applied for purchase; <tt>false</tt> otherwise.
   *       </dd>
   *       <dt>
   *         string <var>k_staff_pay</var>
   *       </dt>
   *       <dd>
   *         Pay rate key, primary key in {@link \RsStaffPaySql}.
   *       </dd>
   *       <dt>
   *         string <var>text_pay_title</var>
   *       </dt>
   *       <dd>
   *         Pay rate title.
   *       </dd>
   *     </dl>
   *   </dd>
   *   <dt>
   *     bool <var>is_select</var>
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if staff pay rate is applied for purchase; <tt>false</tt> otherwise.
   *   </dd>
   *   <dt>
   *     string <var>k_staff</var>
   *   </dt>
   *   <dd>
   *     Staff key, primary key in {@link \RsStaffSql} table.
   *   </dd>
   *   <dt>
   *     string <var>text_staff_family</var>
   *   </dt>
   *   <dd>
   *     Staff surname.
   *   </dd>
   *   <dt>
   *     string <var>text_staff_name</var>
   *   </dt>
   *   <dd>
   *     Staff name.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Purchase_Staff_PurchaseStaffCommissionModel_a_available_staff}
   */
  this.a_available_staff = [];

  /**
   * @typedef {{}} Wl_Purchase_Staff_PurchaseStaffCommissionModel_a_commission_purchase
   * @property {string} k_staff Staff key, primary key in {@link \RsStaffSql} table.
   * @property {string} k_staff_pay Staff pay key, primary key in {@link \RsStaffPaySql} table.
   * @property {string} text_staff_family Staff surname.
   * @property {string} text_staff_name Staff name.
   * @property {string} text_pay_title Pay rate title.
   */

  /**
   * Information about applied staff commission for purchase. Each element has next structure:
   * <dl>
   *   <dt>
   *     string <var>k_staff</var>
   *   </dt>
   *   <dd>
   *     Staff key, primary key in {@link \RsStaffSql} table.
   *   </dd>
   *   <dt>
   *     string <var>k_staff_pay</var>
   *   </dt>
   *   <dd>
   *     Staff pay key, primary key in {@link \RsStaffPaySql} table.
   *   </dd>
   *   <dt>
   *     string <var>text_staff_family</var>
   *   </dt>
   *   <dd>
   *     Staff surname.
   *   </dd>
   *   <dt>
   *     string <var>text_staff_name</var>
   *   </dt>
   *   <dd>
   *     Staff name.
   *   </dd>
   *   <dt>
   *     string <var>text_pay_title</var>
   *   </dt>
   *   <dd>
   *     Pay rate title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @post post
   * @type {Wl_Purchase_Staff_PurchaseStaffCommissionModel_a_commission_purchase[]}
   */
  this.a_commission_purchase = [];

  /**
   * @typedef {{}} Wl_Purchase_Staff_PurchaseStaffCommissionModel_a_future_payments
   * @property {?number} i_future_payments Limit of future auto-payments to apply commission. `null`  if not limit.
   * @property {?number} i_future_payments_left Count of left of future auto-payments to apply commission. `null`  if not limit.
   * @property {boolean} is_future_payments `true` if commission is applied for future auto-payments, `false` otherwise.
   */

  /**
   * Settings of applied commission for future auto-payments: <dl>
   *   <dt>int|null <var>i_future_payments</var></dt>
   *   <dd>Limit of future auto-payments to apply commission. `null`  if not limit.</dd>
   *   <dt>int|null <var>i_future_payments_left</var></dt>
   *   <dd>Count of left of future auto-payments to apply commission. `null`  if not limit.</dd>
   *   <dt>bool <var>is_future_payments</var></dt>
   *   <dd>`true` if commission is applied for future auto-payments, `false` otherwise.</dd>
   * </dl>
   *
   * @get result
   * @post post
   * @type {Wl_Purchase_Staff_PurchaseStaffCommissionModel_a_future_payments}
   */
  this.a_future_payments = [];

  /**
   * @typedef {{}} Wl_Purchase_Staff_PurchaseStaffCommissionModel_a_past_payments
   * @property {number} i_payment Number of auto-payments.
   * @property {string} url_report Url to the staff commission report. See {@link RsReportSid.STAFF_PAY_DETAIL}.Empty string if no payments.
   */

  /**
   * Information about past auto-payments for which the commission has been applied: <dl>
   *   <dt>int <var>i_payment</var></dt>
   *   <dd>Number of auto-payments.</dd>
   *   <dt>string <var>url_report</var></dt>
   *   <dd>Url to the staff commission report. See {@link RsReportSid.STAFF_PAY_DETAIL}.Empty string if no payments.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Purchase_Staff_PurchaseStaffCommissionModel_a_past_payments}
   */
  this.a_past_payments = [];

  /**
   * Whether the promotion, that was paid by this purchase, is renewable.
   * This determines if the commission can be applied to future auto-payments.
   *
   * @get result
   * @type {boolean}
   */
  this.is_recurring = false;

  /**
   * Business key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Purchase key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_purchase = "";

  /**
   * Purchase item key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_purchase_item = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Purchase_Staff_PurchaseStaffCommissionModel);

/**
 * @inheritDoc
 */
Wl_Purchase_Staff_PurchaseStaffCommissionModel.prototype.config=function()
{
  return {"a_field": {"a_available_staff": {"get": {"result": true}},"a_commission_purchase": {"get": {"result": true},"post": {"post": true}},"a_future_payments": {"get": {"result": true},"post": {"post": true}},"a_past_payments": {"get": {"result": true}},"is_recurring": {"get": {"result": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_purchase": {"get": {"get": true},"post": {"get": true}},"k_purchase_item": {"get": {"get": true},"post": {"get": true}}}};
};