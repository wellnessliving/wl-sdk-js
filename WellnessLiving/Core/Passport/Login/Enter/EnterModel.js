/**
 * Signs a user in.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Passport_Login_Enter_EnterModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Additional data for user authorization.
   *
   * @post post
   * @type {{}}
   */
  this.json_data = [];

  /**
   * Answer to the captcha if needed.
   *
   * @post post
   * @type {string}
   */
  this.s_captcha = "";

  /**
   * The user's login.
   *
   * @post post
   * @type {string}
   */
  this.s_login = "";

  /**
   * A copy of notepad that was used to hash user password.
   *
   * See {@link Core_Passport_Login_Enter_EnterModel.s_password} for details.
   *
   * @post post
   * @type {string}
   */
  this.s_notepad = "";

  /**
   * The hash of the user password.
   *
   * Use `Core_Passport_Login_Enter_NotepadModel.hash()` to evaluate password hash.
   *
   * @post post
   * @type {string}
   */
  this.s_password = "";

  /**
   * Whether and how the user login and password should be remembered.
   *
   * The accepted values are as follows:
   * <ul>
   *   <li>`''` Empty line (default value) if you do not want to remember anything.</li>
   *   <li>`'login'` Remember only user login.</li>
   *   <li>`'password'` Remember user login and password.</li>
   * </ul>
   *
   * @post post
   * @type {string}
   */
  this.s_remember = "";

  /**
   * Optional URL to get captcha image.
   *
   * This field is filled in a case when a captcha code is required to sign in.
   *
   * @post error
   * @type {string}
   */
  this.url_captcha = undefined;

  /**
   * Optional url for redirection after sign in in web application.
   *
   * @post result
   * @type {string}
   */
  this.url_redirect = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Passport_Login_Enter_EnterModel);

/**
 * @inheritDoc
 */
Core_Passport_Login_Enter_EnterModel.prototype.config=function()
{
  return {"a_field": {"json_data": {"post": {"post": true}},"s_captcha": {"post": {"post": true}},"s_login": {"post": {"post": true}},"s_notepad": {"post": {"post": true}},"s_password": {"post": {"post": true}},"s_remember": {"post": {"post": true}},"url_captcha": {"post": {"error": true}},"url_redirect": {"post": {"result": true}}}};
};