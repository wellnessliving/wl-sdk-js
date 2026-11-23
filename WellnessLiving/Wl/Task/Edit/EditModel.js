/**
 * Removes task.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Task_Edit_EditModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Keys of the tasks saved by the request.
   *
   * When a task is added, the task of every staff member of {@link Wl_Task_Edit_EditModel.a_uid_staff}, in that order; the
   * first of them is also returned in {@link Wl_Task_Edit_EditModel.k_task}. When a task is edited, the edited task alone.
   *
   * @post result
   * @type {string[]}
   */
  this.a_k_task = undefined;

  /**
   * Days of the week of a repeat by weeks on a schedule, each one of {@link ADateWeekSid}.
   * Empty if the repeat is not by weeks, or if the task does not repeat.
   *
   * @get result
   * @post post
   * @type {number[]}
   */
  this.a_repeat_day_week = undefined;

  /**
   * List of staff keys assigned to task.
   *
   * Empty array means not set.
   *
   * When a task is added, every staff member gets a task of their own. When a task is edited, exactly one staff
   * member is given.
   *
   * @deprecated Use {@link Wl_Task_Edit_EditModel.a_uid_staff} instead.
   * @get result
   * @post post
   * @type {string[]}
   */
  this.a_staff = undefined;

  /**
   * List of staff user IDs assigned to task.
   *
   * Empty array means not set.
   *
   * When a task is added, every staff member gets a task of their own. When a task is edited, exactly one staff
   * member is given.
   *
   * @get result
   * @post post
   * @type {string[]}
   */
  this.a_uid_staff = undefined;

  /**
   * Due date.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.dl_due = "";

  /**
   * Last day, in the time zone of the business, on which the next task is still made, in the MySQL format.
   * `null` if the repeat does not end by a date. Set when {@link Wl_Task_Edit_EditModel.id_repeat_end} is {@link Wl_Task_Repeat_TaskRepeatEndEnum}.
   *
   * @get result
   * @post post
   * @type {?string}
   */
  this.dl_repeat_end = null;

  /**
   * Day of the month, 1 to 31, of a repeat by months on a day.
   * `null` if the repeat is not by months on a day. A month that has fewer days gets its last day.
   *
   * @get result
   * @post post
   * @type {?number}
   */
  this.i_repeat_day_month = null;

  /**
   * Total number of tasks of the series, the first one included, after which no task is made.
   * `null` if the repeat does not end by a count. Set when {@link Wl_Task_Edit_EditModel.id_repeat_end} is {@link Wl_Task_Repeat_TaskRepeatEndEnum}.
   *
   * @get result
   * @post post
   * @see Wl_Task_Repeat_TaskRepeatEndEnum
   * @type {?number}
   */
  this.i_repeat_end_count = null;

  /**
   * The number of units of the repeat, 1 to 99: every 2 weeks on a schedule, or the gap after the task is completed.
   * `null` if the task does not repeat.
   *
   * @get result
   * @post post
   * @type {?number}
   */
  this.i_repeat_every = null;

  /**
   * Number of the weekday in the month of a repeat by months on a weekday: one of {@link Wl_Task_Repeat_TaskRepeatOrderEnum}, 1 to
   * 4, or 5 for the last one. `null` if the repeat is not by months on a weekday.
   *
   * @get result
   * @post post
   * @see Wl_Task_Repeat_TaskRepeatOrderEnum
   * @type {?number}
   */
  this.i_repeat_month_order = null;

  /**
   * How the series of repeating tasks ends, one of {@link Wl_Task_Repeat_TaskRepeatEndEnum}.
   * `null` if the task does not repeat.
   *
   * @get result
   * @post post
   * @see Wl_Task_Repeat_TaskRepeatEndEnum
   * @type {?number}
   */
  this.id_repeat_end = null;

  /**
   * When the next task is made, one of {@link Wl_Task_Repeat_TaskRepeatModeEnum}.
   * `null` if the task does not repeat.
   *
   * @get result
   * @post post
   * @see Wl_Task_Repeat_TaskRepeatModeEnum
   * @type {?number}
   */
  this.id_repeat_mode = null;

  /**
   * How a repeat by months chooses the day, one of {@link Wl_Task_Repeat_TaskRepeatMonthEnum}.
   * `null` if the repeat is not by months on a schedule.
   *
   * @get result
   * @post post
   * @see Wl_Task_Repeat_TaskRepeatMonthEnum
   * @type {?number}
   */
  this.id_repeat_month = null;

  /**
   * Day of the week of a repeat by months on a weekday, one of {@link ADateWeekSid}.
   * `null` if the repeat is not by months on a weekday.
   *
   * @get result
   * @post post
   * @see ADateWeekSid
   * @type {number}
   */
  this.id_repeat_month_weekday = 0;

  /**
   * Unit of the repeat, one of {@link Wl_Task_Repeat_TaskRepeatUnitEnum}.
   * `null` if the task does not repeat.
   *
   * @get result
   * @post post
   * @see Wl_Task_Repeat_TaskRepeatUnitEnum
   * @type {?number}
   */
  this.id_repeat_unit = null;

  /**
   * Task status.
   *
   * `null` means not set.
   *
   * @get result
   * @post post
   * @put post
   * @see Wl_Task_TaskStatusSid
   * @type {number}
   */
  this.id_task_status = 0;

  /**
   * Whether the task repeats. The other properties of the repeat are read only if it is `true`.
   * On a save, `null` leaves the repeat of the task as it is, and `false` turns it off.
   *
   * @get result
   * @post post
   * @type {?boolean}
   */
  this.is_repeat = null;

  /**
   * Whether the task had a repeat when the client read it.
   *
   * Optional. An older task of a series shows the rule of the series, and a request that turns the repeat off stops
   * the series only when the client says it read the task with the repeat on. `null` if the client does not send it:
   * then a turn-off on an older task is refused with the code `repeat-series-open`.
   *
   * @post post
   * @type {?boolean}
   */
  this.is_repeat_open = null;

  /**
   * Business key.
   *
   * `null` means not set.
   *
   * @delete get
   * @get get
   * @post get
   * @put get
   * @type {?string}
   */
  this.k_business = null;

  /**
   * Location key.
   *
   * `null` means not set.
   *
   * @get result
   * @post post
   * @type {?string}
   */
  this.k_location = null;

  /**
   * Task key.
   *
   * `null` means not set.
   *
   * @delete get
   * @get get
   * @post get,result
   * @put get
   * @type {?string}
   */
  this.k_task = null;

  /**
   * Task title.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.text_title = "";

  /**
   * Due time.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.tl_due = "";

  /**
   * Client's uid for whom connected task.
   *
   * `null` means not set.
   *
   * @get result
   * @post post
   * @type {?string}
   */
  this.uid = null;

  /**
   * Task description.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.xml_description = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Task_Edit_EditModel);

/**
 * @inheritDoc
 */
