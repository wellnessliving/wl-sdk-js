/**
 * Gets visit status.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Visit_VisitStatusModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_visit,k_business";

  /**
   * @typedef {{}} Wl_Visit_VisitStatusModel_a_cancel_a_penalty
   * @property {boolean} is_flat `true` in a case of flat penalty type; `false` in a case of percentage penalty type.
   * @property {string} k_currency Currency .
   * @property {string} m_amount Penalty amount.
   */

  /**
   * @typedef {{}} Wl_Visit_VisitStatusModel_a_cancel
   * @property {?Wl_Visit_VisitStatusModel_a_cancel_a_penalty} a_penalty `null` if penalty must be not applied.
   * @property {boolean} can_cancel `true` if the booking can be canceled online by the specified user, `false` otherwise.
   * @property {boolean} is_flag `true` if the client's account will be flagged instead of charging a monetary fee, `false` otherwise.
   * @property {boolean} is_late `true` if the cancellation would be considered a late cancel, `false` otherwise.
   * @property {boolean} is_refund `true` if the visit credit (from the purchase option used to book) will be returned    to the user's profile after cancellation, `false` otherwise.
   */

  /**
   * Information about whether the given user can cancel an online booking and what
   * consequences the cancellation would have:
   *
   * @get result
   * @type {Wl_Visit_VisitStatusModel_a_cancel}
   */
  this.a_cancel = undefined;

  /**
   * An array of service resources.
   *
   * The key refers to the `k_resource_type`. 
   * The value is an array with the following key: `k_resource`. .
   * The array element contains a nested array with `i_index` and `i_quantity`. .
   *
   * This will be empty if not set yet.
   *
   * @get result
   * @type {?string[]}
   */
  this.a_resource = null;

  /**
   * @typedef {{}} Wl_Visit_VisitStatusModel_a_resource_alias
   * @property {number} i_index Index of the resource on the layout.
   * @property {number} i_quantity Quantity of the resource on the layout.
   * @property {string} k_resource Resource .
   * @property {string} k_resource_type Resource type .
   * @property {string} text_alias Resource's custom name (alias) on the layout.
   * @property {string} text_title Resource's title.
   */

  /**
   * An array of service resources.
   *
   * Contains an extended data set, as well as a different format than [VisitStatusApi](/Wl/Visit/VisitStatus.json).
   *
   * Each element contains the following set of data:
   *
   * @get result
   * @type {?Wl_Visit_VisitStatusModel_a_resource_alias[]}
   */
  this.a_resource_alias = null;

  /**
   * The list of keys of staff members that conduct the class.
   *
   * @get result
   * @type {string[]}
   */
  this.a_staff = undefined;

  /**
   * The list of user IDs of staff members that conduct the class.
   *
   * @get result
   * @type {string[]}
   */
  this.a_uid_staff = undefined;

  /**
   * The visit date and time in UTC and in MySQL format.
   *
   * @get result
   * @type {string}
   */
  this.dt_date = undefined;

  /**
   * The visit date in the location's time zone and in MySQL format.
   *
   * @get result
   * @type {string}
   */
  this.dtl_date = undefined;

  /**
   * The service duration (in minutes).
   *
   * @get result
   * @type {number}
   */
  this.i_duration = undefined;

  /**
   * The client's place in a waiting list.
   *
   * @get result
   * @type {number}
   */
  this.i_wait_spot = undefined;

  /**
   * The source of a visit.
   *
   * Last used ID: 31.
   *
   * Values:
   * - 28 (`API`): Action made via Api Endpoint. Default for leads created via API, unless overridden.
   * - 21 (`AZURE`): Registered through `Azure`.
   * - 31 (`BRIVO_DOOR_ACCESS`): Visit has been checked-in by Brivo Door Access.
   * - 23 (`CENTRED`): Visit has been created by `CENTRED`.
   * - 8 (`CLASSPASS_BOOKING`): Visit has been created by `ClassPass`.
   * - 22 (`COLLECTIONS`): Debt paid via collections.
   * - 26 (`COLLECTIONS_FUTURE`): Debt paid via collections.
   * - 27 (`CONCERTO`): Action from Concerto.
   * - 18 (`EMAIL`): Action made via email.
   * - 20 (`FACEBOOK`): Indicating that the source is Facebook.
   * - 30 (`GO_HIGH_LEVEL`): Action from Go High Level.
   * - 19 (`GOOGLE`): Indicating that the source is Google.
   * - 7 (`GOOGLE_BOOKING`): Visit has been created by Google Booking Service.
   * - 14 (`GYMPASS_BOOKING`): Visit has been created by `GymPass`.
   * - 5 (`IMPORT`): Visit was created during import.
   * - 12 (`MICROSITE`): Action made via microsite.
   *
   *   It is also names as directory listing.
   * - 24 (`MICROSOFT`): Indicating that the source is Microsoft.
   * - 13 (`MY_PRESENCE_SITE`): Client booked session on My Presence Site.
   * - 17 (`SMS`): Action made via SMS.
   * - 4 (`SPA_BACKEND`): Staff booked session from spa backend.
   * - 3 (`SPA_FRONTEND`): Client booked session from spa frontend.
   * - 10 (`SYSTEM`): Created by system.
   * - 6 (`UNDEFINED`): Means that we did not define mode.
   * - 16 (`WEB_APP_ATTENDANCE`): Client booked session from Attendance Web App.
   * - 15 (`WEB_APP_CHECK_IN`): Client checked-in for the session through Check-In Web App.
   * - 2 (`WEB_BACKEND`): Staff booked session for client from website backend.
   * - 1 (`WEB_FRONTEND`): Client booked session from website frontend.
   * - 11 (`WIDGET`): Action made via widget (purchase, book etc).
   * - 25 (`ZAPIER`): Action from Zapier.
   *
   * @get result
   * @post post
   * @see Wl_Mode_ModeSid
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * Possible states of the visit: book, attended, cancelled, etc.
   *
   * Last used ID: 8.
   *
   * Values:
   * - 3 (`ATTEND`): Client has attended the session.
   * - 1 (`BOOK`): Active reservation means that user is going to attend the session.
   * - 6 (`CANCEL`): Client has cancelled the reservation in time and without penalty.
   * - 4 (`PENALTY`): Client has cancelled his reservation too late.
   * - 7 (`PENDING`): This state means that visit is registered, but it is unknown is it {@link Wl_Visit_VisitSid}
   *   or {@link Wl_Visit_VisitSid} or {@link Wl_Visit_VisitSid} but definitely one of these states.
   *
   *   The real type of this visit must be set manually by staff.
   *   Status can be changed automatically to {@link Wl_Visit_VisitSid}.
   * - 8 (`REMOVE`): Visit was removed.
   *   Visits with this status are not shown anywhere in system, but still are saved in database.
   * - 5 (`TRUANCY`): Client has missed the session without cancellation.
   * - 2 (`WAIT`): Reservation in a wait list means that user is going to attend the session if someone will cancel his reservation.
   *
   * @get result
   * @post post
   * @see Wl_Visit_VisitSid
   * @type {number}
   */
  this.id_visit = 0;

  /**
   * Possible states of the visit: book, attended, cancelled, etc.
   *
   * Last used ID: 8.
   *
   * Values:
   * - 3 (`ATTEND`): Client has attended the session.
   * - 1 (`BOOK`): Active reservation means that user is going to attend the session.
   * - 6 (`CANCEL`): Client has cancelled the reservation in time and without penalty.
   * - 4 (`PENALTY`): Client has cancelled his reservation too late.
   * - 7 (`PENDING`): This state means that visit is registered, but it is unknown is it {@link Wl_Visit_VisitSid}
   *   or {@link Wl_Visit_VisitSid} or {@link Wl_Visit_VisitSid} but definitely one of these states.
   *
   *   The real type of this visit must be set manually by staff.
   *   Status can be changed automatically to {@link Wl_Visit_VisitSid}.
   * - 8 (`REMOVE`): Visit was removed.
   *   Visits with this status are not shown anywhere in system, but still are saved in database.
   * - 5 (`TRUANCY`): Client has missed the session without cancellation.
   * - 2 (`WAIT`): Reservation in a wait list means that user is going to attend the session if someone will cancel his reservation.
   *
   * @post post
   * @see Wl_Visit_VisitSid
   * @type {?number}
   */
  this.id_visit_from = null;

  /**
   * The staff decision to charge (or not charge) a penalty when a client meets late cancel/no-show requirements.
   *
   * If `true`, a late cancel fee should be charged. Otherwise, this will be `false`.
   *
   * @post get
   * @type {boolean}
   */
  this.is_charge_fee = false;

  /**
   * Determines whether the visit is from an event.
   *
   * @get result
   * @type {boolean}
   */
  this.is_event = undefined;

  /**
   * Whether to send email notification.
   *
   * `true` - email notification will be sent.
   * `false` - email notification will not be sent.
   *
   * @post post
   * @type {boolean}
   */
  this.is_mail = false;

  /**
   * Whether to send push notification.
   *
   * `true` - push notification will be sent.
   * `false` - push notification will not be sent.
   *
   * @post post
   * @type {boolean}
   */
  this.is_push = false;

  /**
   * Whether this visit is requested and requires staff confirmation.
   *
   * * `true` - visit is requested.
   * * `false` - visit is confirmed or denied or this is a system request.
   *
   * @get result
   * @type {boolean}
   */
  this.is_request = undefined;

  /**
   * Whether to send sms notification.
   *
   * `true` - sms notification will be sent.
   * `false` - sms notification will not be sent.
   *
   * @post post
   * @type {boolean}
   */
  this.is_sms = false;

  /**
   * The business key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The class key.
   *
   * @get result
   * @type {string}
   */
  this.k_class = undefined;

  /**
   * The class period key.
   *
   * @get result
   * @type {string}
   */
  this.k_class_period = undefined;

  /**
   * The key of the location where visit provides.
   *
   * @get result
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * The email pattern key.
   * If `null`, the live email pattern shouldn't be used.
   *
   * @post get
   * @type {?string}
   */
  this.k_mail_pattern_live = null;

  /**
   * The service key.
   * If 'null', the visit isn't from an appointment.
   *
   * @get result
   * @type {?string}
   */
  this.k_service = null;

  /**
   * The key of the staff providing the appointment.
   * If `null`, the visit isn't from an appointment (for example, the visit is from an asset).
   *
   * @get result
   * @type {?string}
   */
  this.k_staff = null;

  /**
   * The time zone key.
   *
   * `null` if not set then use default timezone client.
   *
   * @get get
   * @type {?string}
   */
  this.k_timezone = null;

  /**
   * The visit key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_visit = "";

  /**
   * The .ics file for adding the service to a phone calendar.
   *
   * @get result
   * @type {string}
   */
  this.s_calendar_file_content = undefined;

  /**
   * The text abbreviation of the time zone.
   *
   * @get result
   * @type {string}
   */
  this.text_abbr_timezone = undefined;

  /**
   * The full address of the location for the visit (not the name of the location).
   *
   * @get result
   * @type {string}
   */
  this.text_location = undefined;

  /**
   * The reason the visit was canceled.
   *
   * @post get
   * @type {string}
   */
  this.text_reason = "";

  /**
   * The full name of the staff member who conducts this visit.
   * If there are several staff members conducting the visit, their names will all be listed and separated by commas.
   *
   * @get result
   * @type {string}
   */
  this.text_staff = undefined;

  /**
   * The service title.
   *
   * @get result
   * @type {string}
   */
  this.text_title = undefined;

  /**
   * User key who made a visit.
   * `null` for a guest visit.
   *
   * @get result
   * @type {?string}
   */
  this.uid = null;

  /**
   * The ID of the user who is the staff providing the appointment.
   * If `null`, the visit isn't from an appointment (for example, the visit is from an asset).
   *
   * @get result
   * @type {?string}
   */
  this.uid_staff = null;

  /**
   * The direct link to start class/event booking on the WellnessLiving website.
   * `null` for appointments/events/gym visits.
   *
   * @get result
   * @type {?string}
   */
  this.url_book_referral = null;

  /**
   * The shortened direct link to start class/event booking on the WellnessLiving website.
   * `null` for appointments/events/gym visits.
   *
   * @get result
   * @type {?string}
   */
  this.url_book_referral_short = null;

  /**
   * URL of virtual service. Empty if the visit is not virtual.
   *
   * @get result
   * @type {string}
   */
  this.url_virtual_service = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Visit_VisitStatusModel);

