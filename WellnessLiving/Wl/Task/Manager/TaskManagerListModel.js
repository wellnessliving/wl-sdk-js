/**
 * Returns one page of the tasks of the Task Manager.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Task_Manager_TaskManagerListModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * @typedef {{}} Wl_Task_Manager_TaskManagerListModel_a_count
   * @property {number} i_all Every task the user may see.
   * @property {number} i_complete The tasks that are completed.
   * @property {number} i_future The tasks that are not completed: to do and in progress.
   * @property {number} i_today The tasks due today, in the time zone of the business.
   */

  /**
   * How many tasks each tab of the page has: 
   *
   * A count follows the view and not the staff filter, the search or the other filters.
   *
   * @get result
   * @type {Wl_Task_Manager_TaskManagerListModel_a_count}
   */
  this.a_count = undefined;

  /**
   * @typedef {{}} Wl_Task_Manager_TaskManagerListModel_a_row
   * @property {string} dtl_add The date and the time when the task was created, in the time zone of the business, MySQL format.
   * @property {string} dtl_due The date and the time when the task is due, in the time zone of the business, MySQL format.
   * @property {string} html_description The description of the task, made into HTML from the visual editor. An empty string without one.
   * @property {number} id_task_status The status of the task. One of {@link Wl_Task_TaskStatusSid} constants.
   * @property {string} k_business Key of the business of the task: the business of the request, or another location of a franchise in the flexible travel mode.
   * @property {string} k_task Task key.
   * @property {string} text_add The date and the time when the task was created, as the page shows it: "Fri, Dec 30, 2022 at 3:00 pm".
   * @property {string} text_client_mail The email of the client. An empty string when the task has no client or the client has no email.
   * @property {string} text_client_member The ID of the client in the business. An empty string when the task has no client or the client has none.
   * @property {string} text_client_name The full name of the client. An empty string when the task has no client.
   * @property {string} text_client_phone The cell phone of the client, formatted. An empty string when the task has no client or the client has no cell phone.
   * @property {string} text_create Who created the task. An empty string when the task keeps no author.
   * @property {string} text_due The date and the time when the task is due, as the page shows it: "Fri, Dec 30, 2022 at 3:00 pm".
   * @property {string} text_staff The full name of the staff member the task is assigned to. An empty string when that user is no staff member of the business of the task.
   * @property {string} text_title The name of the task.
   * @property {?string} uid Key of the client of the task. `null` when the task has no client.
   * @property {string} uid_staff Key of the user the task is assigned to.
   * @property {string} url_client_photo The address of the photo of the client. An empty string when the task has no client or the client has no photo.
   * @property {string} url_client_profile The address of the profile of the client. An empty string when the task has no client.
   * @property {string} url_edit The address of the form that edits the task.
   * @property {string} url_staff The address of the profile of the staff member the task is assigned to, as the old report linked it. An empty string when that user is no staff member of the business of the page: a staff member of another location of a franchise has no profile here.
   */

  /**
   * The tasks of the page, in the order of the sort:
   *
   * @get result
   * @type {Wl_Task_Manager_TaskManagerListModel_a_row[]}
   */
  this.a_row = undefined;

  /**
   * @typedef {{}} Wl_Task_Manager_TaskManagerListModel_a_staff
   * @property {string} text_name The full name of the staff member.
   * @property {string} uid Key of the staff member.
   */

  /**
   * The staff members that the staff filter offers, sorted by the name: those of the picked view whom the user may
   * see, the staff members of the role in a role view. The staff filter does not narrow them.
   *
   * @get result
   * @type {Wl_Task_Manager_TaskManagerListModel_a_staff[]}
   */
  this.a_staff = undefined;

  /**
   * The locations of the staff members whose tasks are shown, for a franchise in the flexible travel mode. One of
   * {@link Wl_Report_Filter_TaskLocation_TaskLocationSid} constants each.
   * `null` to show the tasks of the staff of the home location, which is the default in that mode; both locations to
   * show every location. Ignored outside that mode.
   *
   * @get get
   * @type {?number[]}
   */
  this.a_task_location = null;

  /**
   * The statuses of the tasks to show. One of {@link Wl_Task_TaskStatusSid} constants each.
   * `null` to show the tasks of every status.
   *
   * @get get
   * @type {?number[]}
   */
  this.a_task_status = null;

  /**
   * Keys of the staff members whose tasks are shown. 
   * `null` to show the tasks of every staff member the user may see.
   *
   * @get get
   * @type {?string[]}
   */
  this.a_uid_staff = null;

  /**
   * @typedef {{}} Wl_Task_Manager_TaskManagerListModel_a_view_a_role
   * @property {number} i_task The tasks that are not completed, of the staff members who have the role now.
   * @property {?number} id_privilege_role The system role. One of {@link RsPrivilegeRoleSid} constants. `null` for a role of the business that is based on no system role.
   * @property {?string} k_business_role Key of the role of the business.  `null` for a system role that the business has not changed.
   * @property {string} text_title Title of the role.
   */

  /**
   * @typedef {{}} Wl_Task_Manager_TaskManagerListModel_a_view
   * @property {Wl_Task_Manager_TaskManagerListModel_a_view_a_role} a_role The staff roles of the business that have a staff member whose tasks the user may see, in the order of the setup of the business. Each element has the following structure:
   * @property {number} i_all The tasks that are not completed, of every staff member whose tasks the user may see.
   * @property {number} i_mine The tasks that are not completed, of the signed-in staff member.
   */

  /**
   * How many open tasks each view of the views panel has: 
   *
   * The counts follow neither the picked view nor the filters. An empty array when the user may not see the views
   * panel ({@link Wl_Task_Manager_TaskManagerListModel.can_view}).
   *
   * @get result
   * @type {Wl_Task_Manager_TaskManagerListModel_a_view}
   */
  this.a_view = undefined;

  /**
   * Whether the signed-in user may add tasks.
   *
   * @get result
   * @type {boolean}
   */
  this.can_add = undefined;

  /**
   * Whether the signed-in user may edit the tasks. Without it the user only changes their status.
   *
   * @get result
   * @type {boolean}
   */
  this.can_edit = undefined;

  /**
   * Whether the page offers the views panel: the user may see the tasks of every staff member, which is the privilege
   * "All tasks". Without it the user sees their own tasks only, and every view would show the same ones.
   *
   * @get result
   * @type {boolean}
   */
  this.can_view = undefined;

  /**
   * The last day of the due dates of the shown tasks, in the time zone of the business, MySQL format.
   * `null` for no limit.
   *
   * @get get
   * @type {?string}
   */
  this.dl_due_end = null;

  /**
   * The first day of the due dates of the shown tasks, in the time zone of the business, MySQL format.
   * `null` for no limit.
   *
   * @get get
   * @type {?string}
   */
  this.dl_due_start = null;

  /**
   * Today in the time zone of the business, MySQL format: the day of the tab "Due today".
   *
   * @get result
   * @type {string}
   */
  this.dl_today = undefined;

  /**
   * The number of the page, from 1. The first page when it is not given.
   *
   * @get get
   * @type {?number}
   */
  this.i_page = null;

  /**
   * How many tasks a page has: 25, 50 or 100. 25 when it is not given.
   *
   * @get get
   * @type {?number}
   */
  this.i_page_size = null;

  /**
   * How many tasks the selection has over every page.
   *
   * @get result
   * @type {number}
   */
  this.i_total = undefined;

  /**
   * The column that sorts the list. One of {@link Wl_Task_Manager_TaskManagerColumnEnum} cases but Date created.
   * `null` to sort by the due date.
   *
   * @get get
   * @see Wl_Task_Manager_TaskManagerColumnEnum
   * @type {?number}
   */
  this.id_column_sort = null;

  /**
   * The system role of the view of a role, a system role that the business has not changed. One of
   * {@link RsPrivilegeRoleSid} constants. Given for the view {@link Wl_Task_Manager_TaskManagerViewEnum} and for a system role
   * only. `null` for every other view and for a role of the business ({@link Wl_Task_Manager_TaskManagerListModel.k_business_role}).
   *
   * @get get
   * @see RsPrivilegeRoleSid
   * @type {?number}
   */
  this.id_privilege_role = null;

  /**
   * The tab of the page that the filters of the status and of the date make. One of {@link Wl_Task_Manager_ManagerTabSid} constants.
   *
   * @get result
   * @see Wl_Task_Manager_ManagerTabSid
   * @type {number}
   */
  this.id_tab = undefined;

  /**
   * The view of the list: whose tasks it shows. One of {@link Wl_Task_Manager_TaskManagerViewEnum} cases.
   * `null` for the view of every staff member the user may see.
   *
   * @get get
   * @see Wl_Task_Manager_TaskManagerViewEnum
   * @type {?number}
   */
  this.id_view = null;

  /**
   * Whether the list is sorted in the reverse order: Z to A, newest first.
   * `null` for the direct order.
   *
   * @get get
   * @type {?boolean}
   */
  this.is_sort_desc = null;

  /**
   * Whether the page offers the filter of the location: a franchise in the flexible travel mode.
   *
   * @get result
   * @type {boolean}
   */
  this.is_task_location = undefined;

  /**
   * Key of the business of the page.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the role of the business of the view of a role. 
   * Given for the view {@link Wl_Task_Manager_TaskManagerViewEnum} and for a role of the business only. `null` for every other
   * view and for a system role ({@link Wl_Task_Manager_TaskManagerListModel.id_privilege_role}).
   *
   * @get get
   * @type {?string}
   */
  this.k_business_role = null;

  /**
   * The text to search in the names of the tasks and in the names, the emails and the keys of their clients.
   * `null` not to search.
   *
   * @get get
   * @type {?string}
   */
  this.text_search = null;

  /**
   * The address of the form that adds a task.
   *
   * @get result
   * @type {string}
   */
  this.url_add = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Task_Manager_TaskManagerListModel);

