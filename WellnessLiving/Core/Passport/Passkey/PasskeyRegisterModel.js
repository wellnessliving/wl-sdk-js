/**
 * Starts the registration ceremony.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Passport_Passkey_PasskeyRegisterModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * JSON-encoded `PublicKeyCredential` produced by `navigator.credentials.create()`, sent back
   * to finish the registration ceremony.
   *
   * Empty when starting the ceremony.
   *
   * @post post
   * @type {string}
   */
  this.json_credential = "";

  /**
   * JSON-encoded `PublicKeyCredentialCreationOptions` to pass to `navigator.credentials.create()`.
   *
   * Filled in when starting the ceremony.
   *
   * @get result
   * @type {string}
   */
  this.json_options = undefined;

  /**
   * User-supplied friendly label of the passkey being registered, for example `"MacBook Touch ID"`.
   *
   * Only used to finish the ceremony.
   *
   * @post post
   * @type {string}
   */
  this.text_device = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Passport_Passkey_PasskeyRegisterModel);

/**
 * @inheritDoc
 */
Core_Passport_Passkey_PasskeyRegisterModel.prototype.config=function()
{
  return {"a_field":{"json_credential":{"post":{"post":true}},"json_options":{"get":{"result":true}},"text_device":{"post":{"post":true}}}};
};

/**
 * Starts the registration ceremony.
 *
 * Issues a PublicKeyCredentialCreationOptions challenge for `navigator.credentials.create()`,
 * scoped to the signed-in user and excluding their already-registered active credentials so the
 * same authenticator cannot register a duplicate one.
 * The options are also stashed in session so `post()` can verify the same
 * challenge when finishing the ceremony.</i>
 *
 * @function
 * @name Core_Passport_Passkey_PasskeyRegisterModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Finishes the registration ceremony.
 *
 * Verifies the attestation response against the challenge issued by
 * `get()`, then stores the new credential under the signed-in user.
 * Fails if the ceremony was never started or has expired, or if the response does not match the
 * expected origin, `rpId`, or challenge.
 *
 * @function
 * @name Core_Passport_Passkey_PasskeyRegisterModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
