/**
 * Class to process string identifiers for duration types.
 */
function RsDurationTypeSid ()
{
  // Empty constructor.
}

/**
 * Specific date. Example, 2013-12-24.
 *
 * @constant
 * @default 2
 * @name RsDurationTypeSid.DATE
 * @type {number}
 */
RsDurationTypeSid.DATE = 2;

/**
 * No ending date.
 *
 * @constant
 * @default 3
 * @name RsDurationTypeSid.ETERNAL
 * @type {number}
 */
RsDurationTypeSid.ETERNAL = 3;

/**
 * Examples: 12 days, 2 months, 2 hours etc.
 *
 * @constant
 * @default 1
 * @name RsDurationTypeSid.PERIOD
 * @type {number}
 */
RsDurationTypeSid.PERIOD = 1;