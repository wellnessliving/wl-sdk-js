/**
 * Different types of range to apply rescheduling. Important for recurring appointments that
 * can be changed only once, per date range or forward from current date.
 */
function Wl_Appointment_Edit_EditRangeSid()
{
  // Empty constructor.
}

/**
 * Change all appointment from current one until the end of the recurring appointments.
 *
 * @type {number}
 */
Wl_Appointment_Edit_EditRangeSid.FORWARD = 2;

/**
 * Change only one appointment.
 *
 * @type {number}
 */
Wl_Appointment_Edit_EditRangeSid.ONCE = 1;

/**
 * Change all appointments withing the given date range.
 *
 * @type {number}
 */
Wl_Appointment_Edit_EditRangeSid.RANGE = 3;
