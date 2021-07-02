/**
 * Entry point to grant/deny access to a business location for a partner.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_AuthorizePartner_AuthorizePartnerModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * <tt>true</tt> - grant access; <tt>false</tt> - deny access.
   *
   * @get get
   * @type {boolean}
   */
  this.is_grant = false;

  /**
   * Key for the location which the user wants to enter. Primary key in the {@link \RsLocationSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * Key for the user who wants to enter. Primary key in the {@link \PassportLoginSql} table.
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