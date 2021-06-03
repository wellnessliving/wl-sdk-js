/**
 * System menu for admins.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Html_Menu_MenuModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "id_place,k_business,uid";

  /**
   * Menu list or an empty array if the menu for the specified unit could not be loaded
   * or user does not have enough privileges.
   *
   * @get result
   * @type {{}}
   */
  this.a_menu = undefined;

  /**
   * Current place ID.
   * Constant from {@link \RsPlaceSid}.
   *
   * @get get
   * @type {number}
   */
  this.id_place = 0;

  /**
   * The business in which the user wants to see the menu.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The user for which the menu should be displayed.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Html_Menu_MenuModel);

/**
 * @inheritDoc
 */
Wl_Html_Menu_MenuModel.prototype.config=function()
{
  return {"a_field": {"a_menu": {"get": {"result": true}},"id_place": {"get": {"get": true}},"k_business": {"get": {"get": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Html_Menu_MenuModel.instanceGet
 * @param {number} id_place Current place ID. Constant from {@link \RsPlaceSid}.
 * @param {string} k_business The business in which the user wants to see the menu.
 * @param {string} uid The user for which the menu should be displayed.
 * @returns {Wl_Html_Menu_MenuModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */