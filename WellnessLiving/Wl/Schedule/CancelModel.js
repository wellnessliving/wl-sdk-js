/**
 * Api is for canceling the sessions.
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
   * Date of the schedule.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.dt_date = "";

  /**
   * <tt>true</tt> if API is being used from backend, <tt>false</tt> otherwise.
   *
   * @get get
   * @post get
   * @type {boolean}
   */
  this.is_backend = false;

  /**
   * Appointment ID.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_appointment = "0";

  /**
   * Key of the business within which the action is performed.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Class period key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_class_period = "0";

  /**
   * User key.
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
 * @param {string} dt_date Date of the schedule.
 * @param {boolean} is_backend <tt>true</tt> if API is being used from backend, <tt>false</tt> otherwise.
 * @param {string} k_appointment Appointment ID.
 * @param {string} k_class_period Class period key.
 * @param {string} uid User key.
 * @returns {Wl_Schedule_CancelModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */