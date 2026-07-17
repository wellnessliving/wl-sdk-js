/**
 * List of possible status of readers.
 *
 * Last ID: 3.
 */
function Thoth_PayProcessor_Terminal_TerminalStatusSid()
{
  // Empty constructor.
}

/**
 * Status active.
 *
 * @type {number}
 */
Thoth_PayProcessor_Terminal_TerminalStatusSid.ACTIVE = 1;

/**
 * Status inactive.
 *
 * @type {number}
 */
Thoth_PayProcessor_Terminal_TerminalStatusSid.INACTIVE = 2;

/**
 * Status setup, reader is active but not added to stripe yet.
 *
 * @type {number}
 */
Thoth_PayProcessor_Terminal_TerminalStatusSid.SETUP = 3;
