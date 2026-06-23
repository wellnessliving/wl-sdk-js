/**
 * Returns list of dates where client logged his progress.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Member_Progress_Log_Compare_CompareModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * List of local dates of the progress log.
   *
   * @get result
   * @type {string[]}
   */
  this.a_date = undefined;

  /**
   * Key of business to get information for.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * User key to search dates for.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Member_Progress_Log_Compare_CompareModel);

/**
 * @inheritDoc
 */
Wl_Member_Progress_Log_Compare_CompareModel.prototype.config=function()
{
  return {"a_field":{"a_date":{"get":{"result":true}},"k_business":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Member_Progress_Log_Compare_CompareModel.instanceGet
 * @param {string} k_business Key of business to get information for.
 * @param {string} uid User key to search dates for.
 * @returns {Wl_Member_Progress_Log_Compare_CompareModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns list of dates where client logged his progress.
 *
 * Retrieves all distinct dates on which the given user recorded progress entries for the business, excluding
 * the most recent date (since it cannot be compared with itself). Returns an empty array when fewer than two
 * entries exist.
 *
 * @function
 * @name Wl_Member_Progress_Log_Compare_CompareModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
