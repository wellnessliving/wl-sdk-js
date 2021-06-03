/**
 * An API to get franchise push task queue data.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Franchise_Push_TaskMonitor_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The list of tasks.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_queue = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Franchise_Push_TaskMonitor_ListModel);

/**
 * @inheritDoc
 */
Wl_Business_Franchise_Push_TaskMonitor_ListModel.prototype.config=function()
{
  return {"a_field": {"a_queue": {"get": {"result": true}}}};
};