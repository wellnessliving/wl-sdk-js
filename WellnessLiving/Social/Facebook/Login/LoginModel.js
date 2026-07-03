/**
 * Authorizes user with facebook.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Social_Facebook_Login_LoginModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "s_token";

  /**
   * The application id.
   *
   * When application not passed, credential loaded from the application, which makes the request,
   * used {@link Core_Request_Api_Application_Credential_CredentialAbstract} for load the credential.
   * For set credential need used {@link Core_Request_Api_Application_Credential_CredentialModel} and set {@link Core_Request_Api_Application_Credential_CredentialModel} to {@link Core_Request_Api_Application_Credential_CredentialAbstract}.
   *
   * When application passed, the credential loaded by application id.
   *
   * @post post
   * @type {?string}
   */
  this.s_application = null;

  /**
   * The Facebook token.
   *
   * @post post
   * @type {string}
   */
  this.s_token = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Social_Facebook_Login_LoginModel);

/**
 * @inheritDoc
 */
Social_Facebook_Login_LoginModel.prototype.config=function()
{
  return {"a_field":{"s_application":{"post":{"post":true}},"s_token":{"post":{"post":true}}}};
};

/**
 * @function
 * @name Social_Facebook_Login_LoginModel.instanceGet
 * @param {string} s_token The Facebook token.
 * @returns {Social_Facebook_Login_LoginModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Authorizes user with facebook.
 *
 * Accepts a Facebook access token and an optional application ID. If the user is already signed in,
 * links the Facebook account to their existing account; otherwise, signs them in or creates a new account
 * using the Facebook identity and the configured Facebook credentials.
 *
 * @function
 * @name Social_Facebook_Login_LoginModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
