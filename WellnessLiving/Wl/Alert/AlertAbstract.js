/**
 * Base class for all alerts.
 */
function Wl_Alert_AlertAbstract()
{
  // Empty constructor.
}

/**
 * Alert that is sent to a staff member when a client requests a callback during a conversation with `Ai Agent`.
 *
 * @type {number}
 */
Wl_Alert_AlertAbstract.AiAgentCallbackRequestAlert = 2342;

/**
 * Alert that is sent to a staff member when a new phone conversation starts between a client and `Ai Agent`.
 *
 * @type {number}
 */
Wl_Alert_AlertAbstract.AiAgentConversationPhoneAlert = 2341;

/**
 * Alert that is sent to a staff member when a new text conversation starts between a client and `Ai Agent`.
 *
 * @type {number}
 */
Wl_Alert_AlertAbstract.AiAgentConversationTextAlert = 2340;

/**
 * Alert that is sent to a staff member when a client books an appointment.
 *
 * @type {number}
 */
Wl_Alert_AlertAbstract.AppointmentBookAlert = 1326;

/**
 * Alert that is sent to a staff member when a client cancels a class.
 *
 * @type {number}
 */
Wl_Alert_AlertAbstract.AppointmentCancelAlert = 1327;

/**
 * Alert that is sent to a staff member when a client send request an appointment.
 *
 * @type {number}
 */
Wl_Alert_AlertAbstract.AppointmentRequestAlert = 1328;

/**
 * Alert that is sent to a staff member when a client books a class.
 *
 * @type {number}
 */
Wl_Alert_AlertAbstract.ClassesBookAlert = 1314;

/**
 * Alert that is sent to a staff member when a client cancels a class.
 *
 * @type {number}
 */
Wl_Alert_AlertAbstract.ClassesCancelAlert = 1315;

/**
 * Alert that is sent to a staff member when a client books an event.
 *
 * @type {number}
 */
Wl_Alert_AlertAbstract.EventBookAlert = 1330;

/**
 * Alert that is sent to a staff member when a client cancels an event.
 *
 * @type {number}
 */
Wl_Alert_AlertAbstract.EventCancelAlert = 1331;

/**
 * Manual alert for all staffs in all or specified businesses, sent by an administrator.
 *
 * @type {number}
 */
Wl_Alert_AlertAbstract.ManualAlert = 1417;

/**
 * Alert staff member that the business's monthly SMS quota has been reached.
 *
 * @type {number}
 */
Wl_Alert_AlertAbstract.MessageLimitAlert = 1483;

/**
 * Alert that is sent to a staff member when a client sent a message.
 *
 * @type {number}
 */
Wl_Alert_AlertAbstract.MessageNewAlert = 1333;

/**
 * Alert that is sent to a staff member when a client sent a message.
 *
 * @type {number}
 */
Wl_Alert_AlertAbstract.SmsChatStaffAssignAlert = 1364;

/**
 * Alert that is sent to the staff member when a staff member’s task has reached its due date.
 *
 * @type {number}
 */
Wl_Alert_AlertAbstract.TaskDueAlert = 1428;

/**
 * Alert that is sent to the staff member when a task is created and assigned to them.
 *
 * @type {number}
 */
Wl_Alert_AlertAbstract.TaskNewAlert = 1427;
