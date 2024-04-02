/**
 * Program types.
 *
 * See {@link Wl_WlProgramSid} for a list of promotions.
 */
function Wl_WlProgramTypeSid()
{
    // Empty constructor.
}

/**
 * Duration Pass.
 *
 * Differs from {@link Wl_WlProgramTypeSid.LIMIT} in that this type of promotion is limited by time.
 *
 * @type {number}
 */
Wl_WlProgramTypeSid.DURATION = 7;

/**
 * Class pass.
 *
 * Differs from {@link Wl_WlProgramTypeSid.PASS} in that this type of promotion allows access to only a limited number
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
 * Type for programs that are not presented in {@link Wl_WlProgramSid}.
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
 * Differs from {@link Wl_WlProgramTypeSid.MEMBERSHIP} in that this type of promotion can only be paid once.
 *
 * @type {number}
 */
Wl_WlProgramTypeSid.PASS = 2;

/**
 * Special WellnessLiving promote passes that allow to visit specific classes to get acquainted with the business.
 *
 * Such passes cannot be bought, they can be only components of the special system packages,
 * packages with <var>k_business</var> = <tt>null</tt>.
 *
 * @type {number}
 */
Wl_WlProgramTypeSid.PROSPECT = 5;