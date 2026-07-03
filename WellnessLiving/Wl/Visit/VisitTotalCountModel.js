/**
 * Returns the total visit count for the user at the business.
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
   * Sum of attended visits and historical visits.
   *
   * @get result
   * @type {number}
   */
  this.i_visit_total = undefined;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * User key.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Visit_VisitTotalCountModel);

/**
 * @inheritDoc
 */
Wl_Visit_VisitTotalCountModel.prototype.config=function()
{
  return {"a_field":{"i_visit_total":{"get":{"result":true}},"k_business":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Visit_VisitTotalCountModel.instanceGet
 * @param {string} uid User key.
 * @param {string} k_business Business key.
 * @returns {Wl_Visit_VisitTotalCountModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns the total visit count for the user at the business.
 *
 * Sums the number of attended visits with the historical visit count carried over for the user, so
 * that visits recorded before the account existed in the system are also counted.
 *
 * @function
 * @name Wl_Visit_VisitTotalCountModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
