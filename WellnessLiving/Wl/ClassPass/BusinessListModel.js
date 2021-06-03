/**
 * Returns a list of all partners.
 *
 * Dispatched URL: <tt>/cp/v1/partners</tt>.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_ClassPass_BusinessListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * See {@link \Wl\ClassPass\BusinessListData::toClassPass()} for documentation.
   *
   * @get result
   * @type {{}}
   */
  this.pagination = undefined;

  /**
   * See {@link \Wl\ClassPass\BusinessListData::toClassPass()} for documentation.
   *
   * @get result
   * @type {{}}
   */
  this.partners = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_ClassPass_BusinessListModel);

/**
 * @inheritDoc
 */
Wl_ClassPass_BusinessListModel.prototype.config=function()
{
  return {"a_field": {"pagination": {"get": {"result": true}},"partners": {"get": {"result": true}}}};
};