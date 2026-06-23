/**
 * Removes the association between a website client and the Apple account.
 * Invalidates the tokens and associated client authorizations.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Social_Apple_Login_AppleLoginModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The application ID.
   *
   * @delete post
   * @post post
   * @type {string}
   */
  this.text_application = "";

  /**
   * The authorization code.
   *
   * @post post
   * @type {string}
   */
  this.text_authorization = "";

  /**
   * User's first name.
   *
   * @post post
   * @type {string}
   */
  this.text_name_first = "";

  /**
   * User's last name.
   *
   * @post post
   * @type {string}
   */
  this.text_name_last = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Social_Apple_Login_AppleLoginModel);

/**
 * @inheritDoc
 */
Social_Apple_Login_AppleLoginModel.prototype.config=function()
{
  return {"a_field":{"text_application":{"delete":{"post":true},"post":{"post":true}},"text_authorization":{"post":{"post":true}},"text_name_first":{"post":{"post":true}},"text_name_last":{"post":{"post":true}}}};
};

/**
 * Removes the association between a website client and the Apple account.
Invalidates the tokens and associated client authorizations.
 *
 * Requires the user to be signed in. Accepts the application ID, retrieves the Apple sign-in certificate
 * for that application, and unlinks the Apple account from the current user.
 *
 * @function
 * @name Social_Apple_Login_AppleLoginModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Signs user in with Apple.
 *
 * Accepts the application ID, the Apple authorization code, and optional first and last name values.
 * If the user is already signed in, binds the Apple account to their existing account; otherwise,
 * signs them in or creates a new account using the Apple identity.
 *
 * @function
 * @name Social_Apple_Login_AppleLoginModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
