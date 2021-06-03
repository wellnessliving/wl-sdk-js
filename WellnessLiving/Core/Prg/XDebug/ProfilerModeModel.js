/**
 * Manages xdebug profiler mode.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Prg_XDebug_ProfilerModeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * <tt>true</tt> if xdebug profiler enable, <tt>false</tt> otherwise.
   *
   * @post result
   * @type {boolean}
   */
  this.is_enable = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Prg_XDebug_ProfilerModeModel);

/**
 * @inheritDoc
 */
Core_Prg_XDebug_ProfilerModeModel.prototype.config=function()
{
  return {"a_field": {"is_enable": {"post": {"result": true}}}};
};