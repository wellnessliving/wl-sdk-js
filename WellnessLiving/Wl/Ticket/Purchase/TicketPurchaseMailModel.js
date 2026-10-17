/**
 * Sends the confirmation of the purchase with the tickets.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Ticket_Purchase_TicketPurchaseMailModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The key of the purchase of tickets.
   *
   * @post post
   * @type {string}
   */
  this.k_purchase = "";

  /**
   * Email to send the tickets to instead of the email of the buyer.
   *
   * Empty to send the email to the buyer.
   *
   * @post post
   * @type {string}
   */
  this.text_mail = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Ticket_Purchase_TicketPurchaseMailModel);

/**
 * @inheritDoc
 */
Wl_Ticket_Purchase_TicketPurchaseMailModel.prototype.config=function()
{
  return {"a_field":{"k_purchase":{"post":{"post":true}},"text_mail":{"post":{"post":true}}}};
};

/**
 * Sends the confirmation of the purchase with the tickets.
 *
 * Checks the access to the purchase, finds the order of tickets of the purchase, and sends the email with the
 * tickets and their QR codes to the buyer, or to `text_mail` if it is given. The email is not sent if the pattern
 * is turned off in the business, or if the buyer has turned it off in the notification settings and no address is
 * given. The codes of the errors are listed in the description of the class.
 *
 * @function
 * @name Wl_Ticket_Purchase_TicketPurchaseMailModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
