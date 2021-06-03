/**
 * Sends signal to exit to specified processes.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Debug_Run_KillModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A list of process IDs to kill.
   *
   * @delete get
   * @type {string[]}
   */
  this.a_id = [];

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Debug_Run_KillModel);

/**
 * @inheritDoc
 */
Core_Debug_Run_KillModel.prototype.config=function()
{
  return {"a_field": {"a_id": {"delete": {"get": true}}}};
};