/**
 * Alerts based on `Ai Agent` events.
 */
function Wl_AiAgent_Alert_AiAgentAlertAbstract()
{
  // Empty constructor.
}

/**
 * Alert that is sent to a staff member when a client requests a callback during a conversation with `Ai Agent`.
 *
 * @type {number}
 */
Wl_AiAgent_Alert_AiAgentAlertAbstract.AiAgentCallbackRequestAlert = 2342;

/**
 * Alert that is sent to a staff member when a new phone conversation starts between a client and `Ai Agent`.
 *
 * @type {number}
 */
Wl_AiAgent_Alert_AiAgentAlertAbstract.AiAgentConversationPhoneAlert = 2341;

/**
 * Alert that is sent to a staff member when a new text conversation starts between a client and `Ai Agent`.
 *
 * @type {number}
 */
Wl_AiAgent_Alert_AiAgentAlertAbstract.AiAgentConversationTextAlert = 2340;
