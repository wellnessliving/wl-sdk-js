/**
 * Api endpoint used to retrieve list of services.
 *
 * ## Dispatched URL:
 *   <tt>/cp/v1/partners/{partner_id}/venues/{venue_id}/availability?</tt>
 *   <tt>start_date={start_date}&end_date={end_date}</tt>
 *   <tt>&page={page}&page_size={page_size}</tt>
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_ClassPass_AvailabilityListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of availabilities.
   *
   * @get result
   * @type {*}
   */
  this.availabilities = [];

  /**
   * Pagination information. See {@link \Wl\ClassPass\Pagination}.
   *
   * @get result
   * @type {{}}
   */
  this.pagination = undefined;

  /**
   * End date of the range to search availability.
   *
   * @get get
   * @type {string}
   */
  this.end_date = undefined;

  /**
   * Start date of the range to search availability.
   *
   * @get get
   * @type {string}
   */
  this.start_date = undefined;

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

WlSdk_ModelAbstract.extend(Wl_ClassPass_AvailabilityListModel);

/**
 * @inheritDoc
 */
Wl_ClassPass_AvailabilityListModel.prototype.config=function()
{
  return {"a_field": {"availabilities": {"get": {"result": true}},"pagination": {"get": {"result": true}},"end_date": {"get": {"get": true}},"start_date": {"get": {"get": true}},"s_partner_id": {"get": {"get": true}},"s_venue_id": {"get": {"get": true}}}};
};