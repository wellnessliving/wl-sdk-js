/**
 * Returns complete list of all workers in the system.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Async_QueueServer_StatWorkerModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A list of workers.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_worker = undefined;

  /**
   * Name of a provider which information should be shown.
   *
   * @get get
   * @type {string}
   */
  this.s_provider = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Async_QueueServer_StatWorkerModel);

/**
 * @inheritDoc
 */
Core_Async_QueueServer_StatWorkerModel.prototype.config=function()
{
  return {"a_field": {"a_worker": {"get": {"result": true}},"s_provider": {"get": {"get": true}}}};
};