/**
 * An endpoint that gets a list of clients whose names match a search string.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Search_StaffApp_ListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "text_search,k_business,is_franchisee_search_wide";

  /**
   * @typedef {{}} Wl_Login_Search_StaffApp_ListModel_a_list
   * @property {string} text_mail Client's email.
   * @property {string} text_name_first Client's first name.
   * @property {string} text_name_last Client's last name.
   * @property {string} text_phone Client's phone.
   * @property {string} text_title The client name.
   * @property {string} uid The client key.
   */

  /**
   * A list of users matching the search string.
   *
   * The list depends on the search query.
   * If the query is empty, recent users will be returned.
   *
   * Each element is an array with the following keys:
   * <dl>
   *   <dt>string <var>text_mail</var></dt>
   *   <dd>Client's email.</dd>
   *   <dt>string <var>text_name_first</var></dt>
   *   <dd>Client's first name.</dd>
   *   <dt>string <var>text_name_last</var></dt>
   *   <dd>Client's last name.</dd>
   *   <dt>string <var>text_phone</var></dt>
   *   <dd>Client's phone.</dd>
   *   <dt>string <var>text_title</var></dt>
   *   <dd>The client name.</dd>
   *   <dt>string <var>uid</var></dt>
   *   <dd>The client key.</dd>
   * </dl>
   *
   * @get result
   * @type {Wl_Login_Search_StaffApp_ListModel_a_list[]}
   */
  this.a_list = undefined;

  /**
   * If `true`, then this user can add other users via the Add Client page.
   *
   * @get result
   * @type {boolean}
   */
  this.can_add = undefined;

  /**
   * <tt>true</tt> - search among whole franchise; <tt>false</tt> - search in specified business only.
   *
   * @get get
   * @type {boolean}
   */
  this.is_franchisee_search_wide = false;

  /**
   * The business key number used internally by WellnessLiving.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The search string. Clients can be matched by name or email.
   *
   * @get get
   * @type {string}
   */
  this.text_search = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Search_StaffApp_ListModel);

/**
 * @inheritDoc
 */
Wl_Login_Search_StaffApp_ListModel.prototype.config=function()
{
  return {"a_field": {"a_list": {"get": {"result": true}},"can_add": {"get": {"result": true}},"is_franchisee_search_wide": {"get": {"get": true}},"k_business": {"get": {"get": true}},"text_search": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Login_Search_StaffApp_ListModel.instanceGet
 * @param {string} text_search The search string. Clients can be matched by name or email.
 * @param {string} k_business The business key number used internally by WellnessLiving.
 * @param {boolean} is_franchisee_search_wide <tt>true</tt> - search among whole franchise; <tt>false</tt> - search in specified business only.
 * @returns {Wl_Login_Search_StaffApp_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */