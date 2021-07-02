/**
 * Allows to disable or activate a queue server.
 *
 * Disabling of a queue server may be needed for maintenance work on the server.
 *
 * See <tt>namespace.Core/Async/QueueServer/doc/statuses-of-queue-servers.md</tt> for information about possible
 * transitions of queue servers between statuses.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Async_QueueServer_DisableModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * IP address of a queue server that should be disabled or activated.
   *
   * @post post
   * @type {string}
   */
  this.ip_queue = undefined;

  /**
   * Whether this queue server should be disabled or activated.
   *
   * <tt>true</tt> to activate this queue server.
   *
   * <tt>false</tt> to disable this queue server.
   *
   * @post post
   * @type {boolean}
   */
  this.is_active = undefined;

  /**
   * Name of a provider which queue server should be disabled or activated.
   *
   * @post get
   * @type {string}
   */
  this.s_provider = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Async_QueueServer_DisableModel);

/**
 * @inheritDoc
 */
Core_Async_QueueServer_DisableModel.prototype.config=function()
{
  return {"a_field": {"ip_queue": {"post": {"post": true}},"is_active": {"post": {"post": true}},"s_provider": {"post": {"get": true}}}};
};