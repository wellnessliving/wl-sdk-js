/**
 * Manages business configurations for clients, bookings, payments, and related things.
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
   * All business policies connected to clients and bookings.
   *
   * <dl>
   *   <dt>array <var>a_family_relation</var></dt>
   *   <dd>
   *      List of allowed relation types specific to a given business.
   *   </dd>
   *   <dt>array <var>a_wait_service</var></dt>
   *   <dd>The keys are listed as IDs from {@link RsServiceSid}, and values are flags outlining whether wait listing is allowed.</dd>
   *   <dt>int <var>i_book_before</var></dt>
   *   <dd>The minimum hours|days|months before a class can be booked.</dd>
   *   <dt>int <var>i_book_future</var></dt>
   *   <dd>The maximum hours|days|months after a class can be booked.</dd>
   *   <dt>int <var>i_cancel</var></dt>
   *   <dd>The minimum hours|days|months before a class can be canceled without penalty.</dd>
   *   <dt>int <var>i_promote</var></dt>
   *   <dd>The minimum hours|days|months before a class can be promoted from a wait list.</dd>
   *   <dt>int <var>i_reattempt_count</var></dt>
   *   <dd>The number of failed auto-payment reattempts.</dd>
   *   <dt>int <var>id_book_before</var></dt>
   *   <dd>The hours|days|months from {@link ADurationSid}.</dd>
   *   <dt>int <var>id_book_future</var></dt>
   *   <dd>The hours|days|months from {@link ADurationSid}.</dd>
   *   <dt>int <var>id_cancel</var></dt>
   *   <dd>The hours|days|months from {@link ADurationSid}.</dd>
   *   <dt>int <var>id_promote</var></dt>
   *   <dd>The hours|days|months from {@link ADurationSid}.</dd>
   *   <dt>bool <var>is_book_inside_active_pay_period</var></dt>
   *   <dd>
   *     `true` - clients with Purchase Options are only allowed to book sessions within their current paid period.<br>
   *     `false` - clients with Purchase Options are only allowed to book sessions during the Purchase Option's duration.
   *   </dd>
   *   <dt>int <var>is_disable_promotion</var></dt>
   *   <dd>
   *     If `true`, a client's automatic payment fails, their account shouldn't be debited, and their Purchase Option becomes inactive.
   *     Otherwise, this will be `false` (the default value).
   *   </dd>
   *   <dt>bool <var>is_enable_payment_penalty</var></dt>
   *   <dd>Determines whether to charge a penalty after the final auto-payment attempt.</dd>
   *   <dt>bool <var>is_enable_payment_reattempt</var></dt>
   *   <dd>Determines whether to reattempt failed auto-payments.</dd>
   *   <dt>bool <var>is_enable_staff_ip_restriction</var></dt>
   *   <dd>Determines whether to restrict which IP addresses staff can login from.</dd>
   *   <dt>int <var>is_prevent_booking</var></dt>
   *   <dd>If `true`, booking for a client with negative balance is disabled. Otherwise, this will be `false` (the default value).</dd>
   *   <dt>bool <var>is_staff_restrict</var></dt>
   *   <dd>If true, clients can't choose a provider in the appointment wizard. Otherwise, this will be `false`.</dd>
   *   <dt>bool <var>is_wait</var></dt>
   *   <dd>Determines whether to enable or disable the wait list.</dd>
   *   <dt>int <var>k_currency</var></dt>
   *   <dd>The currency.</dd>
   *   <dt>int <var>k_timezone</var></dt>
   *   <dd>The time zone.</dd>
   *   <dt>string <var>m_payment_penalty</var></dt>
   *   <dd>The penalty amount to charge after the final auto-payment attempt.</dd>
   *   <dt>string <var>url_custom</var></dt>
   *   <dd>The custom URL from Business URLs.</dd>
   * </dl>
   *
   * @get result
   * @type {{}}
   */
  this.a_business_policy = undefined;

  /**
   * @typedef {{}} Wl_Business_Config_BusinessConfigModel_a_penalty
   * @property {string[]} a_class_period List of class period keys.
   * @property {string[]} a_login_type List of client type keys.
   * Empty array means all active login types at concrete business.
   * @property {string[]} a_resource List of resources keys.
   * @property {string[]} a_service List of services keys.
   * @property {number} i_blame Number of blamed visits.
   * @property {number} i_cancel_period Count of days/weeks/months.
   * @property {number} i_charge_measure Count of applied penalty.
   * @property {number} id_blame One of {@link Wl_Business_Policy_BlameSid} constants.
   * @property {number} id_cancel_period Duration ID. One of {@link ADurationSid} constants.
   * @property {number} id_charge One of {@link Wl_Business_Policy_ChargeSid} constants.
   * @property {number} id_charge_measure Percent or money sign.
   * @property {number} is_appointment_all `1` if all classes are selected, `0` - otherwise.
   * @property {number} is_class_all `1` if all classes are selected, `0` - otherwise.
   * @property {number} is_enable_cancel_charge <tt>true</tt> if promotion penalties is enable, <tt>false</tt> otherwise.
   * @property {number} is_event_all `1` if all events are selected, `0` - otherwise.
   * @property {number} is_login_type_all `1` if all login types are selected, `0` - otherwise.
   * @property {number} is_resource_all `1` if all resources are selected, `0` - otherwise.
   * @property {number} is_service_all `1` if all services are selected, `0` - otherwise.
   */

  /**
   * A list of business penalties. Each element contains:
   * <dl>
   *   <dt>string[] <var>a_class_period</var></dt><dd>List of class period keys.</dd>
   *   <dt>string[] <var>a_login_type</var></dt>
   *   <dd>List of client type keys.
   *     Empty array means all active login types at concrete business.
   *   </dd>
   *   <dt>string[] <var>a_resource</var></dt><dd>List of resources keys.</dd>
   *   <dt>string[] <var>a_service</var></dt><dd>List of services keys.</dd>
   *   <dt>int <var>i_blame</var></dt><dd>Number of blamed visits.</dd>
   *   <dt>int <var>i_cancel_period</var></dt><dd>Count of days/weeks/months.</dd>
   *   <dt>int <var>i_charge_measure</var></dt><dd>Count of applied penalty.</dd>
   *   <dt>int <var>id_blame</var></dt><dd>One of {@link Wl_Business_Policy_BlameSid} constants.</dd>
   *   <dt>int <var>id_cancel_period</var></dt><dd>Duration ID. One of {@link ADurationSid} constants.</dd>
   *   <dt>int <var>id_charge</var></dt><dd>One of {@link Wl_Business_Policy_ChargeSid} constants.</dd>
   *   <dt>int <var>id_charge_measure</var></dt><dd>Percent or money sign.</dd>
   *   <dt>int <var>is_appointment_all</var></dt><dd> `1` if all classes are selected, `0` - otherwise.</dd>
   *   <dt>int <var>is_class_all</var></dt><dd> `1` if all classes are selected, `0` - otherwise.</dd>
   *   <dt>int <var>is_enable_cancel_charge</var></dt><dd><tt>true</tt> if promotion penalties is enable, <tt>false</tt> otherwise.</dd>
   *   <dt>int <var>is_event_all</var></dt><dd> `1` if all events are selected, `0` - otherwise.</dd>
   *   <dt>int <var>is_login_type_all</var></dt><dd> `1` if all login types are selected, `0` - otherwise.</dd>
   *   <dt>int <var>is_resource_all</var></dt><dd> `1` if all resources are selected, `0` - otherwise.</dd>
   *   <dt>int <var>is_service_all</var></dt><dd> `1` if all services are selected, `0` - otherwise.</dd>
   * </dl>
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
  this.is_location_client_select = false;

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
  this.is_white_label = false;

  /**
   * The business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Config_BusinessConfigModel);

/**
 * @inheritDoc
 */
Wl_Business_Config_BusinessConfigModel.prototype.config=function()
{
  return {"a_field": {"a_business_policy": {"get": {"result": true}},"a_penalty": {"get": {"result": true}},"is_location_client_select": {"get": {"result": true}},"is_location_select": {"get": {"result": true}},"is_white_label": {"get": {"result": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Business_Config_BusinessConfigModel.instanceGet
 * @param {string} k_business The business key.
 * @returns {Wl_Business_Config_BusinessConfigModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */