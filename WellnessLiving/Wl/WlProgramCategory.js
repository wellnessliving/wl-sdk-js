/**
 * Program type categories.
 *
 * Last used ID: 9.
 */
function Wl_WlProgramCategorySid()
{
  // Empty constructor.
}

/**
 * Purchase options to fill user's account:
 * <ul>
 *   <li>{@link RsProgramSid.ACCOUNT_PASS}</li>
 * </ul>
 *
 * @type {number}
 */
Wl_WlProgramCategorySid.ACCOUNT = 7;

/**
 * Purchase options to pay for classes, events and enrollments:
 * <ul>
 *   <li>{@link RsProgramSid.CLASS_LIMIT}</li>
 *   <li>{@link RsProgramSid.CLASS_MEMBERSHIP}</li>
 *   <li>{@link RsProgramSid.CLASS_PASS}</li>
 *   <li>{@link RsProgramSid.CLASS_PROSPECT}</li>
 * </ul>
 *
 * @type {number}
 */
Wl_WlProgramCategorySid.CLASSES = 1;

/**
 * Special "Wellness Program" purchase option.
 *
 * @type {number}
 */
Wl_WlProgramCategorySid.INSURANCE = 8;

/**
 * Packages and daily deals.
 *
 * @type {number}
 */
Wl_WlProgramCategorySid.OTHER = 5;

/**
 * Resource category.
 *
 * This is a category grouped next program sids:
 * <ul>
 *   <li>{@link RsProgramSid.RESOURCE_DURATION}</li>
 *   <li>{@link RsProgramSid.RESOURCE_LIMIT}</li>
 *   <li>{@link RsProgramSid.RESOURCE_MEMBERSHIP}</li>
 *   <li>{@link RsProgramSid.RESOURCE_PASS}</li>
 * </ul>
 *
 * @type {number}
 */
Wl_WlProgramCategorySid.RESOURCE = 6;

/**
 * Purchase options to pay for appointments:
 * <ul>
 *   <li>{@link RsProgramSid.SERVICE_LIMIT}</li>
 *   <li>{@link RsProgramSid.SERVICE_MEMBERSHIP}</li>
 *   <li>{@link RsProgramSid.SERVICE_PASS}</li>
 * </ul>
 *
 * @type {number}
 */
Wl_WlProgramCategorySid.SERVICE = 3;

/**
 * Purchase options to pay for videos:<ui>
 *   <li>{@link RsProgramSid.VIDEO_MEMBERSHIP}</li>
 * </ui>
 *
 * @type {number}
 */
Wl_WlProgramCategorySid.VIDEO = 9;

/**
 * Purchase options to pay for gym visits:
 * <ul>
 *   <li>{@link RsProgramSid.VISIT_LIMIT}</li>
 *   <li>{@link RsProgramSid.VISIT_MEMBERSHIP}</li>
 *   <li>{@link RsProgramSid.VISIT_PASS}</li>
 * </ul>
 *
 * @type {number}
 */
Wl_WlProgramCategorySid.VISIT = 2;
