/**
 * Retrieves a list of items to show in user profile.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Reward_Board_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_reward_board";

  /**
   * A list of UID items. Each value is a primary key in {@link RsRewardBoardSql}
   *
   * @get result
   * @type {number[]}
   */
  this.a_uid = undefined;

  /**
   * ID of a business to show information for.
   *
   * Primary key in {@link \RsBusinessSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * ID of reward board to show information for.
   *
   * Primary key in {@link \RsRewardBoardSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_reward_board = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reward_Board_ListModel);

/**
 * @inheritDoc
 */
Wl_Reward_Board_ListModel.prototype.config=function()
{
  return {"a_field": {"a_uid": {"get": {"result": true}},"k_business": {"get": {"get": true}},"k_reward_board": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Reward_Board_ListModel.instanceGet
 * @param {string} k_business ID of a business to show information for. Primary key in {@link \RsBusinessSql}.
 * @param {string} k_reward_board ID of reward board to show information for. Primary key in {@link \RsRewardBoardSql}.
 * @returns {Wl_Reward_Board_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */