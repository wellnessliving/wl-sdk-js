/**
 * Returns the total number of visits for a user at a business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Visit_VisitTotalCountModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business";

  /**
   * Total number of visits.
   *
   * @get result
   * @type {number}
   */
  this.i_visit_total = 0;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * User key.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extends(Wl_Visit_VisitTotalCountModel);

/**
 * @inheritDoc
 */
Wl_Visit_VisitTotalCountModel.prototype.config=function()
{
  return {"a_field": {"i_visit_total": {"get": {"result": true}},"k_business": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};