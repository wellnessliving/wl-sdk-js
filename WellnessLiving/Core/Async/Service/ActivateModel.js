/**
 * Allows to activate or deactivate a worker server.
 *
 * Deactivation of a worker server may be needed for maintenance work on the server.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Async_Service_ActivateModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * IP address of a worker that should be activated or deactivated.
   *
   * @post post
   * @type {string}
   */
  this.ip_worker = undefined;

  /**
   * Whether this worker server should be activated or deactivated.
   *
   * <tt>true</tt> to activate this worker server.
   *
   * <tt>false</tt> to deactivate this worker server.
   *
   * @post post
   * @type {string}
   */
  this.is_active = undefined;

  /**
   * Name of a provider which worker server should be activated or deactivated.
   *
   * @post get
   * @type {string}
   */
  this.s_provider = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Async_Service_ActivateModel);

/**
 * @inheritDoc
 */
Core_Async_Service_ActivateModel.prototype.config=function()
{
  return {"a_field": {"ip_worker": {"post": {"post": true}},"is_active": {"post": {"post": true}},"s_provider": {"post": {"get": true}}}};
};