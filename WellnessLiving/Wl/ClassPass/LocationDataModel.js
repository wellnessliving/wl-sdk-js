/**
 * Returns information of one location.
 *
 * Dispatched URL: <tt>/cp/v1/partners/{partner_id}/venues/{venue_id}</tt>.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_ClassPass_LocationDataModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * See {@link \Wl\ClassPass\LocationData::toClassPass()} for documentation.
   *
   * @get result
   * @type {{}}
   */
  this.venue = undefined;

  /**
   * Partner ID.
   *
   * @get get
   * @type {string}
   */
  this.s_partner = undefined;

  /**
   * Venue ID.
   *
   * @get get
   * @type {string}
   */
  this.s_venue = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_ClassPass_LocationDataModel);

/**
 * @inheritDoc
 */
Wl_ClassPass_LocationDataModel.prototype.config=function()
{
  return {"a_field": {"venue": {"get": {"result": true}},"s_partner": {"get": {"get": true}},"s_venue": {"get": {"get": true}}}};
};