/**
 * Returns the settings of the table of the Task Manager of the signed-in staff member.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Task_Manager_TaskManagerOptionModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * The shown columns in their order. One of {@link Wl_Task_Manager_TaskManagerColumnEnum} cases each, as IDs.
   *
   * The answer of `get` always holds the column Task. For `put`: `null` to keep the columns as they are; the column
   * Task is added first when the list does not have it, because it is always shown.
   *
   * @get result
   * @put post
   * @type {?number[]}
   */
  this.a_column = null;

  /**
   * How many tasks a page of the table has: 25, 50 or 100.
   *
   * The answer of `get` always holds it. For `put`: `null` to keep the size as it is.
   *
   * @get result
   * @put post
   * @type {?number}
   */
  this.i_page_size = null;

  /**
   * Whether `put` sets the columns and their order back to the default. `a_column` is not given then.
   *
   * @put post
   * @type {?boolean}
   */
  this.is_reset = null;

  /**
   * Key of the business whose Task Manager the settings belong to.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Task_Manager_TaskManagerOptionModel);

/**
 * @inheritDoc
 */
Wl_Task_Manager_TaskManagerOptionModel.prototype.config=function()
{
  return {"a_field":{"a_column":{"get":{"result":true},"put":{"post":true}},"i_page_size":{"get":{"result":true},"put":{"post":true}},"is_reset":{"put":{"post":true}},"k_business":{"get":{"get":true},"put":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Task_Manager_TaskManagerOptionModel.instanceGet
 * @param {string} k_business Key of the business whose Task Manager the settings belong to.
 * @returns {Wl_Task_Manager_TaskManagerOptionModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns the settings of the table of the Task Manager of the signed-in staff member.
 *
 * Gives the shown columns in their order and the size of a page that the staff member chose in the business, or
 * the defaults when they changed nothing: every column but Date created, and 25 tasks a page.
 *
 * @function
 * @name Wl_Task_Manager_TaskManagerOptionModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Saves the settings of the table of the Task Manager of the signed-in staff member.
 *
 * Saves the shown columns in their order, or sets them back to the default, and the size of a page. A setting
 * that is not given stays as it is. The settings are kept per staff member and business.
 *
 * @function
 * @name Wl_Task_Manager_TaskManagerOptionModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
