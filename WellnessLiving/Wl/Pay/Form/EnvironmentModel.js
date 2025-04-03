/**
 * Gets information about payment environments.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @deprecated Use {@link Wl_Pay_Form_EnvironmentUserModel} instead.
 * @see Wl\Pay\Form\EnvironmentApi
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
   * Keys refer to card types based on card numbers (see {@link ACardSystemSid}),
   * and values are IDs of card systems (one of {@link ACardSystemSid} constants).
   *
   * @get result
   * @type {{}}
   */
  this.a_card_system = undefined;

  /**
   * A list of payment methods enabled for staff members. The ID is one of {@link RsPayMethodSid} constants.
   * The value is always `true`.
   *
   * @get result
   * @type {{}}
   */
  this.a_method_staff = undefined;

  /**
   * @typedef {{}} Wl_Pay_Form_EnvironmentModel_a_method_support
   * @property {number} id_pay_method The ID of type of payment method. One of {@link RsPayMethodSid} constants.
   * @property {*} is_client Determines whether this method is available for clients. This field is only returned for custom payment methods.
   * @property {?string} k_pay_method The key of the custom payment method.
   * This will be `null` if this payment method isn't customized.
   * @property {*} s_method The name of payment method. This field is only returned for custom payment methods.
   */

  /**
   * A list of all payment methods that can be used within this business.
   * This array is sorted in the order in which payment methods should be shown to the user.
   * Each element of the array has the following structure:
   * <dl>
   *   <dt>int <var>id_pay_method</var></dt>
   *   <dd>The ID of type of payment method. One of {@link RsPayMethodSid} constants.</dd>
   *   <dt>bool [<var>is_client</var>]</dt>
   *   <dd>Determines whether this method is available for clients. This field is only returned for custom payment methods.</dd>
   *   <dt>string|null <var>k_pay_method</var></dt>
   *   <dd>
   *     The key of the custom payment method.
   *     This will be `null` if this payment method isn't customized.
   *   </dd>
   *   <dt>string [<var>s_method</var>]</dt>
   *   <dd>The name of payment method. This field is only returned for custom payment methods.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Pay_Form_EnvironmentModel_a_method_support[]}
   */
  this.a_method_support = undefined;

  /**
   * The configuration array that's sent to mobile card reader plugin.
   * The structure of this array depends on the payment processor being used.
   *
   * @get result
   * @type {?{}}
   */
  this.a_mobile_config = null;

  /**
   * @typedef {{}} Wl_Pay_Form_EnvironmentModel_a_pay_processor
   * @property {?{}} a_public_keys Public keys configured for this payment processor.
   * Copy of result of {@link Wl\Pay\Processor\ProcessorInterface\PayProcessorPublicKeysInterface::publicKeys()}.
   * `null` if this payment processor does not support public keys.
   * @property {number} id_pay_processor ID of the payment processor. One of {@link Wl_Pay_Processor_PayProcessorSid} constants.
   * @property {?boolean} is_enabled_3ds `true` if 3DS should be performed, `false` if 3DS should not be performed. `null` if this is not defined for payment processor.
   * Only for {@link Wl_Pay_Processor_PayProcessorSid.NUVEI}
   * @property {string} k_business_merchant Key of the business merchant.
   */

  /**
   * Represents information about payment processors.
   *
   * Keys are payment methods IDs, one of {@link RsPayMethodSid} constants.
   *
   * Value is the following array: <dl>
   *   <dt>array|null <var>a_public_keys</var></dt>
   *   <dd>
   *     Public keys configured for this payment processor.
   *     Copy of result of {@link Wl\Pay\Processor\ProcessorInterface\PayProcessorPublicKeysInterface::publicKeys()}.
   *     `null` if this payment processor does not support public keys.
   *   </dd>
   *   <dt>int <var>id_pay_processor</var></dt>
   *   <dd>ID of the payment processor. One of {@link Wl_Pay_Processor_PayProcessorSid} constants.</dd>
   *   <dt>null|bool <var>is_enabled_3ds</var></dt>
   *   <dd>`true` if 3DS should be performed, `false` if 3DS should not be performed. `null` if this is not defined for payment processor.
   *     Only for {@link Wl_Pay_Processor_PayProcessorSid.NUVEI}
   *   </dd>
   *   <dt>string <var>k_business_merchant</var></dt>
   *   <dd>Key of the business merchant.</dd>
   * </dl>
   *
   * `null` if no processors are set up.
   *
   * @get result
   * @type {?Wl_Pay_Form_EnvironmentModel_a_pay_processor[]}
   */
  this.a_pay_processor = null;

  /**
   * Current local date in current location {@link Wl_Pay_Form_EnvironmentModel.k_location}
   * or business {@link Wl_Pay_Form_EnvironmentModel.k_business} if not set location.
   *
   * @get result
   * @type {string}
   */
  this.dl_now = undefined;

  /**
   * Surcharge amount for payment with card represented as a percent of transaction amount.
   *
   * This will be `null` if the percentage surcharge amount shouldn't be withdrawn.
   *
   * @get result
   * @type {?string}
   */
  this.f_surcharge = null;

  /**
   * Surcharge amount for payment with ACH represented as a percent of transaction amount.
   *
   * This will be `null` if the percentage surcharge amount shouldn't be withdrawn.
   *
   * @get result
   * @type {?string}
   */
  this.f_surcharge_ach = null;

  /**
   * The locale ID of the business.
   *
   * @get result
   * @see Core_Locale_LocaleSid
   * @type {?number}
   */
  this.id_locale = null;

  /**
   * Determines whether newly added payment sources should be saved. This will be `true` if payment sources should be saved,
   * `false` if otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_save_source = undefined;

  /**
   * Whether tips are accepted.
   *
   * @get result
   * @type {boolean}
   */
  this.is_tip = false;

  /**
   * The key of the business to retrieve payment information for.
   *
   * This will be `0` if not set yet.
   * An empty string or `null` if payments are performed with the WellnessLiving system merchant.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The key of the currency to retrieve payment information for.
   *
   * @get get
   * @type {string}
   */
  this.k_currency = "0";

  /**
   * The key of the location to retrieve payment information for.
   *
   * This will be `0` if not set yet.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * Surcharge amount for payment with card represented as a fixed amount.
   *
   * This will be `null` if the fixed surcharge amount shouldn't be withdrawn.
   *
   * @get result
   * @type {?string}
   */
  this.m_surcharge = null;

  /**
   * Surcharge amount for payment with ACH represented as a fixed amount.
   *
   * This will be `null` if the fixed surcharge amount shouldn't be withdrawn.
   *
   * @get result
   * @type {?string}
   */
  this.m_surcharge_ach = null;

  /**
   * The user ID to retrieve payment information for.
   *
   * `null` if not defined.
   *
   * @get get
   * @type {?string}
   */
  this.uid_owner = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Form_EnvironmentModel);

