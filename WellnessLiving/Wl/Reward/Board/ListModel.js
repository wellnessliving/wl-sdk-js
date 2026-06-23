/**
 * Retrieves a list of reward board items to show.
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
   * A list of UID items.
   *
   * @get result
   * @type {number[]}
   */
  this.a_uid = undefined;

  /**
   * ID of a business to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * ID of reward board to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_reward_board = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reward_Board_ListModel);

/**
 * @inheritDoc
 */
Wl_Reward_Board_ListModel.prototype.config=function()
{
  return {"a_field":{"a_uid":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_reward_board":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Reward_Board_ListModel.instanceGet
 * @param {string} k_business ID of a business to show information for.
 * @param {string} k_reward_board ID of reward board to show information for.
 * @returns {Wl_Reward_Board_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves a list of reward board items to show.
 *
 * Returns an ordered list of user IDs ranked by points for the specified reward board, up to the configured
 * maximum number of entries.
 *
 * @function
 * @name Wl_Reward_Board_ListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
