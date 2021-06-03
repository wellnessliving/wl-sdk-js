/**
 * Retrieves a list with reward action categories.
 *
 * This model is generated automatically based on API.
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
   * @property {?number} id_reward_action_category ID of reward actions category type. One of {@link RsRewardActionCategorySid} constants. <tt>null</tt> for custom reward actions categories.
   * @property {string} k_reward_action_category ID of reward actions category in database. Primary key in {@link RsRewardActionCategorySql} table.
   * @property {string} s_title Title of the reward action.
   */

  /**
   * <dl>
   *   <dt>
   *     int|null <var>id_reward_action_category</var>
   *   </dt>
   *   <dd>
   *     ID of reward actions category type. One of {@link RsRewardActionCategorySid} constants. <tt>null</tt> for custom reward actions categories.
   *   </dd>
   *   <dt>
   *     string <var>k_reward_action_category</var>
   *   </dt>
   *   <dd>
   *     ID of reward actions category in database. Primary key in {@link RsRewardActionCategorySql} table.
   *   </dd>
   *   <dt>
   *     string <var>s_title</var>
   *   </dt>
   *   <dd>
   *     Title of the reward action.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Reward_Action_CategoryList_CategoryListModel_a_category}
   */
  this.a_category = undefined;

  /**
   * ID of a business to show information for.
   *
   * Primary key in {@link \RsBusinessSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Reward_Action_CategoryList_CategoryListModel);

/**
 * @inheritDoc
 */
Wl_Reward_Action_CategoryList_CategoryListModel.prototype.config=function()
{
  return {"a_field": {"a_category": {"get": {"result": true}},"k_business": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Reward_Action_CategoryList_CategoryListModel.instanceGet
 * @param {string} k_business ID of a business to show information for. Primary key in {@link \RsBusinessSql}.
 * @returns {Wl_Reward_Action_CategoryList_CategoryListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */