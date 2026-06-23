/**
 * Retrieves a list of activity items to show in user profile.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Activity_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * An array listing client activities, where each activity is provided as an ID number.
   *
   * The order of items in this array is the order in which the elements should be displayed.
   *
   * @get result
   * @type {string[]}
   */
  this.a_activity = undefined;

  /**
   * Ending date of the date range. Optional.
   *
   * This is local business timezone date. This day is included in the result.
   *
   * @get get
   * @type {string}
   */
  this.dl_end = "";

  /**
   * Starting date of the date range. Optional.
   *
   * This is local business timezone date. This day is included in the result.
   *
   * @get get
   * @type {string}
   */
  this.dl_start = "";

  /**
   * The key of the business to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The key of the client to show information for.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Activity_ListModel);

/**
 * @inheritDoc
 */
Wl_Profile_Activity_ListModel.prototype.config=function()
{
  return {"a_field":{"a_activity":{"get":{"result":true}},"dl_end":{"get":{"get":true}},"dl_start":{"get":{"get":true}},"k_business":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Profile_Activity_ListModel.instanceGet
 * @param {string} k_business The key of the business to show information for.
 * @param {string} uid The key of the client to show information for.
 * @returns {Wl_Profile_Activity_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves a list of activity items to show in user profile.
 *
 * Returns the client's activity history for the specified business, filtered by an optional
 * date range. Requires profile-view access and respects activity-type visibility rules for the
 * requesting user.
 *
 * @function
 * @name Wl_Profile_Activity_ListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