/**
 * @inheritDoc
 */
Wl_Task_Manager_TaskManagerListModel.prototype.config=function()
{
  return {"a_field":{"a_count":{"get":{"result":true}},"a_row":{"get":{"result":true}},"a_staff":{"get":{"result":true}},"a_task_location":{"get":{"get":true}},"a_task_status":{"get":{"get":true}},"a_uid_staff":{"get":{"get":true}},"a_view":{"get":{"result":true}},"can_add":{"get":{"result":true}},"can_edit":{"get":{"result":true}},"can_view":{"get":{"result":true}},"dl_due_end":{"get":{"get":true}},"dl_due_start":{"get":{"get":true}},"dl_today":{"get":{"result":true}},"i_page":{"get":{"get":true}},"i_page_size":{"get":{"get":true}},"i_total":{"get":{"result":true}},"id_column_sort":{"get":{"get":true}},"id_privilege_role":{"get":{"get":true}},"id_tab":{"get":{"result":true}},"id_view":{"get":{"get":true}},"is_sort_desc":{"get":{"get":true}},"is_task_location":{"get":{"result":true}},"k_business":{"get":{"get":true}},"k_business_role":{"get":{"get":true}},"text_search":{"get":{"get":true}},"url_add":{"get":{"result":true}}}};
};

/**
 * @function
 * @name Wl_Task_Manager_TaskManagerListModel.instanceGet
 * @param {string} k_business Key of the business of the page.
 * @returns {Wl_Task_Manager_TaskManagerListModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns one page of the tasks of the Task Manager.
 *
 * Gives the tasks that the signed-in staff member may see in the business, searched, filtered, sorted and cut into
 * pages, with the counts of the tabs and the staff members the staff filter offers. A staff member without the
 * privilege "All tasks" sees only the tasks assigned to them. In a franchise in the flexible travel mode the tasks of
 * every location are listed, and the filter of the location picks the staff of the home location (the default), of
 * the other locations or of every location. The view of the list narrows the tasks to those of the signed-in staff
 * member or of the staff members who have a staff role, and the counts of the views are given with it.
 *
 * @function
 * @name Wl_Task_Manager_TaskManagerListModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
