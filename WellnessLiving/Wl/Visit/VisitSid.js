/**
 * Possible states of the visit: book, attended, cancelled, etc.
 *
 * @constructor
 */
function Wl_Visit_VisitSid()
{
  // Empty constructor.
}

/**
 * Client has attended the session.
 *
 * @constant
 * @default 3
 * @name Wl_Visit_VisitSid.ATTEND
 * @type {number}
 */
Wl_Visit_VisitSid.ATTEND = 3;

/**
 * Active reservation means that user is going to attend the session.
 *
 * @constant
 * @default 1
 * @name Wl_Visit_VisitSid.BOOK
 * @type {number}
 */
Wl_Visit_VisitSid.BOOK = 1;

/**
 * Client has cancelled the reservation in time and without penalty.
 *
 * @constant
 * @default 6
 * @name Wl_Visit_VisitSid.CANCEL
 * @type {number}
 */
Wl_Visit_VisitSid.CANCEL = 6;

/**
 * Client has cancelled his reservation too late.
 *
 * @constant
 * @default 4
 * @name Wl_Visit_VisitSid.PENALTY
 * @type {number}
 */
Wl_Visit_VisitSid.PENALTY = 4;

/**
 * This state means that visit is registered, but it is unknown is it {@link Wl\Visit\VisitSid::ATTEND}
 * or {@link Wl\Visit\VisitSid::TRUANCY} or {@link Wl\Visit\VisitSid::PENALTY} but definitely one of these states.
 *
 * The real type of this visit must be set manually by staff.
 * Status can be changed automatically to {@link Wl\Visit\VisitSid::ATTEND}.
 * <i>See {@link Wl\Virtual\Meeting\MeetingEndApiAbstract::markVisitsNoShow()} for virtual meetings.</i>
 *
 * @constant
 * @default 7
 * @name Wl_Visit_VisitSid.PENDING
 * @type {number}
 */
Wl_Visit_VisitSid.PENDING = 7;

/**
 * Visit was removed.
 * Visits with this status are not shown anywhere in system, but still are saved in database.
 *
 * @constant
 * @default 8
 * @name Wl_Visit_VisitSid.REMOVE
 * @type {number}
 */
Wl_Visit_VisitSid.REMOVE = 8;

/**
 * Client has missed the session without cancellation.
 *
 * @constant
 * @default 5
 * @name Wl_Visit_VisitSid.TRUANCY
 * @type {number}
 */
Wl_Visit_VisitSid.TRUANCY = 5;

/**
 * Reservation in a wait list means that user is going to attend the session if someone will cancel his reservation.
 *
 * @constant
 * @default 2
 * @name Wl_Visit_VisitSid.WAIT
 * @type {number}
 */
Wl_Visit_VisitSid.WAIT = 2;