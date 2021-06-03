/**
 * Wizard of booking. Page "Pay / Billing info".
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
   * @property {number} id_purchase_item ID of purchase item type. One of {@link RsPurchaseItemSid} constants.
   * @property {*} is_renew <tt>true</tt> - item should be "auto-renew"; <tt>false</tt> - otherwise.
   * If is not set - use default option for this item.
   * @property {string} k_id ID of purchase item in database.
   * @property {string} k_login_prize ID of user's prize. Primary key in table {@link RsLoginPrizeSql}.
   * Not <tt>0</tt> only if user is paying book by prize.
   * @property {*} s_signature Signature of purchase option contract. Not set if purchase option does not require assignment of contract.
   */

  /**
   * List of items to be bought. Every element has next keys:
   * <dl>
   *   <dt>
   *     int <var>id_purchase_item</var>
   *   </dt>
   *   <dd>
   *     ID of purchase item type. One of {@link RsPurchaseItemSid} constants.
   *   </dd>
   *   <dt>
   *     bool [<var>is_renew</var>]
   *   </dt>
   *   <dd>
   *     <tt>true</tt> - item should be "auto-renew"; <tt>false</tt> - otherwise.
   *     If is not set - use default option for this item.
   *   </dd>
   *   <dt>
   *     string <var>k_id</var>
   *   </dt>
   *   <dd>
   *     ID of purchase item in database.
   *   </dd>
   *   <dt>
   *     string <var>k_login_prize</var>
   *   </dt>
   *   <dd>
   *     ID of user's prize. Primary key in table {@link RsLoginPrizeSql}.
   *     Not <tt>0</tt> only if user is paying book by prize.
   *   </dd>
   *   <dt>
   *     string [<var>s_signature</var>]
   *   </dt>
   *   <dd>
   *     Signature of purchase option contract. Not set if purchase option does not require assignment of contract.
   *   </dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Book_Process_Payment_PaymentModel_a_item}
   */
  this.a_item = [];

  /**
   * IDs of user's activity which correspond to books are made. Primary keys in {@link RsLoginActivitySql} table.
   *
   * @post result
   * @type {string[]}
   */
  this.a_login_activity_book = undefined;

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
   * @typedef {{}} Wl_Book_Process_Payment_PaymentModel_a_repeat
   * @property {*} a_week Days of week when appointment must repeat. Constants of {@link ADateWeekSid} class.
   * Empty if appointment must not repeat weekly.
   * @property {*} dl_end Date when appointment repeat must stop. Empty if repeat must not stop at a certain date.
   * @property {*} i_occurrence Number of occurrences after that appointment repeat must stop.
   * Empty if repeat must not stop after a certain number of occurrences.
   * @property {number} i_period Frequency of appointment repeating.
   * @property {number} id_period Measurement unit of <tt>i_period</tt>. One of {@link ADurationSid} constants.
   * @property {*} is_month <tt>true</tt> if appointment must repeat monthly at the same date.
   * <tt>false</tt> if appointment must repeat monthly at the same week day.
   * <tt>null</tt> if appointment must not repeat monthly.
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
   *     Measurement unit of <tt>i_period</tt>. One of {@link ADurationSid} constants.
   *   </dd>
   *   <dt>
   *     bool [<var>is_month</var>]
   *   </dt>
   *   <dd>
   *     <tt>true</tt> if appointment must repeat monthly at the same date.
   *     <tt>false</tt> if appointment must repeat monthly at the same week day.
   *     <tt>null</tt> if appointment must not repeat monthly.
   *   </dd>
   * </dl>
   *
   * <tt>null</tt> if booking must be not recurring.
   *
   * @post post
   * @type {?Wl_Book_Process_Payment_PaymentModel_a_repeat}
   */
  this.a_repeat = null;

  /**
   * @typedef {{}} Wl_Book_Process_Payment_PaymentModel_a_resource
   * @property {number} i_index Number of asset. Actual for assets with quantity greater <tt>1</tt>.
   * @property {string} k_resource ID of asset. Primary key in {@link RsResourceSql} table.
   */

  /**
   * List of assets which are being booked. Every element has next keys:
   * <dl><dt>int <var>i_index</var></dt><dd>Number of asset. Actual for assets with quantity greater <tt>1</tt>.</dd>
   * <dt>string <var>k_resource</var></dt><dd>ID of asset. Primary key in {@link RsResourceSql} table.</dd></dl>
   *
   * @post post
   * @type {Wl_Book_Process_Payment_PaymentModel_a_resource}
   */
  this.a_resource = [];

  /**
   * List of session which are being booked.
   * Keys - primary keys in table {@link RsClassPeriodSql}; values - lists of session date/time.
   *
   * @post post
   * @type {{}}
   */
  this.a_session = [];

  /**
   * IDs of books are made. Primary keys in {@link RsVisitSql} table.
   *
   * @post result
   * @type {string[]}
   */
  this.a_visit = undefined;

  /**
   * Date/time to which session is booked.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.dt_date_gmt = "";

  /**
   * Mode type. One of {@link \Wl\Mode\ModeSid} constants.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * Key of session which is booked.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_class_period = "0";

  /**
   * ID of user's activity which corresponds to purchase is made. Primary key in {@link RsLoginActivitySql} table.
   *
   * @post result
   * @type {string}
   */
  this.k_login_activity_purchase = undefined;

  /**
   * Installment template key. Primary key in {@link \Wl\Pay\Installment\Template\Sql} table.
   * This property is optional. <tt>null</tt> if installment plan doesn't exists for bought item.
   * <tt>0</tt> if installment plan doesn't selected for bought item from the list of installment plans.
   *
   * @post post
   * @type {?string}
   */
  this.k_pay_installment_template = null;

  /**
   * Discount code.
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
  return {"a_field": {"a_item": {"post": {"post": true}},"a_login_activity_book": {"post": {"result": true}},"a_pay_form": {"post": {"post": true}},"a_repeat": {"post": {"post": true}},"a_resource": {"post": {"post": true}},"a_session": {"post": {"post": true}},"a_visit": {"post": {"result": true}},"dt_date_gmt": {"get": {"get": true},"post": {"get": true}},"id_mode": {"get": {"get": true},"post": {"get": true}},"k_class_period": {"get": {"get": true},"post": {"get": true}},"k_login_activity_purchase": {"post": {"result": true}},"k_pay_installment_template": {"post": {"post": true}},"text_discount_code": {"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
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