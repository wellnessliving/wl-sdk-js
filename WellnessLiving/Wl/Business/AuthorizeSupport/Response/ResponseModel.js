/**
 * An endpoint to request entrance into a business location.
 *
 * This endpoint is similar to {@link Wl_Business_AuthorizePartner_AuthorizePartnerModel} but not identical. To grant a user
 * access the SDK sign-in account, the Manage Business permission is required. The associated accounts will receive an
 * email regarding when they are given access and when that access expires. Access will be granted for 24 hours.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_AuthorizeSupport_Response_ResponseModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Determines whether the user will be granted access or if access will be revoked.
   * If <tt>true</tt> - then grant access; If <tt>false</tt> - then revoke access.
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

WlSdk_ModelAbstract.extend(Wl_Business_AuthorizeSupport_Response_ResponseModel);

/**
 * @inheritDoc
 */
Wl_Business_AuthorizeSupport_Response_ResponseModel.prototype.config=function()
{
  return {"a_field": {"is_grant": {"get": {"get": true}},"k_location": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};