/**
 * API for testing with {@link \Core\Request\Api::DENY_DEFAULT} equal <tt>false</tt>.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Request_Test_RequestAllowModel()
{
  WlSdk_ModelAbstract.apply(this);

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Request_Test_RequestAllowModel);

/**
 * @inheritDoc
 */
Core_Request_Test_RequestAllowModel.prototype.config=function()
{
  return {"a_field": []};
};