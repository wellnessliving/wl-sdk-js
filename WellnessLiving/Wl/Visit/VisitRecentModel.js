/**
 * Returns recent visit statistics for the user at the business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Visit_VisitRecentModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business";

  /**
   * Date and time of the last attended visit in UTC, excluding today's gym visits.
   *
   * Empty string if there are no qualifying visits.
   *
   * @get result
   * @type {string}
   */
  this.dtu_visit_last = undefined;

  /**
   * Number of attended visits in the last 30 days.
   *
   * The 30-day window starts at the beginning of the day 29 days ago on the clock of the location
   *  given in {@link Wl_Visit_VisitRecentModel.k_location} and ends at the end of today on that clock.
   *
   * @get result
   * @type {number}
   */
  this.i_visit_month = undefined;

  /**
   * Number of attended visits in the last 7 days.
   *
   * The 7-day window starts at the beginning of the day 6 days ago on the clock of the location
   *  given in {@link Wl_Visit_VisitRecentModel.k_location} and ends at the end of today on that clock.
   *
   * @get result
   * @type {number}
   */
  this.i_visit_week = undefined;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Location key.
   *
   * Used to determine the time zone for the day boundaries.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * Location key of the last attended visit, excluding today's gym visits.
   *
   * Empty string if there are no qualifying visits.
   *
   * @get result
   * @type {string}
   */
  this.k_location_visit_last = undefined;

  /**
   * User key.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Visit_VisitRecentModel);

/**
 * @inheritDoc
 */
Wl_Visit_VisitRecentModel.prototype.config=function()
{
  return {"a_field":{"dtu_visit_last":{"get":{"result":true}},"i_visit_month":{"get":{"result":true}},"i_visit_week":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_location":{"get":{"get":true}},"k_location_visit_last":{"get":{"result":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Visit_VisitRecentModel.instanceGet
 * @param {string} uid User key.
 * @param {string} k_business Business key.
 * @returns {Wl_Visit_VisitRecentModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns recent visit statistics for the user at the business.
 *
 * Counts attended visits in the last 30 and 7 days and finds the last visit that is not a gym check-in
 * of today. The day boundaries are computed in the time zone of the location given in
 * {@link Wl_Visit_VisitRecentModel.k_location}.
 *
 * @function
 * @name Wl_Visit_VisitRecentModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
