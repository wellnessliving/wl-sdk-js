/**
 * List of possible modes to require amount while booking a class.
 */
function Wl_Classes_RequirePaySid()
{
  // Empty constructor.
}

/**
 * Clients can pay online or pay when they visit. If set "pay when visit" then it has additional options. See {@link Wl_Classes_RequirePayVisitOptionSid}.
 *
 * @type {number}
 */
Wl_Classes_RequirePaySid.ADVANCE = 3;

/**
 * Client should leave a deposit before booking an event.
 *
 * @type {number}
 */
Wl_Classes_RequirePaySid.DEPOSIT = 4;

/**
 * Client must purchase online.
 *
 * @type {number}
 */
Wl_Classes_RequirePaySid.ONLINE = 1;

/**
 * Clients can only pay when they visit. Online payment is not available. It has additional options {@link Wl_Classes_RequirePayVisitOptionSid}.
 *
 * @type {number}
 */
Wl_Classes_RequirePaySid.VISIT = 2;
