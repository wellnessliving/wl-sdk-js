/**
 * A view of the Task Manager: whose tasks the list shows.
 *
 * The views panel of the page picks a view. A role is a view of the tasks of the staff members who have that role now,
 * the role itself is given beside the view (`k_business_role` and
 * `id_privilege_role`).
 *
 * Last used ID: 3.
 */
function Wl_Task_Manager_TaskManagerViewEnum()
{
  // Empty constructor.
}

/**
 * The tasks of every staff member whose tasks the user may see. The default.
 *
 * @type {number}
 */
Wl_Task_Manager_TaskManagerViewEnum.ALL = 1;

/**
 * The tasks of the signed-in staff member.
 *
 * @type {number}
 */
Wl_Task_Manager_TaskManagerViewEnum.MINE = 2;

/**
 * The tasks of the staff members who have a staff role now.
 *
 * @type {number}
 */
Wl_Task_Manager_TaskManagerViewEnum.ROLE = 3;
