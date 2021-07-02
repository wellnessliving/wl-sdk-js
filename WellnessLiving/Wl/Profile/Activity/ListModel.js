/**
 * Retrieves a list of activity items to show in user profile.
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
   * A list of activity items. Each value is a primary key in {@link RsLoginActivitySql}.
   *
   * @get result
   * @type {string[]}
   */
  this.a_activity = undefined;

  /**
   * ID of a business to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * ID of a user to show information for.
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
 * @param {string} k_business ID of a business to show information for.
 * @param {string} uid ID of a user to show information for.
 * @returns {Wl_Profile_Activity_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */