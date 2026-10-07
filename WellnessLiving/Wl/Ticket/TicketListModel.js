/**
 * Returns tickets and orders of the session.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Ticket_TicketListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "dtu_start,k_business,k_class_period";

  /**
   * @typedef {{}} Wl_Ticket_TicketListModel_a_location
   * @property {string} k_location Location key.
   * @property {string} text_title Title of the location.
   */

  /**
   * Location of the session. Has the next structure:
   *
   * @get result
   * @type {Wl_Ticket_TicketListModel_a_location}
   */
  this.a_location = undefined;

  /**
   * @typedef {{}} Wl_Ticket_TicketListModel_a_order_a_type
   * @property {number} i_count Number of not cancelled tickets of this type in the order.
   * @property {string} k_ticket_option Key of the ticket type. Key of the ticket type.
   * @property {string} text_title Name of the ticket type.
   */

  /**
   * @typedef {{}} Wl_Ticket_TicketListModel_a_order
   * @property {Wl_Ticket_TicketListModel_a_order_a_type} a_type Ticket types of the order, not counting cancelled tickets. Every item has the next structure:
   * @property {string} dtl_purchase Time when the order was bought, in the local time of the location, MySQL format.
   * @property {number} i_attend Number of tickets of the order that are checked in.
   * @property {number} i_ticket Number of tickets in the order, cancelled ones included.
   * @property {boolean} is_guest `true` if the order was bought by a guest, who has no profile. In this case `text_name` is empty.
   * @property {string} k_purchase Number of the order: key of the purchase the tickets were bought with. Key of the purchase.
   * @property {string} m_total Total paid for the tickets of the order, net of refunds, with the currency {@link Wl_Ticket_TicketListModel.k_currency}. Decimal string.
   * @property {string} text_name Full name of the buyer. Empty for a guest.
   */

  /**
   * Orders of the session, from the most recent purchase to the oldest one. Every item has the next structure:
   *
   * @get result
   * @type {Wl_Ticket_TicketListModel_a_order[]}
   */
  this.a_order = undefined;

  /**
   * @typedef {{}} Wl_Ticket_TicketListModel_a_ticket
   * @property {?string} dtl_attend Time of the check-in, in the local time of the location, MySQL format. `null` if the ticket is not checked in.
   * @property {?string} dtl_cancel Time of the cancellation, in the local time of the location, MySQL format. `null` if the ticket is not cancelled.
   * @property {number} i_order Position of the ticket in the order, starting from 1.
   * @property {number} i_order_size Number of tickets in the order, cancelled ones included.
   * @property {boolean} is_attend Whether the ticket is checked in. A cancelled ticket is never checked in.
   * @property {boolean} is_cancel Whether the ticket is cancelled: voided, or refunded with the seat returned.
   * @property {string} k_purchase Order of the ticket, see {@link Wl_Ticket_TicketListModel.a_order}.
   * @property {string} k_ticket_item Key of the ticket, the one {@link Wl_Ticket_TicketScanModel} takes.
   * @property {string} k_ticket_option Key of the ticket type. Key of the ticket type.
   * @property {string} text_ticket_code Number of the ticket: its short code in the format for displaying, for example `4829-1736`. Empty if the ticket has no short code.
   * @property {string} text_type Name of the ticket type.
   */

  /**
   * Tickets of the session, cancelled ones included. Every item has the next structure:
   *
   * @get result
   * @type {Wl_Ticket_TicketListModel_a_ticket[]}
   */
  this.a_ticket = undefined;

  /**
   * End of the session, in the local time of the location, MySQL format.
   *
   * @get result
   * @type {string}
   */
  this.dtl_end = undefined;

  /**
   * Start of the session, in the local time of the location, MySQL format.
   *
   * @get result
   * @type {string}
   */
  this.dtl_start = undefined;

  /**
   * Start of the session, in UTC, MySQL format.
   *
   * @get get
   * @type {string}
   */
  this.dtu_start = "";

  /**
   * Number of tickets of the session that are checked in.
   *
   * @get result
   * @type {number}
   */
  this.i_attend = undefined;

  /**
   * Number of tickets that can be sold for the event.
   *
   * @get result
   * @type {number}
   */
  this.i_capacity = undefined;

  /**
   * Number of tickets sold for the session, not counting cancelled ones.
   *
   * Counts tickets, not buyers.
   *
   * @get result
   * @type {number}
   */
  this.i_sold = undefined;

  /**
   * Whether tickets of the session can still be sold: there are free seats, and the session has not ended.
   *
   * @get result
   * @type {boolean}
   */
  this.is_sell = undefined;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the class period the session belongs to.
   *
   * @get get
   * @type {string}
   */
  this.k_class_period = "";

  /**
   * Key of the currency of all amounts of the answer.
   *
   * @get result
   * @type {string}
   */
  this.k_currency = undefined;

  /**
   * Total paid for the tickets of the session, net of refunds. Decimal string, in the currency
   * {@link Wl_Ticket_TicketListModel.k_currency}.
   *
   * @get result
   * @type {string}
   */
  this.m_total = undefined;

  /**
   * Name of the event, with no date in it.
   *
   * @get result
   * @type {string}
   */
  this.text_title = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Ticket_TicketListModel);

/**
 * @inheritDoc
 */
Wl_Ticket_TicketListModel.prototype.config=function()
{
  return {"a_field":{"a_location":{"get":{"result":true}},"a_order":{"get":{"result":true}},"a_ticket":{"get":{"result":true}},"dtl_end":{"get":{"result":true}},"dtl_start":{"get":{"result":true}},"dtu_start":{"get":{"get":true}},"i_attend":{"get":{"result":true}},"i_capacity":{"get":{"result":true}},"i_sold":{"get":{"result":true}},"is_sell":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_class_period":{"get":{"get":true}},"k_currency":{"get":{"result":true}},"m_total":{"get":{"result":true}},"text_title":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Ticket_TicketListModel.instanceGet
 * @param {string} dtu_start Start of the session, in UTC, MySQL format.
 * @param {string} k_business Business key.
 * @param {string} k_class_period Key of the class period the session belongs to.
 * @returns {Wl_Ticket_TicketListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns tickets and orders of the session.
 *
 * Returns every ticket of the session, cancelled ones included, the orders they belong to, the counters of the
 * session, and the data needed to show the session: its name, location, start and end.
 * Requires access of the current staff member to the business.
 *
 * @function
 * @name Wl_Ticket_TicketListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
