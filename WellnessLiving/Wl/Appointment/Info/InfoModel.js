/**
 * Appointment information.
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
   * @property {boolean} has_note `true` if visit has a note, `false` otherwise.
   * @property {number} i_duration Duration of the next appointment in minutes.
   * @property {boolean} can_view `true` if employees (staff) can view this appointment, `false` otherwise.
   * @property {string} k_appointment Next appointment key.
   * @property {string} k_visit Visit key of next appointment.
   * @property {string} text_appointment_title Title of next appointment.
   * @property {string} text_staff_name Full staff name or empty if no staff assigned.
   */

  /**
   * Next appointment data, or empty array if there are no appointments in the future:
   *
   * @get result
   * @type {Wl_Appointment_Info_InfoModel_a_next}
   */
  this.a_next = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Info_InfoModel_a_previous
   * @property {string} dt_date_local Start date and time of the previous appointment in local time in MySQL format.
   * @property {boolean} has_note `true` if visit has a note, `false` otherwise.
   * @property {number} i_duration Duration of the previous appointment in minutes.
   * @property {boolean} can_view `true` if employees (staff) can view this appointment, `false` otherwise.
   * @property {string} k_appointment Previous appointment key.
   * @property {string} k_visit Visit key of previous appointment.
   * @property {string} text_appointment_title Title of previous appointment.
   * @property {string} text_staff_name Full staff name or empty if no staff assigned.
   */

  /**
   * Previous appointment data, or empty array if there are no appointments in the past:
   *
   * @get result
   * @type {Wl_Appointment_Info_InfoModel_a_previous}
   */
  this.a_previous = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Info_InfoModel_a_question
   * @property {number} i_size Size of rows for answer.
   * @property {boolean} is_multiple `true` if `i_size` greater than 1, `false` otherwise. Can be empty if answer is loaded.
   * @property {string} s_answer Answer for `s_question`.
   * @property {string} s_key Answer key.
   * @property {string} s_question Question.
   */

  /**
   * List of questions and answers:
   *
   * @get result
   * @type {Wl_Appointment_Info_InfoModel_a_question[]}
   */
  this.a_question = [];

  /**
   * @typedef {{}} Wl_Appointment_Info_InfoModel_a_repeat
   * @property {number[]} a_day Days of week to repeat appointment. Constants from {@link ADateWeekSid}.
   * @property {string} dl_date Current appointment date in location timezone in MySQL date format.
   * @property {string} dl_edit_from Start date for range edit in location timezone in MySQL date format.
   * @property {string} dl_edit_to End date for range edit in location timezone in MySQL date format.
   * @property {string} s_time Current appointment local start time in MySQL time format.
   */

  /**
   * Repeat settings for appointment reschedule.
   *
   * Empty array for non-recurring appointment.
   *
   * Has next keys:
   *
   * @get result
   * @type {Wl_Appointment_Info_InfoModel_a_repeat}
   */
  this.a_repeat = {};

  /**
   * @typedef {{}} Wl_Appointment_Info_InfoModel_a_resource
   * @property {number} i_color_background Background color of the asset as an integer (RGB).
   * @property {number} i_color_border Border color of the asset as an integer (RGB).
   * @property {number} i_index Index of the booked asset slot.
   * @property {boolean} is_remove `true` if the asset was removed from the booking, `false` otherwise.
   * @property {string} k_resource Asset key.
   * @property {string} k_resource_type Asset category key.
   * @property {string} s_resource Asset name.
   * @property {string} s_resource_type Asset category name.
   * @property {string} text_resource_alias Display alias for the asset slot, if configured.
   */

  /**
   * List of assets used by this appointment. Each element contains:
   *
   * @get result
   * @type {Wl_Appointment_Info_InfoModel_a_resource[]}
   */
  this.a_resource = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Info_InfoModel_a_shop_product_option_a_login_product
   * @property {string} k_login_product Purchased product key.
   */
  /**
   * @typedef {{}} Wl_Appointment_Info_InfoModel_a_shop_product_option
   * @property {Wl_Appointment_Info_InfoModel_a_shop_product_option_a_login_product[]} a_login_product List of purchased product keys. Empty if no products were purchased. Each element:
   * @property {string} k_login_product Deprecated, always `null`.
   * @property {string} k_shop_product Primary key of add-on.
   * @property {string} k_shop_product_option Add-on option.
   * @property {string} m_amount Price that it adds to an appointment.
   */

  /**
   * List of appointment add-ons. Every element has next keys:
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
   * Status of appointment payment. One of {@link Wl_Appointment_PaySid} constants.
   *
   * @get result
   * @type {number}
   */
  this.id_appointment_pay = undefined;

  /**
   * Appointment key to get information for.
   *
   * @get get
   * @type {string}
   */
  this.k_appointment = "0";

  /**
   * Location key.
   *
   * @get result
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * Purchased promotion which provides this appointment.
   *
   * @get result
   * @type {?string}
   */
  this.k_login_promotion = null;

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
   * Purchased drop-in which provides this appointment.
   *
   * @get result
   * @type {?string}
   */
  this.k_session_pass = null;

  /**
   * Staff member who conducts this appointment.
   *
   * Deprecated: returned only for a limited list of third-party apps to keep backward compatibility.
   * Use `uid_staff` instead.
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
   * User for whom this appointment was booked.
   *
   * @get result
   * @type {string}
   */
  this.uid_appointment = undefined;

  /**
   * Staff member who conducts this appointment.
   *
   * @get result
   * @type {?string}
   */
  this.uid_staff = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Info_InfoModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Info_InfoModel.prototype.config=function()
{
  return {"a_field": {"a_next": {"get": {"result": true}},"a_previous": {"get": {"result": true}},"a_question": {"get": {"result": true}},"a_repeat": {"get": {"result": true}},"a_resource": {"get": {"result": true}},"a_shop_product_option": {"get": {"result": true}},"dt_date_local": {"get": {"result": true}},"i_duration": {"get": {"result": true}},"i_index": {"get": {"result": true}},"id_appointment_pay": {"get": {"result": true}},"k_appointment": {"get": {"get": true}},"k_location": {"get": {"result": true}},"k_login_promotion": {"get": {"result": true}},"k_resource": {"get": {"result": true}},"k_resource_type": {"get": {"result": true}},"k_service": {"get": {"result": true}},"k_service_category": {"get": {"result": true}},"k_session_pass": {"get": {"result": true}},"k_staff": {"get": {"result": true}},"text_title": {"get": {"result": true}},"uid_appointment": {"get": {"result": true}},"uid_staff": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Info_InfoModel.instanceGet
 * @param {string} k_appointment Appointment key to get information for.
 * @returns {Wl_Appointment_Info_InfoModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */