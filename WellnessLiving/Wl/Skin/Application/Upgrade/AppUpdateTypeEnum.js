/**
 * Enum for application update types used in Google Play and Apple Store releases.
 */
function Wl_Skin_Application_Upgrade_AppUpdateTypeEnum()
{
  // Empty constructor.
}

/**
 * Major update (3) - for incompatible API changes or major new features.
 *
 * @type {number}
 */
Wl_Skin_Application_Upgrade_AppUpdateTypeEnum.MAJOR = 3;

/**
 * Minor update (2) - for backward-compatible feature additions.
 *
 * @type {number}
 */
Wl_Skin_Application_Upgrade_AppUpdateTypeEnum.MINOR = 2;

/**
 * Patch update (1) - for small bug fixes or improvements.
 *
 * @type {number}
 */
Wl_Skin_Application_Upgrade_AppUpdateTypeEnum.PATCH = 1;
