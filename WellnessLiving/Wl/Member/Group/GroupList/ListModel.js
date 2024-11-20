/**
 * Member groups list.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Member_Group_GroupList_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Member_Group_GroupList_ListModel_a_member_group
   * @property {string} k_member_group Member group identifier, primary key in {@link \Wl\Member\Group\Sql}.
   * @property {string} text_title Member group name.
   */

  /**
   * Member groups list:
   * <dl>
   *   <dt>
   *     string <var>k_member_group</var>
   *   </dt>
   *   <dd>
   *     Member group identifier, primary key in {@link \Wl\Member\Group\Sql}.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     Member group name.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Member_Group_GroupList_ListModel_a_member_group[]}
   */
  this.a_member_group = undefined;

  /**
   * List of groups to be deleted.
   * Each element is a primary key in {@link \Wl\Member\Group\Sql}.
   *
   * @delete post
   * @type {{}}
   */
  this.a_member_group_delete = [];

  /**
   * List of groups in the order in which they will be saved.
   * Each element is a primary key in {@link \Wl\Member\Group\Sql}.
   *
   * @put post
   * @type {{}}
   */
  this.a_member_group_order = [];

  /**
   * List of groups for filtering groups of business.
   *
   * `null` in the case when need to return all groups of business.
   *
   * @get get
   * @type {?{}}
   */
  this.a_member_group_select = null;

  /**
   * Whether include "Isaac Churn Risk" group.
   *
   * @get get
   * @type {boolean}
   */
  this.is_churn_risk = false;

  /**
   * Whether include a list of members of groups.
   *
   * @get get
   * @type {boolean}
   */
  this.is_return_members = false;

  /**
   * Business to get information for.
   *
   * @delete get
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Member_Group_GroupList_ListModel);

/**
 * @inheritDoc
 */
Wl_Member_Group_GroupList_ListModel.prototype.config=function()
{
  return {"a_field": {"a_member_group": {"get": {"result": true}},"a_member_group_delete": {"delete": {"post": true}},"a_member_group_order": {"put": {"post": true}},"a_member_group_select": {"get": {"get": true}},"is_churn_risk": {"get": {"get": true}},"is_return_members": {"get": {"get": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Member_Group_GroupList_ListModel.instanceGet
 * @param {string} k_business Business to get information for.
 * @returns {Wl_Member_Group_GroupList_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */