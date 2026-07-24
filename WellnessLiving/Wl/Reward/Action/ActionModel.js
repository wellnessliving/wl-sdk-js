/**
 * Retrieves a list of available reward actions.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Reward_Action_ActionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business,k_reward_action_category";

  /**
   * @typedef {{}} Wl_Reward_Action_ActionModel_a_reward_action
   * @property {number} id_reward_action_category ID of reward actions category type. One of {@link RsRewardActionCategorySid} constants. `false` for custom reward actions categories.
   * @property {string} k_reward_action ID of reward action.
   * @property {string} k_reward_action_category ID of reward action category in database.
   */

  /**
   * A list reward actions. Every element has next keys:
   *
   * @get result
   * @type {Wl_Reward_Action_ActionModel_a_reward_action[]}
   */
  this.a_reward_action = undefined;

  /**
   * Key of current business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of reward action category.
   *
   * @get get
   * @type {string}
   */
  this.k_reward_action_category = "";

  /**
   * Key of a user to show information for.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reward_Action_ActionModel);

/**
 * @inheritDoc
 */
Wl_Reward_Action_ActionModel.prototype.config=function()
{
  return {"a_field":{"a_reward_action":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_reward_action_category":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Reward_Action_ActionModel.instanceGet
 * @param {string} uid Key of a user to show information for.
 * @param {string} k_business Key of current business.
 * @param {string} k_reward_action_category Key of reward action category.
 * @returns {Wl_Reward_Action_ActionModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves a list of available reward actions.
 *
 * Returns all reward actions visible to the specified user in the given business, optionally filtered by category,
 * including the score value and request status for each action.
 *
 * @function
 * @name Wl_Reward_Action_ActionModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
