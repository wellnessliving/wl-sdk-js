/**
 * A column of the table of the Task Manager.
 *
 * A staff member shows, hides and orders the columns in the panel "Columns" of the page; the shown columns in their
 * order are kept by {@link Wl_User_Config_Option_OptionAbstract}.
 *
 * Last used ID: 7.
 */
function Wl_Task_Manager_TaskManagerColumnEnum()
{
  // Empty constructor.
}

/**
 * The client of the task.
 *
 * @type {number}
 */
Wl_Task_Manager_TaskManagerColumnEnum.CLIENT = 2;

/**
 * The staff member who created the task.
 *
 * @type {number}
 */
Wl_Task_Manager_TaskManagerColumnEnum.CREATE = 5;

/**
 * The date and the time when the task was created. Hidden by default.
 *
 * @type {number}
 */
Wl_Task_Manager_TaskManagerColumnEnum.DATE_ADD = 7;

/**
 * The date and the time when the task is due.
 *
 * @type {number}
 */
Wl_Task_Manager_TaskManagerColumnEnum.DUE = 4;

/**
 * The staff member the task is assigned to.
 *
 * @type {number}
 */
Wl_Task_Manager_TaskManagerColumnEnum.STAFF = 3;

/**
 * The status of the task.
 *
 * @type {number}
 */
Wl_Task_Manager_TaskManagerColumnEnum.STATUS = 6;

/**
 * The name and the description of the task. Always shown: a row without it cannot be read.
 *
 * @type {number}
 */
Wl_Task_Manager_TaskManagerColumnEnum.TASK = 1;
