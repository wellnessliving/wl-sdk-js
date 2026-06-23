/**
 * Class to process string identifiers for duration types
 *
 * Last ID: 3.
 */
function RsDurationTypeSid()
{
  // Empty constructor.
}

/**
 * Specific date. Example, 2013-12-24.
 *
 * @type {number}
 */
RsDurationTypeSid.DATE = 2;

/**
 * No ending date.
 *
 * @type {number}
 */
RsDurationTypeSid.ETERNAL = 3;

/**
 * Examples: 12 days, 2 months, 2 hours etc.
 *
 * @type {number}
 */
RsDurationTypeSid.PERIOD = 1;
