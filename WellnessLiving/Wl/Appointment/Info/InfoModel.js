/**
 * An endpoint that displays appointment information.
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
   * @property {string} dt_date_local The start date and time of the next appointment in the location's time zone in MySQL format.
   * @property {string} k_appointment The key of the next appointment.
   */

  /**
   * Data for the next appointment data (or an empty array if there no future appointments):
   *
   * @get result
   * @type {Wl_Appointment_Info_InfoModel_a_next}
   */
  this.a_next = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Info_InfoModel_a_previous
   * @property {string} dt_date_local The start date and time of the previous appointment in local time in MySQL format.
   * @property {string} k_appointment The key of the previous appointment.
   */

  /**
   * Data for the previous appointment data (or an empty array if there no future appointments):
   *
   * @get result
   * @type {Wl_Appointment_Info_InfoModel_a_previous}
   */
  this.a_previous = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Info_InfoModel_a_question
   * @property {int} i_size The size of rows for answer.
   * @property {bool} is_multiple `true` if <var>i_size</var> greater than 1, `false` otherwise. This can be empty if an answer is loaded.
   * @property {string} s_answer The answer for <var>s_question</var>.
   * @property {string} s_key The answer key.
   * @property {string} s_question The question.
   */

  /**
   * A list of questions and answers.
   *
   * @get result
   * @type {Wl_Appointment_Info_InfoModel_a_question[]}
   */
  this.a_question = [];


  /**
   * @typedef {{}} Wl_Appointment_Info_InfoModel_a_resource
   * @property {int} i_color_border Border color for schedule. In 24-bit representation of a hexadecimal color..
   * @property {int} i_color_background Background color for schedule. In 24-bit representation of a hexadecimal color..
   * @property {string} k_resource Resource key.
   * @property {string} k_resource_type TResource type key.
   * @property {string} s_resource Name of the resource.
   * @property {string} s_resource_type Name of the resource type.
   */

  /**
   * A list of assets used by this appointment.
   *
   * @get result
   * @type {Wl_Appointment_Info_InfoModel_a_resource[]}
   */
  this.a_resource = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Info_InfoModel_a_shop_product_option
   * @property {[]} a_login_product List of purchased products. Empty if no products purchased.
   * @property {?string} k_login_product Deprecated and always have `null` value.
   * @property {string} k_shop_product The primary key of the add-on.
   * @property {string} k_shop_product_option The primary key of the shop product option. T-shirts can have an option like size or color.
   * @property {string} m_amount The add-on price.
   */

  /**
   * A list of appointment add-ons.
   *
   * @get result
   * @type {Wl_Appointment_Info_InfoModel_a_shop_product_option[]}
   */
  this.a_shop_product_option = undefined;

  /**
   * The date/time of the appointment in the location's time zone.
   *
   * @get result
   * @type {string}
   */
  this.dt_date_local = undefined;

  /**
   * The appointment duration (in minutes).
   *
   * @get result
   * @type {?number}
   */
  this.i_duration = null;

  /**
   * The index of the booked asset.
   *
   * @get result
   * @type {?number}
   */
  this.i_index = null;

  /**
   * The status of the appointment payment. One of the {@link RsAppointmentPaySid} constants.
   *
   * @get result
   * @type {number}
   */
  this.id_appointment_pay = undefined;

  /**
   * The class identifier to get information for.
   *
   * @get get
   * @type {string}
   */
  this.k_appointment = "0";

  /**
   * The Purchase Option used to purchase the appointment.
   *
   * @get result
   * @type {string}
   */
  this.k_login_promotion = undefined;

  /**
   * The asset key.
   *
   * @get result
   * @type {?string}
   */
  this.k_resource = null;

  /**
   * The asset category key.
   *
   * @get result
   * @type {?string}
   */
  this.k_resource_type = null;

  /**
   * The service key.
   *
   * @get result
   * @type {?string}
   */
  this.k_service = null;

  /**
   * The service category key.
   *
   * @get result
   * @type {?string}
   */
  this.k_service_category = null;

  /**
   * The staff member conducting the appointment.
   *
   * @get result
   * @type {string}
   */
  this.k_staff = undefined;

  /**
   * The title of the appointment.
   *
   * @get result
   * @type {string}
   */
  this.text_title = undefined;

  /**
   * The user for whom the appointment was booked.
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
  return {"a_field": {"a_next": {"get": {"result": true}},"a_previous": {"get": {"result": true}},"a_question": {"get": {"result": true}},"a_resource": {"get": {"result": true}},"a_shop_product_option": {"get": {"result": true}},"dt_date_local": {"get": {"result": true}},"i_duration": {"get": {"result": true}},"i_index": {"get": {"result": true}},"id_appointment_pay": {"get": {"result": true}},"k_appointment": {"get": {"get": true}},"k_login_promotion": {"get": {"result": true}},"k_resource": {"get": {"result": true}},"k_resource_type": {"get": {"result": true}},"k_service": {"get": {"result": true}},"k_service_category": {"get": {"result": true}},"k_staff": {"get": {"result": true}},"text_title": {"get": {"result": true}},"uid_appointment": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Info_InfoModel.instanceGet
 * @param {string} k_appointment The class identifier to get information for.
 * @returns {Wl_Appointment_Info_InfoModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */