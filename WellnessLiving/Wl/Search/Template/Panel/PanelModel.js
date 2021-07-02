/**
 * Search template settings API.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Search_Template_Panel_PanelModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business,s_search_group,k_search_template";

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
   * @typedef {{}} Wl_Search_Template_Panel_PanelModel_a_panel
   * @property {string[]} a_staff_selected List of user keys of shared search template.
   * @property {number} cid_search_entity Search entity CID. Constant from {@link \Wl\Search\SearchEntityAbstract} subclasses.
   * @property {number} id_share Share option constant. See {@link ShareSid}.
   * @property {string} k_search_template Key of existing template. Primary key in the {@link SearchTemplateSql} table.
   * @property {boolean} show_staff_role_list Whether staff role list should be shown for share.
   * @property {string} text_title Search template title.
   */

  /**
   * Variables to pass into the panel template.
   * <dl>
   *   <dt>
   *     string[] <var>a_staff_selected</var>
   *   </dt>
   *   <dd>
   *     List of user keys of shared search template.
   *   </dd>
   *   <dt>
   *     int <var>cid_search_entity</var>
   *   </dt>
   *   <dd>
   *     Search entity CID. Constant from {@link \Wl\Search\SearchEntityAbstract} subclasses.
   *   </dd>
   *   <dt>
   *     int <var>id_share</var>
   *   </dt>
   *   <dd>
   *     Share option constant. See {@link ShareSid}.
   *   </dd>
   *   <dt>
   *     string <var>k_search_template</var>
   *   </dt>
   *   <dd>
   *     Key of existing template. Primary key in the {@link SearchTemplateSql} table.
   *   </dd>
   *   <dt>
   *     bool <var>show_staff_role_list</var>
   *   </dt>
   *   <dd>
   *     Whether staff role list should be shown for share.
   *   </dd>
   *   <dt>
   *     string <var>text_title</var>
   *   </dt>
   *   <dd>
   *     Search template title.
   *   </dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Search_Template_Panel_PanelModel_a_panel}
   */
  this.a_panel = undefined;

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
   * @typedef {{}} Wl_Search_Template_Panel_PanelModel_a_staff_role_selected
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
   * @type {Wl_Search_Template_Panel_PanelModel_a_staff_role_selected[]}
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
   * Business key.
   * Primary key in the {@link \RsBusinessSql} table.
   *
   * @get get
   * @post get
   * @put get
   * @type {string}
   */
  this.k_business = undefined;

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
   * Search template title.
   *
   * @post post
   * @put post
   * @type {string}
   */
  this.text_title = "";

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

WlSdk_ModelAbstract.extend(Wl_Search_Template_Panel_PanelModel);

/**
 * @inheritDoc
 */
Wl_Search_Template_Panel_PanelModel.prototype.config=function()
{
  return {"a_field": {"a_criteria": {"post": {"post": true},"put": {"post": true}},"a_panel": {"get": {"result": true}},"a_search_entity": {"post": {"post": true},"put": {"post": true}},"a_staff_role_selected": {"post": {"post": true},"put": {"post": true}},"id_share": {"post": {"post": true},"put": {"post": true}},"k_business": {"get": {"get": true},"post": {"get": true},"put": {"get": true}},"k_search_template": {"get": {"get": true,"result": true},"post": {"result": true},"put": {"get": true}},"s_search_group": {"get": {"get": true},"post": {"get": true},"put": {"get": true}},"text_title": {"post": {"post": true},"put": {"post": true}},"uid": {"get": {"get": true},"post": {"get": true},"put": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Search_Template_Panel_PanelModel.instanceGet
 * @param {string} uid User key. Primary key in the {@link \PassportLoginSql} table.
 * @param {string} k_business Business key. Primary key in the {@link \RsBusinessSql} table.
 * @param {string} s_search_group Unique string identifying the name of the search group.
 * @param {string} k_search_template Key of existing template. Primary key in the {@link SearchTemplateSql} table. Can be empty if template needs to be created.
 * @returns {Wl_Search_Template_Panel_PanelModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */