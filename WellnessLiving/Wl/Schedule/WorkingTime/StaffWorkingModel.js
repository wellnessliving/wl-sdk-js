/**
 * Api for staff working time.
 *
 * This model is generated automatically based on API.
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
  this._s_key = "k_staff,k_location,k_business,k_service,dl_start,dl_end";

  /**
   * Staff period.
   *
   * @get result
   * @type {{}}
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
   * Primary key in {@link \RsBusinessSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Location to show available appointment booking schedule.
   *
   * Primary key in {@link \RsLocationSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_location = "0";

  /**
   * Service primary key in {@link \RsServiceSql} table.
   *
   * @get get
   * @type {string}
   */
  this.k_service = "0";

  /**
   * Staff Key to show what days are available for appointment booking.
   *
   * Primary key in {@link \RsStaffSql} table.
   *
   * @get get
   * @type {?string}
   */
  this.k_staff = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_WorkingTime_StaffWorkingModel);

/**
 * @inheritDoc
 */
Wl_Schedule_WorkingTime_StaffWorkingModel.prototype.config=function()
{
  return {"a_field": {"a_staff_period": {"get": {"result": true}},"dl_end": {"get": {"get": true}},"dl_start": {"get": {"get": true}},"k_business": {"get": {"get": true}},"k_location": {"get": {"get": true}},"k_service": {"get": {"get": true}},"k_staff": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Schedule_WorkingTime_StaffWorkingModel.instanceGet
 * @param {?string} k_staff Staff Key to show what days are available for appointment booking. Primary key in {@link \RsStaffSql} table.
 * @param {string} k_location Location to show available appointment booking schedule. Primary key in {@link \RsLocationSql} table.
 * @param {string} k_business Business key. Primary key in {@link \RsBusinessSql} table.
 * @param {string} k_service Service primary key in {@link \RsServiceSql} table.
 * @param {string} dl_start Start date of the staff working.
 * @param {string} dl_end End date of the staff working.
 * @returns {Wl_Schedule_WorkingTime_StaffWorkingModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */