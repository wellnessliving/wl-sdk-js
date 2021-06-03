/**
 * Returns a list of all locations of partner.
 *
 * Dispatched URL: <tt>/cp/v1/partners/{partner_id}/venues</tt>.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_ClassPass_LocationListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * See {@link \Wl\ClassPass\LocationListData::toClassPass()} for documentation.
   *
   * @get result
   * @type {*}
   */
  this.pagination = undefined;

  /**
   * See {@link \Wl\ClassPass\LocationListData::toClassPass()} for documentation.
   *
   * @get result
   * @type {{}}
   */
  this.venues = undefined;

  /**
   * Partner ID.
   *
   * @get get
   * @type {string}
   */
  this.s_partner = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_ClassPass_LocationListModel);

/**
 * @inheritDoc
 */
Wl_ClassPass_LocationListModel.prototype.config=function()
{
  return {"a_field": {"pagination": {"get": {"result": true}},"venues": {"get": {"result": true}},"s_partner": {"get": {"get": true}}}};
};