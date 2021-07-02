/**
 * Retrieves current application version number.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_All_VersionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Current application version number.
   *
   * @get result
   * @type {string}
   */
  this.s_version = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_All_VersionModel);

/**
 * @inheritDoc
 */
Core_All_VersionModel.prototype.config=function()
{
  return {"a_field": {"s_version": {"get": {"result": true}}}};
};