/**
 * Retrieves a list of available reward actions.
 *
 * This model is generated automatically based on API.
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
   * A list reward actions. Every element has next keys:
   * <dl>
   *   <dt>
   *     int|bool <var>id_reward_action_category</var>
   *   </dt>
   *   <dd>
   *     ID of reward actions category type. One of {@link RsRewardActionCategorySid} constants. <tt>false</tt> for custom reward actions categories.
   *   </dd>
   *   <dt>
   *     string <var>k_reward_action</var>
   *   </dt>
   *   <dd>
   *     ID of reward action. Primary key in {@link \RsRewardActionSql} table.
   *   </dd>
   *   <dt>
   *     string <var>k_reward_action_category</var>
   *   </dt>
   *   <dd>
   *     ID of reward action category in database. Primary key in {@link \RsRewardActionCategorySql} table.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {string[]}
   */
  this.a_reward_action = undefined;

  /**
   * Key of current business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Key of reward action category.
   *
   * @get get
   * @type {string}
   */
  this.k_reward_action_category = "0";

  /**
   * Key of a user to show information for.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reward_Action_ActionModel);

/**
 * @inheritDoc
 */
Wl_Reward_Action_ActionModel.prototype.config=function()
{
  return {"a_field": {"a_reward_action": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_reward_action_category": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
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