Wl_Task_Edit_EditModel.prototype.config=function()
{
  return {"a_field":{"a_k_task":{"post":{"result":true}},"a_repeat_day_week":{"get":{"result":true},"post":{"post":true}},"a_staff":{"get":{"result":true},"post":{"post":true}},"a_uid_staff":{"get":{"result":true},"post":{"post":true}},"dl_due":{"get":{"result":true},"post":{"post":true}},"dl_repeat_end":{"get":{"result":true},"post":{"post":true}},"i_repeat_day_month":{"get":{"result":true},"post":{"post":true}},"i_repeat_end_count":{"get":{"result":true},"post":{"post":true}},"i_repeat_every":{"get":{"result":true},"post":{"post":true}},"i_repeat_month_order":{"get":{"result":true},"post":{"post":true}},"id_repeat_end":{"get":{"result":true},"post":{"post":true}},"id_repeat_mode":{"get":{"result":true},"post":{"post":true}},"id_repeat_month":{"get":{"result":true},"post":{"post":true}},"id_repeat_month_weekday":{"get":{"result":true},"post":{"post":true}},"id_repeat_unit":{"get":{"result":true},"post":{"post":true}},"id_task_status":{"get":{"result":true},"post":{"post":true},"put":{"post":true}},"is_repeat":{"get":{"result":true},"post":{"post":true}},"is_repeat_open":{"post":{"post":true}},"k_business":{"delete":{"get":true},"get":{"get":true},"post":{"get":true},"put":{"get":true}},"k_location":{"get":{"result":true},"post":{"post":true}},"k_task":{"delete":{"get":true},"get":{"get":true},"post":{"get":true,"result":true},"put":{"get":true}},"text_title":{"get":{"result":true},"post":{"post":true}},"tl_due":{"get":{"result":true},"post":{"post":true}},"uid":{"get":{"result":true},"post":{"post":true}},"xml_description":{"get":{"result":true},"post":{"post":true}}}};
};

/**
 * Removes task.
 *
 * Deletes the task record, removes any pending due-date reminder, reindexes search data for
 * the previously assigned client, logs the removal, and notifies the task channel so that
 * connected clients refresh their task list.
 *
 * If the task carries the rule of a repeat, the repeat ends with it.
 *
 * @function
 * @name Wl_Task_Edit_EditModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Returns data for task edit form.
 *
 * Loads the task and fills the response fields the edit form needs: assigned staff, due date
 * and time, status, location, title, client, and description.
 *
 * @function
 * @name Wl_Task_Edit_EditModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Adds or changes task.
 *
 * Validates the submitted task data, saves it in a transaction, reindexes search data for the
 * previously and newly assigned clients, logs the change, sends an assignment notification
 * email to newly assigned staff, and notifies the task channel.
 *
 * When a task is added, every staff member gets a task of their own, all of them saved in one transaction: either
 * all the tasks are created, or none. When a task is edited, exactly one staff member is given. Inactive staff
 * members, and staff members the current user may not assign a task to, are refused; a staff member who is
 * already assigned to the edited task may stay there. The keys of the saved tasks are returned in `a_k_task`.
 *
 * @function
 * @name Wl_Task_Edit_EditModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */

/**
 * Changes task status.
 *
 * Updates the task status, logs the change, and notifies the task channel so that connected
 * clients refresh their task list.
 *
 * If the task is set to Completed and repeats "when this one is completed", the next task of the repeat is made,
 * and its staff are notified as of any new task. A status other than Completed, and a task that was Completed
 * already, make nothing.
 *
 * @function
 * @name Wl_Task_Edit_EditModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
