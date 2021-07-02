/**
 * Allows to remove all tasks of specified function from task queue.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Async_Service_DeleteModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * IP address of a queue server at which queue should be purged.
   *
   * Empty string to purge all available queue servers.
   *
   * @post post
   * @type {string}
   */
  this.ip_queue = undefined;

  /**
   * Name of a function to purge.
   *
   * @post post
   * @type {string}
   */
  this.s_function = undefined;

  /**
   * Name of a provider which queue should be purged.
   *
   * @post get
   * @type {string}
   */
  this.s_provider = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Async_Service_DeleteModel);

/**
 * @inheritDoc
 */
Core_Async_Service_DeleteModel.prototype.config=function()
{
  return {"a_field": {"ip_queue": {"post": {"post": true}},"s_function": {"post": {"post": true}},"s_provider": {"post": {"get": true}}}};
};