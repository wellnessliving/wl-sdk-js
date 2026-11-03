/**
 * Statuses of a registered passkey credential.
 */
function Core_Passport_Passkey_PasskeyCredentialStatusEnum()
{
  // Empty constructor.
}

/**
 * The credential is active and may be used to sign in.
 *
 * @type {number}
 */
Core_Passport_Passkey_PasskeyCredentialStatusEnum.ACTIVE = 1;

/**
 * The credential was revoked and may no longer be used to sign in.
 *
 * No longer set: revoking a credential deletes its row, and the audit is the sign-in log. Rows revoked
 * earlier keep this status.
 *
 * @type {number}
 */
Core_Passport_Passkey_PasskeyCredentialStatusEnum.REVOKED = 2;
