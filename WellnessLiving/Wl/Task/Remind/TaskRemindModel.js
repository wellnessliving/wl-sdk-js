/**
 * Sends the reminder of a task to its staff now.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Task_Remind_TaskRemindModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * Key of the business in which the staff member works. In a franchise in the flexible travel mode the task may be
   * of another business of the franchise.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the task whose staff get the reminder.
   *
   * @post get
   * @type {string}
   */
  this.k_task = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Task_Remind_TaskRemindModel);

/**
 * @inheritDoc
 */
Wl_Task_Remind_TaskRemindModel.prototype.config=function()
{
  return {"a_field":{"k_business":{"post":{"get":true}},"k_task":{"post":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Task_Remind_TaskRemindModel.instanceGet
 * @param {string} k_business Key of the business in which the staff member works. In a franchise in the flexible travel mode the task may be of another business of the franchise.
 * @returns {Wl_Task_Remind_TaskRemindModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Sends the reminder of a task to its staff now.
 *
 * Every staff member who is assigned to the task and is active in its business gets the notification Task reminder,
 * a completed task included, whether the business turned the notification off or not: the email and the push are
 * always sent, the text message only if the business has it on. Nothing of the task changes, and the result is
 * empty.
 *
 * The request is refused, and nothing is sent, when the task does not exist (`task-nx`), nobody is assigned to it
 * (`staff-nx`), every staff member of the task is inactive (`staff-inactive`), or no active staff member of the
 * task has an email or a mobile phone (`staff-channel`). A staff member who may not change the task is refused too
 * (`access-task`).
 *
 * @function
 * @name Wl_Task_Remind_TaskRemindModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
