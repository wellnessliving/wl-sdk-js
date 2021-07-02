/**
 * Entry point for grant/deny access to business location.
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
   * <tt>true</tt> - grant access; <tt>false</tt> - deny access.
   *
   * @get get
   * @type {boolean}
   */
  this.is_grant = false;

  /**
   * Location to which user want to enter. Primary key in {@link \RsLocationSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * User who want to enter. Primary key in {@link \PassportLoginSql} table.
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