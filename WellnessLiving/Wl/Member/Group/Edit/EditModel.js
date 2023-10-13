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
   * For more information about the format, see {@link Wl\Search\Criteria\SearchCriteriaList::createArray()} method.
   *
   * @post post
   * @put post
   * @type {{}}
   */
  this.a_criteria = [];

  /**
   * Logic connection between criteria.
   * See {@link Wl\Search\Criteria\SearchCriteriaList::$a_criteria_logic} for details.
   *
   * @post post
   * @put post
   * @type {*}
   */
  this.a_logic = undefined;

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
   * @property {number} id_privilege_role ID of privilege role. Constant from {@link RsPrivilegeRoleSid}.
   * @property {string} k_business_role Key of the business role.
   */

  /**
   * Selected staff roles of the search template.
   *
   * <dl>
   *   <dt>int <var>id_privilege_role</var></dt>
   *   <dd>ID of privilege role. Constant from {@link RsPrivilegeRoleSid}.</dd>
   *   <dt>string <var>k_business_role</var></dt>
   *   <dd>Key of the business role.</dd>
   * </dl>
   *
   * @post post
   * @put post
   * @type {Wl_Member_Group_Edit_EditModel_a_staff_role_selected[]}
   */
  this.a_staff_role_selected = undefined;

  /**
   * Shape of icon. One of {@link Wl_Member_Group_ShapeSid} constants.
   *
   * @get result
   * @post post
   * @put post
   * @type {number}
   */
  this.id_member_group_shape = 0;

  /**
   * Type of share option.
   * One of {@link Wl_Member_Group_Edit_ShareSid} constants.
   *
   * @post post
   * @put post
   * @type {string}
   */
  this.id_share = undefined;

  /**
   * Whether Facility Access enabled for group.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_brivo_active = false;

  /**
   * <tt>true</tt> to enable group icon. <tt>false</tt> to disable.
   *
   * @get result
   * @post post
   * @put post
   * @type {boolean}
   */
  this.is_icon = false;

  /**
   * Whether auto-update enabled for group.
   *
   * @get result
   * @post post
   * @type {boolean}
   */
  this.is_update = false;

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
   *
   * Can be empty if template needs to be created.
   *
   * @get get,result
   * @post get,result
   * @put get
   * @type {string}
   */
  this.k_search_template = "";

  /**
   * Hexadecimal color of icon background.
   *
   * @get result
   * @post post
   * @put post
   * @type {string}
   */
  this.s_color_background = "";

  /**
   * Hexadecimal color of icon foreground.
   *
   * @get result
   * @post post
   * @put post
   * @type {string}
   */
  this.s_color_foreground = "";

  /**
   * Characters on icon.
   *
   * @get result
   * @post post
   * @put post
   * @type {string}
   */
  this.s_icon = "";

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
  this.text_title = "";

  /**
   * Additional warning message if there were some minor issues with request.
   *
   * @post result
   * @put result
   * @type {*}
   */
  this.text_warning = undefined;

  /**
   * User key.
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
  return {"a_field": {"a_criteria": {"post": {"post": true},"put": {"post": true}},"a_logic": {"post": {"post": true},"put": {"post": true}},"a_search_entity": {"post": {"post": true},"put": {"post": true}},"a_staff_role_selected": {"post": {"post": true},"put": {"post": true}},"id_member_group_shape": {"get": {"result": true},"post": {"post": true},"put": {"post": true}},"id_share": {"post": {"post": true},"put": {"post": true}},"is_brivo_active": {"get": {"result": true},"post": {"post": true}},"is_icon": {"get": {"result": true},"post": {"post": true},"put": {"post": true}},"is_update": {"get": {"result": true},"post": {"post": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true},"put": {"get": true}},"k_member_group": {"get": {"get": true},"post": {"get": true,"result": true},"put": {"get": true}},"k_search_template": {"get": {"get": true,"result": true},"post": {"get": true,"result": true},"put": {"get": true}},"s_color_background": {"get": {"result": true},"post": {"post": true},"put": {"post": true}},"s_color_foreground": {"get": {"result": true},"post": {"post": true},"put": {"post": true}},"s_icon": {"get": {"result": true},"post": {"post": true},"put": {"post": true}},"s_search_group": {"get": {"get": true},"post": {"get": true},"put": {"get": true}},"text_title": {"get": {"result": true},"post": {"post": true}},"text_warning": {"post": {"result": true},"put": {"result": true}},"uid": {"get": {"get": true},"post": {"get": true},"put": {"get": true}}}};
};