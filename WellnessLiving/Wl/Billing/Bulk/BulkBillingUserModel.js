/**
 * Removes the client from the batch so that they are not billed.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Billing_Bulk_BulkBillingUserModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The business key.
   *
   * @delete get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The purchase batch key.
   *
   * @delete get
   * @type {string}
   */
  this.k_purchase_batch = "";

  /**
   * The user key of the client to remove from the batch.
   *
   * @delete get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Billing_Bulk_BulkBillingUserModel);

/**
 * @inheritDoc
 */
Wl_Billing_Bulk_BulkBillingUserModel.prototype.config=function()
{
  return {"a_field":{"k_business":{"delete":{"get":true}},"k_purchase_batch":{"delete":{"get":true}},"uid":{"delete":{"get":true}}}};
};

/**
 * Removes the client from the batch so that they are not billed.
 *
 * Only a client that has not been billed yet can be removed; a client that was already charged or failed keeps
 * their result. The client is not deleted from the batch - they are marked cancelled and skipped when the billing
 * runs, together with the moment of the change and the acting user.
 *
 * @function
 * @name Wl_Billing_Bulk_BulkBillingUserModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */
