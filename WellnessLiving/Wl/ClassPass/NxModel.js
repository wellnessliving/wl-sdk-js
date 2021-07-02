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
function Wl_ClassPass_NxModel()
{
  WlSdk_ModelAbstract.apply(this);

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_ClassPass_NxModel);

/**
 * @inheritDoc
 */
Wl_ClassPass_NxModel.prototype.config=function()
{
  return {"a_field": []};
};