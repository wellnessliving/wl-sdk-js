/**
 * Point to clock in/out by a staff member.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Staff_Load_LoadModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_staff";

  /**
   * Staff work information. See {@link rs_staff_load_check_work_trx()}.
   *
   * @get result
   * @put result
   * @type {{}}
   */
  this.a_work = [];

  /**
   * <tt>true</tt> if staff member has been clocked in; <tt>false</tt> if clocked out.
   *
   * @put result
   * @type {boolean}
   */
  this.is_start = undefined;

  /**
   * Whether staff member can manage staff clock in/out for other staff members.
   *
   * @get result
   * @type {boolean}
   */
  this.is_time_manage = false;

  /**
   * Business in which information about the staff load will be requested.
   * Primary key in {@link \RsBusinessSql} table.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Location primary key.
   * Primary key in {@link \RsLocationSql} table.
   *
   * @put post
   * @type {string}
   */
  this.k_location = "0";

  /**
   * Staff member primary key.
   * Primary key in {@link \RsStaffSql} table.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_staff = "0";

  /**
   * Message, when the work has been started.
   *
   * @get result
   * @type {string}
   */
  this.text_work_start = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Staff_Load_LoadModel);

/**
 * @inheritDoc
 */
Wl_Staff_Load_LoadModel.prototype.config=function()
{
  return {"a_field": {"a_work": {"get": {"result": true},"put": {"result": true}},"is_start": {"put": {"result": true}},"is_time_manage": {"get": {"result": true}},"k_business": {"get": {"get": true},"put": {"get": true}},"k_location": {"put": {"post": true}},"k_staff": {"get": {"get": true},"put": {"get": true}},"text_work_start": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Wl_Staff_Load_LoadModel.instanceGet
 * @param {string} k_business Business in which information about the staff load will be requested. Primary key in {@link \RsBusinessSql} table.
 * @param {string} k_staff Staff member primary key. Primary key in {@link \RsStaffSql} table.
 * @returns {Wl_Staff_Load_LoadModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */