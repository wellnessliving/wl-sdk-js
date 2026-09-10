/**
 * Cancels request of access to location.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_AuthorizeSupport_Request_RequestModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * `true` - support must wait permission from franchisee. `false` - no need to wait; authorisation is already done.
   *
   * @get result
   * @type {boolean}
   */
  this.is_pending = undefined;

  /**
   * Location key.
   *
   * @delete get
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * User key.
   *
   * @delete get
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_AuthorizeSupport_Request_RequestModel);

/**
 * @inheritDoc
 */
Wl_Business_AuthorizeSupport_Request_RequestModel.prototype.config=function()
{
  return {"a_field":{"is_pending":{"get":{"result":true}},"k_location":{"delete":{"get":true},"get":{"get":true}},"uid":{"delete":{"get":true},"get":{"get":true}}}};
};

/**
 * Cancels request of access to location.
 *
 * Withdraws a support agent's pending request for temporary access to a business location.
 * Notifies the staff member who would have responded to the request in real time and closes
 * out the underlying access request.
 *
 * @function
 * @name Wl_Business_AuthorizeSupport_Request_RequestModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Requests authorization of support employee to business location.
 * Makes authorization if it is possible without special permission.
 *
 * If the support employee already has access to the franchisor business, or the franchisor
 * business has open access enabled, authorization is granted immediately and the existing
 * access window is extended by one day. Otherwise, a request is created and every staff
 * member with the Manage Business permission on the franchisor business is notified in real
 * time; the caller receives `is_pending` as `true` until a staff member approves or rejects
 * the request.
 *
 * @function
 * @name Wl_Business_AuthorizeSupport_Request_RequestModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
