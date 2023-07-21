/**
 * A list of payment types that can be used for an appointment.
 */
function Wl_Appointment_PaySid()
{
  // Empty constructor.
}

/**
 * The deposit was paid.
 *
 * @type {number}
 */
Wl_Appointment_PaySid.DEPOSIT = 2;

/**
 * The appointment is free and doesn't require payment.
 *
 * @type {number}
 */
Wl_Appointment_PaySid.FREE = 4;

/**
 * The full price was paid.
 *
 * @type {number}
 */
Wl_Appointment_PaySid.FULL = 3;

/**
 * No payment was paid.
 *
 * @type {number}
 */
Wl_Appointment_PaySid.NONE = 1;