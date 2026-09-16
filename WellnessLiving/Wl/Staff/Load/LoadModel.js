/**
 * Checks if staff member is clocked in.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 * @deprecated Use {@link Wl_Staff_Load_Load74Model} instead. This class will be removed in future versions.
 */
function Wl_Staff_Load_LoadModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_staff";

  /**
   * @typedef {{}} Wl_Staff_Load_LoadModel_a_pay_rate_a_data
   * @property {string} f_cap Pay rate cap.
   * @property {string} f_cap_day Pay rate cap per day.
   * @property {string} f_rate Hourly rate.
   */

  /**
   * @typedef {{}} Wl_Staff_Load_LoadModel_a_pay_rate
   * @property {Wl_Staff_Load_LoadModel_a_pay_rate_a_data} a_data Custom data that depends on `id_staff_pay`.
   * @property {number} id_staff_pay Pay rate type, one of {@link RsStaffPaySid} constants.
   * @property {string} k_location Location key.  This is a location where pay rate can be used for a staff load. If empty then pay rate can be used in any location. Used only for pay rates with `id_staff_pay` {@link RsStaffPaySid} and `is_report`.
   * @property {string} k_staff_pay Pay rate key.
   * @property {string} s_title Name of the rate.
   */

  /**
   * Staff pay rates info.
   *
   * @get result
   * @type {Wl_Staff_Load_LoadModel_a_pay_rate}
   */
  this.a_pay_rate = undefined;

  /**
   * @typedef {{}} Wl_Staff_Load_LoadModel_a_work
   * @property {string} dt_start Date and time in UTC when the staff member clocked in.
   * @property {string} dtl_start Local date and time when the staff member clocked in.
   * @property {string} k_business Business key.
   * @property {?string} k_location Location key. `null` if the location could not be resolved for the work session.
   * @property {?string} k_staff_pay Pay rate key used for the work session.
   */

  /**
   * Staff work information.
   * Empty array if the staff member is currently clocked out.
   *
   * @get result
   * @put result
   * @type {Wl_Staff_Load_LoadModel_a_work}
   */
  this.a_work = undefined;

  /**
   * `true` if staff member has been clocked in; `false` if clocked out.
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
  this.is_time_manage = undefined;

  /**
   * Business in which information about the staff load will be requested.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Location primary key.
   *
   * @put post
   * @type {?string}
   */
  this.k_location = null;

  /**
   * Staff member primary key.
   *
   * @deprecated Use {@link Wl_Staff_Load_LoadModel.uid_staff} instead.
   * @get get
   * @put get
   * @type {string}
   */
  this.k_staff = "";

  /**
   * Pay rate identifier.
   *
   * @put post
   * @type {string}
   */
  this.k_staff_pay = "";

  /**
   * Message, when the work has been started.
   *
   * @get result
   * @type {string}
   */
  this.text_work_start = undefined;

  /**
   * User key.
   *
   * @get get
   * @put get
   * @type {string}
   */
  this.uid_staff = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Staff_Load_LoadModel);

/**
 * @inheritDoc
 */
Wl_Staff_Load_LoadModel.prototype.config=function()
{
  return {"a_field":{"a_pay_rate":{"get":{"result":true}},"a_work":{"get":{"result":true},"put":{"result":true}},"is_start":{"put":{"result":true}},"is_time_manage":{"get":{"result":true}},"k_business":{"get":{"get":true},"put":{"get":true}},"k_location":{"put":{"post":true}},"k_staff":{"get":{"get":true},"put":{"get":true}},"k_staff_pay":{"put":{"post":true}},"text_work_start":{"get":{"result":true}},"uid_staff":{"get":{"get":true},"put":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Staff_Load_LoadModel.instanceGet
 * @param {string} k_business Business in which information about the staff load will be requested.
 * @param {string} k_staff Staff member primary key.
 * @returns {Wl_Staff_Load_LoadModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Checks if staff member is clocked in.
 *
 * Resolves the staff identifier, checks access, and returns the current open clock-in record
 * for the staff member, if any, together with its resolved location and localized start time
 * and start message. Also returns the hourly pay rates available to the staff member.
 *
 * @function
 * @name Wl_Staff_Load_LoadModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Clocks staff member in (if he is clocked out) or out (if he is clocked in).
 *
 * When clocking out, closes the open work session, computes the pay rate to apply, records
 * the completed period in the staff load history and logs the change. When clocking in,
 * opens a new work session at the given location with the selected pay rate. Sets `is_start`
 * to reflect whether the staff member is now clocked in or out.
 *
 * @function
 * @name Wl_Staff_Load_LoadModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
