/**
 * Manages information about historical visit count.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Visit_VisitHistoricalCount_VisitHistoricalCountModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business";

  /**
   * Count of visits.
   *
   * @post get
   * @type {number}
   */
  this.i_visit = undefined;

  /**
   * Business key.
   *
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * User key.
   *
   * @post get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Visit_VisitHistoricalCount_VisitHistoricalCountModel);

/**
 * @inheritDoc
 */
Wl_Visit_VisitHistoricalCount_VisitHistoricalCountModel.prototype.config=function()
{
  return {"a_field": {"i_visit": {"post": {"get": true}},"k_business": {"post": {"get": true}},"uid": {"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Visit_VisitHistoricalCount_VisitHistoricalCountModel.instanceGet
 * @param {string} uid User key.
 * @param {string} k_business Business key.
 * @returns {Wl_Visit_VisitHistoricalCount_VisitHistoricalCountModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */