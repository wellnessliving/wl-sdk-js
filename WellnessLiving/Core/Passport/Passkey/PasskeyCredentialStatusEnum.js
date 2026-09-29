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
 * The credential was revoked by its owner and may no longer be used to sign in.
 *
 * The row is kept (never hard-deleted) so its immutable `s_credential_id`/`s_public_key` remain
 * available for audit purposes.
 *
 * @type {number}
 */
Core_Passport_Passkey_PasskeyCredentialStatusEnum.REVOKED = 2;
