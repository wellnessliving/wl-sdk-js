/**
 * Starts the authentication ceremony.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Passport_Passkey_PasskeyEnterModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * JSON-encoded `PublicKeyCredential` produced by `navigator.credentials.get()`, sent back to
   * finish the authentication ceremony.
   *
   * Empty when starting the ceremony.
   *
   * @post post
   * @type {string}
   */
  this.json_credential = "";

  /**
   * JSON-encoded `PublicKeyCredentialRequestOptions` to pass to `navigator.credentials.get()`.
   *
   * Filled in when starting the ceremony.
   *
   * @get result
   * @type {string}
   */
  this.json_options = undefined;

  /**
   * An optional URL for redirection after the user has signed in.
   *
   * Only used to finish the ceremony.
   *
   * @post result
   * @type {?string}
   */
  this.url_redirect = null;

  /**
   * Url of previous page if the user was redirected to the login page.
   *
   * Only used to finish the ceremony.
   *
   * @post post
   * @type {string}
   */
  this.url_return = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Passport_Passkey_PasskeyEnterModel);

/**
 * @inheritDoc
 */
Core_Passport_Passkey_PasskeyEnterModel.prototype.config=function()
{
  return {"a_field":{"json_credential":{"post":{"post":true}},"json_options":{"get":{"result":true}},"url_redirect":{"post":{"result":true}},"url_return":{"post":{"post":true}}}};
};

/**
 * Starts the authentication ceremony.
 *
 * Issues a PublicKeyCredentialRequestOptions challenge with an empty `allowCredentials` list,
 * so the browser or OS surfaces a picker of every passkey registered for this `rpId` without the
 * caller identifying a user first.
 *
 * @function
 * @name Core_Passport_Passkey_PasskeyEnterModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Finishes the authentication ceremony.
 *
 * Looks up the credential by the ID carried in the assertion, verifies the assertion against it
 * and the challenge issued by `get()`, then signs the credential's owner
 * in the same way a successful password login would. Fails if the caller is already signed in,
 * the credential is unknown or revoked, or the assertion does not verify.
 *
 * @function
 * @name Core_Passport_Passkey_PasskeyEnterModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
