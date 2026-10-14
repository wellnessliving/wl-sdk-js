/**
 * Event time enrollment rules.
 * Influence only block events.
 */
function Wl_Classes_Edit_EnrollTimeSid()
{
  // Empty constructor.
}

/**
 * Deny enrollment of the event that is in progress.
 *
 * @type {number}
 */
Wl_Classes_Edit_EnrollTimeSid.PROGRESS_DENY = 1;

/**
 * Allow enrollment to event in progress with full payment.
 *
 * @type {number}
 */
Wl_Classes_Edit_EnrollTimeSid.PROGRESS_FULL = 3;

/**
 * Allow enrollment to event in progress with prorated payment.
 *
 * @type {number}
 */
Wl_Classes_Edit_EnrollTimeSid.PROGRESS_PRORATE = 2;
