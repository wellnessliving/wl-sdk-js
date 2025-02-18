/**
 * Allows to get and update settings of the client search in Staff Back Office.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Search_SearchSettingsModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * `true` if found client should be automatically check-in if possible.
   * `false` if not.
   * `null` if setting should not be changed within the put request.
   *
   * @get result
   * @put post
   * @type {?boolean}
   */
  this.is_auto_check_in = null;

  /**
   * `true` if enterprise clients (clients from different franchisees) should be included in the result. Can be applied
   *   only in the franchise businesses.
   * `false`if not.
   * `null` if setting should not be changed within the put request.
   *
   * @get result
   * @put post
   * @type {?boolean}
   */
  this.is_franchisee_search_wide = null;

  /**
   * `true` if inactive clients should be included in the result.
   * `false`if not.
   * `null` if setting should not be changed within the put request.
   *
   * @get result
   * @put post
   * @type {?boolean}
   */
  this.is_inactive = null;

  /**
   * `true` if member ID should be shown in the result.
   * `false`if not.
   * `null` if setting should not be changed within the put request.
   *
   * @get result
   * @put post
   * @type {?boolean}
   */
  this.is_show_client_id = null;

  /**
   * `true` if email should be shown in the result.
   * `false` if not.
   * `null` if setting should not be changed within the put request.
   *
   * @get result
   * @put post
   * @type {?boolean}
   */
  this.is_show_email = null;

  /**
   * `true` if phone number should be shown in the result.
   * `false` if not.
   * `null` if setting should not be changed within the put request.
   *
   * @get result
   * @put post
   * @type {?boolean}
   */
  this.is_show_phone = null;

  /**
   * Key of the business.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Login_Search_SearchSettingsModel);

/**
 * @inheritDoc
 */
Wl_Login_Search_SearchSettingsModel.prototype.config=function()
{
  return {"a_field": {"is_auto_check_in": {"get": {"result": true},"put": {"post": true}},"is_franchisee_search_wide": {"get": {"result": true},"put": {"post": true}},"is_inactive": {"get": {"result": true},"put": {"post": true}},"is_show_client_id": {"get": {"result": true},"put": {"post": true}},"is_show_email": {"get": {"result": true},"put": {"post": true}},"is_show_phone": {"get": {"result": true},"put": {"post": true}},"k_business": {"get": {"get": true},"put": {"get": true}}}};
};