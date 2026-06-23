/**
 * List of possible ways to solve a conflict.
 */
function RsAppointmentEditConflictSid()
{
  // Empty constructor.
}

/**
 * Create an event with other staff, date or time.
 *
 * @type {number}
 */
RsAppointmentEditConflictSid.EDIT = 3;

/**
 * Ignore this conflict and create event as it is.
 *
 * @type {number}
 */
RsAppointmentEditConflictSid.IGNORE = 1;

/**
 * Do not create conflicted event.
 *
 * @type {number}
 */
RsAppointmentEditConflictSid.SKIP = 2;
