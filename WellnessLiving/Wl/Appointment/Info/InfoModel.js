/**
 * Appointment information.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Info_InfoModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_appointment";

  /**
   * @typedef {{}} Wl_Appointment_Info_InfoModel_a_next
   * @property {string} dt_date_local Start date and time of the next appointment in local time in MySQL format.
   * @property {string} k_appointment Next appointment ID, primary key in {@link \RsAppointmentSql}.
   */

  /**
   * Next appointment data, or empty array if there no appointments in future:
   * <dl>
   *   <dt>
   *     string <var>dt_date_local</var>
   *   </dt>
   *   <dd>
   *     Start date and time of the next appointment in local time in MySQL format.
   *   </dd>
   *   <dt>
   *     string <var>k_appointment</var>
   *   </dt>
   *   <dd>
   *     Next appointment ID, primary key in {@link \RsAppointmentSql}.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Info_InfoModel_a_next}
   */
  this.a_next = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Info_InfoModel_a_previous
   * @property {string} dt_date_local Start date and time of the previous appointment in local time in MySQL format.
   * @property {string} k_appointment Previous appointment ID, primary key in {@link \RsAppointmentSql}.
   */

  /**
   * Previous appointment data, or empty array if there no appointments in past:
   * <dl>
   *   <dt>
   *     string <var>dt_date_local</var>
   *   </dt>
   *   <dd>
   *     Start date and time of the previous appointment in local time in MySQL format.
   *   </dd>
   *   <dt>
   *     string <var>k_appointment</var>
   *   </dt>
   *   <dd>
   *     Previous appointment ID, primary key in {@link \RsAppointmentSql}.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Info_InfoModel_a_previous}
   */
  this.a_previous = undefined;

  /**
   * List of assets which are used by this appointment.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_resource = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Info_InfoModel_a_shop_product_option
   * @property {?string} k_login_product Primary key of purchased add-on. <tt>null</tt> if add-on is not purchased.
   * @property {string} k_shop_product Primary key of add-on.
   * @property {string} k_shop_product_option Primary key in {@link \RsShopProductOptionSql} table.
   * @property {string} m_amount Price that it adds to an appointment.
   */

  /**
   * List of appointment add-ons. Every element has next keys:
   * <dl>
   *   <dt>
   *     string|null <var>k_login_product</var>
   *   </dt>
   *   <dd>
   *     Primary key of purchased add-on. <tt>null</tt> if add-on is not purchased.
   *   </dd>
   *   <dt>
   *     string <var>k_shop_product</var>
   *   </dt>
   *   <dd>
   *     Primary key of add-on.
   *   </dd>
   *   <dt>
   *     string <var>k_shop_product_option</var>
   *   </dt>
   *   <dd>
   *     Primary key in {@link \RsShopProductOptionSql} table.
   *   </dd>
   *   <dt>
   *     string <var>m_amount</var>
   *   </dt>
   *   <dd>
   *     Price that it adds to an appointment.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Appointment_Info_InfoModel_a_shop_product_option[]}
   */
  this.a_shop_product_option = undefined;

  /**
   * Date/time of appointment in location timezone.
   *
   * @get result
   * @type {string}
   */
  this.dt_date_local = undefined;

  /**
   * Appointment duration (in minutes).
   *
   * @get result
   * @type {?number}
   */
  this.i_duration = null;

  /**
   * Index of booked asset.
   *
   * @get result
   * @type {?number}
   */
  this.i_index = null;

  /**
   * Status of appointment payment. One of {@link \RsAppointmentPaySid} constants.
   *
   * @get result
   * @type {number}
   */
  this.id_appointment_pay = undefined;

  /**
   * Class identifier to get information for. Primary key in {@link RsClassSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_appointment = "0";

  /**
   * Purchased promotion which provides this appointment. Primary key in {@link \RsLoginPromotionSql} table.
   *
   * @get result
   * @type {string}
   */
  this.k_login_promotion = undefined;

  /**
   * Asset key.
   *
   * @get result
   * @type {?string}
   */
  this.k_resource = null;

  /**
   * Asset category key.
   *
   * @get result
   * @type {?string}
   */
  this.k_resource_type = null;

  /**
   * Service key.
   *
   * @get result
   * @type {?string}
   */
  this.k_service = null;

  /**
   * Service category key.
   *
   * @get result
   * @type {?string}
   */
  this.k_service_category = null;

  /**
   * Staff member who conducts this appointment. Primary key in {@link \RsStaffSql} table.
   *
   * @get result
   * @type {string}
   */
  this.k_staff = undefined;

  /**
   * Title of the appointment.
   *
   * @get result
   * @type {string}
   */
  this.text_title = undefined;

  /**
   * User for whom this appointment was booked. Primary key in {@link \PassportLoginSql} table.
   *
   * @get result
   * @type {string}
   */
  this.uid_appointment = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Info_InfoModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Info_InfoModel.prototype.config=function()
{
  return {"a_field": {"a_next": {"get": {"result": true}},"a_previous": {"get": {"result": true}},"a_resource": {"get": {"result": true}},"a_shop_product_option": {"get": {"result": true}},"dt_date_local": {"get": {"result": true}},"i_duration": {"get": {"result": true}},"i_index": {"get": {"result": true}},"id_appointment_pay": {"get": {"result": true}},"k_appointment": {"get": {"get": true}},"k_login_promotion": {"get": {"result": true}},"k_resource": {"get": {"result": true}},"k_resource_type": {"get": {"result": true}},"k_service": {"get": {"result": true}},"k_service_category": {"get": {"result": true}},"k_staff": {"get": {"result": true}},"text_title": {"get": {"result": true}},"uid_appointment": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Info_InfoModel.instanceGet
 * @param {string} k_appointment Class identifier to get information for. Primary key in {@link RsClassSql} table.
 * @returns {Wl_Appointment_Info_InfoModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */