/**
 * Point to check if a user is flagged in a location.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Location_Flag_FlagModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_location,uid";

  /**
   * @typedef {{}} Wl_Location_Flag_FlagModel_a_flag
   * @property {string} uid Key: Primary key in the {@link \PassportLogin} table.
   * @property {boolean} is_flag Value: <tt>true</tt> if user is flagged; <tt>false</tt> otherwise.
   */

  /**
   * Array with structure:<dl>
   *   <dt>string <var>uid</var></dt>
   *   <dd>Key: Primary key in the {@link \PassportLogin} table.</dd>
   *   <dt>bool <var>is_flag</var></dt>
   *   <dd>Value: <tt>true</tt> if user is flagged; <tt>false</tt> otherwise.</dd>
   * </dl>
   * <tt>null</tt> until loaded or when <var>a_uid</var> was not set.
   *
   * @get result
   * @type {Wl_Location_Flag_FlagModel_a_flag}
   */
  this.a_flag = undefined;

  /**
   * User keys. Each element is a primary key in the {@link \PassportLogin} table.
   * <tt>null</tt> if not set.
   *
   * @get get
   * @type {?string[]}
   */
  this.a_uid = null;

  /**
   * <tt>true</tt> if user is flagged; <tt>false</tt> otherwise.
   * <tt>null</tt> until loaded or when <var>a_uid</var> was not set.
   *
   * @get result
   * @type {boolean}
   */
  this.is_flag = undefined;

  /**
   * Location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * User's primary key.
   * <tt>null</tt> if not set.
   *
   * @get get
   * @type {?string}
   */
  this.uid = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Location_Flag_FlagModel);

/**
 * @inheritDoc
 */
Wl_Location_Flag_FlagModel.prototype.config=function()
{
  return {"a_field": {"a_flag": {"get": {"result": true}},"a_uid": {"get": {"get": true}},"is_flag": {"get": {"result": true}},"k_location": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Location_Flag_FlagModel.instanceGet
 * @param {string} k_location Location key.
 * @param {?string} uid User's primary key. <tt>null</tt> if not set.
 * @returns {Wl_Location_Flag_FlagModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */