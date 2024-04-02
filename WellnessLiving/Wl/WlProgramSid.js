/**
 * Program types.
 *
 * @see Wl_WlProgramCategorySid
 * @see Wl_WlProgramTypeSid
 */
function Wl_WlProgramSid()
{
    // Empty constructor.
}

/**
 * Special Membership that does not allow client to visit anything but fill client's account after purchase
 * and after renew.
 */
Wl_WlProgramSid.ACCOUNT_MEMBERSHIP = 21;

/**
 * Special Time-Based pass that does not allow client to visit anything but fill client's account after purchase
 * and after renew.
 */
Wl_WlProgramSid.ACCOUNT_PASS = 20;

/**
 * Class Pass.
 */
Wl_WlProgramSid.CLASS_LIMIT = 1;

/**
 * Class Membership.
 */
Wl_WlProgramSid.CLASS_MEMBERSHIP = 5;

/**
 * Class Time-Based pass.
 */
Wl_WlProgramSid.CLASS_PASS = 6;

/**
 * WellnessLiving Promotion.
 */
Wl_WlProgramSid.CLASS_PROSPECT = 4;

/**
 * Daily Deal Integration: not for sale, only redemption codes.
 */
Wl_WlProgramSid.DEAL = 7;

/**
 * Enrollment.
 */
Wl_WlProgramSid.ENROLLMENT = 14;

/**
 * "Wellness Program" membership.
 */
Wl_WlProgramSid.INSURANCE_MEMBERSHIP = 22;

/**
 * Package.
 */
Wl_WlProgramSid.PACKAGE = 3;

/**
 * Resource Duration Pass.
 */
Wl_WlProgramSid.RESOURCE_DURATION = 19;

/**
 * Resource Limit Pass.
 */
Wl_WlProgramSid.RESOURCE_LIMIT = 15;

/**
 * Resource Membership.
 */
Wl_WlProgramSid.RESOURCE_MEMBERSHIP = 16;

/**
 * Resource Time-Based pass.
 */
Wl_WlProgramSid.RESOURCE_PASS = 17;

/**
 * Appointment Duration Pass.
 */
Wl_WlProgramSid.SERVICE_DURATION = 18;

/**
 * Appointment session pass.
 */
Wl_WlProgramSid.SERVICE_LIMIT = 11;

/**
 * Appointment membership.
 */
Wl_WlProgramSid.SERVICE_MEMBERSHIP = 12;

/**
 * Appointment Time-Based pass.
 */
Wl_WlProgramSid.SERVICE_PASS = 13;

/**
 * Video Membership.
 */
Wl_WlProgramSid.VIDEO_MEMBERSHIP = 23;

/**
 * Gym Pass.
 */
Wl_WlProgramSid.VISIT_LIMIT = 8;

/**
 * Gym Membership.
 */
Wl_WlProgramSid.VISIT_MEMBERSHIP = 9;

/**
 * Gym Time-Based pass.
 */
Wl_WlProgramSid.VISIT_PASS = 10;