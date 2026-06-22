/**
 * List of possible ways to solve a conflict.
 */
function RsAppointmentEditConflictSid ()
{
  // Empty constructor.
}

/**
 * Create an event with other staff, date or time.
 *
 * @constant
 * @default 3
 * @name RsAppointmentEditConflictSid.EDIT
 * @type {number}
 */
RsAppointmentEditConflictSid.EDIT=3;

/**
 * Ignore this conflict and create event as it is.
 *
 * @constant
 * @default 1
 * @name RsAppointmentEditConflictSid.IGNORE
 * @type {number}
 */
RsAppointmentEditConflictSid.IGNORE=1;

/**
 * Do not create conflicted event.
 *
 * @constant
 * @default 2
 * @name RsAppointmentEditConflictSid.SKIP
 * @type {number}
 */
RsAppointmentEditConflictSid.SKIP=2;