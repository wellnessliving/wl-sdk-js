/**
 * Client's charge if he has "Late cancel" or "No shows" sessions.
 */
function Wl_Business_Policy_ChargeSid ()
{
  // Empty constructor.
}

/**
 * The client should be to pay a penalty.
 *
 * @constant
 * @default 1
 * @name Wl_Business_Policy_ChargeSid.CHARGE
 * @type {number}
 */
Wl_Business_Policy_ChargeSid.CHARGE = 1;

/**
 * Mark account as has "Late cancel" and "No shows" sessions.
 *
 * @constant
 * @default 2
 * @name Wl_Business_Policy_ChargeSid.FLAG_ACCOUNT
 * @type {number}
 */
Wl_Business_Policy_ChargeSid.FLAG_ACCOUNT = 2;