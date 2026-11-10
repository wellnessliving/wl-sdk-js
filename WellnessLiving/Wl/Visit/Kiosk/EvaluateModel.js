/**
 * Evaluates a gym check-in of the client.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Visit_Kiosk_EvaluateModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Visit_Kiosk_EvaluateModel_a_login_promotion
   * @property {?string} dl_expire Last day of the pass, local date in MySQL format. `null` if the pass does not expire.
   * @property {?number} i_limit Number of the visits that the pass gives, `null` if the pass does not limit them.
   * @property {?number} i_remain Number of the visits left before the check-in. `null` if the pass is unlimited.
   * @property {boolean} is_last `true` if the pass is limited and has 2 or fewer visits left before the check-in.
   * @property {boolean} is_unlimited `true` if the pass does not limit the visits.
   * @property {boolean} is_use `true` if the check-in would take this pass.
   * @property {string} k_login_promotion Key of the pass; for a pass inside a package, the key of the package.
   * @property {string} text_title Title of the pass.
   */

  /**
   * Passes of the client that may pay for a gym visit.
   *
   * The pass that the check-in would take is marked with `is_use`. No pass is marked when the check-in would take
   * the booked visit of the day at the location of the kiosk.
   *
   * @get result
   * @type {Wl_Visit_Kiosk_EvaluateModel_a_login_promotion[]}
   */
  this.a_login_promotion = undefined;

  /**
   * Local date and time of the check-in at the location, in MySQL format, for example `2026-11-05 09:30:00`.
   *
   * `null` for the current time.
   *
   * @get get
   * @type {?string}
   */
  this.dtl_date = null;

  /**
   * Time of the check-in of the gym visit of the day, in UTC and MySQL format, for example `2026-11-05 14:30:00`.
   *
   * The time of the visit when the visit has not been checked in. `null` if the client has no gym visit on the day.
   *
   * @get result
   * @type {?string}
   */
  this.dtu_attend = null;

  /**
   * The first reason why the check-in would be refused.
   *
   * One of {@link Wl_Visit_VisitDenyReasonSid} constants. `0` if no reason is found; the check-in still may be refused by
   * the rules of the booking.
   *
   * @get result
   * @see Wl_Visit_VisitDenyReasonSid
   * @type {number}
   */
  this.id_deny_reason = undefined;

  /**
   * Reason why the pass of the client does not pay for the visit.
   *
   * One of {@link Wl_Visit_VisitDenyReasonSid} constants. `0` if a pass pays for the visit.
   *
   * @get result
   * @see Wl_Visit_VisitDenyReasonSid
   * @type {number}
   */
  this.id_unpaid_reason = undefined;

  /**
   * Whether the gym visit of the day is checked in.
   *
   * `false` also when the client has no gym visit on the day.
   *
   * @get result
   * @type {boolean}
   */
  this.is_attend = undefined;

  /**
   * Whether the balance of the account of the client (or of the payer of the client) is negative.
   *
   * @get result
   * @type {boolean}
   */
  this.is_balance_owing = undefined;

  /**
   * Whether the client has only expired credit cards.
   *
   * @get result
   * @type {boolean}
   */
  this.is_card_expired = undefined;

  /**
   * Whether a credit card of the client expires in less than a month.
   *
   * @get result
   * @type {boolean}
   */
  this.is_card_expiring = undefined;

  /**
   * Whether the client has a purchase whose contract is not signed.
   *
   * @get result
   * @type {boolean}
   */
  this.is_contract = undefined;

  /**
   * Whether the client is flagged for booking at the location.
   *
   * @get result
   * @type {boolean}
   */
  this.is_flag = undefined;

  /**
   * Whether the client has a required form that is not completed.
   *
   * @get result
   * @type {boolean}
   */
  this.is_form_mandatory = undefined;

  /**
   * Whether the pass that the check-in would take has 2 or fewer visits left.
   *
   * `false` when no pass would be taken or the pass is unlimited.
   *
   * @get result
   * @type {boolean}
   */
  this.is_pass_last_visit = undefined;

  /**
   * Whether a pass of the client has expired.
   *
   * @get result
   * @type {boolean}
   */
  this.is_promotion_expired = undefined;

  /**
   * Whether a pass of the client is on hold.
   *
   * @get result
   * @type {boolean}
   */
  this.is_promotion_hold = undefined;

  /**
   * Whether the client has unpaid visits.
   *
   * @get result
   * @type {boolean}
   */
  this.is_unpaid_visit = undefined;

  /**
   * Whether the business requires a waiver that the client has not signed.
   *
   * @get result
   * @type {boolean}
   */
  this.is_waiver = undefined;

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

  /**
   * Location of the gym visit of the day; it may be another location of the business.
   *
   * `null` if the client has no gym visit on the day.
   *
   * @get result
   * @type {?string}
   */
  this.k_location_visit = null;

  /**
   * Gym visit of the client on the local day of the location.
   *
   * `null` if the client has no gym visit on the day.
   *
   * @get result
   * @type {?string}
   */
  this.k_visit = null;

  /**
   * Balance of the account of the client (or of the payer of the client), for example `-25.00`.
   *
   * `null` if the staff member may not see the balances of the clients.
   *
   * @get result
   * @type {?string}
   */
  this.m_balance = null;

  /**
   * Key of the client.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Visit_Kiosk_EvaluateModel);

/**
 * @inheritDoc
 */
Wl_Visit_Kiosk_EvaluateModel.prototype.config=function()
{
  return {"a_field":{"a_login_promotion":{"get":{"result":true}},"dtl_date":{"get":{"get":true}},"dtu_attend":{"get":{"result":true}},"id_deny_reason":{"get":{"result":true}},"id_unpaid_reason":{"get":{"result":true}},"is_attend":{"get":{"result":true}},"is_balance_owing":{"get":{"result":true}},"is_card_expired":{"get":{"result":true}},"is_card_expiring":{"get":{"result":true}},"is_contract":{"get":{"result":true}},"is_flag":{"get":{"result":true}},"is_form_mandatory":{"get":{"result":true}},"is_pass_last_visit":{"get":{"result":true}},"is_promotion_expired":{"get":{"result":true}},"is_promotion_hold":{"get":{"result":true}},"is_unpaid_visit":{"get":{"result":true}},"is_waiver":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_location":{"get":{"get":true}},"k_location_visit":{"get":{"result":true}},"k_visit":{"get":{"result":true}},"m_balance":{"get":{"result":true}},"uid":{"get":{"get":true}}}};
};

/**
 * Evaluates a gym check-in of the client.
 *
 * Finds the gym visit of the client on the local day of the location (at any location of the business), the
 * first reason why the check-in would be refused, in the order of the check-in, and the reason why the pass of
 * the client would not pay for the visit. Fills the state of the profile: the balance, the unpaid visits, the
 * waiver, the contract, the required forms, the credit cards, the flag, the passes on hold and expired, and the
 * passes that may pay for the visit. Only the first reason is given. Nothing is written: no visit and no failed
 * attempt.
 *
 * @function
 * @name Wl_Visit_Kiosk_EvaluateModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
