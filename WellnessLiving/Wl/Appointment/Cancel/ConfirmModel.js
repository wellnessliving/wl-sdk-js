/**
 * Returns data for appointment cancellation confirm.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Cancel_ConfirmModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_appointment";

  /**
   * @typedef {{}} Wl_Appointment_Cancel_ConfirmModel_a_appointment_list
   * @property {string} dtl_start Appointment start date.
   * @property {string} k_appointment Appointment key.
   * @property {string} text_staff Staff name.
   */

  /**
   * Information about the appointment.
   *
   * `null` in case of cancellation of single appointment. Otherwise a list of the recurring
   *  appointments within the selected date range:
   *
   * @get result
   * @post get
   * @type {?Wl_Appointment_Cancel_ConfirmModel_a_appointment_list}
   */
  this.a_appointment_list = null;

  /**
   * End date of period for appointments cancellation.
   *
   * `null` in case of cancellation of single appointment.
   *
   * @get get,result
   * @post get
   * @type {?string}
   */
  this.dl_end = null;

  /**
   * Start date of period for appointments cancellation.
   *
   * `null` in case of cancellation of single appointment.
   *
   * @get get,result
   * @post get
   * @type {?string}
   */
  this.dl_start = null;

  /**
   * Max date of period for appointments cancellation.
   *
   * `null` in case of cancellation of single appointment.
   *
   * @get result
   * @post get
   * @type {?string}
   */
  this.dtl_max = null;

  /**
   * Min date of period for appointments cancellation.
   *
   * `null` in case of cancellation of single appointment.
   *
   * @get result
   * @post get
   * @type {?string}
   */
  this.dtl_min = null;

  /**
   * Amount to be charged for the user.
   *
   * `null` if specified visit is not the blame, according business late cancel and no shows rules.
   *
   * @get result
   * @type {?string}
   */
  this.html_fee_amount = null;

  /**
   * Count of selected appointments during recurring appointments cancellation.
   *
   * `null` in case of cancellation of single appointment.
   *
   * @get result
   * @type {?number}
   */
  this.i_appointment_selected = null;

  /**
   * Type of the blame, one of {@link Wl_Business_Policy_ChargeSid} constants.
   *
   * `0` means blame is not configured.
   *
   * @get result
   * @see Wl_Business_Policy_ChargeSid
   * @type {number}
   */
  this.id_charge = undefined;

  /**
   * Cancelling status. One of {@link Wl_Visit_VisitSid} constants.
   * Zero when status is choosing on form (opening form from schedule list view).
   *
   * @get get
   * @post get
   * @see Wl_Visit_VisitSid
   * @type {number}
   */
  this.id_visit = 0;

  /**
   * Is it recurring appointment cancellation for specific appointments.
   * `true` - for specific appointments; `false` - appointments going forward.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.is_appointment_specific = false;

  /**
   * A staff decision to charge or not charge a penalty when a customer meets late cancel/no-show requirements.
   *
   * @post get
   * @type {boolean}
   */
  this.is_charge_fee = true;

  /**
   * Is mail notification should be sent by default.
   *
   * @get result
   * @post get
   * @type {boolean}
   */
  this.is_inform_mail = false;

  /**
   * Is push notification should be sent by default.
   *
   * @get result
   * @post get
   * @type {boolean}
   */
  this.is_inform_push = false;

  /**
   * Is SMS notification should be sent by default.
   *
   * @get result
   * @post get
   * @type {boolean}
   */
  this.is_inform_sms = false;

  /**
   * Is it recurring appointment cancellation.
   *
   * `false` in case of cancellation of single appointment.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.is_recurring = false;

  /**
   * Key of the cancelling appointment.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_appointment = "";

  /**
   * Key of the business.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Location key of cancelling appointment.
   *
   * @get result
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * Key of the live mail pattern.
   *
   * @post get
   * @type {string}
   */
  this.k_mail_pattern_live = "";

  /**
   * Key of the service of appointment.
   * 'null' when cancelling asset booking.
   *
   * @get result
   * @type {?string}
   */
  this.k_service = null;

  /**
   * Key of the visit to cancel.
   * Empty when visit key not known (opening form from schedule list view).
   *
   * @get get,result
   * @post get
   * @type {string}
   */
  this.k_visit = "";

  /**
   * Amount to be charged for the user.
   *
   * `null` if specified visit is not the blame, according business late cancel and no shows rules.
   *
   * @get result
   * @post get
   * @type {?string}
   */
  this.m_fee_amount = null;

  /**
   * Notification to be sent. One of {@link RsMailSid} constants.
   *
   * @get result
   * @type {string}
   */
  this.sid_mail = undefined;

  /**
   * Name of client which appointment is cancelling.
   *
   * @get result
   * @type {string}
   */
  this.text_client_name = undefined;

  /**
   * Cancelling reason.
   *
   * @post get
   * @type {string}
   */
  this.text_reason = "";

  /**
   * Cancelling status name.
   *
   * @get result
   * @type {string}
   */
  this.text_status = undefined;

  /**
   * Appointment title.
   *
   * `null` in case of cancellation of single appointment.
   *
   * @get result
   * @type {?string}
   */
  this.text_title = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Cancel_ConfirmModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Cancel_ConfirmModel.prototype.config=function()
{
  return {"a_field":{"a_appointment_list":{"get":{"result":true},"post":{"get":true}},"dl_end":{"get":{"get":true,"result":true},"post":{"get":true}},"dl_start":{"get":{"get":true,"result":true},"post":{"get":true}},"dtl_max":{"get":{"result":true},"post":{"get":true}},"dtl_min":{"get":{"result":true},"post":{"get":true}},"html_fee_amount":{"get":{"result":true}},"i_appointment_selected":{"get":{"result":true}},"id_charge":{"get":{"result":true}},"id_visit":{"get":{"get":true},"post":{"get":true}},"is_appointment_specific":{"get":{"get":true},"post":{"get":true}},"is_charge_fee":{"post":{"get":true}},"is_inform_mail":{"get":{"result":true},"post":{"get":true}},"is_inform_push":{"get":{"result":true},"post":{"get":true}},"is_inform_sms":{"get":{"result":true},"post":{"get":true}},"is_recurring":{"get":{"get":true},"post":{"get":true}},"k_appointment":{"get":{"get":true},"post":{"get":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_location":{"get":{"result":true}},"k_mail_pattern_live":{"post":{"get":true}},"k_service":{"get":{"result":true}},"k_visit":{"get":{"get":true,"result":true},"post":{"get":true}},"m_fee_amount":{"get":{"result":true},"post":{"get":true}},"sid_mail":{"get":{"result":true}},"text_client_name":{"get":{"result":true}},"text_reason":{"post":{"get":true}},"text_status":{"get":{"result":true}},"text_title":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Cancel_ConfirmModel.instanceGet
 * @param {string} k_appointment Key of the cancelling appointment.
 * @returns {Wl_Appointment_Cancel_ConfirmModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns data for appointment cancellation confirm.
 *
 * Validates access to the appointment and business, then loads the notification pattern,
 * cancellation status, and blame or fee information for the appointment being cancelled. For
 * recurring appointments, also loads the date range and the list of individual appointments
 * available for cancellation.
 *
 * @function
 * @name Wl_Appointment_Cancel_ConfirmModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Cancels appointment.
 *
 * Validates access to the appointment and business, then saves the notification pattern for the
 * cancellation. For recurring appointments, cancels every appointment in the selected date
 * range through an asynchronous visit change, optionally records the cancellation reason, and
 * removes the repeat-generation task when an entire endless series is cancelled. For a single
 * appointment, delegates the cancellation to `post()`.
 *
 * @function
 * @name Wl_Appointment_Cancel_ConfirmModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
