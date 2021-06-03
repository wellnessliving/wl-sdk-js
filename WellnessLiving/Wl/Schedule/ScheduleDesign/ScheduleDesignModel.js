/**
 * Schedule design data.
 *
 * This API is not located in Wl\Schedule\Design because in this case core does not recognize URL correctly.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_ScheduleDesign_ScheduleDesignModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * Schedule time interval in minutes.
   *
   * @get result
   * @type {number}
   */
  this.i_interval = undefined;

  /**
   * Option of appointments display. One of {@link \Wl\Schedule\Design\OptionSid} constants.
   *
   * @get result
   * @type {number}
   */
  this.id_option = undefined;

  /**
   * Day ID of the start week.
   *
   * Constant from {@link WeekDaySid}.
   *
   * @get result
   * @type {number}
   */
  this.id_start_week = undefined;

  /**
   * Business key. Primary key in {@link \RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Cell background color when staff member is available.
   *
   * @get result
   * @type {?string}
   */
  this.s_color_staff_available = null;

  /**
   * Cell background color when staff member is not available.
   *
   * @get result
   * @type {?string}
   */
  this.s_color_staff_busy = null;

  /**
   * Color of staff name when staff was substituted.
   *
   * @get result
   * @type {?string}
   */
  this.s_color_staff_substitute = null;

  /**
   * User key. Primary key in {@link \PassportLoginSql} table.
   *
   * @get get
   * @type {string}
   */
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_ScheduleDesign_ScheduleDesignModel);

/**
 * @inheritDoc
 */
Wl_Schedule_ScheduleDesign_ScheduleDesignModel.prototype.config=function()
{
  return {"a_field": {"i_interval": {"get": {"result": true}},"id_option": {"get": {"result": true}},"id_start_week": {"get": {"result": true}},"k_business": {"get": {"get": true}},"s_color_staff_available": {"get": {"result": true}},"s_color_staff_busy": {"get": {"result": true}},"s_color_staff_substitute": {"get": {"result": true}},"uid": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Schedule_ScheduleDesign_ScheduleDesignModel.instanceGet
 * @param {string} k_business Business key. Primary key in {@link \RsBusinessSql} table.
 * @param {string} uid User key. Primary key in {@link \PassportLoginSql} table.
 * @returns {Wl_Schedule_ScheduleDesign_ScheduleDesignModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */