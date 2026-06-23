/**
 * Promotion or package date start rule.
 *
 * sale - date start is a date of the sale.
 * redeem - date start is a date of the first client visit by this promotion or package.
 * fixed - date start is fixed by promotion or package settings and saved in DB.
 */
function RsActivationSid()
{
  // Empty constructor.
}

/**
 * Number of a day of the month or of the week.
 *
 * @type {number}
 */
RsActivationSid.DAY = 7;

/**
 * Custom date.
 *
 * @type {number}
 */
RsActivationSid.FIXED = 3;

/**
 * The first day of month.
 *
 * @type {number}
 */
RsActivationSid.MONTH_FIRST = 4;

/**
 * The 15th day of the month.
 *
 * @type {number}
 */
RsActivationSid.MONTH_HALF = 6;

/**
 * The last day of the month.
 *
 * @type {number}
 */
RsActivationSid.MONTH_LAST = 5;

/**
 * Date of the sale.
 *
 * @type {number}
 */
RsActivationSid.SALE = 1;

/**
 * Date of the first visit.
 *
 * @type {number}
 */
RsActivationSid.VISIT = 2;
