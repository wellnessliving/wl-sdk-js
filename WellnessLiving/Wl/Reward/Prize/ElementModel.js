/**
 * Retrieves information about redeemable prize item.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Reward_Prize_ElementModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business,k_reward_prize";

  /**
   * Prize price in wellnessliving points.
   *
   * @get result
   * @type {number}
   */
  this.i_score = undefined;

  /**
   * Business to show information for.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of login prize.
   *
   * @post result
   * @type {string}
   */
  this.k_login_prize = undefined;

  /**
   * Key of redeemable prize.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_reward_prize = "";

  /**
   * User friendly prize description.
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

WlSdk_ModelAbstract.extend(Wl_Reward_Prize_ElementModel);

/**
 * @inheritDoc
 */
Wl_Reward_Prize_ElementModel.prototype.config=function()
{
  return {"a_field":{"i_score":{"get":{"result":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_login_prize":{"post":{"result":true}},"k_reward_prize":{"get":{"get":true},"post":{"get":true}},"s_description":{"get":{"result":true}},"uid":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Reward_Prize_ElementModel.instanceGet
 * @param {string} uid User to retrieve information about.
 * @param {string} k_business Business to show information for.
 * @param {string} k_reward_prize Key of redeemable prize.
 * @returns {Wl_Reward_Prize_ElementModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves information about redeemable prize item.
 *
 * Returns the point cost and description for the specified redeemable prize in the given business.
 *
 * @function
 * @name Wl_Reward_Prize_ElementModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Redeems selected prize.
 *
 * Deducts the required points from the user's reward balance and records the redemption, returning the key
 * of the created login prize record.
 *
 * @function
 * @name Wl_Reward_Prize_ElementModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
