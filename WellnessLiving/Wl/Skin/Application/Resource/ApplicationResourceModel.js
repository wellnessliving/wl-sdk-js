/**
 * Point to get applications resources.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Skin_Application_Resource_ApplicationResourceModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Application data.
   *
   * @get result
   * @type {{}}
   */
  this.a_application = undefined;

  /**
   * Business primary key in {@link \RsBusinessSql} table.
   * Empty to get data for all businesses.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Skin_Application_Resource_ApplicationResourceModel);

/**
 * @inheritDoc
 */
Wl_Skin_Application_Resource_ApplicationResourceModel.prototype.config=function()
{
  return {"a_field": {"a_application": {"get": {"result": true}},"k_business": {"get": {"get": true}}}};
};