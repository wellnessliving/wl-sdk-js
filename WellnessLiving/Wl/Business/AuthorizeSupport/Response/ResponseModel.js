/**
 * Grants or denies access to business location for staff member.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_AuthorizeSupport_Response_ResponseModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Determines whether the user will be granted access or if access will be revoked.
   * If `true` - then grant access; If `false` - then revoke access.
   * Revoking access is a scheduled task set to be run within the next 15 minutes.
   *
   * @get get
   * @type {boolean}
   */
  this.is_grant = false;

  /**
   * The key of the location to access.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * The key of the user who will be granted access.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_AuthorizeSupport_Response_ResponseModel);

/**
 * @inheritDoc
 */
Wl_Business_AuthorizeSupport_Response_ResponseModel.prototype.config=function()
{
  return {"a_field":{"is_grant":{"get":{"get":true}},"k_location":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * Grants or denies access to business location for staff member.
 *
 * Used to respond to a support access request: a business owner accepts or rejects temporary entry for
 * a WellnessLiving support agent. Requires the Manage Business permission. Granting access triggers an
 * email notification and expires after 24 hours; the result is broadcast in real time to the requesting
 * staff member.
 *
 * @function
 * @name Wl_Business_AuthorizeSupport_Response_ResponseModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
