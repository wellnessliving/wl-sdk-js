/**
 * An endpoint that cancels either an appointment, class, or event session for the client.
 *
 * This model is generated automatically based on API.
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
  this._s_key = "k_business,dt_date,is_backend,k_appointment,k_class_period,uid";

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
  this.k_business = undefined;

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
  this.uid = "0";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Schedule_CancelModel);

/**
 * @inheritDoc
 */
Wl_Schedule_CancelModel.prototype.config=function()
{
  return {"a_field": {"dt_date": {"get": {"get": true},"post": {"get": true}},"is_backend": {"get": {"get": true},"post": {"get": true}},"k_appointment": {"get": {"get": true},"post": {"get": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_class_period": {"get": {"get": true},"post": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Schedule_CancelModel.instanceGet
 * @param {string} k_business Key of the business within which the action is performed.
 * @param {string} dt_date The date of the session in UTC.
 * @param {boolean} is_backend This will be `true` if the API is being used from the back end. Otherwise, this will be `false`. Here, the back end refers to either a staff member or admin from the side of the business.
 * @param {?string} k_appointment The appointment key. This will be `null` if not set yet or if a class or event is canceled.
 * @param {?string} k_class_period The class period key. This will be `null` if not set yet or if an appointment is canceled.
 * @param {string} uid The user key.
 * @returns {Wl_Schedule_CancelModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */