/**
 * Api to return backend settings for the given user inside given business.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Page_Backend_BackendConfigModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * Data for the navigation banner template.
   *
   * Method {@link \Wl\Page\Backend\BackendConfigApi::headQuick()} is preparing the data.
   *
   * @get result
   * @type {{}}
   */
  this.a_head_quick = undefined;

  /**
   * Data for the left panel template.
   *
   * Method {@link \Wl\Page\Backend\BackendConfigApi::panelLeft()} is preparing the data.
   *
   * @get result
   * @type {{}}
   */
  this.a_panel_left = undefined;

  /**
   * Whether user has passed partner program manage privilege.
   *
   * @get result
   * @type {boolean}
   */
  this.can_partner = undefined;

  /**
   * Whether user can use smart search or not.
   *
   * @get result
   * @type {boolean}
   */
  this.can_search_uid = undefined;

  /**
   * Defines state of the search in top navigation banner.
   *
   * @get result
   * @type {boolean}
   */
  this.is_search_lock = undefined;

  /**
   * Business key from {@link \RsBusinessSql}.
   *
   * @get get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * User key from {@link \PassportLoginSql}.
   *
   * @get get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Page_Backend_BackendConfigModel);

/**
 * @inheritDoc
 */
Wl_Page_Backend_BackendConfigModel.prototype.config=function()
{
  return {"a_field": {"a_head_quick": {"get": {"result": true}},"a_panel_left": {"get": {"result": true}},"can_partner": {"get": {"result": true}},"can_search_uid": {"get": {"result": true}},"is_search_lock": {"get": {"result": true}},"k_business": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Page_Backend_BackendConfigModel.instanceGet
 * @param {string} k_business Business key from {@link \RsBusinessSql}.
 * @param {string} uid User key from {@link \PassportLoginSql}.
 * @returns {Wl_Page_Backend_BackendConfigModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */