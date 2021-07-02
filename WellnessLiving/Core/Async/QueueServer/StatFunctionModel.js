/**
 * Returns complete list of all functions in the system.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Async_QueueServer_StatFunctionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A list of functions.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_function = undefined;

  /**
   * Name of a provider which information should be shown.
   *
   * @get get
   * @type {string}
   */
  this.s_provider = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Async_QueueServer_StatFunctionModel);

/**
 * @inheritDoc
 */
Core_Async_QueueServer_StatFunctionModel.prototype.config=function()
{
  return {"a_field": {"a_function": {"get": {"result": true}},"s_provider": {"get": {"get": true}}}};
};