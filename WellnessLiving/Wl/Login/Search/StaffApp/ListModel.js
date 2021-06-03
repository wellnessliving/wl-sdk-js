/**
 * Data model that represents a list of user IDs,
 * depending on the search query and the privileges of the user who searches.
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
   * List of users found.
   *
   * @get result
   * @type {{}[]}
   */
  this.a_list = undefined;

  /**
   * <tt>true</tt> if current user can create new users; <tt>false</tt> otherwise.
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
   * Business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Search query.
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
 * @param {string} text_search Search query.
 * @param {string} k_business Business.
 * @param {boolean} is_franchisee_search_wide <tt>true</tt> - search among whole franchise; <tt>false</tt> - search in specified business only.
 * @returns {Wl_Login_Search_StaffApp_ListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */