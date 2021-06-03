/**
 * Search templates menu API.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Search_Template_Menu_MenuModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business,s_search_group";

  /**
   * @typedef {{}} Wl_Search_Template_Menu_MenuModel_a_search_list
   * @property {string} is_default Whether this template is used as default template.
   * @property {string} k_search_template Template key. Primary key in the {@link SearchTemplateSql} table.
   * @property {string} text_title Search template title.
   */

  /**
   * List of saved search templates.
   * <dl>
   *   <dt>
   *     string <var>is_default</var>
   *   </dt>
   *   <dd>
   *     Whether this template is used as default template.
   *   </dd>
   *   <dt>
   *     string <var>k_search_template</var>
   *   </dt>
   *   <dd>
   *     Template key. Primary key in the {@link SearchTemplateSql} table.
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
   * @type {Wl_Search_Template_Menu_MenuModel_a_search_list}
   */
  this.a_search_list = undefined;

  /**
   * Whether given template should be marked as default or not.
   *
   * <tt>null</tt> if field is not set.
   *
   * @post post
   * @type {?boolean}
   */
  this.is_default = null;

  /**
   * Whether the menu is opened.
   *
   * @get result
   * @type {boolean}
   */
  this.is_open = false;

  /**
   * Business key.
   * Primary key in the {@link \RsBusinessSql} table.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of existing template.
   * Primary key in the {@link SearchTemplateSql} table.
   *
   * @delete get
   * @post get
   * @type {string}
   */
  this.k_search_template = "";

  /**
   * Unique string identifying the name of the search group.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.s_search_group = "";

  /**
   * User key.
   * Primary key in the {@link \PassportLoginSql} table.
   *
   * @delete get
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Search_Template_Menu_MenuModel);

/**
 * @inheritDoc
 */
Wl_Search_Template_Menu_MenuModel.prototype.config=function()
{
  return {"a_field": {"a_search_list": {"get": {"result": true}},"is_default": {"post": {"post": true}},"is_open": {"get": {"result": true}},"k_business": {"delete": {"get": true},"get": {"get": true},"post": {"get": true}},"k_search_template": {"delete": {"get": true},"post": {"get": true}},"s_search_group": {"delete": {"get": true},"get": {"get": true},"post": {"get": true}},"uid": {"delete": {"get": true},"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Search_Template_Menu_MenuModel.instanceGet
 * @param {string} uid User key. Primary key in the {@link \PassportLoginSql} table.
 * @param {string} k_business Business key. Primary key in the {@link \RsBusinessSql} table.
 * @param {string} s_search_group Unique string identifying the name of the search group.
 * @returns {Wl_Search_Template_Menu_MenuModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */