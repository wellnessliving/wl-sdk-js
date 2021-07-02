/**
 * Point to save time load from the client side.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Debug_Time_DebugTimeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Serialized time log.
   *
   * @post post
   * @type {string}
   */
  this.text_log = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Debug_Time_DebugTimeModel);

/**
 * @inheritDoc
 */
Core_Debug_Time_DebugTimeModel.prototype.config=function()
{
  return {"a_field": {"text_log": {"post": {"post": true}}}};
};