/**
 * Saves working hours of the location.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Location_WorkTime_LocationWorkTimeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Location_WorkTime_LocationWorkTimeModel_a_work_time
   * @property {number} i_day The day of the week, from Monday (1) to Sunday (7). One of the{@link ADateWeekSid} constants.
   * @property {number} t_end The end time of work, formatted as HH:MM.
   * @property {number} t_start The start time of work, formatted as HH:MM
   */

  /**
   * The list of the location's business hours. Each element has the next structure:
   *
   * Note that the days of the week that aren't represented in this list will be saved as non-working days.
   *
   * @post post
   * @type {Wl_Location_WorkTime_LocationWorkTimeModel_a_work_time[]}
   */
  this.a_work_time = undefined;

  /**
   * The business key.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * The location key.
   *
   * @post post
   * @type {string}
   */
  this.k_location = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Location_WorkTime_LocationWorkTimeModel);

/**
 * @inheritDoc
 */
Wl_Location_WorkTime_LocationWorkTimeModel.prototype.config=function()
{
  return {"a_field":{"a_work_time":{"post":{"post":true}},"k_business":{"post":{"post":true}},"k_location":{"post":{"post":true}}}};
};

/**
 * Saves working hours of the location.
 *
 * Accepts a list of day-and-time-range entries representing the weekly schedule and replaces all existing
 * working hours for the location. Days not present in the list are treated as non-working days.
 *
 * @function
 * @name Wl_Location_WorkTime_LocationWorkTimeModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
