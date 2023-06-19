/**
 * An endpoint that returns a list of client activities.
 *
 * This model is generated automatically based on API.
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
   * The key of the business to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The key of the client to show information for.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Activity_ListModel);

/**
 * @inheritDoc
 */
Wl_Profile_Activity_ListModel.prototype.config=function()
{
  return {"a_field": {"a_activity": {"get": {"result": true}},"k_business": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Profile_Activity_ListModel.instanceGet
 * @param {string} k_business The key of the business to show information for.
 * @param {string} uid The key of the client to show information for.
 * @returns {Wl_Profile_Activity_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */