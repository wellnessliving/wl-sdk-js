/**
 * Gets information about appointment.
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
   * @property {boolean} can_view `true` if employees (staff) can view this appointment, `false` otherwise.
   * @property {string} dt_date_local Start date and time of the next appointment in local time in MySQL format.
   * @property {boolean} has_note `true` if visit has a note, `false` otherwise.
   * @property {number} i_duration Duration of the next appointment in minutes.
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
   * @property {boolean} can_view `true` if employees (staff) can view this appointment, `false` otherwise.
   * @property {string} dt_date_local Start date and time of the previous appointment in local time in MySQL format.
   * @property {boolean} has_note `true` if visit has a note, `false` otherwise.
   * @property {number} i_duration Duration of the previous appointment in minutes.
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
  this.a_question = undefined;

  /**
   * @typedef {{}} Wl_Appointment_Info_InfoModel_a_repeat
   * @property {number[]} a_day Days of week to repeat appointment. Constants from {@link ADateWeekSid}.
   * @property {string} dl_edit_from Start date for range edit in location timezone.   This is a current appointment date.
   * @property {string} dl_edit_to End date for range edit in location timezone.   This is a date of last created appointment in repeatable group.
   * @property {string} dl_repeat_end Date when the repeat cycle stops, in location timezone. Empty if the repeat cycle does not stop at a certain date.
   * @property {number} i_repeat_count Number of occurrences after that the repeat cycle stops. `0` if the repeat cycle does not stop after a certain number of occurrences.
   * @property {number} i_repeat_period Frequency of the repeats. For example, `2` for every second week.
   * @property {number} id_repeat_duration Measurement unit of `i_repeat_period`. One of {@link ADurationSid} constants.
   * @property {number} id_repeat_end Type of repeat cycle end. One of {@link RsRepeatEndSid} constants.
   * @property {boolean} is_month `true` if the appointment repeats monthly at the same date. `false` if the appointment repeats monthly at the same week day or does not repeat monthly.
   * @property {string} s_time Current appointment local start time in MySQL time format.  This time is intended to be used to fill in empty fields on the form.  <p><b>WARNING!</b></p>  <p>If the session you are starting the reschedule with was previously changed, its time may NOT match  the time of the remaining sessions.</p>
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
  this.a_repeat = undefined;

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
   * @property {Wl_Appointment_Info_InfoModel_a_shop_product_option_a_login_product} a_login_product List of purchased product keys. Empty if no products were purchased. Each element:
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
   * Status of appointment payment. One of {@link RsAppointmentPaySid} constants.
   *
   * @get result
   * @see RsAppointmentPaySid
   * @type {number}
   */
  this.id_appointment_pay = undefined;

  /**
   * Appointment key to get information for.
   *
   * @get get
   * @type {string}
   */
  this.k_appointment = "";

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
  return {"a_field":{"a_next":{"get":{"result":true}},"a_previous":{"get":{"result":true}},"a_question":{"get":{"result":true}},"a_repeat":{"get":{"result":true}},"a_resource":{"get":{"result":true}},"a_shop_product_option":{"get":{"result":true}},"dt_date_local":{"get":{"result":true}},"i_duration":{"get":{"result":true}},"i_index":{"get":{"result":true}},"id_appointment_pay":{"get":{"result":true}},"k_appointment":{"get":{"get":true}},"k_location":{"get":{"result":true}},"k_login_promotion":{"get":{"result":true}},"k_resource":{"get":{"result":true}},"k_resource_type":{"get":{"result":true}},"k_service":{"get":{"result":true}},"k_service_category":{"get":{"result":true}},"k_session_pass":{"get":{"result":true}},"k_staff":{"get":{"result":true}},"text_title":{"get":{"result":true}},"uid_appointment":{"get":{"result":true}},"uid_staff":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Info_InfoModel.instanceGet
 * @param {string} k_appointment Appointment key to get information for.
 * @returns {Wl_Appointment_Info_InfoModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets information about appointment.
 *
 * Returns detailed information about the specified appointment, including service details, staff member,
 * date and time in the location's timezone, booking status, client information, and any associated
 * assets or add-ons. Access is validated against the current user's permissions.
 *
 * @function
 * @name Wl_Appointment_Info_InfoModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
