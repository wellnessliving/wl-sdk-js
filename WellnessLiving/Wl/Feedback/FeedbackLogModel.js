/**
 * Logs feedback from the mobile application.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Feedback_FeedbackLogModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Screen height in pixels.
   *
   * @post post
   * @type {number}
   */
  this.i_screen_height = 0;

  /**
   * Screen width in pixels.
   *
   * @post post
   * @type {number}
   */
  this.i_screen_width = 0;

  /**
   * The source of the action. A constant of {@link Wl_Mode_ModeSid}.
   *
   * Is optional. The default value is the current mode.
   *
   * @post post
   * @see Wl_Mode_ModeSid
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * `true` of a user is satisfied by application; `false` otherwise.
   *
   * @post post
   * @type {boolean}
   */
  this.is_satisfied = false;

  /**
   * Business key.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * Location key.
   *
   * @post post
   * @type {string}
   */
  this.k_location = "";

  /**
   * Device model.
   *
   * @post post
   * @type {string}
   */
  this.text_device_model = "";

  /**
   * Device operating system.
   *
   * @post post
   * @type {string}
   */
  this.text_device_os = "";

  /**
   * The text that shows up when the user submits feedback.
   *
   * @post post
   * @type {string}
   */
  this.text_prompt_shown = "";

  /**
   * Application version.
   *
   * @post post
   * @type {string}
   */
  this.text_version = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Feedback_FeedbackLogModel);

/**
 * @inheritDoc
 */
Wl_Feedback_FeedbackLogModel.prototype.config=function()
{
  return {"a_field":{"i_screen_height":{"post":{"post":true}},"i_screen_width":{"post":{"post":true}},"id_mode":{"post":{"post":true}},"is_satisfied":{"post":{"post":true}},"k_business":{"post":{"post":true}},"k_location":{"post":{"post":true}},"text_device_model":{"post":{"post":true}},"text_device_os":{"post":{"post":true}},"text_prompt_shown":{"post":{"post":true}},"text_version":{"post":{"post":true}}}};
};

/**
 * Logs feedback from the mobile application.
 *
 * Validates the input data, then writes a log entry recording whether the user is satisfied with the
 * action, together with the location, device, and application details supplied by the mobile application.
 *
 * @function
 * @name Wl_Feedback_FeedbackLogModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */
