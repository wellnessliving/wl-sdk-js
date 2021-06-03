/**
 * Api endpoint used to retrieve list of services.
 *
 * ## Dispatched URL:
 * * <tt>/cp/v1/partners/{partner_id}/venues/{venue_id}/services?page={page}&page_size={page_size}</tt>.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_ClassPass_ServiceListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Pagination information. See {@link \Wl\ClassPass\Pagination}.
   *
   * @get result
   * @type {{}}
   */
  this.pagination = undefined;

  /**
   * List of services.
   *
   * @get result
   * @type {*}
   */
  this.services = undefined;

  /**
   * Partner ID.
   *
   * @get get
   * @type {string}
   */
  this.s_partner_id = undefined;

  /**
   * Venue ID.
   *
   * @get get
   * @type {string}
   */
  this.s_venue_id = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_ClassPass_ServiceListModel);

/**
 * @inheritDoc
 */
Wl_ClassPass_ServiceListModel.prototype.config=function()
{
  return {"a_field": {"pagination": {"get": {"result": true}},"services": {"get": {"result": true}},"s_partner_id": {"get": {"get": true}},"s_venue_id": {"get": {"get": true}}}};
};