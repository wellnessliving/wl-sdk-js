/**
 * Retrieves information about reward board item.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Reward_Board_ElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_reward_board,uid";

  /**
   * List of reward board elements information.
   *
   * @get result
   * @type {?{}[]}
   */
  this.a_reward = null;

  /**
   * List of users to get information for. Primary keys in {@link \PassportLoginSql} table.
   *
   * <tt>null</tt> for mode of single user.
   *
   * @get get
   * @type {?string[]}
   */
  this.a_uid = null;

  /**
   * Score in points.
   *
   * @get result
   * @type {number}
   */
  this.i_score = undefined;

  /**
   * Business to show information for.
   *
   * Primary key in {@link \RsBusinessSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Reward board to show information for.
   *
   * Primary key in {@link \RsRewardBoardSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_reward_board = "0";

  /**
   * User name.
   *
   * @get result
   * @type {string}
   */
  this.s_name = undefined;

  /**
   * User to retrieve information about.
   *
   * Primary key in {@link \PassportLoginSql}.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  /**
   * User logo.
   *
   * @get result
   * @type {string}
   */
  this.url_logo = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reward_Board_ElementModel);

/**
 * @inheritDoc
 */
Wl_Reward_Board_ElementModel.prototype.config=function()
{
  return {"a_field": {"a_reward": {"get": {"result": true}},"a_uid": {"get": {"get": true}},"i_score": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_reward_board": {"get": {"get": true}},"s_name": {"get": {"result": true}},"uid": {"get": {"get": true}},"url_logo": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Reward_Board_ElementModel.instanceGet
 * @param {string} k_business Business to show information for. Primary key in {@link \RsBusinessSql}.
 * @param {string} k_reward_board Reward board to show information for. Primary key in {@link \RsRewardBoardSql}.
 * @param {string} uid User to retrieve information about. Primary key in {@link \PassportLoginSql}.
 * @returns {Wl_Reward_Board_ElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */