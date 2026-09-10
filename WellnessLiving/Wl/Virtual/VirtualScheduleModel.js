/**
 * Schedules or joins a virtual meeting for an appointment or a class session.
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
  this.dtu_class_period = "";

  /**
   * Number of seconds after which need to repeat request.
   *
   * `null` if request should not be repeated.
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
  this.k_appointment = "";

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
  this.k_class_period = "";

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
  return {"a_field":{"dtu_class_period":{"post":{"post":true}},"i_delay":{"post":{"result":true}},"k_appointment":{"post":{"post":true}},"k_business":{"post":{"result":true}},"k_class_period":{"post":{"post":true}},"url_redirect":{"post":{"result":true}}}};
};

/**
 * Schedules or joins a virtual meeting for an appointment or a class session.
 *
 * Validates that the requested appointment or class period exists, has not already passed,
 * and that the current user is allowed to view or attend it. When the session start is
 * within the create-ahead window, creates the virtual meeting (or reuses one already created
 * by a concurrent request) and returns the redirect URL to join it. Otherwise returns the
 * number of seconds to wait before the meeting can be created.
 *
 * @function
 * @name Wl_Virtual_VirtualScheduleModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
