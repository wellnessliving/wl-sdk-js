/**
 * Point to get saved bank cards of a user or a business.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Bank_Card_Widget_WidgetSelectModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "id_pay_method,id_pay_owner,k_id,k_business,k_currency,k_location,id_pay_mode";

  /**
   * List of saved bank cards. See {@link \RsPayBankCardSelectWidget::additional_data()} for details.
   *
   * @get result
   * @type {{}}
   */
  this.a_pay_card = undefined;

  /**
   * Payment method. One of {@link RsPayMethodSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_pay_method = 0;

  /**
   * Payment mode.
   * One of {@link RsPayModeSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_pay_mode = 0;

  /**
   * Payment owner kind.
   * Must be {@link \RsPayOwnerSid::BUSINESS} or {@link \RsPayOwnerSid::USER}.
   *
   * @get get
   * @type {number}
   */
  this.id_pay_owner = 0;

  /**
   * Business key. Primary key in {@link RsBusinessSql} table.
   * `null` if use system business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Currency key. Primary key in {@link RsCurrencySql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_currency = "0";

  /**
   * Payment owner.
   * Must be primary key of a business or a user.
   *
   * @get get
   * @type {string}
   */
  this.k_id = "0";

  /**
   * Location key. Primary key in {@link RsLocationSql} table.
   * `null` to use system-wide merchant.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Bank_Card_Widget_WidgetSelectModel);

/**
 * @inheritDoc
 */
Wl_Pay_Bank_Card_Widget_WidgetSelectModel.prototype.config=function()
{
  return {"a_field": {"a_pay_card": {"get": {"result": true}},"id_pay_method": {"get": {"get": true}},"id_pay_mode": {"get": {"get": true}},"id_pay_owner": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_currency": {"get": {"get": true}},"k_id": {"get": {"get": true}},"k_location": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Pay_Bank_Card_Widget_WidgetSelectModel.instanceGet
 * @param {number} id_pay_method Payment method. One of {@link RsPayMethodSid} constants.
 * @param {number} id_pay_owner Payment owner kind. Must be {@link \RsPayOwnerSid::BUSINESS} or {@link \RsPayOwnerSid::USER}.
 * @param {string} k_id Payment owner. Must be primary key of a business or a user.
 * @param {string} k_business Business key. Primary key in {@link RsBusinessSql} table. `null` if use system business.
 * @param {string} k_currency Currency key. Primary key in {@link RsCurrencySql} table.
 * @param {string} k_location Location key. Primary key in {@link RsLocationSql} table. `null` to use system-wide merchant.
 * @param {number} id_pay_mode Payment mode. One of {@link RsPayModeSid} constants.
 * @returns {Wl_Pay_Bank_Card_Widget_WidgetSelectModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */