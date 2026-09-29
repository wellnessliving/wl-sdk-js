/**
 * `WebAuthn` `credentialDeviceType` values, per the `WebAuthn` specification.
 */
function Core_Passport_Passkey_PasskeyDeviceTypeEnum()
{
  // Empty constructor.
}

/**
 * The credential can be backed up and synced across multiple devices, for example through
 * iCloud Keychain or Google Password Manager.
 *
 * @type {number}
 */
Core_Passport_Passkey_PasskeyDeviceTypeEnum.MULTI_DEVICE = 2;

/**
 * The credential is bound to a single physical authenticator and cannot be backed up or
 * synced to another device.
 *
 * @type {number}
 */
Core_Passport_Passkey_PasskeyDeviceTypeEnum.SINGLE_DEVICE = 1;
