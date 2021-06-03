/**
 * Retrieves information about current score.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Reward_Score_Current_CurrentModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business";

  /**
   * Current user's rank in the first leaderboard.
   *
   * @get result
   * @type {number}
   */
  this.i_board_rank = undefined;

  /**
   * Current score in wellnessliving points.
   *
   * @get result
   * @type {number}
   */
  this.i_score = undefined;

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
   * Title of the first leaderboard.
   *
   * @get result
   * @type {string}
   */
  this.s_board_title = undefined;

  /**
   * UID to retrieve information about.
   *
   * Primary key in {@link \PassportLoginSql}.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reward_Score_Current_CurrentModel);

/**
 * @inheritDoc
 */
Wl_Reward_Score_Current_CurrentModel.prototype.config=function()
{
  return {"a_field": {"i_board_rank": {"get": {"result": true}},"i_score": {"get": {"result": true}},"k_business": {"get": {"get": true}},"s_board_title": {"get": {"result": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Reward_Score_Current_CurrentModel.instanceGet
 * @param {string} uid UID to retrieve information about. Primary key in {@link \PassportLoginSql}.
 * @param {string} k_business ID of a business to show information for. Primary key in {@link \RsBusinessSql}.
 * @returns {Wl_Reward_Score_Current_CurrentModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */