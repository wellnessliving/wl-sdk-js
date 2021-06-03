/**
 * Retrieves a list with information about reward board.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Reward_Board_BoardList_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * A list of information about reward boards.
   *
   * @get result
   * @type {?{}}
   */
  this.a_reward_board = null;

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
   * User to retrieve information about.
   *
   * Primary key in {@link \PassportLoginSql}.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reward_Board_BoardList_ListModel);

/**
 * @inheritDoc
 */
Wl_Reward_Board_BoardList_ListModel.prototype.config=function()
{
  return {"a_field": {"a_reward_board": {"get": {"result": true}},"k_business": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Reward_Board_BoardList_ListModel.instanceGet
 * @param {string} k_business Business to show information for. Primary key in {@link \RsBusinessSql}.
 * @param {string} uid User to retrieve information about. Primary key in {@link \PassportLoginSql}.
 * @returns {Wl_Reward_Board_BoardList_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */