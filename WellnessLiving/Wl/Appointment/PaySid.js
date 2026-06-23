/**
 * The possible payment types an appointment can have.
 */
function Wl_Appointment_PaySid()
{
  // Empty constructor.
}

/**
 * A deposit was paid.
 *
 * @type {number}
 */
Wl_Appointment_PaySid.DEPOSIT = 2;

/**
 * Appointment is free and does not require payment.
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
 * Nothing was paid.
 *
 * @type {number}
 */
Wl_Appointment_PaySid.NONE = 1;
