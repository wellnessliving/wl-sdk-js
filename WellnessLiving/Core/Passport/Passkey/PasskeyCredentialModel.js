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
   * @property {string} text_device User-supplied friendly label of this credential.
   */

  /**
   * List of the signed-in user's registered passkey credentials.
   *
   * @get result
   * @type {Core_Passport_Passkey_PasskeyCredentialModel_a_credential[]}
   */
  this.a_credential = undefined;

  /**
   * Key of the credential to revoke.
   *
   * Only used to revoke a credential.
   *
   * @delete get
   * @type {string}
   */
  this.k_passkey_credential = "";

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
  return {"a_field":{"a_credential":{"get":{"result":true}},"k_passkey_credential":{"delete":{"get":true}},"uid":{"delete":{"get":true},"get":{"get":true}}}};
};

/**
 * Revokes one of the signed-in user's passkey credentials.
 *
 * Marks the credential as revoked rather than deleting the row.  A credential owned by another user can not be
 * revoked.
 *
 * @function
 * @name Core_Passport_Passkey_PasskeyCredentialModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Lists the user's registered passkey credentials.
 *
 * Includes revoked credentials.
 *
 * @function
 * @name Core_Passport_Passkey_PasskeyCredentialModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
