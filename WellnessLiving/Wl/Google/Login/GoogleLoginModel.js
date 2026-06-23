/**
 * Performs Google authorization within the context of the specified business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Google_Login_GoogleLoginModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Business in which authorization is performed.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * The application id.
   *
   * When application not passed, credential loaded from the application, which makes the request,
   * used {@link Core_Request_Api_Application_Credential_CredentialAbstract} for load the credential.
   * For set credential need used [CredentialApi](/Core/Request/Api/Application/Credential/Credential.json) and set [CredentialApi](/Core/Request/Api/Application/Credential/Credential.json) to {@link Core_Request_Api_Application_Credential_CredentialAbstract}.
   *
   * When application passed, the credential loaded by application id.
   *
   * @post post
   * @type {?string}
   */
  this.s_application = null;

  /**
   * The Google server authorization code.
   *
   * @post post
   * @type {string}
   */
  this.s_code = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Google_Login_GoogleLoginModel);

/**
 * @inheritDoc
 */
Wl_Google_Login_GoogleLoginModel.prototype.config=function()
{
  return {"a_field":{"k_business":{"post":{"post":true}},"s_application":{"post":{"post":true}},"s_code":{"post":{"post":true}}}};
};

/**
 * Performs Google authorization within the context of the specified business.
 *
 * Validates that the given business is active, sets it as the current frontend context, and then
 * delegates to the parent Google login flow to authenticate the user.
 *
 * @function
 * @name Wl_Google_Login_GoogleLoginModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
