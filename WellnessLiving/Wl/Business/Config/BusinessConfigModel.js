/**
 * Gets information about a business config.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Config_BusinessConfigModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Business_Config_BusinessConfigModel_a_business_policy
   * @property {string[]} a_family_relation List of allowed relation types specific to a given business.  Key is ID. One of {@link RsFamilyRelationSid} constant.  Value is SID.
   * @property {number[]} a_family_relation_login_allow List of allowed relation types specific to a given business.  Each value constant from {@link RsFamilyRelationSid} class.
   * @property {number[]} a_payment_reattempt_not_decline_reason List of not allowed decline reasons to payment reattempt. Each element is one of {@link Thoth_WlPay_PayExceptionSid} constants.
   * @property {boolean[]} a_wait_service Keys are list of IDs from {@link Wl_Service_ServiceSid}, and values are flags whether wait list is allowed.
   * @property {number} i_book_before Minimum hours|days|months before class should be booked.
   * @property {number} i_book_future Maximum hours|days|months after class can be booked.
   * @property {number} i_cancel Minimum hours|days|months before class should be canceled without penalty.
   * @property {number} i_promote Minimum hours|days|months before class should be promoted from wait list.
   * @property {number} i_promote_fastest_response Minimum hours|days|months the notifications which are sent for client confirmation required should be sent to all clients on the wait list at the same time up to the cut off time.
   * @property {number} i_promote_require_confirm Minimum hours|days|months the notifications which are sent for client confirmation must confirm their a promote from the waiting list to the active list.
   * @property {number} i_reattempt_count Number of failed auto-payments reattempts.
   * @property {number} id_book_before Hours|days|months from {@link ADurationSid}.
   * @property {number} id_book_future Hours|days|months from {@link ADurationSid}.
   * @property {number} id_cancel Hours|days|months from {@link ADurationSid}.
   * @property {number} id_promote Hours|days|months from {@link ADurationSid}.
   * @property {number} id_promote_fastest_response Hours|days|months from {@link ADurationSid}.
   * @property {number} id_promote_require_confirm Hours|days|months from {@link ADurationSid}.
   * @property {boolean} is_book_inside_active_pay_period if `true` - clients with purchase options are only allowed to book sessions within their current paid period, `false` - during purchase option's duration.
   * @property {boolean} is_disable_promotion 1 if a client's automatic payment fails, their account should not be debited and their purchase option becomes inactive, 0 - otherwise. Default 0.
   * @property {boolean} is_enable_payment_penalty Whether to charge penalty after final auto-payment attempt.
   * @property {boolean} is_enable_payment_reattempt Whether to reattempt failed auto-payments.
   * @property {boolean} is_enable_staff_ip_restriction Whether to restrict which IP addresses staff can login from.
   * @property {boolean} is_prevent_booking 1 if booking for a client with negative balance is disabled, 0 - otherwise. Default 0.
   * @property {boolean} is_staff_restrict If true, client can not choose provider while appointment wizard.
   * @property {boolean} is_wait Enable\disable wait list.
   * @property {string} k_currency Currency from rs.currency table.
   * @property {string} k_timezone Timezone from get.timezone table.
   * @property {string} m_payment_penalty Penalty amount to charge after final auto-payment attempt.
   * @property {string} url_custom Custom Url of a business
   */

  /**
   * All business policies connected to clients and bookings.
   *
   * @get result
   * @type {Wl_Business_Config_BusinessConfigModel_a_business_policy}
   */
  this.a_business_policy = undefined;

  /**
   * @typedef {{}} Wl_Business_Config_BusinessConfigModel_a_penalty
   * @property {string[]} a_class_period List of class period keys.
   * @property {string[]} a_login_type List of client type keys.
   * @property {string[]} a_resource List of resources keys.
   * @property {string[]} a_service List of services keys.
   * @property {number} i_blame Number of blamed visits.
   * @property {number} i_cancel_period Count of days/weeks/months.
   * @property {number} i_charge_measure Count of applied penalty.
   * @property {number} id_blame One of {@link Wl_Business_Policy_BlameSid} constants.
   * @property {number} id_cancel_period Duration ID. One of {@link ADurationSid} constants.
   * @property {number} id_charge One of {@link Wl_Business_Policy_ChargeSid} constants.
   * @property {boolean} is_appointment_all `1` if all classes are selected, `0` - otherwise.
   * @property {boolean} is_charge_measure_money `true` for a fixed money amount, `false` for a percentage.
   * @property {boolean} is_class_all `1` if all classes are selected, `0` - otherwise.
   * @property {boolean} is_enable_cancel_charge `true` if promotion penalties is enable, `false` otherwise.
   * @property {boolean} is_event_all `1` if all events are selected, `0` - otherwise.
   * @property {boolean} is_login_type_all `1` if all login types are selected, `0` - otherwise.
   * @property {boolean} is_resource_all `1` if all resources are selected, `0` - otherwise.
   * @property {boolean} is_service_all `1` if all services are selected, `0` - otherwise.
   */

  /**
   * A list of business penalties.
   *
   * @get result
   * @type {Wl_Business_Config_BusinessConfigModel_a_penalty}
   */
  this.a_penalty = undefined;

  /**
   * Whether client must select a location at checkout.
   *
   * @get result
   * @type {boolean}
   */
  this.is_location_client_select = undefined;

  /**
   * Determines whether staff members should select a location at checkout.
   *
   * If `true`, staff members should select a location at checkout. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_location_select = undefined;

  /**
   * Determines whether the business has white label setting enabled in the admin settings.
   *
   * If `true`, admin settings are enabled. Otherwise, this will be `false`.
   *
   * @get result
   * @type {boolean}
   */
  this.is_white_label = undefined;

  /**
   * The business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Config_BusinessConfigModel);

/**
 * @inheritDoc
 */
Wl_Business_Config_BusinessConfigModel.prototype.config=function()
{
  return {"a_field":{"a_business_policy":{"get":{"result":true}},"a_penalty":{"get":{"result":true}},"is_location_client_select":{"get":{"result":true}},"is_location_select":{"get":{"result":true}},"is_white_label":{"get":{"result":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Business_Config_BusinessConfigModel.instanceGet
 * @param {string} k_business The business key.
 * @returns {Wl_Business_Config_BusinessConfigModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets information about a business config.
 *
 * Used by the booking widget and checkout flow to know the rules governing client interactions: which
 * family member relations are allowed, whether clients or staff must select a location at checkout,
 * what cancellation penalties apply, and whether white-label mode is active.
 *
 * @function
 * @name Wl_Business_Config_BusinessConfigModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
