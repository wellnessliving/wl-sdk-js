/**
 * Schedules new virtual meeting.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Virtual_VirtualScheduleModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Class schedule session date.
   *
   * @post post
   * @type {string}
   */
  this.dtu_class_period = undefined;

  /**
   * Number of seconds after which need to repeat request.
   *
   * <tt>null</tt> if request should not be repeated.
   *
   * @post result
   * @type {?number}
   */
  this.i_delay = null;

  /**
   * Appointment key.
   *
   * @post post
   * @type {string}
   */
  this.k_appointment = undefined;

  /**
   * Business key.
   *
   * @post result
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * Class schedule key.
   *
   * @post post
   * @type {string}
   */
  this.k_class_period = undefined;

  /**
   * Link to created meeting.
   *
   * @post result
   * @type {string}
   */
  this.url_redirect = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Virtual_VirtualScheduleModel);

/**
 * @inheritDoc
 */
Wl_Virtual_VirtualScheduleModel.prototype.config=function()
{
  return {"a_field": {"dtu_class_period": {"post": {"post": true}},"i_delay": {"post": {"result": true}},"k_appointment": {"post": {"post": true}},"k_business": {"post": {"result": true}},"k_class_period": {"post": {"post": true}},"url_redirect": {"post": {"result": true}}}};
};