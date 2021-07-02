/**
 * Returns information about payment environment.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Form_EnvironmentModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_currency,k_business,k_location";

  /**
   * A list of supported bank card systems.
   * Keys are card type based on its number, see {@link \ACardSystemSid},
   * and values are IDs of card systems, one of {@link \ACardSystemSid} constants.
   *
   * @get result
   * @type {{}}
   */
  this.a_card_system = undefined;

  /**
   * A list of payment methods enabled for staff members. Key is one of {@link RsPayMethodSid} constants. Value is always <tt>true</tt>.
   *
   * @get result
   * @type {{}}
   */
  this.a_method_staff = undefined;

  /**
   * @typedef {{}} Wl_Pay_Form_EnvironmentModel_a_method_support
   * @property {number} id_pay_method ID of type of payment method. One of {@link RsPayMethodSid} constants.
   * @property {*} is_client Whether this method is available for clients. This field is only returned for custom payment methods.
   * @property {?string} k_pay_method Key of custom payment method. Primary key in {@link \Wl\Pay\Method\MethodSql}.
   * <tt>null</tt> if this payment method is not custom.
   * @property {*} s_method Name of payment method. This field is only returned for custom payment methods.
   */

  /**
   * A list of all payment methods that can be used within this business.
   * This array is sorted in order in which payment methods should be shown to the user.
   * Each element of the array has the following structure:
   * <dl>
   *   <dt>int <var>id_pay_method</var></dt>
   *   <dd>ID of type of payment method. One of {@link RsPayMethodSid} constants.</dd>
   *   <dt>bool [<var>is_client</var>]</dt>
   *   <dd>Whether this method is available for clients. This field is only returned for custom payment methods.</dd>
   *   <dt>string|null <var>k_pay_method</var></dt>
   *   <dd>Key of custom payment method. Primary key in {@link \Wl\Pay\Method\MethodSql}.
   *     <tt>null</tt> if this payment method is not custom.</dd>
   *   <dt>string [<var>s_method</var>]</dt>
   *   <dd>Name of payment method. This field is only returned for custom payment methods.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Pay_Form_EnvironmentModel_a_method_support[]}
   */
  this.a_method_support = undefined;

  /**
   * Configuration array that is sent to mobile card reader plugin.
   * Structure of this array completely depends on specific payment processor.
   *
   * @get result
   * @type {?{}}
   */
  this.a_mobile_config = null;

  /**
   * @typedef {{}} Wl_Pay_Form_EnvironmentModel_a_pay_processor
   * @property {number} id_pay_processor ID of the payment processor. One of {@link \RsPayProcessorSid} constants.
   * @property {string} k_business_merchant Key of the business merchant. Primary key in {@link \RsBusinessMerchantSql}.
   */

  /**
   * Represents information about payment processors.
   *
   * Keys are payment methods IDs, one of {@link RsPayMethodSid} constants.
   *
   * Value is the following array:<dl>
   * <dt>int <var>id_pay_processor</var></dt>
   * <dd>ID of the payment processor. One of {@link \RsPayProcessorSid} constants.</dd>
   * <dt>string <var>k_business_merchant</var></dt>
   * <dd>Key of the business merchant. Primary key in {@link \RsBusinessMerchantSql}.</dd>
   * </dl>
   *
   * `null` if no processors are set up.
   *
   * @get result
   * @type {?Wl_Pay_Form_EnvironmentModel_a_pay_processor[]}
   */
  this.a_pay_processor = null;

  /**
   * Percentage of payment amount to additionally withdraw as a surcharge.
   *
   * `null` if percentage surcharge amount should not be withdrawn.
   *
   * @get result
   * @type {?string}
   */
  this.f_surcharge = null;

  /**
   * Locale of the business.
   *
   * @get result
   * @type {?number}
   */
  this.id_locale = null;

  /**
   * Whether newly added payment source should be saved. <tt>true</tt> if payment source should be saved. <tt>false</tt> if not. <tt>null</tt> if it is not initialized yet.
   *
   * @get result
   * @type {boolean}
   */
  this.is_save_source = undefined;

  /**
   * Key of business to retrieve payment information for.
   *
   * <tt>'0'</tt> if not set yet.
   * Empty string if payment is performed with system merchant.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Key of currency to retrieve payment information for.
   *
   * @get get
   * @type {string}
   */
  this.k_currency = "0";

  /**
   * Key of the location to retrieve payment information for.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * Fixed surcharge amount to withdraw from all payment sources that support surcharges.
   *
   * `null` if fixed surcharge amount should not be withdrawn.
   *
   * @get result
   * @type {?string}
   */
  this.m_surcharge = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Form_EnvironmentModel);

/**
 * @inheritDoc
 */
Wl_Pay_Form_EnvironmentModel.prototype.config=function()
{
  return {"a_field": {"a_card_system": {"get": {"result": true}},"a_method_staff": {"get": {"result": true}},"a_method_support": {"get": {"result": true}},"a_mobile_config": {"get": {"result": true}},"a_pay_processor": {"get": {"result": true}},"f_surcharge": {"get": {"result": true}},"id_locale": {"get": {"result": true}},"is_save_source": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_currency": {"get": {"get": true}},"k_location": {"get": {"get": true}},"m_surcharge": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Pay_Form_EnvironmentModel.instanceGet
 * @param {string} k_currency Key of currency to retrieve payment information for.
 * @param {string} k_business Key of business to retrieve payment information for. <tt>'0'</tt> if not set yet. Empty string if payment is performed with system merchant.
 * @param {string} k_location Key of the location to retrieve payment information for.
 * @returns {Wl_Pay_Form_EnvironmentModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */