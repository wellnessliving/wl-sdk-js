/**
 * Model to add available/unavailable working time.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Staff_Schedule_Add_AddModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of working days, constants from {@link \ADateWeekSid}.
   *
   * @post post
   * @type {number[]}
   */
  this.a_day = [];

  /**
   * Services list, each element is a primary key in {@link \RsServiceSql}.
   *
   * Empty list means all services.
   * <tt>null</tt> means not set.
   *
   * @post post
   * @type {string[]}
   */
  this.a_service = [];

  /**
   * End date of working period.
   *
   * @post post
   * @type {string}
   */
  this.dt_end_date = "";

  /**
   * End time.
   *
   * @post post
   * @type {string}
   */
  this.dt_end_time = "";

  /**
   * Start date of working period.
   *
   * @post post
   * @type {string}
   */
  this.dt_start_date = "";

  /**
   * Start time.
   *
   * @post post
   * @type {string}
   */
  this.dt_start_time = "";

  /**
   * Count of the periods which specified in {@link AddApi::$id_repeat}.
   *
   * If this field is absent default value {@link \Wl\Classes\Period\Period::REPEAT_COUNT} is used.
   *
   * @post post
   * @type {number}
   */
  this.i_repeat = 0;

  /**
   * Measuring unit of {@link AddApi::$i_repeat}. One of {@link ADurationSid} constants.
   *
   * If this field is absent default value {@link \Wl\Classes\Period\Period::REPEAT_PERIOD} is used.
   *
   * @post post
   * @type {number}
   */
  this.id_repeat = 0;

  /**
   * Whether model works with available working time.
   *
   * <tt>true</tt> means available working time.
   * <tt>false</tt> means unavailable working time.
   *
   * @post post
   * @type {boolean}
   */
  this.is_break = false;

  /**
   * Whether period is eternal.
   *
   * <tt>true</tt> means on going.
   * <tt>false</tt> means end date will be used.
   *
   * @post post
   * @type {boolean}
   */
  this.is_eternal = false;

  /**
   * Whether all services selected on form.
   *
   * @post post
   * @type {boolean}
   */
  this.is_service_all = false;

  /**
   * Business key. Primary key in {@link RsBusinessSql} table.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Location key. Primary key in {@link RsLocationSql} table.
   *
   * @post post
   * @type {string}
   */
  this.k_location = "";

  /**
   * Staff key. Primary key in {@link RsStaffSql} table.
   *
   * @post post
   * @type {string}
   */
  this.k_staff = "";

  /**
   * Note to working interval.
   *
   * @post post
   * @type {string}
   */
  this.text_note = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Staff_Schedule_Add_AddModel);

/**
 * @inheritDoc
 */
Wl_Staff_Schedule_Add_AddModel.prototype.config=function()
{
  return {"a_field": {"a_day": {"post": {"post": true}},"a_service": {"post": {"post": true}},"dt_end_date": {"post": {"post": true}},"dt_end_time": {"post": {"post": true}},"dt_start_date": {"post": {"post": true}},"dt_start_time": {"post": {"post": true}},"i_repeat": {"post": {"post": true}},"id_repeat": {"post": {"post": true}},"is_break": {"post": {"post": true}},"is_eternal": {"post": {"post": true}},"is_service_all": {"post": {"post": true}},"k_business": {"post": {"get": true}},"k_location": {"post": {"post": true}},"k_staff": {"post": {"post": true}},"text_note": {"post": {"post": true}}}};
};