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
  return {"a_field":{"a_k_task":{"post":{"result":true}},"a_staff":{"get":{"result":true},"post":{"post":true}},"a_uid_staff":{"get":{"result":true},"post":{"post":true}},"dl_due":{"get":{"result":true},"post":{"post":true}},"id_task_status":{"get":{"result":true},"post":{"post":true},"put":{"post":true}},"k_business":{"delete":{"get":true},"get":{"get":true},"post":{"get":true},"put":{"get":true}},"k_location":{"get":{"result":true},"post":{"post":true}},"k_task":{"delete":{"get":true},"get":{"get":true},"post":{"get":true,"result":true},"put":{"get":true}},"text_title":{"get":{"result":true},"post":{"post":true}},"tl_due":{"get":{"result":true},"post":{"post":true}},"uid":{"get":{"result":true},"post":{"post":true}},"xml_description":{"get":{"result":true},"post":{"post":true}}}};
};

/**
 * Removes task.
 *
 * Deletes the task record, removes any pending due-date reminder, reindexes search data for
 * the previously assigned client, logs the removal, and notifies the task channel so that
 * connected clients refresh their task list.
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
 * @function
 * @name Wl_Task_Edit_EditModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
