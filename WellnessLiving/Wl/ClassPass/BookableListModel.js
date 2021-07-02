/**
 * Api endpoint used to retrieve list of bookables.
 * Basically this is a working schedule of specific resource. Resource can be whether staff members or assets.
 *
 * ## Dispatched URL:
 * * <tt>/cp/v1/partners/{partner_id}/venues/{venue_id}/bookables</tt>.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_ClassPass_BookableListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of bookable items.
   *
   * @get result
   * @type {*}
   */
  this.bookables = undefined;

  /**
   * Pagination information. See {@link \Wl\ClassPass\Pagination}.
   *
   * @get result
   * @type {{}}
   */
  this.pagination = undefined;

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

WlSdk_ModelAbstract.extend(Wl_ClassPass_BookableListModel);

/**
 * @inheritDoc
 */
Wl_ClassPass_BookableListModel.prototype.config=function()
{
  return {"a_field": {"bookables": {"get": {"result": true}},"pagination": {"get": {"result": true}},"s_partner_id": {"get": {"get": true}},"s_venue_id": {"get": {"get": true}}}};
};