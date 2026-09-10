/**
 * Gets a list of saved bank account.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Thoth_WlPay_Bank_Ach_Widget_WidgetSelectModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "id_pay_bank,id_pay_method,id_pay_owner,k_id,k_business,k_currency,k_location";

  /**
   * @typedef {{}} Thoth_WlPay_Bank_Ach_Widget_WidgetSelectModel_a_pay_bank
   * @property {boolean} is_default `true` if this is the default bank account, `false` otherwise.
   * @property {string} k_pay_address Address key of the bank account.
   * @property {string} k_pay_bank Bank account key.
   * @property {string} k_region Region key, or empty string if the address has no region.
   * @property {string} s_name Bank account nickname.
   * @property {string} s_number Part of the bank account number.
   * @property {string} text_city City of the billing address.
   * @property {string} text_name_holder Name of the account holder.
   * @property {string} text_phone Phone number of the billing address.
   * @property {string} text_postal Postal code of the billing address.
   * @property {string} text_region Region title.
   * @property {string} text_street1 First line of the billing street address.
   * @property {string} text_street2 Second line of the billing street address.
   */

  /**
   * List of saved bank accounts, keyed by bank account key. Each entry:
   *
   * @get result
   * @type {Thoth_WlPay_Bank_Ach_Widget_WidgetSelectModel_a_pay_bank}
   */
  this.a_pay_bank = undefined;

  /**
   * Pay bank id.
   *
   * @get get
   * @see RsPayBankSid
   * @type {number}
   */
  this.id_pay_bank = 0;

  /**
   * Payment method.
   *
   * @get get
   * @see RsPayMethodSid
   * @type {?number}
   */
  this.id_pay_method = null;

  /**
   * Payment owner kind.
   *
   * @get get
   * @see RsPayOwnerSid
   * @type {number}
   */
  this.id_pay_owner = 0;

  /**
   * Business key.
   * `null` if use system business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Currency key.
   *
   * @get get
   * @type {string}
   */
  this.k_currency = "";

  /**
   * Payment owner.
   * Must be primary key of a business or a user.
   *
   * @get get
   * @type {string}
   */
  this.k_id = "";

  /**
   * Location key.
   * `null` to use system-wide merchant.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Thoth_WlPay_Bank_Ach_Widget_WidgetSelectModel);

/**
 * @inheritDoc
 */
Thoth_WlPay_Bank_Ach_Widget_WidgetSelectModel.prototype.config=function()
{
  return {"a_field":{"a_pay_bank":{"get":{"result":true}},"id_pay_bank":{"get":{"get":true}},"id_pay_method":{"get":{"get":true}},"id_pay_owner":{"get":{"get":true}},"k_business":{"get":{"get":true}},"k_currency":{"get":{"get":true}},"k_id":{"get":{"get":true}},"k_location":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Thoth_WlPay_Bank_Ach_Widget_WidgetSelectModel.instanceGet
 * @param {number} id_pay_bank Pay bank id.
 * @param {?number} id_pay_method Payment method.
 * @param {number} id_pay_owner Payment owner kind.
 * @param {string} k_id Payment owner. Must be primary key of a business or a user.
 * @param {string} k_business Business key. `null` if use system business.
 * @param {string} k_currency Currency key.
 * @param {string} k_location Location key. `null` to use system-wide merchant.
 * @returns {Thoth_WlPay_Bank_Ach_Widget_WidgetSelectModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets a list of saved bank account.
 *
 * Validates the input parameters, resolves the payment owner and business merchant, checks access,
 * and returns the list of bank accounts available for selection in the bank account widget.
 *
 * @function
 * @name Thoth_WlPay_Bank_Ach_Widget_WidgetSelectModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
