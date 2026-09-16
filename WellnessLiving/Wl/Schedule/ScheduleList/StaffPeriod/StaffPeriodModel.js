/**
 * Returns working hours list for business staff members in given day.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_ScheduleList_StaffPeriod_StaffPeriodModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "dt_date,k_business";

  /**
   * Working hours list keyed by `uid_staff`.
   * For applications in the `APPS_USE_OLD_K_STAFF` allow-list, keys are legacy `k_staff`.
   *
   * Each value describes the working hours of the staff member for the requested date:
   *
   * @get result
   * @type {{}}
   */
  this.a_staff_period = undefined;

  /**
   * Date for which working hours are required.
   * In business timezone.
   *
   * @get get
   * @type {string}
   */
  this.dt_date = "";

  /**
   * Key of business for which working hours are required.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_ScheduleList_StaffPeriod_StaffPeriodModel);

/**
 * @inheritDoc
 */
Wl_Schedule_ScheduleList_StaffPeriod_StaffPeriodModel.prototype.config=function()
{
  return {"a_field":{"a_staff_period":{"get":{"result":true}},"dt_date":{"get":{"get":true}},"k_business":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Schedule_ScheduleList_StaffPeriod_StaffPeriodModel.instanceGet
 * @param {string} dt_date Date for which working hours are required. In business timezone.
 * @param {string} k_business Key of business for which working hours are required.
 * @returns {Wl_Schedule_ScheduleList_StaffPeriod_StaffPeriodModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns working hours list for business staff members in given day.
 *
 * Resolves the staff members visible to the current user: a staff member with administrative or
 * foreign-schedule privileges sees all active staff members, otherwise only their own working
 * hours are returned. Returns the break and work periods for the requested date for each
 * resolved staff member.
 *
 * @function
 * @name Wl_Schedule_ScheduleList_StaffPeriod_StaffPeriodModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