/**
 * @inheritDoc
 */
Wl_Pay_Form_EnvironmentModel.prototype.config=function()
{
  return {"a_field": {"a_card_system": {"get": {"result": true}},"a_method_staff": {"get": {"result": true}},"a_method_support": {"get": {"result": true}},"a_mobile_config": {"get": {"result": true}},"a_pay_processor": {"get": {"result": true}},"dl_now": {"get": {"result": true}},"f_surcharge": {"get": {"result": true}},"f_surcharge_ach": {"get": {"result": true}},"id_locale": {"get": {"result": true}},"is_save_source": {"get": {"result": true}},"is_tip": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_currency": {"get": {"get": true}},"k_location": {"get": {"get": true}},"m_surcharge": {"get": {"result": true}},"m_surcharge_ach": {"get": {"result": true}},"uid_owner": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Pay_Form_EnvironmentModel.instanceGet
 * @param {string} k_currency The key of the currency to retrieve payment information for.
 * @param {string} k_business The key of the business to retrieve payment information for. This will be `0` if not set yet. An empty string or `null` if payments are performed with the WellnessLiving system merchant.
 * @param {string} k_location The key of the location to retrieve payment information for. This will be `0` if not set yet.
 * @returns {Wl_Pay_Form_EnvironmentModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */