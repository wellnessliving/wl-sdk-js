/**
 * Returns information about payment environment.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Thoth_WlPay_Form_EnvironmentUserModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_currency,k_business,k_location,uid_owner";

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
   * @typedef {{}} Thoth_WlPay_Form_EnvironmentUserModel_a_method_support
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
   * @type {Thoth_WlPay_Form_EnvironmentUserModel_a_method_support[]}
   */
  this.a_method_support = undefined;

  /**
   * @typedef {{}} Thoth_WlPay_Form_EnvironmentUserModel_a_mobile_config_A_a_terminal_location_a_terminal_a_terminal_elevate
   * @property {boolean} can_cancel_swipe_from_pos Whether swipe can be cancelled from the POS terminal.
   * @property {number} id_model List of {@link Thoth_PayProcessor_PayProcessorSid} supported terminal types.
   * @property {number} id_status List of possible status of readers.
   * @property {number} id_type List of {@link Thoth_PayProcessor_PayProcessorSid} supported terminal types.
   * @property {string} k_terminal Terminal key.
   * @property {string} text_id Terminal ID assigned by the gateway.
   * @property {string} text_name Human-readable terminal label.
   */

  /**
   * @typedef {{}} Thoth_WlPay_Form_EnvironmentUserModel_a_mobile_config_A_a_terminal_location_a_terminal_a_terminal_web
   * @property {boolean} can_cancel_swipe_from_pos Whether swipe can be cancelled from the POS terminal.
   * @property {number} id_model List of {@link Thoth_PayProcessor_PayProcessorSid} supported terminal types.
   * @property {number} id_status List of possible status of readers.
   * @property {number} id_type List of {@link Thoth_PayProcessor_PayProcessorSid} supported terminal types.
   * @property {?string} k_terminal Terminal key.  `null` for the synthetic `MagTek` USB entry.
   * @property {?string} s_serial_number Always `null`. Present only in the synthetic `MagTek` USB entry.
   * @property {string} text_id Terminal ID assigned by the gateway, or `id_type_N` for the synthetic `MagTek` USB entry.
   * @property {string} text_name Human-readable terminal label.
   */

  /**
   * @typedef {{}} Thoth_WlPay_Form_EnvironmentUserModel_a_mobile_config_A_a_terminal_location_a_terminal
   * @property {Thoth_WlPay_Form_EnvironmentUserModel_a_mobile_config_A_a_terminal_location_a_terminal_a_terminal_elevate} a_terminal_elevate Elevate-model terminals. Each element:
   * @property {Thoth_WlPay_Form_EnvironmentUserModel_a_mobile_config_A_a_terminal_location_a_terminal_a_terminal_web} a_terminal_web Ethernet terminals, plus one synthetic `MagTek` USB entry appended last when {@link Thoth_PayProcessor_Nuvei_Terminal_NuveiTerminalTypeSid} returns `true`. Each element:
   */

  /**
   * @typedef {{}} Thoth_WlPay_Form_EnvironmentUserModel_a_mobile_config_A_a_terminal_location
   * @property {Thoth_WlPay_Form_EnvironmentUserModel_a_mobile_config_A_a_terminal_location_a_terminal} a_terminal Terminal lists grouped by connection type. Both lists contain identical entries - the same terminal appears in both.
   * @property {string} text_location_name Display name of the location.
   */

  /**
   * @typedef {{}} Thoth_WlPay_Form_EnvironmentUserModel_a_mobile_config_A
   * @property {Thoth_WlPay_Form_EnvironmentUserModel_a_mobile_config_A_a_terminal_location} a_terminal_location Terminal configuration keyed by location key.
   * @property {boolean} can_cancel_swipe_from_pos Whether card swipe can be cancelled from the POS terminal.
   * @property {boolean} has_expire_date Whether the card expiry date entry is required.
   * @property {boolean} has_readers_selection Whether the card reader selection UI is shown.
   * @property {boolean} is_support_magtek Whether `MagTek` USB reader is supported.
   */

  /**
   * @typedef {{}} Thoth_WlPay_Form_EnvironmentUserModel_a_mobile_config_B_a_terminal_location_a_terminal_a_terminal_elevate
   * @property {boolean} can_cancel_swipe_from_pos Whether swipe can be cancelled from the POS terminal.
   * @property {number} id_model Stripe device type of reader.
   * @property {number} id_status List of possible status of readers.
   * @property {string} k_terminal Terminal key.
   * @property {string} s_serial_number Terminal serial number.
   * @property {string} text_id Terminal ID assigned by the gateway.
   * @property {string} text_name Human-readable terminal label.
   */

  /**
   * @typedef {{}} Thoth_WlPay_Form_EnvironmentUserModel_a_mobile_config_B_a_terminal_location_a_terminal_a_terminal_web
   * @property {boolean} can_cancel_swipe_from_pos Whether swipe can be cancelled from the POS terminal.
   * @property {number} id_model Stripe device type of reader.
   * @property {number} id_status List of possible status of readers.
   * @property {number} id_type List of {@link Thoth_PayProcessor_PayProcessorSid} supported terminal types.
   * @property {string} k_terminal Terminal key.
   * @property {string} s_serial_number Terminal serial number.
   * @property {string} text_id Terminal ID assigned by the gateway.
   * @property {string} text_name Human-readable terminal label.
   */

  /**
   * @typedef {{}} Thoth_WlPay_Form_EnvironmentUserModel_a_mobile_config_B_a_terminal_location_a_terminal
   * @property {Thoth_WlPay_Form_EnvironmentUserModel_a_mobile_config_B_a_terminal_location_a_terminal_a_terminal_elevate} a_terminal_elevate Elevate-model terminals. Each element:
   * @property {Thoth_WlPay_Form_EnvironmentUserModel_a_mobile_config_B_a_terminal_location_a_terminal_a_terminal_web} a_terminal_web Ethernet terminals. Each element:
   */

  /**
   * @typedef {{}} Thoth_WlPay_Form_EnvironmentUserModel_a_mobile_config_B_a_terminal_location
   * @property {Thoth_WlPay_Form_EnvironmentUserModel_a_mobile_config_B_a_terminal_location_a_terminal} a_terminal Terminal lists grouped by connection type:
   * @property {string} s_location_id Stripe location ID assigned by the gateway.
   * @property {string} text_location_name Display name of the location.
   */

  /**
   * @typedef {{}} Thoth_WlPay_Form_EnvironmentUserModel_a_mobile_config_B
   * @property {Thoth_WlPay_Form_EnvironmentUserModel_a_mobile_config_B_a_terminal_location} a_terminal_location Terminal configuration keyed by location key.
   * @property {boolean} has_expire_date Whether the card expiry date entry is required.
   * @property {boolean} has_readers_selection Whether the card reader selection UI is shown.
   * @property {boolean} is_support_magtek Whether `MagTek` USB reader is supported.
   */

  /**
   * @typedef {{}} Thoth_WlPay_Form_EnvironmentUserModel_a_mobile_config_C_a_terminal_location_a_terminal_a_terminal_elevate
   * @property {boolean} can_cancel_swipe_from_pos Whether swipe can be cancelled from the POS terminal.
   * @property {number} id_model Paragon device type of reader.
   * @property {number} id_status List of possible status of readers.
   * @property {string} k_terminal Terminal key.
   * @property {string} s_serial_number Terminal serial number.
   * @property {string} text_id Terminal ID assigned by the gateway.
   * @property {string} text_name Human-readable terminal label.
   */

  /**
   * @typedef {{}} Thoth_WlPay_Form_EnvironmentUserModel_a_mobile_config_C_a_terminal_location_a_terminal_a_terminal_web
   * @property {boolean} can_cancel_swipe_from_pos Whether swipe can be cancelled from the POS terminal.
   * @property {number} id_model Paragon device type of reader.
   * @property {number} id_status List of possible status of readers.
   * @property {number} id_type List of supported terminal interaction types. Note: this list is rather internal Wellnessliving application list rather than common-known list. Each of types determines the way how we interact with terminal on application level.
   * @property {?string} k_terminal Terminal key.  `null` for the synthetic `MagTek` USB entry.
   * @property {?string} s_serial_number Terminal serial number. `null` for the synthetic `MagTek` USB entry.
   * @property {string} text_id Terminal ID assigned by the gateway, or `id_type_N` for the synthetic `MagTek` USB entry.
   * @property {string} text_name Human-readable terminal label.
   */

  /**
   * @typedef {{}} Thoth_WlPay_Form_EnvironmentUserModel_a_mobile_config_C_a_terminal_location_a_terminal
   * @property {Thoth_WlPay_Form_EnvironmentUserModel_a_mobile_config_C_a_terminal_location_a_terminal_a_terminal_elevate} a_terminal_elevate Elevate-model terminals. Each element:
   * @property {Thoth_WlPay_Form_EnvironmentUserModel_a_mobile_config_C_a_terminal_location_a_terminal_a_terminal_web} a_terminal_web Ethernet and USB terminals. Always includes one synthetic `MagTek` USB entry appended last. Each element:
   */

  /**
   * @typedef {{}} Thoth_WlPay_Form_EnvironmentUserModel_a_mobile_config_C_a_terminal_location
   * @property {Thoth_WlPay_Form_EnvironmentUserModel_a_mobile_config_C_a_terminal_location_a_terminal} a_terminal Terminal lists grouped by connection type:
   * @property {string} text_location_name Display name of the location.
   */

  /**
   * @typedef {{}} Thoth_WlPay_Form_EnvironmentUserModel_a_mobile_config_C
   * @property {Thoth_WlPay_Form_EnvironmentUserModel_a_mobile_config_C_a_terminal_location} a_terminal_location Terminal configuration keyed by location key.
   * @property {boolean} can_cancel_swipe_from_pos Whether card swipe can be cancelled from the POS terminal.
   * @property {boolean} has_expire_date Whether the card expiry date entry is required.
   * @property {boolean} has_readers_selection Whether the card reader selection UI is shown.
   * @property {number} id_device A list of devices supported by credit card reader plugin.
   * @property {boolean} is_support_magtek Whether `MagTek` USB reader is supported.
   */

  /**
   * @typedef {{}} Thoth_WlPay_Form_EnvironmentUserModel_a_mobile_config_D
   * @property {number} id_device A list of devices supported by credit card reader plugin.
   * @property {string} s_key NMI SDK key for the card reader plugin.
   */

  /**
   * The configuration array that's sent to mobile card reader plugin.
   * The structure of this array depends on the payment processor being used.
   * `null` when mobile card readers are not supported, or when actor has no access to them.
   *
   * @get result
   * @type {Thoth_WlPay_Form_EnvironmentUserModel_a_mobile_config_A|Thoth_WlPay_Form_EnvironmentUserModel_a_mobile_config_B|Thoth_WlPay_Form_EnvironmentUserModel_a_mobile_config_C|Thoth_WlPay_Form_EnvironmentUserModel_a_mobile_config_D|?*}
   */
  this.a_mobile_config = undefined;

  /**
   * @typedef {{}} Thoth_WlPay_Form_EnvironmentUserModel_a_pay_processor_a_public_keys
   * @property {?string} s_checkout Checkout SDK public key. `null` if 3DS is disabled for this merchant.
   */

  /**
   * @typedef {{}} Thoth_WlPay_Form_EnvironmentUserModel_a_pay_processor_a_public_info
   * @property {string} s_merchant_site Merchant site identifier assigned by Nuvei.
   * @property {string} s_nuvei_id Nuvei merchant identifier.
   */

  /**
   * @typedef {{}} Thoth_WlPay_Form_EnvironmentUserModel_a_pay_processor
   * @property {?Thoth_WlPay_Form_EnvironmentUserModel_a_pay_processor_a_public_info} a_public_info Public info configured for this payment processor.
   * @property {?Thoth_WlPay_Form_EnvironmentUserModel_a_pay_processor_a_public_keys} a_public_keys Public keys configured for this payment processor.
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
   * @type {?Thoth_WlPay_Form_EnvironmentUserModel_a_pay_processor[]}
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
   * The locale ID of the business.
   *
   * @get result
   * @see Core_Locale_LocaleSid
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

WlSdk_ModelAbstract.extend(Thoth_WlPay_Form_EnvironmentUserModel);

/**
 * @inheritDoc
 */
