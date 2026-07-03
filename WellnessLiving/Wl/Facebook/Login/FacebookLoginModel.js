/**
 * Performs Facebook authorization within the context of the specified business.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Facebook_Login_FacebookLoginModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "s_token";

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

WlSdk_ModelAbstract.extend(Wl_Facebook_Login_FacebookLoginModel);

/**
 * @inheritDoc
 */
Wl_Facebook_Login_FacebookLoginModel.prototype.config=function()
{
  return {"a_field":{"k_business":{"post":{"post":true}},"s_application":{"post":{"post":true}},"s_token":{"post":{"post":true}}}};
};

/**
 * @function
 * @name Wl_Facebook_Login_FacebookLoginModel.instanceGet
 * @param {string} s_token The Facebook token.
 * @returns {Wl_Facebook_Login_FacebookLoginModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Performs Facebook authorization within the context of the specified business.
 *
 * Validates that the given business is active, sets it as the current frontend context, and then
 * delegates to the parent Facebook login flow to authenticate the user.
 *
 * @function
 * @name Wl_Facebook_Login_FacebookLoginModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
