/**
 * List of checks that are performed before session book.
 *
 * Last used ID: 2.
 */
function Wl_Book_Process_ProcessCheckSid()
{
    // Empty constructor.
}

/**
 * Check that a client has a credit card.
 *
 * @type {number}
 */
Wl_Book_Process_ProcessCheckSid.CARD = 1;

/**
 * Check a client has no unsigned waiver.
 *
 * @type {number}
 */
Wl_Book_Process_ProcessCheckSid.WAIVER = 2;