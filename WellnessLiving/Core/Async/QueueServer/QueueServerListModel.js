/**
 * Returns a list of queue servers.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Async_QueueServer_QueueServerListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A list of queue servers.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_queue = undefined;

  /**
   * Name of a provider which information should be shown.
   *
   * @get get
   * @type {string}
   */
  this.s_provider = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Async_QueueServer_QueueServerListModel);

/**
 * @inheritDoc
 */
Core_Async_QueueServer_QueueServerListModel.prototype.config=function()
{
  return {"a_field": {"a_queue": {"get": {"result": true}},"s_provider": {"get": {"get": true}}}};
};