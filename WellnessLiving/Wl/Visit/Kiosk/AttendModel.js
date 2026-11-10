/**
 * Checks the client in for a gym visit at the staff check-in kiosk.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Visit_Kiosk_AttendModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Time of the check-in of the gym visit that the client already has on the day, in UTC and MySQL format, for
   * example `2026-11-05 14:30:00`.
   *
   * `null` unless the check-in is refused because the client is already checked in on the day.
   *
   * @post result
   * @type {?string}
   */
  this.dtu_attend = null;

  /**
   * Time of the check-in in UTC and MySQL format, for example `2026-11-05 14:30:00`.
   *
   * `null` if the check-in has been refused.
   *
   * @post result
   * @type {?string}
   */
  this.dtu_register = null;

  /**
   * Number of seconds after which the kiosk closes the message of a failed check-in.
   *
   * `0` if the business does not close this message automatically. A setting of the business.
   *
   * @post result
   * @type {number}
   */
  this.i_attend_quick_close_fail = undefined;

  /**
   * Number of seconds after which the kiosk closes the message of a successful check-in.
   *
   * `0` if the business does not close this message automatically. A setting of the business.
   *
   * @post result
   * @type {number}
   */
  this.i_attend_quick_close_success = undefined;

  /**
   * Reason why the check-in has been refused.
   *
   * One of {@link Wl_Visit_VisitDenyReasonSid} constants. `0` if the check-in has been made.
   *
   * @post result
   * @see Wl_Visit_VisitDenyReasonSid
   * @type {number}
   */
  this.id_deny_reason = undefined;

  /**
   * Reason why no pass pays for the visit.
   *
   * One of {@link Wl_Visit_VisitDenyReasonSid} constants. `0` if the visit is paid or the check-in has been refused. `0`
   * also if the check-in has taken the booked visit of the day that has no payment while the client has a valid
   * pass, and the business does not reconcile that visit with the pass at the check-in.
   *
   * @post result
   * @see Wl_Visit_VisitDenyReasonSid
   * @type {number}
   */
  this.id_unpaid_reason = undefined;

  /**
   * Status of the visit after the check-in.
   *
   * One of {@link Wl_Visit_VisitSid} constants. `0` if the check-in has been refused.
   *
   * @post result
   * @see Wl_Visit_VisitSid
   * @type {number}
   */
  this.id_visit = undefined;

  /**
   * Whether the kiosk opens the profile of the client after a successful check-in. A setting of the business.
   *
   * @post result
   * @type {boolean}
   */
  this.is_attend_quick_navigate = undefined;

  /**
   * Whether the visit is paid.
   *
   * A visit may be paid without a pass, by a purchase item or by a partner system: then it is `true`, while
   * {@link Wl_Visit_Kiosk_AttendModel.k_login_promotion} and {@link Wl_Visit_Kiosk_AttendModel.text_pass} are `null`. `false` also if the
   * check-in has been refused.
   *
   * @post result
   * @type {boolean}
   */
  this.is_paid = undefined;

  /**
   * Business key.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the location of the kiosk.
   *
   * @post post
   * @type {string}
   */
  this.k_location = "";

  /**
   * Location of the gym visit that the client already has on the day, when the check-in is refused for it.
   *
   * `null` in all other cases.
   *
   * @post result
   * @type {?string}
   */
  this.k_location_visit = null;

  /**
   * Pass that pays for the visit.
   *
   * `null` if no pass pays for the visit or the check-in has been refused. `null` also for a visit paid without a
   * pass, by a purchase item or by a partner system, while {@link Wl_Visit_Kiosk_AttendModel.is_paid} is `true`.
   *
   * @post result
   * @type {?string}
   */
  this.k_login_promotion = null;

  /**
   * The checked-in visit; when the check-in is refused because the client is already checked in on the day, the
   * visit that the client has.
   *
   * `null` if the check-in has been refused for another reason.
   *
   * @post result
   * @type {?string}
   */
  this.k_visit = null;

  /**
   * Key of the failed attempt of the check-in, the same as in the list of the attempts of the location
   * ({@link Wl_Visit_Kiosk_AttemptListModel}).
   *
   * `null` if the check-in has been made, or has been refused without a record of a failed attempt (the client is
   * already checked in on the day).
   *
   * @post result
   * @type {?string}
   */
  this.s_attempt = null;

  /**
   * Message of the refusal for the staff member.
   *
   * Empty string if the check-in has been made.
   *
   * @post result
   * @type {string}
   */
  this.text_message = undefined;

  /**
   * Title of the pass that pays for the visit.
   *
   * `null` if no pass pays for the visit or the check-in has been refused. `null` also for a visit paid without a
   * pass, by a purchase item or by a partner system, while {@link Wl_Visit_Kiosk_AttendModel.is_paid} is `true`.
   *
   * @post result
   * @type {?string}
   */
  this.text_pass = null;

  /**
   * Key of the client.
   *
   * @post post
   * @type {string}
   */
  this.uid = "";

  /**
   * Address of the store where the client may buy a pass, for example `https://example.com/catalog-list.html`.
   *
   * `null` if the visit is paid or the check-in has been refused.
   *
   * @post result
   * @type {?string}
   */
  this.url_store = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Visit_Kiosk_AttendModel);

/**
 * @inheritDoc
 */
Wl_Visit_Kiosk_AttendModel.prototype.config=function()
{
  return {"a_field":{"dtu_attend":{"post":{"result":true}},"dtu_register":{"post":{"result":true}},"i_attend_quick_close_fail":{"post":{"result":true}},"i_attend_quick_close_success":{"post":{"result":true}},"id_deny_reason":{"post":{"result":true}},"id_unpaid_reason":{"post":{"result":true}},"id_visit":{"post":{"result":true}},"is_attend_quick_navigate":{"post":{"result":true}},"is_paid":{"post":{"result":true}},"k_business":{"post":{"post":true}},"k_location":{"post":{"post":true}},"k_location_visit":{"post":{"result":true}},"k_login_promotion":{"post":{"result":true}},"k_visit":{"post":{"result":true}},"s_attempt":{"post":{"result":true}},"text_message":{"post":{"result":true}},"text_pass":{"post":{"result":true}},"uid":{"post":{"post":true}},"url_store":{"post":{"result":true}}}};
};

/**
 * Checks the client in for a gym visit at the staff check-in kiosk.
 *
 * Works in the session of a staff member with access to the location and the privilege to see the profile of the
 * client; no key of a kiosk is needed. The visit is checked in from the source "Kiosk". A client is checked in for
 * a gym visit once a day: a second check-in on the same local day, at any location of the business, is refused
 * and nothing is written. A booked gym visit of the day at the location of the kiosk is checked in. A refusal
 * gives its reason, its message and the key of the failed attempt; a refusal for a negative balance does not
 * show the amount to a staff member who may not see the balances of the clients.
 *
 * @function
 * @name Wl_Visit_Kiosk_AttendModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
