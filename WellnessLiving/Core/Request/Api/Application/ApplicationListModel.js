/**
 * Loads list of applications for editor.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Request_Api_Application_ApplicationListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * A list of applications.
   * <tt>null</tt> if is not initialized yet.
   *
   * @get result
   * @type {?{}[]}
   */
  this.a_list = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Request_Api_Application_ApplicationListModel);

/**
 * @inheritDoc
 */
Core_Request_Api_Application_ApplicationListModel.prototype.config=function()
{
  return {"a_field": {"a_list": {"get": {"result": true}}}};
};