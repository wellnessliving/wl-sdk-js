/**
 * Sends the tickets of the purchase.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Ticket_TicketMailModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_purchase";

  /**
   * Business key.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the purchase the tickets were bought with.
   *
   * @post post
   * @type {string}
   */
  this.k_purchase = "";

  /**
   * Email to send the tickets to.
   *
   * Empty to send them to the email of the order, or of the client of the order. After the request it holds the
   * address the tickets were sent to.
   *
   * @post post,result
   * @type {string}
   */
  this.text_mail = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Ticket_TicketMailModel);

/**
 * @inheritDoc
 */
Wl_Ticket_TicketMailModel.prototype.config=function()
{
  return {"a_field":{"k_business":{"post":{"post":true}},"k_purchase":{"post":{"post":true}},"text_mail":{"post":{"post":true,"result":true}}}};
};

/**
 * @function
 * @name Wl_Ticket_TicketMailModel.instanceGet
 * @param {string} k_business Business key.
 * @param {string} k_purchase Key of the purchase the tickets were bought with.
 * @returns {Wl_Ticket_TicketMailModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Sends the tickets of the purchase.
 *
 * Only a staff member with the store sell privilege, or a user who can access the profile of the client of the
 * order, may send. The email goes to `text_mail` when it is sent; otherwise, if the order has a client, to the
 * email of the account of the client; otherwise to the email of the order. After the request `text_mail` holds the
 * address the tickets were sent to.
 *
 * The code of the exception tells the client what has happened:<ul>
 * <li>`access`: nobody is signed in, or the user has neither the store sell privilege nor access to the profile
 * of the client of the order. For a user who cannot sell, this code is also returned when the purchase has no
 * tickets, so that they cannot learn which purchases have tickets.</li>
 * <li>`order-nx`: the purchase has no order of tickets. Returned only to a user who can sell.</li>
 * <li>`mail-invalid`: `text_mail` is not a valid email.</li>
 * <li>`mail-nx`: no address was sent, and the order has no email to send to (no email of the client of the
 * order, no email of the order).</li>
 * </ul>
 *
 * @function
 * @name Wl_Ticket_TicketMailModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
