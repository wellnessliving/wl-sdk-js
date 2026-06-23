/**
 * Possible states of the visit: book, attended, cancelled, etc.
 *
 * Last used ID: 8.
 */
function Wl_Visit_VisitSid()
{
  // Empty constructor.
}

/**
 * Client has attended the session.
 *
 * @type {number}
 */
Wl_Visit_VisitSid.ATTEND = 3;

/**
 * Active reservation means that user is going to attend the session.
 *
 * @type {number}
 */
Wl_Visit_VisitSid.BOOK = 1;

/**
 * Client has cancelled the reservation in time and without penalty.
 *
 * @type {number}
 */
Wl_Visit_VisitSid.CANCEL = 6;

/**
 * Client has cancelled his reservation too late.
 *
 * @type {number}
 */
Wl_Visit_VisitSid.PENALTY = 4;

/**
 * This state means that visit is registered, but it is unknown is it {@link Wl_Visit_VisitSid} or {@link Wl_Visit_VisitSid} or {@link Wl_Visit_VisitSid} but definitely one of these states.
 *
 * @type {number}
 */
Wl_Visit_VisitSid.PENDING = 7;

/**
 * Visit was removed. Visits with this status are not shown anywhere in system, but still are saved in database.
 *
 * @type {number}
 */
Wl_Visit_VisitSid.REMOVE = 8;

/**
 * Client has missed the session without cancellation.
 *
 * @type {number}
 */
Wl_Visit_VisitSid.TRUANCY = 5;

/**
 * Reservation in a wait list means that user is going to attend the session if someone will cancel his reservation.
 *
 * @type {number}
 */
Wl_Visit_VisitSid.WAIT = 2;
