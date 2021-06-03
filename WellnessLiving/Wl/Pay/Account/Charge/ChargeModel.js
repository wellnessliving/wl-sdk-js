/**
 * Allows to fill user account with a specified payment, or to change reset manually.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Account_Charge_ChargeModel()
{
  WlSdk_ModelAbstract.apply(this);

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
   * Key of source mode. One of {@link \Wl\Mode\ModeSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * Account charge mode.
   *
   * One of {@link RsPayAccountChargeSid} constants.
   *
   * @post get
   * @type {number}
   */
  this.id_pay_account_charge = 0;

  /**
   * Set if the operations are performed under the staff.
   *
   * @post get
   * @type {boolean}
   */
  this.is_staff = false;

  /**
   * ID of business within which changed user account exists.
   *
   * Primary key in {@link RsBusinessSql}.
   *
   * Should not be passed if user account is created already.
   * In this case {@link ChargeApi::$k_pay_account} should be passed.
   *
   * If both business ID and account ID passed, system checks if given business is owner of specified account.
   *
   * @post get
   * @type {string}
   */
  this.k_business = 0;

  /**
   * ID of user account to refill.
   *
   * Primary key in {@link RsPayAccountSql}.
   *
   * May be 0 if user account is not created yet.
   * In this case {@link ChargeApi::$k_business} and {@link ChargeApi::$uid} should be passed.
   *
   * If not passed, currency of account equals default business currency.
   *
   * @post get
   * @type {string}
   */
  this.k_pay_account = 0;

  /**
   * ID of purchase that was created during payment. This value is only returned in a case a purchase was created.
   * New purchase is created when {@link ChargeApi::$id_pay_account_charge} equals {@link \RsPayAccountChargeSid::AUTO}.
   *
   * @post result
   * @type {*}
   */
  this.k_purchase = undefined;

  /**
   * Amount of payment.
   *
   * @post post
   * @type {string}
   */
  this.m_amount = "0.00";

  /**
   * Transaction comment.
   *
   * @post post
   * @type {string}
   */
  this.s_comment = "";

  /**
   * ID of user whose account to refill.
   *
   * Primary key in {@link PassportLoginSql}.
   *
   * Should not be passed if user account is created already.
   * In this case {@link ChargeApi::$k_pay_account} should be passed.
   *
   * If both user ID and account ID passed, system checks if given user is owner of specified account.
   *
   * @post get
   * @type {string}
   */
  this.uid = 0;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Account_Charge_ChargeModel);

/**
 * @inheritDoc
 */
Wl_Pay_Account_Charge_ChargeModel.prototype.config=function()
{
  return {"a_field": {"a_pay_form": {"post": {"post": true}},"id_mode": {"post": {"post": true}},"id_pay_account_charge": {"post": {"get": true}},"is_staff": {"post": {"get": true}},"k_business": {"post": {"get": true}},"k_pay_account": {"post": {"get": true}},"k_purchase": {"post": {"result": true}},"m_amount": {"post": {"post": true}},"s_comment": {"post": {"post": true}},"uid": {"post": {"get": true}}}};
};