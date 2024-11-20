/**
 * This API saves working hours of specified location.
 * Access for this action has logged user with specified permissions or guest during process of registration a new
 * business (see {@link Wl_Business_BusinessModel.sessionKey()}).
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Location_WorkTime_LocationWorkTimeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Location_WorkTime_LocationWorkTimeModel_a_work_time
   * @property {number} i_day Day of the week from 1(Monday) to 7(Sunday). One of the constants from {@link ADateWeekSid}.
   * @property {string} t_end End time of work in format HH:MM.
   * @property {string} t_start Start time of work in format HH:MM.
   */

  /**
   * List of working hours of the location. Each element has next structure:<dl>
   *   <dt>int <var>i_day</var></dt>
   *   <dd>Day of the week from 1(Monday) to 7(Sunday). One of the constants from {@link ADateWeekSid}.</dd>
   *   <dt>string <var>t_end</var></dt>
   *   <dd>End time of work in format HH:MM.</dd>
   *   <dt>string <var>t_start</var></dt>
   *   <dd>Start time of work in format HH:MM.</dd>
   * </dl>
   *
   * <b>Important.</b> Days of the week that are not represented in this list will be saved as non-working days.
   *
   * @post post
   * @type {Wl_Location_WorkTime_LocationWorkTimeModel_a_work_time[]}
   */
  this.a_work_time = [];

  /**
   * Key of the business.
   *
   * @post post
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Key of the location.
   *
   * @post post
   * @type {string}
   */
  this.k_location = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Location_WorkTime_LocationWorkTimeModel);

/**
 * @inheritDoc
 */
Wl_Location_WorkTime_LocationWorkTimeModel.prototype.config=function()
{
  return {"a_field": {"a_work_time": {"post": {"post": true}},"k_business": {"post": {"post": true}},"k_location": {"post": {"post": true}}}};
};