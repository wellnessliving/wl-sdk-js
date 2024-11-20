/**
 * Program type categories.
 */
function Wl_WlProgramCategorySid()
{
    // Empty constructor.
}

/**
 * Purchase options to fill user's account:
 * <ul>
 *   <li>{@link Wl_WlProgramSid.ACCOUNT_PASS}</li>
 * </ul>
 */
Wl_WlProgramCategorySid.ACCOUNT = 7;

/**
 * Purchase options to pay for classes, events and enrollments:
 * <ul>
 *   <li>{@link Wl_WlProgramSid.CLASS_LIMIT}</li>
 *   <li>{@link Wl_WlProgramSid.CLASS_MEMBERSHIP}</li>
 *   <li>{@link Wl_WlProgramSid.CLASS_PASS}</li>
 * </ul>
 */
Wl_WlProgramCategorySid.CLASSES = 1;

/**
 * Special "Wellness Program" purchase option.
 */
Wl_WlProgramCategorySid.INSURANCE = 8;

/**
 * Packages and daily deals.
 */
Wl_WlProgramCategorySid.OTHER = 5;

/**
 * Resource category.
 *
 * This is a category grouped next program sids:
 * <ul>
 *   <li>{@link Wl_WlProgramSid.RESOURCE_DURATION}</li>
 *   <li>{@link Wl_WlProgramSid.RESOURCE_LIMIT}</li>
 *   <li>{@link Wl_WlProgramSid.RESOURCE_MEMBERSHIP}</li>
 *   <li>{@link Wl_WlProgramSid.RESOURCE_PASS}</li>
 * </ul>
 */
Wl_WlProgramCategorySid.RESOURCE = 6;

/**
 * Purchase options to pay for appointments:
 * <ul>
 *   <li>{@link Wl_WlProgramSid.SERVICE_LIMIT}</li>
 *   <li>{@link Wl_WlProgramSid.SERVICE_MEMBERSHIP}</li>
 *   <li>{@link Wl_WlProgramSid.SERVICE_PASS}</li>
 * </ul>
 */
Wl_WlProgramCategorySid.SERVICE = 3;

/**
 * Purchase options to pay for videos:<ui>
 *   <li>{@link \RsProgramSid::VIDEO_MEMBERSHIP}</li>
 * </ui>
 */
Wl_WlProgramCategorySid.VIDEO = 9;

/**
 * Purchase options to pay for gym visits:
 * <ul>
 *   <li>{@link Wl_WlProgramSid.VISIT_LIMIT}</li>
 *   <li>{@link Wl_WlProgramSid.VISIT_MEMBERSHIP}</li>
 *   <li>{@link Wl_WlProgramSid.VISIT_PASS}</li>
 * </ul>
 */
Wl_WlProgramCategorySid.VISIT = 2;