/**
 * Retrieves information about reward config of the business.
 *
 * This model is generated automatically based on API.
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
   * <tt>true</tt> Reward program is disabled, <tt>false</tt> - otherwise.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_disabled_reward_program = undefined;

  /**
   * Business key. Primary key in the {@link \RsBusinessSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Reward_Config_RewardConfigModel);

/**
 * @inheritDoc
 */
Wl_Business_Reward_Config_RewardConfigModel.prototype.config=function()
{
  return {"a_field": {"is_disabled_reward_program": {"get": {"result": true},"post": {"post": true}},"k_business": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Business_Reward_Config_RewardConfigModel.instanceGet
 * @param {string} k_business Business key. Primary key in the {@link \RsBusinessSql} table.
 * @returns {Wl_Business_Reward_Config_RewardConfigModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */