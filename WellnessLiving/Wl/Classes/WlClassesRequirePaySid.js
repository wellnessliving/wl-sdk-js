/**
 * List of possible modes to require amount while booking a class.
 */
function Wl_Classes_RequirePaySid()
{
  // Empty constructor.
}

/**
 * Clients can pay online or pay when they visit.
 * If set "pay when visit" then it has additional options. See {@link Wl_Classes_RequirePayVisitOptionSid}.
 *
 * @constant
 * @default 3
 * @name Wl_Classes_RequirePaySid.ADVANCE
 * @type {number}
 */
Wl_Classes_RequirePaySid.ADVANCE = 3;

/**
 * Client should leave a deposit before booking an event.
 *
 * @constant
 * @default 4
 * @name Wl_Classes_RequirePaySid.DEPOSIT
 * @type {number}
 */
Wl_Classes_RequirePaySid.DEPOSIT = 4;

/**
 * Client must purchase online.
 *
 * @constant
 * @default 1
 * @name Wl_Classes_RequirePaySid.ONLINE
 * @type {number}
 */
Wl_Classes_RequirePaySid.ONLINE = 1;

/**
 * Clients can only pay when they visit. Online payment is not available.
 * It has additional options {@link Wl_Classes_RequirePayVisitOptionSid}.
 *
 * @constant
 * @default 2
 * @name Wl_Classes_RequirePaySid.VISIT
 * @type {number}
 */
Wl_Classes_RequirePaySid.VISIT = 2;