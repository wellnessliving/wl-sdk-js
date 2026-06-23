/**
 * Records the start of a video watch session for the current user.
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
  this.i_current_time = 0;

  /**
   * The duration in seconds the user has watched the video for.
   *
   * @put post
   * @type {number}
   */
  this.i_watched = 0;

  /**
   * List sources of the view video.
   *
   * Last used ID: 4
   *
   * Values:
   * - 1 (`APP`): Video watched from application.
   * - 2 (`DIRECT_URL`): Video watched from direct URL.
   * - 3 (`FRONTEND`): Video watched from frontend.
   * - 4 (`UNDEFINED`): Source of watched is undefined.
   *
   *   Used for old videos.
   *
   * @post post
   * @see Wl_Video_Watch_WatchSourceSid
   * @type {number}
   */
  this.id_source = 0;

  /**
   * The business key.
   *
   * @post post
   * @put post
   * @type {string}
   */
  this.k_business = "";

  /**
   * The video string key:
   * * [Deprecated] String key in old format. 
   * * String key in new format.
   *
   * @post post
   * @type {string}
   */
  this.k_video = "";

  /**
   * The video watch key.
   *
   * @post result
   * @put post
   * @type {string}
   */
  this.k_video_watch = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Video_Watch_WatchModel);

/**
 * @inheritDoc
 */
Wl_Video_Watch_WatchModel.prototype.config=function()
{
  return {"a_field":{"i_current_time":{"post":{"post":true},"put":{"post":true}},"i_watched":{"put":{"post":true}},"id_source":{"post":{"post":true}},"k_business":{"post":{"post":true},"put":{"post":true}},"k_video":{"post":{"post":true}},"k_video_watch":{"post":{"result":true},"put":{"post":true}}}};
};

/**
 * Records the start of a video watch session for the current user.
 *
 * Creates a new watch record for the user and video, verifying that the user has access to
 * the video under their current membership. Returns the watch key that the client must use
 * for subsequent progress updates via `put()`. Admin users are silently
 * skipped - no record is created for them.
 *
 * @function
 * @name Wl_Video_Watch_WatchModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */

/**
 * Updates the watch progress (current position and total watched time) for an existing watch record.
 *
 * Advances the stored playback position and accumulated watch time for the given watch record.
 * The total watched time can only increase; updates that report a smaller value than what is
 * already stored are silently ignored to handle out-of-order requests.
 *
 * @function
 * @name Wl_Video_Watch_WatchModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
