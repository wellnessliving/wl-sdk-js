/**
 * Api to get data of the access groups.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Request_Api_Application_GroupModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A group list. Where key is group key, value is the title of the group.
   * <tt>null</tt> if is not initialized yet.
   *
   * @get result
   * @type {?{}}
   */
  this.a_application_group = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Request_Api_Application_GroupModel);

/**
 * @inheritDoc
 */
Core_Request_Api_Application_GroupModel.prototype.config=function()
{
  return {"a_field": {"a_application_group": {"get": {"result": true}}}};
};