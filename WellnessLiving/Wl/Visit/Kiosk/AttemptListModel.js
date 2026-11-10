/**
 * Returns the gym check-ins and the failed gym check-in attempts of a local day at the location.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Visit_Kiosk_AttemptListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Visit_Kiosk_AttemptListModel_a_attempt
   * @property {string} dtu_attempt Time of the attempt (of the check-in for a visit), in UTC and MySQL format, for example `2026-11-05 14:30:00`.
   * @property {number} id_deny_reason Reason of the failure. One of {@link Wl_Visit_VisitDenyReasonSid} constants. `0` for a visit.
   * @property {number} id_mode Source of the attempt. One of {@link Wl_Mode_ModeSid} constants. `null` if a visit was checked in before the source was recorded.
   * @property {boolean} is_fail `true` for a failed attempt, `false` for a checked-in visit.
   * @property {string} k_location Location of the attempt.
   * @property {?string} k_login_promotion Pass that pays for the visit. `null` for a failed attempt or a visit that no pass pays for.
   * @property {?string} k_visit The checked-in visit. `null` for a failed attempt.
   * @property {?string} s_attempt Key of the failed attempt, the same as the check-in of the kiosk gives ({@link Wl_Visit_Kiosk_AttendModel}). `null` for a visit.
   * @property {?string} text_actor_name Full name of the user who made the attempt. `null` if nobody was signed in.
   * @property {?string} text_name_first First name of the client. `null` for a walk-in.
   * @property {?string} text_name_last Last name of the client. `null` for a walk-in.
   * @property {?string} text_pass Title of the pass that pays for the visit. `null` when `k_login_promotion` is `null`.
   * @property {?string} uid_actor User who made the attempt. `null` if nobody was signed in.
   * @property {?string} uid_attend The client. `null` for a walk-in.
   * @property {?string} url_photo Address of the photo of the client, for example `https://example.com/photo.jpg`. `null` for a walk-in.
   */

  /**
   * The attempts of the page, the newest first:
   *
   * @get result
   * @type {Wl_Visit_Kiosk_AttemptListModel_a_attempt[]}
   */
  this.a_attempt = undefined;

  /**
   * Local day at the location, in MySQL format, for example `2026-11-05`.
   *
   * `null` for the current day at the location.
   *
   * @get get
   * @type {?string}
   */
  this.dl_date = null;

  /**
   * Time in UTC and MySQL format, for example `2026-11-05 14:30:00`: only the attempts made at this time or later
   * are listed.
   *
   * `null` to list the whole day. The totals always count the whole day.
   *
   * @get get
   * @type {?string}
   */
  this.dtu_since = null;

  /**
   * Number of the gym check-ins and the failed attempts of the whole day.
   *
   * @get result
   * @type {number}
   */
  this.i_count_all = undefined;

  /**
   * Number of the failed attempts of the whole day.
   *
   * @get result
   * @type {number}
   */
  this.i_count_fail = undefined;

  /**
   * Number of the gym check-ins of the whole day.
   *
   * @get result
   * @type {number}
   */
  this.i_count_success = undefined;

  /**
   * Page of the list, from `0`. A page holds 100 attempts.
   *
   * @get get
   * @type {number}
   */
  this.i_page = 0;

  /**
   * Whether the page is the last one.
   *
   * @get result
   * @type {boolean}
   */
  this.is_page_last = true;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the location of the kiosk.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Visit_Kiosk_AttemptListModel);

/**
 * @inheritDoc
 */
Wl_Visit_Kiosk_AttemptListModel.prototype.config=function()
{
  return {"a_field":{"a_attempt":{"get":{"result":true}},"dl_date":{"get":{"get":true}},"dtu_since":{"get":{"get":true}},"i_count_all":{"get":{"result":true}},"i_count_fail":{"get":{"result":true}},"i_count_success":{"get":{"result":true}},"i_page":{"get":{"get":true}},"is_page_last":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_location":{"get":{"get":true}}}};
};

/**
 * Returns the gym check-ins and the failed gym check-in attempts of a local day at the location.
 *
 * The list holds the checked-in gym visits of the location and the failed gym check-in attempts at the location,
 * made from every source (the kiosk, the backend, the self check-in and the others); the visits and the attempts
 * of the classes and of the appointments are not listed. The newest attempt goes first, 100 attempts a page.
 * The totals count the whole day. The attempts of the clients whom the staff member may not see (the scope of the
 * clients of the staff member) are neither listed nor counted. Works in the session of a staff member with access
 * to the location and the privilege to see the profiles of the clients; no key of a kiosk is needed.
 *
 * @function
 * @name Wl_Visit_Kiosk_AttemptListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
