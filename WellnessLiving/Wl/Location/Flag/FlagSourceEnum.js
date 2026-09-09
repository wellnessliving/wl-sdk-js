/**
 * Different sources of flags, which are not set manually by the staff member. Such flags have own logic.
 */
function Wl_Location_Flag_FlagSourceEnum()
{
  // Empty constructor.
}

/**
 * Flag is set because user is sent to collections. This means user has debt and cannot make new purchases.
 * Flag is set and removed only automatically.
 *
 * @type {number}
 */
Wl_Location_Flag_FlagSourceEnum.COLLECTIONS = 1;
