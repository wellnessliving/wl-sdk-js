/**
 * Deletes the specified video level.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Video_Level_LevelModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * If `true`, confirmation is required to delete videos. Otherwise, this will be `false`.
   *
   * @delete get
   * @type {boolean}
   */
  this.is_delete_confirm = false;

  /**
   * The business key.
   *
   * @delete get
   * @post get
   * @put get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The video level key.
   *
   * @delete get
   * @post get,result
   * @put get
   * @type {string}
   */
  this.k_video_level = "";

  /**
   * The video level title.
   *
   * @post post
   * @put post
   * @type {string}
   */
  this.text_title = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Video_Level_LevelModel);

/**
 * @inheritDoc
 */
Wl_Video_Level_LevelModel.prototype.config=function()
{
  return {"a_field":{"is_delete_confirm":{"delete":{"get":true}},"k_business":{"delete":{"get":true},"post":{"get":true},"put":{"get":true}},"k_video_level":{"delete":{"get":true},"post":{"get":true,"result":true},"put":{"get":true}},"text_title":{"post":{"post":true},"put":{"post":true}}}};
};

/**
 * Deletes the specified video level.
 *
 * Permanently removes the video level and unassigns it from all videos. If any videos are
 * currently assigned to this level, a confirmation flag must be set; otherwise the API throws
 * a confirmation-required error so the caller can prompt the user before proceeding.
 *
 * @function
 * @name Wl_Video_Level_LevelModel.delete
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.delete()
 */

/**
 * Creates a new video level.
 *
 * Creates a difficulty level entry for the business video library. The new level is appended
 * at the end of the current sort order and can be reordered afterwards using
 * `put()`. Requires backend access with the video library management privilege.
 *
 * @function
 * @name Wl_Video_Level_LevelModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */

/**
 * Updates the specified video level.
 *
 * Renames an existing difficulty level in the business video library. Requires backend access
 * with the video library management privilege.
 *
 * @function
 * @name Wl_Video_Level_LevelModel.put
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.put()
 */
