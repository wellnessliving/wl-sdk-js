/**
 * Information about reward actions of given type in business.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Reward_Action_ActionTypeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "id_reward_score,k_business";

  /**
   * @typedef {{}} Wl_Reward_Action_ActionTypeModel_a_reward_action
   * @property {number} i_score Number of points for this reward action.
   */

  /**
   * Information about reward actions. Every element has next keys:
   * <dl>
   *   <dt>
   *     int <var>i_score</var>
   *   </dt>
   *   <dd>
   *     Number of points for this reward action.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Reward_Action_ActionTypeModel_a_reward_action[]}
   */
  this.a_reward_action = undefined;

  /**
   * ID of type of reward action. One of {@link RsRewardScoreSid} constants.
   *
   * @get get
   * @type {number}
   */
  this.id_reward_score = 0;

  /**
   * Key of a business to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reward_Action_ActionTypeModel);

/**
 * @inheritDoc
 */
Wl_Reward_Action_ActionTypeModel.prototype.config=function()
{
  return {"a_field": {"a_reward_action": {"get": {"result": true}},"id_reward_score": {"get": {"get": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Reward_Action_ActionTypeModel.instanceGet
 * @param {number} id_reward_score ID of type of reward action. One of {@link RsRewardScoreSid} constants.
 * @param {string} k_business Key of a business to show information for.
 * @returns {Wl_Reward_Action_ActionTypeModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */