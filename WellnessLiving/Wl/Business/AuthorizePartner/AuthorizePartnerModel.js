/**
 * Grants or denies access to business location for a partner.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_AuthorizePartner_AuthorizePartnerModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Determines whether the user will be granted access or if access will be revoked.
   * If `true`, access will be granted. If `false`, access will be revoked.
   * Revoking access is a scheduled task set to be run within the next 15 minutes.
   *
   * @get get
   * @type {boolean}
   */
  this.is_grant = false;

  /**
   * The key of the franchisee location to enter.
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

WlSdk_ModelAbstract.extend(Wl_Business_AuthorizePartner_AuthorizePartnerModel);

/**
 * @inheritDoc
 */
Wl_Business_AuthorizePartner_AuthorizePartnerModel.prototype.config=function()
{
  return {"a_field":{"is_grant":{"get":{"get":true}},"k_location":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * Grants or denies access to business location for a partner.
 *
 * Allows a franchisor staff member to temporarily let another user into a franchisee location. Requires
 * the "Manage Franchise Location" privilege. Granted access expires after 24 hours; revoking schedules
 * removal within 15 minutes.
 *
 * @function
 * @name Wl_Business_AuthorizePartner_AuthorizePartnerModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
