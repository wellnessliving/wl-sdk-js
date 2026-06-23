/**
 * Retrieves a list of redeemable prizes.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Reward_Prize_PrizeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * Array of prize keys.
   *
   * @get result
   * @type {string[]}
   */
  this.a_prize = undefined;

  /**
   * Array of prize scores.
   *
   * @get result
   * @type {number[]}
   */
  this.a_score = undefined;

  /**
   * Key of current business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reward_Prize_PrizeModel);

/**
 * @inheritDoc
 */
Wl_Reward_Prize_PrizeModel.prototype.config=function()
{
  return {"a_field":{"a_prize":{"get":{"result":true}},"a_score":{"get":{"result":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Reward_Prize_PrizeModel.instanceGet
 * @param {string} k_business Key of current business.
 * @returns {Wl_Reward_Prize_PrizeModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves a list of redeemable prizes.
 *
 * Returns all active redeemable prizes for the specified business, ordered by point cost, including the prize key
 * and required score for each item.
 *
 * @function
 * @name Wl_Reward_Prize_PrizeModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
