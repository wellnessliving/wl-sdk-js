/**
 * Undoes the check-in of the ticket.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Ticket_TicketUndoModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "dtu_start,k_business,k_class_period";

  /**
   * Start of the session, in UTC and MySQL format.
   *
   * @post post
   * @type {string}
   */
  this.dtu_start = "";

  /**
   * Number of the tickets checked in for the session after the call.
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
   * Business key.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the class period the session belongs to.
   *
   * @post post
   * @type {string}
   */
  this.k_class_period = "";

  /**
   * Key of the ticket to undo the check-in of.
   *
   * @post post
   * @type {string}
   */
  this.k_ticket_item = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Ticket_TicketUndoModel);

/**
 * @inheritDoc
 */
Wl_Ticket_TicketUndoModel.prototype.config=function()
{
  return {"a_field":{"dtu_start":{"post":{"post":true}},"i_attend":{"post":{"result":true}},"i_sold":{"post":{"result":true}},"k_business":{"post":{"post":true}},"k_class_period":{"post":{"post":true}},"k_ticket_item":{"post":{"post":true}}}};
};

/**
 * @function
 * @name Wl_Ticket_TicketUndoModel.instanceGet
 * @param {string} dtu_start Start of the session, in UTC and MySQL format.
 * @param {string} k_business Business key.
 * @param {string} k_class_period Key of the class period the session belongs to.
 * @returns {Wl_Ticket_TicketUndoModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Undoes the check-in of the ticket.
 *
 * Validates the business and the access of the current user to it, finds the ticket, checks it against the
 * session sent by the client, and returns its visit from attended to booked. Takes the same critical section as
 * {@link Wl_Ticket_TicketScanModel}, so a check-in and an undo of the same ticket never run at the same time.
 *
 * @function
 * @name Wl_Ticket_TicketUndoModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
