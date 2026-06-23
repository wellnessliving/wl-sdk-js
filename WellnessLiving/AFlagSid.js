/**
 * A class for filter states for flagged fields.
 * For example, the filter for the field "`is_active`" always has three states: Only active, Only inactive, and All.
 */
function AFlagSid()
{
  // Empty constructor.
}

/**
 * All records.
 *
 * @type {number}
 */
AFlagSid.ALL = 1;

/**
 * Records with the flag turned off.
 *
 * @type {number}
 */
AFlagSid.OFF = 2;

/**
 * Records with the flag turned on.
 *
 * @type {number}
 */
AFlagSid.ON = 3;