Thoth_WlPay_Form_EnvironmentUserModel.prototype.config=function()
{
  return {"a_field":{"a_card_system":{"get":{"result":true}},"a_method_staff":{"get":{"result":true}},"a_method_support":{"get":{"result":true}},"a_mobile_config":{"get":{"result":true}},"a_pay_processor":{"get":{"result":true}},"dl_now":{"get":{"result":true}},"f_surcharge":{"get":{"result":true}},"f_surcharge_ach":{"get":{"result":true}},"id_locale":{"get":{"result":true}},"is_save_optional":{"get":{"result":true}},"is_save_source":{"get":{"result":true}},"is_tip":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_currency":{"get":{"get":true}},"k_location":{"get":{"get":true}},"m_surcharge":{"get":{"result":true}},"m_surcharge_ach":{"get":{"result":true}},"uid_owner":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Thoth_WlPay_Form_EnvironmentUserModel.instanceGet
 * @param {string} k_currency The key of the currency to retrieve payment information for.
 * @param {string} k_business The key of the business to retrieve payment information for. This will be `0` if not set yet. An empty string or `null` if payments are performed with the WellnessLiving system merchant.
 * @param {string} k_location The key of the location to retrieve payment information for. This will be `0` if not set yet.
 * @param {?string} uid_owner The user ID to retrieve payment information for. `null` if not defined.
 * @returns {Thoth_WlPay_Form_EnvironmentUserModel}
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
 * @name Thoth_WlPay_Form_EnvironmentUserModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
