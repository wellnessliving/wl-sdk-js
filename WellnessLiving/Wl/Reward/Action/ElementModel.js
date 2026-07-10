/**
 * Retrieves information about reward action item.
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
   * @see RsRewardScoreSid
   * @type {?number}
   */
  this.id_reward_score = null;

  /**
   * `true` if user has requested points for action accomplishment, `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_request = undefined;

  /**
   * Business to show information for.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Reward action to show information for.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_reward_action = "";

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
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reward_Action_ElementModel);

/**
 * @inheritDoc
 */
Wl_Reward_Action_ElementModel.prototype.config=function()
{
  return {"a_field":{"i_score":{"get":{"result":true}},"id_reward_score":{"get":{"result":true}},"is_request":{"get":{"result":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_reward_action":{"get":{"get":true},"post":{"get":true}},"s_description":{"get":{"result":true}},"uid":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Reward_Action_ElementModel.instanceGet
 * @param {string} uid User to retrieve information about.
 * @param {string} k_business Business to show information for.
 * @param {string} k_reward_action Reward action to show information for.
 * @returns {Wl_Reward_Action_ElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves information about reward action item.
 *
 * Returns the point value, score type, description, and whether the user has already submitted a points request
 * for the specified reward action.
 *
 * @function
 * @name Wl_Reward_Action_ElementModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Requests points earning.
 *
 * Submits a custom reward points request for the specified action on behalf of the given user and records
 * the pending approval request.
 *
 * @function
 * @name Wl_Reward_Action_ElementModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
