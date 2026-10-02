/**
 * Age restriction statuses.
 */
function Wl_Service_AgeRestrictionStatusSid()
{
  // Empty constructor.
}

/**
 * Client age must be between limits.
 *
 * @type {number}
 */
Wl_Service_AgeRestrictionStatusSid.AGE_BETWEEN = 2;

/**
 * Client is available to book service.
 *
 * @type {number}
 */
Wl_Service_AgeRestrictionStatusSid.AVAILABLE = 1;

/**
 * Client age must be less then max age.
 *
 * @type {number}
 */
Wl_Service_AgeRestrictionStatusSid.MAX_AGE = 3;

/**
 * Client age must be great then min age.
 *
 * @type {number}
 */
Wl_Service_AgeRestrictionStatusSid.MIN_AGE = 4;
