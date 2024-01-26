/**
 * An endpoint that gives members of a franchisor access to a franchisee.
 *
 * To grant a user access the SDK sign-in account, the Manage Franchise Location permission is required.
 * Access will be granted for 24 hours.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_AuthorizePartner_AuthorizePartnerModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Determines whether the user will be granted access or if access will be revoked.
   * If `true`, access is granted. Otherwise, this will be `false` if access is revoked.
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
  this.k_location = "0";

  /**
   * The key of the user who will be granted access.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_AuthorizePartner_AuthorizePartnerModel);

/**
 * @inheritDoc
 */
Wl_Business_AuthorizePartner_AuthorizePartnerModel.prototype.config=function()
{
  return {"a_field": {"is_grant": {"get": {"get": true}},"k_location": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};