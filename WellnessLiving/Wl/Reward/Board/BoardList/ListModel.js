/**
 * Retrieves all reward boards for business specified in {@link Wl_Reward_Board_BoardList_ListModel}.
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
   * @typedef {{}} Wl_Reward_Board_BoardList_ListModel_a_reward_board
   * @property {string} k_reward_board Reward board key. `0` for the all-time system board.
   * @property {string} s_title Board title.
   */

  /**
   * A list of reward boards. `null` if not loaded.
   * Each element:
   *
   * @get result
   * @type {?Wl_Reward_Board_BoardList_ListModel_a_reward_board[]}
   */
  this.a_reward_board = null;

  /**
   * Business to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * User to retrieve information about.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reward_Board_BoardList_ListModel);

/**
 * @inheritDoc
 */
Wl_Reward_Board_BoardList_ListModel.prototype.config=function()
{
  return {"a_field":{"a_reward_board":{"get":{"result":true}},"k_business":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Reward_Board_BoardList_ListModel.instanceGet
 * @param {string} k_business Business to show information for.
 * @param {string} uid User to retrieve information about.
 * @returns {Wl_Reward_Board_BoardList_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves all reward boards for business specified in {@link Wl_Reward_Board_BoardList_ListModel}.
 *
 * Returns the list of reward boards available to the given user in the business, including board key and title,
 * filtered to exclude boards the user is not eligible to view.
 *
 * @function
 * @name Wl_Reward_Board_BoardList_ListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
