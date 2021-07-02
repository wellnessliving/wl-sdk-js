/**
 * API to receive user cookies from Mindbody.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Import_Migration_Cookie_CookieGeneralModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Key of the business from Mindbody.
   * Note: This key is used to go to the backend page of the business in Mindbody.
   * Key of the business can be a negative number.
   *
   * @get get
   * @type {number}
   */
  this.k_studio = 0;

  /**
   * Cookie key.
   *
   * @get result
   * @type {string}
   */
  this.s_cookie = undefined;

  /**
   * User login for authorization for Mindbody.
   *
   * @get get
   * @type {string}
   */
  this.text_login = "";

  /**
   * User password for authorization for Mindbody.
   *
   * @get get
   * @type {string}
   */
  this.text_password = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Import_Migration_Cookie_CookieGeneralModel);

/**
 * @inheritDoc
 */
Wl_Import_Migration_Cookie_CookieGeneralModel.prototype.config=function()
{
  return {"a_field": {"k_studio": {"get": {"get": true}},"s_cookie": {"get": {"result": true}},"text_login": {"get": {"get": true}},"text_password": {"get": {"get": true}}}};
};