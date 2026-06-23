/**
 * Client's charge if he has "Late cancel" or "No shows" sessions.
 */
function Wl_Business_Policy_ChargeSid()
{
  // Empty constructor.
}

/**
 * The client should be to pay a penalty.
 *
 * @type {number}
 */
Wl_Business_Policy_ChargeSid.CHARGE = 1;

/**
 * Mark account as has "Late cancel" and "No shows" sessions.
 *
 * @type {number}
 */
Wl_Business_Policy_ChargeSid.FLAG_ACCOUNT = 2;
