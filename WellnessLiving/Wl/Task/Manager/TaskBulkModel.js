/**
 * Removes the tasks that the staff member selected.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Task_Manager_TaskBulkModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * Keys of the selected tasks, each at most once, no more than 100: the largest size of a page of the Task Manager.
   *
   * @delete get
   * @post get
   * @put get
   * @type {string[]}
   */
  this.a_k_task = undefined;

  /**
   * The new due date of the tasks, in the time zone of the business, as `2026-12-31`. For `put`; `null` to keep the date
   * of every task, and then the time of the day is kept or changed alone by `tl_due`.
   *
   * @put post
   * @type {?string}
   */
  this.dl_due = null;

  /**
   * How many of the selected tasks the request changed (or removed, or reminded of).
   *
   * @delete result
   * @post result
   * @put result
   * @type {number}
   */
  this.i_done = undefined;

  /**
   * How many of the selected tasks the request skipped: a task that someone removed after the staff member selected
   * it, and, for the reminder, a task that has nobody assigned to it. `i_done` and `i_skip` together make the number
   * of the selected tasks.
   *
   * @delete result
   * @post result
   * @put result
   * @type {number}
   */
  this.i_skip = undefined;

  /**
   * The new status of the tasks, one of {@link Wl_Task_TaskStatusSid} constants. For `put`; {@link Wl_Task_TaskStatusSid}
   * with nothing else given is the "Mark complete" of the page. A task that already has the status keeps it.
   *
   * @put post
   * @see Wl_Task_TaskStatusSid
   * @type {?number}
   */
  this.id_task_status = null;

  /**
   * Whether `put` takes the client off the tasks ("No client"). Not given together with `uid`.
   *
   * @put post
   * @type {boolean}
   */
  this.is_client_clear = false;

  /**
   * Key of the business of the Task Manager. In a franchise in the flexible travel mode the tasks of the other
   * businesses of the franchise may be selected too.
   *
   * @delete get
   * @post get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The new due time of the tasks, in the time zone of the business, as `09:30:00`. For `put`; `null` to keep the time
   * of every task.
   *
   * @put post
   * @type {?string}
   */
  this.tl_due = null;

  /**
   * Key of the client to put to the tasks. For `put`; `null` to keep the client of every task. Not given together
   * with `is_client_clear`.
   *
   * @put post
   * @type {?string}
   */
  this.uid = null;

  /**
   * Key of the staff member to assign the tasks to. For `put`; `null` to keep the staff of every task. The task gets
   * the staff member instead of the one it had: a task has one.
   *
   * @put post
   * @type {?string}
   */
  this.uid_staff = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Task_Manager_TaskBulkModel);

/**
 * @inheritDoc
 */
Wl_Task_Manager_TaskBulkModel.prototype.config=function()
{
  return {"a_field":{"a_k_task":{"delete":{"get":true},"post":{"get":true},"put":{"get":true}},"dl_due":{"put":{"post":true}},"i_done":{"delete":{"result":true},"post":{"result":true},"put":{"result":true}},"i_skip":{"delete":{"result":true},"post":{"result":true},"put":{"result":true}},"id_task_status":{"put":{"post":true}},"is_client_clear":{"put":{"post":true}},"k_business":{"delete":{"get":true},"post":{"get":true},"put":{"get":true}},"tl_due":{"put":{"post":true}},"uid":{"put":{"post":true}},"uid_staff":{"put":{"post":true}}}};
};

/**
 * @function
 * @name Wl_Task_Manager_TaskBulkModel.instanceGet
 * @param {string} k_business Key of the business of the Task Manager. In a franchise in the flexible travel mode the tasks of the other businesses of the franchise may be selected too.
 * @returns {Wl_Task_Manager_TaskBulkModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Removes the tasks that the staff member selected.
 *
 * Removes them all or none (the same removal as `delete()` does for one task, the series of a repeat
 * that is left empty goes too). A task that someone removed already is skipped and counted in `i_skip`.
 *
 * @function
 * @name Wl_Task_Manager_TaskBulkModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Sends the notification Task reminder to the staff of the selected tasks, now.
 *
 * Every staff member who is assigned to a selected task and is active in its business gets it, a completed task
 * included, and it is sent whether the business turned the notification off or not: the email and the push are
 * always sent, the text message only if the business has it on. A staff member keeps the choice of their own
 * profile. A task that has nobody to remind, and a task that someone removed already, are skipped and counted in
 * `i_skip`. Nothing of the task changes.
 *
 * @function
 * @name Wl_Task_Manager_TaskBulkModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */

/**
 * Changes the tasks that the staff member selected.
 *
 * Sets the status, the due date and time, the client and the staff of every selected task: a field that is not given
 * keeps the value that the task has. The status alone is the "Mark complete" of the page when it is
 * {@link Wl_Task_TaskStatusSid}: a task of a repeat "when this one is completed" makes its next task, as
 * `put()` does for one task; with the status alone a task that has the status already is not changed,
 * and is skipped and counted in `i_skip`, as a task that someone removed already is. A new due date of a task of a
 * repeat follows the rules of the repeat, and a staff member who gets a task gets the notification and the alert of
 * a new task.
 *
 * @function
 * @name Wl_Task_Manager_TaskBulkModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
