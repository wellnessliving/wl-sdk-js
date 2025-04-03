/**
 * Retrieves information if a user is flagged in a location.
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
   * @property {string} uid Key is passport login ID.
   * @property {boolean} is_flag Value: <tt>true</tt> if user is flagged; <tt>false</tt> otherwise.
   */

  /**
   * Array with structure:<dl>
   *   <dt>string <var>uid</var></dt>
   *   <dd>Key is passport login ID.</dd>
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
   * Array, where keys are UIDs to be checked and values are same as {@link Wl_Location_Flag_FlagModel.a_restrictions_single}.
   * <tt>null</tt> if user is not flagged in the location.
   *
   * This field is set, if API gets {@link Wl_Location_Flag_FlagModel.a_uid} and not {@link Wl_Location_Flag_FlagModel.uid} properties.
   *
   * @get result
   * @type {?{}}
   */
  this.a_restrictions_multiple = null;

  /**
   * @typedef {{}} Wl_Location_Flag_FlagModel_a_restrictions_single
   * @property {boolean} is_book `true` if client cannot make new reservations.
   * @property {boolean} is_purchase `true` if client cannot make new purchases.
   */

  /**
   * <dl>
   *   <dt>bool <var>is_book</var></dt>
   *   <dd>`true` if client cannot make new reservations.</dd>
   *   <dt>bool <var>is_purchase</var></dt>
   *   <dd>`true` if client cannot make new purchases.</dd>
   * </dl>
   *
   * <tt>null</tt> if user is not flagged in the location.
   *
   * This field is set, if API gets {@link Wl_Location_Flag_FlagModel.uid} and not {@link Wl_Location_Flag_FlagModel.a_uid} properties.
   *
   * @get result
   * @type {?Wl_Location_Flag_FlagModel_a_restrictions_single}
   */
  this.a_restrictions_single = null;

  /**
   * User keys. Each element is a primary key in the {@link \PassportLoginSql} table.
   * <tt>null</tt> if not set.
   *
   * @get get
   * @type {?string[]}
   */
  this.a_uid = null;

  /**
   * <tt>true</tt> if the user is flagged and can make purchases, but cannot make new reservations, <tt>false</tt> if otherwise.
   *
   * <tt>null</tt> until loaded or when {@link Wl_Location_Flag_FlagModel.a_uid} was not set.
   *
   * @get result
   * @type {boolean}
   */
  this.is_flag = undefined;

  /**
   * The location key.
   *
   * @get get
   * @type {string}
   */
  this.k_location = undefined;

  /**
   * The user's key.
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
  return {"a_field": {"a_flag": {"get": {"result": true}},"a_restrictions_multiple": {"get": {"result": true}},"a_restrictions_single": {"get": {"result": true}},"a_uid": {"get": {"get": true}},"is_flag": {"get": {"result": true}},"k_location": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Location_Flag_FlagModel.instanceGet
 * @param {string} k_location The location key.
 * @param {?string} uid The user's key. <tt>null</tt> if not set.
 * @returns {Wl_Location_Flag_FlagModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */