/**
 * List of options to add client to attendance list.
 */
function Wl_Login_Attendance_AddOptionSid()
{
  // Empty constructor.
}

/**
 * Add client to attendance list and charge his account.
 *
 * @type {number}
 */
Wl_Login_Attendance_AddOptionSid.DEBIT = 2;

/**
 * Add client to attendance list and pay now.
 *
 * @type {number}
 */
Wl_Login_Attendance_AddOptionSid.PAY = 3;

/**
 * Add client to attendance list without payment.
 *
 * @type {number}
 */
Wl_Login_Attendance_AddOptionSid.UNPAID = 1;
