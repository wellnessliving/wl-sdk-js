/**
 * Authorizes user with Google.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Social_Google_Plus_LoginModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The application id.
   *
   * When application not passed, credential loaded from the application, which makes the request,
   * used {@link Core_Request_Api_Application_Credential_CredentialAbstract} for load the credential.
   * For set credential need used {@link Core_Request_Api_Application_Credential_CredentialModel} and set {@link Core_Request_Api_Application_Credential_CredentialModel.cid_credential} to {@link Core_Request_Api_Application_Credential_CredentialAbstract}.
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

WlSdk_ModelAbstract.extend(Social_Google_Plus_LoginModel);

/**
 * @inheritDoc
 */
Social_Google_Plus_LoginModel.prototype.config=function()
{
  return {"a_field":{"s_application":{"post":{"post":true}},"s_code":{"post":{"post":true}}}};
};

/**
 * Authorizes user with Google.
 *
 * Accepts a Google server authorization code and an optional application ID, loads the configured Google
 * credential for the application, and completes the OAuth 2.0 flow to sign the user in or create a new account.
 *
 * @function
 * @name Social_Google_Plus_LoginModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
