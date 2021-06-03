/**
 * Point of entry for user signing up.
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
   * @property {string} [k_business] Key of the business for wellnessliving project to register user in.
   * 
   * Behavior is different for different applications. If application is connected to the certain business, this
   * property can be always empty - all clients will be registered in the connected business. If business is set
   * for such application and is different from the business from application settings, error occurs.
   * 
   * If application is not connected to the business, any business key can be set. This does not require any special
   * privileges, as registration is a public available action.
   */

  /**
   * Additional data about new users.
   *
   * <dl>
   *   <dt>string <var>[k_business]</var></dt>
   *   <dd>
   *     Key of the business for wellnessliving project to register user in.
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
   * Application ID.
   *
   * @post post
   * @type {string}
   */
  this.s_application = "";

  /**
   * Email.
   *
   * @post post
   * @type {string}
   */
  this.s_mail = "";

  /**
   * First name.
   *
   * @post post
   * @type {string}
   */
  this.s_name_first = "";

  /**
   * Last name.
   *
   * @post post
   * @type {string}
   */
  this.s_name_last = "";

  /**
   * Password.
   *
   * @post post
   * @type {string}
   */
  this.s_password = "";

  /**
   * Password confirmation.
   *
   * @post post
   * @type {string}
   */
  this.s_password_confirm = "";

  /**
   * URL to confirmation page. This link will be used in a confirmation email.
   *
   * If empty, URL to default page will be used.
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
  return {"a_field": {"a_data": {"post": {"post": true}},"s_application": {"post": {"post": true}},"s_mail": {"post": {"post": true}},"s_name_first": {"post": {"post": true}},"s_name_last": {"post": {"post": true}},"s_password": {"post": {"post": true}},"s_password_confirm": {"post": {"post": true}},"url_confirm": {"post": {"post": true}}}};
};