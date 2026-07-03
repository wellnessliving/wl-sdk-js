/**
 * Checks if user [FlagApi](/Wl/Location/Flag/Flag.json) is flagged in location [FlagApi](/Wl/Location/Flag/Flag.json) or
 * each of users [FlagApi](/Wl/Location/Flag/Flag.json) is flagged in location [FlagApi](/Wl/Location/Flag/Flag.json).
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
   * @property {boolean} is_flag Value: `true` if user is flagged; `false` otherwise.
   * @property {string} uid Key is passport login ID.
   */

  /**
   * Array with structure:
   * `null` until loaded or when `a_uid` was not set.
   *
   * @get result
   * @type {Wl_Location_Flag_FlagModel_a_flag}
   */
  this.a_flag = undefined;

  /**
   * @typedef {{}} Wl_Location_Flag_FlagModel_a_restrictions_multiple
   * @property {boolean} is_book `true` if the user cannot make new reservations.
   * @property {boolean} is_purchase `true` if the user cannot make new purchases.
   */

  /**
   * Array, where keys are UIDs to be checked and values are same as [FlagApi](/Wl/Location/Flag/Flag.json).
   * `null` if user is not flagged in the location.
   *
   * This field is set, if API gets [FlagApi](/Wl/Location/Flag/Flag.json) and not [FlagApi](/Wl/Location/Flag/Flag.json) properties.
   *
   * Keys are user keys. 
   * Values are flag restriction arrays:
   *
   * @get result
   * @type {?Wl_Location_Flag_FlagModel_a_restrictions_multiple}
   */
  this.a_restrictions_multiple = null;

  /**
   * @typedef {{}} Wl_Location_Flag_FlagModel_a_restrictions_single
   * @property {boolean} is_book `true` if client cannot make new reservations.
   * @property {boolean} is_purchase `true` if client cannot make new purchases.
   */

  /**
   * `null` if user is not flagged in the location.
   *
   * This field is set, if API gets [FlagApi](/Wl/Location/Flag/Flag.json) and not [FlagApi](/Wl/Location/Flag/Flag.json) properties.
   *
   * @get result
   * @type {?Wl_Location_Flag_FlagModel_a_restrictions_single}
   */
  this.a_restrictions_single = null;

  /**
   * User keys.
   * `null` if not set.
   *
   * @get get
   * @type {?string[]}
   */
  this.a_uid = null;

  /**
   * `true` if the user is flagged and can make purchases, but cannot make new reservations, `false` if otherwise.
   *
   * `null` until loaded or when [FlagApi](/Wl/Location/Flag/Flag.json) was not set.
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
  this.k_location = "";

  /**
   * The user's key.
   * `null` if not set.
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
  return {"a_field":{"a_flag":{"get":{"result":true}},"a_restrictions_multiple":{"get":{"result":true}},"a_restrictions_single":{"get":{"result":true}},"a_uid":{"get":{"get":true}},"is_flag":{"get":{"result":true}},"k_location":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Location_Flag_FlagModel.instanceGet
 * @param {string} k_location The location key.
 * @param {?string} uid The user's key. `null` if not set.
 * @returns {Wl_Location_Flag_FlagModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Checks if user [FlagApi](/Wl/Location/Flag/Flag.json) is flagged in location [FlagApi](/Wl/Location/Flag/Flag.json) or
each of users [FlagApi](/Wl/Location/Flag/Flag.json) is flagged in location [FlagApi](/Wl/Location/Flag/Flag.json).
 *
 * Accepts either a single user key (`uid`) or an array of user keys (`a_uid`) and returns the flag status
 * for each, including whether the flagged user is restricted from booking or purchasing at the location.
 *
 * @function
 * @name Wl_Location_Flag_FlagModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
