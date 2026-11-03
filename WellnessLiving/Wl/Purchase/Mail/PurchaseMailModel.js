/**
 * Sends mail message with list of purchased items for specified purchase.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Purchase_Mail_PurchaseMailModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Determines whether mail sending should be forced.
   *
   * @post post
   * @type {boolean}
   */
  this.is_send_force = false;

  /**
   * The key of the purchase.
   *
   * @post post
   * @type {string}
   */
  this.k_purchase = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Purchase_Mail_PurchaseMailModel);

/**
 * @inheritDoc
 */
Wl_Purchase_Mail_PurchaseMailModel.prototype.config=function()
{
  return {"a_field":{"is_send_force":{"post":{"post":true}},"k_purchase":{"post":{"post":true}}}};
};

/**
 * Sends mail message with list of purchased items for specified purchase.
 *
 * Validates the caller's access to the purchase and sends a receipt email to the appropriate recipient
 * (staff member or client), recording the action in the mail history log.
 *
 * A guest, who is not signed in, can ask for the receipt of the purchase that the guest has just made: the email
 * goes to the address that the guest gave when buying, at most three emails for one purchase. Then the error
 * `access` means that the session of the guest knows nothing of the purchase (the purchase was made in another
 * session, or more than an hour ago), `access-purchase` that the guest gave no email, and `mail-limit` that the
 * three emails are sent already. {@link Wl_Purchase_Mail_PurchaseMailModel.is_send_force} does not apply to a guest. The receipt of
 * a guest is not sent, and the call still succeeds and uses one of the three emails, when the receipt email is
 * turned off in the business, when the business has no email address, or when the payment is not confirmed yet.
 *
 * @function
 * @name Wl_Purchase_Mail_PurchaseMailModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
