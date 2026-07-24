/**
 * Retrieves all reward action categories for business specified in
 * {@link Wl_Reward_Action_CategoryList_CategoryListModel.k_business}.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Reward_Action_CategoryList_CategoryListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Reward_Action_CategoryList_CategoryListModel_a_category
   * @property {number} id_reward_action_category ID of reward actions category type. One of {@link RsRewardActionCategorySid} constants. `null` for custom reward actions categories.
   * @property {string} k_reward_action_category ID of reward actions category in database.
   * @property {string} s_title Title of the reward action.
   */

  /**
   * @get result
   * @type {Wl_Reward_Action_CategoryList_CategoryListModel_a_category}
   */
  this.a_category = undefined;

  /**
   * ID of a business to show information for.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reward_Action_CategoryList_CategoryListModel);

/**
 * @inheritDoc
 */
Wl_Reward_Action_CategoryList_CategoryListModel.prototype.config=function()
{
  return {"a_field":{"a_category":{"get":{"result":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Reward_Action_CategoryList_CategoryListModel.instanceGet
 * @param {string} k_business ID of a business to show information for.
 * @returns {Wl_Reward_Action_CategoryList_CategoryListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves all reward action categories for business specified in
{@link Wl_Reward_Action_CategoryList_CategoryListModel.k_business}.
 *
 * Returns the list of reward action categories including category type ID, database key, and title for the
 * given business.
 *
 * @function
 * @name Wl_Reward_Action_CategoryList_CategoryListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
