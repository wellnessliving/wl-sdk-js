/**
 * List of {@link Thoth_PayProcessor_PayProcessorSid} supported terminal types.
 */
function Thoth_PayProcessor_Nuvei_Terminal_NuveiTerminalTypeSid()
{
  // Empty constructor.
}

/**
 * Magtek USB. This type of terminal does not require registration on Hardware page.
 *
 * @type {number}
 */
Thoth_PayProcessor_Nuvei_Terminal_NuveiTerminalTypeSid.MAGTEK_USB = 1;

/**
 * Card terminals that work via OMNI Channel API. Requires registration on Hardware page.
 *
 * @type {number}
 */
Thoth_PayProcessor_Nuvei_Terminal_NuveiTerminalTypeSid.OMNICHANNEL = 2;
