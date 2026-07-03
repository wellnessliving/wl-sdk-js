/**
 * Signs the user in using their login and hashed password.
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
   * @type {string}
   */
  this.json_data = "";

  /**
   * The answer to the captcha, if needed.
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
   * A copy of the notepad that was used to hash the user password.
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
   * Use `Core_Passport_Login_Enter_NotepadModel.hash()` to evaluate the password hash.
   *
   * @post post
   * @type {string}
   */
  this.s_password = "";

  /**
   * Determines whether the user login and password should be remembered, and how they should be remembered.
   *
   * The accepted values are:
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
   * An optional URL for redirection after the user has signed in to the web application.
   *
   * @post result
   * @type {string}
   */
  this.url_redirect = undefined;

  /**
   * Url of previous page if the user was redirected to login.
   *
   * @post post
   * @type {string}
   */
  this.url_return = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Passport_Login_Enter_EnterModel);

/**
 * @inheritDoc
 */
Core_Passport_Login_Enter_EnterModel.prototype.config=function()
{
  return {"a_field":{"json_data":{"post":{"post":true}},"s_captcha":{"post":{"post":true}},"s_login":{"post":{"post":true}},"s_notepad":{"post":{"post":true}},"s_password":{"post":{"post":true}},"s_remember":{"post":{"post":true}},"url_redirect":{"post":{"result":true}},"url_return":{"post":{"post":true}}}};
};

/**
 * Signs the user in using their login and hashed password.
 *
 * Accepts the user login, a password hash derived using the notepad obtained from {@link Core_Passport_Login_Enter_NotepadModel},
 * and an optional remember preference. Validates credentials, enforces CAPTCHA when too many failed
 * attempts have occurred, starts a session for the user, and returns a redirect URL if applicable.
 *
 * @function
 * @name Core_Passport_Login_Enter_EnterModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
