/**
 * Defines if client has "Late cancel" or "No shows" sessions.
 */
function Wl_Business_Policy_BlameSid()
{
  // Empty constructor.
}

/**
 * If client has "Late cancel" and "No shows" sessions.
 *
 * @type {number}
 */
Wl_Business_Policy_BlameSid.BOTH = 1;

/**
 * If client has "Late cancel" sessions.
 *
 * @type {number}
 */
Wl_Business_Policy_BlameSid.LATE_CANCEL = 2;

/**
 * If client has "No shows" sessions.
 *
 * @type {number}
 */
Wl_Business_Policy_BlameSid.NO_SHOWS = 3;
