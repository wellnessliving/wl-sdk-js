/**
 * Saves error to log.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Debug_ErrorModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of errors. For structure see {@link Core_Debug_ErrorModel.a_error_list}.
   *
   * @post post
   * @type {{}}
   */
  this.a_error_list = [];

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Debug_ErrorModel);

/**
 * @inheritDoc
 */
Core_Debug_ErrorModel.prototype.config=function()
{
  return {"a_field": {"a_error_list": {"post": {"post": true}}}};
};