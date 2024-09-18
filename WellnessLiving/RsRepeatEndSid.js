/**
 * Possible ways to stop repeatable events.
 */
function RsRepeatEndSid()
{
  // Empty constructor.
}

/**
 * Stop after a certain number of repeats.
 *
 * @type {number}
 */
RsRepeatEndSid.COUNT = 2;

/**
 * Stop after a certain date. Including this date.
 *
 * @type {number}
 */
RsRepeatEndSid.DATE = 3;

/**
 * Eternal appointments. Such appointments are scheduled for six months and will be scheduled again every month.
 *
 * @type {number}
 */
RsRepeatEndSid.ETERNAL = 1;