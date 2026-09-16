/**
 * Gets information about the appointment and wait list.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_WaitList_AppointmentWaitListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Appointment_WaitList_AppointmentWaitListModel_a_appointment
   * @property {string} dtl_session_end Local end datetime of the appointment.
   * @property {string} dtl_session_start Local start datetime of the appointment.
   * @property {number} i_wait_list_limit Maximum number of clients on wait list for the appointment.
   * @property {boolean} is_service `true` if the appointment is reserved for service, `false` if for asset.
   * @property {boolean} is_wait_list_limit `true` to use service specific wait list limit, `false` to use the limit from default policies.
   * @property {string} text_appointment Service or asset title
   * @property {string} text_location Location title.
   * @property {?string} text_staff Staff name. `null` if the appointment is reserved for asset.
   */

  /**
   * Information about the appointment. Has next structure:
   *
   * @get result
   * @type {Wl_Appointment_WaitList_AppointmentWaitListModel_a_appointment}
   */
  this.a_appointment = undefined;

  /**
   * @typedef {{}} Wl_Appointment_WaitList_AppointmentWaitListModel_a_wait_a_addon
   * @property {string} k_shop_product_options Key of the shop product option.
   * @property {string} text_title Title of the product.
   */

  /**
   * @typedef {{}} Wl_Appointment_WaitList_AppointmentWaitListModel_a_wait_a_answer
   * @property {string} text_answer Answer.
   * @property {string} text_question Question.
   */

  /**
   * @typedef {{}} Wl_Appointment_WaitList_AppointmentWaitListModel_a_wait_a_resource
   * @property {string} text_resource Title of the resource.
   * @property {string} text_resource_type Title of the resource type.
   */

  /**
   * @typedef {{}} Wl_Appointment_WaitList_AppointmentWaitListModel_a_wait_a_note
   * @property {number} id_note Type of note. One of {@link Wl_Visit_Note_Sid_NoteSid} constants.
   * @property {string} sid_icon Icon class for a note by note type.
   */

  /**
   * @typedef {{}} Wl_Appointment_WaitList_AppointmentWaitListModel_a_wait_a_user
   * @property {string} text_mail User email. Empty string if current user has no access to this information.
   * @property {string} text_name User name.
   * @property {string} text_phone User phone. Empty string if the user has no phone or current user has not access to this information.
   * @property {string} uid User key.
   * @property {string} url_logo Link to user logo.
   * @property {string} url_notify_mail Link to get form for send mail to user.
   * @property {string} url_notify_sms Link to get form for send sms to user.
   * @property {string} url_profile Link to user profile.
   */

  /**
   * @typedef {{}} Wl_Appointment_WaitList_AppointmentWaitListModel_a_wait
   * @property {Wl_Appointment_WaitList_AppointmentWaitListModel_a_wait_a_addon} a_addon A list of addons. Each element has next structure:
   * @property {Wl_Appointment_WaitList_AppointmentWaitListModel_a_wait_a_answer} a_answer List of answers for the appointment question. Each element has next structure:
   * @property {Wl_Appointment_WaitList_AppointmentWaitListModel_a_wait_a_note} a_note Information for visit note (SOAP and QUICK types):
   * @property {Wl_Appointment_WaitList_AppointmentWaitListModel_a_wait_a_resource} a_resource List of resources for booked service. Each element has next structure:
   * @property {Wl_Appointment_WaitList_AppointmentWaitListModel_a_wait_a_user} a_user Information about user:
   * @property {string} dtl_book Local datetime when the visit was booked (in MySQL format).
   * @property {boolean} is_free Whether the visit is free. Does not need a pay.
   * @property {boolean} is_paid Whether the visit is paid.
   * @property {boolean} is_wait_confirm Whether is awaiting for user confirmation.
   * @property {string} k_visit Visit key.  table.
   */

  /**
   * List of visits in wait list.
   *
   * @get result
   * @type {Wl_Appointment_WaitList_AppointmentWaitListModel_a_wait[]}
   */
  this.a_wait = undefined;

  /**
   * Whether or not to send email notification.
   *
   * `true` - enable check-in by email;
   * `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_mail = undefined;

  /**
   * Whether or not to send push notification.
   *
   * `true` - enable check-in by push;
   * `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_push = undefined;

  /**
   * Whether or not to send SMS notification.
   *
   * `true` - enable check-in by sms;
   * `false` - otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_sms = undefined;

  /**
   * Appointment key.
   *
   * @get get
   * @type {string}
   */
  this.k_appointment = "";

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_WaitList_AppointmentWaitListModel);

/**
 * @inheritDoc
 */
Wl_Appointment_WaitList_AppointmentWaitListModel.prototype.config=function()
{
  return {"a_field":{"a_appointment":{"get":{"result":true}},"a_wait":{"get":{"result":true}},"is_mail":{"get":{"result":true}},"is_push":{"get":{"result":true}},"is_sms":{"get":{"result":true}},"k_appointment":{"get":{"get":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * Gets information about the appointment and wait list.
 *
 * Returns the appointment or asset title, location, staff, and time slot, together with the
 * ordered list of visits currently on the wait list, each with client, note, addon, resource
 * and answer details. Also returns which notification channels are enabled for wait list mail.
 *
 * @function
 * @name Wl_Appointment_WaitList_AppointmentWaitListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
