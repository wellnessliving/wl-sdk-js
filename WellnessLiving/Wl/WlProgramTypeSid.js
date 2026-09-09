/**
 * Program types.
 *
 * See {@link RsProgramSid} for a list of promotions.
 *
 * Last used ID: 8.
 */
function Wl_WlProgramTypeSid()
{
  // Empty constructor.
}

/**
 * Duration Pass.
 *
 * Differs from {@link RsProgramTypeSid.LIMIT} in that this type of promotion is limited by time.
 *
 * @type {number}
 */
Wl_WlProgramTypeSid.DURATION = 7;

/**
 * Guest passes.
 *
 * @type {number}
 */
Wl_WlProgramTypeSid.GUEST = 8;

/**
 * Class pass.
 *
 * Differs from {@link RsProgramTypeSid.PASS} in that this type of promotion allows access to only a limited number
 * of classes.
 *
 * @type {number}
 */
Wl_WlProgramTypeSid.LIMIT = 1;

/**
 * This promotion is a membership.
 *
 * Payment schedule can be set up for memberships.
 *
 * @type {number}
 */
Wl_WlProgramTypeSid.MEMBERSHIP = 3;

/**
 * Type for programs that are not presented in {@link RsProgramSid}.
 *
 * @type {number}
 */
Wl_WlProgramTypeSid.OTHER = 6;

/**
 * Packages and Daily deals.
 *
 * @type {number}
 */
Wl_WlProgramTypeSid.PACKAGE = 4;

/**
 * Unlimited pass. Day/week/month pass.
 *
 * Allows access to unlimited number of classes.
 *
 * Differs from {@link RsProgramTypeSid.MEMBERSHIP} in that this type of promotion can only be paid once.
 *
 * @type {number}
 */
Wl_WlProgramTypeSid.PASS = 2;

/**
 * Special WellnessLiving promote passes that allow to visit specific classes to get acquainted with the business.
 *
 * Such passes cannot be bought, they can be only components of the special system packages,
 * packages with `k_business` = `null`.
 *
 * @type {number}
 */
Wl_WlProgramTypeSid.PROSPECT = 5;
