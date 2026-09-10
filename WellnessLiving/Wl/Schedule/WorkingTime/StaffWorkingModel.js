/**
 * Gets working hours for some staff.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_WorkingTime_StaffWorkingModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_staff,k_location,k_business,k_service,dl_start,dl_end,uid_staff";

  /**
   * @typedef {{}} Wl_Schedule_WorkingTime_StaffWorkingModel_a_staff_period_dl_day_a_break
   * @property {?string[]} a_service Services that affect this hours. Primary keys in  table. `null` if affects all services.
   * @property {string} dtu_create Date when created period.
   * @property {string} html_break_note Info about when break time. Be present only in unavailable time.
   * @property {number} i_end End time. In seconds.
   * @property {number} i_start Start time. In seconds.
   * @property {string} k_location Primary key of location in  table.
   * @property {string} text_note Note to available/unavailable time.
   */

  /**
   * @typedef {{}} Wl_Schedule_WorkingTime_StaffWorkingModel_a_staff_period_dl_day_a_work
   * @property {?string[]} a_service Services that affect this hours. Primary keys in  table. `null` if affects all services.
   * @property {string} dtu_create Date when created period.
   * @property {string} html_break_note Info about when break time. Be present only in unavailable time.
   * @property {number} i_end End time. In seconds.
   * @property {number} i_start Start time. In seconds.
   * @property {string} k_location Primary key of location in  table.
   * @property {string} text_note Note to available/unavailable time.
   */

  /**
   * @typedef {{}} Wl_Schedule_WorkingTime_StaffWorkingModel_a_staff_period_dl_day
   * @property {Wl_Schedule_WorkingTime_StaffWorkingModel_a_staff_period_dl_day_a_break} a_break Hours of break. Keys - primary keys in one of period table; values - arrays with keys:
   * @property {Wl_Schedule_WorkingTime_StaffWorkingModel_a_staff_period_dl_day_a_work} a_work Working hours. Each element:
   */

  /**
   * @typedef {{}} Wl_Schedule_WorkingTime_StaffWorkingModel_a_staff_period
   * @property {Wl_Schedule_WorkingTime_StaffWorkingModel_a_staff_period_dl_day} dl_day Array with keys as day from range and values - arrays with keys:
   */

  /**
   * Staff period.
   *
   * @get result
   * @type {Wl_Schedule_WorkingTime_StaffWorkingModel_a_staff_period}
   */
  this.a_staff_period = undefined;

  /**
   * End date of the staff working.
   *
   * @get get
   * @type {string}
   */
  this.dl_end = "";

  /**
   * Start date of the staff working.
   *
   * @get get
   * @type {string}
   */
  this.dl_start = "";

  /**
   * Business key.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Location to show available appointment booking schedule.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "";

  /**
   * Service key.
   *
   * @get get
   * @type {string}
   */
  this.k_service = "";

  /**
   * Staff Key to show what days are available for appointment booking.
   *
   * @deprecated Use {@link Wl_Schedule_WorkingTime_StaffWorkingModel.uid_staff} instead.
   * @get get
   * @type {?string}
   */
  this.k_staff = null;

  /**
   * Staff UID to show what days are available for appointment booking.
   *
   * @get get
   * @type {?string}
   */
  this.uid_staff = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_WorkingTime_StaffWorkingModel);

/**
 * @inheritDoc
 */
Wl_Schedule_WorkingTime_StaffWorkingModel.prototype.config=function()
{
  return {"a_field":{"a_staff_period":{"get":{"result":true}},"dl_end":{"get":{"get":true}},"dl_start":{"get":{"get":true}},"k_business":{"get":{"get":true}},"k_location":{"get":{"get":true}},"k_service":{"get":{"get":true}},"k_staff":{"get":{"get":true}},"uid_staff":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Schedule_WorkingTime_StaffWorkingModel.instanceGet
 * @param {?string} k_staff Staff Key to show what days are available for appointment booking.
 * @param {string} k_location Location to show available appointment booking schedule.
 * @param {string} k_business Business key.
 * @param {string} k_service Service key.
 * @param {string} dl_start Start date of the staff working.
 * @param {string} dl_end End date of the staff working.
 * @param {?string} uid_staff Staff UID to show what days are available for appointment booking.
 * @returns {Wl_Schedule_WorkingTime_StaffWorkingModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets working hours for some staff.
 *
 * Returns the working and break periods, with time already occupied cut out, for the requested
 * staff within the given date range at the given location. When no staff identifier is given,
 * the periods are returned for all staff of the business. Exactly one of `k_staff` or
 * `uid_staff` may be provided.
 *
 * @function
 * @name Wl_Schedule_WorkingTime_StaffWorkingModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
