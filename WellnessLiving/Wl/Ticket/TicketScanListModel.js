/**
 * Checks in the tickets.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Ticket_TicketScanListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "dtu_start,k_business,k_class_period";

  /**
   * @typedef {{}} Wl_Ticket_TicketScanListModel_a_result
   * @property {string} id_outcome Outcome of the ticket, see the description of the class.
   * @property {string} k_ticket_item Key of the ticket, as it was sent.
   */

  /**
   * Outcome of every ticket of the request, in the order of {@link Wl_Ticket_TicketScanListModel.a_ticket_item} without
   * repeated keys. Every item has the next structure:
   *
   * @post result
   * @type {Wl_Ticket_TicketScanListModel_a_result[]}
   */
  this.a_result = undefined;

  /**
   * Keys of the tickets to check in, as {@link Wl_Ticket_TicketListModel} returns them.
   *
   * A key that is repeated is checked in once.
   *
   * @post post
   * @type {string[]}
   */
  this.a_ticket_item = undefined;

  /**
   * Start of the session being checked in, in UTC and MySQL format.
   *
   * @post post
   * @type {string}
   */
  this.dtu_start = "";

  /**
   * Number of the tickets already checked in for the session, after the call. Returned once for the whole call.
   *
   * @post result
   * @type {number}
   */
  this.i_attend = undefined;

  /**
   * Number of the tickets sold for the session, after the call: not cancelled ones, including those whose holders
   * have not come. Returned once for the whole call.
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

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Ticket_TicketScanListModel);

/**
 * @inheritDoc
 */
Wl_Ticket_TicketScanListModel.prototype.config=function()
{
  return {"a_field":{"a_result":{"post":{"result":true}},"a_ticket_item":{"post":{"post":true}},"dtu_start":{"post":{"post":true}},"i_attend":{"post":{"result":true}},"i_sold":{"post":{"result":true}},"id_mode":{"post":{"post":true}},"k_business":{"post":{"post":true}},"k_class_period":{"post":{"post":true}}}};
};

/**
 * @function
 * @name Wl_Ticket_TicketScanListModel.instanceGet
 * @param {string} dtu_start Start of the session being checked in, in UTC and MySQL format.
 * @param {string} k_business Business key.
 * @param {string} k_class_period Key of the class period the session being checked in belongs to.
 * @returns {Wl_Ticket_TicketScanListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Checks in the tickets.
 *
 * Validates the business and the access of the current user to it once for the whole call, then checks in every
 * ticket on its own and loads the counters of the session once, after all of them.
 *
 * @function
 * @name Wl_Ticket_TicketScanListModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
