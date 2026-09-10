/**
 * Gets a list of classes/events which must be represented on schedule.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_ScheduleList_StaffApp_Classes_ScheduleListClassesModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid,is_event";

  /**
   * List of classes/events.
   * Keys - class/event IDs. 
   * Values - class/event titles.
   *
   * @get result
   * @type {string[]}
   */
  this.a_class = undefined;

  /**
   * `true` - to return events; `false` - to return classes.
   *
   * @get get
   * @type {boolean}
   */
  this.is_event = false;

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * User key.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_ScheduleList_StaffApp_Classes_ScheduleListClassesModel);

/**
 * @inheritDoc
 */
Wl_Schedule_ScheduleList_StaffApp_Classes_ScheduleListClassesModel.prototype.config=function()
{
  return {"a_field":{"a_class":{"get":{"result":true}},"is_event":{"get":{"get":true}},"k_business":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Schedule_ScheduleList_StaffApp_Classes_ScheduleListClassesModel.instanceGet
 * @param {string} k_business Business key.
 * @param {string} uid User key.
 * @param {boolean} is_event `true` - to return events; `false` - to return classes.
 * @returns {Wl_Schedule_ScheduleList_StaffApp_Classes_ScheduleListClassesModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets a list of classes/events which must be represented on schedule.
 *
 * Validates the business and checks the current user's schedule access, then loads the classes
 * or events (depending on {@link Wl_Schedule_ScheduleList_StaffApp_Classes_ScheduleListClassesModel.is_event}) that should be selectable
 * in the staff schedule filter, keyed by their key with the title as value.
 *
 * @function
 * @name Wl_Schedule_ScheduleList_StaffApp_Classes_ScheduleListClassesModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
