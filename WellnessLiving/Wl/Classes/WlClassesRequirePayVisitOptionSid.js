/**
 * A list of additional options for
 *  {@link Wl_Classes_RequirePaySid.VISIT} and {@link Wl_Classes_RequirePaySid.ADVANCE} modes.
 */
function Wl_Classes_RequirePayVisitOptionSid()
{
  // Empty constructor.
}

/**
 * Debit the client account for the cost of this session/event.
 *
 * @constant
 * @default 1
 * @name Wl_Classes_RequirePayVisitOptionSid.DEBIT
 * @type {number}
 */
Wl_Classes_RequirePayVisitOptionSid.DEBIT = 1;

/**
 * Add as unpaid session/event.
 *
 * @constant
 * @default 2
 * @name Wl_Classes_RequirePayVisitOptionSid.UNPAID
 * @type {number}
 */
Wl_Classes_RequirePayVisitOptionSid.UNPAID = 2;