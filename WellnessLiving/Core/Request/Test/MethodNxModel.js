/**
 * API for testing base implementation for method:
 * * {@link Core_Request_Model.delete()}
 * * {@link Core_Request_Model.get()}
 * * {@link Core_Request_Model.patch()}
 * * {@link Core_Request_Model.post()}
 * * {@link Core_Request_Model.put()}
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Request_Test_MethodNxModel()
{
  WlSdk_ModelAbstract.apply(this);

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Request_Test_MethodNxModel);

/**
 * @inheritDoc
 */
Core_Request_Test_MethodNxModel.prototype.config=function()
{
  return {"a_field": []};
};