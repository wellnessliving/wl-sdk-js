/**
 * Login Search settings.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Search_Filter_LoginSearchFilterModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * User's search settings.
   *
   * @get result
   * @type {{}}
   */
  this.a_search_filter = undefined;

  /**
   * Indicate if redirection to client's profile page was made using the login search panel.
   *
   * @get result
   * @type {boolean}
   */
  this.is_login_search = undefined;

  /**
   * State of auto check-in service.
   *
   * @get result
   * @type {boolean}
   */
  this.is_reception = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Search_Filter_LoginSearchFilterModel);

/**
 * @inheritDoc
 */
Wl_Login_Search_Filter_LoginSearchFilterModel.prototype.config=function()
{
  return {"a_field": {"a_search_filter": {"get": {"result": true}},"is_login_search": {"get": {"result": true}},"is_reception": {"get": {"result": true}}}};
};