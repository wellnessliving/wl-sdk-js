/**
 * Retrieves information about coupon price.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Catalog_Coupon_Payment_InformationModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_coupon,k_coupon_amount";

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
   * Business in which the purchase is made.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * ID of the coupon, primary key in {@link \RsCouponSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_coupon = 0;

  /**
   * ID of the coupon amount, primary key in {@link \Wl\Coupon\AmountSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_coupon_amount = 0;

  /**
   * Total amount without tax.
   *
   * @get result
   * @type {string}
   */
  this.m_subtotal = undefined;

  /**
   * Amount of tax.
   *
   * @get result
   * @type {string}
   */
  this.m_tax = undefined;

  /**
   * Total amount.
   *
   * @get result
   * @type {string}
   */
  this.m_total = undefined;

  /**
   * Discount code.
   *
   * @get get
   * @type {string}
   */
  this.text_discount_code = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Catalog_Coupon_Payment_InformationModel);

/**
 * @inheritDoc
 */
Wl_Catalog_Coupon_Payment_InformationModel.prototype.config=function()
{
  return {"a_field": {"a_pay_form": {"post": {"post": true}},"k_business": {"get": {"get": true}},"k_coupon": {"get": {"get": true}},"k_coupon_amount": {"get": {"get": true}},"m_subtotal": {"get": {"result": true}},"m_tax": {"get": {"result": true}},"m_total": {"get": {"result": true}},"text_discount_code": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Catalog_Coupon_Payment_InformationModel.instanceGet
 * @param {string} k_business Business in which the purchase is made.
 * @param {string} k_coupon ID of the coupon, primary key in {@link \RsCouponSql}.
 * @param {string} k_coupon_amount ID of the coupon amount, primary key in {@link \Wl\Coupon\AmountSql}.
 * @returns {Wl_Catalog_Coupon_Payment_InformationModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */