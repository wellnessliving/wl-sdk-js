/**
 * Entry point for enter to business location.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_AuthorizeSupport_Request_RequestModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * <tt>true</tt> - support must wait permission from franchisee. <tt>false</tt> - no need to wait; authorisation is already done.
   *
   * @get result
   * @type {boolean}
   */
  this.is_pending = undefined;

  /**
   * Location primary key in {@link \RsLocationSql} table.
   *
   * @delete get
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * User primary key in {@link \PassportLoginSql} table.
   *
   * @delete get
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_AuthorizeSupport_Request_RequestModel);

/**
 * @inheritDoc
 */
Wl_Business_AuthorizeSupport_Request_RequestModel.prototype.config=function()
{
  return {"a_field": {"is_pending": {"get": {"result": true}},"k_location": {"delete": {"get": true},"get": {"get": true}},"uid": {"delete": {"get": true},"get": {"get": true}}}};
};