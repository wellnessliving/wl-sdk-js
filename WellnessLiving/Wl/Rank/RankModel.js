/**
 * Gets belts list of a business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Rank_RankModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * Rank category keys. Used to filter belts by belt categories.
   *
   * @get get
   * @type {string[]}
   */
  this.a_rank_category = undefined;

  /**
   * @typedef {{}} Wl_Rank_RankModel_a_rank_list
   * @property {string} k_rank A belt key.
   * @property {string} k_rank_category A belt category key.
   * @property {string} text_rank Belt title.
   * @property {string} text_rank_category Belt category title.
   */

  /**
   * A list of belts, keys, and information. Each element is an array with the following information:
   *
   * @get result
   * @type {Wl_Rank_RankModel_a_rank_list[]}
   */
  this.a_rank_list = undefined;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Rank_RankModel);

/**
 * @inheritDoc
 */
Wl_Rank_RankModel.prototype.config=function()
{
  return {"a_field":{"a_rank_category":{"get":{"get":true}},"a_rank_list":{"get":{"result":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Rank_RankModel.instanceGet
 * @param {string} k_business Business key.
 * @returns {Wl_Rank_RankModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets belts list of a business.
 *
 * Returns all belts for the specified business, optionally filtered by belt category keys, including each belt's
 * title and its parent category title.
 *
 * @function
 * @name Wl_Rank_RankModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
