/**
 * Retrieves information about reward action item.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Reward_Action_ElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business,k_reward_action";

  /**
   * Points amount that will be added to user account after successful accomplishment of reward action.
   *
   * @get result
   * @type {number}
   */
  this.i_score = undefined;

  /**
   * Reward score type ID.
   *
   * @get result
   * @type {?number}
   */
  this.id_reward_score = null;

  /**
   * <tt>true</tt> if user has requested points for action accomplishment, <tt>false</tt> otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_request = undefined;

  /**
   * Business to show information for.
   *
   * Primary key in {@link \RsBusinessSql}.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Reward action to show information for.
   *
   * Primary key in {@link \RsRewardActionSql}.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_reward_action = "0";

  /**
   * User friendly reward action description.
   *
   * @get result
   * @type {string}
   */
  this.s_description = undefined;

  /**
   * User to retrieve information about.
   *
   * Primary key in {@link \PassportLoginSql}.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reward_Action_ElementModel);

/**
 * @inheritDoc
 */
Wl_Reward_Action_ElementModel.prototype.config=function()
{
  return {"a_field": {"i_score": {"get": {"result": true}},"id_reward_score": {"get": {"result": true}},"is_request": {"get": {"result": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_reward_action": {"get": {"get": true},"post": {"get": true}},"s_description": {"get": {"result": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Reward_Action_ElementModel.instanceGet
 * @param {string} uid User to retrieve information about. Primary key in {@link \PassportLoginSql}.
 * @param {string} k_business Business to show information for. Primary key in {@link \RsBusinessSql}.
 * @param {string} k_reward_action Reward action to show information for. Primary key in {@link \RsRewardActionSql}.
 * @returns {Wl_Reward_Action_ElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */