/**
 * Checks in the ticket.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Ticket_TicketScanModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "dtu_start,k_business,k_class_period";

  /**
   * Time when the ticket has been checked in, in UTC and MySQL format.
   *
   * `null` if the ticket was not checked in.
   *
   * @post result
   * @type {?string}
   */
  this.dtu_attend = null;

  /**
   * Time when the visit of the ticket has been cancelled, in UTC and MySQL format.
   *
   * `null` if the ticket was not cancelled.
   *
   * @post result
   * @type {?string}
   */
  this.dtu_cancel = null;

  /**
   * End of the session the ticket is for, in UTC and MySQL format.
   *
   * @post result
   * @type {string}
   */
  this.dtu_session_end = undefined;

  /**
   * Start of the session the ticket is for, in UTC and MySQL format.
   *
   * Equals {@link Wl_Ticket_TicketScanModel.dtu_start} when the ticket is for the session the client has sent.
   *
   * @post result
   * @type {string}
   */
  this.dtu_session_start = undefined;

  /**
   * Start of the session being checked in, in UTC and MySQL format.
   *
   * @post post
   * @type {string}
   */
  this.dtu_start = "";

  /**
   * Number of the tickets already checked in for the session, including this one.
   *
   * @post result
   * @type {number}
   */
  this.i_attend = undefined;

  /**
   * Number of the tickets sold for the session: not cancelled ones, including those whose holders have not come.
   *
   * @post result
   * @type {number}
   */
  this.i_sold = undefined;

  /**
   * Source of the check-in. One of {@link Wl_Mode_ModeSid}.
   *
   * `0` if not specified, in this case the source is detected from the current request.
   *
   * @post post
   * @see Wl_Mode_ModeSid
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * Whether it is allowed to check in a ticket after its session has ended.
   *
   * `false` to answer with an error in this case.
   *
   * @post post
   * @type {boolean}
   */
  this.is_past_allowed = false;

  /**
   * Business key.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the class period the session being checked in belongs to.
   *
   * @post post
   * @type {string}
   */
  this.k_class_period = "";

  /**
   * Key of the class period the session of the ticket belongs to.
   *
   * Differs from {@link Wl_Ticket_TicketScanModel.k_class_period} only when the ticket is for another session.
   *
   * @post result
   * @type {string}
   */
  this.k_class_period_ticket = undefined;

  /**
   * Key of the ticket.
   *
   * @post result
   * @type {string}
   */
  this.k_ticket_item = undefined;

  /**
   * Key of the visit booked with the ticket.
   *
   * @post result
   * @type {string}
   */
  this.k_visit = undefined;

  /**
   * Either the full key of the ticket or its short numbers-only code.
   *
   * The short code may contain any separators, for example `4829-1736`.
   *
   * @post post
   * @type {string}
   */
  this.text_ticket = "";

  /**
   * Short code of the ticket in the format for displaying, for example `4829-1736`.
   *
   * Empty if the ticket has no short code.
   *
   * @post result
   * @type {string}
   */
  this.text_ticket_code = undefined;

  /**
   * Name of the event the ticket is for.
   *
   * @post result
   * @type {string}
   */
  this.text_title = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Ticket_TicketScanModel);

/**
 * @inheritDoc
 */
Wl_Ticket_TicketScanModel.prototype.config=function()
{
  return {"a_field":{"dtu_attend":{"post":{"result":true}},"dtu_cancel":{"post":{"result":true}},"dtu_session_end":{"post":{"result":true}},"dtu_session_start":{"post":{"result":true}},"dtu_start":{"post":{"post":true}},"i_attend":{"post":{"result":true}},"i_sold":{"post":{"result":true}},"id_mode":{"post":{"post":true}},"is_past_allowed":{"post":{"post":true}},"k_business":{"post":{"post":true}},"k_class_period":{"post":{"post":true}},"k_class_period_ticket":{"post":{"result":true}},"k_ticket_item":{"post":{"result":true}},"k_visit":{"post":{"result":true}},"text_ticket":{"post":{"post":true}},"text_ticket_code":{"post":{"result":true}},"text_title":{"post":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Ticket_TicketScanModel.instanceGet
 * @param {string} dtu_start Start of the session being checked in, in UTC and MySQL format.
 * @param {string} k_business Business key.
 * @param {string} k_class_period Key of the class period the session being checked in belongs to.
 * @returns {Wl_Ticket_TicketScanModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Checks in the ticket.
 *
 * Validates the business and the access of the current user to it, finds the ticket, checks it against the
 * session sent by the client, and marks its visit as attended.
 *
 * @function
 * @name Wl_Ticket_TicketScanModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
