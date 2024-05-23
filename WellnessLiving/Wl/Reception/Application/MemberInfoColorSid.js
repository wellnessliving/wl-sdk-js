/**
 * Define colors of notice messages.
 *
 * Describes the connotation behind messages. An available balance notice has a positive connotation and should be
 * displayed in a different color from notices of an expiring credit card or pass, which are negative.
 */
function Wl_Reception_Application_MemberInfoColorSid()
{
    // Empty constructor.
}

/**
 * Default for neutral, informative messages. Displayed in blue.
 *
 * @type {number}
 */
Wl_Reception_Application_MemberInfoColorSid.BLUE = 1;

/**
 * Positive messages. Displayed in green.
 *
 * @type {number}
 */
Wl_Reception_Application_MemberInfoColorSid.GREEN = 2;

/**
 * Mild negative messages to warn the user. Displayed in orange.
 *
 * @type {number}
 */
Wl_Reception_Application_MemberInfoColorSid.ORANGE = 3;

/**
 * Negative messages with strong importance or urgency. Displayed in red.
 *
 * @type {number}
 */
Wl_Reception_Application_MemberInfoColorSid.RED = 4;