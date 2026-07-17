/**
 * List of {@link Thoth_PayProcessor_PayProcessorSid} supported terminal types.
 */
function Thoth_PayProcessor_StripeCom_Terminal_StripeTerminalTypeSid()
{
  // Empty constructor.
}

/**
 * Terminals that work via Stripe javascript SDK. Requires registration on Hardware page.
 *
 * @type {number}
 */
Thoth_PayProcessor_StripeCom_Terminal_StripeTerminalTypeSid.JS_SDK = 2;

/**
 * Magtek USB. This type of terminal does not require registration on Hardware page.
 *
 * @type {number}
 */
Thoth_PayProcessor_StripeCom_Terminal_StripeTerminalTypeSid.MAGTEK_USB = 1;
