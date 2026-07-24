/**
 * Returns the schedule and HTML for the Self Check-In Web App for the given user.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Reception_Application_ReceptionScheduleModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Reception_Application_ReceptionScheduleModel_a_class_a_resources_shared
   * @property {string} k_resource The resource key.
   * @property {string} s_title The resource title.
   */

  /**
   * @typedef {{}} Wl_Reception_Application_ReceptionScheduleModel_a_class_a_staff_all
   * @property {string} s_name_full The staff member's full name.
   */

  /**
   * @typedef {{}} Wl_Reception_Application_ReceptionScheduleModel_a_class
   * @property {Wl_Reception_Application_ReceptionScheduleModel_a_class_a_resources_shared} a_resources_shared A list of shared resources containing:
   * @property {Wl_Reception_Application_ReceptionScheduleModel_a_class_a_staff_all} a_staff_all A list of staff members instructing the service, containing:
   * @property {string} dtu_date The session date.
   * @property {string} html_class_js The name of the HTML class that JavaScript uses to display the icon, depending on the service type.
   * @property {number} i_duration The session duration in minutes.
   * @property {number} id_service Service ID. One of the {@link Wl_Service_ServiceSid} constants.
   * @property {boolean} is_auto If `true`, the session can be checked in automatically. Otherwise, this will be `false`.
   * @property {boolean} is_book If `true`, the client should be notified that the visit is booked. Otherwise, this will be `false`.
   * @property {boolean} is_wait If `true`, the client should be notified that they're on the wait list. Otherwise, this will be `false`.
   * @property {?string} k_appointment The appointment key. If `null`, this isn't an appointment.
   * @property {?string} k_class_period The class period key. If `null`, this isn't a class or event.
   * @property {?string} k_visit The visit key if the session has been checked in. Otherwise, this will be `null`.
   * @property {string} s_class The service name.
   * @property {string} s_duration The session duration, formatted by the business configuration.
   * @property {string} s_time The time the session takes place.
   */

  /**
   * A list of sessions to display with the following fields:
   *
   * @get result
   * @type {Wl_Reception_Application_ReceptionScheduleModel_a_class}
   */
  this.a_class = undefined;

  /**
   * @typedef {{}} Wl_Reception_Application_ReceptionScheduleModel_a_confirmation_data_a_payment_a_restrict
   * @property {number} i_limit The count of possible visits.
   * @property {number} i_remain The count of remaining visits.
   * @property {string} s_date The calendar period name.
   */

  /**
   * @typedef {{}} Wl_Reception_Application_ReceptionScheduleModel_a_confirmation_data_a_payment
   * @property {Wl_Reception_Application_ReceptionScheduleModel_a_confirmation_data_a_payment_a_restrict} a_restrict Calendar restrictions. A duration pass will only have elements if a restriction has been met. This contains:
   * @property {boolean} has_visit_past If `true`, the promotion was renewed in the past. Otherwise, this will be `false`.
   * @property {boolean} hide_visit_additional_info If `true`, additional info should be excluded. Otherwise, this will be `false`.
   * @property {number} i_book The count of upcoming uses of the promotion.
   * @property {number} i_book_duration Number of minutes used for upcoming visits.   Has sense only for promotions of program type {@link RsProgramTypeSid}.
   * @property {number} i_limit The promotion's visit count limit.
   * @property {number} i_remain The remaining count of visits.
   * @property {number} i_remain_duration Number of minutes left in this promotion.   Has sense only for promotions of program type {@link RsProgramTypeSid}.
   * @property {number} i_use Count of held uses in the pass.
   * @property {number} i_use_duration Number of minutes used for past visits by this promotion.   Has sense only for promotions of program type {@link RsProgramTypeSid}.
   * @property {number} i_visit_past The count of attended sessions before the last renewal.   If `0`, there were no sessions before last renewal or the promotion doesn't auto-renew.
   * @property {number} id_program_type The promotion's program type ID. One of {@link RsProgramTypeSid} constants.
   * @property {boolean} is_last_use If `true`, the promotion has a usage limit and no remaining visits. Otherwise, this will be `false`.
   * @property {boolean} is_package If `true`, the promotion is a package. Otherwise, this will be `false`.
   * @property {boolean} is_restrict_multiply If `true`, there's more than one calendar restriction on the pass. Otherwise, this will be `false`.
   * @property {string} k_login_promotion The login promotion key.
   * @property {string} s_remain_measure The formatted remaining duration on the promotion.
   * @property {boolean} show_remain If `true`, there's a rollover on the pass with calendar restrictions. Otherwise, this will be `false`.
   * @property {string} sid_program_type The promotion's program type SID.
   */

  /**
   * @typedef {{}} Wl_Reception_Application_ReceptionScheduleModel_a_confirmation_data_a_resources_not_shared
   * @property {number} i_index The busy resource index.
   * @property {string} s_title The resource name.
   */

  /**
   * @typedef {{}} Wl_Reception_Application_ReceptionScheduleModel_a_confirmation_data
   * @property {Wl_Reception_Application_ReceptionScheduleModel_a_confirmation_data_a_payment} a_payment Data for the promotion payment informational card. Each element contains:
   * @property {Wl_Reception_Application_ReceptionScheduleModel_a_confirmation_data_a_resources_not_shared} a_resources_not_shared The list of assets reserved individually at the time of booking containing:
   * @property {string} dl_renew The promotion renewal date in local time.
   * @property {number} i_visits The total workouts attended.
   * @property {string} s_expire The short format of the promotion expiration date.
   * @property {string} s_payment The payment method used to book (free, unpaid, single buy, or promotion name).
   * @property {string} s_renew The short format of the promotion renewal date.
   * @property {boolean} show_visits Determines whether to show the client's total workouts attended on the confirmation screen.
   */

  /**
   * Data for the confirmation screen with the following fields:
   *
   * @post result
   * @type {Wl_Reception_Application_ReceptionScheduleModel_a_confirmation_data}
   */
  this.a_confirmation_data = undefined;

  /**
   * All types of services that appear in the schedule.
   * Keys are constants from {@link Wl_Service_ServiceSid}. Values are the HTML classes associated with that service.
   *
   * @get result
   * @type {number[]}
   */
  this.a_schedule_class_all = undefined;

  /**
   * The date and time of the visit in UTC and MySQL format.
   *
   * @post post
   * @type {string}
   */
  this.dtu_date = "";

  /**
   * The confirmation template to be shown in the Self Check-In Web App for the selected user.
   *
   * @post result
   * @type {string}
   */
  this.html_confirmation = undefined;

  /**
   * The schedule to be shown in the Self Check-In Web App for the selected user.
   *
   * @get result
   * @type {string}
   */
  this.html_schedule = undefined;

  /**
   * The key of the appointment to check in.
   *
   * If `null`, this is class visit or gym visit.
   *
   * @post post
   * @type {?string}
   */
  this.k_appointment = null;

  /**
   * The business key, where the Self Check-In Web App is started.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The key of the class schedule to check in.
   *
   * If `null`, this is an appointment visit or gym visit.
   *
   * @post post
   * @type {?string}
   */
  this.k_class_period = null;

  /**
   * The location key, where the Self Check-In Web App is started.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_location = "";

  /**
   * The visit key, which was added or checked in.
   *
   * @post result
   * @type {string}
   */
  this.k_visit = undefined;

  /**
   * The key of the Self Check-In Web App.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.s_secret = "";

  /**
   * The key of the user to show the schedule for.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reception_Application_ReceptionScheduleModel);

/**
 * @inheritDoc
 */
Wl_Reception_Application_ReceptionScheduleModel.prototype.config=function()
{
  return {"a_field":{"a_class":{"get":{"result":true}},"a_confirmation_data":{"post":{"result":true}},"a_schedule_class_all":{"get":{"result":true}},"dtu_date":{"post":{"post":true}},"html_confirmation":{"post":{"result":true}},"html_schedule":{"get":{"result":true}},"k_appointment":{"post":{"post":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_class_period":{"post":{"post":true}},"k_location":{"get":{"get":true},"post":{"get":true}},"k_visit":{"post":{"result":true}},"s_secret":{"get":{"get":true},"post":{"get":true}},"uid":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * Returns the schedule and HTML for the Self Check-In Web App for the given user.
 *
 * Returns the rendered schedule HTML, a structured list of upcoming sessions, and a map of service type
 * HTML classes for the authenticated user at the given location.
 *
 * @function
 * @name Wl_Reception_Application_ReceptionScheduleModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Performs check-in for the given user and returns the confirmation HTML and data.
 *
 * Books or checks the user into the specified class period or appointment, then returns confirmation HTML
 * and structured data including payment info, assigned assets, and visit counts.
 *
 * @function
 * @name Wl_Reception_Application_ReceptionScheduleModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
