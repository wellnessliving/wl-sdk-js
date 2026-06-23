/**
 * Cancels session for the client.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Schedule_CancelModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,dt_date,is_backend,is_late_cancel,k_appointment,k_class_period,uid";

  /**
   * The date of the session in UTC.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.dt_date = "";

  /**
   * This will be `true` if the API is being used from the back end. Otherwise, this will be `false`.
   * Here, the back end refers to either a staff member or admin from the side of the business.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * `true` is late cancel, `false` reservation is not late cancel.
   * This is required to enable late cancel even if the user is staff.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.is_late_cancel = false;

  /**
   * The appointment key.
   * This will be `null` if not set yet or if a class or event is canceled.
   *
   * @get get
   * @post get
   * @type {?string}
   */
  this.k_appointment = null;

  /**
   * Key of the business within which the action is performed.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The class period key.
   * This will be `null` if not set yet or if an appointment is canceled.
   *
   * @get get
   * @post get
   * @type {?string}
   */
  this.k_class_period = null;

  /**
   * The user key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_CancelModel);

/**
 * @inheritDoc
 */
Wl_Schedule_CancelModel.prototype.config=function()
{
  return {"a_field":{"dt_date":{"get":{"get":true},"post":{"get":true}},"is_backend":{"get":{"get":true},"post":{"get":true}},"is_late_cancel":{"get":{"get":true},"post":{"get":true}},"k_appointment":{"get":{"get":true},"post":{"get":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_class_period":{"get":{"get":true},"post":{"get":true}},"uid":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Schedule_CancelModel.instanceGet
 * @param {string} k_business Key of the business within which the action is performed.
 * @param {string} dt_date The date of the session in UTC.
 * @param {boolean} is_backend This will be `true` if the API is being used from the back end. Otherwise, this will be `false`. Here, the back end refers to either a staff member or admin from the side of the business.
 * @param {boolean} is_late_cancel `true` is late cancel, `false` reservation is not late cancel. This is required to enable late cancel even if the user is staff.
 * @param {?string} k_appointment The appointment key. This will be `null` if not set yet or if a class or event is canceled.
 * @param {?string} k_class_period The class period key. This will be `null` if not set yet or if an appointment is canceled.
 * @param {string} uid The user key.
 * @returns {Wl_Schedule_CancelModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Cancels session for the client.
 *
 * Cancels the specified appointment or class period for the given user. Staff and admin users
 * may cancel on behalf of any client; regular clients may only cancel their own bookings if
 * the visit is still in a cancellable state. Clears cached schedule data after a successful
 * class period cancellation.
 *
 * @function
 * @name Wl_Schedule_CancelModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Cancels session for the client.
This method is an alias for partners using the API or SDK.
 *
 * Identical in behavior to `get()`; exists as a POST alias for partner
 * integrations that cannot issue GET requests.
 *
 * @function
 * @name Wl_Schedule_CancelModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
