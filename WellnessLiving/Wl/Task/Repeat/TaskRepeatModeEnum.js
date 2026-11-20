/**
 * When the next task of a series is made.
 *
 * Last used ID: 2
 */
function Wl_Task_Repeat_TaskRepeatModeEnum()
{
  // Empty constructor.
}

/**
 * The next task is made when the current one is completed.
 *
 * @type {number}
 */
Wl_Task_Repeat_TaskRepeatModeEnum.COMPLETED = 2;

/**
 * The next task is made on the due date of the current one, whether it is done or not.
 *
 * @type {number}
 */
Wl_Task_Repeat_TaskRepeatModeEnum.SCHEDULE = 1;
