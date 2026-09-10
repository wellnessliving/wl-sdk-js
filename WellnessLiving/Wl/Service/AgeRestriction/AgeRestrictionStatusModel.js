/**
 * Checks if client can book class with age restrictions.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Service_AgeRestriction_AgeRestrictionStatusModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_class_period,uid";

  /**
   * Whether a client can book class.
   *
   * @get result
   * @type {boolean}
   */
  this.can_book = undefined;

  /**
   * Whether a client can book class.
   *
   * @get get
   * @type {string}
   */
  this.dtu_date = "";

  /**
   * Class period key.
   *
   * Empty value means not set.
   *
   * @get get
   * @type {string}
   */
  this.k_class_period = "";

  /**
   * User key.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Service_AgeRestriction_AgeRestrictionStatusModel);

/**
 * @inheritDoc
 */
Wl_Service_AgeRestriction_AgeRestrictionStatusModel.prototype.config=function()
{
  return {"a_field":{"can_book":{"get":{"result":true}},"dtu_date":{"get":{"get":true}},"k_class_period":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Service_AgeRestriction_AgeRestrictionStatusModel.instanceGet
 * @param {string} k_class_period Class period key. Empty value means not set.
 * @param {string} uid User key.
 * @returns {Wl_Service_AgeRestriction_AgeRestrictionStatusModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Checks if client can book class with age restrictions.
 *
 * Resolves the class period date at the client's profile timezone (or the location timezone,
 * if the profile timezone is not enabled) and checks the age restriction status for that date.
 * Sets `can_book` to `true` only when the restriction status is available for booking.
 *
 * @function
 * @name Wl_Service_AgeRestriction_AgeRestrictionStatusModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
