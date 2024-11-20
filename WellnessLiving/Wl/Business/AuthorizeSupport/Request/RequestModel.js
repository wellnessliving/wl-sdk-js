/**
 * An endpoint that allows a franchisor to enter a franchisee business location.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_AuthorizeSupport_Request_RequestModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * If `true`, the user requesting access must obtain approval from the franchisee. Otherwise, this will be `false` if
   * there's no approval required (authorization is already done).
   *
   * @get result
   * @type {boolean}
   */
  this.is_pending = undefined;

  /**
   * The location primary key.
   *
   * @delete get
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * The user's primary key.
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