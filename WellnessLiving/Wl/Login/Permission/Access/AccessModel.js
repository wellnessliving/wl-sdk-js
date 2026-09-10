/**
 * Checks whether the current user is allowed to reserve the specified class, service, or appointment.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Login_Permission_Access_AccessModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Login_Permission_Access_AccessModel_a_access
   * @property {string} k_class Class key.
   * @property {string} k_location Location key, where class or service occurs.
   * @property {string} k_login_promotion Login promotion key if need to check access for specific promotion.
   * @property {string} k_resource Resource key.
   * @property {string} k_service Service key.
   * @property {string} s_deny Login permission error code.
   */

  /**
   * Schedule access information. Has structure:
   *
   * @get result
   * @type {Wl_Login_Permission_Access_AccessModel_a_access}
   */
  this.a_access = undefined;

  /**
   * @typedef {{}} Wl_Login_Permission_Access_AccessModel_a_schedule
   * @property {string} k_class Class key.
   * @property {string} k_location Location key, where class or service occurs.
   * @property {string} k_login_promotion Login promotion key if need to check access for specific promotion.
   * @property {string} k_resource Resource key.
   * @property {string} k_service Service key.
   */

  /**
   * Schedule item information. Has structure:
   *
   * @get get
   * @type {Wl_Login_Permission_Access_AccessModel_a_schedule}
   */
  this.a_schedule = undefined;

  /**
   * @typedef {{}} Wl_Login_Permission_Access_AccessModel_a_time
   * @property {number} i_hour Number of hours.
   * @property {number} i_minute Number of minutes.
   * @property {boolean} is_am Whether time in AM or PM.
   */

  /**
   * Time when class or service occurs:
   *
   * @get get
   * @type {Wl_Login_Permission_Access_AccessModel_a_time}
   */
  this.a_time = undefined;

  /**
   * Date when class or service occurs.
   *
   * @get get
   * @type {string}
   */
  this.dt_date = "";

  /**
   * Whether user is traveller in current business.
   *
   * @get result
   * @type {boolean}
   */
  this.is_traveller = undefined;

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

WlSdk_ModelAbstract.extend(Wl_Login_Permission_Access_AccessModel);

/**
 * @inheritDoc
 */
Wl_Login_Permission_Access_AccessModel.prototype.config=function()
{
  return {"a_field":{"a_access":{"get":{"result":true}},"a_schedule":{"get":{"get":true}},"a_time":{"get":{"get":true}},"dt_date":{"get":{"get":true}},"is_traveller":{"get":{"result":true}},"k_business":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * Checks whether the current user is allowed to reserve the specified class, service, or appointment.
 *
 * Validates the schedule, date, and time input, then checks login permission for the requested
 * reservation at the given date and time using the schedule's location timezone. Also determines
 * whether the current user is a franchise traveller for the business.
 *
 * @function
 * @name Wl_Login_Permission_Access_AccessModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */
