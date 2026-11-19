/**
 * A list of tabs in task manager report.
 */
function Wl_Task_Manager_ManagerTabSid()
{
  // Empty constructor.
}

/**
 * Show all tasks.
 *
 * @type {number}
 */
Wl_Task_Manager_ManagerTabSid.ALL = 3;

/**
 * Show tasks in status complete, see {@link Wl_Task_TaskStatusSid.COMPLETE}.
 *
 * @type {number}
 */
Wl_Task_Manager_ManagerTabSid.COMPLETE = 4;

/**
 * Show tasks in future.
 *
 * @type {number}
 */
Wl_Task_Manager_ManagerTabSid.FUTURE = 2;

/**
 * Show the tasks that are overdue: not completed, with the due date and time that have passed.
 *
 * @type {number}
 */
Wl_Task_Manager_ManagerTabSid.OVERDUE = 5;

/**
 * Show tasks for today.
 *
 * @type {number}
 */
Wl_Task_Manager_ManagerTabSid.TODAY = 1;
