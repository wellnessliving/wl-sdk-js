/**
 * Returns a list of all partners.
 *
 * Dispatched URL: <tt>/cp/v1/partners/{partner_id}/venues/{venue_id}/schedules</tt>.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_ClassPass_LocationScheduleModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * See {@link \Wl\ClassPass\LocationScheduleListData::toClassPass()} for documentation.
   *
   * @get result
   * @type {{}}
   */
  this.pagination = undefined;

  /**
   * See {@link \Wl\ClassPass\LocationScheduleListData::toClassPass()} for documentation.
   *
   * @get result
   * @type {{}}
   */
  this.schedules = [];

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

WlSdk_ModelAbstract.extend(Wl_ClassPass_LocationScheduleModel);

/**
 * @inheritDoc
 */
Wl_ClassPass_LocationScheduleModel.prototype.config=function()
{
  return {"a_field": {"pagination": {"get": {"result": true}},"schedules": {"get": {"result": true}},"s_partner": {"get": {"get": true}},"s_venue": {"get": {"get": true}}}};
};