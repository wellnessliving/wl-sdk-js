/**
 * An endpoint that saves information about a watched video.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Video_Watch_WatchModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The current time in seconds the user is at in the video.
   *
   * @post post
   * @put post
   * @type {number}
   */
  this.i_current_time = undefined;

  /**
   * The duration in seconds the user has watched the video for.
   *
   * @put post
   * @type {number}
   */
  this.i_watched = undefined;

  /**
   * The source ID.
   *
   * @post post
   * @see Wl_Video_Watch_WatchSourceSid
   * @type {number}
   */
  this.id_source = undefined;

  /**
   * The business key.
   *
   * @post post
   * @put post
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * The video string key.
   *
   * @post post
   * @type {string}
   */
  this.k_video = undefined;

  /**
   * The video watch key.
   *
   * @post result
   * @put post
   * @type {string}
   */
  this.k_video_watch = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Video_Watch_WatchModel);

/**
 * @inheritDoc
 */
Wl_Video_Watch_WatchModel.prototype.config=function()
{
  return {"a_field": {"i_current_time": {"post": {"post": true},"put": {"post": true}},"i_watched": {"put": {"post": true}},"id_source": {"post": {"post": true}},"k_business": {"post": {"post": true},"put": {"post": true}},"k_video": {"post": {"post": true}},"k_video_watch": {"post": {"result": true},"put": {"post": true}}}};
};