/**
 * List of supported terminal interaction types.
 * Note: this list is rather internal Wellnessliving application list rather than common-known list. Each of types
 * determines the way how we interact with terminal on application level.
 */
function Thoth_PayProcessor_Terminal_TerminalTypeSid()
{
  // Empty constructor.
}

/**
 * Magtek USB. This type of terminal does not require registration on Hardware page.
 *
 * @type {number}
 */
Thoth_PayProcessor_Terminal_TerminalTypeSid.MAGTEK_USB = 1;
