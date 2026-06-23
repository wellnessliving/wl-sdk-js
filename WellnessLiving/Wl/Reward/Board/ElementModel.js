/**
 * Retrieves information about reward board item.
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
   * @typedef {{}} Wl_Reward_Board_ElementModel_a_reward
   * @property {number} i_score Score in points.
   * @property {string} text_name Reward name.
   * @property {string} uid User key.
   * @property {string} url_logo URL to the user logo image.
   */

  /**
   * List of reward board elements. `null` if not loaded.
   * Each element:
   *
   * @get result
   * @type {?Wl_Reward_Board_ElementModel_a_reward[]}
   */
  this.a_reward = null;

  /**
   * List of users to get information for.
   *
   * `null` for mode of single user.
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
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Reward board to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_reward_board = "";

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
   * @get get
   * @type {string}
   */
  this.uid = "";

  /**
   * User logo.
   *
   * @get result
   * @type {string}
   */
  this.url_logo = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reward_Board_ElementModel);

/**
 * @inheritDoc
 */
Wl_Reward_Board_ElementModel.prototype.config=function()
{
  return {"a_field":{"a_reward":{"get":{"result":true}},"a_uid":{"get":{"get":true}},"i_score":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_reward_board":{"get":{"get":true}},"s_name":{"get":{"result":true}},"uid":{"get":{"get":true}},"url_logo":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Reward_Board_ElementModel.instanceGet
 * @param {string} k_business Business to show information for.
 * @param {string} k_reward_board Reward board to show information for.
 * @param {string} uid User to retrieve information about.
 * @returns {Wl_Reward_Board_ElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves information about reward board item.
 *
 * In single-user mode returns the user's score, name, and avatar on the specified board; in multi-user mode
 * accepts a list of UIDs and returns an array of score, name, and avatar entries for all of them.
 *
 * @function
 * @name Wl_Reward_Board_ElementModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
