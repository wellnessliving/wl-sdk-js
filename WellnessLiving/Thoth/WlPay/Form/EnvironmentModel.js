/**
 * Returns information about payment environment.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @deprecated Use {@link _Thoth_WlPay_Form_EnvironmentUserModel} instead.
 */
function Thoth_WlPay_Form_EnvironmentModel()
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
   * @type {number[]}
   */
  this.a_card_system = undefined;

  /**
   * A list of payment methods enabled for staff members.
   * The ID is one of {@link RsPayMethodSid} constants.
   * The value is always `true`.
   *
   * @get result
   * @type {number[]}
   */
  this.a_method_staff = undefined;

  /**
   * @typedef {{}} Thoth_WlPay_Form_EnvironmentModel_a_method_support
   * @property {?number} id_pay_method A list of payment methods.
   * @property {boolean} is_client Determines whether this method is available for clients. This field is only returned for custom payment methods.
   * @property {?string} k_pay_method The key of the custom payment method. This will be `null` if this payment method isn't customized.
   * @property {string} s_method The name of payment method. This field is only returned for custom payment methods.
   */

  /**
   * A list of all payment methods that can be used within this business.
   * This array is sorted in the order in which payment methods should be shown to the user.
   * Each element of the array has the following structure:
   *
   * @get result
   * @type {Thoth_WlPay_Form_EnvironmentModel_a_method_support[]}
   */
  this.a_method_support = undefined;

  /**
   * The configuration array that's sent to mobile card reader plugin.
   * The structure of this array depends on the payment processor being used.
   * `null` when mobile card readers are not supported, or when actor has no access to them.
   *
   * @get result
   * @type {?*[]}
   */
  this.a_mobile_config = null;

  /**
   * @typedef {{}} Thoth_WlPay_Form_EnvironmentModel_a_pay_processor
   * @property {?*[]} a_public_info Public info configured for this payment processor.
   * @property {?*[]} a_public_keys Public keys configured for this payment processor.
   * @property {boolean} hide_save_source Whether `save payment method` option should be hidden. `true` if hidden, `false` - otherwise.
   * @property {number} id_pay_processor A list of payment gateways or processors.
   * @property {?boolean} is_enabled_3ds `true` if 3DS should be performed, `false` if 3DS should not be performed. `null` if this is not defined for payment processor. Only for {@link Thoth_PayProcessor_PayProcessorSid}
   * @property {?boolean} is_test `true` if the merchant is in a test mode, `false` otherwise. `null` if this is not defined for payment processor.
   * @property {string} k_business_merchant Key of the business merchant.
   */

  /**
   * Represents information about payment processors.
   *
   * Keys are payment methods IDs, one of {@link RsPayMethodSid} constants.
   *
   * Value is the following array: 
   *
   * `null` if no processors are set up.
   *
   * @get result
   * @type {?Thoth_WlPay_Form_EnvironmentModel_a_pay_processor[]}
   */
  this.a_pay_processor = null;

  /**
   * Current local date in current location {@link Thoth_WlPay_Form_EnvironmentModel.k_location}
   * or business {@link Thoth_WlPay_Form_EnvironmentModel.k_business} if not set location.
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
   * A list of locales.
   *
   * Last used ID: 21
   *
   * Values:
   * - 4 (`AUSTRALIA`): Australia.
   * - 20 (`BAHAMAS`): Bahamas.
   * - 19 (`BERMUDA`): Bermuda.
   * - 2 (`CANADA`): Canada.
   * - 5 (`CAYMAN`): Cayman Islands.
   * - 13 (`CYPRUS`): Cyprus.
   * - 8 (`EGYPT`): Egypt.
   * - 18 (`IRELAND`): Republic of Ireland.
   * - 14 (`KUWAIT`): Kuwait
   * - 16 (`MAURITIUS`): Republic of Mauritius.
   * - 9 (`NEVERLAND`): A special locale that can be used for testing or a business situated in an unknown region.
   * - 10 (`NEW_ZEALAND`): New Zealand.
   * - 12 (`PHILIPPINES`): Philippines.
   * - 15 (`SAUDI_ARABIA`): Saudi Arabia.
   * - 17 (`SENEGAL`): Senegal
   * - 21 (`SINGAPORE`): Singapore.
   * - 6 (`SOUTH_AFRICA`): South Africa.
   * - 11 (`UAE`): United Arab Emirates.
   * - 3 (`UK`): United Kingdom.
   * - 1 (`USA`): United States of America.
   *
   * @get result
   * @type {number}
   */
  this.id_locale = undefined;

  /**
   * `true` if clients can choose whether their banking and credit card information is saved at checkout,
   * `false` if this information is always saved.
   *
   * @get result
   * @type {boolean}
   */
  this.is_save_optional = undefined;

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
  this.is_tip = undefined;

  /**
   * The key of the business to retrieve payment information for.
   *
   * This will be `0` if not set yet.
   * An empty string or `null` if payments are performed with the WellnessLiving system merchant.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The key of the currency to retrieve payment information for.
   *
   * @get get
   * @type {string}
   */
  this.k_currency = "";

  /**
   * The key of the location to retrieve payment information for.
   *
   * This will be `0` if not set yet.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

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

WlSdk_ModelAbstract.extend(Thoth_WlPay_Form_EnvironmentModel);

/**
 * @inheritDoc
 */
Thoth_WlPay_Form_EnvironmentModel.prototype.config=function()
{
  return {"a_field":{"a_card_system":{"get":{"result":true}},"a_method_staff":{"get":{"result":true}},"a_method_support":{"get":{"result":true}},"a_mobile_config":{"get":{"result":true}},"a_pay_processor":{"get":{"result":true}},"dl_now":{"get":{"result":true}},"f_surcharge":{"get":{"result":true}},"f_surcharge_ach":{"get":{"result":true}},"id_locale":{"get":{"result":true}},"is_save_optional":{"get":{"result":true}},"is_save_source":{"get":{"result":true}},"is_tip":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_currency":{"get":{"get":true}},"k_location":{"get":{"get":true}},"m_surcharge":{"get":{"result":true}},"m_surcharge_ach":{"get":{"result":true}},"uid_owner":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Thoth_WlPay_Form_EnvironmentModel.instanceGet
 * @param {string} k_currency The key of the currency to retrieve payment information for.
 * @param {string} k_business The key of the business to retrieve payment information for. This will be `0` if not set yet. An empty string or `null` if payments are performed with the WellnessLiving system merchant.
 * @param {string} k_location The key of the location to retrieve payment information for. This will be `0` if not set yet.
 * @returns {Thoth_WlPay_Form_EnvironmentModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns information about payment environment.
 *
 * Called before rendering a payment form to determine which payment methods and card types are available
 * for a given business and location, what surcharges apply, and how the form should behave (tip prompt,
 * optional card save). This endpoint is deprecated; use {@link Thoth_WlPay_Form_EnvironmentUserModel}
 * for new integrations.
 *
 * @function
 * @name Thoth_WlPay_Form_EnvironmentModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
