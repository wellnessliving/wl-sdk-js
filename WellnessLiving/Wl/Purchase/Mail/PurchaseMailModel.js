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
 * @function
 * @name Wl_Purchase_Mail_PurchaseMailModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
