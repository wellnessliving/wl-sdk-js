/**
 * Retrieves lifetime visit totals.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Attendance_Schedule_Frontend_LifetimeTotalsModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business";

  /**
   * @typedef {{}} Wl_Profile_Attendance_Schedule_Frontend_LifetimeTotalsModel_a_total
   * @property {string} s_value Total value.
   * @property {string} text_title Total title.
   */

  /**
   * Report totals.
   *
   * A set of key-value pairs.
   *
   * Each element has followed structure:
   *
   * @get result
   * @type {Wl_Profile_Attendance_Schedule_Frontend_LifetimeTotalsModel_a_total[]}
   */
  this.a_total = undefined;

  /**
   * The business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The user key.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Attendance_Schedule_Frontend_LifetimeTotalsModel);

/**
 * @inheritDoc
 */
Wl_Profile_Attendance_Schedule_Frontend_LifetimeTotalsModel.prototype.config=function()
{
  return {"a_field":{"a_total":{"get":{"result":true}},"k_business":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Profile_Attendance_Schedule_Frontend_LifetimeTotalsModel.instanceGet
 * @param {string} uid The user key.
 * @param {string} k_business The business key.
 * @returns {Wl_Profile_Attendance_Schedule_Frontend_LifetimeTotalsModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves lifetime visit totals.
 *
 * Returns aggregated lifetime attendance statistics for the specified user in the given
 * business. Used to display summary visit counts and related metrics on the client profile
 * schedule page.
 *
 * @function
 * @name Wl_Profile_Attendance_Schedule_Frontend_LifetimeTotalsModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