/**
 * @inheritDoc
 */
Wl_Visit_VisitStatusModel.prototype.config=function()
{
  return {"a_field":{"a_cancel":{"get":{"result":true}},"a_resource":{"get":{"result":true}},"a_resource_alias":{"get":{"result":true}},"a_staff":{"get":{"result":true}},"a_uid_staff":{"get":{"result":true}},"dt_date":{"get":{"result":true}},"dtl_date":{"get":{"result":true}},"i_duration":{"get":{"result":true}},"i_wait_spot":{"get":{"result":true}},"id_mode":{"get":{"result":true},"post":{"post":true}},"id_visit":{"get":{"result":true},"post":{"post":true}},"id_visit_from":{"post":{"post":true}},"is_charge_fee":{"post":{"get":true}},"is_event":{"get":{"result":true}},"is_mail":{"post":{"post":true}},"is_push":{"post":{"post":true}},"is_request":{"get":{"result":true}},"is_sms":{"post":{"post":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_class":{"get":{"result":true}},"k_class_period":{"get":{"result":true}},"k_location":{"get":{"result":true}},"k_mail_pattern_live":{"post":{"get":true}},"k_service":{"get":{"result":true}},"k_staff":{"get":{"result":true}},"k_timezone":{"get":{"get":true}},"k_visit":{"get":{"get":true},"post":{"get":true}},"s_calendar_file_content":{"get":{"result":true}},"text_abbr_timezone":{"get":{"result":true}},"text_location":{"get":{"result":true}},"text_reason":{"post":{"get":true}},"text_staff":{"get":{"result":true}},"text_title":{"get":{"result":true}},"uid":{"get":{"result":true}},"uid_staff":{"get":{"result":true}},"url_book_referral":{"get":{"result":true}},"url_book_referral_short":{"get":{"result":true}},"url_virtual_service":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Visit_VisitStatusModel.instanceGet
 * @param {string} k_visit The visit key.
 * @param {string} k_business The business key.
 * @returns {Wl_Visit_VisitStatusModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets visit status.
 *
 * Returns full details for the specified visit, including date, duration, staff, location,
 * virtual service join URL, assigned resources, downloadable calendar data, and whether
 * the visit can still be cancelled. Handles class, appointment, and gym visit types. Used
 * to render the visit detail view and action buttons in the client portal.
 *
 * @function
 * @name Wl_Visit_VisitStatusModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Changes visit status.
 *
 * Applies a status transition to the specified visit (for example, check-in, no-show, or
 * cancellation). Supports optimistic concurrency via an expected-from status, optional
 * late-cancel fee charging, and client notification flags. Requires backend access or
 * appropriate staff privileges.
 *
 * @function
 * @name Wl_Visit_VisitStatusModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
