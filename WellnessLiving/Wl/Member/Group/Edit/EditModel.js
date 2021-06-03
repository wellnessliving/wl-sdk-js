/**
 * Point to add or change a client group.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Member_Group_Edit_EditModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Entity in array format.
   * For more information about the format, see {@link \Wl\Search\Criteria\SearchCriteriaList::createArray()} method.
   *
   * @post post
   * @put post
   * @type {{}}
   */
  this.a_criteria = [];

  /**
   * Search entity CID list.
   * Constants from {@link \Wl\Search\SearchEntityAbstract} subclasses.
   *
   * @post post
   * @put post
   * @type {number[]}
   */
  this.a_search_entity = [];

  /**
   * @typedef {{}} Wl_Member_Group_Edit_EditModel_a_staff_role_selected
   * @property {number} id_privilege_role ID of privilege role. Constant from {@link \RsPrivilegeRoleSid}.
   * @property {string} k_business_role Key of the business role. Primary key in {@link \RsBusinessRoleSql} table.
   */

  /**
   * Selected staff roles of the search template.
   *
   * <dl>
   *   <dt>int <var>id_privilege_role</var></dt>
   *   <dd>ID of privilege role. Constant from {@link \RsPrivilegeRoleSid}.</dd>
   *   <dt>string <var>k_business_role</var></dt>
   *   <dd>Key of the business role. Primary key in {@link \RsBusinessRoleSql} table.</dd>
   * </dl>
   *
   * @post post
   * @put post
   * @type {Wl_Member_Group_Edit_EditModel_a_staff_role_selected[]}
   */
  this.a_staff_role_selected = undefined;

  /**
   * Type of share option.
   * One of {@link ShareSid} constants.
   *
   * @post post
   * @put post
   * @type {string}
   */
  this.id_share = undefined;

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

  /**
   * Member group primary key in {@link \Wl\Member\Group\Sql} table.
   *
   * @get get
   * @post get,result
   * @put get
   * @type {string}
   */
  this.k_member_group = undefined;

  /**
   * Key of existing template.
   * Primary key in the {@link SearchTemplateSql} table.
   *
   * Can be empty if template needs to be created.
   *
   * @get get,result
   * @post result
   * @put get
   * @type {string}
   */
  this.k_search_template = "";

  /**
   * Unique string identifying the name of the search group.
   *
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.s_search_group = "";

  /**
   * Title for a client group.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.text_title = undefined;

  /**
   * User key.
   * Primary key in the {@link \PassportLoginSql} table.
   *
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Member_Group_Edit_EditModel);

/**
 * @inheritDoc
 */
Wl_Member_Group_Edit_EditModel.prototype.config=function()
{
  return {"a_field": {"a_criteria": {"post": {"post": true},"put": {"post": true}},"a_search_entity": {"post": {"post": true},"put": {"post": true}},"a_staff_role_selected": {"post": {"post": true},"put": {"post": true}},"id_share": {"post": {"post": true},"put": {"post": true}},"k_business": {"get": {"get": true},"post": {"get": true},"put": {"get": true}},"k_member_group": {"get": {"get": true},"post": {"get": true,"result": true},"put": {"get": true}},"k_search_template": {"get": {"get": true,"result": true},"post": {"result": true},"put": {"get": true}},"s_search_group": {"get": {"get": true},"post": {"get": true},"put": {"get": true}},"text_title": {"get": {"result": true},"post": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true},"put": {"get": true}}}};
};