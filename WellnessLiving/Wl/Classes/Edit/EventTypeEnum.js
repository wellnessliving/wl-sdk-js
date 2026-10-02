/**
 * Type of the event, which defines how clients book it and how they pay for it.
 */
function Wl_Classes_Edit_EventTypeEnum()
{
  // Empty constructor.
}

/**
 * Clients book the event once and attend every session in the schedule.
 *
 * @type {number}
 */
Wl_Classes_Edit_EventTypeEnum.BLOCK = 2;

/**
 * Clients pick which sessions to book and can pay per session.
 *
 * @type {number}
 */
Wl_Classes_Edit_EventTypeEnum.NON_BLOCK = 1;

/**
 * Tickets are sold for a set number of seats and are paid up front. Anyone can buy a ticket,
 * no account is needed, and every ticket is a QR code that staff scan at the door.
 *
 * @type {number}
 */
Wl_Classes_Edit_EventTypeEnum.TICKETED = 3;
