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
   * @property {string} k_member_group Member group identifier, primary key in {@link \WlMemberGroupSql}.
   * @property {string} text_title Member group name.
   */

  /**
   * Member groups list:
   * <dl>
   *   <dt>
   *     string <var>k_member_group</var>
   *   </dt>
   *   <dd>
   *     Member group identifier, primary key in {@link \WlMemberGroupSql}.
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
   * Business to get information for.
   *
   * Primary key in {@link \RsBusinessSql} table.
   *
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
  return {"a_field": {"a_member_group": {"get": {"result": true}},"k_business": {"get": {"get": true},"post": {"get": true},"put": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Member_Group_GroupList_ListModel.instanceGet
 * @param {string} k_business Business to get information for. Primary key in {@link \RsBusinessSql} table.
 * @returns {Wl_Member_Group_GroupList_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */