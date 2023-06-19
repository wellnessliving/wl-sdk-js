/**
 * Allows new clients to be registered.
 *
 * WellnessLiving recommends using the {@link Wl_Lead_LeadModel} endpoint to register new users.
 * This endpoint is not enabled by default. Contact WellnessLiving to enable this endpoint for your business.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Passport_Login_Register_RegisterModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Core_Passport_Login_Register_RegisterModel_a_data
   * @property {string} [k_business] The key of the business for wellnessliving project to register user in.
   * 
   * Behavior is different for different applications. If application is connected to the certain business, this
   * property can be always empty - all clients will be registered in the connected business. If business is set
   * for such application and is different from the business from application settings, error occurs.
   * 
   * If application is not connected to the business, any business key can be set. This does not require any special
   * privileges, as registration is a public available action.
   */

  /**
   * The additional data about new users.
   *
   * <dl>
   *   <dt>string <var>[k_business]</var></dt>
   *   <dd>
   *     The key of the business for wellnessliving project to register user in.
   *
   *     Behavior is different for different applications. If application is connected to the certain business, this
   *     property can be always empty - all clients will be registered in the connected business. If business is set
   *     for such application and is different from the business from application settings, error occurs.
   *
   *     If application is not connected to the business, any business key can be set. This does not require any special
   *     privileges, as registration is a public available action.
   *   </dd>
   * </dl>
   *
   * @post post
   * @type {Core_Passport_Login_Register_RegisterModel_a_data}
   */
  this.a_data = [];

  /**
   * The application ID. This is a business specific ID required to register clients.
   *
   * @post post
   * @type {string}
   */
  this.s_application = "";

  /**
   * The new client email address.
   *
   * @post post
   * @type {string}
   */
  this.s_mail = "";

  /**
   * The new client given name.
   *
   * @post post
   * @type {string}
   */
  this.s_name_first = "";

  /**
   * The new client surname.
   *
   * @post post
   * @type {string}
   */
  this.s_name_last = "";

  /**
   * The new client password.
   *
   * @post post
   * @type {string}
   */
  this.s_password = "";

  /**
   * The URL to the confirmation page. This link is used in a confirmation email.
   *
   * If empty, URL to default page is used.
   *
   * @post post
   * @type {string}
   */
  this.url_confirm = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Passport_Login_Register_RegisterModel);

/**
 * @inheritDoc
 */
Core_Passport_Login_Register_RegisterModel.prototype.config=function()
{
  return {"a_field": {"a_data": {"post": {"post": true}},"s_application": {"post": {"post": true}},"s_mail": {"post": {"post": true}},"s_name_first": {"post": {"post": true}},"s_name_last": {"post": {"post": true}},"s_password": {"post": {"post": true}},"url_confirm": {"post": {"post": true}}}};
};