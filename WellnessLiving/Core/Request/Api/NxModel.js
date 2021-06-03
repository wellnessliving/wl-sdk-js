/**
 * Always throws {@link \Core\Request\Api\DebugException}, for all methods.
 *
 * This class is used when an API request to an unexisting endpoint is performed.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Request_Api_NxModel()
{
  WlSdk_ModelAbstract.apply(this);

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Request_Api_NxModel);

/**
 * @inheritDoc
 */
Core_Request_Api_NxModel.prototype.config=function()
{
  return {"a_field": []};
};