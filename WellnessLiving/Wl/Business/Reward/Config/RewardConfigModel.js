/**
 * Returns the reward program configuration for the specified business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Reward_Config_RewardConfigModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * `true` Reward program is disabled, `false` - otherwise.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_disabled_reward_program = false;

  /**
   * Business key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Reward_Config_RewardConfigModel);

/**
 * @inheritDoc
 */
Wl_Business_Reward_Config_RewardConfigModel.prototype.config=function()
{
  return {"a_field":{"is_disabled_reward_program":{"get":{"result":true},"post":{"post":true}},"k_business":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Business_Reward_Config_RewardConfigModel.instanceGet
 * @param {string} k_business Business key.
 * @returns {Wl_Business_Reward_Config_RewardConfigModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns the reward program configuration for the specified business.
 *
 * Used in the backend settings editor to show the current enabled or disabled state of the reward
 * program before the staff member makes a change. Always reads live data, bypassing the cache.
 *
 * @function
 * @name Wl_Business_Reward_Config_RewardConfigModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Updates the reward program enabled or disabled state for the specified business.
 *
 * Used in the backend settings editor when a staff member turns the reward program on or off. The
 * change is recorded in the reward audit log.
 *
 * @function
 * @name Wl_Business_Reward_Config_RewardConfigModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
