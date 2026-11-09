/**
 * Revokes one of the signed-in user's passkey credentials.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Passport_Passkey_PasskeyCredentialModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Core_Passport_Passkey_PasskeyCredentialModel_a_credential
   * @property {string} dtu_create Date and time when this credential was registered.
   * @property {?string} dtu_last_use Date and time when this credential was last used to sign in, or `null` if never used.
   * @property {number} id_device_type One of {@link Core_Passport_Passkey_PasskeyDeviceTypeEnum} values.
   * @property {number} id_status One of {@link Core_Passport_Passkey_PasskeyCredentialStatusEnum} values.
   * @property {boolean} is_backed_up `true` if the credential is currently backed up.
   * @property {string} k_passkey_credential Credential key.
   * @property {string} s_credential_id `WebAuthn` credential ID, base64url encoded without padding. Clients pass it to the signal methods of  `WebAuthn` (for example `PublicKeyCredential.signalUnknownCredential()`) after the credential is revoked,  so the device deletes its copy of the passkey.
   * @property {string} s_user_handle `WebAuthn` user handle (`user.id`) stored with the passkey on the device, base64url encoded without padding.  The same for every credential of the user, and equal to {@link Core_Passport_Passkey_PasskeyCredentialModel.s_user_handle}.
   * @property {string} text_device Name of this credential, assigned at registration and changed by `put()`.
   */

  /**
   * List of the signed-in user's registered passkey credentials.
   *
   * @get result
   * @type {Core_Passport_Passkey_PasskeyCredentialModel_a_credential[]}
   */
  this.a_credential = undefined;

  /**
   * JSON-encoded structure with any additional information required by the project-specific
   * passkey configuration class, for example `k_business` in `Wl`.
   *
   * Needed to list, to rename and to revoke passkeys, the own ones included, because the project configuration decides who may
   * manage them; empty only if the project configuration requires no additional information.
   *
   * @delete get
   * @get get
   * @put get
   * @type {string}
   */
  this.json_context = "";

  /**
   * Key of the credential to revoke or to rename.
   *
   * Only used to revoke or to rename a credential.
   *
   * @delete get
   * @put get
   * @type {string}
   */
  this.k_passkey_credential = "";

  /**
   * Relying Party ID of the passkeys, the `rpId` the `WebAuthn` signal methods need.
   *
   * Filled when listing the credentials. The same for every credential and for every client of the environment.
   *
   * @get result
   * @type {string}
   */
  this.s_rp_id = undefined;

  /**
   * `WebAuthn` user handle (`user.id`) of the listed user, base64url encoded without padding.
   *
   * Filled when listing the credentials, even if the list is empty, so a client can find and delete the passkeys it
   * stores for this user that were revoked elsewhere (by another staff member, on another device).
   *
   * @get result
   * @type {string}
   */
  this.s_user_handle = undefined;

  /**
   * New name of the credential, 1 to 50 characters, without the spaces at the beginning and at the end.
   *
   * Only used to rename a credential. It is saved as it is entered, even if another passkey of the user has the
   * same name.
   *
   * @put post
   * @type {string}
   */
  this.text_device = "";

  /**
   * Key of the user whose passkey credentials to manage. `'0'` or empty string to use the
   * currently signed-in user.
   *
   * @delete get
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Passport_Passkey_PasskeyCredentialModel);

/**
 * @inheritDoc
 */
Core_Passport_Passkey_PasskeyCredentialModel.prototype.config=function()
{
  return {"a_field":{"a_credential":{"get":{"result":true}},"json_context":{"delete":{"get":true},"get":{"get":true},"put":{"get":true}},"k_passkey_credential":{"delete":{"get":true},"put":{"get":true}},"s_rp_id":{"get":{"result":true}},"s_user_handle":{"get":{"result":true}},"text_device":{"put":{"post":true}},"uid":{"delete":{"get":true},"get":{"get":true}}}};
};

/**
 * Revokes one of the signed-in user's passkey credentials.
 *
 * Deletes the row of the credential. The audit of the removal is the entry of the sign-in log written by
 * `PassportPasskey::logWrite()`, not the row. A credential of another user can be revoked only
 * if {@link Core_Passport_Passkey_PasskeyConfigAbstract} allows it.
 *
 * @function
 * @name Core_Passport_Passkey_PasskeyCredentialModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Lists the user's registered passkey credentials.
 *
 * Includes credentials revoked before revoking started to delete the row.
 *
 * @function
 * @name Core_Passport_Passkey_PasskeyCredentialModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Renames one of the signed-in user's own passkey credentials.
 *
 * Saves the new name as it is entered, even if another passkey of the user has the same name, so no number is
 * added. A passkey of another user cannot be renamed, whatever the project configuration allows to manage. The
 * rename is not written to the sign-in log: the log has only the entries of adding and removing a passkey.
 *
 * @function
 * @name Core_Passport_Passkey_PasskeyCredentialModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
